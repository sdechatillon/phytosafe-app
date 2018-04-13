//Modules auto-générés à la création de l'application 
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Modules importés
import { IonicStorageModule } from '@ionic/storage';
import { NgIdleModule } from '@ng-idle/core';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// The translate loader needs to know where to load i18n files in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//Pages créées pour l'application
import { Accueil } from '../pages/accueil/accueil';
import { Maladie } from '../pages/formulaire/maladie/maladie';
import { Therapies } from '../pages/formulaire/therapies/therapies';
import { TherapiesAlter } from '../pages/formulaire/therapies-alter/therapies-alter';
import { TraitementNom } from '../pages/formulaire/traitement-nom/traitement-nom';
import { InfoPerso } from '../pages/formulaire/info-perso/info-perso';
import { FinFormulaire } from '../pages/formulaire/fin-formulaire/fin-formulaire';
import { RaisonRefusFormulaire } from '../pages/formulaire/raison-refus-formulaire/raison-refus-formulaire';
import { RefusFormulaire } from '../pages/formulaire/refus-formulaire/refus-formulaire';
import { Autocomplete } from '../pages/autocomplete/autocomplete';

//Modules créés pour l'application (providers)
import { Api } from '../providers/api';
import { Inactif } from '../providers/inactif';
import { Formulaire } from '../providers/formulaire';
import { LocalStockage } from '../providers/localstockage';
import { Diacritics } from '../providers/diacritics';
import { Traitement } from '../providers/traitement';
import { Cancer } from '../providers/cancer';
import { TherapieValidator } from '../providers/validators';

@NgModule({
  declarations: [
    MyApp,
    Accueil,
    Maladie,
    Therapies,
    TherapiesAlter,
    TraitementNom,
    InfoPerso,
    FinFormulaire,
    RaisonRefusFormulaire,
    RefusFormulaire,
    Autocomplete
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    NgIdleModule.forRoot(),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Accueil,
    Maladie,
    Therapies,
    TherapiesAlter,
    TraitementNom,
    InfoPerso,
    FinFormulaire,
    RaisonRefusFormulaire,
    RefusFormulaire,
    Autocomplete
  ],
  providers: [
    Api,
    Inactif,
    Formulaire,
    LocalStockage,
    Diacritics,
    Traitement,
    Cancer,
    TherapieValidator,
    SplashScreen,
    StatusBar,
    Keyboard,
    Geolocation,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
