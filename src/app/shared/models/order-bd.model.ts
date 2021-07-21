export interface OrderBd {
  item: string;
  options: string[];
  price: number;
  quantity: number;
  'status-item'?: boolean;
}

// StatusOrder[1] StatusOrder['ENVIADO_COCINA'] colecciones de constantes
// export enum StatusOrder {
//   ENVIADO_COCINA = 1,
//   EN_PREPARACION = 2,
//   ENTREGAR = 3,
//   SERVIDO = 4
// }

export interface OrderData {
  client: string;
  'date-hour': number;
  'lead-time': string;
  products: OrderBd[];
  status: number;
  table: string;
  'total-order': number;
  waiter: string;
}

export interface OrderDataEdit {
  products: OrderBd[];
  'total-order': number;
}
export interface ItemPopup {
  product: string;
  quantity: number;
}
export interface DataUpdate {
  status: number;
  'lead-time'?: string;
}
