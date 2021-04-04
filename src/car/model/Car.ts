import {
  Column, JoinColumn, ManyToOne, PrimaryColumn
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../../category/model/Category";

class Car {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @Column()
  created_at: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Car };