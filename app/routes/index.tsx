import { Link, Outlet } from 'remix'

export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
      }}
    >
      <Link to='/drawette'> Go to drawette </Link>
    </div>
  )
}
