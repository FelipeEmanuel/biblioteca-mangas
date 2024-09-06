import { useEffect, useState } from "react";
import { getUsers } from "../../service/supabaseService";

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
        <div>
            <h2>Users no Supabase</h2>
            <ul>
                {users.map((user: User) => (
                <li key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default MyList