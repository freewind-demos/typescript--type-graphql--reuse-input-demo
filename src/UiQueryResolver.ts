import {Args, ArgsType, Field, Query, Resolver} from 'type-graphql';
import UiQuery from './UiQuery';

function standardize(uiQuery: UiQuery): UiQuery {
  const newUiQuery = new UiQuery();
  newUiQuery.field1 = uiQuery.field1?.trim()
  newUiQuery.field2 = uiQuery.field2?.trim()
  return newUiQuery;
}

@ArgsType()
class UiQueryArgs {
  @Field()
  uiQuery!: UiQuery
}

@Resolver(UiQuery)
export default class UiQueryResolver {

  @Query(returns => UiQuery)
  standardize(@Args() args: UiQueryArgs): UiQuery {
    return standardize(args.uiQuery);
  }

}
