import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import {
  MatProgressBarModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatGridList,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';

// Application Services
import { BooksService } from './services/books/books.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BookModalComponent } from './modals/book-modal/book-modal.component';

// Validators
import { DuplicateTitleValidatorDirective } from './validators/book-validators.validator';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    CapitalizePipe,
    BookModalComponent,
    DuplicateTitleValidatorDirective
  ],
  entryComponents: [
    BookModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatInputModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    BooksService,
    CapitalizePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
