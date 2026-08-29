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
 * @summary CumLeapSeconds
 * @description
 *
 * Cumulative leap seconds to note when converting this
 * timeline to other time formats or civil date. Range
 * 0..65536. Leap seconds do not insert a discontinuity in the
 * `Seconds`/`Nanoseconds` count. ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CumLeapSeconds  ::=  INTEGER(0..65536)
 * ```
 */
export type CumLeapSeconds = INTEGER;


export const _decode_CumLeapSeconds = $._decodeInteger;


export const _encode_CumLeapSeconds = $._encodeInteger;


/* eslint-enable */
