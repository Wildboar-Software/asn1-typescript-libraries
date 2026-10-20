/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary certificateExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificateExtension ID ::= {ds  29}
 * ```
 * 
 * @constant
 */
export
const certificateExtension: ID = _OID.fromParts([
    29,
], ds);

/* eslint-enable */
