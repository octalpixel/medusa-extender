import { EntityRepository, Repository } from 'typeorm';
import { Repository as MedusaRepository } from '../../decorators';
import { Tenant } from './tenant.entity';

@MedusaRepository({ resolutionKey: 'tenantRepository' })
@EntityRepository(Tenant)
export default class TenantRepository extends Repository<Tenant> {}
