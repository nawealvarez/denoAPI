import { Response, Request, Body } from 'https://deno.land/x/oak/mod.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";

interface User {
  id: string
  name: string
}

const users: User[] = [
  {
    id: '1',
    name: 'Ryan Rynolds',
  },
];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    messages: 'successful query',
    users,
  };
};
export const getUser = () => {};

interface userBody {
    name: string
}
export const createUser = async ({
  response,
  request,
}: {
  response: Response;
  request: Request;
}) => {
    const body: Body = await request.body();

    const newUser: userBody = body.value;
    users.push({
        id: v4.,
        name: newUser.name
    })
    response.body = {
        messages: 'received'
    }
};
export const deleteUser = () => {};
export const updateUser = () => {};
