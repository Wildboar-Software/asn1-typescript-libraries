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
 * @summary summarizationNameBinding
 * @description
 *
 * OID arc for summarization name bindings. Registered
 * leaves (X.738 A.7): `dynamicSimpleScanner-system`(2)
 * — `dynamicSimpleScanner` (and subclasses) named by
 * `system` using `scannerId`; CREATE with
 * reference-object or automatic naming, DELETE
 * only-if-no-contained-objects;
 * `conflictingPackagesScanner-system`(9) — X.739
 * `scanner` (and subclasses) named by `system` with
 * the same create/delete rules. Both CREATE forms may
 * return `conflictingPackagesRequestedError`. Number 1
 * is unused. ITU-T Rec. X.738 (11/93)
 * [A.7](https://www.itu.int/rec/T-REC-X.738-199311-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationNameBinding OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const summarizationNameBinding: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* nameBinding */ 6],
    joint_iso_ccitt
);

/* eslint-enable */
