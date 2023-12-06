import styled from 'styled-components'

export const Container = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  
  width: 100%;
  height: 4.8rem;
  
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  gap: 0.8rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    filter: none;
    cursor: wait;
  }
`;