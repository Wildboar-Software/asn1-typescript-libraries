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
import {
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NoInvocationId */
/**
 * @summary NoInvocationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoInvocationId InvocationId ::= {noInvocationId}
 * ```
 *
 * @type {InvocationId}
 */
export type NoInvocationId = InvocationId; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION NoInvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoInvocationId */
let _cached_decoder_for_NoInvocationId: $.ASN1Decoder<NoInvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoInvocationId */

/* START_OF_SYMBOL_DEFINITION _decode_NoInvocationId */
export function _decode_NoInvocationId(el: _Element) {
  if (!_cached_decoder_for_NoInvocationId) {
    _cached_decoder_for_NoInvocationId = _decode_InvocationId;
  }
  return _cached_decoder_for_NoInvocationId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoInvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoInvocationId */
let _cached_encoder_for_NoInvocationId: $.ASN1Encoder<NoInvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoInvocationId */

/* START_OF_SYMBOL_DEFINITION _encode_NoInvocationId */
export function _encode_NoInvocationId(
  value: NoInvocationId,
  elGetter: $.ASN1Encoder<NoInvocationId>
) {
  if (!_cached_encoder_for_NoInvocationId) {
    _cached_encoder_for_NoInvocationId = _encode_InvocationId;
  }
  return _cached_encoder_for_NoInvocationId(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_NoInvocationId */

/* eslint-enable */
