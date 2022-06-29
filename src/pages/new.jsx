import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { NoteForm } from "../components/NoteForm";
import { GET_NOTES } from "../gql/query";

const NEW_NOTE = gql`
mutation newNote($content: String!) {
  newNote(content: $content) {
    id
    content
    createdAt
    favoriteCount
      favoritedBy {
        id
        username 
        }
      author {
        username
        id 
      }
} }
`;

export const NewNote = props => {

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
    onCompleted: data => {
      // В финале перенаправляем пользователя на страницу заметки
      props.history.push(`note/${data.newNote.id}`);
    }
  });


  useEffect(() => {
    document.title = "New Note — Notedly";
  });

  return (
    <React.Fragment>
      {/* Во время загрузки мутации выдаем сообщение о загрузке */} {loading && <p>Loading...</p>}
      {/* В случае сбоя выдаем сообщение об ошибке*/}
      {error && <p>Error saving the note</p>}
      {/* Компонент формы, передающий мутацию данных в качестве prop */}
      <NoteForm action={data} />
    </React.Fragment>
  );
};