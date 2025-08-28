import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customers.create({
      data: createCustomerDto,
    });
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

  async getPaidCustomer() {
    const results = await this.prisma.$queryRaw`
      SELECT c.customerNumber, c.customerName, p.paymentDate
      FROM customers c
      LEFT JOIN payments p
      ON c.customerNumber = p.customerNumber
      WHERE p.paymentDate IS NOT NULL;
     `;
    return results;
  }

  async calcTotalPaidPerCustomer() {
    const results = await this.prisma.$queryRaw`
      SELECT c.customerNumber, c.customerName, SUM(p.amount) as total_paid
      FROM payments AS p
      JOIN customers c
      ON c.customerNumber = p.customerNumber
      GROUP BY c.customerNumber
      ORDER BY total_paid DESC;
    `;
    return results;
  }
}
