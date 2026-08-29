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
 * @summary summarizationParameter
 * @description
 *
 * OID arc for summarization specific-error parameters.
 * Registered leaves (X.738 A.8): `scanActionError`(1)
 * — `ScannerActionError` when a scan action is not
 * performed (locked, shutting down, scan terminated,
 * or unspecified); `conflictingPackagesRequestedError`
 * (2) — `PackageConflict` when CREATE requests
 * mutually exclusive conditional packages or omits
 * packages that must be present together. ITU-T Rec.
 * X.738 (11/93)
 * [A.8](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationParameter OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) parameter(5)}
 * ```
 *
 * @constant
 */
export const summarizationParameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* parameter */ 5],
    joint_iso_ccitt
);

/* eslint-enable */
