import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;
}

export { Contact };
