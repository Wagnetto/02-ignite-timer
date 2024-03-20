import { ReactNode, createContext, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  cycles: Cycle[]
  secondsAmountPassed: number
  createCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
  updateSecondsPassed: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CycleContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function updateSecondsPassed(seconds: number) {
    setSecondsAmountPassed(seconds)
  }

  function createCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((cycles) => [...cycles, newCycle])
    setActiveCycleId(id)
    setSecondsAmountPassed(0)
    // reset()
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        secondsAmountPassed,
        updateSecondsPassed,
        createCycle,
        interruptCurrentCycle,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
