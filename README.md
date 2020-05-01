TypeScript "type-graphql" Reuse Input Demo
===========================

在graphql中，由于某些原因，将input object type与object type强制分开，需要定义两遍。

https://stackoverflow.com/questions/41743253/whats-the-point-of-input-type-in-graphql

虽然可以理解，在某些情况，这非常繁琐，并且在代码层面也会增加一些误会（比如某些情况下，某个input object type与object type必须始终保持一致）

此时可以利用type-graphql，通过class和decorator来标注，再反向生成graphql的schema，可以解决这个问题。

```
npm install
npm run demo
```
