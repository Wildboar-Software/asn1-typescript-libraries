/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary operationalBinding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * operationalBinding ID ::= {ds  19}
 * ```
 * 
 * @constant
 */
export
const operationalBinding: ID = _OID.fromParts([
    19,
], ds);

/* eslint-enable */
