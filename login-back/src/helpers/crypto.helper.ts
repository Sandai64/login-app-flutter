import {createHash} from 'node:crypto';

export class HelperCrypto
{
  public static hash(str: string) : string
  {
    return createHash('sha256').update(str).digest('hex');
  }
}
