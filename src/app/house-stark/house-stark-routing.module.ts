import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseStarkComponent } from './house-stark.component';

const routes: Routes = [
  {
    path: '',
    component: HouseStarkComponent,
    children: [
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'track-order',
        loadChildren: () =>
          import('./track-order/track-order.module').then(
            (m) => m.TrackOrderModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'address',
        loadChildren: () =>
          import('./address/address.module').then((m) => m.AddressModule),
      },
      {
        path: 'change-num',
        loadChildren: () =>
          import('./change-num/change-num.module').then(
            (m) => m.ChangeNumModule
          ),
      },
      {
        path: 'change-num2',
        loadChildren: () =>
          import('./change-num2/change-num2.module').then(
            (m) => m.ChangeNum2Module
          ),
      },
      {
        path: 'edit-profile',
        loadChildren: () =>
          import('./edit-profile/edit-profile.module').then(
            (m) => m.EditProfileModule
          ),
      },
      {
        path: 'empty-cart',
        loadChildren: () =>
          import('./empty-cart/empty-cart.module').then(
            (m) => m.EmptyCartModule
          ),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'favourites',
        loadChildren: () =>
          import('./favourites/favourites.module').then(
            (m) => m.FavouritesModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'intro',
        loadChildren: () =>
          import('./intro/intro.module').then((m) => m.IntroModule),
      },
      {
        path: 'item-added',
        loadChildren: () =>
          import('./item-added/item-added.module').then(
            (m) => m.ItemAddedModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'manage-address',
        loadChildren: () =>
          import('./manage-address/manage-address.module').then(
            (m) => m.ManageAddressModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./offers/offers.module').then((m) => m.OffersModule),
      },
      {
        path: 'order-placed',
        loadChildren: () =>
          import('./order-placed/order-placed.module').then(
            (m) => m.OrderPlacedModule
          ),
      },
      {
        path: 'order-history',
        loadChildren: () =>
          import('./order-history/order-history.module').then(
            (m) => m.OrderHistoryModule
          ),
      },
      {
        path: 'order-completed',
        loadChildren: () =>
          import('./order-completed/order-completed.module').then(
            (m) => m.OrderCompletedModule
          ),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
      {
        path: 'product-page',
        loadChildren: () =>
          import('./product-page/product-page.module').then(
            (m) => m.ProductPageModule
          ),
      },
      {
        path: 'rating',
        loadChildren: () =>
          import('./rating/rating.module').then((m) => m.RatingModule),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
      {
        path: 'rp',
        loadChildren: () => import('./rp/rp.module').then((m) => m.RpModule),
      },
      {
        path: 'rpc',
        loadChildren: () => import('./rpc/rpc.module').then((m) => m.RpcModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseStarkRoutingModule {}
