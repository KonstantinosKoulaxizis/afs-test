import { TableData } from '@/types/types'
import { SECURITY_TABLE_NUM_COLUMNS } from '@/utils/SecurityTableColumns'

export interface TableTotalRow {
  label: string
  amount: number
}

export enum TableDataNumberFields {
  authorizedAmount = 'authorizedAmount',
  issuedAmount = 'issuedAmount',
  authorizedCapital = 'authorizedCapital',
  issuedCapital = 'issuedCapital'
}

export class TableTotalsData {
  public tableTotalsdata: TableTotalRow[]

  constructor(tableData: TableData[]) {
    this.tableTotalsdata = SECURITY_TABLE_NUM_COLUMNS.map(column => {
      return {
        label: column.label,
        amount: TableTotalsData.calculateColumnTotal(tableData, column.field)
      }
    })
  }

  static calculateColumnTotal(data: TableData[], dataKey: string): number {
    return data.reduce((acc, current) => acc + (current[dataKey as keyof TableData] as number), 0)
  }
}
