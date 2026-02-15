import { API_BASE } from "../config";

const BASE_URL = `${API_BASE}/api/events`;

export const getEvents = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch events");
    return res.json();
};

export const createEvent = async (event) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
    });
    if (!res.ok) throw new Error("Failed to create event");
    return res.json();
};

export const addMatatuTickets = () => [
    { name: "Regular", price: 1000, capacity: 14 },
    { name: "VIP", price: 3000, capacity: 6 },
];
