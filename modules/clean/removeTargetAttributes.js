/**
 * @file Defines a Gulp transformation to remove `target` attributes (e.g., `target="_self"`)
 * from any element where they are found.
 */
import { domTransform } from "../hooks/domTransform.js";
import { config } from "../../config.js";

export function removeTargetAttributes() {
  return domTransform((document) => {
    const elements = document.querySelectorAll(config.targetSelectors);
    elements.forEach((el) => el.removeAttribute(config.targetAttributeToRemove));
  });
}
