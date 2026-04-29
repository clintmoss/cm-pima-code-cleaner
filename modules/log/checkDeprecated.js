import { checkDeprecatedClass } from "./modules/checkDeprecated/checkDeprecatedClass.js";
import { checkDeprecatedId } from "./modules/checkDeprecated/checkDeprecatedId.js";
import { checkScriptTagsLocation } from "./modules/checkDeprecated/checkJsScripts.js";
import { rules } from "../../config/rules.js";

export function checkDeprecated(document, filePath, errors) {
  if (rules.log.checkDeprecated.checkDeprecatedClass) {
    checkDeprecatedClass(document, filePath, errors);
  }
  if (rules.log.checkDeprecated.checkDeprecatedId) {
    checkDeprecatedId(document, filePath, errors);
  }
  if (rules.log.checkDeprecated.checkScriptTagsLocation) {
    checkScriptTagsLocation(document, filePath, errors);
  }
}
