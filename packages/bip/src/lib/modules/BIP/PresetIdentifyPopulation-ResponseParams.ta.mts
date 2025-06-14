/* eslint-disable */
import {
  NULL,
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

/* START_OF_SYMBOL_DEFINITION PresetIdentifyPopulation_ResponseParams */
/**
 * @summary PresetIdentifyPopulation_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PresetIdentifyPopulation-ResponseParams  ::=  NULL
 * ```
 */
export type PresetIdentifyPopulation_ResponseParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION PresetIdentifyPopulation_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PresetIdentifyPopulation_ResponseParams */
let _cached_decoder_for_PresetIdentifyPopulation_ResponseParams: $.ASN1Decoder<PresetIdentifyPopulation_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PresetIdentifyPopulation_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_PresetIdentifyPopulation_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) PresetIdentifyPopulation_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PresetIdentifyPopulation_ResponseParams} The decoded data structure.
 */
export function _decode_PresetIdentifyPopulation_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_PresetIdentifyPopulation_ResponseParams) {
    _cached_decoder_for_PresetIdentifyPopulation_ResponseParams = $._decodeNull;
  }
  return _cached_decoder_for_PresetIdentifyPopulation_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PresetIdentifyPopulation_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PresetIdentifyPopulation_ResponseParams */
let _cached_encoder_for_PresetIdentifyPopulation_ResponseParams: $.ASN1Encoder<PresetIdentifyPopulation_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PresetIdentifyPopulation_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_PresetIdentifyPopulation_ResponseParams */
/**
 * @summary Encodes a(n) PresetIdentifyPopulation_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresetIdentifyPopulation_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_PresetIdentifyPopulation_ResponseParams(
  value: PresetIdentifyPopulation_ResponseParams,
  elGetter: $.ASN1Encoder<PresetIdentifyPopulation_ResponseParams>
) {
  if (!_cached_encoder_for_PresetIdentifyPopulation_ResponseParams) {
    _cached_encoder_for_PresetIdentifyPopulation_ResponseParams = $._encodeNull;
  }
  return _cached_encoder_for_PresetIdentifyPopulation_ResponseParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_PresetIdentifyPopulation_ResponseParams */

/* eslint-enable */
