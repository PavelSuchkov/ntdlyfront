import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { format } from "date-fns";
import styled from "styled-components";

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const NoteBlock = styled.div`
  border: 0.5px solid #bebdbd;
  border-radius: 4px;
  min-height: 40px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.span`
  font-size: 30px;
  cursor: pointer;
`;

const onSuccess = () => {

}

const Note = ({ note }) => {

  const [editMode, setEditMode] = useState(false);

  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(note.createdAt, "MMM Do YYYY")}
        </MetaInfo>
        <UserActions>
          <em>Favorites:</em> {note.favoriteCount}
        </UserActions>
      </MetaData>
      <ReactMarkdown source={note.content} />
    </StyledNote>
  );
};

export default Note;
