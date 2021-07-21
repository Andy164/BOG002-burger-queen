import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapitalizePipe } from './capitalize.pipe';

describe('capitalize', () => {
  it('should capitalize the first letter in every word', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('ana maria')).toBe('Ana Maria')
  });
});
