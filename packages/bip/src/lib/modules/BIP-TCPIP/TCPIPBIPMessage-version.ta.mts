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

/* START_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version */
/**
 * @summary TCPIPBIPMessage_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCPIPBIPMessage-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TCPIPBIPMessage_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version_version_1 */
/**
 * @summary TCPIPBIPMessage_version_version_1
 * @constant
 * @type {number}
 */
export const TCPIPBIPMessage_version_version_1: TCPIPBIPMessage_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version_version_1 */

/* START_OF_SYMBOL_DEFINITION version_1 */
/**
 * @summary TCPIPBIPMessage_version_version_1
 * @constant
 * @type {number}
 */
export const version_1: TCPIPBIPMessage_version = TCPIPBIPMessage_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION version_1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage_version */
let _cached_decoder_for_TCPIPBIPMessage_version: $.ASN1Decoder<TCPIPBIPMessage_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage_version */
/**
 * @summary Decodes an ASN.1 element into a(n) TCPIPBIPMessage_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCPIPBIPMessage_version} The decoded data structure.
 */
export function _decode_TCPIPBIPMessage_version(el: _Element) {
  if (!_cached_decoder_for_TCPIPBIPMessage_version) {
    _cached_decoder_for_TCPIPBIPMessage_version = $._decodeInteger;
  }
  return _cached_decoder_for_TCPIPBIPMessage_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage_version */
let _cached_encoder_for_TCPIPBIPMessage_version: $.ASN1Encoder<TCPIPBIPMessage_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage_version */
/**
 * @summary Encodes a(n) TCPIPBIPMessage_version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPIPBIPMessage_version, encoded as an ASN.1 Element.
 */
export function _encode_TCPIPBIPMessage_version(
  value: TCPIPBIPMessage_version,
  elGetter: $.ASN1Encoder<TCPIPBIPMessage_version>
) {
  if (!_cached_encoder_for_TCPIPBIPMessage_version) {
    _cached_encoder_for_TCPIPBIPMessage_version = $._encodeInteger;
  }
  return _cached_encoder_for_TCPIPBIPMessage_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage_version */

/* eslint-enable */
