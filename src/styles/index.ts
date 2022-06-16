import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }

  & .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  & .alignItems{
    margin: 0 auto;
    color: red;
  }
`;
