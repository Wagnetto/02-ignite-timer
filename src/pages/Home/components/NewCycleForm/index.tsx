import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useForm } from 'react-hook-form'

export function NewcycleForm() {
  const { register } = useForm()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em: </label>
      <TaskInput
        id="task"
        disabled={!!activeCycle}
        list="task-suggestions"
        placeholder="Dê um nome para a tarefa"
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="pokédex"></option>
        <option value="rocketseat"></option>
        <option value="playground"></option>
        <option value="banana"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante: </label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
