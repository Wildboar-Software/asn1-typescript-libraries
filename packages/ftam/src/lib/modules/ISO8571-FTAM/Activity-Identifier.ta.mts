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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Activity_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Activity-Identifier  ::=  [APPLICATION 6] IMPLICIT INTEGER
 * ```
 */
export type Activity_Identifier = INTEGER;


let _cached_decoder_for_Activity_Identifier: $.ASN1Decoder<Activity_Identifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Activity_Identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Activity_Identifier} The decoded data structure.
 */
export function _decode_Activity_Identifier(el: _Element) {
  if (!_cached_decoder_for_Activity_Identifier) {
    _cached_decoder_for_Activity_Identifier = $._decode_implicit<Activity_Identifier>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Activity_Identifier(el);
}


let _cached_encoder_for_Activity_Identifier: $.ASN1Encoder<Activity_Identifier> | null = null;


/**
 * @summary Encodes a(n) Activity_Identifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Activity_Identifier, encoded as an ASN.1 Element.
 */
export function _encode_Activity_Identifier(
  value: Activity_Identifier,
  elGetter: $.ASN1Encoder<Activity_Identifier>
) {
  if (!_cached_encoder_for_Activity_Identifier) {
    _cached_encoder_for_Activity_Identifier = $._encode_implicit(
      _TagClass.application,
      6,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Activity_Identifier(value, elGetter);
}


/* eslint-enable */
