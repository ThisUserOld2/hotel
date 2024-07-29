import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HotelApi } from 'src/domain/apis/hotel.api';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import {
  IHotel,
  IHotelDetails,
  IHotelsResponse,
} from 'src/domain/interfaces/hotel.interface';
import { AppService } from 'src/domain/services/app.service';

@Injectable({ providedIn: 'root' })
export class AdminFacade {
  public _appService = inject(AppService);
  public _hotelApi = inject(HotelApi);

  public onChangeMenuItem(url: string): void {
    this._appService.goTo(url);
  }

  public requestHotels(): Observable<IHotel[]> {
    return this._hotelApi
      .requestHotels()
      .pipe(map(({ hotels }: IHotelsResponse) => hotels));
  }

  public createHotel(hotel: Omit<IHotel, 'id'>): Observable<null> {
    return this._hotelApi.createHotel(hotel);
  }

  public updateHotel(hotel: IHotel): Observable<null> {
    return this._hotelApi.updateHotel(hotel);
  }

  public requestHotelDetails(id: string): Observable<IHotelDetails> {
    return this._hotelApi.requestHotelDetailsById(id);
  }

  public openHotel(id: string): void {
    const url = APP_ROUTES.ADMIN.CHILDREN.HOTEL.URL + id;
    this._appService.goTo(url);
  }
}
