import {graphql} from 'graphql';
import path from 'path';
import 'reflect-metadata';
import {buildSchemaSync} from 'type-graphql';

import UiQueryResolver from './UiQueryResolver';

const schema = buildSchemaSync({
  resolvers: [UiQueryResolver],
  emitSchemaFile: path.resolve(__dirname, '../dist/schema.graphql'),
  validate: false // https://github.com/MichalLytek/type-graphql/issues/150
});

graphql(schema, '{ standardize(uiQuery: { field1: " aa ", field2: "  bb "}) { field1, field2 }}').then(result => {
  console.log(JSON.stringify(result));
});
