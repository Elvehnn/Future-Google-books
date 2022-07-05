import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import './BookPreview.scss';
import { Book } from '../../constants/interfaces';

export const BookPreview = (props: Book) => {
  return (
    <Card
      className="book"
      sx={{
        p: '10px',
        display: 'flex',
        cursor: 'pointer',
        backgroundColor: '#ggg',
        width: '350px',
        height: '250px',
        minHeight: '150px',
      }}
      //   onClick={() => props.setTaskToEdit({ ...props.task, columnId: props.column.id })}
    >
      <div
        className="book__preview"
        style={{
          background: `url('${props.volumeInfo.imageLinks.smallThumbnail}') no-repeat center center `,
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
          {props.volumeInfo.authors}
        </Typography>
      </div>

      {/* <Notification /> */}
    </Card>
  );
};
