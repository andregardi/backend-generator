//https://github.com/typeorm/typeorm/blob/master/docs/entities.md
export const columnTypes = [
  "@Column",
  "@PrimaryColumn()",
  "@PrimaryGeneratedColumn()",
  '@PrimaryGeneratedColumn("uuid")',
  '@CreateDateColumn()',
  '@UpdateDateColumn()',
  '@VersionColumn()'
];
