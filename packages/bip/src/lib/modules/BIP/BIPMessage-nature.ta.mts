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
  BIPRequest,
  _decode_BIPRequest,
  _encode_BIPRequest,
} from '../BIP/BIPRequest.ta.mjs';
import {
  BIPResponse,
  _decode_BIPResponse,
  _encode_BIPResponse,
} from '../BIP/BIPResponse.ta.mjs';
import {
  BIPNotification,
  _decode_BIPNotification,
  _encode_BIPNotification,
} from '../BIP/BIPNotification.ta.mjs';
import {
  BIPAcknowledgement,
  _decode_BIPAcknowledgement,
  _encode_BIPAcknowledgement,
} from '../BIP/BIPAcknowledgement.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BIPMessage_nature */
/**
 * @summary BIPMessage_nature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPMessage-nature ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BIPMessage_nature =
  | { request: BIPRequest } /* CHOICE_ALT_ROOT */
  | { response: BIPResponse } /* CHOICE_ALT_ROOT */
  | { notification: BIPNotification } /* CHOICE_ALT_ROOT */
  | { acknowledgement: BIPAcknowledgement } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BIPMessage_nature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPMessage_nature */
let _cached_decoder_for_BIPMessage_nature: $.ASN1Decoder<BIPMessage_nature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPMessage_nature */

/* START_OF_SYMBOL_DEFINITION _decode_BIPMessage_nature */
/**
 * @summary Decodes an ASN.1 element into a(n) BIPMessage_nature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPMessage_nature} The decoded data structure.
 */
export function _decode_BIPMessage_nature(el: _Element) {
  if (!_cached_decoder_for_BIPMessage_nature) {
    _cached_decoder_for_BIPMessage_nature = $._decode_inextensible_choice<BIPMessage_nature>(
      {
        'CONTEXT 0': ['request', _decode_BIPRequest],
        'CONTEXT 1': ['response', _decode_BIPResponse],
        'CONTEXT 2': ['notification', _decode_BIPNotification],
        'CONTEXT 3': ['acknowledgement', _decode_BIPAcknowledgement],
      }
    );
  }
  return _cached_decoder_for_BIPMessage_nature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BIPMessage_nature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPMessage_nature */
let _cached_encoder_for_BIPMessage_nature: $.ASN1Encoder<BIPMessage_nature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPMessage_nature */

/* START_OF_SYMBOL_DEFINITION _encode_BIPMessage_nature */
/**
 * @summary Encodes a(n) BIPMessage_nature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPMessage_nature, encoded as an ASN.1 Element.
 */
export function _encode_BIPMessage_nature(
  value: BIPMessage_nature,
  elGetter: $.ASN1Encoder<BIPMessage_nature>
) {
  if (!_cached_encoder_for_BIPMessage_nature) {
    _cached_encoder_for_BIPMessage_nature = $._encode_choice<BIPMessage_nature>(
      {
        request: _encode_BIPRequest,
        response: _encode_BIPResponse,
        notification: _encode_BIPNotification,
        acknowledgement: _encode_BIPAcknowledgement,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BIPMessage_nature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BIPMessage_nature */

/* eslint-enable */
