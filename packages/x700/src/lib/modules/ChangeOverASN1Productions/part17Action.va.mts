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
} from 'asn1-ts';

/**
 * @summary part17Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part17Action OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part17(17) action(9)}
 * ```
 *
 * @constant
 */
export const part17Action: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part17 */ 17, /* action */ 9],
    joint_iso_itu_t
);

/* eslint-enable */
