import { Outlet } from 'remix'

export default function Drawette() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      from drawette layout
      <Outlet />
    </div>
  )
}
