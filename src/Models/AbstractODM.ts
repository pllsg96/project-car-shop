import { 
  model, 
  Model, 
  models, 
  Schema,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    const returnedInfo = await this.model.create({ ...obj });
    return returnedInfo;
  }

  public async findAll(): Promise<T[]> {
    const returnedInfo = await this.model.find();
    return returnedInfo;
  }

  public async findById(id: string): Promise<T | null> {
    const returnedInfo = await this.model.findOne({ _id: id });
    return returnedInfo;
  }
}

export default AbstractODM;