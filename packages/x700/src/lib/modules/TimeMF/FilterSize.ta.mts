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
 * @summary FilterSize
 * @description
 *
 * Size of the NTP clock-filter shift register (0..32).
 * Syntax of `filterSize`. ITU-T Rec. X.743 (06/98)
 * [§B.3.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterSize  ::=  INTEGER(0..32)
 * ```
 */
export type FilterSize = INTEGER;


export const _decode_FilterSize = $._decodeInteger;


export const _encode_FilterSize = $._encodeInteger;


/* eslint-enable */
