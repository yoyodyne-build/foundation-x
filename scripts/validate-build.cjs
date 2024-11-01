const fs = require('fs');

/**
 * Checks the build artifacts in the `dist` directory to ensure all necessary files are present.
 *
 * @returns {Object} An object containing a boolean `invalid` indicating if any required files are missing,
 * and an array `errors` with the corresponding error messages.
 */
function checkBuild() {
  const errors = [];

  if (!fs.existsSync('dist/foundation-x.css')) {
    errors.push(
      '⚠️ Missing "foundation-x.css": be sure to run "build:css" after "build:pkg"',
    );
  }

  if (
    !fs.existsSync('dist/index.cjs') ||
    !fs.existsSync('dist/index.cjs.map')
  ) {
    errors.push(
      '⚠️ Missing "index.cjs": be sure to run "npm run build" or "npm run build:pkg"',
    );
  }

  if (!fs.existsSync('dist/index.d.cts')) {
    errors.push(
      '⚠️ Missing types "index.d.cts": be sure to run "npm run build" or "npm run build:pkg"',
    );
  }

  if (!fs.existsSync('dist/index.js') || !fs.existsSync('dist/index.js.map')) {
    errors.push(
      '⚠️ Missing "index.js": be sure to run "npm run build" or "npm run build:pkg"',
    );
  }

  if (!fs.existsSync('dist/index.d.ts')) {
    errors.push(
      '⚠️ Missing types "index.d.ts": be sure to run "npm run build" or "npm run build:pkg"',
    );
  }

  return { invalid: !!errors.length, errors };
}

console.log('📁📁📁 Validating build artifacts 📁📁📁\n');
const { invalid, errors } = checkBuild();

if (invalid) {
  console.error(errors.join('\n'));
  process.exit(1);
} else {
  console.log('Assets are valid and ready for publishing 👍');
  process.exit(0);
}
