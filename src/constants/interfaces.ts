export interface ActionPayload {
  path: string[];
  newValue: number | string | boolean;
  typeOfValue: string;
}

export interface Action {
  type: string;
  payload: ActionPayload;
}
