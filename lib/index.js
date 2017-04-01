import path from 'path';
import less from 'less';
import NpmImportPlugin from 'less-plugin-npm-import';

export default {
  render(contents, filepath = null) {
    const opts = {};

    if (filepath !== null) {
      const dir = path.dirname(filepath);
      const name = path.basename(filepath);
      opts.paths = [dir];
      opts.filename = name;
    }

    return less.render(contents, {
      ...opts,
      plugins: [
        new NpmImportPlugin()
      ]
    });
  }
};
