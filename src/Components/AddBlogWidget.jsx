import { Button, TextField, Typography } from '@mui/material'
import React from 'react'


const AddBlogWidget = () => {
  return (
    <div>
        
        <Typography variant='h3'style={{fontFamily:"cursive"}}></Typography>
        <Typography variant='h4' style={{color:'darkslateblue', fontFamily:'fantasy'}}>Blog Form</Typography><br/><br/>
        <TextField variant='outlined' label='Blog Name' style={{color:'red', fontFamily:'fantasy'}}></TextField><br/><br/>
        <TextField variant='outlined' label='Description' style={{color:'red', fontFamily:'fantasy'}}></TextField><br/><br/>
        <TextField variant='outlined' label='Author Name' style={{color:'red', fontFamily:'fantasy'}}></TextField><br/><br/>
        <Button variant='contained' style={{fontFamily:'revert'}}>ENTER</Button>
      
    </div>
  )
}

export default AddBlogWidget;
