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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  GUISelectEvent_AcknowledgementParams,
  _decode_GUISelectEvent_AcknowledgementParams,
  _encode_GUISelectEvent_AcknowledgementParams,
} from '../BIP/GUISelectEvent-AcknowledgementParams.ta.mjs';
export {
  GUISelectEvent_AcknowledgementParams,
  _decode_GUISelectEvent_AcknowledgementParams,
  _encode_GUISelectEvent_AcknowledgementParams,
} from '../BIP/GUISelectEvent-AcknowledgementParams.ta.mjs';
import {
  GUIStateEvent_AcknowledgementParams,
  _decode_GUIStateEvent_AcknowledgementParams,
  _encode_GUIStateEvent_AcknowledgementParams,
} from '../BIP/GUIStateEvent-AcknowledgementParams.ta.mjs';
export {
  GUIStateEvent_AcknowledgementParams,
  _decode_GUIStateEvent_AcknowledgementParams,
  _encode_GUIStateEvent_AcknowledgementParams,
} from '../BIP/GUIStateEvent-AcknowledgementParams.ta.mjs';
import {
  GUIProgressEvent_AcknowledgementParams,
  _decode_GUIProgressEvent_AcknowledgementParams,
  _encode_GUIProgressEvent_AcknowledgementParams,
} from '../BIP/GUIProgressEvent-AcknowledgementParams.ta.mjs';
export {
  GUIProgressEvent_AcknowledgementParams,
  _decode_GUIProgressEvent_AcknowledgementParams,
  _encode_GUIProgressEvent_AcknowledgementParams,
} from '../BIP/GUIProgressEvent-AcknowledgementParams.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BIPAcknowledgement_params */
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
/* END_OF_SYMBOL_DEFINITION BIPAcknowledgement_params */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPAcknowledgement_params */
let _cached_decoder_for_BIPAcknowledgement_params: $.ASN1Decoder<BIPAcknowledgement_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPAcknowledgement_params */

/* START_OF_SYMBOL_DEFINITION _decode_BIPAcknowledgement_params */
/**
 * @summary Decodes an ASN.1 element into a(n) BIPAcknowledgement_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPAcknowledgement_params} The decoded data structure.
 */
export function _decode_BIPAcknowledgement_params(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_BIPAcknowledgement_params */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPAcknowledgement_params */
let _cached_encoder_for_BIPAcknowledgement_params: $.ASN1Encoder<BIPAcknowledgement_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPAcknowledgement_params */

/* START_OF_SYMBOL_DEFINITION _encode_BIPAcknowledgement_params */
/**
 * @summary Encodes a(n) BIPAcknowledgement_params into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPAcknowledgement_params, encoded as an ASN.1 Element.
 */
export function _encode_BIPAcknowledgement_params(
  value: BIPAcknowledgement_params,
  elGetter: $.ASN1Encoder<BIPAcknowledgement_params>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_BIPAcknowledgement_params */

/* eslint-enable */
