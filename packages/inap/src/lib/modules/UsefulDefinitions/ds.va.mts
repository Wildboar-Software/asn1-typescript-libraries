/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";


/**
 * @summary ds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ds ID ::= {joint-iso-itu-t ds(5)}
 * ```
 * 
 * @constant
 */
export
const ds: ID = _OID.fromParts([
    /* ds */ 5,
], joint_iso_itu_t);

/* eslint-enable */
