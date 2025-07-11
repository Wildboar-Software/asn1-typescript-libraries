/* eslint-disable */
import {
    joint_iso_itu_t,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary smi2Notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smi2Notification OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) notification(10)}
 * ```
 *
 * @constant
 */
export const smi2Notification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part2 */ 2, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
