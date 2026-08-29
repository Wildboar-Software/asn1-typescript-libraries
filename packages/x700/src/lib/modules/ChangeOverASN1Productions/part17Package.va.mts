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
 * @summary part17Package
 * @description
 *
 * Arc for change-over packages: `backedUpObjectAttributePackage`
 * (1), `backUpObjectAttributePackage` (2; Cor.1),
 * `changeBackActionPackage` (3), `changeOverActionPackage` (4),
 * `primaryAttributePackage` (5), `secondaryAttributePackage` (6).
 * ITU-T Rec. X.751 (11/95)
 * [A.3](https://www.itu.int/rec/T-REC-X.751-199511-I), Annex B;
 * Cor.1 §3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part17Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part17(17) package(4)}
 * ```
 *
 * @constant
 */
export const part17Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part17 */ 17, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
