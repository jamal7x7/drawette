import { atom, useAtom } from 'jotai'
import { v4 as uuid } from 'uuid'

// let WINDOW_WIDTH = atom(window.innerWidth)
// let WINDOW_HEIGHT = atom(window.innerHeight)

let WINDOW_WIDTH = 1400
let WINDOW_HEIGHT = 800

let diffX = 0
let diffY = 0

function log(x: any) {
  console.log(x)
}

const ScreenMousePositionOnCanvas = atom({})
const MousePositionOnCanvas = atom({})
const ScreenMousePosition = atom({ x: 600, y: 400 })

const ShowHelpersAtom = atom(true)
const ObjectSelected = atom(false)
const Drawing = atom(false)
const MouseDownAtom = atom('')
const ToolChoosed = atom('')
const MousePosition = atom({ x: 600, y: 400 })

const ObjectList = atom<
  {
    id: string
    x: number
    y: number
    width: number
    heigth: number
    color: string
    selected: boolean
    text: string
    textEdit: boolean
  }[]
>([])

const LinkList = atom<
  {
    id: string
    x1: number
    x2: number
    y1: number
    y2: number

    color: string
    selected: boolean
    text: string
  }[]
>([])

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
  const [Rects, setRects] = useAtom(ObjectList)
  const [Links, setLink] = useAtom(LinkList)

  const [showHelpers, setShowHelpers] = useAtom(ShowHelpersAtom)
  const [tool, setTool] = useAtom(ToolChoosed)

  const [mouseDown, setMouseDown] = useAtom(MouseDownAtom)
  const [mousePosition, setMousePosition] = useAtom(MousePosition)
  const [screenMousePosition, setScreenMousePosition] =
    useAtom(ScreenMousePosition)
  const [selected, setSelected] = useAtom(ObjectSelected)

  const [startDrawing, setStartDrawing] = useAtom(Drawing)

  let mousePose0 = { x: 50, y: 50 }
  let shapePose0 = { x: 0, y: 0 }

  function handleRectClick(e, id) {
    e.stopPropagation()
    // console.log(e.target.key, id)

    setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r.selected = true
          // r.color = '#00e'
        } else {
          r.selected = false
          // r.color = r.color
        }
        return r
      }),
    ])
  }

  function handleOnDoubleClick(e, id) {
    // setMouseDown((prev) => 'mouse down')
    log(e)

    // mouseDown === 'mouse down' &&
    setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r = {
            ...r,
            selected: true,
            text: 'M',
            textEdit: true,
          }
        }
        return r
      }),
    ])
  }
  function handleMouseLeave(e, id) {
    // setMouseDown((prev) => 'mouse down')
    handleOnMouseMove(e, id)
  }
  function handleOnMouseMove(e, id) {
    e.stopPropagation()
    e.preventDefault()
    mouseDown === 'mouse down' &&
      tool == 'move' &&
      setRects([
        ...Rects.map((r) => {
          if (r.id === id) {
            r = {
              ...r,
              id: id,
              selected: false,
              x: e.clientX - diffX,
              y: e.clientY - diffY,
            }
          }
          return r
        }),
      ])

    mouseDown === 'mouse down' &&
      tool == 'addLink' &&
      setLink([
        ...Links,
        {
          selected: true,
          id: uuid(),
          x1: 100,
          y1: 400,
          x2: 100,
          y2: 100,
          text: '',

          color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)})`,
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

  function handleDown(e, i) {
    setMouseDown((prev) => 'mouse down')
    diffX = e.clientX - e.target.x.baseVal.value
    diffY = e.clientY - e.target.y.baseVal.value
    // console.log('----mouse down', e)
    // logMouse()
    // shapePose0 = { x: e.target.x.baseVal.value, y: e.target.x.baseVal.value }
    // mousePose0 = { x: e.clientX, y: e.clientY }
    setSelected((prev) => !prev)
  }
  function handleUp(e) {
    setMouseDown((prev) => 'mouse up')
    // console.log('----mouse up')
    // logMouse()
    setSelected((prev) => !prev)
  }

  function handleOnClickOnCanvas(
    e: MouseEvent<SVGSVGElement, MouseEvent>
  ): void {
    e.stopPropagation()

    // startDrawing &&
    setRects([
      ...Rects,
      {
        selected: false,
        id: uuid(),
        x: WINDOW_WIDTH / 4,
        y: WINDOW_HEIGHT / 4,
        width: 100,
        heigth: 100,
        color: `rgba(255, 0, 0)`,
        text: '',
        textEdit: false,
      },
    ])

    // console.log('----mouse click', e)
    setRects([
      ...Rects.map((r) => {
        if (r.selected) {
          r.selected = false
          r.textEdit = false
        }
        return r
      }),
    ])
  }

  function handleAddRectangleToolClick(e) {
    setTool((p) => 'addRectangle')

    setRects([
      ...Rects,
      {
        selected: false,
        id: uuid(),
        x: WINDOW_WIDTH / 4,
        y: WINDOW_HEIGHT / 4,
        width: 100,
        heigth: 100,
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`,
        text: 'R',
        textEdit: false,
      },
    ])
  }

  function handleMoveToolClick(e) {
    setTool((p) => 'move')
  }
  function handleAddLinkToolClick(e) {
    setTool((p) => 'addLink')
  }
  function handleAddTextToolClick(e) {
    setTool((p) => 'addText')
  }
  function handleAddOthersToolClick(e) {
    setTool((p) => 'addOhers')
  }

  function handleOnTextChange(
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ): void {
    log(Rects)
    setRects([
      ...Rects.map((r) => {
        if (r.id == id) {
          r.selected = true
          r.textEdit = true
          r.text = e.target.value
        }
        return r
      }),
    ])
  }
  // RETURN
  // RETURN
  // RETURN
  // RETURN
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        overflow: 'hidden',
      }}
    >
      <div>
        <ShowHelpersButton cn={'button showHelpers'}>
          {' '}
          <svg
            name='showHelpers'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.364 9.77818L20.6642 12.0784L18.3637 14.3788C14.849 17.8935 9.15049 17.8935 5.63577 14.3788L3.33558 12.0786L5.63604 9.77818C9.15075 6.26346 14.8492 6.26346 18.364 9.77818Z'
              stroke='#F5F5F5'
              strokeWidth='2'
            />
            <circle cx='12' cy='12' r='3' fill='#F5F5F5' />
          </svg>
        </ShowHelpersButton>
      </div>

      <div className='topbar'>
        <div className='toolbar'>
          <Button
            cn={` ${tool == 'move' && 'selected'}`}
            hundleOnClick={handleMoveToolClick}
          >
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
          <Button
            cn={` ${tool == 'addRectangle' && 'selected'}`}
            hundleOnClick={handleAddRectangleToolClick}
          >
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
          <Button
            cn={` ${tool == 'addLink' && 'selected'}`}
            hundleOnClick={handleAddLinkToolClick}
          >
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
          <Button
            cn={` ${tool == 'addText' && 'selected'}`}
            hundleOnClick={handleAddTextToolClick}
          >
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
          <Button
            cn={` ${tool == 'addOthers' && 'selected'}`}
            hundleOnClick={handleAddOthersToolClick}
          >
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
        name='grid'
        onMouseMove={(e) => handleOnMousemoveOnCanvas(e)}
        onClick={(e) => handleOnClickOnCanvas(e)}
        z-index='1'
        width={WINDOW_WIDTH}
        height={WINDOW_HEIGHT}
        viewBox={`0 0 ${WINDOW_WIDTH} ${WINDOW_HEIGHT}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <filter id='filter'>
          {/* <feMorphology operator='erode' radius='30' /> */}
          {/* <feGaussianBlur stdDeviation='5' /> */}
        </filter>
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

        <g name='Rects'>
          {Rects.map((rec, i) => {
            return (
              <g key={'rectangle' + rec.id}>
                {rec.selected && (
                  <rect
                    x={rec.x - 4}
                    y={rec.y - 4}
                    width={rec.width + 8}
                    height={rec.heigth + 8}
                    // fill='#0EA5E9'
                    stroke='#0EA5E9'
                  />
                )}

                <rect
                  // z-index='1000'
                  // filter='url(#erode)'
                  rx='15'
                  // onMouseMove={(e) => handleOnMouseMove(e, rec.id)}
                  // onTouchMove={(e) => handleOnMouseMove(e, rec.id)}
                  // onDrag={(e) => handleOnmousemove(e)}
                  x={rec.x}
                  y={rec.y}
                  width={rec.width}
                  height={rec.heigth}
                  fill={rec.color}
                  // onClick={(e) => handleRectClick(e, rec.id)}
                  // onMouseDown={(e) => handleDown(e, rec.id)}
                  // onTouchStart={(e) => handleDown(e, rec.id)}
                  // onMouseUp={(e) => handleUp(e)}
                  // onMouseLeave={(e) => handleMouseLeave(e, rec.id)}
                  // onTouchEnd={(e) => handleMouseLeave(e, rec.id)}
                />

                {/* <text x={rec.x + 50} y={rec.y + 50} fill='#dcd2ff'>
                {rec.text}
              </text> */}

                <foreignObject
                  id='text'
                  x={rec.x}
                  y={rec.y}
                  width={rec.width + 8}
                  height={rec.width + 8}
                >
                  <div className='input-Container'>
                    <input
                      placeholder={i}
                      style={{}}
                      onChange={(e) => handleOnTextChange(e, rec.id)}
                    />
                  </div>
                </foreignObject>

                <rect
                  // z-index='1000'
                  //Primary Layer

                  onMouseMove={(e) => handleOnMouseMove(e, rec.id)}
                  onTouchMove={(e) => handleOnMouseMove(e, rec.id)}
                  // onDrag={(e) => handleOnmousemove(e)}
                  x={rec.x - 4}
                  y={rec.y - 4}
                  width={rec.width + 8}
                  height={rec.heigth + 8}
                  fill='#00000000'
                  onClick={(e) => handleRectClick(e, rec.id)}
                  onMouseDown={(e) => handleDown(e, rec.id)}
                  onTouchStart={(e) => handleDown(e, rec.id)}
                  onMouseUp={(e) => handleUp(e)}
                  onMouseLeave={(e) => handleMouseLeave(e, rec.id)}
                  onTouchEnd={(e) => handleMouseLeave(e, rec.id)}
                  onDoubleClick={(e) => handleOnDoubleClick(e, rec.id)}
                />
              </g>
            )
          })}
        </g>

        <g name='Links'>
          {Links.map((l, i) => {
            return (
              <g key={'Links' + l.id}>
                {l.selected && (
                  <rect
                    x='500'
                    y='500'
                    width='200'
                    height='200'
                    fill='#0EA5E9'
                    stroke='#0EA5E9'
                  />
                )}
              </g>
            )
          })}
        </g>

        {showHelpers && (
          // Show Helpers and Stats
          <g>
            {mouseDown === 'mouse down' && (
              <>
                <rect
                  style={{ bottom: 0 }}
                  x='0'
                  // y='700'
                  width='1600'
                  height='1'
                  fill='#00eeff11'
                />
                <text x='1200' y='50' fill='#00eeff'>
                  {/* mousePosition: {mousePosition.x},{mousePosition.y} */}
                </text>
                <text x='1200' y='70' fill='#ff5100'>
                  {/* screenMousePosition: {screenMousePosition.x}, */}
                  {/* {screenMousePosition.y} */}
                </text>
              </>
            )}

            {/* <foreignObject x='20' y='20' width='160' height='160'>
              <div>Tool Choosed: {tool}</div>
            </foreignObject> */}

            <text x='12' y='20' fill='#2bff00'>
              Tool Choosed: {tool}
            </text>
            <text x='12' y='50' fill='#00eeff'>
              mousePosition: {mousePositiononOnCanvas.x},
              {mousePositiononOnCanvas.y}
            </text>

            <text x='12' y='70' fill='#00eeff'>
              diff: {diffX},{diffY}
            </text>
            {/* <text x='12' y='70' fill='#ff5100'>
              screenMousePosition: {screenMousePositionOnCanvas.x},
              {screenMousePositionOnCanvas.y}
            </text> */}
          </g>
        )}
      </svg>

      {showHelpers && (
        // Show Helpers and Stats

        <div className='info-pannel'>
          {Rects.map((r, i) => (
            <div className='info-item' key={r.id}>
              {'►  ' /* RectId:{r.id}  */} {i} {r.text} -- {r.x},{r.y}
              {r.selected ? ' 😁' : ''}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function Button({ cn = 'button', hundleOnClick, children }) {
  const [Rects, setRects] = useAtom(ObjectList)
  const [startDrawing, setStartDrawing] = useAtom(Drawing)

  // function hundleToolClick(e) {
  //   setStartDrawing(true)
  //   // e.stopProppagation()
  //   // console.log(Rects)

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
    <button
      onMouseOver={(e) => handleOnMouseOver(e)}
      onMouseOut={(e) => handleOnMouseout(e)}
      // onMouseOut={(e) => (this.style.background = '#00F')}
      className={cn}
      onClick={hundleOnClick}
    >
      <div className='icon24'>{children}</div>
    </button>
  )
}

export function ShowHelpersButton({ cn = 'button', children }) {
  const [showHelpers, setShowHelpers] = useAtom(ShowHelpersAtom)

  function hundleToolClick(e) {
    // e.stopProppagation()
    setShowHelpers((prev) => !prev)
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
    <button
      onMouseOver={(e) => handleOnMouseOver(e)}
      onMouseOut={(e) => handleOnMouseout(e)}
      // onMouseOut={(e) => (this.style.background = '#00F')}
      className={cn}
      onClick={(e) => hundleToolClick(e)}
    >
      <div className='icon24'>{children}</div>
    </button>
  )
}

export function addRectangle() {
  const [Rects, setRects] = useAtom(ObjectList)
  setRects([
    ...Rects,
    {
      text: '',
      selected: false,
      id: uuid(),
      x: WINDOW_WIDTH / 4,
      y: WINDOW_HEIGHT / 4,
      width: 100,
      heigth: 100,
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,

      textEdit: false,
    },
  ])
}

function side() {
  return (
    <svg>
      <foreignObject
        x='12'
        y={90}
        fill='#ff00b7'
        width='300'
        // height={90 + 16 * Rects.length}
        height='550'
      >
        <div className='info-pannel'>
          {Rects.map((r, i) => (
            <div className='info-item' key={r.id}>
              {/* RectId:{r.id}  */}
              i: {i} {r.text}
              Pos: {r.x},{r.y}
              {r.selected ? '---' : ''}
            </div>
          ))}
        </div>
      </foreignObject>
    </svg>
  )
}
