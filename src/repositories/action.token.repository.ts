import { IActionToken } from "../interfaces/action-token.interface";
import { ActionToken } from "../models/action.token.model";

class ActionTokenRepository {
  public async create(dto: IActionToken): Promise<IActionToken> {
    return await ActionToken.create(dto);
  }

  public async getByActionToken(actionToken: string): Promise<IActionToken> {
    return await ActionToken.findOne({ actionToken });
  }
}

export const actionTokenRepository = new ActionTokenRepository();
