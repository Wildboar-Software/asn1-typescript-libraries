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
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/**
 * @summary EnumBFPsCallOutputParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnumBFPsCallOutputParams  ::=  SEQUENCE OF BioAPI-BFP-SCHEMA
 * ```
 */
export type EnumBFPsCallOutputParams = BioAPI_BFP_SCHEMA[]; // SequenceOfType


let _cached_decoder_for_EnumBFPsCallOutputParams: $.ASN1Decoder<EnumBFPsCallOutputParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EnumBFPsCallOutputParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnumBFPsCallOutputParams} The decoded data structure.
 */
export function _decode_EnumBFPsCallOutputParams(el: _Element): EnumBFPsCallOutputParams {
  if (!_cached_decoder_for_EnumBFPsCallOutputParams) {
    _cached_decoder_for_EnumBFPsCallOutputParams = $._decodeSequenceOf<BioAPI_BFP_SCHEMA>(
      () => _decode_BioAPI_BFP_SCHEMA
    );
  }
  return _cached_decoder_for_EnumBFPsCallOutputParams(el);
}


let _cached_encoder_for_EnumBFPsCallOutputParams: $.ASN1Encoder<EnumBFPsCallOutputParams> | null = null;


/**
 * @summary Encodes a(n) EnumBFPsCallOutputParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnumBFPsCallOutputParams, encoded as an ASN.1 Element.
 */
export function _encode_EnumBFPsCallOutputParams(
  value: EnumBFPsCallOutputParams,
  elGetter: $.ASN1Encoder<EnumBFPsCallOutputParams>
): _Element {
  if (!_cached_encoder_for_EnumBFPsCallOutputParams) {
    _cached_encoder_for_EnumBFPsCallOutputParams = $._encodeSequenceOf<BioAPI_BFP_SCHEMA>(
      () => _encode_BioAPI_BFP_SCHEMA,
      $.BER
    );
  }
  return _cached_encoder_for_EnumBFPsCallOutputParams(value, elGetter);
}


/* eslint-enable */
