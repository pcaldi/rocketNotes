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

    button {
      background: none;
      border: none;
    }
  }
`;


export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

`;

export const Avatar = styled.div`
  position: relative;

  margin: -132px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: 7px;
    bottom: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 50%;

    background: ${({ theme }) => theme.COLORS.ORANGE};

    cursor: pointer;

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }


`;
