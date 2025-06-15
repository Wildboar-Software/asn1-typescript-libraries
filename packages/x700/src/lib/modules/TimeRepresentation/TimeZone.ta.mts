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

/* START_OF_SYMBOL_DEFINITION TimeZone */
/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER {unknown(781)}(-780..781)
 * ```
 */
export type TimeZone = INTEGER;
/* END_OF_SYMBOL_DEFINITION TimeZone */

/* START_OF_SYMBOL_DEFINITION TimeZone_unknown */
/**
 * @summary TimeZone_unknown
 * @constant
 * @type {number}
 */
export const TimeZone_unknown: TimeZone = 781; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeZone_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary TimeZone_unknown
 * @constant
 * @type {number}
 */
export const unknown: TimeZone = TimeZone_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _decode_TimeZone */
export const _decode_TimeZone = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TimeZone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _encode_TimeZone */
export const _encode_TimeZone = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TimeZone */

/* eslint-enable */
