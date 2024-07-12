import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  border: none;
  resize: none;

  padding: 16px;
  border-radius: 10px;
  margin-bottom: 8px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

`;
