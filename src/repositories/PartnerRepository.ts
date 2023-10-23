import { Inject, Service } from 'typedi'
import PartnerModel, { Partner } from '../db/models/partner'
import { ValidationService } from '../services/ValidationService'


@Service()
export class PartnerRepository {

  constructor(@Inject('PartnerModel') private partnerModel: typeof PartnerModel, private validationService: ValidationService) {
  }

  async save(partner: Partner): Promise<Partner> {
    const newPartner = new this.partnerModel(partner)
    return newPartner.save()
  }

  async findByEmail(email: string): Promise<Partner | null> {
    return this.partnerModel.findOne({ email })
  }
}
