import styled from "styled-components";

export const MediasContainer = styled.div`
  display: flex;
  position: fixed;
  left: 3%;
  flex-direction: column;
  align-items: center;
  width: 1%;
  top: 0;
  gap: 1px;

  svg{
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1rem
  }
`;

export const Line = styled.div`
  border: 1px solid ${(props) => props.theme.colors.white};

  height: 100px;
  width: 1px;
`;