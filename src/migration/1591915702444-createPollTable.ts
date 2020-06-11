import {MigrationInterface, QueryRunner} from "typeorm";

export class createPollTable1591915702444 implements MigrationInterface {
    name = 'createPollTable1591915702444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "poll" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "finished" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_03b5cf19a7f562b231c3458527e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "poll" ADD CONSTRAINT "FK_0610ebcfcfb4a18441a9bcdab2f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "poll" DROP CONSTRAINT "FK_0610ebcfcfb4a18441a9bcdab2f"`);
        await queryRunner.query(`DROP TABLE "poll"`);
    }

}
