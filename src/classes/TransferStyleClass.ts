export enum TransferStyleClasses {
  transferRow = 'transfer-row',
  issueStock = 'issue-stock',
  increaseAuthCapital = 'increase-auth-capital',
  transfer = 'transfer'
}

export enum TransferTypes {
  issueStock = 'ISSUE_STOCK',
  increaseAuthCapital = 'INCREASE_AUTHORIZED_CAPITAL',
  transfer = 'TRANSFER'
}
export class TransferStyleClass {
  public transferClass: string

  constructor(transferType: TransferTypes) {
    this.transferClass = TransferStyleClass.getTansferClass(transferType)
  }

  static getTansferClass(transfer: string): string {
    let defaultClass = `${TransferStyleClasses.transferRow}`

    switch (transfer) {
      case TransferTypes.issueStock:
        defaultClass = `${defaultClass} ${TransferStyleClasses.issueStock}`
        break
      case TransferTypes.increaseAuthCapital:
        defaultClass = `${defaultClass} ${TransferStyleClasses.increaseAuthCapital}`
        break
      case TransferTypes.transfer:
        defaultClass = `${defaultClass} ${TransferStyleClasses.transfer}`
        break
      default:
        break
    }

    return defaultClass
  }
}
