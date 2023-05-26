import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from './contacts.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export { User };
