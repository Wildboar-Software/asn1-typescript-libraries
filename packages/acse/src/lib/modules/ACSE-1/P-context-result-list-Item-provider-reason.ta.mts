/* eslint-disable */
import {
  INTEGER,
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
 * @summary P_context_result_list_Item_provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * P-context-result-list-Item-provider-reason ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type P_context_result_list_Item_provider_reason = INTEGER;

/**
 * @summary P_context_result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const P_context_result_list_Item_provider_reason_reason_not_specified: P_context_result_list_Item_provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: P_context_result_list_Item_provider_reason = P_context_result_list_Item_provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const P_context_result_list_Item_provider_reason_abstract_syntax_not_supported: P_context_result_list_Item_provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const abstract_syntax_not_supported: P_context_result_list_Item_provider_reason = P_context_result_list_Item_provider_reason_abstract_syntax_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const P_context_result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: P_context_result_list_Item_provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const proposed_transfer_syntaxes_not_supported: P_context_result_list_Item_provider_reason = P_context_result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_local_limit_on_DCS_exceeded
 * @constant
 * @type {number}
 */
export const P_context_result_list_Item_provider_reason_local_limit_on_DCS_exceeded: P_context_result_list_Item_provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_context_result_list_Item_provider_reason_local_limit_on_DCS_exceeded
 * @constant
 * @type {number}
 */
export const local_limit_on_DCS_exceeded: P_context_result_list_Item_provider_reason = P_context_result_list_Item_provider_reason_local_limit_on_DCS_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_P_context_result_list_Item_provider_reason: $.ASN1Decoder<P_context_result_list_Item_provider_reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) P_context_result_list_Item_provider_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {P_context_result_list_Item_provider_reason} The decoded data structure.
 */
export function _decode_P_context_result_list_Item_provider_reason(
  el: _Element
) {
  if (!_cached_decoder_for_P_context_result_list_Item_provider_reason) {
    _cached_decoder_for_P_context_result_list_Item_provider_reason =
      $._decodeInteger;
  }
  return _cached_decoder_for_P_context_result_list_Item_provider_reason(el);
}

let _cached_encoder_for_P_context_result_list_Item_provider_reason: $.ASN1Encoder<P_context_result_list_Item_provider_reason> | null = null;

/**
 * @summary Encodes a(n) P_context_result_list_Item_provider_reason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The P_context_result_list_Item_provider_reason, encoded as an ASN.1 Element.
 */
export function _encode_P_context_result_list_Item_provider_reason(
  value: P_context_result_list_Item_provider_reason,
  elGetter: $.ASN1Encoder<P_context_result_list_Item_provider_reason>
) {
  if (!_cached_encoder_for_P_context_result_list_Item_provider_reason) {
    _cached_encoder_for_P_context_result_list_Item_provider_reason =
      $._encodeInteger;
  }
  return _cached_encoder_for_P_context_result_list_Item_provider_reason(
    value,
    elGetter
  );
}


/* eslint-enable */
