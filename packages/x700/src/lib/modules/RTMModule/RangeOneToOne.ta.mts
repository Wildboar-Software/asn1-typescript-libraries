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
 * @summary RangeOneToOne
 * @description
 *
 * INTEGER range `(1..1)` used as GDMO role-cardinality on
 * requester, confirmation, and monitor roles of
 * `responseMonitoring`. ITU-T Rec. X.748 (03/99)
 * [A.1](https://www.itu.int/rec/T-REC-X.748-199903-I), A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeOneToOne = INTEGER;


export const _decode_RangeOneToOne = $._decodeInteger;


export const _encode_RangeOneToOne = $._encodeInteger;


/* eslint-enable */
