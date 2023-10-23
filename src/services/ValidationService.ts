import { Service } from 'typedi'

@Service()
export class ValidationService {
  isValidEmail(email: string): boolean {
    const emailRegex = /^[\w\.-]+@([\w\-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
  }
}
