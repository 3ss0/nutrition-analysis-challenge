import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NutritionLayoutComponent } from "./nutrition-layout/nutrition-layout.component";
import {LoaderComponent} from './loader/loader.component';
import { ToasterComponent } from './toaster/toaster.component';
export const components: any[] = [
  FooterComponent,
  HeaderComponent,
  NutritionLayoutComponent,
  LoaderComponent,
  ToasterComponent
];

export * from './footer/footer.component';
export * from './header/header.component';
export * from './nutrition-layout/nutrition-layout.component';
export * from './loader/loader.component';
export * from './toaster/toaster.component';