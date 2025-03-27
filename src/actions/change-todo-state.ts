'use server';

import ky from 'ky';
import { revalidateTag } from 'next/cache';

/**
 * 할 일의 상태를 변경하는 서버 액션입니다.
 *
 * 상태를 성공적으로 변경하였다면, 할 일 목록 데이터를 무효화합니다.
 * 상태를 변경하는 데 실패하였다면, 에러를 콘솔에 출력합니다.
 *
 */
const changeTodoState = async ({ id, isCompleted }: { id: number; isCompleted: boolean }) => {
    try {
        await ky.patch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
            json: {
                isCompleted: !isCompleted,
            },
        });
        revalidateTag('todos');
    } catch (err) {
        const error = err as Error;
        console.error(error);
    }
};

export default changeTodoState;
