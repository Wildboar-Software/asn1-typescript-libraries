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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary OrigTransactionID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrigTransactionID  ::=  [APPLICATION 8]  OCTET STRING(SIZE (1..4))
 * ```
 */
export type OrigTransactionID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_OrigTransactionID: $.ASN1Decoder<OrigTransactionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrigTransactionID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrigTransactionID} The decoded data structure.
 */
export function _decode_OrigTransactionID(el: _Element): OrigTransactionID {
  if (!_cached_decoder_for_OrigTransactionID) {
    _cached_decoder_for_OrigTransactionID = $._decode_implicit<OrigTransactionID>(
      () => $._decodeOctetString
    );
  }
  return _cached_decoder_for_OrigTransactionID(el);
}

let _cached_encoder_for_OrigTransactionID: $.ASN1Encoder<OrigTransactionID> | null = null;

/**
 * @summary Encodes a(n) OrigTransactionID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrigTransactionID, encoded as an ASN.1 Element.
 */
export function _encode_OrigTransactionID(
  value: OrigTransactionID,
  elGetter: $.ASN1Encoder<OrigTransactionID>
): _Element {
  if (!_cached_encoder_for_OrigTransactionID) {
    _cached_encoder_for_OrigTransactionID = $._encode_implicit(
      _TagClass.application,
      8,
      () => $._encodeOctetString,
      $.BER
    );
  }
  return _cached_encoder_for_OrigTransactionID(value, elGetter);
}


/* eslint-enable */
