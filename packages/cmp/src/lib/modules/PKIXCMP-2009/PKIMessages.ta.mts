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
  PKIMessage,
  _decode_PKIMessage,
  _encode_PKIMessage,
} from '../PKIXCMP-2009/PKIMessage.ta.mjs';

/**
 * @summary PKIMessages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIMessages  ::=  SEQUENCE SIZE (1..MAX) OF PKIMessage
 * ```
 */
export type PKIMessages = PKIMessage[]; // SequenceOfType


let _cached_decoder_for_PKIMessages: $.ASN1Decoder<PKIMessages> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKIMessages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIMessages} The decoded data structure.
 */
export function _decode_PKIMessages(el: _Element) {
  if (!_cached_decoder_for_PKIMessages) {
    _cached_decoder_for_PKIMessages = $._decodeSequenceOf<PKIMessage>(
      () => _decode_PKIMessage
    );
  }
  return _cached_decoder_for_PKIMessages(el);
}


let _cached_encoder_for_PKIMessages: $.ASN1Encoder<PKIMessages> | null = null;


/**
 * @summary Encodes a(n) PKIMessages into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIMessages, encoded as an ASN.1 Element.
 */
export function _encode_PKIMessages(
  value: PKIMessages,
  elGetter: $.ASN1Encoder<PKIMessages>
) {
  if (!_cached_encoder_for_PKIMessages) {
    _cached_encoder_for_PKIMessages = $._encodeSequenceOf<PKIMessage>(
      () => _encode_PKIMessage,
      $.BER
    );
  }
  return _cached_encoder_for_PKIMessages(value, elGetter);
}


/* eslint-enable */
