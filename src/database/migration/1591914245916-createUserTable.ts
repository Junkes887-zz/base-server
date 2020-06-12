import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserTable1591914245916 implements MigrationInterface {
    name = 'createUserTable1591914245916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'user',
            columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            }, {
                name: 'name',
                type: 'varchar'
            }, {
                name: 'nickName',
                type: 'varchar'
            }, {
                name: 'password',
                type: 'varchar'
            }, {
                name: 'email',
                type: 'varchar'
            }, {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            }, {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
            }]
        }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
