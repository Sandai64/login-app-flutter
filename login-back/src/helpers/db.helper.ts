import {UserModel} from '../models/user.model';
import {HelperCrypto} from './crypto.helper';

export class HelperDB
{
  private static users: Record<string, UserModel> = {
    'user@example.com': {
      'password': HelperCrypto.hash('userpass'),
      'firstName': 'Jane',
      'lastName': 'Doe',
      'role': 'User'
    },
    'admin@example.com': {
      'password': HelperCrypto.hash('adminpass'),
      'firstName': 'Admin',
      'lastName': 'User',
      'role': 'Admin',
    },
  };

  public static getUserByEmail(email: string) : UserModel | null
  {
    if ( Object.keys(this.users).includes(email) )
    {
      return this.users[email];
    }

    return null;
  }
}
