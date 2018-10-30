import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material'

@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatCheckboxModule],
    exports: [MatBadgeModule, MatButtonModule, MatCheckboxModule],
})

export class MaterialModule {}

