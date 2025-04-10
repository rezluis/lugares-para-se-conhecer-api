import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/createPlace.dto';
import { UpdatePlaceDto } from './dto/updatePlace.dto';

@Injectable()
export class PlaceService {
    constructor(
        @InjectRepository(Place)
        private readonly placeRepository: Repository<Place>,
    ){}

    async createPlace(dto: CreatePlaceDto): Promise<Place>{
        const place = this.placeRepository.create(dto)
        return this.placeRepository.save(place);
    }

    async findAll(): Promise<Place[]>{
        return this.placeRepository.find({
            order: {
                meta: 'ASC'
            },
        });
    }

    async updatePlace(id: number, dto: UpdatePlaceDto): Promise<Place> {
        const place = await this.placeRepository.findOneBy({ id });
        if(!place) {
            throw new NotFoundException('Lugar nao encontrado.');
        }

        place.local = dto.local ?? place.local;
        place.meta = dto.meta ?? place.meta;
        return this.placeRepository.save(place);
    }

    async removePlace(id: number): Promise<void>{
        const result = await this.placeRepository.delete(id);
        if(result.affected == 0){
            throw new NotFoundException('Lugar não encontrado para remoção')
        }
    }

    async exists(pais: string, local: string): Promise<boolean> {
        const exists = await this.placeRepository.findOneBy({ pais, local });
        return !!exists;
    }
}
