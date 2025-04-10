import { IsNotEmpty, IsString, IsUrl, Matches } from "class-validator"

export class CreatePlaceDto{
    @IsString()
    @IsNotEmpty({message: "O pais é obrigatorio."})
    pais: string

    @IsString()
    @IsNotEmpty({ message: 'A regiao é obrigatório.' })
    local: string

    @IsString()
    @Matches(/^(0[1-9]|1[0-2])\/\d{4}$/, {
      message: 'A meta deve estar no formato MM/YYYY',
    })
    meta: string

    @IsUrl({}, { message: 'A URL da bandeira deve ser válida.' })
    bandeira_url: string
}