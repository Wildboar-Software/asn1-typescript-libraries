/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  MasterDeletionEvent_NotificationParams,
  _decode_MasterDeletionEvent_NotificationParams,
  _encode_MasterDeletionEvent_NotificationParams,
} from '../BIP/MasterDeletionEvent-NotificationParams.ta';
export {
  MasterDeletionEvent_NotificationParams,
  _decode_MasterDeletionEvent_NotificationParams,
  _encode_MasterDeletionEvent_NotificationParams,
} from '../BIP/MasterDeletionEvent-NotificationParams.ta';
import {
  UnitEvent_NotificationParams,
  _decode_UnitEvent_NotificationParams,
  _encode_UnitEvent_NotificationParams,
} from '../BIP/UnitEvent-NotificationParams.ta';
export {
  UnitEvent_NotificationParams,
  _decode_UnitEvent_NotificationParams,
  _encode_UnitEvent_NotificationParams,
} from '../BIP/UnitEvent-NotificationParams.ta';
import {
  GUISelectEvent_NotificationParams,
  _decode_GUISelectEvent_NotificationParams,
  _encode_GUISelectEvent_NotificationParams,
} from '../BIP/GUISelectEvent-NotificationParams.ta';
export {
  GUISelectEvent_NotificationParams,
  _decode_GUISelectEvent_NotificationParams,
  _encode_GUISelectEvent_NotificationParams,
} from '../BIP/GUISelectEvent-NotificationParams.ta';
import {
  GUIStateEvent_NotificationParams,
  _decode_GUIStateEvent_NotificationParams,
  _encode_GUIStateEvent_NotificationParams,
} from '../BIP/GUIStateEvent-NotificationParams.ta';
export {
  GUIStateEvent_NotificationParams,
  _decode_GUIStateEvent_NotificationParams,
  _encode_GUIStateEvent_NotificationParams,
} from '../BIP/GUIStateEvent-NotificationParams.ta';
import {
  GUIProgressEvent_NotificationParams,
  _decode_GUIProgressEvent_NotificationParams,
  _encode_GUIProgressEvent_NotificationParams,
} from '../BIP/GUIProgressEvent-NotificationParams.ta';
export {
  GUIProgressEvent_NotificationParams,
  _decode_GUIProgressEvent_NotificationParams,
  _encode_GUIProgressEvent_NotificationParams,
} from '../BIP/GUIProgressEvent-NotificationParams.ta';
import {
  BSPRegistrationEvent_NotificationParams,
  _decode_BSPRegistrationEvent_NotificationParams,
  _encode_BSPRegistrationEvent_NotificationParams,
} from '../BIP/BSPRegistrationEvent-NotificationParams.ta';
export {
  BSPRegistrationEvent_NotificationParams,
  _decode_BSPRegistrationEvent_NotificationParams,
  _encode_BSPRegistrationEvent_NotificationParams,
} from '../BIP/BSPRegistrationEvent-NotificationParams.ta';
import {
  BSPUnregistrationEvent_NotificationParams,
  _decode_BSPUnregistrationEvent_NotificationParams,
  _encode_BSPUnregistrationEvent_NotificationParams,
} from '../BIP/BSPUnregistrationEvent-NotificationParams.ta';
export {
  BSPUnregistrationEvent_NotificationParams,
  _decode_BSPUnregistrationEvent_NotificationParams,
  _encode_BSPUnregistrationEvent_NotificationParams,
} from '../BIP/BSPUnregistrationEvent-NotificationParams.ta';
import {
  BFPRegistrationEvent_NotificationParams,
  _decode_BFPRegistrationEvent_NotificationParams,
  _encode_BFPRegistrationEvent_NotificationParams,
} from '../BIP/BFPRegistrationEvent-NotificationParams.ta';
export {
  BFPRegistrationEvent_NotificationParams,
  _decode_BFPRegistrationEvent_NotificationParams,
  _encode_BFPRegistrationEvent_NotificationParams,
} from '../BIP/BFPRegistrationEvent-NotificationParams.ta';
import {
  BFPUnregistrationEvent_NotificationParams,
  _decode_BFPUnregistrationEvent_NotificationParams,
  _encode_BFPUnregistrationEvent_NotificationParams,
} from '../BIP/BFPUnregistrationEvent-NotificationParams.ta';
export {
  BFPUnregistrationEvent_NotificationParams,
  _decode_BFPUnregistrationEvent_NotificationParams,
  _encode_BFPUnregistrationEvent_NotificationParams,
} from '../BIP/BFPUnregistrationEvent-NotificationParams.ta';

/* START_OF_SYMBOL_DEFINITION BIPNotification_params */
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
/* END_OF_SYMBOL_DEFINITION BIPNotification_params */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPNotification_params */
let _cached_decoder_for_BIPNotification_params: $.ASN1Decoder<BIPNotification_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPNotification_params */

/* START_OF_SYMBOL_DEFINITION _decode_BIPNotification_params */
/**
 * @summary Decodes an ASN.1 element into a(n) BIPNotification_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPNotification_params} The decoded data structure.
 */
export function _decode_BIPNotification_params(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_BIPNotification_params */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPNotification_params */
let _cached_encoder_for_BIPNotification_params: $.ASN1Encoder<BIPNotification_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPNotification_params */

/* START_OF_SYMBOL_DEFINITION _encode_BIPNotification_params */
/**
 * @summary Encodes a(n) BIPNotification_params into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPNotification_params, encoded as an ASN.1 Element.
 */
export function _encode_BIPNotification_params(
  value: BIPNotification_params,
  elGetter: $.ASN1Encoder<BIPNotification_params>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_BIPNotification_params */

/* eslint-enable */
