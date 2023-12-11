import { Resolver, Query } from "@nestjs/graphql";
import { Book } from "./book.schema";


@Resolver(() => Book)
export class BookResolver{

    @Query(() => [Book], {name: "books"})
    getAllBooks(): { id: number; title: string; price: number; }[]{
        return [
            {id: 1, title: "Harry Potter", price: 500},
            {id: 2, title: "Hunger Games", price: 600},
            {id: 3, title: "Robin Hood", price: 900},
        ]
    }
 
}