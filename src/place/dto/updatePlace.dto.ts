import { IsOptional, IsString, Matches } from "class-validator";

export class UpdatePlaceDto{

    @IsOptional()
    @IsString()
    local?: string

    @IsOptional()
    @Matches(/^(0[1-9]|1[0-2])\/\d{4}$/, {
        message: 'A meta deve estar no formato MM/YYYY',
    })
    meta?: string
}