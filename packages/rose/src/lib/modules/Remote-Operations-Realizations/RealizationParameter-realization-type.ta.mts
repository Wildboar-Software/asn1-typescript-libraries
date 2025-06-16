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


/**
 * @summary RealizationParameter_realization_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter-realization-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_RealizationParameter_realization_type {
  association_service = 0,
  transfer_service = 1,
}


/**
 * @summary RealizationParameter_realization_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter-realization-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type RealizationParameter_realization_type = _enum_for_RealizationParameter_realization_type;


/**
 * @summary RealizationParameter_realization_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter-realization-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const RealizationParameter_realization_type = _enum_for_RealizationParameter_realization_type;


/**
 * @summary RealizationParameter_realization_type_association_service
 * @constant
 * @type {number}
 */
export const RealizationParameter_realization_type_association_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.association_service; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary association_service
 * @constant
 * @type {number}
 */
export const association_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.association_service; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RealizationParameter_realization_type_transfer_service
 * @constant
 * @type {number}
 */
export const RealizationParameter_realization_type_transfer_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.transfer_service; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary transfer_service
 * @constant
 * @type {number}
 */
export const transfer_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.transfer_service; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_RealizationParameter_realization_type: $.ASN1Decoder<RealizationParameter_realization_type> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RealizationParameter_realization_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RealizationParameter_realization_type} The decoded data structure.
 */
export function _decode_RealizationParameter_realization_type(el: _Element) {
  if (!_cached_decoder_for_RealizationParameter_realization_type) {
    _cached_decoder_for_RealizationParameter_realization_type =
      $._decodeEnumerated;
  }
  return _cached_decoder_for_RealizationParameter_realization_type(el);
}


let _cached_encoder_for_RealizationParameter_realization_type: $.ASN1Encoder<RealizationParameter_realization_type> | null = null;


/**
 * @summary Encodes a(n) RealizationParameter_realization_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RealizationParameter_realization_type, encoded as an ASN.1 Element.
 */
export function _encode_RealizationParameter_realization_type(
  value: RealizationParameter_realization_type,
  elGetter: $.ASN1Encoder<RealizationParameter_realization_type>
) {
  if (!_cached_encoder_for_RealizationParameter_realization_type) {
    _cached_encoder_for_RealizationParameter_realization_type =
      $._encodeEnumerated;
  }
  return _cached_encoder_for_RealizationParameter_realization_type(
    value,
    elGetter
  );
}


/* eslint-enable */
