import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RestaurantsResolver {
  @Query(() => Boolean)
  isRestaurant() {
    return true;
  }
}
