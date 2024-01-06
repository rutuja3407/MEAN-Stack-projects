import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { FirstCompComponent } from './app/first-comp/first-comp.component';

const bootstrap = () => bootstrapApplication(FirstCompComponent, config);

export default bootstrap;
