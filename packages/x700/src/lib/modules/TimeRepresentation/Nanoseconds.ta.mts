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
 * @summary Nanoseconds
 * @description
 *
 * Sub-second part of a time value or interval, in nanoseconds
 * (0..999 999 999). The time representation has 1 ns
 * precision. ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Nanoseconds  ::=  INTEGER(0..999999999)
 * ```
 */
export type Nanoseconds = INTEGER;


export const _decode_Nanoseconds = $._decodeInteger;


export const _encode_Nanoseconds = $._encodeInteger;


/* eslint-enable */
