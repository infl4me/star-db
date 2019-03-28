const fs = require('fs');

const camelize = str => str.split('-').map(s => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`).join('');

const fn = (name) => {
  const path = `./src/components/${name}`;
  fs.mkdirSync(path);
  const indexData = `import ${camelize(name)} from './${name}';

export default ${camelize(name)};
`;
  const jsData = `import React from 'react';
import './${name}.css';

export default class ${camelize(name)} extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
`;
  fs.writeFileSync(`${path}/${name}.js`, jsData);
  fs.writeFileSync(`${path}/${name}.css`, '');
  fs.writeFileSync(`${path}/index.js`, indexData);
};

fn('record');
