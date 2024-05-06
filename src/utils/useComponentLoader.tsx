import { useState, useEffect } from 'react';
import axios from 'axios';

const useComponentLoader = (filePath: string) => {
    const [componentCode, setComponentCode] = useState('');

    useEffect(() => {
        const fetchComponentCode = async () => {
            try {
                const response = await axios.get(filePath);
                setComponentCode(response.data.split('export const Text =')[1]);
            } catch (error) {
                console.error(
                    'Błąd podczas pobierania kodu komponentu:',
                    error
                );
            }
        };

        fetchComponentCode();
    }, [filePath]);

    return { componentCode };
};

export default useComponentLoader;
