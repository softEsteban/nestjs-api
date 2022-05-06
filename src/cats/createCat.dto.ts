import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCat {
    @IsNotEmpty()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    breed: string;
}
export default CreateCat;
