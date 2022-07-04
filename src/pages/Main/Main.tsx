import './Main.scss';
import { Header } from '../../components/Header/Header';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useEffect, useState } from 'react';
import { deleteBoard, getBoards } from '../../api/api';
import { Navigate, useNavigate } from 'react-router-dom';
// import AddNewBoardForm from '../../components/Forms/AddNewBoardForm/AddNewBoardForm';
import ConfirmPopUp from '../../components/ConfirmPopUp/ConfirmPopUp';
import { PATH } from '../../constants/paths';
import Footer from '../../components/Footer/Footer';
// import Notification, { notify } from '../../components/Notification/Notification';
import BoardsSkeleton from '../../components/Skeleton/BoardsSkeleton';
import { useAppSelector } from '../../store/hooks';
import { Book } from '../../constants/interfaces';

export const Main = () => {
  const navigate = useNavigate();
  const totalItems = useAppSelector((state) => state.totalItems);
  const booksArray: Book[] = useAppSelector((state) => state.books);
  console.log(booksArray);

  const booksToShow = booksArray.map((item) => <div key={item.id}>{item.volumeInfo.title}</div>);

  // const { isCreateNewBoardOpen, boardsArray, setBoardsArray, userState } =
  //   useContext(GlobalContext);
  // const [isShowConfirmPopUp, setShowConfirmPopUp] = useState(false);
  // const [boardToDelete, setBoardToDelete] = useState<IBoard | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [bgrUrl, setBgrUrl] = useState('' || localStorage.getItem('bgrUrl'));

  // useEffect(() => {
  //   setIsLoading(true);
  //   getBoards().then(
  //     (response) => {
  //       if (response) {
  //         setBoardsArray(response);
  //         setIsLoading(false);
  //       }
  //     },
  //     (error) => {
  //       const resMessage =
  //         (error.response && error.response.data && error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //       setIsLoading(false);
  //       notify(resMessage);
  //     }
  //   );
  // }, [setBoardsArray]);

  // const handleCardClick = (board: IBoard) => {
  //   navigate(`board/${board.id}`);
  // };

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, board: IBoard) => {
  //   event.stopPropagation();
  //   setBoardToDelete(board);
  //   setShowConfirmPopUp(true);
  // };

  // const handleDeleteBoard = async (boardToDelete: IBoard) => {
  //   try {
  //     await deleteBoard(boardToDelete.id).then((res) => {
  //       if (res.status === 204) {
  //         notify(localizationContent.deleted);
  //       }
  //     });
  //     window.localStorage.removeItem(boardToDelete.id);

  //     const newBoardsArray = await getBoards();
  //     setBoardsArray(newBoardsArray);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const resMessage = error.message || error.toString();
  //       notify(resMessage);
  //     }
  //   } finally {
  //     setShowConfirmPopUp(false);
  //   }
  // };

  // const cutBoardTitle = (title: string) => {
  //   return title.length > 10 ? title.split('').splice(0, 10).join('') + '...' : title;
  // };

  // const boardsToShow = boardsArray.map((board) => {
  //   return (
  //     <Card
  //       key={board.id}
  //       sx={{
  //         backgroundColor: '#6a93e8',
  //       }}
  //       className="boards__card"
  //       onClick={() => handleCardClick(board)}
  //     >
  //       <CardContent sx={{ flexGrow: 1, p: '10px' }}>
  //         <Typography noWrap variant="h6" component="h2" sx={{ color: '#fff' }}>
  //           {cutBoardTitle(board.title)}
  //         </Typography>
  //       </CardContent>

  //       <Button sx={{ color: '#fff' }} onClick={(event) => handleClick(event, board)}>
  //         {<DeleteIcon />}
  //       </Button>
  //     </Card>
  //   );
  // });

  return (
    <>
      <Header />

      <main className="main">
        {totalItems && (
          <Typography variant="h4" align="center" color="text.secondary" sx={{ p: '15px' }}>
            {totalItems}
          </Typography>
        )}
        <div className="cards-container">{booksToShow}</div>
        {/* {isLoading ? <BoardsSkeleton /> : <div className="boards__container">{boardsToShow}</div>} */}
      </main>

      {/* <Notification /> */}
      <Footer />
    </>
  );
};

export default Main;
