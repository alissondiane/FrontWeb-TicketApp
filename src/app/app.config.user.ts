import { AppConfig } from './app.config';

export class UserConfig {
  public static httpResource: any = {
    solicitudes:  AppConfig.SERVER_ADDRESS + '/alumno/leer'
  };
}