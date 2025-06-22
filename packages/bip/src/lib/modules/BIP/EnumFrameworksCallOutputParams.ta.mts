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
  BioAPI_FRAMEWORK_SCHEMA,
  _decode_BioAPI_FRAMEWORK_SCHEMA,
  _encode_BioAPI_FRAMEWORK_SCHEMA,
} from '../BIP/BioAPI-FRAMEWORK-SCHEMA.ta.mjs';

/**
 * @summary EnumFrameworksCallOutputParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnumFrameworksCallOutputParams  ::=  SEQUENCE OF BioAPI-FRAMEWORK-SCHEMA
 * ```
 */
export type EnumFrameworksCallOutputParams = BioAPI_FRAMEWORK_SCHEMA[]; // SequenceOfType


let _cached_decoder_for_EnumFrameworksCallOutputParams: $.ASN1Decoder<EnumFrameworksCallOutputParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EnumFrameworksCallOutputParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnumFrameworksCallOutputParams} The decoded data structure.
 */
export function _decode_EnumFrameworksCallOutputParams(el: _Element) {
  if (!_cached_decoder_for_EnumFrameworksCallOutputParams) {
    _cached_decoder_for_EnumFrameworksCallOutputParams = $._decodeSequenceOf<BioAPI_FRAMEWORK_SCHEMA>(
      () => _decode_BioAPI_FRAMEWORK_SCHEMA
    );
  }
  return _cached_decoder_for_EnumFrameworksCallOutputParams(el);
}


let _cached_encoder_for_EnumFrameworksCallOutputParams: $.ASN1Encoder<EnumFrameworksCallOutputParams> | null = null;


/**
 * @summary Encodes a(n) EnumFrameworksCallOutputParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnumFrameworksCallOutputParams, encoded as an ASN.1 Element.
 */
export function _encode_EnumFrameworksCallOutputParams(
  value: EnumFrameworksCallOutputParams,
  elGetter: $.ASN1Encoder<EnumFrameworksCallOutputParams>
) {
  if (!_cached_encoder_for_EnumFrameworksCallOutputParams) {
    _cached_encoder_for_EnumFrameworksCallOutputParams = $._encodeSequenceOf<BioAPI_FRAMEWORK_SCHEMA>(
      () => _encode_BioAPI_FRAMEWORK_SCHEMA,
      $.BER
    );
  }
  return _cached_encoder_for_EnumFrameworksCallOutputParams(value, elGetter);
}


/* eslint-enable */
