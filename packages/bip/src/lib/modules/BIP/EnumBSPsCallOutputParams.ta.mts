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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.mjs';

/**
 * @summary EnumBSPsCallOutputParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnumBSPsCallOutputParams  ::=  SEQUENCE OF BioAPI-BSP-SCHEMA
 * ```
 */
export type EnumBSPsCallOutputParams = BioAPI_BSP_SCHEMA[]; // SequenceOfType


let _cached_decoder_for_EnumBSPsCallOutputParams: $.ASN1Decoder<EnumBSPsCallOutputParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EnumBSPsCallOutputParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnumBSPsCallOutputParams} The decoded data structure.
 */
export function _decode_EnumBSPsCallOutputParams(el: _Element): EnumBSPsCallOutputParams {
  if (!_cached_decoder_for_EnumBSPsCallOutputParams) {
    _cached_decoder_for_EnumBSPsCallOutputParams = $._decodeSequenceOf<BioAPI_BSP_SCHEMA>(
      () => _decode_BioAPI_BSP_SCHEMA
    );
  }
  return _cached_decoder_for_EnumBSPsCallOutputParams(el);
}


let _cached_encoder_for_EnumBSPsCallOutputParams: $.ASN1Encoder<EnumBSPsCallOutputParams> | null = null;


/**
 * @summary Encodes a(n) EnumBSPsCallOutputParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnumBSPsCallOutputParams, encoded as an ASN.1 Element.
 */
export function _encode_EnumBSPsCallOutputParams(
  value: EnumBSPsCallOutputParams,
  elGetter: $.ASN1Encoder<EnumBSPsCallOutputParams>
): _Element {
  if (!_cached_encoder_for_EnumBSPsCallOutputParams) {
    _cached_encoder_for_EnumBSPsCallOutputParams = $._encodeSequenceOf<BioAPI_BSP_SCHEMA>(
      () => _encode_BioAPI_BSP_SCHEMA,
      $.BER
    );
  }
  return _cached_encoder_for_EnumBSPsCallOutputParams(value, elGetter);
}


/* eslint-enable */
