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
  LastReq_Item,
  _decode_LastReq_Item,
  _encode_LastReq_Item,
} from '../KerberosV5Spec2/LastReq-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION LastReq */
/**
 * @summary LastReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastReq          ::=      SEQUENCE OF SEQUENCE {
 *         lr-type         [0] Int32,
 *         lr-value        [1] KerberosTime
 * }
 * ```
 */
export type LastReq = LastReq_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION LastReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastReq */
let _cached_decoder_for_LastReq: $.ASN1Decoder<LastReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastReq */

/* START_OF_SYMBOL_DEFINITION _decode_LastReq */
/**
 * @summary Decodes an ASN.1 element into a(n) LastReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastReq} The decoded data structure.
 */
export function _decode_LastReq(el: _Element) {
  if (!_cached_decoder_for_LastReq) {
    _cached_decoder_for_LastReq = $._decodeSequenceOf<LastReq_Item>(
      () => _decode_LastReq_Item
    );
  }
  return _cached_decoder_for_LastReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LastReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastReq */
let _cached_encoder_for_LastReq: $.ASN1Encoder<LastReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastReq */

/* START_OF_SYMBOL_DEFINITION _encode_LastReq */
/**
 * @summary Encodes a(n) LastReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastReq, encoded as an ASN.1 Element.
 */
export function _encode_LastReq(
  value: LastReq,
  elGetter: $.ASN1Encoder<LastReq>
) {
  if (!_cached_encoder_for_LastReq) {
    _cached_encoder_for_LastReq = $._encodeSequenceOf<LastReq_Item>(
      () => _encode_LastReq_Item,
      $.BER
    );
  }
  return _cached_encoder_for_LastReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LastReq */

/* eslint-enable */
