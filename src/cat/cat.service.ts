import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat | null> {
    return this.catsRepository.findOne({ where: { id } });
  }

  async createOne(createCatDto: CreateCatDto) {
    const newCat = this.catsRepository.create(createCatDto);
    return this.catsRepository.save(newCat);
  }
}
