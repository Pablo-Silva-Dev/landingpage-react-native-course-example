import Collapsible from "react-collapsible";
import styled from "styled-components";

export const CollapsibleTrigger = styled(Collapsible)`
  cursor: pointer;
  font-weight: 700;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
