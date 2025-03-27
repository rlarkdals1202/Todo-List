'use server';

import ky from 'ky';

/**
 * 할 일을 삭제하는 서버 액션입니다.
 *
 * 할 일을 성공적으로 삭제하였다면, 삭제 성공 관련 객체를 반환합니다.
 * 할 일을 삭제하는 데 실패하였다면, 에러를 콘솔에 출력하고, 삭제 실패 관련 객체를 반환합니다.
 *
 */
const deleteTodo = async (itemId: number) => {
    try {
        await ky.delete(`${process.env.NEXT_PUBLIC_API_URL}/items/${itemId}`);
        return { status: 'success' };
    } catch (error) {
        console.error(error);
        return { status: 'error', message: '할 일을 삭제할 수 없습니다. 잠시 후 다시 시도해주세요.' };
    }
};

export default deleteTodo;
