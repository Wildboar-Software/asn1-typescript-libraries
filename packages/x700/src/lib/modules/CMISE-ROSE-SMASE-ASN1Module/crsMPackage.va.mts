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
} from '@wildboar/asn1';

/**
 * @summary crsMPackage
 * @description
 *
 * Registration arc for X.727 packages:
 * `{joint-iso-ccitt ms(9) smi(3) part9(9) package(4)}`.
 * Annex A packages are specified in-line on the class
 * templates. ITU-T Rec. X.727 (03/99)
 * [Annex A](https://www.itu.int/rec/T-REC-X.727-199903-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crsMPackage OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) smi(3) part9(9) package(4)}
 * ```
 *
 * @constant
 */
export const crsMPackage: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part9 */ 9, /* package */ 4],
    joint_iso_ccitt
);

/* eslint-enable */
