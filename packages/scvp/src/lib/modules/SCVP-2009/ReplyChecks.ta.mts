/* eslint-disable */
import {
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
import {
  ReplyCheck,
  _decode_ReplyCheck,
  _encode_ReplyCheck,
} from '../SCVP-2009/ReplyCheck.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ReplyChecks */
/**
 * @summary ReplyChecks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyChecks  ::=  SEQUENCE OF ReplyCheck
 * ```
 */
export type ReplyChecks = ReplyCheck[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ReplyChecks */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyChecks */
let _cached_decoder_for_ReplyChecks: $.ASN1Decoder<ReplyChecks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyChecks */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyChecks */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyChecks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyChecks} The decoded data structure.
 */
export function _decode_ReplyChecks(el: _Element) {
  if (!_cached_decoder_for_ReplyChecks) {
    _cached_decoder_for_ReplyChecks = $._decodeSequenceOf<ReplyCheck>(
      () => _decode_ReplyCheck
    );
  }
  return _cached_decoder_for_ReplyChecks(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyChecks */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyChecks */
let _cached_encoder_for_ReplyChecks: $.ASN1Encoder<ReplyChecks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyChecks */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyChecks */
/**
 * @summary Encodes a(n) ReplyChecks into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyChecks, encoded as an ASN.1 Element.
 */
export function _encode_ReplyChecks(
  value: ReplyChecks,
  elGetter: $.ASN1Encoder<ReplyChecks>
) {
  if (!_cached_encoder_for_ReplyChecks) {
    _cached_encoder_for_ReplyChecks = $._encodeSequenceOf<ReplyCheck>(
      () => _encode_ReplyCheck,
      $.BER
    );
  }
  return _cached_encoder_for_ReplyChecks(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyChecks */

/* eslint-enable */
