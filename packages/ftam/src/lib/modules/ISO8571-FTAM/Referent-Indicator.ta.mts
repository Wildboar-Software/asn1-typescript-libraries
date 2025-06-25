/* eslint-disable */
import {
  BOOLEAN,
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
 * @summary Referent_Indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Referent-Indicator  ::=  [APPLICATION 29] IMPLICIT BOOLEAN
 * ```
 */
export type Referent_Indicator = BOOLEAN; // BooleanType


let _cached_decoder_for_Referent_Indicator: $.ASN1Decoder<Referent_Indicator> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Referent_Indicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Referent_Indicator} The decoded data structure.
 */
export function _decode_Referent_Indicator(el: _Element): Referent_Indicator {
  if (!_cached_decoder_for_Referent_Indicator) {
    _cached_decoder_for_Referent_Indicator = $._decode_implicit<Referent_Indicator>(
      () => $._decodeBoolean
    );
  }
  return _cached_decoder_for_Referent_Indicator(el);
}


let _cached_encoder_for_Referent_Indicator: $.ASN1Encoder<Referent_Indicator> | null = null;


/**
 * @summary Encodes a(n) Referent_Indicator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Referent_Indicator, encoded as an ASN.1 Element.
 */
export function _encode_Referent_Indicator(
  value: Referent_Indicator,
  elGetter: $.ASN1Encoder<Referent_Indicator>
): _Element {
  if (!_cached_encoder_for_Referent_Indicator) {
    _cached_encoder_for_Referent_Indicator = $._encode_implicit(
      _TagClass.application,
      29,
      () => $._encodeBoolean,
      $.BER
    );
  }
  return _cached_encoder_for_Referent_Indicator(value, elGetter);
}


/* eslint-enable */
