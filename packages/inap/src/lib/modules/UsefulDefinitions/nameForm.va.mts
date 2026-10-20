/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary nameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nameForm ID ::= {ds  15}
 * ```
 * 
 * @constant
 */
export
const nameForm: ID = _OID.fromParts([
    15,
], ds);

/* eslint-enable */
