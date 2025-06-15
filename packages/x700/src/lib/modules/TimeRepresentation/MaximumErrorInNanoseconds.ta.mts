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

/* START_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds */
/**
 * @summary MaximumErrorInNanoseconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumErrorInNanoseconds  ::=  INTEGER {noEstimate(281474976710655)
 * }(0..281474976710655)
 * ```
 */
export type MaximumErrorInNanoseconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds_noEstimate */
/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @constant
 * @type {number}
 */
export const MaximumErrorInNanoseconds_noEstimate: MaximumErrorInNanoseconds = 281474976710655; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MaximumErrorInNanoseconds_noEstimate */

/* START_OF_SYMBOL_DEFINITION noEstimate */
/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @constant
 * @type {number}
 */
export const noEstimate: MaximumErrorInNanoseconds = MaximumErrorInNanoseconds_noEstimate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noEstimate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumErrorInNanoseconds */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumErrorInNanoseconds */
export const _decode_MaximumErrorInNanoseconds = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumErrorInNanoseconds */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumErrorInNanoseconds */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumErrorInNanoseconds */
export const _encode_MaximumErrorInNanoseconds = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaximumErrorInNanoseconds */

/* eslint-enable */
