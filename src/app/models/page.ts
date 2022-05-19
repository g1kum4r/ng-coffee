export class Page<T> {
    pageNumber: number = 0
    pageSize: number = 0
    items: T[] = []
    selectedItem?: T
    totalItems: number = 0
}
