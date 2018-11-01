import {NgModule} from '@angular/core';
import {
    MatButtonModule, 
    MatCheckboxModule, 
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
} from '@angular/material';


@NgModule({
    imports: [
        MatBadgeModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatBadgeModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule {}

