const path = require('path');

module.exports = {
  count: 1000,
  basePath: path.join(__dirname, '../packages/css-modules-app/app'),

  proliferations: [
    {
      fileName: 'my-component-%ID%.hbs',
      filePath: 'templates/components',
      content: '<li local-class="my-class {{if @invert "inverted"}}">%ID%</li>'
    },
    {
      fileName: 'my-component-%ID%.scss',
      filePath: 'styles/components',
      content: function(id) {
        const c = Math.floor(Math.random()*16777215).toString(16).padStart('6', 0);
        let content = [
          `$the-color: #${c};`,
          '.my-class { color: $the-color; }',
          `.my-class:after { content: '${id}'; background: $the-color; color: #fff; }`,
          '.my-class.inverted { background: $the-color; color: #fff; }',
          '.my-class.inverted:after { background: #000; color: $the-color; }',
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
