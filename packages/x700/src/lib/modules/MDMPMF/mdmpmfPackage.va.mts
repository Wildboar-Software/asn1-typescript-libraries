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
 * @summary mdmpmfPackage
 * @description
 *
 * Arc allocated for MDMPMF packages. Annex A defines packages inline
 * on managed object classes and does not register separate package
 * OIDs under this arc. ITU-T Rec. X.749 (08/97)
 * [A.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfPackage OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) package(4)}
 * ```
 *
 * @constant
 */
export const mdmpmfPackage: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
