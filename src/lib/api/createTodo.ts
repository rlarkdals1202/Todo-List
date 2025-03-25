'use server';

import ky from 'ky';
import { revalidateTag } from 'next/cache';
const createTodo = async (_: any, formData: FormData) => {
    const todo = formData.get('todo')?.toString();

    if (!todo || todo.length === 0) {
        return { status: 'error', error: '할 일을 입력해주세요.' };
    }

    try {
        await ky.post(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
            json: {
                name: todo,
            },
        });
        revalidateTag('todos');
        return { status: 'success' };
    } catch (err) {
        const error = err as Error;
        console.error(error);
        return { status: 'error', error: error.message };
    }
};

export default createTodo;
