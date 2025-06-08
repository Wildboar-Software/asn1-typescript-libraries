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
  BioAPI_GUI_RESPONSE,
  _enum_for_BioAPI_GUI_RESPONSE,
  BioAPI_GUI_RESPONSE_default_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  default_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_opComplete /* IMPORTED_LONG_ENUMERATION_ITEM */,
  opComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_opCancel /* IMPORTED_LONG_ENUMERATION_ITEM */,
  opCancel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_cycleStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cycleStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_cycleRestart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cycleRestart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_subopStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subopStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_subopNext /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subopNext /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_progressContinue /* IMPORTED_LONG_ENUMERATION_ITEM */,
  progressContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_progressCancel /* IMPORTED_LONG_ENUMERATION_ITEM */,
  progressCancel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_recapture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  recapture /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_RESPONSE,
  _encode_BioAPI_GUI_RESPONSE,
} from '../BIP/BioAPI-GUI-RESPONSE.ta';
export {
  BioAPI_GUI_RESPONSE,
  _enum_for_BioAPI_GUI_RESPONSE,
  BioAPI_GUI_RESPONSE_default_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  default_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_opComplete /* IMPORTED_LONG_ENUMERATION_ITEM */,
  opComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_opCancel /* IMPORTED_LONG_ENUMERATION_ITEM */,
  opCancel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_cycleStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cycleStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_cycleRestart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cycleRestart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_subopStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subopStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_subopNext /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subopNext /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_progressContinue /* IMPORTED_LONG_ENUMERATION_ITEM */,
  progressContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_progressCancel /* IMPORTED_LONG_ENUMERATION_ITEM */,
  progressCancel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_RESPONSE_recapture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  recapture /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_RESPONSE,
  _encode_BioAPI_GUI_RESPONSE,
} from '../BIP/BioAPI-GUI-RESPONSE.ta';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta';
export {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta';

/* START_OF_SYMBOL_DEFINITION NotifyGUIStateEvent_ResponseParams */
/**
 * @summary NotifyGUIStateEvent_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotifyGUIStateEvent-ResponseParams ::= SEQUENCE {
 *   response                      BioAPI-GUI-RESPONSE,
 *   enrollSampleIndexToRecapture  SignedInt
 * }
 * ```
 *
 * @class
 */
export class NotifyGUIStateEvent_ResponseParams {
  constructor(
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: BioAPI_GUI_RESPONSE,
    /**
     * @summary `enrollSampleIndexToRecapture`.
     * @public
     * @readonly
     */
    readonly enrollSampleIndexToRecapture: SignedInt
  ) {}

  /**
   * @summary Restructures an object into a NotifyGUIStateEvent_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `NotifyGUIStateEvent_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NotifyGUIStateEvent_ResponseParams`.
   * @returns {NotifyGUIStateEvent_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof NotifyGUIStateEvent_ResponseParams]: NotifyGUIStateEvent_ResponseParams[_K];
    }
  ): NotifyGUIStateEvent_ResponseParams {
    return new NotifyGUIStateEvent_ResponseParams(
      _o.response,
      _o.enrollSampleIndexToRecapture
    );
  }

  /**
   * @summary The enum used as the type of the component `response`
   * @public
   * @static
   */

  public static _enum_for_response = _enum_for_BioAPI_GUI_RESPONSE;
}
/* END_OF_SYMBOL_DEFINITION NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyGUIStateEvent_ResponseParams */
/**
 * @summary The Leading Root Component Types of NotifyGUIStateEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NotifyGUIStateEvent_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enrollSampleIndexToRecapture',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyGUIStateEvent_ResponseParams */
/**
 * @summary The Trailing Root Component Types of NotifyGUIStateEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotifyGUIStateEvent_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyGUIStateEvent_ResponseParams */
/**
 * @summary The Extension Addition Component Types of NotifyGUIStateEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotifyGUIStateEvent_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyGUIStateEvent_ResponseParams */
let _cached_decoder_for_NotifyGUIStateEvent_ResponseParams: $.ASN1Decoder<NotifyGUIStateEvent_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_NotifyGUIStateEvent_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) NotifyGUIStateEvent_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyGUIStateEvent_ResponseParams} The decoded data structure.
 */
export function _decode_NotifyGUIStateEvent_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_NotifyGUIStateEvent_ResponseParams) {
    _cached_decoder_for_NotifyGUIStateEvent_ResponseParams = function (
      el: _Element
    ): NotifyGUIStateEvent_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NotifyGUIStateEvent-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'response';
      sequence[1].name = 'enrollSampleIndexToRecapture';
      let response!: BioAPI_GUI_RESPONSE;
      let enrollSampleIndexToRecapture!: SignedInt;
      response = _decode_BioAPI_GUI_RESPONSE(sequence[0]);
      enrollSampleIndexToRecapture = _decode_SignedInt(sequence[1]);
      return new NotifyGUIStateEvent_ResponseParams(
        response,
        enrollSampleIndexToRecapture
      );
    };
  }
  return _cached_decoder_for_NotifyGUIStateEvent_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyGUIStateEvent_ResponseParams */
let _cached_encoder_for_NotifyGUIStateEvent_ResponseParams: $.ASN1Encoder<NotifyGUIStateEvent_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyGUIStateEvent_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_NotifyGUIStateEvent_ResponseParams */
/**
 * @summary Encodes a(n) NotifyGUIStateEvent_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyGUIStateEvent_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_NotifyGUIStateEvent_ResponseParams(
  value: NotifyGUIStateEvent_ResponseParams,
  elGetter: $.ASN1Encoder<NotifyGUIStateEvent_ResponseParams>
) {
  if (!_cached_encoder_for_NotifyGUIStateEvent_ResponseParams) {
    _cached_encoder_for_NotifyGUIStateEvent_ResponseParams = function (
      value: NotifyGUIStateEvent_ResponseParams,
      elGetter: $.ASN1Encoder<NotifyGUIStateEvent_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_GUI_RESPONSE(value.response, $.BER),
            /* REQUIRED   */ _encode_SignedInt(
              value.enrollSampleIndexToRecapture,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NotifyGUIStateEvent_ResponseParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_NotifyGUIStateEvent_ResponseParams */

/* eslint-enable */
