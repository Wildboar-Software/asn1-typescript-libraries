/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    TimeStampReportMode,
    _enum_for_TimeStampReportMode,
    TimeStampReportMode_timeStampingOff /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_TimeStampReportMode,
    _encode_TimeStampReportMode,
} from '../SummarizationASN1Productions/TimeStampReportMode.ta.mjs';
/**
 * @summary timeStampingDefault
 * @description
 *
 * DEFAULT VALUE of `timeStampReportMode` in
 * `timeStampReportPackage`: `timeStampingOff` (0) — no
 * time stamps in summary reports. ITU-T Rec. X.738
 * (11/93)
 * [§8.1.12.4.3](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.3, A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeStampingDefault TimeStampReportMode ::= timeStampingOff
 * ```
 *
 * @constant
 */
export const timeStampingDefault: TimeStampReportMode = TimeStampReportMode_timeStampingOff;

/* eslint-enable */
