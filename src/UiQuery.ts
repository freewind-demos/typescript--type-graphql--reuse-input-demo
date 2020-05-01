import {Field, InputType, ObjectType} from 'type-graphql';

@InputType("UiQueryInput")
@ObjectType("UiQuery")
export default class UiQuery {

  @Field()
  field1?: string

  @Field()
  field2?: string

}
