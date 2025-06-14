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

/* START_OF_SYMBOL_DEFINITION RTORQapdu_dialogueMode */
/**
 * @summary RTORQapdu_dialogueMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTORQapdu-dialogueMode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RTORQapdu_dialogueMode = INTEGER;
/* END_OF_SYMBOL_DEFINITION RTORQapdu_dialogueMode */

/* START_OF_SYMBOL_DEFINITION RTORQapdu_dialogueMode_monologue */
/**
 * @summary RTORQapdu_dialogueMode_monologue
 * @constant
 * @type {number}
 */
export const RTORQapdu_dialogueMode_monologue: RTORQapdu_dialogueMode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RTORQapdu_dialogueMode_monologue */

/* START_OF_SYMBOL_DEFINITION monologue */
/**
 * @summary RTORQapdu_dialogueMode_monologue
 * @constant
 * @type {number}
 */
export const monologue: RTORQapdu_dialogueMode = RTORQapdu_dialogueMode_monologue; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION monologue */

/* START_OF_SYMBOL_DEFINITION RTORQapdu_dialogueMode_twa */
/**
 * @summary RTORQapdu_dialogueMode_twa
 * @constant
 * @type {number}
 */
export const RTORQapdu_dialogueMode_twa: RTORQapdu_dialogueMode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RTORQapdu_dialogueMode_twa */

/* START_OF_SYMBOL_DEFINITION twa */
/**
 * @summary RTORQapdu_dialogueMode_twa
 * @constant
 * @type {number}
 */
export const twa: RTORQapdu_dialogueMode = RTORQapdu_dialogueMode_twa; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION twa */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RTORQapdu_dialogueMode */
let _cached_decoder_for_RTORQapdu_dialogueMode: $.ASN1Decoder<RTORQapdu_dialogueMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RTORQapdu_dialogueMode */

/* START_OF_SYMBOL_DEFINITION _decode_RTORQapdu_dialogueMode */
/**
 * @summary Decodes an ASN.1 element into a(n) RTORQapdu_dialogueMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTORQapdu_dialogueMode} The decoded data structure.
 */
export function _decode_RTORQapdu_dialogueMode(el: _Element) {
  if (!_cached_decoder_for_RTORQapdu_dialogueMode) {
    _cached_decoder_for_RTORQapdu_dialogueMode = $._decodeInteger;
  }
  return _cached_decoder_for_RTORQapdu_dialogueMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RTORQapdu_dialogueMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RTORQapdu_dialogueMode */
let _cached_encoder_for_RTORQapdu_dialogueMode: $.ASN1Encoder<RTORQapdu_dialogueMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RTORQapdu_dialogueMode */

/* START_OF_SYMBOL_DEFINITION _encode_RTORQapdu_dialogueMode */
/**
 * @summary Encodes a(n) RTORQapdu_dialogueMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTORQapdu_dialogueMode, encoded as an ASN.1 Element.
 */
export function _encode_RTORQapdu_dialogueMode(
  value: RTORQapdu_dialogueMode,
  elGetter: $.ASN1Encoder<RTORQapdu_dialogueMode>
) {
  if (!_cached_encoder_for_RTORQapdu_dialogueMode) {
    _cached_encoder_for_RTORQapdu_dialogueMode = $._encodeInteger;
  }
  return _cached_encoder_for_RTORQapdu_dialogueMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RTORQapdu_dialogueMode */

/* eslint-enable */
