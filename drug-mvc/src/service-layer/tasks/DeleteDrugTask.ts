import Drug from '../../domain-layer/entities/Drug';
import DatabaseConnection from '../../persistence-layer/DatabaseConnection';
import IAsyncTask from './IAsyncTask';

export default class DeleteDrugTask implements IAsyncTask<void> {
  private drugId: number;

  public constructor(drugId: number) {
    this.drugId = drugId;
    
  }

  public async execute(): Promise<void> {
    const databaseConnection = await DatabaseConnection.getInstance();
    const drugRepository = databaseConnection.getRepository(Drug);

    await drugRepository.delete(this.drugId);
  }
}