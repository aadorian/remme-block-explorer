import { newAccountValidator } from './validators.js'
import { network } from '../config.js'

export const walletVote = [
  {
    name: 'voter',
    label: 'Voter',
    type: 'String',
    required: true,
    message: 'Please input account name!',
    props: {
      type: 'text',
    },
    rules: {
      validator: newAccountValidator
    }
  }
];
