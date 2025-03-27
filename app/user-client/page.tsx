// defined this is client component
"use client";
import { useEffect, useState } from "react";
import { inter } from "../ui/fonts";



type User = {
    id: number,
    name: string,
    email: string,
    username: string,
    phone: string,
}

const UserClient = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const api = 'https://jsonplaceholder.typicode.com/users';
    // fetch data 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error("Error fetching");
                }
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError("error fetching data ");
                if (err instanceof Error) {
                    setError(`Error fetching ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
    return (
        <><h1>Our Client</h1>
            <div className="card-container">
                {/* map through the user data and render each user */}
                {userData.map((user) => (
                    <div key={user.id} className="card-client">
                        <h2 className={inter.className}>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserClient;
