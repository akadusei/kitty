export default (node: HTMLElement, handler: (event: Event) => void) => {
  const onClick = (event: Event) => {
    !node.contains(event.target as HTMLElement) &&
    !event.defaultPrevented &&
    handler(event)
  }

  document.addEventListener('click', onClick, true)

  return {
    destroy() {
      document.removeEventListener('click', onClick, true)
    }
  }
}
