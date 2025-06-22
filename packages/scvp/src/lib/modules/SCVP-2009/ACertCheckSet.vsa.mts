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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ACertCheckSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACertCheckSet OBJECT IDENTIFIER ::= {
 *     id-stc-build-aa-path | id-stc-build-valid-aa-path |
 *     id-stc-build-status-checked-aa-path |
 *     id-stc-status-check-ac-and-build-status-checked-aa-path
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type ACertCheckSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

let _cached_decoder_for_ACertCheckSet: $.ASN1Decoder<ACertCheckSet> | null = null;

export function _decode_ACertCheckSet(el: _Element) {
  if (!_cached_decoder_for_ACertCheckSet) {
    _cached_decoder_for_ACertCheckSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_ACertCheckSet(el);
}

let _cached_encoder_for_ACertCheckSet: $.ASN1Encoder<ACertCheckSet> | null = null;

export function _encode_ACertCheckSet(
  value: ACertCheckSet,
  elGetter: $.ASN1Encoder<ACertCheckSet>
) {
  if (!_cached_encoder_for_ACertCheckSet) {
    _cached_encoder_for_ACertCheckSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_ACertCheckSet(value, elGetter);
}

/* eslint-enable */
