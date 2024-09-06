import React, { useState } from 'react'
import AppBarSearch from '../../components/app.bar';
import { Alert, Box, Button, Paper, TextField, Typography } from '@mui/material';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Simula uma verificação simples de login
        if (username === 'admin' && password === 'admin123') {
            // Armazena o usuário no localStorage após o login
            const user = { username };
            localStorage.setItem('user', JSON.stringify(user));

            // Limpa o formulário e o erro
            setUsername('');
            setPassword('');
            setError('');

            // Pode redirecionar para outra página aqui, se necessário
            alert('Login bem-sucedido!');
        } else {
            setError('Usuário ou senha incorretos.');
        }
    };

    return (
        <>
            <AppBarSearch/>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Paper elevation={3} style={{ padding: '2rem', width: '400px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>

                    {error && <Alert severity="error">{error}</Alert>}

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <TextField
                            label="Usuário"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <TextField
                            label="Senha"
                            variant="outlined"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Entrar
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
      );
}

export default Login
