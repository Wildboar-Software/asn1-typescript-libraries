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

/* START_OF_SYMBOL_DEFINITION SelectWeight */
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
/* END_OF_SYMBOL_DEFINITION SelectWeight */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectWeight */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectWeight */

/* START_OF_SYMBOL_DEFINITION _decode_SelectWeight */
export const _decode_SelectWeight = $._decodeReal;
/* END_OF_SYMBOL_DEFINITION _decode_SelectWeight */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectWeight */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectWeight */

/* START_OF_SYMBOL_DEFINITION _encode_SelectWeight */
export const _encode_SelectWeight = $._encodeReal;

/* END_OF_SYMBOL_DEFINITION _encode_SelectWeight */

/* eslint-enable */
