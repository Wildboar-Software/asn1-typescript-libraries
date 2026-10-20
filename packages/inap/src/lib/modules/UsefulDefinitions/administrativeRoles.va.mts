/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary administrativeRoles
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * administrativeRoles ID ::= {ds  23}
 * ```
 * 
 * @constant
 */
export
const administrativeRoles: ID = _OID.fromParts([
    23,
], ds);

/* eslint-enable */
