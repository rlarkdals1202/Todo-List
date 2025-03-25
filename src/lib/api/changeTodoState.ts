'use server';

import ky from 'ky';
import { revalidateTag } from 'next/cache';

const changeTodoState = async ({ id, isCompleted }: { id: number; isCompleted: boolean }) => {
    try {
        await ky.patch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
            json: {
                isCompleted: !isCompleted,
            }
        })
        revalidateTag('todos');
    } catch (err) {
        const error = err as Error;
        console.error(error);
    }
}

export default changeTodoState;
