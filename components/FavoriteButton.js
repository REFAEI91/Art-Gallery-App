import Image from "next/image";
import styled from "styled-components";
export default function FavoriteButton({ isFavorite, onFavorite }) {
  const FavoriteButton = styled.button`
    background: transparent;
    border: none;
    color: #000;
    border-radius: 15px;
    padding: 5px 10px;
    display: flex;
    position: absolute;
    top: 3%;
    right: 5%;
    scale: 1.5;
    &:hover {
      cursor: pointer;
      background-color: #fef;
    }
  `;

  return (
    <FavoriteButton onClick={onFavorite}>
      <Image src="/heart.svg" alt="" width={20} height={20} />
    </FavoriteButton>
  );
}
