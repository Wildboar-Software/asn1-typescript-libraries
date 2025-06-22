/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side {
  sender = 0,
  receiver = 1,
}


/**
 * @summary ATOMIC_ACTION_IDENTIFIER_owners_name_side
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATOMIC-ACTION-IDENTIFIER-owners-name-side ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type ATOMIC_ACTION_IDENTIFIER_owners_name_side =
  | _enum_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side
  | ENUMERATED;


/**
 * @summary ATOMIC_ACTION_IDENTIFIER_owners_name_side_sender
 * @constant
 * @type {number}
 */
export const ATOMIC_ACTION_IDENTIFIER_owners_name_side_sender: ATOMIC_ACTION_IDENTIFIER_owners_name_side = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sender
 * @constant
 * @type {number}
 */
export const sender: ATOMIC_ACTION_IDENTIFIER_owners_name_side = ATOMIC_ACTION_IDENTIFIER_owners_name_side_sender; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ATOMIC_ACTION_IDENTIFIER_owners_name_side_receiver
 * @constant
 * @type {number}
 */
export const ATOMIC_ACTION_IDENTIFIER_owners_name_side_receiver: ATOMIC_ACTION_IDENTIFIER_owners_name_side = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary receiver
 * @constant
 * @type {number}
 */
export const receiver: ATOMIC_ACTION_IDENTIFIER_owners_name_side = ATOMIC_ACTION_IDENTIFIER_owners_name_side_receiver; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side: $.ASN1Decoder<ATOMIC_ACTION_IDENTIFIER_owners_name_side> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ATOMIC_ACTION_IDENTIFIER_owners_name_side
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ATOMIC_ACTION_IDENTIFIER_owners_name_side} The decoded data structure.
 */
export function _decode_ATOMIC_ACTION_IDENTIFIER_owners_name_side(
  el: _Element
) {
  if (!_cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side) {
    _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side =
      $._decodeEnumerated;
  }
  return _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side(el);
}


let _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER_owners_name_side> | null = null;


/**
 * @summary Encodes a(n) ATOMIC_ACTION_IDENTIFIER_owners_name_side into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATOMIC_ACTION_IDENTIFIER_owners_name_side, encoded as an ASN.1 Element.
 */
export function _encode_ATOMIC_ACTION_IDENTIFIER_owners_name_side(
  value: ATOMIC_ACTION_IDENTIFIER_owners_name_side,
  elGetter: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER_owners_name_side>
) {
  if (!_cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side) {
    _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side =
      $._encodeEnumerated;
  }
  return _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side(
    value,
    elGetter
  );
}


/* eslint-enable */
