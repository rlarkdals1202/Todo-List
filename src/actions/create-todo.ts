'use server';

import ky from 'ky';
import { revalidateTag } from 'next/cache';

/**
 * 할 일을 생성하는 서버 액션입니다.
 *
 * 할 일을 성공적으로 생성하였다면, 할 일 목록 데이터를 무효화하고, 생성 성공 관련 객체를 반환합니다.
 * 할 일을 생성하는 데 실패하였다면, 에러를 콘솔에 출력하고, 생성 실패 관련 객체를 반환합니다.
 *
 */
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
