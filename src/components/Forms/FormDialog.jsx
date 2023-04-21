
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {TextInput} from '../../components';

const FormDialog = (props) =>{
  const [name, setName] = useState('');            // 
  const [email, setEmail] = useState('');            // 
  const [description, setDescription] = useState('');            // 

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputDescription = (event) => {
    setDescription(event.target.value);
  };
  const validateEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
  };
  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i=(i+1)|0) {
        if (args[i] === "") {
            isBlank = true;
        }
    }
    return isBlank
  };  
  const submitForm = () => {
    const isBlank = validateRequiredInput(name, email, description);
    const isValidEmail = validateEmailFormat(email);
    if (isBlank) {
      alert('必須入力欄が空白です。')
      return false
    } else if (!isValidEmail) {
      alert('メールアドレスの書式が異なります。')
      return false
    } else {
      const payload={
        text: 'お問い合わせがありました\n' +
              'お名前:' + name + '\n' +
              'Email:' + email + '\n' +
              '問い合わせ内容:' + description
      }
      const url = process.env.REACT_APP_SLACK_WEBHOOK_URL;
      fetch (url ,{
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        alert('送信が完了しました。追ってご連絡いたします！');
        setName('');
        setEmail('');
        setDescription('');
        return props.handleClose();
      });
    }
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          お問い合わせフォーム
        </DialogTitle>
        <DialogContent>
          <TextInput
            label={"名前(必須)"} multiline={false} rows={1}
            value={name} type={"text"} onChange={inputName}
          />
          <TextInput
            label={"メールアドレス(必須)"} multiline={false} rows={1}
            value={email} type={"email"} onChange={inputEmail}
          />
          <TextInput
            label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
            value={description} type={"text"} onChange={inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>キャンセル</Button>
          <Button onClick={submitForm} autoFocus>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
