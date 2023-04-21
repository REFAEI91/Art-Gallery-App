import styled from "styled-components";
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  const FavoriteButton = styled.button`
    background: transparent;
    border: solid 1px #000;
    color: #000;
    border-radius: 15px;
    padding: 5px 10px;
    display: flex;
    position: absolute;
    top: 3%;
    right: 5%;
  `;

  return (
    <FavoriteButton onClick={onToggleFavorite}>
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </FavoriteButton>
  );
}
