import styled from 'styled-components';

export const ContentStyle = styled.div`
  padding-top: 100px;
  .back {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
  }
  .backColor {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
  .backImg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    filter: blur(40px);
  }
  .info {
    position: absolute;
    top: 100px;
    left: 15%;
    z-index: 2;
    width: 50%;
  }
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .where {
    font-size: 1.7rem;
    margin-bottom: 40px;
  }
  .runtime {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  .description {
    font-size: 1rem;
  }

  .img {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    z-index: 2;
    width: 300px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
