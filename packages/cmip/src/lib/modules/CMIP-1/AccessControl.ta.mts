/* eslint-disable */
import {
  EXTERNAL,
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

/* START_OF_SYMBOL_DEFINITION AccessControl */
/**
 * @summary AccessControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControl  ::=  EXTERNAL
 * ```
 */
export type AccessControl = EXTERNAL; // ExternalType
/* END_OF_SYMBOL_DEFINITION AccessControl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControl */
let _cached_decoder_for_AccessControl: $.ASN1Decoder<AccessControl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControl */

/* START_OF_SYMBOL_DEFINITION _decode_AccessControl */
/**
 * @summary Decodes an ASN.1 element into a(n) AccessControl
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessControl} The decoded data structure.
 */
export function _decode_AccessControl(el: _Element) {
  if (!_cached_decoder_for_AccessControl) {
    _cached_decoder_for_AccessControl = $._decodeExternal;
  }
  return _cached_decoder_for_AccessControl(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccessControl */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControl */
let _cached_encoder_for_AccessControl: $.ASN1Encoder<AccessControl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControl */

/* START_OF_SYMBOL_DEFINITION _encode_AccessControl */
/**
 * @summary Encodes a(n) AccessControl into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControl, encoded as an ASN.1 Element.
 */
export function _encode_AccessControl(
  value: AccessControl,
  elGetter: $.ASN1Encoder<AccessControl>
) {
  if (!_cached_encoder_for_AccessControl) {
    _cached_encoder_for_AccessControl = $._encodeExternal;
  }
  return _cached_encoder_for_AccessControl(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccessControl */

/* eslint-enable */
