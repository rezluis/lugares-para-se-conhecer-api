import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/createPlace.dto';
import { UpdatePlaceDto } from './dto/updatePlace.dto';

@Controller('place')
export class PlaceController {
    constructor(private readonly placeService: PlaceService) {}

    @Post()
    async createPlace(@Body() place: CreatePlaceDto) {
        const exists = await this.placeService.exists(place.pais, place.local);
        if (exists) {
            throw new HttpException(
                'Este local já foi cadastrado para este país.',
                HttpStatus.CONFLICT,
            );
        }
        return this.placeService.createPlace(place)
    }

    @Get()
    findAll() {
        return this.placeService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdatePlaceDto) {
        return this.placeService.updatePlace(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.placeService.removePlace(+id);
    }
}
