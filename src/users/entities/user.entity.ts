import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/typeorm/entities/User';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  authStrategy: string | null;
}
