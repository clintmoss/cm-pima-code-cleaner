import { checkNestedElements } from "./modules/checkContentBody/checkNestedElements.js";
import { checkValidParent } from "./modules/checkContentBody/checkValidParent.js";
import { config, errorMessages } from '../../config/config.js';
import { rules } from "../../config/rules.js";

export function checkContentBody(document, filePath, errors) {
  const nestedElements = config.elementsShouldNotBeNested;
  const contentBodies = Array.from(document.querySelectorAll(config.contentBodySelector));
  const validParents = config.contentSections;

  if (!errors[filePath]) {
    errors[filePath] = [];
  }

  contentBodies.forEach(contentBody => {
    if (rules.log.checkContentBody.checkNestedElements) {
      checkNestedElements(contentBody, nestedElements, errors, filePath);
    }

    if (rules.log.checkContentBody.checkValidParent && !checkValidParent(contentBody, validParents)) {
      errors[filePath].push({
				message: errorMessages.contentBodyNotValidErrorMessage,
				node: contentBody,
			});
    }
  });
}
