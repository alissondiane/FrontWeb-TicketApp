import { TestBed, inject } from '@angular/core/testing';

import { VistaAdminService } from './vista-admin.service';

describe('VistaAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaAdminService]
    });
  });

  it('should be created', inject([VistaAdminService], (service: VistaAdminService) => {
    expect(service).toBeTruthy();
  }));
});
