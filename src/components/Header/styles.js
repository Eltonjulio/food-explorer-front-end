import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 9.6rem;
  width: 100%;
  padding: 2.4rem 12.3rem;
  display: flex;
  gap: 3.2rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  > button:first-of-type {
    max-width: 21.6rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
   img {
    width: 19.7rem;
    height: 3.9rem;
  }
`;

export const Search = styled.div`
  display: flex;
  padding: 1.2rem 1.4rem;
  flex-grow: 1;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  input {
    max-width: 28.2rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;