'use server';

import ky from 'ky';
import TodoInfo from '@/types/todo-info.interface';

const patchTodo = async (todoToUpdate: TodoInfo) => {
    const { id, ...rest } = todoToUpdate;
    try {
        await ky.patch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
            json: rest,
        });
        return { status: 'success' };
    } catch (error) {
        console.error(error);
        return { status: 'error', message: '할 일을 수정할 수 없습니다. 잠시 후 다시 시도해주세요.' };
    }
};

export default patchTodo;
