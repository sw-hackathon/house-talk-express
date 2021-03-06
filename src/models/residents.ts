import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  PrimaryKey,
  AutoIncrement,
  Unique,
  Default,
  HasMany,
  HasOne,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User, Home, Issue } from "./";
import Review from "./reviews";

@Table({
  tableName: "residents",
  freezeTableName: true,
  underscored: true,
  timestamps: false,
  charset: "utf8",
  collate: "utf8_general_ci",
  updatedAt: false,
})
export default class Resident extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number;

  @ForeignKey(() => Home)
  @Column
  home_id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @Column
  room_number: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Issue)
  issues: Issue[];

  @HasOne(() => Review)
  review: Review;

  @BelongsTo(() => Home)
  home: Home;
}
