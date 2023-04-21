import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const AnswerButton = styled(Button)(({ theme }) => ({
    width: '100%',
    borderColor: "#FFB549",
    color: "#FFB549",
    fontWeight: 600,
    marginBottom: "8px",
    "&:hover": {
        backgroundColor: "#FFB549",
        color: "#fff"
    }
}));

const Answer = (props) => {

    return (
        <AnswerButton variant="outlined"
                onClick={() => props.select(props.answer.content, props.answer.nextId)}>
            {props.answer.content}
        </AnswerButton>
    );
};

export default Answer;