/* eslint-disable */
import {
    REAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary SelectWeight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectWeight  ::=  REAL(0..{mantissa 1, base 10, exponent 0})
 * ```
 */
export type SelectWeight = REAL; // RealType


export const _decode_SelectWeight = $._decodeReal;


export const _encode_SelectWeight = $._encodeReal;


/* eslint-enable */
