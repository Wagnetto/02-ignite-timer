import { createContext, useContext, useState } from 'react'

// melhor que passar  um {} as any:
const CyclesContext = createContext({
  activeCycleId: 0,
  setActiveCycleId: () => {},
})

export function NewCycleForm() {
  const { activeCycleId, setActiveCycleId } = useContext(CyclesContext)
  return (
    <>
      <h1>NewCycleForm: {activeCycleId}</h1>
      <button onClick={() => setActiveCycleId(5)}>Update</button>
    </>
  )
}

export function Countdown() {
  const { activeCycleId } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycleId}</h1>
}

export function FakeHome() {
  const [activeCycleId, setActiveCycleId] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycleId, setActiveCycleId }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
