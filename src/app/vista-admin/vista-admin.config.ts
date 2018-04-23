import { AppConfig } from '.././app.config';

export class AdminConfig {
  public static httpResource: any = {
    solicitudes:  AppConfig.SERVER_ADDRESS + 'usuario/leer'
  };
}