import identity from 'lodash/identity';

export const tag = 'w';

export const schema = {
    title: 'w',
    description: '',

    type: 'object',
    required: [],
    properties: {
        role: {
            enum: [
                'ivona:VB',
                'ivona:VBD',
                'ivona:NN',
                'ivona:SENSE_1',
            ],
        },
    },
};

export const transform = identity;
