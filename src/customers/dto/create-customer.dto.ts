import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    customerName: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    contactLastName: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    contactFirstName: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    phone: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    addressLine1: string

    @IsOptional()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    addressLine2: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    city: string

    @IsOptional()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    state: string

    @IsOptional()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    postalCode: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(6)
    country: string

    @IsOptional()
    @IsNumber()
    @MaxLength(50)
    @MinLength(6)
    salesRepEmployeeNumber: number

    @IsOptional()
    @IsNumber()
    @MaxLength(50)
    @MinLength(6)
    creditLimit: number
}
