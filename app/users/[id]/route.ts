import { User } from "../route";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;

    const user = User.find((data) => data.id === parseInt(id));
    return Response.json(user);
}