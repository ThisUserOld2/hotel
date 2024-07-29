import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import {
  IHotel,
  IHotelDetails,
  IRoom,
} from 'src/domain/interfaces/hotel.interface';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { CreateRoomComponent } from '../create-room/create-room.component';
import { CurrencyPipe } from '@angular/common';
import { EditHotelComponent } from '../edit-hotel/edit-hotel.component';
import { EditRoomComponent } from '../edit-room/edit-room.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONSTANTS } from 'src/domain/constants/app.constant';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    CardComponent,
    CurrencyPipe,
    ListComponent,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.sass',
})
export class HotelComponent {
  private _route = inject(ActivatedRoute);
  private _adminFacade = inject(AdminFacade);
  private _snackbar = inject(MatSnackBar);
  public hotelDetails!: Signal<IHotelDetails | undefined>;
  readonly dialog = inject(MatDialog);
  readonly displayedColumns: string[] = [
    'id',
    'type',
    'size',
    'allowed_guests',
    'price',
    'tax',
    'total_price',
    'active',
    'button',
  ];
  public hotel!: IHotel;

  constructor() {
    const id = String(this._route.snapshot.paramMap.get('id'));
    this.hotelDetails = toSignal(this._adminFacade.requestHotelDetails(id));
  }

  public onEditHotelClick(): void {
    const hotelDetails: IHotelDetails | undefined = this.hotelDetails();
    if (hotelDetails) {
      const { id, name, address, phone } = hotelDetails;
      const hotel: IHotel = { id, name, address, phone };
      this.dialog.open(EditHotelComponent, {
        data: hotel,
      });
    }
  }

  public onCreateRoomClick(): void {
    this.dialog.open(CreateRoomComponent);
  }

  public onEditRoomClick(room: IRoom): void {
    this.dialog.open(EditRoomComponent, {
      data: room,
    });
  }

  public onToogleActive(id: string): void {
    this._adminFacade.setRoomActive(id).subscribe(() =>
      this._snackbar.open('Update complete!', 'ok', {
        duration: APP_CONSTANTS.SNACKBAR_DURATION,
      })
    );
  }
}
