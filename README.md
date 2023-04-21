# [Reactチャットbot環境作成メモ]
参考:https://www.youtube.com/watch?v=MzJkWO73S70&list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn&index=1
### [1]React環境の作成
npx create-react-app chatbot-react-demo
### [2]作成した環境の確認
cd chatbot-react-demo

npm start
### [3]Material-UIのインポート
npm install --save @mui/material @mui/styled-engine @emotion/react @emotion/styled
### [4]エラー解決のため、以下を実行
npm config set legacy-peer-deps true
### [5]インストールが成功したので、Material-UI読み込み(public/index.htmlを編集)
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
### [7]作成されているgitのリポジトリにmainとしてpush
git init

git add *

git commit -m 'initial commit'

git remote add origin git@github.com:yojichiba/chatbot-react-demo.git

git push origin master
### [8]必要モジュールが揃ったので環境の最終確認
npm start

以上!