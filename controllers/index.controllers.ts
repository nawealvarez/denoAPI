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
export const getUser = (
    { params, response}: { params: {id: string}, response: Response }) => {
        const userFound = users.find(user => user.id === params.id)
        if (userFound) {
            response.status = 200;
            response.body = {
                message: 'You get a single user',
                userFound
            }
        } else {
            response.status = 404;
            response.body = {
                message: 'User not found'
            }
        }
    };


export const createUser = async ({
  response,
  request,
}: {
  response: Response;
  request: Request;
}) => {
    const body: Body = await request.body();

    if (!request.hasBody) {
        response.status = 404;
        response.body = {
            message: "Body is required"
        }
    } else {
    const newUser: User = body.value;
    newUser.id = v4.generate();

    users.push(newUser)

    response.status = 200;
    response.body = {
        messages: 'New User created',
        newUser
        }
    }
};
export const deleteUser = () => {};
export const updateUser = () => {};
