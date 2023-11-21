import { map } from 'lodash'

import AutocompleteField from './fields/AutocompleteField'
import CheckboxField from './fields/CheckboxField'
import CheckboxListField from './fields/CheckboxListField'
import DateField from './fields/DateField'
import EditorField from './fields/EditorField'
import FileField from './fields/FileField'
import LocationField from './fields/LocationField'
import RadioField from './fields/RadioField'
import RadioListField from './fields/RadioListField'
import SelectField from './fields/SelectField'
import SliderField from './fields/SliderField'
import TagsField from './fields/TagsField'
import TextareaField from './fields/TextareaField'
import TextField from './fields/TextField'
import ToggleField from './fields/ToggleField'

type TComponent = any
type TFields = Record<string, any>

const FIELDS: TFields = {
  autocomplete: AutocompleteField,
  checkbox: CheckboxField,
  CheckboxListField: CheckboxListField,
  date: DateField,
  editor: EditorField,
  file: FileField,
  location: LocationField,
  radio: RadioField,
  radiolist: RadioListField,
  select: SelectField,
  slider: SliderField,
  tags: TagsField,
  textarea: TextareaField,
  text: TextField,
  toogle: ToggleField,
}

/**
 * Adds a custom field to the list of fields.
 */
export function registerField(id: string, component: TComponent) {
  FIELDS[id] = component
}

/**
 * Adds mutiple fields to the list of fields.
 */

export function registerFields(fields: TFields) {
  map(fields, (component: TComponent, id: string) => {
    registerField(id, component)
  })
}

/**
 * Gets an already defined rule
 */
export function getField(id: string) {
  return FIELDS[id]
}
