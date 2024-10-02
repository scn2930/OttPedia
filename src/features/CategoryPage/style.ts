import styled from 'styled-components';

export const CategoryStyle = styled.div`
  padding-top: 100px;
  overflow: hidden;

  .tagsWrap {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 90%;
    margin: 50px auto 50px;
    overflow: auto;
  }
  .tags {
    width: 100%;
    padding: 20px 35px;
    border-radius: 60%;
    white-space: nowrap;
    background-color: gray;
  }
`;
