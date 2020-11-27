// @ts-expect-error
import v8n from 'v8n'
import { clamp, orderKeys } from '../../utils'
import { normalizeKeyValue } from '../Number/number-props'

export type Interval = { min: number; max: number }

export type IntervalSettings = { bounds: [number, number] }

const number = v8n().number()
export const schema = (o: any) =>
  v8n()
    .schema({ min: number, max: number })
    .test(o)

export const sanitizer = ({ min, max }: Interval, { bounds: [MIN, MAX] }: IntervalSettings) => ({
  min: clamp(Number(min), MIN, max),
  max: clamp(Number(max), min, MAX),
})

export const normalize = (_value: Interval, { bounds }: IntervalSettings) => {
  // const _settings = { min: normalizeNumber(settings.min), max: normalizeNumber(settings.max) }
  const { value, settings } = normalizeKeyValue(orderKeys(_value, ['min', 'max']), {})
  return { value, settings: { ...settings, bounds } }
}
