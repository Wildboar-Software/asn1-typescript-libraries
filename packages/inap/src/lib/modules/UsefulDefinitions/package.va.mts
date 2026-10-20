/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary package_
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * package ID ::= {ds  27}
 * ```
 * 
 * @constant
 */
export
const package_: ID = _OID.fromParts([
    27,
], ds);

/* eslint-enable */
