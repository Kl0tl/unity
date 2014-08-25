'use strict';

module.exports = function () {
  switch (process.platform) {
    case 'darwin':
      return '/Applications/Unity/Unity.app/Contents/MacOS/Unity';
    case 'win32':
      return 'C:\\program files\\Unity\\Editor\\Unity.exe';
    default:
      throw new Error('Unsupported platform ! Expected \'darwin\' or \'win32\', was \'' + process.platform + '\'');
  }
};
