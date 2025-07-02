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
 * @summary GUIProgressEvent_AcknowledgementParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIProgressEvent-AcknowledgementParams ::= SEQUENCE {
 *   response  BioAPI-GUI-RESPONSE
 * }
 * ```
 *
 */
export class GUIProgressEvent_AcknowledgementParams {
  constructor(
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: BioAPI_GUI_RESPONSE
  ) {}

  /**
   * @summary Restructures an object into a GUIProgressEvent_AcknowledgementParams
   * @description
   *
   * This takes an `object` and converts it to a `GUIProgressEvent_AcknowledgementParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIProgressEvent_AcknowledgementParams`.
   * @returns {GUIProgressEvent_AcknowledgementParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIProgressEvent_AcknowledgementParams]: GUIProgressEvent_AcknowledgementParams[_K];
    }
  ): GUIProgressEvent_AcknowledgementParams {
    return new GUIProgressEvent_AcknowledgementParams(_o.response);
  }

  /**
   * @summary The enum used as the type of the component `response`
   * @public
   * @static
   */

  public static _enum_for_response = _enum_for_BioAPI_GUI_RESPONSE;
}


/**
 * @summary The Leading Root Component Types of GUIProgressEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIProgressEvent_AcknowledgementParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of GUIProgressEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIProgressEvent_AcknowledgementParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GUIProgressEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIProgressEvent_AcknowledgementParams: $.ComponentSpec[] = [];


let _cached_decoder_for_GUIProgressEvent_AcknowledgementParams: $.ASN1Decoder<GUIProgressEvent_AcknowledgementParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUIProgressEvent_AcknowledgementParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIProgressEvent_AcknowledgementParams} The decoded data structure.
 */
export function _decode_GUIProgressEvent_AcknowledgementParams(el: _Element): GUIProgressEvent_AcknowledgementParams {
  if (!_cached_decoder_for_GUIProgressEvent_AcknowledgementParams) {
    _cached_decoder_for_GUIProgressEvent_AcknowledgementParams = function (
      el: _Element
    ): GUIProgressEvent_AcknowledgementParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'GUIProgressEvent-AcknowledgementParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'response';
      let response!: BioAPI_GUI_RESPONSE;
      response = _decode_BioAPI_GUI_RESPONSE(sequence[0]);
      return new GUIProgressEvent_AcknowledgementParams(response);
    };
  }
  return _cached_decoder_for_GUIProgressEvent_AcknowledgementParams(el);
}


let _cached_encoder_for_GUIProgressEvent_AcknowledgementParams: $.ASN1Encoder<GUIProgressEvent_AcknowledgementParams> | null = null;


/**
 * @summary Encodes a(n) GUIProgressEvent_AcknowledgementParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIProgressEvent_AcknowledgementParams, encoded as an ASN.1 Element.
 */
export function _encode_GUIProgressEvent_AcknowledgementParams(
  value: GUIProgressEvent_AcknowledgementParams,
  elGetter: $.ASN1Encoder<GUIProgressEvent_AcknowledgementParams>
): _Element {
  if (!_cached_encoder_for_GUIProgressEvent_AcknowledgementParams) {
    _cached_encoder_for_GUIProgressEvent_AcknowledgementParams = function (
      value: GUIProgressEvent_AcknowledgementParams    ): _Element {
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
  return _cached_encoder_for_GUIProgressEvent_AcknowledgementParams(
    value,
    elGetter
  );
}


/* eslint-enable */
