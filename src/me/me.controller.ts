import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('me')
export class MeController {
  @Get()
  async getProfile() {
    try {
      // Fetch the cat fact from an external API
      const response = await axios.get('https://catfact.ninja/fact', {
        timeout: 5000,
      });
      const catFact = response.data?.fact || 'Cats are sassy';
      // Build and return the response object
      return {
        status: 'success',
        user: {
          email: 'tochukwuvictor563@gmail.com',
          name: 'Tochukwu Victor Obioha',
          stack: 'NestJS, and axios',
        },
        timestamp: new Date().toISOString(),
        fact: catFact,
      };
    } catch (error) {
      console.error('Cat Facts API failed: ', error.message);

      // Graceful fallback
      throw new HttpException(
        {
          status: 'error',
          message: 'Failed to fetch cat fact',
          user: {
            email: 'tochukwuvictor563@gmail.com',
            name: 'Tochukwu victor obioha',
            stack: 'NestJS, and axios',
          },
          timestamp: new Date().toISOString(),
          fact: 'Could not retrieve a cat fact at the moment',
        },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
