/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary acse_as_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acse-as-id OBJECT IDENTIFIER ::= {joint-iso-itu-t association-control(2) abstract-syntax(1) apdus(0)
 *    version1(1)}
 * ```
 * 
 * @constant
 */
export
const acse_as_id: OBJECT_IDENTIFIER = _OID.fromParts([
    /* association-control */ 2,
    /* abstract-syntax */ 1,
    /* apdus */ 0,
    /* version1 */ 1,
], joint_iso_itu_t);

/* eslint-enable */
