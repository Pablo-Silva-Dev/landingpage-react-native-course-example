import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .lightTitle {
    color: ${({ theme }) => theme.colors.white};
  }

  & .lightText {
    color: ${({ theme }) => theme.colors.silver};
  }
`;
