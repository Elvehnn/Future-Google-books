import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import './BookPreview.scss';
import { Book } from '../../constants/interfaces';
import { useNavigate } from 'react-router-dom';
import { getVolumeById } from '../../api/api';
import { API_KEY } from '../../constants/constants';
import { useAppDispatch } from '../../store/hooks';
import { setSelectedBook } from '../../store/actions';

export const BookPreview = (props: Book) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBookPreviewClick = async (book: Book) => {
    navigate(`book/${book.id}`);
  };

  return (
    <Card
      className="book"
      sx={{
        p: '15px',
        display: 'flex',
        cursor: 'pointer',
        backgroundColor: '#ggg',
        width: '350px',
        height: '220px',
        minHeight: '150px',
      }}
      onClick={() => handleBookPreviewClick(props)}
    >
      <div
        className="book__preview"
        style={{
          background: `url('${props.volumeInfo.imageLinks?.smallThumbnail}') no-repeat center center `,
          backgroundSize: 'contain',
        }}
      ></div>
      <div className="book__info">
        <Typography className="book__category" variant="h6">
          {props.volumeInfo.categories}
        </Typography>
        <Typography className="book__title" variant="h5" sx={{ fontWeight: '600' }}>
          {props.volumeInfo.title}
        </Typography>
        <Typography className="book__author" variant="h6">
          {props.volumeInfo.authors && props.volumeInfo.authors.join(',  ')}
        </Typography>
      </div>

      {/* <Notification /> */}
    </Card>
  );
};