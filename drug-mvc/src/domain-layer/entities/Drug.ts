import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Drug {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, zerofill: true})
  public id: number;

  @Column({ type: 'varchar', length: 16, nullable: false})
  public name: string;

  @Column({ type: 'varchar', length: 20,nullable: false})
  public laboratory: string;

  @Column({ type: 'varchar', length: 500, nullable: false})
  public description: string;

  @Column({ type: "varchar", length: 500, nullable: false})
  public image: string;

  public constructor(id: number, name: string, laboratory: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.laboratory = laboratory;
    this.description = description;
    this.image = image;
  }
}
