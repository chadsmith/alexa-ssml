import get from 'lodash/get';
import flatten from 'lodash/flatten';
import * as schemas from './schema';
import { validateProps } from './validateProps';

export function ssml(tag, props, ...args) {
    const children = flatten(args.length ? args : get(props, 'children', []));

    // handle custom elements (only functions for now)
    if (typeof tag === "function")
        return tag({ ...props, children });

    // make sure we have a valid tag
    if (typeof tag !== "string")
        throw new Error(`Invalid tag: ${tag}`);

    //  make sure we have a known tag
    const schema = schemas[tag.toLowerCase()];
    if (!schema)
        throw new Error(`Unknown tag: ${tag}`);

    // validate and transform props
    props = validateProps(props, schema);

    return {
        tag: schema.tag,
        props: props,
        children
    };
}
