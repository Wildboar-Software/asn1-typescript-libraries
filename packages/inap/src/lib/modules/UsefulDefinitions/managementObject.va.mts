/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary managementObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * managementObject ID ::= {ds  30}
 * ```
 * 
 * @constant
 */
export
const managementObject: ID = _OID.fromParts([
    30,
], ds);

/* eslint-enable */
