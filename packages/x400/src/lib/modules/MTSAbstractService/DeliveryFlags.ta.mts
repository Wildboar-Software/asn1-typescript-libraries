/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary DeliveryFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryFlags  ::=  BIT STRING {
 *   implicit-conversion-prohibited(1) -- implicit-conversion-prohibited 'one',
 *
 *   -- implicit-conversion-allowed 'zero' --}(SIZE (0..ub-bit-options))
 * ```
 */
export type DeliveryFlags = BIT_STRING;

/**
 * @summary DeliveryFlags_implicit_conversion_prohibited
 * @constant
 */
export const DeliveryFlags_implicit_conversion_prohibited: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary implicit_conversion_prohibited
 * @constant
 */
export const implicit_conversion_prohibited: number = DeliveryFlags_implicit_conversion_prohibited; /* SHORT_NAMED_BIT */


export const _decode_DeliveryFlags = $._decodeBitString;


export const _encode_DeliveryFlags = $._encodeBitString;


/* eslint-enable */
