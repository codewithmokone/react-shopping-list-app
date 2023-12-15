import React from 'react'
import { Link } from 'react-router-dom';
import { RiShoppingCartFill, RiFileList3Line } from 'react-icons/ri'
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavigationBar = () => {
    return (
        <Box sx={{
            width: { xs: 400, sm: 786, md: 1024 },
            height:60,
            display: 'flex',
            // flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#7B8FA1'
        }}
        >
            <Typography sx={{marginLeft:3}} className="nav-icon"><ShoppingCartIcon /> - List</Typography>
            <nav className="me-auto">
                <Link to="/newitem">Add Item</Link>
                <Link to="/">View List</Link>
            </nav>
        </Box>
    )
}

export default NavigationBar