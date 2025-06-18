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
  CertReply,
  _decode_CertReply,
  _encode_CertReply,
} from '../SCVP-2009/CertReply.ta.mjs';
/**
 * @summary ReplyObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyObjects  ::=  SEQUENCE SIZE (1..MAX) OF CertReply
 * ```
 */
export type ReplyObjects = CertReply[]; // SequenceOfType

let _cached_decoder_for_ReplyObjects: $.ASN1Decoder<ReplyObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyObjects} The decoded data structure.
 */
export function _decode_ReplyObjects(el: _Element) {
  if (!_cached_decoder_for_ReplyObjects) {
    _cached_decoder_for_ReplyObjects = $._decodeSequenceOf<CertReply>(
      () => _decode_CertReply
    );
  }
  return _cached_decoder_for_ReplyObjects(el);
}

let _cached_encoder_for_ReplyObjects: $.ASN1Encoder<ReplyObjects> | null = null;

/**
 * @summary Encodes a(n) ReplyObjects into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyObjects, encoded as an ASN.1 Element.
 */
export function _encode_ReplyObjects(
  value: ReplyObjects,
  elGetter: $.ASN1Encoder<ReplyObjects>
) {
  if (!_cached_encoder_for_ReplyObjects) {
    _cached_encoder_for_ReplyObjects = $._encodeSequenceOf<CertReply>(
      () => _encode_CertReply,
      $.DER
    );
  }
  return _cached_encoder_for_ReplyObjects(value, elGetter);
}


/* eslint-enable */
