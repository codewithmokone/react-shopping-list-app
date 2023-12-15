import { TextField } from '@mui/material'
import React from 'react'

function InputField({width,type,placeholder,onChange}) {
  return (
    <TextField 
        sx={{backgroundColor:'white'}}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        fullWidth
        size="small"
    />
  )
}

export default InputField
