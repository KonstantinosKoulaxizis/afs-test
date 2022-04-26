import { TableData } from '@/types/types'

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

export const HOME_TABLE_NUM_COLUMNS = [
  {
    label: 'Authorized amount',
    field: TableDataNumberFields.authorizedAmount
  },
  {
    label: 'Issued amount',
    field: TableDataNumberFields.issuedAmount
  },
  {
    label: 'Authorized capital',
    field: TableDataNumberFields.authorizedCapital
  },
  {
    label: 'Issued capital',
    field: TableDataNumberFields.issuedCapital
  }
]
export class TableTotalsData {
  public tableTotalsdata: TableTotalRow[]

  constructor(tableData: TableData[]) {
    this.tableTotalsdata = HOME_TABLE_NUM_COLUMNS.map(column => {
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
