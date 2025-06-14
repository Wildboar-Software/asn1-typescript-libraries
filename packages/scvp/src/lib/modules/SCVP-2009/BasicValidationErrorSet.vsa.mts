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

/* START_OF_SYMBOL_DEFINITION BasicValidationErrorSet */
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
/* END_OF_SYMBOL_DEFINITION BasicValidationErrorSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BasicValidationErrorSet */
let _cached_decoder_for_BasicValidationErrorSet: $.ASN1Decoder<BasicValidationErrorSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BasicValidationErrorSet */

/* START_OF_SYMBOL_DEFINITION _decode_BasicValidationErrorSet */
export function _decode_BasicValidationErrorSet(el: _Element) {
  if (!_cached_decoder_for_BasicValidationErrorSet) {
    _cached_decoder_for_BasicValidationErrorSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_BasicValidationErrorSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BasicValidationErrorSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BasicValidationErrorSet */
let _cached_encoder_for_BasicValidationErrorSet: $.ASN1Encoder<BasicValidationErrorSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BasicValidationErrorSet */

/* START_OF_SYMBOL_DEFINITION _encode_BasicValidationErrorSet */
export function _encode_BasicValidationErrorSet(
  value: BasicValidationErrorSet,
  elGetter: $.ASN1Encoder<BasicValidationErrorSet>
) {
  if (!_cached_encoder_for_BasicValidationErrorSet) {
    _cached_encoder_for_BasicValidationErrorSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_BasicValidationErrorSet(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_BasicValidationErrorSet */

/* eslint-enable */
