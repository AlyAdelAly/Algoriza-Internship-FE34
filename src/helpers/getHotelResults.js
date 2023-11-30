export const getHotelResultsFromLocalStorage =  () => {
    let hotelResults = localStorage.getItem('HotelResults')
    let parsedHotelResults = JSON.parse(hotelResults)
    return parsedHotelResults
}

export const getHotelMetaDataFromLocalStorage = () => {
    let metaResults = localStorage.getItem('MetaResults')
    let parsedMetaResults = JSON.parse(metaResults)
    return parsedMetaResults
}

export const isHotelResultsRetrieved = () => {
    if(localStorage.getItem('HotelResults')) return true
    else return false
}