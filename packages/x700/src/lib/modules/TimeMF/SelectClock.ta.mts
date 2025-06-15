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

/* START_OF_SYMBOL_DEFINITION SelectClock */
/**
 * @summary SelectClock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectClock  ::=  INTEGER(0..255)
 * ```
 */
export type SelectClock = INTEGER;
/* END_OF_SYMBOL_DEFINITION SelectClock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectClock */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectClock */

/* START_OF_SYMBOL_DEFINITION _decode_SelectClock */
export const _decode_SelectClock = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SelectClock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectClock */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectClock */

/* START_OF_SYMBOL_DEFINITION _encode_SelectClock */
export const _encode_SelectClock = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SelectClock */

/* eslint-enable */
