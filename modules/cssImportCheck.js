import gulp from 'gulp';
import path from 'path';

export function checkCSSImports() {

	let errors = {}; 
	
	// Search through the input folder
  return gulp.src("_input/**/*.css") 
    .on('data', function (file) {
      if (file.isBuffer()) {
        const filePath = path.relative(process.cwd(), file.path);
        const content = file.contents.toString();
        const hasImport = /@import/.test(content);
				// Check if the file has an import and if it has an allowed comment
        const hasAllowedComment = /\/\*.*import-allowed.*\*\//s.test(content);

        // Log whether the file has an error or not
        if (hasImport && !hasAllowedComment) {
          if (!errors[file.path]) {
            errors[file.path] = [];
          }
          errors[file.path].push(
            `@import found but missing 'import-allowed' comment in file: ${filePath}`
          );
        } 
      }
    })
};

// Register the task with Gulp
gulp.task('check-css-imports', checkCSSImports);
