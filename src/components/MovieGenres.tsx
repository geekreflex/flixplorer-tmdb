import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface GenresProps {
  genres: {
    id: number;
    name: string;
  }[];
}

const MovieGenres = ({ genres }: GenresProps) => {
  return (
    <Wrap>
      <h3>Genres</h3>
      <div className="genre-list">
        {genres.map((genre) => (
          <Link to="/" key={genre.id}>
            <div className="genre" key={genre.id}>
              {genre.name}
            </div>
          </Link>
        ))}
      </div>
    </Wrap>
  );
};

export default MovieGenres;

const Wrap = styled.div`
  .genre-list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
      color: #fff;
      text-decoration: none;
    }

    .genre {
      background-color: #242424;
      padding: 4px 15px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;