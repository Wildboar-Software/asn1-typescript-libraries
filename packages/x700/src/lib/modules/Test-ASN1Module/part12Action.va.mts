/* eslint-disable */
import {
    joint_iso_ccitt,
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
 * @summary part12Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12Action OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) action(9)}
 * ```
 *
 * @constant
 */
export const part12Action: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* action */ 9],
    joint_iso_ccitt
);

/* eslint-enable */
