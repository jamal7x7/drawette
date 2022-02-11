import { atom, useAtom, Provider } from 'jotai'
import { Children, useEffect } from 'react'

// let WINDOW_WIDTH = atom(window.innerWidth)
// let WINDOW_HEIGHT = atom(window.innerHeight)

const ScreenMousePositionOnCanvas = atom({})
const MousePositionOnCanvas = atom({})
const ScreenMousePosition = atom({ x: 600, y: 400 })

const MouseDownAtom = atom('')
const MousePosition = atom({ x: 600, y: 400 })
const ObjectList = atom([
  { id: Date.now(), x: 100, y: 100, width: 100, heigth: 100 },
])

let WINDOW_WIDTH = 1400
let WINDOW_HEIGHT = 1000
export default function App() {
  // useEffect(() => {
  //   WINDOW_WIDTH = window.innerWidth
  //   WINDOW_HEIGHT = window.innerHeight
  // }, [])

  const [mousePositiononOnCanvas, setMousePositiononOnCanvas] = useAtom(
    MousePositionOnCanvas
  )
  const [screenMousePositionOnCanvas, setScreenMousePositionOnCanvas] = useAtom(
    ScreenMousePositionOnCanvas
  )

  const [mouseDown, setMouseDown] = useAtom(MouseDownAtom)
  const [mousePosition, setMousePosition] = useAtom(MousePosition)
  const [screenMousePosition, setScreenMousePosition] =
    useAtom(ScreenMousePosition)
  const [Rects, setRects] = useAtom(ObjectList)

  let mousePose0 = { x: 50, y: 50 }
  let shapePose0 = { x: 0, y: 0 }

  function handleClick(e) {
    // setRecs((prev) => [...prev, mousePosition])
  }

  function handleMouseLeave(e, id) {
    // setMouseDown((prev) => 'mouse down')
    handleOnMouseMove(e, id)
  }
  function handleOnMouseMove(e, id) {
    // console.log('mouse location:', e.clientX, e.clientY)
    // let bx = e.target.x.baseVal.value
    // let by = e.target.y.baseVal.value
    // e.target.x.baseVal.value = e.clientX
    // e.target.y.baseVal.value = e.clientY

    // let mpx = mousePosition.x
    // let mpy = mousePosition.y
    // mouseDown === 'mouse down' &&
    //   setMousePosition((prev) => ({
    //     x: e.clientX + (bx - mpx),
    //     y: e.clientY + (by - mpy),
    //   }))

    mouseDown === 'mouse down' &&
      setRects([
        ...Rects.filter((r) => r.id !== id),
        {
          id: id,
          x: e.clientX - 50,
          y: e.clientY - 50,
          width: 100,
          heigth: 100,
        },
      ])

    mouseDown === 'mouse down' &&
      setScreenMousePosition((prev) => ({
        x: e.screenX,
        y: e.screenY,
      }))
  }
  function handleOnMousemoveOnCanvas(e) {
    setMousePositiononOnCanvas((prev) => ({
      x: e.clientX,
      y: e.clientY,
    }))

    setScreenMousePositionOnCanvas((prev) => ({
      x: e.screenX,
      y: e.screenY,
    }))
  }
  function logMouse() {
    console.log(mouseDown)
  }

  function handleDown(e, i) {
    setMouseDown((prev) => 'mouse down')
    console.log('----mouse down', e)
    // logMouse()
    // shapePose0 = { x: e.target.x.baseVal.value, y: e.target.x.baseVal.value }
    // mousePose0 = { x: e.clientX, y: e.clientY }
  }
  function handleUp(e) {
    setMouseDown((prev) => 'mouse up')
    // console.log('----mouse up')
    // logMouse()
  }
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        overflow: 'hidden',
      }}
    >
      <div className='topbar'>
        <div className='toolbar'>
          <Button cn={'button s'}>
            {' '}
            <svg
              name='move'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.61269 4.9957L10.3526 19.3133L13.876 14.6404L19.578 13.3222L7.61269 4.9957Z'
                stroke='#F5F5F5'
                strokeWidth='2'
              />
            </svg>
          </Button>
          <Button>
            <svg
              name='rectangle'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='3'
                y='5'
                width='18'
                height='14'
                rx='2'
                stroke='#F5F5F5'
                strokeWidth='2'
              />
            </svg>
          </Button>
          <Button>
            <svg
              name='link'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 4.0004C8 4.0005 16 20.0004 3 20.0004'
                stroke='#F5F5F5'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </Button>
          <Button>
            <svg
              name='text'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3H13ZM11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20H11ZM11 3V20H13V3H11Z'
                fill='#F5F5F5'
              />
              <path
                d='M6 3C6.00001 2.44772 5.55229 2 5.00001 2C4.44772 2 4.00001 2.44771 4 3L6 3ZM4 3.99999C4 4.55228 4.44771 4.99999 5 5C5.55228 5 6 4.55228 6 4L4 3.99999ZM4 3L4 3.99999L6 4L6 3L4 3Z'
                fill='#F5F5F5'
              />
              <path
                d='M20 3C20 2.44772 19.5523 2 19 2C18.4477 2 18 2.44771 18 3L20 3ZM18 3.99999C18 4.55228 18.4477 4.99999 19 5C19.5523 5 20 4.55228 20 4L18 3.99999ZM18 3L18 3.99999L20 4L20 3L18 3Z'
                fill='#F5F5F5'
              />
              <path
                d='M5 2C4.44772 2 4 2.44772 4 3C4 3.55228 4.44772 4 5 4L5 2ZM19 4C19.5523 4 20 3.55229 20 3C20 2.44772 19.5523 2 19 2L19 4ZM5 4L19 4L19 2L5 2L5 4Z'
                fill='#F5F5F5'
              />
              <path
                d='M10 20C9.44772 20 9 20.4477 9 21C9 21.5523 9.44772 22 10 22L10 20ZM14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20L14 22ZM10 22L14 22L14 20L10 20L10 22Z'
                fill='#F5F5F5'
              />
            </svg>
          </Button>
          <Button>
            <svg
              name='others'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929C15.3166 9.90237 14.6834 9.90237 14.2929 10.2929L15.7071 11.7071ZM12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM9.7071 10.2929C9.31658 9.90237 8.68341 9.90237 8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.2929 11.7071L9.7071 10.2929ZM14.2929 10.2929L11.2929 13.2929L12.7071 14.7071L15.7071 11.7071L14.2929 10.2929ZM12.7071 13.2929L9.7071 10.2929L8.2929 11.7071L11.2929 14.7071L12.7071 13.2929Z'
                fill='#F5F5F5'
              />
            </svg>
          </Button>
        </div>
      </div>

      <svg
        onMouseMove={(e) => handleOnMousemoveOnCanvas(e)}
        z-index='1'
        width={WINDOW_WIDTH}
        height={WINDOW_HEIGHT}
        viewBox={`0 0 ${WINDOW_WIDTH} ${WINDOW_HEIGHT}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='100%' height='100%' fill='#18181B' />

        {/* <rect
          // transform={`translate(${299} ${200})`}
          x='1200'
          y='70'
          width='80'
          height='80'
          fill='#0000ff'
          onClick={(e) => handleClick(e)}
        /> */}
        <Provider>
          {Rects.map((rec, i) => {
            return (
              <rect
                // z-index='1000'
                key={rec.id}
                onMouseMove={(e) => handleOnMouseMove(e, rec.id)}
                onTouchMove={(e) => handleOnMouseMove(e, rec.id)}
                // onDrag={(e) => handleOnmousemove(e)}
                x={rec.x}
                y={rec.y}
                width={rec.width}
                height={rec.heigth}
                fill='#ff00ff'
                onMouseDown={(e) => handleDown(e, rec.id)}
                onTouchStart={(e) => handleDown(e, rec.id)}
                onMouseUp={(e) => handleUp(e)}
                onMouseLeave={(e) => handleMouseLeave(e, rec.id)}
                onTouchEnd={(e) => handleMouseLeave(e, rec.id)}
              />
            )
          })}
        </Provider>

        {mouseDown === 'mouse down' && (
          <>
            <rect x='0' y='700' width='1600' height='10' fill='#00eeff' />
            <text x='1200' y='50' fill='#00eeff'>
              mousePosition: {mousePosition.x},{mousePosition.y}
            </text>
            <text x='1200' y='70' fill='#ff5100'>
              screenMousePosition: {screenMousePosition.x},
              {screenMousePosition.y}
            </text>
          </>
        )}

        <text x='12' y='50' fill='#00eeff'>
          mousePosition: {mousePositiononOnCanvas.x},{mousePositiononOnCanvas.y}
        </text>
        <text x='12' y='70' fill='#ff5100'>
          screenMousePosition: {screenMousePositionOnCanvas.x},
          {screenMousePositionOnCanvas.y}
        </text>
        <text x='12' y='90' fill='#ff00b7'>
          RectPosition: {Rects[0].x},{Rects[0].y}
        </text>
      </svg>
    </div>
  )
}

export function Button({ cn = 'button', children }) {
  const [Rects, setRects] = useAtom(ObjectList)

  function hundleToolClick(e) {
    e.preventDefault()
    console.log(Rects)
    setRects([
      ...Rects,
      {
        id: Date.now(),
        x: WINDOW_WIDTH / 4,
        y: WINDOW_HEIGHT / 4,
        width: 100,
        heigth: 100,
      },
    ])
  }
  function handleOnMouseOver(e) {
    // console.log(e)
    // this.style.background = '#0F0'
    // e.target.style.background = '#f0e'
  }
  function handleOnMouseout(e) {
    // console.log(e)
    // this.style.background = '#0F0'
    // e.target.style.background = '#00000000'
  }

  return (
    <div
      onMouseOver={(e) => handleOnMouseOver(e)}
      onMouseOut={(e) => handleOnMouseout(e)}
      // onMouseOut={(e) => (this.style.background = '#00F')}
      className={cn}
      onClick={(e) => hundleToolClick(e)}
    >
      <div className='icon24'>{children}</div>
    </div>
  )
}
