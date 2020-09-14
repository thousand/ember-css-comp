const path = require('path');

module.exports = {
  count: 1000,
  basePath: path.join(__dirname, '../packages/plain-sass-app/app'),

  proliferations: [
    {
      fileName: 'my-component-%ID%.hbs',
      filePath: 'templates/components',
      content: function (id) {
        return `<li class="my-class-${id} {{if @invert "my-class-${id}__inverted"}}">${id}</li>`
      },
    },
    {
      fileName: '_my-component-%ID%.scss',
      filePath: 'styles/components',
      content: function(id) {
        const c = Math.floor(Math.random()*16777215).toString(16).padStart('6', 0);
        let content = [
          `$the-color: #${c};`,
          `.my-class-${id} { color: $the-color; }`,
          `.my-class-${id}:after { content: '${id}'; background: $the-color; color: #fff; }`,
          `.my-class-${id}.my-class-${id}__inverted { background: $the-color; color: #fff; }`,
          `.my-class-${id}.my-class-${id}__inverted:after { background: #000; color: $the-color; }`,
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
    },
    {
      fileName: 'app.scss',
      filePath: 'styles/',
      content: function (id) {
        return `@import "components/my-component-${id}";`;
      },
      prefix: '',
      suffix: ''
    }
  ]
};
