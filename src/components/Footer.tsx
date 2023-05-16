import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';

const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Main>
          <div className="attribution">
            This website uses the{' '}
            <a
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB API
            </a>{' '}
          </div>
        </Main>
      </Container>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  background-color: #111;
`;

const Main = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  a {
    font-weight: 900;
    text-decoration: none;
    color: #176e8b;
  }
`;
