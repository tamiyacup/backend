import { Test, TestingModule } from '@nestjs/testing';
import { UsersRelationsController } from './users-relations.controller';

describe('UsersRelation Controller', () => {
  let controller: UsersRelationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRelationsController],
    }).compile();

    controller = module.get<UsersRelationsController>(UsersRelationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
