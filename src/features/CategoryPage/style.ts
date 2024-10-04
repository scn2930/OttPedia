import styled from 'styled-components';

export const CategoryStyle = styled.div`
  padding-top: 80px;
  overflow: hidden;

  .tagsWrap {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 90%;
    margin: 50px auto 50px;
    overflow: auto;
  }
  .tags {
    width: 100%;
    padding: 17px 37px;
    border: 1px solid #444;
    border-radius: 30px;
    white-space: nowrap;
    background-color: #262626;
    color: #d9d9d9;
    transition: transform 0.4s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: translate(0, -10px);
    }
  }
`;
