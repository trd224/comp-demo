import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './modules/mat.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { BottomSheetContentComponent } from './components/bottom-sheet-content/bottom-sheet-content.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectComponent } from './components/select/select.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SortDataComponent } from './components/sort-data/sort-data.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { ExcelComponent } from './components/excel/excel.component';
import { Excel2Component } from './components/excel2/excel2.component';
import { ImportExcelComponent } from './components/import-excel/import-excel.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ChartComponent } from './components/chart/chart.component';
import { MomentComponent } from './components/moment/moment.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { GetDataComponent } from './components/get-data/get-data.component';
import { EpansionPanelComponent } from './components/epansion-panel/epansion-panel.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { ChangeDetectionChildComponent } from './components/change-detection-child/change-detection-child.component';
import { TabComponent } from './components/tab/tab.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    TabsComponent,
    PaginationComponent,
    TableComponent,
    AutoCompleteComponent,
    BottomSheetComponent,
    BottomSheetContentComponent,
    CheckboxComponent,
    SelectComponent,
    FormDataComponent,
    FileUploadComponent,
    SortDataComponent,
    DialogComponent,
    DialogContentComponent,
    ExcelComponent,
    Excel2Component,
    ImportExcelComponent,
    PdfComponent,
    ChartComponent,
    MomentComponent,
    FormArrayComponent,
    CombineLatestComponent,
    GetDataComponent,
    EpansionPanelComponent,
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
    TabComponent,
    DragDropComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
