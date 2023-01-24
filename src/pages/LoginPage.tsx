import React from "react";
import { Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    return (<>
        <div className="container__log-in">
            <h3>Авторизация</h3>
            <Box component="form" onSubmit={() => navigate('/todo')} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <button className="login__submit"
                    type="submit"
                >Sign In</button>
            </Box>
        </div>

    </>)
}