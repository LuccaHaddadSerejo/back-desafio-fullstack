import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685057362315 implements MigrationInterface {
    name = 'CreateTables1685057362315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
