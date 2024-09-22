import { Controller,Get, Post } from '@nestjs/common';
import { CorredoresService } from './corredores.service';


@Controller('corredores')
export class CorredoresController {


    constructor(private readonly productService: CorredoresService) {}


    @Get()
    getcorredor() {
        return this.productService.getproducts();
    }
    
        













}

