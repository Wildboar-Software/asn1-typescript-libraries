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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION MaxCounterSize */
/**
 * @summary MaxCounterSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxCounterSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export type MaxCounterSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION MaxCounterSize_unlimited */
/**
 * @summary MaxCounterSize_unlimited
 * @constant
 * @type {number}
 */
export const MaxCounterSize_unlimited: MaxCounterSize = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MaxCounterSize_unlimited */

/* START_OF_SYMBOL_DEFINITION unlimited */
/**
 * @summary MaxCounterSize_unlimited
 * @constant
 * @type {number}
 */
export const unlimited: MaxCounterSize = MaxCounterSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unlimited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxCounterSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION _decode_MaxCounterSize */
export const _decode_MaxCounterSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxCounterSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxCounterSize */

/* START_OF_SYMBOL_DEFINITION _encode_MaxCounterSize */
export const _encode_MaxCounterSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaxCounterSize */

/* eslint-enable */
