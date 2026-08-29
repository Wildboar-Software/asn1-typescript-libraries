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
 * @summary summarizationNotification
 * @description
 *
 * OID arc for summarization notifications. Registered
 * leaves (X.738 A.5, Table 12): `bufferedScanReport`(1)
 * — retained values from all scans in a report period,
 * emitted after the last scan; `scanReport`(2) —
 * observed attribute values from a single scan;
 * `statisticalReport`(3) — ensemble statistics plus
 * optional per-object scanned values. Mapped to CMIS
 * M-EVENT-REPORT. ITU-T Rec. X.738 (11/93)
 * [A.5](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.2.1, §9.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationNotification OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) notification(10)}
 * ```
 *
 * @constant
 */
export const summarizationNotification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* notification */ 10],
    joint_iso_ccitt
);

/* eslint-enable */
