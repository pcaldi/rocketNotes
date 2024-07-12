import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;


  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    svg {
      margin-left: 144px;
      font-size: 24px;
      color:${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;


export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;
  margin-top: 157px;

`;
