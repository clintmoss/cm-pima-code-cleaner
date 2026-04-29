import { checkHeadingSemantics } from './modules/checkText/checkHeadingSemantics.js';
import { checkTables } from './modules/checkText/checkTables.js';
import { checkTitleAndH1 } from './modules/checkText/checkTitleAndH1.js';
import { checkSingleH1 } from './modules/checkText/checkSingleH1.js';
import { rules } from "../../config/rules.js";

export function checkText(document, filePath, errors) {
	if (rules.log.checkText.checkHeadingSemantics) {
		checkHeadingSemantics(document, filePath, errors);
	}
	if (rules.log.checkText.checkTables) {
		checkTables(document, filePath, errors);
	}
	if (rules.log.checkText.checkTitleAndH1) {
		checkTitleAndH1(document, filePath, errors);
	}
	if (rules.log.checkText.checkSingleH1) {
		checkSingleH1(document, filePath, errors);
	}
}
