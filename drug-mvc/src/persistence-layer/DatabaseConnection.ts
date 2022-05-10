import { DataSource, EntityTarget, Repository } from "typeorm";
import Drug from "../domain-layer/entities/Drug";

export default class DatabaseConnection {
    private static instance: DatabaseConnection;

    private dataSource: DataSource;

    private constructor() {
        this.dataSource = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'drug_product',
            entities: [Drug],
            synchronize: true,
        });
    }

    public getRepository<Entity>(target: EntityTarget<Entity>): Repository<Entity> {
        return this.dataSource.getRepository(target);
    }

    public static async getInstance(): Promise<DatabaseConnection> {
        if(!DatabaseConnection.instance){
            DatabaseConnection.instance = new DatabaseConnection();
            await DatabaseConnection.instance.waitForInitialized();
        }
        return DatabaseConnection.instance;
    }

    private async waitForInitialized(): Promise<void> {
        await this.dataSource.initialize();
    }
}
