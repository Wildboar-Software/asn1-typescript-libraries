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
  BioAPI_BIR_SUBTYPE_MASK,
  BioAPI_BIR_SUBTYPE_MASK_left /* IMPORTED_LONG_NAMED_BIT */,
  left /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right /* IMPORTED_LONG_NAMED_BIT */,
  right /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_thumb /* IMPORTED_LONG_NAMED_BIT */,
  left_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_thumb /* IMPORTED_LONG_NAMED_BIT */,
  right_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';
export {
  BioAPI_BIR_SUBTYPE_MASK,
  BioAPI_BIR_SUBTYPE_MASK_left /* IMPORTED_LONG_NAMED_BIT */,
  left /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right /* IMPORTED_LONG_NAMED_BIT */,
  right /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_thumb /* IMPORTED_LONG_NAMED_BIT */,
  left_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_thumb /* IMPORTED_LONG_NAMED_BIT */,
  right_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';
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
} from '../BIP/BioAPI-GUI-RESPONSE.ta.mjs';
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
} from '../BIP/BioAPI-GUI-RESPONSE.ta.mjs';

/* START_OF_SYMBOL_DEFINITION GUISelectEvent_AcknowledgementParams */
/**
 * @summary GUISelectEvent_AcknowledgementParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUISelectEvent-AcknowledgementParams ::= SEQUENCE {
 *   selectedInstances  BioAPI-BIR-SUBTYPE-MASK,
 *   response           BioAPI-GUI-RESPONSE
 * }
 * ```
 *
 * @class
 */
export class GUISelectEvent_AcknowledgementParams {
  constructor(
    /**
     * @summary `selectedInstances`.
     * @public
     * @readonly
     */
    readonly selectedInstances: BioAPI_BIR_SUBTYPE_MASK,
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: BioAPI_GUI_RESPONSE
  ) {}

  /**
   * @summary Restructures an object into a GUISelectEvent_AcknowledgementParams
   * @description
   *
   * This takes an `object` and converts it to a `GUISelectEvent_AcknowledgementParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUISelectEvent_AcknowledgementParams`.
   * @returns {GUISelectEvent_AcknowledgementParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUISelectEvent_AcknowledgementParams]: GUISelectEvent_AcknowledgementParams[_K];
    }
  ): GUISelectEvent_AcknowledgementParams {
    return new GUISelectEvent_AcknowledgementParams(
      _o.selectedInstances,
      _o.response
    );
  }

  /**
   * @summary The enum used as the type of the component `response`
   * @public
   * @static
   */

  public static _enum_for_response = _enum_for_BioAPI_GUI_RESPONSE;
}
/* END_OF_SYMBOL_DEFINITION GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUISelectEvent_AcknowledgementParams */
/**
 * @summary The Leading Root Component Types of GUISelectEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUISelectEvent_AcknowledgementParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'selectedInstances',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUISelectEvent_AcknowledgementParams */
/**
 * @summary The Trailing Root Component Types of GUISelectEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUISelectEvent_AcknowledgementParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUISelectEvent_AcknowledgementParams */
/**
 * @summary The Extension Addition Component Types of GUISelectEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUISelectEvent_AcknowledgementParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUISelectEvent_AcknowledgementParams */
let _cached_decoder_for_GUISelectEvent_AcknowledgementParams: $.ASN1Decoder<GUISelectEvent_AcknowledgementParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _decode_GUISelectEvent_AcknowledgementParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GUISelectEvent_AcknowledgementParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUISelectEvent_AcknowledgementParams} The decoded data structure.
 */
export function _decode_GUISelectEvent_AcknowledgementParams(el: _Element) {
  if (!_cached_decoder_for_GUISelectEvent_AcknowledgementParams) {
    _cached_decoder_for_GUISelectEvent_AcknowledgementParams = function (
      el: _Element
    ): GUISelectEvent_AcknowledgementParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'GUISelectEvent-AcknowledgementParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'selectedInstances';
      sequence[1].name = 'response';
      let selectedInstances!: BioAPI_BIR_SUBTYPE_MASK;
      let response!: BioAPI_GUI_RESPONSE;
      selectedInstances = _decode_BioAPI_BIR_SUBTYPE_MASK(sequence[0]);
      response = _decode_BioAPI_GUI_RESPONSE(sequence[1]);
      return new GUISelectEvent_AcknowledgementParams(
        selectedInstances,
        response
      );
    };
  }
  return _cached_decoder_for_GUISelectEvent_AcknowledgementParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUISelectEvent_AcknowledgementParams */
let _cached_encoder_for_GUISelectEvent_AcknowledgementParams: $.ASN1Encoder<GUISelectEvent_AcknowledgementParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUISelectEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _encode_GUISelectEvent_AcknowledgementParams */
/**
 * @summary Encodes a(n) GUISelectEvent_AcknowledgementParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUISelectEvent_AcknowledgementParams, encoded as an ASN.1 Element.
 */
export function _encode_GUISelectEvent_AcknowledgementParams(
  value: GUISelectEvent_AcknowledgementParams,
  elGetter: $.ASN1Encoder<GUISelectEvent_AcknowledgementParams>
) {
  if (!_cached_encoder_for_GUISelectEvent_AcknowledgementParams) {
    _cached_encoder_for_GUISelectEvent_AcknowledgementParams = function (
      value: GUISelectEvent_AcknowledgementParams,
      elGetter: $.ASN1Encoder<GUISelectEvent_AcknowledgementParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_SUBTYPE_MASK(
              value.selectedInstances,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_GUI_RESPONSE(value.response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GUISelectEvent_AcknowledgementParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_GUISelectEvent_AcknowledgementParams */

/* eslint-enable */
