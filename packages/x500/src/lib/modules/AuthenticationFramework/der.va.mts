/* eslint-disable */
import {
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
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
export const der: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* asn1 */ 1, /* ber-derived */ 2, /* distinguished-encoding */ 1],
    joint_iso_itu_t
);

/* eslint-enable */
