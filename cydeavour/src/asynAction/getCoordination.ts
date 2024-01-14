import { backendUrl } from "../globalConfig";
export const getCoordination = async () => {
    try {
        const response = await fetch(backendUrl, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching coordination:', error);
        throw error; // Handle or log the error appropriately
    }
};
