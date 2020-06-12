import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPollTable1591915702444 implements MigrationInterface {
    name = 'createPollTable1591915702444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'poll',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                }, {
                    name: 'name',
                    type: 'varchar'
                }, {
                    name: 'finished',
                    type: 'boolean',
                    default: false
                }, {
                    name: 'i_user',
                    type: 'uuid'
                }, {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }, {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'user',
                    referencedTableName: 'user',
                    referencedColumnNames: ['id'],
                    columnNames: ['i_user'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('poll')
    }

}
