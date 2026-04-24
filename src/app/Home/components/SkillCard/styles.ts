import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.borderStrong};
  }
  
  div p {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem 1.1rem 1.1rem;
  text-align: left;
  gap: 0.55rem;
  flex-wrap: wrap;

  p {
    padding: 0.4rem 0.65rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 0.88rem;
    line-height: 1.5;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem 0.6rem;

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
  }
`;


