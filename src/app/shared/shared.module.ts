import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RoleBtnComponent } from './components/role-btn/role-btn.component';
import { ButtonComponent } from './components/button/button.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [HeaderComponent, RoleBtnComponent, ButtonComponent, CapitalizePipe],
  imports: [CommonModule],
  exports: [HeaderComponent, RoleBtnComponent, ButtonComponent,CapitalizePipe],
  
})
export class SharedModule {}
