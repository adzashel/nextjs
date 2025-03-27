import { resolve } from "path";
import { inter } from "../ui/fonts";

type User = {
    id: number,
    name: string,
    email: string,
    username: string,
    phone: string,
}

const api = 'https://jsonplaceholder.typicode.com/users/1223';

 const UserServer = async() => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(api);
    const data = await response.json();

    return (
        <><h1>Our Client</h1>
                    <div className="card-container">
                        {/* map through the user data and render each user */}
                        {data.map((user : User) => (
                            <div key={user.id} className="card-client">
                                <h2 className={inter.className}>{user.username}</h2>
                                <p>{user.email}</p>
                            </div>
                        ))}
                    </div>
                </>
    )
    
}

export default UserServer;