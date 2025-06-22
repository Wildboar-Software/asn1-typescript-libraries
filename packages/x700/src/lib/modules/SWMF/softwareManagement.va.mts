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
 * @summary softwareManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * softwareManagement OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part18(18)}
 * ```
 *
 * @constant
 */
export const softwareManagement: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part18 */ 18],
    joint_iso_itu_t
);

/* eslint-enable */
