import { Injectable } from '@nestjs/common';
import { User } from './entitites/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      avatar: 'https://fanibani.ru/images/wp-content/uploads/2021/09/76-8.jpg',
      title: 'Текст номер один',
      subtitle: 'Субтайтл 1',
      adress: 'ул. Пушкина дом 20',
      country: 'США',
    },
    {
      id: 2,
      avatar:
        'https://chudo-prirody.com/uploads/posts/2021-08/1628747919_31-p-smeshnie-foto-kotov-na-avu-33.jpg',
      title: 'Текст номер 2',
      subtitle: 'Субтайтл 2',
      adress: 'ул. Пушкина дом 3123',
      country: 'США',
    },

    {
      id: 3,
      avatar:
        'https://i.pinimg.com/736x/cd/04/e6/cd04e63cabb6ce6e0a9406109736e12c.jpg',
      title: 'Текст номер 3',
      subtitle: 'Субтайтл 3',
      adress: 'ул. Пушкина дом 456456',
      country: 'Россия',
    },
  ];

  public getAll() {
    return this.users;
  }
}
