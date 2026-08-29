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
 * @summary summarizationManagedObjectClass
 * @description
 *
 * OID arc for summarization managed object classes.
 * Registered leaves (X.738 A.1, Figure 3):
 * `bufferedScanner`(1), `bufferedScanReportRecord`(2),
 * `dynamicScanner`(3, non-instantiable),
 * `dynamicSimpleScanner`(4),
 * `ensembleStatisticScanner`(5, non-instantiable),
 * `heterogeneousScanner`(6),
 * `homogeneousScanner`(7, non-instantiable),
 * `meanScanner`(8), `meanVarianceScanner`(9),
 * `minMaxScanner`(10), `percentileScanner`(11),
 * `scanReportRecord`(13), `simpleScanner`(14),
 * `statisticalReportRecord`(15). Number 12 is unused.
 * Instantiable classes are underlined in Figure 3.
 * ITU-T Rec. X.738 (11/93)
 * [A.1](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationManagedObjectClass OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const summarizationManagedObjectClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* managedObjectClass */ 3],
    joint_iso_ccitt
);

/* eslint-enable */
