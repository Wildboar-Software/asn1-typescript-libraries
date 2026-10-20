/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary matchingRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * matchingRule ID ::= {ds  13}
 * ```
 * 
 * @constant
 */
export
const matchingRule: ID = _OID.fromParts([
    13,
], ds);

/* eslint-enable */
