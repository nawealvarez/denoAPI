import { Response, Request, Body } from 'https://deno.land/x/oak/mod.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";

interface User {
  id: string
  name: string
}

let users: User[] = [
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
    const newUser: any = body?.value;
    if (newUser) {
        newUser.id = v4.generate();
    
        users.push(newUser);
    }

    response.status = 200;
    response.body = {
        messages: 'New User created',
        newUser
        }
    }
};
export const deleteUser = (
    { params, response}: { params: {id: string}, response: Response }
) => {
    users = users.filter(user => user.id !== params.id);
    response.status = 200;
    response.body = {
        message: 'User deleted'
    }
};
export const updateUser = async (
    { params, request, response}: { params: {id: string}, request: Request, response: Response }) => {
        const userFound = users.find(user =>user.id === params.id);
        if (!userFound) {
            response.status = 404;
            response.body = {
                message: 'User not found'
            }
        } else {
            const body = await request.body();
            const updatedUser = body?.value;
            
            users = users.map(user => user.id === params.id ? {...user, ...updatedUser} : user);
            response.status = 200;
            response.body = {
                message: 'User updated',
                users
            }
        }
    };
