/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype */
/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-SUBTYPE-vein-only-subtype ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_BIR_SUBTYPE_vein_only_subtype = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_left */
/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_left
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_vein_only_subtype_left: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 */
export const left: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_left; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_right */
/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_right
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_vein_only_subtype_right: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 */
export const right: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_right; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm */
/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm */

/* START_OF_SYMBOL_DEFINITION veinPalm */
/**
 * @summary veinPalm
 * @constant
 */
export const veinPalm: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION veinPalm */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand */
/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand */

/* START_OF_SYMBOL_DEFINITION veinBackofhand */
/**
 * @summary veinBackofhand
 * @constant
 */
export const veinBackofhand: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION veinBackofhand */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist */
/**
 * @summary BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist */

/* START_OF_SYMBOL_DEFINITION veinWrist */
/**
 * @summary veinWrist
 * @constant
 */
export const veinWrist: number = BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION veinWrist */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype */
let _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype: $.ASN1Decoder<BioAPI_BIR_SUBTYPE_vein_only_subtype> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_SUBTYPE_vein_only_subtype
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_SUBTYPE_vein_only_subtype} The decoded data structure.
 */
export function _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype) {
    _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype =
      $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype */
let _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_vein_only_subtype> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype */
/**
 * @summary Encodes a(n) BioAPI_BIR_SUBTYPE_vein_only_subtype into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_SUBTYPE_vein_only_subtype, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype(
  value: BioAPI_BIR_SUBTYPE_vein_only_subtype,
  elGetter: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_vein_only_subtype>
) {
  if (!_cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype) {
    _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype =
      $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_BIR_SUBTYPE_vein_only_subtype(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype */

/* eslint-enable */
