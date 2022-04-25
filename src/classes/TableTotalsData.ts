import { TableData } from '@/types/types'

export enum TableDataNumberFields {
  authorizedAmount = 'authorizedAmount',
  issuedAmount = 'issuedAmount',
  authorizedCapital = 'authorizedCapital',
  issuedCapital = 'issuedCapital'
}

export class TableTotalsData {
  public authorizedAmount: number
  public issuedAmount: number
  public authorizedCapital: number
  public issuedCapital: number

  constructor(tableData: TableData[]) {
    this.authorizedAmount = TableTotalsData.calculateColumnTotal(
      tableData,
      TableDataNumberFields.authorizedAmount
    )
    this.issuedAmount = TableTotalsData.calculateColumnTotal(
      tableData,
      TableDataNumberFields.issuedAmount
    )
    this.authorizedCapital = TableTotalsData.calculateColumnTotal(
      tableData,
      TableDataNumberFields.authorizedCapital
    )
    this.issuedCapital = TableTotalsData.calculateColumnTotal(
      tableData,
      TableDataNumberFields.issuedCapital
    )
  }

  static calculateColumnTotal(data: TableData[], dataKey: string): number {
    return data.reduce((acc, current) => acc + (current[dataKey as keyof TableData] as number), 0)
  }
}
