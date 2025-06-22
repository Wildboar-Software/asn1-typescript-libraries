/* eslint-disable */
import {
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DestTransactionID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestTransactionID  ::=  [APPLICATION 9]  OCTET STRING(SIZE (1..4))
 * ```
 */
export type DestTransactionID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_DestTransactionID: $.ASN1Decoder<DestTransactionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestTransactionID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DestTransactionID} The decoded data structure.
 */
export function _decode_DestTransactionID(el: _Element) {
  if (!_cached_decoder_for_DestTransactionID) {
    _cached_decoder_for_DestTransactionID = $._decode_implicit<DestTransactionID>(
      () => $._decodeOctetString
    );
  }
  return _cached_decoder_for_DestTransactionID(el);
}

let _cached_encoder_for_DestTransactionID: $.ASN1Encoder<DestTransactionID> | null = null;

/**
 * @summary Encodes a(n) DestTransactionID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestTransactionID, encoded as an ASN.1 Element.
 */
export function _encode_DestTransactionID(
  value: DestTransactionID,
  elGetter: $.ASN1Encoder<DestTransactionID>
) {
  if (!_cached_encoder_for_DestTransactionID) {
    _cached_encoder_for_DestTransactionID = $._encode_implicit(
      _TagClass.application,
      9,
      () => $._encodeOctetString,
      $.BER
    );
  }
  return _cached_encoder_for_DestTransactionID(value, elGetter);
}


/* eslint-enable */
