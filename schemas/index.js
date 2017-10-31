import { schema } from 'normalizr'

export const deck = new schema.Entity('decks', {}, { idAttribute: 'title' })
