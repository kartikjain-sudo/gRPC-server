import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'Accumulate')

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    return { sum: this.appService.accumulate(numberArray.data) };
  }
}
