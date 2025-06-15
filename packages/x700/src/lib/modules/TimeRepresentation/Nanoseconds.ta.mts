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

/* START_OF_SYMBOL_DEFINITION Nanoseconds */
/**
 * @summary Nanoseconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Nanoseconds  ::=  INTEGER(0..999999999)
 * ```
 */
export type Nanoseconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION Nanoseconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Nanoseconds */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Nanoseconds */

/* START_OF_SYMBOL_DEFINITION _decode_Nanoseconds */
export const _decode_Nanoseconds = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Nanoseconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Nanoseconds */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Nanoseconds */

/* START_OF_SYMBOL_DEFINITION _encode_Nanoseconds */
export const _encode_Nanoseconds = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Nanoseconds */

/* eslint-enable */
