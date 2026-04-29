import { checkIframeTitles } from "./checkMedia/checkIframeTitles.js";
import { checkIframes } from "./checkMedia/checkIframes.js";
import { checkImgAttributes } from "./checkMedia/checkImgAttributes.js";
import { checkImgParent } from "./checkMedia/checkImgParent.js";
import { rules } from "../../config/rules.js";


export const checkMedia = (document, filePath, errors) => {
	if (rules.log.checkMedia.checkIframeTitles) {
		checkIframeTitles(document, filePath, errors);
	}
	if (rules.log.checkMedia.checkIframes) {
		checkIframes(document, filePath, errors);
	}
	if (rules.log.checkMedia.checkImgAttributes) {
		checkImgAttributes(document, filePath, errors);
	}
	if (rules.log.checkMedia.checkImgParent) {
		checkImgParent(document, filePath, errors);
	}
}