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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FilterWeight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterWeight  ::=  REAL(0..{mantissa 1, base 10, exponent 0})
 * ```
 */
export type FilterWeight = REAL; // RealType


export const _decode_FilterWeight = $._decodeReal;


export const _encode_FilterWeight = $._encodeReal;


/* eslint-enable */
