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
 * @summary BasicValidationErrorSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicValidationErrorSet OBJECT IDENTIFIER ::= {
 *     id-bvae-expired | id-bvae-not-yet-valid |
 *     id-bvae-wrongTrustAnchor | id-bvae-noValidCertPath |
 *     id-bvae-revoked | id-bvae-invalidKeyPurpose |
 *     id-bvae-invalidKeyUsage | id-bvae-invalidCertPolicy
 *
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type BasicValidationErrorSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

let _cached_decoder_for_BasicValidationErrorSet: $.ASN1Decoder<BasicValidationErrorSet> | null = null;

export function _decode_BasicValidationErrorSet(el: _Element) {
  if (!_cached_decoder_for_BasicValidationErrorSet) {
    _cached_decoder_for_BasicValidationErrorSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_BasicValidationErrorSet(el);
}

let _cached_encoder_for_BasicValidationErrorSet: $.ASN1Encoder<BasicValidationErrorSet> | null = null;

export function _encode_BasicValidationErrorSet(
  value: BasicValidationErrorSet,
  elGetter: $.ASN1Encoder<BasicValidationErrorSet>
) {
  if (!_cached_encoder_for_BasicValidationErrorSet) {
    _cached_encoder_for_BasicValidationErrorSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_BasicValidationErrorSet(value, elGetter);
}

/* eslint-enable */
