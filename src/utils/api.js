import axios from "axios";

const bookingApi = axios.create({
    baseURL: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/',
    headers: {
        'X-RapidAPI-Key': 'aedb80e966mshf06e46571bf33bep19511cjsn71a9836c7044',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
});

export const searchHotelDestination = (query) => {
    return bookingApi.get('searchDestination', {
        params: {
            query,
        }
    })
};

export const searchHotels = (query) => {
    return bookingApi.get('searchHotels', {
        params: {
            dest_id: query.dest_id,
            search_type: 'CITY',
            arrival_date: query.arrival_date,
            departure_date: query.departure_date,
            adults: query.adults,
            room_qty: query.room_qty,
            page_number: query.page_number,
        }
    })
}

export const getSortBy = (query) => {
    return bookingApi.get('getSortBy', {
        params: {
            dest_id: query.dest_id,
            search_type: 'CITY',
            arrival_date: query.arrival_date,
            departure_date: query.departure_date,
        }
    })
}

export const getFilterBy = (query) => {
    return bookingApi.get('getFilter', {
        params: {
            dest_id: query.dest_id,
            search_type: 'CITY',
            arrival_date: query.arrival_date,
            departure_date: query.departure_date,
        }
    })
}

export const getHotelDetails = (query) => {
    return bookingApi.get('getHotelDetails', {
        params: {
            hotel_id: query.hotel_id,
            arrival_date: query.arrival_date,
            departure_date: query.departure_date,
        }
    })
}