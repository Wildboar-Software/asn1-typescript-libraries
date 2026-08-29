/* eslint-disable */
import {
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
 * @summary dmiNotification
 * @description
 *
 * X.721 DMI notification OID arc, aliased by MKM (object creation,
 * deletion, attribute-value change). ITU-T Rec. X.750 (10/96)
 * [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dmiNotification OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) smi(3) part2(2) notification(10)}
 * ```
 *
 * @constant
 */
export const dmiNotification: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* smi */ 3,
    /* part2 */ 2,
    /* notification */ 10,
]);

/* eslint-enable */
