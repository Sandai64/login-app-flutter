import {inject} from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings
} from '@loopback/rest';
import {HelperCrypto} from '../helpers/crypto.helper';
import {HelperDB} from '../helpers/db.helper';

interface LoginRequest {
  email: string;
  password: string;
}

export class AuthController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @post('/login')
  async login(
    @requestBody() loginRequest: LoginRequest,
    @inject(RestBindings.Http.RESPONSE) response: Response
  ) {
    if (!loginRequest.email || !loginRequest.password) {
      console.log('params not found', loginRequest);
      response.status(400).send({message: 'Email and password are required'});
      return;
    }

    const user = HelperDB.getUserByEmail(loginRequest.email);
    if (user && user.password === HelperCrypto.hash(loginRequest.password)) {
      // If the user is found and passwords match, return the user object
      return user;
    }

    console.log('User with email', loginRequest.email, 'not found or password mismatch');
    response.status(401).send({message: 'Invalid email or password'});
  }
}
