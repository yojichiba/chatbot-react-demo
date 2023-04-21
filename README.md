# [Reactチャットbot作成メモ]
参考:https://www.youtube.com/watch?v=MzJkWO73S70&list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn&index=1
### [1]React環境の作成
npx create-react-app chatbot-react-demo
### [2]作成した環境の確認
cd chatbot-react-demo

npm start
### [3]Material-UIのインポート
npm install --save @material-ui/core @material-ui/icons @material-ui/system
### [4]Material-UIのインポートでエラーが起きたのでnodeのバージョンをアップデートしてみる。
chiba@chibayoujinoMacBook-Pro chatbot-react-demo % nodebrew ls

v10.16.0

v14.17.0

current: v14.17.0

nodebrew install-binary stable

chiba@chibayoujinoMacBook-Pro chatbot-react-demo % nodebrew ls

v10.16.0

v14.17.0

v20.0.0

current: v14.17.0

chiba@chibayoujinoMacBook-Pro chatbot-react-demo % nodebrew use v20.0.0          

use v20.0.0
### [5]エラー解決しなかったので、以下を実行
npm config set legacy-peer-deps true

### [6]インストールが成功したので、Material-UI読み込み(index.htmlを編集)
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
### [7]作成されているgitのリポジトリにmainとしてpush
git init

git add *

git commit -m 'initial commit'

git remote add origin git@github.com:yojichiba/chatbot-react-demo.git

git push origin master