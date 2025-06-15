/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
 * @summary NameValidationErrorSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameValidationErrorSet OBJECT IDENTIFIER ::= {
 *     id-nvae-name-mismatch | id-nvae-no-name | id-nvae-unknown-alg |
 *     id-nvae-bad-name | id-nvae-bad-name-type | id-nvae-mixed-names
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type NameValidationErrorSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

let _cached_decoder_for_NameValidationErrorSet: $.ASN1Decoder<NameValidationErrorSet> | null = null;

export function _decode_NameValidationErrorSet(el: _Element) {
  if (!_cached_decoder_for_NameValidationErrorSet) {
    _cached_decoder_for_NameValidationErrorSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_NameValidationErrorSet(el);
}

let _cached_encoder_for_NameValidationErrorSet: $.ASN1Encoder<NameValidationErrorSet> | null = null;

export function _encode_NameValidationErrorSet(
  value: NameValidationErrorSet,
  elGetter: $.ASN1Encoder<NameValidationErrorSet>
) {
  if (!_cached_encoder_for_NameValidationErrorSet) {
    _cached_encoder_for_NameValidationErrorSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_NameValidationErrorSet(value, elGetter);
}

/* eslint-enable */
