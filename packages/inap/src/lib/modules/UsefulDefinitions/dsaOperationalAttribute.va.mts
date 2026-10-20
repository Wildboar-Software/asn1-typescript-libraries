/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary dsaOperationalAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dsaOperationalAttribute ID ::= {ds  12}
 * ```
 * 
 * @constant
 */
export
const dsaOperationalAttribute: ID = _OID.fromParts([
    12,
], ds);

/* eslint-enable */
