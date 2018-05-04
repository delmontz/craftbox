module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        // browser グローバル変数を使用する
        "browser": true,
    },
    "rules": {
        // インデントスタイルは2スペースに強制
        "indent": ["error", 4],
        // 改行コードはWindows
        "linebreak-style": ["error", "windows"],
        //未定義が鬱陶しいのでとりあえず無効　追加
        "no-unused-vars": 1,
        "require-jsdoc" : 0,
        "space-before-blocks": 0,
        "keyword-spacing" :0,
        "spaced-comment": 0
    },
  };