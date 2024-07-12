import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 106px auto;
  grid-template-areas:
  "header"
  "content";


`;

export const Form = styled.form`
  max-width: 550px;
  margin: 32px auto 0;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    > h1 {
      font-size: 36px;
      font-weight: 500;
    }

    > a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`;
