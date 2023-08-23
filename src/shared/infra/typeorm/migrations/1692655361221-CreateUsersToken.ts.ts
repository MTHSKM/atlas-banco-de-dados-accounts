import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateUsersToken1692655361221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_tokens",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "refresh_token",
                        type: "varchar"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "expires_date",
                        type: "timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()" // Corrigido para usar aspas
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserToken",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_tokens");
    }
}
