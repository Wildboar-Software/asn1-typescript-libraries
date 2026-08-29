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
 * @summary summarizationAttribute
 * @description
 *
 * OID arc for summarization attributes. Registered leaves
 * (X.738 A.4): `algorithmOutputs`(1),
 * `algorithmParameters`(2), `baseManagedObject`(3),
 * `beginTimeOffset`(4), `bufferedObservationIdList`(5),
 * `bufferedObservationList`(6), `endTimeOffset`(7),
 * `firstScanInitiationTime`(8),
 * `numericAttributeIdArray`(10),
 * `numericAttributeIdList`(11), `objectList`(12),
 * `observationIdList`(13), `observationReportList`(14),
 * `observationScanList`(15),
 * `onceReportAttributeIdList`(16),
 * `onceReportAttributeList`(17), `reportPeriod`(19),
 * `scanAttributeIdList`(21), `scanInitiationTime`(22),
 * `scanningFilter`(24), `scope`(25),
 * `suppressObjectInstance`(26), `suspectIntervals`(27),
 * `timeAttributeIdentifier`(28),
 * `timeStampReportMode`(29), `incompleteScan`(30).
 * Numbers 9, 18, 20 and 23 are unused. ITU-T Rec. X.738
 * (11/93)
 * [A.4](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §11.8.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * summarizationAttribute OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part13(13) attribute(7)}
 * ```
 *
 * @constant
 */
export const summarizationAttribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part13 */ 13, /* attribute */ 7],
    joint_iso_ccitt
);

/* eslint-enable */
