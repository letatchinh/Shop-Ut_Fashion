import { List } from '@mui/material'
import React from 'react'
import ItemInfoUser from './ItemInfoUser'
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
export default function InfoUser() {
  return (
    <List sx={{ width: "100%" }}>
    <ItemInfoUser icon={<PeopleIcon />} value='name'/>
    <ItemInfoUser icon={<EmailIcon />} value='Email'/>
    <ItemInfoUser icon={<PhoneIcon />} value='Phone'/>
  </List>
  )
}
