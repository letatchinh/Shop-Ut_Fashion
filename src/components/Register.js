import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { fetchRegisterRequest } from '../redux/login/Actions';

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmit = data => {
        const newUser = {
            username : data.username,
            password : data.password,
            listCarts : []
        }
        dispatch(fetchRegisterRequest(newUser))
        alert("dkty rhanh cong")
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={3} sx={{width : "30%" , margin : "0 auto"}}>
    <TextField  {...register("username",{ required: true })} label="UserName" variant="outlined" />
    <TextField  {...register("password",{ required: true })} label="UserName" variant="outlined" />
    {errors.exampleRequired && <span>This field is required</span>}
    <Button type='submit' variant="contained">Register</Button>
    </Stack>

  </form>
  )
}
