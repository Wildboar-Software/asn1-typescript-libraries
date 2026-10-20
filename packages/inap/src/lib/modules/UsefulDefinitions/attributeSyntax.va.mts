/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary attributeSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeSyntax ID ::= {ds  5}
 * ```
 * 
 * @constant
 */
export
const attributeSyntax: ID = _OID.fromParts([
    5,
], ds);

/* eslint-enable */
