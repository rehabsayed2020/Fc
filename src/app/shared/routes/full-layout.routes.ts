import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
 
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'homeservices',
    loadChildren: () => import('../../pages/servicestable/servicestable.module').then(m => m.ServicestableModule)
  },
  {
    path: 'services',
    loadChildren: () => import('../../pages/script-revision/script-revision.module').then(m => m.ScriptRevisionModule)
  },
  {
    path: 'serviceshoot',
    loadChildren: () => import('../../pages/shoots/shoots.module').then(m => m.ShootsModule)
  },

  
  
];
