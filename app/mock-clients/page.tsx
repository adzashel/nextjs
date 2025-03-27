import { inter } from "../ui/fonts";

type Clients = {
    id: number,
    name: string
}




const getClients = async () => {
    const response = await fetch('https://67e5832118194932a5865cf4.mockapi.io/clients');
    const clients = await response.json();

    // function to add new clients
    const addClient = async (formData: FormData) => {
        "use server" // to tell nextjs this function is executed on server
        const name = formData.get("name");
        // add new client to the server 
        const response = await fetch('https://67e5832118194932a5865cf4.mockapi.io/clients', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            throw new Error("Error adding client");
        }
        const newClients = await response.json();
        console.log(newClients);
    }
    return (
        <>
            <h1>Our Clients</h1>

            <div>
                <form action={addClient}>
                    <input type="text" id="name" name="name" required className="form" />
                    <button type="submit" className="btn-sbmt">Add Client</button>
                </form>
                <div className="card-container">
                    {/* map through the user data and render each user */}
                    {clients.map((user: Clients) => (
                        <div key={user.id} className="card-client">
                            <h2 className={inter.className}>{user.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default getClients;