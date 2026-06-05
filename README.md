# rails-dojo-git-pages-playground

Git の練習用リポジトリです。

このリポジトリでは、ファイルを変更して commit し、GitHub に push すると、GitHub Pages のページも更新されます。
Git の操作結果が、ブラウザ上の見た目の変化として確認できます。

## 使うファイル

```text
index.html
style.css
script.js
.github/workflows/pages.yml
```

主に編集するファイルは次の3つです。

- `index.html`: ページに表示する見出しや説明文
- `style.css`: 色、余白、レイアウト
- `script.js`: 画面に表示するカードの内容

`.github/workflows/pages.yml` は、push したあとに GitHub Pages へ公開するための設定ファイルです。
授業中に指示があるまで変更しません。

## GitHub Pages の設定

テンプレートから自分のリポジトリを作ったあと、GitHub Pages の設定が必要になる場合があります。

1. GitHub のリポジトリ画面を開く
2. `Settings` を開く
3. 左メニューの `Pages` を開く
4. `Build and deployment` の `Source` を `GitHub Actions` にする

設定後に `git push origin main` を実行すると、`Actions` タブで公開処理の進行を確認できます。

## ローカルで確認する場合

Codespaces のターミナルで次のコマンドを実行します。

```bash
python3 -m http.server 8000
```

そのあと、Codespaces の `PORTS` から `8000` をブラウザで開きます。

サーバーを止めるときは、ターミナルで `Ctrl + C` を押します。
