import { createContext, FC, useContext, useMemo, useReducer } from 'react'

interface STATE {
  query: string
  fullTime: boolean
  location: string
}

const initialState = {
  query: '',
  fullTime: false,
  location: '',
}

type ACTION = { type: 'GET_QUERY'; payload: string }

const UIContext = createContext<STATE | any>(initialState)

const uiReducer = (state: STATE, action: ACTION) => {
  switch (action.type) {
    case 'GET_QUERY':
      return { ...state, query: action.payload }

    default:
      throw new Error()
  }
}

const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const getQuery = (q: string) => dispatch({ type: 'GET_QUERY', payload: q })

  const value = useMemo(() => ({ ...state, getQuery }), [state])

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext(UIContext)

  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }

  return context
}

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>
