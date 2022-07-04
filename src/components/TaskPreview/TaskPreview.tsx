import './TaskPreview.scss';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
// import Notification, { notify } from '../Notification/Notification';

// interface TaskPreviewProps {
//   setTaskToEdit: (taskID: ITask) => void;
//   setTaskToDelete: (taskID: ITask) => void;
//   setShowConfirmPopUp: (flag: boolean) => void;
//   column: IColumn;
//   task: ITask;
//   index: number;
//   boardId: string;
// }

const TaskPreview = () => {
  const handleDeleteTask = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <Card
      className="task"
      sx={{
        p: '10px',
        width: '93%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: '5px 0',
        cursor: 'pointer',
        backgroundColor: '#fff',
        overflow: 'unset',
        height: '50px',
      }}
      // onClick={() => props.setTaskToEdit({ ...props.task, columnId: props.column.id })}
    >
      <div className="task__title">
        <Typography variant="h6">title</Typography>

        <div className="task__buttons-container">
          <Button
            variant="text"
            sx={{ p: '2px', minWidth: '' }}
            // onClick={() => props.setTaskToEdit({ ...props.task, columnId: props.column.id })}
          >
            <EditIcon className="task_edit" />
          </Button>

          <Button
            variant="text"
            sx={{ p: '2px', minWidth: '' }}
            onClick={(event) => handleDeleteTask(event)}
          >
            <CloseIcon className="task_close" />
          </Button>
        </div>
      </div>
      {/* <Notification /> */}
    </Card>
  );
};

export default TaskPreview;
