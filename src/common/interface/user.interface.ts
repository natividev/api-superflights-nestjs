export interface IUser {
  id?: number;
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
}

// Campos de filtro aquí
export type UserFilter = {
  id?: number;
};
