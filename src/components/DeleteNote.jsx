import React from "react";
import { useMutation } from "@apollo/client";
import { withRouter } from "react-router-dom";
import { ButtonAsLink } from "./ButtonAsLink";
import { DELETE_NOTE } from "../gql/mutation";
import { GET_MY_NOTES, GET_NOTES } from "../gql/query";


const Delete = props => {

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: data => {
      // Перенаправляем пользователя на страницу "my notes"
      props.history.push('/mynotes');
    }
  });
  return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>;
};
export const DeleteNote = withRouter(Delete)