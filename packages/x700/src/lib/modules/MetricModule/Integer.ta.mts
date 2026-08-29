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
 * @summary Integer
 * @description
 *
 * Integer attribute syntax for `configurablePCT` (PCT used in
 * percentile calculations; allowed 1..49 inclusive; default 25
 * if the configurable-percentile package is absent) and
 * `numberOfReplications` (M: count of statistically independent
 * samples per percentile update; without that package, the
 * manager shall set 8, 16 or 32). ITU-T Rec. X.739 (11/93)
 * [§8.1.7.2](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * §8.1.9.8.2, A.3, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integer  ::=  INTEGER
 * ```
 */
export type Integer = INTEGER;


export const _decode_Integer = $._decodeInteger;


export const _encode_Integer = $._encodeInteger;


/* eslint-enable */
