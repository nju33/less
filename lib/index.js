import less from 'less';
import NpmImportPlugin from 'less-plugin-npm-import';

export default {
  render(contents) {
    return less.render(contents, {
      plugins: [
        new NpmImportPlugin()
      ]
    });
  }
};
