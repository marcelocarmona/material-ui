import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./snackbars${props.lang}.md`)}
      demos={{
        'pages/demos/snackbars/SimpleSnackbar.js': {
          js: require('docs/src/pages/demos/snackbars/SimpleSnackbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/SimpleSnackbar'), 'utf8')
`,
        },
        'pages/demos/snackbars/LongTextSnackbar.js': {
          js: require('docs/src/pages/demos/snackbars/LongTextSnackbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/LongTextSnackbar'), 'utf8')
`,
        },
        'pages/demos/snackbars/PositionedSnackbar.js': {
          js: require('docs/src/pages/demos/snackbars/PositionedSnackbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/PositionedSnackbar'), 'utf8')
`,
        },
        'pages/demos/snackbars/DirectionSnackbar.js': {
          js: require('docs/src/pages/demos/snackbars/DirectionSnackbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/DirectionSnackbar'), 'utf8')
`,
        },
        'pages/demos/snackbars/FadeSnackbar.js': {
          js: require('docs/src/pages/demos/snackbars/FadeSnackbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/FadeSnackbar'), 'utf8')
`,
        },
        'pages/demos/snackbars/FabIntegrationSnackbar.js': {
          js: require('docs/src/pages/demos/snackbars/FabIntegrationSnackbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/FabIntegrationSnackbar'), 'utf8')
`,
        },
        'pages/demos/snackbars/ConsecutiveSnackbars.js': {
          js: require('docs/src/pages/demos/snackbars/ConsecutiveSnackbars').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/ConsecutiveSnackbars'), 'utf8')
`,
        },
        'pages/demos/snackbars/CustomizedSnackbars.js': {
          js: require('docs/src/pages/demos/snackbars/CustomizedSnackbars').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/CustomizedSnackbars'), 'utf8')
`,
        },
        'pages/demos/snackbars/IntegrationNotistack.js': {
          js: require('docs/src/pages/demos/snackbars/IntegrationNotistack').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/snackbars/IntegrationNotistack'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
