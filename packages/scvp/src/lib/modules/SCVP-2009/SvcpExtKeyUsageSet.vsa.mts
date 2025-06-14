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

/* START_OF_SYMBOL_DEFINITION SvcpExtKeyUsageSet */
/**
 * @summary SvcpExtKeyUsageSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SvcpExtKeyUsageSet OBJECT IDENTIFIER ::= {
 *
 *     id-kp-scvpServer | id-kp-scvpClient
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type SvcpExtKeyUsageSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION SvcpExtKeyUsageSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SvcpExtKeyUsageSet */
let _cached_decoder_for_SvcpExtKeyUsageSet: $.ASN1Decoder<SvcpExtKeyUsageSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SvcpExtKeyUsageSet */

/* START_OF_SYMBOL_DEFINITION _decode_SvcpExtKeyUsageSet */
export function _decode_SvcpExtKeyUsageSet(el: _Element) {
  if (!_cached_decoder_for_SvcpExtKeyUsageSet) {
    _cached_decoder_for_SvcpExtKeyUsageSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_SvcpExtKeyUsageSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SvcpExtKeyUsageSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SvcpExtKeyUsageSet */
let _cached_encoder_for_SvcpExtKeyUsageSet: $.ASN1Encoder<SvcpExtKeyUsageSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SvcpExtKeyUsageSet */

/* START_OF_SYMBOL_DEFINITION _encode_SvcpExtKeyUsageSet */
export function _encode_SvcpExtKeyUsageSet(
  value: SvcpExtKeyUsageSet,
  elGetter: $.ASN1Encoder<SvcpExtKeyUsageSet>
) {
  if (!_cached_encoder_for_SvcpExtKeyUsageSet) {
    _cached_encoder_for_SvcpExtKeyUsageSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_SvcpExtKeyUsageSet(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_SvcpExtKeyUsageSet */

/* eslint-enable */
