import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addBoard, getBoards } from '../../../api/api';
import { PATH } from '../../../constants/paths';
import ConfirmRedirection from '../../ConfirmRedirection/ConfirmRedirection';
// import { notify } from '../../Notification/Notification';
import './AddNewBoardForm.scss';

const AddNewBoardForm = () => {
  const params = useParams<{ id: string }>().id || '';
  const navigate = useNavigate();
  // const { setIsCreateNewBoardOpen, setBoardsArray } = useContext(GlobalContext);
  // const [isShowConfirmPopUp, setShowConfirmPopUp] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="addNewBoard__container">
      <Container component="main" maxWidth="xs">
        <Box component="form" className="addNewBoard__form">
          <Typography component="h1" variant="h5" align="center">
            addTitle
          </Typography>

          {/* <Box sx={{ px: 0, py: 2 }}>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              id="title"
              name="title"
              label={localizationContent.addNewBoard.title}
              type="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              autoFocus
            />
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              id="description"
              name="description"
              label={localizationContent.addNewBoard.description}
              type="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              multiline
            />
          </Box> */}

          {/* <Grid container sx={{ width: 'inherit', mt: 2 }}>
            <Grid item xs>
              <Button
                variant="outlined"
                onClick={() => setIsCreateNewBoardOpen(false)}
                sx={{ margin: '10px' }}
              >
                {localizationContent.buttons.cancel}
              </Button>
            </Grid>
            <Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ margin: '10px' }}
                disabled={isLoading}
              >
                {localizationContent.buttons.add}
              </Button>
            </Grid>
          </Grid> */}
        </Box>

        {/* {params && (
          <ConfirmRedirection
            description={`Do you want to go to the main page?`}
            isOpen={isShowConfirmPopUp}
            toShowPopUp={setShowConfirmPopUp}
            onCancel={() => {
              setIsCreateNewBoardOpen(false);
              setShowConfirmPopUp(false);
            }}
            onConfirm={() => {
              setIsCreateNewBoardOpen(false);
              setShowConfirmPopUp(false);
              navigate(PATH.MAIN_ROUTE);
            }}
          />
        )} */}
      </Container>
    </div>
  );
};

export default AddNewBoardForm;
