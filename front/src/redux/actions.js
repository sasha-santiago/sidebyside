import axios from 'axios';
import { FROM_CITY_TO_COORDS,FETCH_CREATE_JOURNEY, FETCH_FIND_ALL_JOURNEY,FETCH_FIND_QUERY_JOURNEY ,FETCH_SUBMIT_CREATED_JOURNEY} from './types';


export function fetchFromCityToCoordsAC() {
  return async (dispatch) => {
    const response = await axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=Лондон');
    dispatch({ type: FROM_CITY_TO_COORDS, payload: response.data.response });
  };
}

export function fetchCreateJourneyAC(value){
  return async (dispatch) => {
    const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=${value}`);
    dispatch({ type: FETCH_CREATE_JOURNEY, payload: response.data.response });
    
  };
}

export function fetchFindAllJourneyAC(){
  return async (dispatch) => {
    const response = await axios.get(process.env.REACT_APP_URL_FIND_ALL_TRIP);
    console.log(response);
    dispatch({ type: FETCH_FIND_ALL_JOURNEY, payload: response.data });
    
  };
}

export function fetchFindQueryJourneyAC(value){
  return async (dispatch) => {
    const response = await axios.post(process.env.REACT_APP_URL_FIND_ALL_TRIP,{
      coords: value
    });
    console.log(response);
    dispatch({ type: FETCH_FIND_QUERY_JOURNEY, payload: response.data.response });
  };
}

export function fetchSubmitJourneyAC(value){
  console.log(value);
  return async (dispatch) => {
    const response = await axios.post(process.env.REACT_APP_URL_ADDTRIP,{
      country: value.country, budget: value.budget, startDate: value.startDate,
      endDate: value.endDate,
      tripInfo: value.tripInfo,
      email: value.email, startCoords: value.firstPoint,
      finalCoords: value.lastPoint,
      betweenCoords: value.between
    });
    console.log(response);
    dispatch({ type: FETCH_SUBMIT_CREATED_JOURNEY, payload: response.data });
  };
}
