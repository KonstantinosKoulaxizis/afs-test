export enum SecurityTableNumberFields {
  authorizedAmount = 'authorizedAmount',
  issuedAmount = 'issuedAmount',
  authorizedCapital = 'authorizedCapital',
  issuedCapital = 'issuedCapital'
}

export const SECURITY_TABLE_NUM_COLUMNS = [
  {
    label: 'Authorized amount',
    field: SecurityTableNumberFields.authorizedAmount
  },
  {
    label: 'Issued amount',
    field: SecurityTableNumberFields.issuedAmount
  },
  {
    label: 'Authorized capital',
    field: SecurityTableNumberFields.authorizedCapital
  },
  {
    label: 'Issued capital',
    field: SecurityTableNumberFields.issuedCapital
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
