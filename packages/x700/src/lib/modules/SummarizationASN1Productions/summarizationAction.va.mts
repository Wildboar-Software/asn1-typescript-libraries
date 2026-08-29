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
 * @summary summarizationAction
 * @description
 *
 * OID arc for summarization actions. Registered leaves
 * (X.738 A.6, Table 11):
 * `activateDynamicSimpleScanReport`(1) — scan using
 * selection in the action argument, reply
 * `ScanReportInformation`; `activateScanReport`(2) —
 * scan using the scanner’s current selection, same
 * reply; `activateStatisticalReport`(3) — scan and
 * return ensemble statistics as
 * `StatisticalScanReportInformation`; `reportBuffer`(4)
 * — report retained buffered scans plus report-time
 * attributes as `BufferedScanReportInformation`. All
 * four are confirmed; replies may be linked. ITU-T Rec.
 * X.738 (11/93)
 * [A.6](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.3, §9.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationAction OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) action(9)}
 * ```
 *
 * @constant
 */
export const summarizationAction: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* action */ 9],
    joint_iso_ccitt
);

/* eslint-enable */
