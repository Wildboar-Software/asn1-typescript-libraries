/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary der
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * der OBJECT IDENTIFIER ::= {joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}
 * ```
 * 
 * @constant
 */
export
const der: OBJECT_IDENTIFIER = _OID.fromParts([
    joint_iso_itu_t,
    /* asn1 */ 1,
    /* ber-derived */ 2,
    /* distinguished-encoding */ 1,
]);

/* eslint-enable */
