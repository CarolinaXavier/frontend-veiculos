import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'novo', component: CreateComponent },
  { path: 'editar/:id', component: EditComponent }
];
export const VeiculosRoutingRoutes = RouterModule.forChild(routes);
