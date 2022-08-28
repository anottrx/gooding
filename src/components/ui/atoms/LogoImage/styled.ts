import styled from '@emotion/styled';

interface ICircle {
  size?: number;
  src?: string;
}

export const ImgWrapper = styled.div`
  position: relative;
  flex-direction: column;
  margin: auto;
  &:hover {
    .image {
      opacity: 0.2;
      transform: scale(1.03);
      transition: transform 0.3s;
    }
    ,
    .text {
      opacity: 1;
    }
  }
`;

export const TextOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 33%;
  left: 35%;
  color: #000;
  transition: 0.5s ease;
  font-size: 20px;
  font-weight: 600;
`;

export const ImageCircle = styled.div<ICircle>`
  --size: ${({ size }) => size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-color: #aaa;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
