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
 * @summary part12Package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12Package OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) package(4)}
 * ```
 *
 * @constant
 */
export const part12Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* package */ 4],
    joint_iso_ccitt
);

/* eslint-enable */
