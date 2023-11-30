import axios from "axios";

const bookingApi = axios.create({
    baseURL: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/',
    headers: {
        'X-RapidAPI-Key': '5b948d26ffmsh0351c1837b0fd74p1d4553jsn68afa74794e1',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
});

export const searchHotelDestination = () => {
    return bookingApi.get('searchDestination', {
        params: {
            query: 'egypt'
        },
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
            page_number: query.page_number || '1',
            sort_by: query.sort_by
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