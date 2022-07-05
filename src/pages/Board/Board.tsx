import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcon from '@mui/icons-material/Add';
import ConfirmPopUp from '../../components/ConfirmPopUp/ConfirmPopUp';
import { Header } from '../../components/Header/Header';
// import Notification, { notify } from '../../components/Notification/Notification';
import { Card, Typography } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import './Board.scss';
import Box from '@mui/system/Box';
import TitleSkeleton from '../../components/Skeleton/TitleSkeleton';
import ColumnSkeleton from '../../components/Skeleton/ColumnSkeleton';

export const Board = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>().id || '';

  // const [board, setBoard] = useState<IBoard | null>(null);
  // const [isAddColumnFormOpen, setIsAddColumnFormOpen] = useState(false);
  // const [columnToDelete, setColumnToDelete] = useState<IColumn | null>(null);
  // const [isShowConfirmPopUp, setShowConfirmPopUp] = useState(false);
  // const [columnToAddTask, setColumnToAddTask] = useState<IColumn | null>(null);
  // const [taskToEdit, setTaskToEdit] = useState<ITask | null>(null);
  // const [taskToDelete, setTaskToDelete] = useState<ITask | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   getBoardById(params).then(
  //     (response) => {
  //       if (response) {
  //         response.columns.sort((a: IColumn, b: IColumn) => (a.order > b.order ? 1 : -1));
  //         setBoard(response);
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
  // }, [params]);

  return (
    <>
      <Header />

      <div className="board">
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            top: '108px',
            left: '46px',
            backgroundColor: 'background.paper',
            color: 'primary.main',
            p: '12px',
            opacity: 0.9,
          }}
          onClick={() => navigate(-1)}
        >
          <KeyboardBackspaceIcon sx={{ fontSize: '42px' }} />
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {isLoading ? (
            <TitleSkeleton />
          ) : (
            board && (
              <Card
                sx={{
                  minWidth: 0.6,
                  overflow: 'unset',
                  mt: '18px',
                  opacity: 0.9,
                  boxShadow: 'none',
                  p: '16px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h4" color="text.secondary" sx={{ mx: '10px' }}>
                  {board?.title}:
                </Typography>
                <Typography variant="h5" sx={{ fontSize: 16, pt: '1px' }} color="text.primary">
                  {board?.description}
                </Typography>
              </Card>
            )
          )} */}
        </Box>
      </div>

      <Footer />

      {/* <Notification /> */}
    </>
  );
};
