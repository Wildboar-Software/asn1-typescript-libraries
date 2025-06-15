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
 * @summary summarizationAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationAction OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) action(9)}
 * ```
 *
 * @constant
 */
export const summarizationAction: OBJECT_IDENTIFIER = new _OID(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* action */ 9],
    joint_iso_ccitt
);

/* eslint-enable */
