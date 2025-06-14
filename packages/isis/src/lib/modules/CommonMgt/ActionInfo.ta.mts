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
  Parameter,
  _decode_Parameter,
  _encode_Parameter,
} from '../CommonMgt/Parameter.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ActionInfo */
/**
 * @summary ActionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionInfo  ::=  SET OF Parameter
 * ```
 */
export type ActionInfo = Parameter[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ActionInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionInfo */
let _cached_decoder_for_ActionInfo: $.ASN1Decoder<ActionInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ActionInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionInfo} The decoded data structure.
 */
export function _decode_ActionInfo(el: _Element) {
  if (!_cached_decoder_for_ActionInfo) {
    _cached_decoder_for_ActionInfo = $._decodeSetOf<Parameter>(
      () => _decode_Parameter
    );
  }
  return _cached_decoder_for_ActionInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionInfo */
let _cached_encoder_for_ActionInfo: $.ASN1Encoder<ActionInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ActionInfo */
/**
 * @summary Encodes a(n) ActionInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActionInfo(
  value: ActionInfo,
  elGetter: $.ASN1Encoder<ActionInfo>
) {
  if (!_cached_encoder_for_ActionInfo) {
    _cached_encoder_for_ActionInfo = $._encodeSetOf<Parameter>(
      () => _encode_Parameter,
      $.BER
    );
  }
  return _cached_encoder_for_ActionInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionInfo */

/* eslint-enable */
