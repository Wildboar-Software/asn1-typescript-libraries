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

/* START_OF_SYMBOL_DEFINITION ClockEventCounter */
/**
 * @summary ClockEventCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventCounter  ::=  INTEGER(0..255)
 * ```
 */
export type ClockEventCounter = INTEGER;
/* END_OF_SYMBOL_DEFINITION ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventCounter */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _decode_ClockEventCounter */
export const _decode_ClockEventCounter = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventCounter */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _encode_ClockEventCounter */
export const _encode_ClockEventCounter = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ClockEventCounter */

/* eslint-enable */
