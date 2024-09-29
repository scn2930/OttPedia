import styled from 'styled-components';

export const HeaderStyle = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100px;
  color: white;
  background-color: black;
  .nav {
    width: 95%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .left {
    width: 40%;
    height: 100%;
    line-height: 100px;
    font-size: 2rem;
    cursor: pointer;
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 100px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .right li {
    cursor: pointer;
  }
  .right li:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.3s;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .left {
      font-size: 1.5rem;
    }
    .right {
      font-size: 0.9rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .left {
      font-size: 1.2rem;
    }

    .right {
      font-size: 0.8rem;
    }

    .right li {
      margin: 5px 0;
    }
  }
`;
