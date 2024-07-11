import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background:${({ theme }) => theme.COLORS.BACKGROUND_900};

   > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
   }

`;

export const Menu = styled.ul`
   grid-area: menu;
   padding-top: 64px;
   text-align: center;

   background:${({ theme }) => theme.COLORS.BACKGROUND_900};

   > li {
      margin-bottom: 24px;
   }
`;

export const Search = styled.div`
   grid-area: search;
   background: violet;

`;

export const Content = styled.div`
   grid-area: content;
   background: gray;
`;

export const NewNote = styled.button`
   grid-area: newnote;
   background:${({ theme }) => theme.COLORS.ORANGE};

   display: flex;
   justify-content: center;
   align-items: center;
   color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   font-size: 24px;

   > span {
     font-size: 20px;
     margin-left: 8px;
     color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   }

`;
