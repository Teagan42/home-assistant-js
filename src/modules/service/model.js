import { Immutable, toImmutable } from 'nuclear-js';
import { callApi } from '../api';

const ENTITY = 'service';

const ImmutableService = new Immutable.Record({
  domain: null,
  services: [],
}, 'ServiceDomain');

class ServiceDomain extends ImmutableService {
  constructor(domain, services) {
    super({ domain, services });
  }

  get id() {
    return this.domain;
  }

  static fetchAll() {
    return callApi('GET', 'services');
  }

  static fromJSON({ domain, services }) {
    return new ServiceDomain(domain, toImmutable(services));
  }

}

ServiceDomain.entity = ENTITY;

export default ServiceDomain;
