import {graphql} from 'graphql';
import 'reflect-metadata';
import {buildSchema} from 'type-graphql';
import path from 'path';

import UiQueryResolver from './UiQueryResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [UiQueryResolver],
    emitSchemaFile: path.resolve(__dirname, '../dist/schema.graphql'),
    validate: false // https://github.com/MichalLytek/type-graphql/issues/150
  });

  graphql(schema, '{ standardize(uiQuery: { field1: " aa ", field2: "  bb "}) { field1, field2 }}').then(result => {
    console.log(JSON.stringify(result));
  });

}

main();
