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
 * @summary SuspectIntervals
 * @description
 *
 * Count of scheduled scans in the report period that
 * had any observed attribute value missing or suspect
 * (`{summarizationAttribute 27}`). Default in
 * `BufferedScanReportInformation` is 0. ITU-T Rec.
 * X.738 (11/93)
 * [§8.2.2.3.3](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.9.3, A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspectIntervals  ::=  INTEGER
 * ```
 */
export type SuspectIntervals = INTEGER;


export const _decode_SuspectIntervals = $._decodeInteger;


export const _encode_SuspectIntervals = $._encodeInteger;


/* eslint-enable */
