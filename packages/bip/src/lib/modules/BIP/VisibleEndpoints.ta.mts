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
  VisibleEndpoint,
  _decode_VisibleEndpoint,
  _encode_VisibleEndpoint,
} from '../BIP/VisibleEndpoint.ta.mjs';
/* START_OF_SYMBOL_DEFINITION VisibleEndpoints */
/**
 * @summary VisibleEndpoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleEndpoints  ::=  SET OF endpoint VisibleEndpoint
 * ```
 */
export type VisibleEndpoints = VisibleEndpoint[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION VisibleEndpoints */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleEndpoints */
let _cached_decoder_for_VisibleEndpoints: $.ASN1Decoder<VisibleEndpoints> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleEndpoints */

/* START_OF_SYMBOL_DEFINITION _decode_VisibleEndpoints */
/**
 * @summary Decodes an ASN.1 element into a(n) VisibleEndpoints
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleEndpoints} The decoded data structure.
 */
export function _decode_VisibleEndpoints(el: _Element) {
  if (!_cached_decoder_for_VisibleEndpoints) {
    _cached_decoder_for_VisibleEndpoints = $._decodeSetOf<VisibleEndpoint>(
      () => _decode_VisibleEndpoint
    );
  }
  return _cached_decoder_for_VisibleEndpoints(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VisibleEndpoints */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleEndpoints */
let _cached_encoder_for_VisibleEndpoints: $.ASN1Encoder<VisibleEndpoints> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleEndpoints */

/* START_OF_SYMBOL_DEFINITION _encode_VisibleEndpoints */
/**
 * @summary Encodes a(n) VisibleEndpoints into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleEndpoints, encoded as an ASN.1 Element.
 */
export function _encode_VisibleEndpoints(
  value: VisibleEndpoints,
  elGetter: $.ASN1Encoder<VisibleEndpoints>
) {
  if (!_cached_encoder_for_VisibleEndpoints) {
    _cached_encoder_for_VisibleEndpoints = $._encodeSetOf<VisibleEndpoint>(
      () => _encode_VisibleEndpoint,
      $.BER
    );
  }
  return _cached_encoder_for_VisibleEndpoints(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VisibleEndpoints */

/* eslint-enable */
