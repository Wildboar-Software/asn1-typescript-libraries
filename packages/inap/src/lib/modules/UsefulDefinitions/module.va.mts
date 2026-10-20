/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary module_
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * module ID ::= {ds  1}
 * ```
 * 
 * @constant
 */
export
const module_: ID = _OID.fromParts([
    1,
], ds);

/* eslint-enable */
