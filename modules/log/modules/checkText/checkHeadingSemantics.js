export function checkHeadingSemantics(document, filePath, errors) {
  const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
  let previousLevel = 0;
	const h1Check = document.querySelector("h1");

	// Check if <h1> is present as the document title and <h2> follows
	if (headings.length && h1Check && headings[0].tagName !== "H1") {
		if (!errors[filePath]) {
			errors[filePath] = [];
		}
		errors[filePath].push(`Invalid heading structure (document must start with an <h1> heading).`);
	} else if (!headings.length) {
		if (!errors[filePath]) {
			errors[filePath] = [];
		}
		errors[filePath].push(`Invalid heading structure (no headings found).`);
	} else if (headings.length && !h1Check) {
		if (!errors[filePath]) {
			errors[filePath] = [];
		}
		errors[filePath].push(`Invalid heading structure (no <h1> heading found).`);
	}

	// Loop through each heading and check for errors
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName[1]);

    // Check if heading levels skip (e.g., <h2> followed directly by <h4>)
    if (level > previousLevel + 1 && previousLevel !== 0) {
			if (!errors[filePath]) {
        errors[filePath] = [];
      }
				errors[filePath].push(
					`Invalid heading structure (<${heading.tagName.toLowerCase()}> found after <h${previousLevel}>).`
				);
    }

    // Update previousLevel to current heading level
    previousLevel = level;
  });
}
