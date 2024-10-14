import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); // Initialize as null to avoid 'undefined' in the response
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    // Set error with response status and status text for better debugging
                    throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
                }

                const result = await res.json();
                setData(result.data || []); // Default to empty array if data is undefined
            } catch (err) {
                setError(err.message || 'Failed to fetch'); // Fallback error message
            } finally {
                setLoading(false); // Always set loading to false in finally block
            }
        };

        if (url) { // Check if URL is valid before fetching
            fetchData();
        }
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
