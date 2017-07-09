import { Routes, ActivatedRoute, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
	{path: 'page1/:id', component: Page1Component },
	{path: 'page2', component: Page2Component }
];

export const appRouterModule = RouterModule.forRoot(routes);