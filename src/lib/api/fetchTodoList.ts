import ky from 'ky';
import type Todo from '@/types/todo.interface';

const fetchTodoList = async () => {
    try {
        const todoList = await ky
            .get(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
                next: {
                    tags: ['todos'],
                },
            })
            .json<Todo[]>();
        return todoList;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default fetchTodoList;
