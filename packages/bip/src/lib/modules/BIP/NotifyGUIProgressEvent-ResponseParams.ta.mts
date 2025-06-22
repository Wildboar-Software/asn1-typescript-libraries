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
  BioAPI_GUI_RESPONSE,
  _enum_for_BioAPI_GUI_RESPONSE,
  _decode_BioAPI_GUI_RESPONSE,
  _encode_BioAPI_GUI_RESPONSE,
} from '../BIP/BioAPI-GUI-RESPONSE.ta.mjs';

/**
 * @summary NotifyGUIProgressEvent_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotifyGUIProgressEvent-ResponseParams ::= SEQUENCE {
 *   response  BioAPI-GUI-RESPONSE
 * }
 * ```
 *
 * @class
 */
export class NotifyGUIProgressEvent_ResponseParams {
  constructor(
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: BioAPI_GUI_RESPONSE
  ) {}

  /**
   * @summary Restructures an object into a NotifyGUIProgressEvent_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `NotifyGUIProgressEvent_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NotifyGUIProgressEvent_ResponseParams`.
   * @returns {NotifyGUIProgressEvent_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof NotifyGUIProgressEvent_ResponseParams]: NotifyGUIProgressEvent_ResponseParams[_K];
    }
  ): NotifyGUIProgressEvent_ResponseParams {
    return new NotifyGUIProgressEvent_ResponseParams(_o.response);
  }

  /**
   * @summary The enum used as the type of the component `response`
   * @public
   * @static
   */

  public static _enum_for_response = _enum_for_BioAPI_GUI_RESPONSE;
}


/**
 * @summary The Leading Root Component Types of NotifyGUIProgressEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NotifyGUIProgressEvent_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of NotifyGUIProgressEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotifyGUIProgressEvent_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NotifyGUIProgressEvent_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotifyGUIProgressEvent_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_NotifyGUIProgressEvent_ResponseParams: $.ASN1Decoder<NotifyGUIProgressEvent_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NotifyGUIProgressEvent_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyGUIProgressEvent_ResponseParams} The decoded data structure.
 */
export function _decode_NotifyGUIProgressEvent_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_NotifyGUIProgressEvent_ResponseParams) {
    _cached_decoder_for_NotifyGUIProgressEvent_ResponseParams = function (
      el: _Element
    ): NotifyGUIProgressEvent_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'NotifyGUIProgressEvent-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'response';
      let response!: BioAPI_GUI_RESPONSE;
      response = _decode_BioAPI_GUI_RESPONSE(sequence[0]);
      return new NotifyGUIProgressEvent_ResponseParams(response);
    };
  }
  return _cached_decoder_for_NotifyGUIProgressEvent_ResponseParams(el);
}


let _cached_encoder_for_NotifyGUIProgressEvent_ResponseParams: $.ASN1Encoder<NotifyGUIProgressEvent_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) NotifyGUIProgressEvent_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyGUIProgressEvent_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_NotifyGUIProgressEvent_ResponseParams(
  value: NotifyGUIProgressEvent_ResponseParams,
  elGetter: $.ASN1Encoder<NotifyGUIProgressEvent_ResponseParams>
) {
  if (!_cached_encoder_for_NotifyGUIProgressEvent_ResponseParams) {
    _cached_encoder_for_NotifyGUIProgressEvent_ResponseParams = function (
      value: NotifyGUIProgressEvent_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_GUI_RESPONSE(value.response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NotifyGUIProgressEvent_ResponseParams(
    value,
    elGetter
  );
}


/* eslint-enable */
