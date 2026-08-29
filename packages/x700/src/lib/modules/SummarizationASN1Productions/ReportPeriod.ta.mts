/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ReportPeriod
 * @description
 *
 * Number of granularity periods (scans) in a buffered
 * scanner’s report period (`{summarizationAttribute
 * 19}`). Shall be an integral multiple of, and not
 * less than, the granularity period. If granularity
 * period is zero, this must also be zero and reports
 * are only sent as `reportBuffer` action replies.
 * Constraint is `(1..MAX)` in ASN.1; the zero case is
 * stated in behaviour. ITU-T Rec. X.738 (11/93)
 * [§8.1.9.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.9.3, A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportPeriod  ::=  INTEGER(1..MAX)
 * ```
 */
export type ReportPeriod = INTEGER;


export const _decode_ReportPeriod = $._decodeInteger;


export const _encode_ReportPeriod = $._encodeInteger;


/* eslint-enable */
