const path = require('path');

module.exports = {
  count: 1000,
  basePath: path.join(__dirname, '../packages/css-blocks-app/app'),

  proliferations: [
    {
      fileName: 'my-component-%ID%.hbs',
      filePath: 'templates/components',
      content: '<li block:scope block:inverted={{@invert}}>%ID%</li>'
    },
    {
      fileName: 'my-component-%ID%.block.scss',
      filePath: 'styles/components',
      content: function(id) {
        const c = Math.floor(Math.random()*16777215).toString(16).padStart('6', 0);
        let content = [
          `$the-color: #${c};`,
          ':scope { color: $the-color; }',
          `:scope:after { content: '${id}'; background: $the-color; color: #fff; }`,
          ':scope[inverted] { background: $the-color; color: #fff; }',
          ':scope[inverted]:after { background: #000; color: $the-color; }',
        ];
        return content.join('\n');
      }
    }
  ],

  consumptions: [
    {
      fileName: 'index.hbs',
      filePath: 'templates/',
      content: function (id) {
        return `{{my-component-${id}}}\n{{my-component-${id} invert=true}}`
      },
      prefix: '<ul>',
      suffix: '</ul>'
    }
  ]
};
