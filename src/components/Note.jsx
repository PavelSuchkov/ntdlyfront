import React from "react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../solutions/05-CRUD/gql/query";
import { NoteUser } from "./NoteUser";

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
  width: 150px;
`;

export const Note = (props) => {

  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={props.note.author.avatar}
            alt={`${props.note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {props.note.author.username} <br />
          {format(props.note.createdAt, 'MMM Do YYYY')}
        </MetaInfo>
        {data.isLoggedIn ? (
          <UserActions>
            <NoteUser note={props.note} />
          </UserActions>
        ) : (
          <UserActions>
            <em>Favorites:</em> {props.note.favoriteCount}
          </UserActions>
        )}
      </MetaData>
      <ReactMarkdown source={props.note.content} />
    </StyledNote>
  );
};

