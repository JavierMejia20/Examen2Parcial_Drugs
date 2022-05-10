import { Request, Response } from 'express';
import AddDrugTask, { AddDrugData } from '../tasks/AddDrugTask';
import DeleteDrugTask from '../tasks/DeleteDrugTask';
import FindDrugTask from '../tasks/FindDrugTask';
import GetDrugListTask from '../tasks/GetDrugListTask';
import UpdateDrugTask, { UpdateDrugData } from '../tasks/UpdateDrugTask';
import BaseController from './BaseController';

export default class DrugsController extends BaseController {
  public constructor() {
    super('/drugs');
  }

  protected configureRouter(): void {
    this.router.get('/', this.getDrugsList.bind(this));
    this.router.get('/:id', this.findDrug.bind(this));
    this.router.post('/', this.addDrug.bind(this));
    this.router.put('/', this.updateDrug.bind(this));
    this.router.delete('/:id', this.deleteDrug.bind(this));
  }

  private async getDrugsList(req: Request, res: Response): Promise<void> {
    try {
      const getDrugListTask = new GetDrugListTask();

      const drugsList = await getDrugListTask.execute();

      this.respond(res, 200, drugsList);
    } catch (e) {
      this.respond(res, 500);
    }
  }

  private async findDrug(req: Request, res: Response): Promise<void> {
    try {
      const drugId = parseInt(req.params.id);
      const getDrugListTask = new FindDrugTask(drugId);

      const drug = await getDrugListTask.execute();

      this.respond(res, 200, drug);
    } catch (e) {
      if ((<Error>e).message === 'Drug not found.') {
        this.respond(res, 404);
      } else {
        this.respond(res, 500);
      }
    }
  }

  private async addDrug(req: Request, res: Response): Promise<void> {
    try{
      const drugData = <AddDrugData>req.body;

      const addDrugTask = new AddDrugTask(drugData);

      const drug = await addDrugTask.execute();

      this.respond(res, 200, drug);
    } catch (e) {
      this.respond(res, 500);
    }
  }

  private async updateDrug(req: Request, res: Response): Promise<void> {
    try {
      const drugData = <UpdateDrugData>req.body;

      const updateDrugTask = new UpdateDrugTask(drugData);

      const updateDrug = await updateDrugTask.execute();

      this.respond(res, 200, updateDrug);
    } catch (e) {
      if ((<Error>e).message === 'Drug not found.') {
        this.respond(res, 404);
      } else {
        this.respond(res, 500);
      }
    }
  }

  private async deleteDrug(req: Request, res: Response): Promise<void> {
    try{
      const drugId = parseInt(req.params.id);
      const deleteDrugTask = new DeleteDrugTask(drugId);

      await deleteDrugTask.execute();

      this.respond(res, 200);
    } catch (e) {
      this.respond(res, 500);
    }
  }
}
