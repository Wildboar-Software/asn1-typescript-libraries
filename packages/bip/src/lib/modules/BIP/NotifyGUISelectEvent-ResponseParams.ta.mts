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
  BioAPI_BIR_SUBTYPE_MASK,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';
import {
  BioAPI_GUI_RESPONSE,
  _enum_for_BioAPI_GUI_RESPONSE,
  _decode_BioAPI_GUI_RESPONSE,
  _encode_BioAPI_GUI_RESPONSE,
} from '../BIP/BioAPI-GUI-RESPONSE.ta.mjs';

/**
 * @summary NotifyGUISelectEvent_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotifyGUISelectEvent-ResponseParams ::= SEQUENCE {
 *   selectedInstances  BioAPI-BIR-SUBTYPE-MASK,
 *   response           BioAPI-GUI-RESPONSE
 * }
 * ```
 *
 * @class
 */
export class NotifyGUISelectEvent_ResponseParams {
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
   * @summary Restructures an object into a NotifyGUISelectEvent_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `NotifyGUISelectEvent_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NotifyGUISelectEvent_ResponseParams`.
   * @returns {NotifyGUISelectEvent_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof NotifyGUISelectEvent_ResponseParams]: NotifyGUISelectEvent_ResponseParams[_K];
    }
  ): NotifyGUISelectEvent_ResponseParams {
    return new NotifyGUISelectEvent_ResponseParams(
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


/**
 * @summary The Leading Root Component Types of NotifyGUISelectEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NotifyGUISelectEvent_ResponseParams: $.ComponentSpec[] = [
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


/**
 * @summary The Trailing Root Component Types of NotifyGUISelectEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotifyGUISelectEvent_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NotifyGUISelectEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotifyGUISelectEvent_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_NotifyGUISelectEvent_ResponseParams: $.ASN1Decoder<NotifyGUISelectEvent_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NotifyGUISelectEvent_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyGUISelectEvent_ResponseParams} The decoded data structure.
 */
export function _decode_NotifyGUISelectEvent_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_NotifyGUISelectEvent_ResponseParams) {
    _cached_decoder_for_NotifyGUISelectEvent_ResponseParams = function (
      el: _Element
    ): NotifyGUISelectEvent_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NotifyGUISelectEvent-ResponseParams contained only ' +
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
      return new NotifyGUISelectEvent_ResponseParams(
        selectedInstances,
        response
      );
    };
  }
  return _cached_decoder_for_NotifyGUISelectEvent_ResponseParams(el);
}


let _cached_encoder_for_NotifyGUISelectEvent_ResponseParams: $.ASN1Encoder<NotifyGUISelectEvent_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) NotifyGUISelectEvent_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyGUISelectEvent_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_NotifyGUISelectEvent_ResponseParams(
  value: NotifyGUISelectEvent_ResponseParams,
  elGetter: $.ASN1Encoder<NotifyGUISelectEvent_ResponseParams>
) {
  if (!_cached_encoder_for_NotifyGUISelectEvent_ResponseParams) {
    _cached_encoder_for_NotifyGUISelectEvent_ResponseParams = function (
      value: NotifyGUISelectEvent_ResponseParams    ): _Element {
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
  return _cached_encoder_for_NotifyGUISelectEvent_ResponseParams(
    value,
    elGetter
  );
}


/* eslint-enable */
