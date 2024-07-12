import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;


  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

`;
