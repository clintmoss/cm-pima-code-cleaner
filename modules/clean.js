// gulpfile.js
import gulp from "gulp";
import beautify from "gulp-jsbeautifier";
import { cleanTextElements } from "./clean/cleanTextElements.js";
import { cleanElementAttributes } from "./clean/cleanElementAttributes.js";
import { cleanTableAttributes } from "./clean/cleanTableAttributes.js";
import { removeEmptyTags } from "./clean/removeEmptyTags.js";
import { removeTargetAttributes } from "./clean/removeTargetAttributes.js";
import { removeRolePresentation } from "./clean/removeRolePresentation.js";
import { matchTitleToH1 } from "./clean/matchTitleToH1.js";
import { cleanImageAttributes } from "./clean/cleanImageAttributes.js";
import { removeContentBodyInnerTags } from "./clean/removeContentBodyInnerTags.js";
import { removeJQueryScript } from "./clean/removeJQueryScript.js";
import { rules } from "../config/rules.js";

export function clean() {
  // This task is triggered by `npm run clean` from server/index.js.
  // It should ONLY process HTML files, as the server has already copied all other files (like images).
  gulp.task("clean-copy", () => {
    let pipeline = gulp.src("_input/**/*.{html,htm}");

    if (rules.clean.cleanTextElements) {
      pipeline = pipeline.pipe(cleanTextElements());
    }
    if (rules.clean.cleanElementAttributes) {
      pipeline = pipeline.pipe(cleanElementAttributes());
    }
    if (rules.clean.cleanTableAttributes) {
      pipeline = pipeline.pipe(cleanTableAttributes());
    }
    if (rules.clean.removeContentBodyInnerTags) {
      pipeline = pipeline.pipe(removeContentBodyInnerTags());
    }
    if (rules.clean.removeEmptyTags) {
      pipeline = pipeline.pipe(removeEmptyTags());
    }
    if (rules.clean.removeJQueryScript) {
      pipeline = pipeline.pipe(removeJQueryScript());
    }
    if (rules.clean.removeTargetAttributes) {
      pipeline = pipeline.pipe(removeTargetAttributes());
    }
    if (rules.clean.removeRolePresentation) {
      pipeline = pipeline.pipe(removeRolePresentation());
    }
    if (rules.clean.matchTitleToH1) {
      pipeline = pipeline.pipe(matchTitleToH1());
    }
    if (rules.clean.cleanImageAttributes) {
      pipeline = pipeline.pipe(cleanImageAttributes());
    }

    return pipeline
      .pipe(beautify({ indent_size: 2, wrap_attributes: false, extra_liners: [] }))
      .pipe(beautify.reporter())
      .pipe(gulp.dest("_input"));
  });
}