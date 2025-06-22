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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary NameCompAlgSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameCompAlgSet OBJECT IDENTIFIER ::= {
 *     id-nva-dnCompAlg
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type NameCompAlgSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

let _cached_decoder_for_NameCompAlgSet: $.ASN1Decoder<NameCompAlgSet> | null = null;

export function _decode_NameCompAlgSet(el: _Element) {
  if (!_cached_decoder_for_NameCompAlgSet) {
    _cached_decoder_for_NameCompAlgSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_NameCompAlgSet(el);
}

let _cached_encoder_for_NameCompAlgSet: $.ASN1Encoder<NameCompAlgSet> | null = null;

export function _encode_NameCompAlgSet(
  value: NameCompAlgSet,
  elGetter: $.ASN1Encoder<NameCompAlgSet>
) {
  if (!_cached_encoder_for_NameCompAlgSet) {
    _cached_encoder_for_NameCompAlgSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_NameCompAlgSet(value, elGetter);
}

/* eslint-enable */
