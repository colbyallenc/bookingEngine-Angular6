import {NgModule} from '@angular/core';
import {
    MatButtonModule, 
    MatCheckboxModule, 
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material';


@NgModule({
    imports: [
        MatBadgeModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatBadgeModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ]
})

export class MaterialModule {}

