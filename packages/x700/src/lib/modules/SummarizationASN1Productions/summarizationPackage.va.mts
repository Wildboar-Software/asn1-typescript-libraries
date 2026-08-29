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
 * @summary summarizationPackage
 * @description
 *
 * OID arc for summarization GDMO packages. Registered
 * leaves (X.738 A.2–A.3): `meanCalculationPackage`(1);
 * `algorithmParametersPackage`(2);
 * `firstScanInitiationTimePackage`(3);
 * `managedObjectInstanceSelectionPackage`(4) —
 * explicit `objectList`;
 * `observationReportListPackage`(5);
 * `onceReportAttributeIdListPackage`(6);
 * `onceReportAttributeListPackage`(7);
 * `scanInitiationTimePackage`(9);
 * `scopedSelectionPackage`(10) — CMIS-like scope and
 * filter (`scanningFilter` defaults to
 * `scanningFilterDefault`);
 * `suspectIntervalsPackage`(11);
 * `timeStampReportPackage`(12) —
 * `timeStampReportMode` defaults to
 * `timeStampingDefault`;
 * `timingSelectionPackage`(13) — time-window
 * selection; `incompleteScanPackage`(14). Number 8 is
 * unused. ITU-T Rec. X.738 (11/93)
 * [A.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.3, §8.1.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationPackage OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) package(4)}
 * ```
 *
 * @constant
 */
export const summarizationPackage: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* package */ 4],
    joint_iso_ccitt
);

/* eslint-enable */
