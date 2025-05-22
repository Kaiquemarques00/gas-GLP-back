// src/types/express.d.ts

import { IUser } from '../models/User'; // Exemplo, se você quiser tipar melhor o user

declare global {
  namespace Express {
    interface Request {
      user?: IUser | any; // Aqui você define o tipo do seu user, ou any para algo genérico
    }
  }
}
