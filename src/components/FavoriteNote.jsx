import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ButtonAsLink } from "./ButtonAsLink";
import { TOGGLE_FAVORITE } from "../gql/mutation";
import { GET_MY_FAVORITES } from "../gql/query";


export const FavoriteNote = ({ favoriteCount, me, noteId }) => {

  const [count, setCount] = useState(favoriteCount);

  const [favorited, setFavorited] = useState(
    me.favorites.filter(note => note.id === noteId).length > 0
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: noteId
    },
    // Повторно получаем запрос GET_MY_FAVORITES для обновления кэша
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });

  return (
    <React.Fragment>
      {favorited ? (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          }}>
          Remove Favorite
        </ButtonAsLink>
      ) : (<ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}>
          Add Favorite
        </ButtonAsLink>
      )}
      : {count}
    </React.Fragment>
  );
};