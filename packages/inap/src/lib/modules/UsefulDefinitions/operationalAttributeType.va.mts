/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary operationalAttributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * operationalAttributeType ID ::= {ds  18}
 * ```
 * 
 * @constant
 */
export
const operationalAttributeType: ID = _OID.fromParts([
    18,
], ds);

/* eslint-enable */
