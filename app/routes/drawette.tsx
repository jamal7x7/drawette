import { Outlet } from 'remix'
import { Provider } from 'jotai'

export default function Drawette() {
  return (
    <div>
      <Provider>
        <Outlet />
      </Provider>
    </div>
  )
}
