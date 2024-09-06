import { useEffect, useState } from "react";
import { getUsers } from "../../service/supabaseService";
import { Box, Container, Typography } from "@mui/material";
import AppBarSearch from "../../components/app.bar";

interface User {
    id: number
    name: string
    email: string
    password: string
    role: string
}

function MyList() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
        };
        fetchUsers();
    }, []);
    return (
        <>
            <Container fixed>
                <AppBarSearch/>
                <Box>
                    <Typography>
                        Users no Supabase
                    </Typography>
                    <ul>
                        {users.map((user: User) => (
                        <li key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.role}</p>
                        </li>
                        ))}
                    </ul>
                </Box>
            </Container>
            
        </>
                
    )
}

export default MyList