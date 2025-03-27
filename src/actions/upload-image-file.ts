'use server';

import ky from 'ky';

/**
 * 이미지 파일을 업로드하는 서버 액션입니다.
 *
 * 이미지 파일을 성공적으로 업로드하였다면, 업로드 성공 관련 객체를 반환합니다. 객체에는 업로드된 이미지의 URL이 포함됩니다.
 * 이미지 파일을 업로드하는 데 실패하였다면, 에러를 콘솔에 출력하고, 업로드 실패 관련 객체를 반환합니다.
 *
 */
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
