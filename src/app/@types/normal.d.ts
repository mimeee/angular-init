declare interface Pagination {
    pageIndex: number,
    total: number,
    pageSizeOptions: Array<number>
}

declare interface toastItem {
    msg: string,
    class?: string
  }