import React from 'react';
import dayjs from 'dayjs';
import { colorCardByDate } from '../utils/helpers';
import { Box, Typography, Grid, ButtonGroup, Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

function SingleItem({ item, setDialogOpen, setEditedItem }) {
  // Edit item button handler
  function handleEditItem() {
    // Set item to be edited in modal
    setEditedItem(item);
    // Open edit modal
    setDialogOpen(true);
  }

  // TODO Delete button handler

  return (
    <Box
      variant="outlined"
      sx={{
        p: 1,
        marginBottom: 0.5,

        flexGrow: 1,
        bgcolor: colorCardByDate(item.useByDate),
        border: '1px solid gray',
        borderRadius: '5px',
      }}
    >
      {/* Overall Grid*/}
      <Grid container alignItems="center">
        {/* Text Column */}
        <Grid item xs={10} alignItems="flex-start" justifyContent="space-between" container>
          {/* Name, Quantity, Unit Row */}
          <Grid container spacing={1} xs={12} sm={6} justifyContent="space-between" item>
            {/* Item Name */}
            <Grid item xs={9} sm={8}>
              <Typography gutterBottom variant="subtitle1" textAlign="left" xs={10}>
                {item.name}
              </Typography>
            </Grid>

            {/* Quanity and Unit */}
            <Grid item xs={3} sm={4}>
              <Typography variant="body2" gutterBottom xs={1} textAlign="left">
                {`${item.quantity} ${item.unit}`}
              </Typography>
            </Grid>
          </Grid>

          {/* Use By Date */}
          <Grid item xs={12} sm={3}>
            <Typography variant="body2" gutterBottom textAlign="left">
              Use by: {dayjs(item.useByDate).format('MM/DD/YY')}
            </Typography>
          </Grid>

          {/* Storage Location */}
          <Grid item xs={12} sm={3}>
            <Typography variant="body2" color="text.secondary" textAlign="left">
              Stored: {item.storageLocation}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} container justifyContent="flex-end">
          {/* <ButtonGroup variant="contained" size="small"> */}
          {/* Edit Button */}
          <Grid item xs={12} sm={6}>
            <Tooltip title="Edit" placement="left">
              <Button
                onClick={handleEditItem}
                variant="contained"
                size="small"
                style={{ maxWidth: '30px', minWidth: '30px' }}
              >
                <EditIcon />
              </Button>
            </Tooltip>
          </Grid>

          {/* Delete Button */}
          <Grid item xs={12} sm={6}>
            <Tooltip
              title="Delete"
              placement="left"
              variant="contained"
              size="small"
              style={{ maxWidth: '30px', minWidth: '30px' }}
            >
              <Button>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </Grid>

          {/* Find Recipe Button
            // TODO ?? recipe search handler ??
            <Tooltip title="Find Recipie" placement="left">
            <Button>
            <DinnerDiningIcon />
            </Button> 
          </Tooltip> */}
          {/* </ButtonGroup> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleItem;
