/**
 * @file This barrel file not only exports all check functions but also provides
 * an orchestrator to run them. This is the single source of truth for all checks.
 * When adding a new check, import it here and add it to the appropriate array.
 */

// Import all check functions
import { checkContentBody } from "./checkContentBody.js";
import { checkHead } from "./checkHead.js";
import { checkDeprecated } from "./checkDeprecated.js";
import { checkHeader } from "./checkHeader.js";
import { checkFirstColumn } from "./checkFirstColumn.js";
import { checkMedia } from "./checkMedia.js";
import { checkIframeOnlyPages } from "./checkIframeOnlyPages.js";
import { checkIframeTitles } from "./checkMedia/checkIframeTitles.js";
import { checkText } from "./checkText.js";
import { rules } from "../../config/rules.js";

// --- Grouped checks for orchestration ---

// These checks run for pages that ONLY contain iframes.
const iframeOnlyPageChecks = [
  checkIframeTitles,
];

// These checks run for all "standard" pages.
const standardPageChecks = [
  // Note: checkHead is handled as a special case below.
  checkHeader,
  checkFirstColumn,
  checkContentBody,
  checkDeprecated,
  checkMedia,
  checkText,
];

/**
 * Runs the appropriate checks on a given document.
 * This function encapsulates the logic for deciding which checks to run
 * based on the page content (e.g., if it's an iframe-only page).
 *
 * To add a new standard check, import it and add it to the `standardPageChecks` array above.
 *
 * @param {object} context - The context for running checks.
 * @param {Document} context.document - The JSDOM document.
 * @param {string} context.filePath - The path to the file being checked.
 * @param {object} context.errors - The error-collecting object.
 * @param {string} [context.html] - The raw HTML content, for checks that need it.
 */
export function runAllChecks({ document, filePath, errors, html }) {
  if (checkIframeOnlyPages(document)) {
    if (rules.log.checkIframeOnlyPages) {
      for (const check of iframeOnlyPageChecks) {
        check(document, filePath, errors);
      }
    }
  } else {
    // `checkHead` is special as it needs the raw html content.
    if (rules.log.checkHead) {
      checkHead(document, filePath, errors, html);
    }

    // Run all other standard checks.
    for (const check of standardPageChecks) {
      if (check === checkHeader && !rules.log.checkHeader) continue;
      if (check === checkFirstColumn && !rules.log.checkFirstColumn) continue;
      if (check === checkContentBody && !rules.log.checkContentBody) continue;
      if (check === checkDeprecated && !rules.log.checkDeprecated) continue;
      if (check === checkMedia && !rules.log.checkMedia) continue;
      if (check === checkText && !rules.log.checkText) continue;
      
      check(document, filePath, errors);
    }
  }
}

// For convenience, also export all checks individually.
// This allows for targeted use or testing outside the orchestrator.
export * from "./checkContentBody.js";
export * from "./checkHead.js";
export * from "./checkDeprecated.js";
export * from "./checkHeader.js";
export * from "./checkFirstColumn.js";
export * from "./checkMedia.js";
export * from "./checkIframeOnlyPages.js";
export * from "./checkMedia/checkIframeTitles.js";
export * from "./checkText.js";