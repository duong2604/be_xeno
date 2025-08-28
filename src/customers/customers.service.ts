import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customers.create({
      data: createCustomerDto 
    })
  }

  async findAll() {
    const customers = await this.prisma.customers.findMany();
    return customers;
  }

  async findOne(id: number) {
    return this.prisma.customers.findUnique({ where: { customerNumber: id } });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  async remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
