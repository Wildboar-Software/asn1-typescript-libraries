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
  MasterDeletionEvent_NotificationParams,
  _decode_MasterDeletionEvent_NotificationParams,
  _encode_MasterDeletionEvent_NotificationParams,
} from '../BIP/MasterDeletionEvent-NotificationParams.ta.mjs';
import {
  UnitEvent_NotificationParams,
  _decode_UnitEvent_NotificationParams,
  _encode_UnitEvent_NotificationParams,
} from '../BIP/UnitEvent-NotificationParams.ta.mjs';
import {
  GUISelectEvent_NotificationParams,
  _decode_GUISelectEvent_NotificationParams,
  _encode_GUISelectEvent_NotificationParams,
} from '../BIP/GUISelectEvent-NotificationParams.ta.mjs';
import {
  GUIStateEvent_NotificationParams,
  _decode_GUIStateEvent_NotificationParams,
  _encode_GUIStateEvent_NotificationParams,
} from '../BIP/GUIStateEvent-NotificationParams.ta.mjs';
import {
  GUIProgressEvent_NotificationParams,
  _decode_GUIProgressEvent_NotificationParams,
  _encode_GUIProgressEvent_NotificationParams,
} from '../BIP/GUIProgressEvent-NotificationParams.ta.mjs';
import {
  BSPRegistrationEvent_NotificationParams,
  _decode_BSPRegistrationEvent_NotificationParams,
  _encode_BSPRegistrationEvent_NotificationParams,
} from '../BIP/BSPRegistrationEvent-NotificationParams.ta.mjs';
import {
  BSPUnregistrationEvent_NotificationParams,
  _decode_BSPUnregistrationEvent_NotificationParams,
  _encode_BSPUnregistrationEvent_NotificationParams,
} from '../BIP/BSPUnregistrationEvent-NotificationParams.ta.mjs';
import {
  BFPRegistrationEvent_NotificationParams,
  _decode_BFPRegistrationEvent_NotificationParams,
  _encode_BFPRegistrationEvent_NotificationParams,
} from '../BIP/BFPRegistrationEvent-NotificationParams.ta.mjs';
import {
  BFPUnregistrationEvent_NotificationParams,
  _decode_BFPUnregistrationEvent_NotificationParams,
  _encode_BFPUnregistrationEvent_NotificationParams,
} from '../BIP/BFPUnregistrationEvent-NotificationParams.ta.mjs';

/**
 * @summary BIPNotification_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPNotification-params ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BIPNotification_params =
  | {
      masterDeletionEvent: MasterDeletionEvent_NotificationParams;
    } /* CHOICE_ALT_ROOT */
  | { unitEvent: UnitEvent_NotificationParams } /* CHOICE_ALT_ROOT */
  | { guiSelectEvent: GUISelectEvent_NotificationParams } /* CHOICE_ALT_ROOT */
  | { guiStateEvent: GUIStateEvent_NotificationParams } /* CHOICE_ALT_ROOT */
  | {
      guiProgressEvent: GUIProgressEvent_NotificationParams;
    } /* CHOICE_ALT_ROOT */
  | {
      bspRegistrationEvent: BSPRegistrationEvent_NotificationParams;
    } /* CHOICE_ALT_ROOT */
  | {
      bspUnregistrationEvent: BSPUnregistrationEvent_NotificationParams;
    } /* CHOICE_ALT_ROOT */
  | {
      bfpRegistrationEvent: BFPRegistrationEvent_NotificationParams;
    } /* CHOICE_ALT_ROOT */
  | {
      bfpUnregistrationEvent: BFPUnregistrationEvent_NotificationParams;
    } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_BIPNotification_params: $.ASN1Decoder<BIPNotification_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPNotification_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPNotification_params} The decoded data structure.
 */
export function _decode_BIPNotification_params(el: _Element): BIPNotification_params {
  if (!_cached_decoder_for_BIPNotification_params) {
    _cached_decoder_for_BIPNotification_params = $._decode_extensible_choice<BIPNotification_params>(
      {
        'CONTEXT 0': [
          'masterDeletionEvent',
          _decode_MasterDeletionEvent_NotificationParams,
        ],
        'CONTEXT 1': ['unitEvent', _decode_UnitEvent_NotificationParams],
        'CONTEXT 2': [
          'guiSelectEvent',
          _decode_GUISelectEvent_NotificationParams,
        ],
        'CONTEXT 3': [
          'guiStateEvent',
          _decode_GUIStateEvent_NotificationParams,
        ],
        'CONTEXT 4': [
          'guiProgressEvent',
          _decode_GUIProgressEvent_NotificationParams,
        ],
        'CONTEXT 5': [
          'bspRegistrationEvent',
          _decode_BSPRegistrationEvent_NotificationParams,
        ],
        'CONTEXT 6': [
          'bspUnregistrationEvent',
          _decode_BSPUnregistrationEvent_NotificationParams,
        ],
        'CONTEXT 7': [
          'bfpRegistrationEvent',
          _decode_BFPRegistrationEvent_NotificationParams,
        ],
        'CONTEXT 8': [
          'bfpUnregistrationEvent',
          _decode_BFPUnregistrationEvent_NotificationParams,
        ],
      }
    );
  }
  return _cached_decoder_for_BIPNotification_params(el);
}


let _cached_encoder_for_BIPNotification_params: $.ASN1Encoder<BIPNotification_params> | null = null;


/**
 * @summary Encodes a(n) BIPNotification_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPNotification_params, encoded as an ASN.1 Element.
 */
export function _encode_BIPNotification_params(
  value: BIPNotification_params,
  elGetter: $.ASN1Encoder<BIPNotification_params>
): _Element {
  if (!_cached_encoder_for_BIPNotification_params) {
    _cached_encoder_for_BIPNotification_params = $._encode_choice<BIPNotification_params>(
      {
        masterDeletionEvent: _encode_MasterDeletionEvent_NotificationParams,
        unitEvent: _encode_UnitEvent_NotificationParams,
        guiSelectEvent: _encode_GUISelectEvent_NotificationParams,
        guiStateEvent: _encode_GUIStateEvent_NotificationParams,
        guiProgressEvent: _encode_GUIProgressEvent_NotificationParams,
        bspRegistrationEvent: _encode_BSPRegistrationEvent_NotificationParams,
        bspUnregistrationEvent: _encode_BSPUnregistrationEvent_NotificationParams,
        bfpRegistrationEvent: _encode_BFPRegistrationEvent_NotificationParams,
        bfpUnregistrationEvent: _encode_BFPUnregistrationEvent_NotificationParams,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BIPNotification_params(value, elGetter);
}


/* eslint-enable */
