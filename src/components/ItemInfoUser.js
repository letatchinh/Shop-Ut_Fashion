import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import EditIcon from "@mui/icons-material/Edit";

export default function ItemInfoUser({icon,value}) {
  return (
    <ListItem
              secondaryAction={
                <IconButton >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={value} />
            </ListItem>
  )
}
