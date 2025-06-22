export interface IDialogConfig {
  isOpen: boolean
  onClose: () => void
  title: any
  content: any
  className?: string
  description?: any
  footer?: any
}
