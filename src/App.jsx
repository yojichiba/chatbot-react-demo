
import React, {useState, useCallback, useEffect} from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import {Answers, Chats, FormDialog} from './components';

const App = () => {
  const [answers, setAnswers] = useState([]);            // 回答コンポーネントに表示するデータ
  const [chats, setChats] = useState([]);                // チャットコンポーネントに表示するデータ
  const [currentId, setCurrentId] = useState('init');    // 現在の質問ID
  const [dataset, setDataset] = useState(defaultDataset);// 質問と回答のデータセット
  const [open, setOpen] = useState(false);               // 問い合わせフォーム用モーダルの開閉を管理

  useEffect(() => {
    displayNextQuestion(currentId);
    addChats(currentId, 'question', dataset[currentId].question);
  },[]);

  // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定する
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });  

  const addChats = (questionId, type, chat) => {
    let selectChats = chats;
    if (questionId === 'init' && selectChats.length === 1) {
      selectChats[0] = {type:type, text:chat};
    }
    else {
      selectChats.push({type:type, text:chat});
    }
    setChats(selectChats);
  }
  const displayNextQuestion = (nextQuestionId) => {
    // 次の回答一覧をセット
    setAnswers(dataset[nextQuestionId].answers);
    // 現在の質問IDをセット
    setCurrentId(nextQuestionId);
  };

  const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
    switch(true){
      case (nextQuestionId === 'contact'):
          handleClickOpen();
        break;
      case (/^https:*/.test(nextQuestionId)):
          const a = document.createElement('a');
          a.href = nextQuestionId;
          a.target = '_blank';
          a.click();
        break;
      default:
          setTimeout(() => displayNextQuestion(nextQuestionId), 750);
          // 次のチャットをセット
          if (nextQuestionId !== 'init') {
            addChats(nextQuestionId,'answer', selectedAnswer);
          }
          addChats(nextQuestionId,'question', dataset[nextQuestionId].question);
        break;
    }
  },[answers]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  });

  return (
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats} />
        <Answers answers={answers} select={selectAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default App;
