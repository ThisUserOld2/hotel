import { IMock } from 'src/domain/interfaces/mock.interface';
import {
  MOCK_GET_HOTEL_SUCCESS,
  MOCK_GET_HOTELS_SUCCESS,
  MOCK_POST_HOTEL_SUCCESS,
  MOCK_PUT_HOTEL_SUCCESS,
} from './hotels.mock';
import {
  MOCK_POST_HOTEL_ROOM_SUCCESS,
  MOCK_PUT_HOTEL_ROOM_ACTIVE_SUCCESS,
  MOCK_PUT_HOTEL_ROOM_SUCCESS,
} from './room.mock';

export const APP_MOCKS: Array<IMock<unknown>> = [
  MOCK_GET_HOTELS_SUCCESS,
  MOCK_POST_HOTEL_SUCCESS,
  MOCK_PUT_HOTEL_SUCCESS,
  MOCK_GET_HOTEL_SUCCESS,
  MOCK_POST_HOTEL_ROOM_SUCCESS,
  MOCK_PUT_HOTEL_ROOM_SUCCESS,
  MOCK_PUT_HOTEL_ROOM_ACTIVE_SUCCESS,
];
