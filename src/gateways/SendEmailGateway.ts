import { Service } from 'typedi'

@Service()
export class EmailGateway {

  // tslint:disable-next-line:no-empty
  constructor() {
  }

  async sendEmail(email: string): Promise<string> {
    return 'test'
  }
}
