import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAlternativesTable1591916442061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'alternative',
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
                name: 'number_votes',
                type: 'int',
                default: 0
            }, {
                name: 'i_poll',
                type: 'uuid'
            }, {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            }, {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
            }],
            foreignKeys: [
                {
                  name: 'Poll',
                  referencedTableName: 'poll',
                  referencedColumnNames: ['id'],
                  columnNames: ['i_poll'],
                  onDelete: 'CASCADE',
                  onUpdate: 'CASCADE'
                }
              ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('alternative')
    }

}
