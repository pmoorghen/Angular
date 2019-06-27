import {inject, TestBed} from '@angular/core/testing';
import {ValidationService} from './validation-service';

describe('isValidName', () => {
  it('should return true if a valid name is entered', inject([ValidationService], (service: ValidationService) => {
    expect(service.isValidName('chervine')).toBe(true);
  }));

  it('should return false if an invalid name is entered', inject([ValidationService], (service: ValidationService) => {
    expect(service.isValidName('chervine123')).toBe(false);
  }));
})
