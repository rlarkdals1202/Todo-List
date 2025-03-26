'use server';

import ky from 'ky';

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
