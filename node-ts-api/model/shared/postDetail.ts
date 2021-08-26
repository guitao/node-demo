import { PostSunmmary } from './postSunmmary';
import { Todo } from './todo';

export class PostDetail extends PostSunmmary {
  price: number;
  currency: string;

  todos: Todo;

  constructor(postData: any, todoData: any) {
    super(postData)

    this.price = postData.price;
    this.currency = postData.currency

    this.todos = todoData.map((item: any) => new Todo(item))
  }
}