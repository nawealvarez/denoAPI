import { Response, Request } from 'https://deno.land/x/oak/mod.ts';

interface User {
  id: string;
  name: string;
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
export const createUser = ({
  response,
  request,
}: {
  response: Response;
  request: Request;
}) => {
    console.log(request)
};
export const deleteUser = () => {};
export const updateUser = () => {};
