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

/* START_OF_SYMBOL_DEFINITION ClockDrift */
/**
 * @summary ClockDrift
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockDrift  ::=  REAL
 * ```
 */
export type ClockDrift = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION ClockDrift */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockDrift */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockDrift */

/* START_OF_SYMBOL_DEFINITION _decode_ClockDrift */
export const _decode_ClockDrift = $._decodeReal;
/* END_OF_SYMBOL_DEFINITION _decode_ClockDrift */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockDrift */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockDrift */

/* START_OF_SYMBOL_DEFINITION _encode_ClockDrift */
export const _encode_ClockDrift = $._encodeReal;

/* END_OF_SYMBOL_DEFINITION _encode_ClockDrift */

/* eslint-enable */
