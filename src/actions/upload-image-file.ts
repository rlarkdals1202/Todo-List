'use server';

import ky from 'ky';

const uploadImageFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await ky.post(`${process.env.NEXT_PUBLIC_API_URL}/images/upload`, {
            body: formData,
        });

        const { url: imageUrl } = await response.json<{ url: string }>();
        return {
            status: 'success',
            imageUrl,
        };
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            error: '이미지 업로드에 실패했습니다.',
        };
    }
};

export default uploadImageFile;
