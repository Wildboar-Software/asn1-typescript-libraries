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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  GUISelectEvent_AcknowledgementParams,
  _decode_GUISelectEvent_AcknowledgementParams,
  _encode_GUISelectEvent_AcknowledgementParams,
} from '../BIP/GUISelectEvent-AcknowledgementParams.ta.mjs';
import {
  GUIStateEvent_AcknowledgementParams,
  _decode_GUIStateEvent_AcknowledgementParams,
  _encode_GUIStateEvent_AcknowledgementParams,
} from '../BIP/GUIStateEvent-AcknowledgementParams.ta.mjs';
import {
  GUIProgressEvent_AcknowledgementParams,
  _decode_GUIProgressEvent_AcknowledgementParams,
  _encode_GUIProgressEvent_AcknowledgementParams,
} from '../BIP/GUIProgressEvent-AcknowledgementParams.ta.mjs';

/**
 * @summary BIPAcknowledgement_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPAcknowledgement-params ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BIPAcknowledgement_params =
  | {
      guiSelectEvent: GUISelectEvent_AcknowledgementParams;
    } /* CHOICE_ALT_ROOT */
  | { guiStateEvent: GUIStateEvent_AcknowledgementParams } /* CHOICE_ALT_ROOT */
  | {
      guiProgressEvent: GUIProgressEvent_AcknowledgementParams;
    } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_BIPAcknowledgement_params: $.ASN1Decoder<BIPAcknowledgement_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPAcknowledgement_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPAcknowledgement_params} The decoded data structure.
 */
export function _decode_BIPAcknowledgement_params(el: _Element): BIPAcknowledgement_params {
  if (!_cached_decoder_for_BIPAcknowledgement_params) {
    _cached_decoder_for_BIPAcknowledgement_params = $._decode_extensible_choice<BIPAcknowledgement_params>(
      {
        'CONTEXT 0': [
          'guiSelectEvent',
          _decode_GUISelectEvent_AcknowledgementParams,
        ],
        'CONTEXT 1': [
          'guiStateEvent',
          _decode_GUIStateEvent_AcknowledgementParams,
        ],
        'CONTEXT 2': [
          'guiProgressEvent',
          _decode_GUIProgressEvent_AcknowledgementParams,
        ],
      }
    );
  }
  return _cached_decoder_for_BIPAcknowledgement_params(el);
}


let _cached_encoder_for_BIPAcknowledgement_params: $.ASN1Encoder<BIPAcknowledgement_params> | null = null;


/**
 * @summary Encodes a(n) BIPAcknowledgement_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPAcknowledgement_params, encoded as an ASN.1 Element.
 */
export function _encode_BIPAcknowledgement_params(
  value: BIPAcknowledgement_params,
  elGetter: $.ASN1Encoder<BIPAcknowledgement_params>
): _Element {
  if (!_cached_encoder_for_BIPAcknowledgement_params) {
    _cached_encoder_for_BIPAcknowledgement_params = $._encode_choice<BIPAcknowledgement_params>(
      {
        guiSelectEvent: _encode_GUISelectEvent_AcknowledgementParams,
        guiStateEvent: _encode_GUIStateEvent_AcknowledgementParams,
        guiProgressEvent: _encode_GUIProgressEvent_AcknowledgementParams,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BIPAcknowledgement_params(value, elGetter);
}


/* eslint-enable */
