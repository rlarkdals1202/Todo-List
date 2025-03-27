'use server';

import ky from 'ky';
import TodoInfo from '@/types/todo-info.interface';

/**
 * 할 일을 수정하는 서버 액션입니다.
 *
 * 할 일을 성공적으로 수정하였다면, 수정 성공 관련 객체를 반환합니다.
 * 할 일을 수정하는 데 실패하였다면, 에러를 콘솔에 출력하고, 수정 실패 관련 객체를 반환합니다.
 *
 */
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
