import { useState, useEffect } from "react";
import { backendApi } from "../../backendApi.js";

export const useFetchHotelRooms = (hotelId) => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!hotelId) return; 

        const fetchRooms = async () => {
            try {
                const response = await fetch(`${backendApi}/room/get/${hotelId}`);
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                setRooms(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, [hotelId]); 

    return { rooms, loading, error };
};
