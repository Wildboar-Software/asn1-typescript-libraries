/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_BioAPI_BIR_DATA_TYPE_processedLevel {
  raw = 0,
  intermediate = 1,
  processed = 2,
}


/**
 * @summary BioAPI_BIR_DATA_TYPE_processedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-DATA-TYPE-processedLevel ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type BioAPI_BIR_DATA_TYPE_processedLevel =
  | _enum_for_BioAPI_BIR_DATA_TYPE_processedLevel
  | ENUMERATED;


/**
 * @summary BioAPI_BIR_DATA_TYPE_processedLevel_raw
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_DATA_TYPE_processedLevel_raw: BioAPI_BIR_DATA_TYPE_processedLevel = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary raw
 * @constant
 * @type {number}
 */
export const raw: BioAPI_BIR_DATA_TYPE_processedLevel = BioAPI_BIR_DATA_TYPE_processedLevel_raw; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_DATA_TYPE_processedLevel_intermediate
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_DATA_TYPE_processedLevel_intermediate: BioAPI_BIR_DATA_TYPE_processedLevel = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary intermediate
 * @constant
 * @type {number}
 */
export const intermediate: BioAPI_BIR_DATA_TYPE_processedLevel = BioAPI_BIR_DATA_TYPE_processedLevel_intermediate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_DATA_TYPE_processedLevel_processed
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_DATA_TYPE_processedLevel_processed: BioAPI_BIR_DATA_TYPE_processedLevel = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary processed
 * @constant
 * @type {number}
 */
export const processed: BioAPI_BIR_DATA_TYPE_processedLevel = BioAPI_BIR_DATA_TYPE_processedLevel_processed; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_BioAPI_BIR_DATA_TYPE_processedLevel: $.ASN1Decoder<BioAPI_BIR_DATA_TYPE_processedLevel> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_DATA_TYPE_processedLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_DATA_TYPE_processedLevel} The decoded data structure.
 */
export function _decode_BioAPI_BIR_DATA_TYPE_processedLevel(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_DATA_TYPE_processedLevel) {
    _cached_decoder_for_BioAPI_BIR_DATA_TYPE_processedLevel =
      $._decodeEnumerated;
  }
  return _cached_decoder_for_BioAPI_BIR_DATA_TYPE_processedLevel(el);
}


let _cached_encoder_for_BioAPI_BIR_DATA_TYPE_processedLevel: $.ASN1Encoder<BioAPI_BIR_DATA_TYPE_processedLevel> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BIR_DATA_TYPE_processedLevel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_DATA_TYPE_processedLevel, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_DATA_TYPE_processedLevel(
  value: BioAPI_BIR_DATA_TYPE_processedLevel,
  elGetter: $.ASN1Encoder<BioAPI_BIR_DATA_TYPE_processedLevel>
) {
  if (!_cached_encoder_for_BioAPI_BIR_DATA_TYPE_processedLevel) {
    _cached_encoder_for_BioAPI_BIR_DATA_TYPE_processedLevel =
      $._encodeEnumerated;
  }
  return _cached_encoder_for_BioAPI_BIR_DATA_TYPE_processedLevel(
    value,
    elGetter
  );
}


/* eslint-enable */
