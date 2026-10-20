/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary idmProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idmProtocol ID ::= {ds  33}
 * ```
 * 
 * @constant
 */
export
const idmProtocol: ID = _OID.fromParts([
    33,
], ds);

/* eslint-enable */
