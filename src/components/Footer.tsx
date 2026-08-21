export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted">
          © {new Date().getFullYear()} Amanda Jacobino. Todos os direitos reservados.
        </span>
        <span className="text-xs text-muted">Sorocaba — SP, Brasil</span>
      </div>
    </footer>
  )
}
