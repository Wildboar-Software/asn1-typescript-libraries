/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notification ID ::= {ds  35}
 * ```
 * 
 * @constant
 */
export
const notification: ID = _OID.fromParts([
    35,
], ds);

/* eslint-enable */
