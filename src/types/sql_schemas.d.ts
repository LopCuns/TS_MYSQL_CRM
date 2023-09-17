export type CustomerData = { c_id : { type: 'Buffer',data : number[] }, c_email : string,c_name : string, c_phone : number }
export type ProductData = { p_id : number, p_name : string, p_price : number }
export type CustomerSalesData = { p_id: number, p_name: string,p_price : number, c_id: { type: 'Buffer',data : number[] } }
export type ProductSalesData = { c_id : { type: 'Buffer',data : number[] }, s_id : number, c_name : string,c_email : string, c_phone : number }