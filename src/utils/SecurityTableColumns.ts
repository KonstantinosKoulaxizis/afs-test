import { TableDataNumberFields } from '@/classes/TableTotalsData'

export const SECURITY_TABLE_NUM_COLUMNS = [
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

export const SECURITY_TABLE_COLUMNS = [
  {
    label: 'Security class',
    field: 'name',
    text: true
  },
  ...SECURITY_TABLE_NUM_COLUMNS
]
