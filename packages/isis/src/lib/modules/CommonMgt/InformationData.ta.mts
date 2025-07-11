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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Parameter,
  _decode_Parameter,
  _encode_Parameter,
} from '../CommonMgt/Parameter.ta.mjs';
/**
 * @summary InformationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationData  ::=  SET OF Parameter
 * ```
 */
export type InformationData = Parameter[]; // SetOfType

let _cached_decoder_for_InformationData: $.ASN1Decoder<InformationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationData} The decoded data structure.
 */
export function _decode_InformationData(el: _Element): InformationData {
  if (!_cached_decoder_for_InformationData) {
    _cached_decoder_for_InformationData = $._decodeSetOf<Parameter>(
      () => _decode_Parameter
    );
  }
  return _cached_decoder_for_InformationData(el);
}

let _cached_encoder_for_InformationData: $.ASN1Encoder<InformationData> | null = null;

/**
 * @summary Encodes a(n) InformationData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationData, encoded as an ASN.1 Element.
 */
export function _encode_InformationData(
  value: InformationData,
  elGetter: $.ASN1Encoder<InformationData>
): _Element {
  if (!_cached_encoder_for_InformationData) {
    _cached_encoder_for_InformationData = $._encodeSetOf<Parameter>(
      () => _encode_Parameter,
      $.BER
    );
  }
  return _cached_encoder_for_InformationData(value, elGetter);
}


/* eslint-enable */
