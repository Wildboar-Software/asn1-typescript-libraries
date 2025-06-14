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
  BioAPI_GUI_RESPONSE,
  _enum_for_BioAPI_GUI_RESPONSE,
  _decode_BioAPI_GUI_RESPONSE,
  _encode_BioAPI_GUI_RESPONSE,
} from '../BIP/BioAPI-GUI-RESPONSE.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';
/* START_OF_SYMBOL_DEFINITION GUIStateEvent_AcknowledgementParams */
/**
 * @summary GUIStateEvent_AcknowledgementParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIStateEvent-AcknowledgementParams ::= SEQUENCE {
 *   response                      BioAPI-GUI-RESPONSE,
 *   enrollSampleIndexToRecapture  SignedInt
 * }
 * ```
 *
 * @class
 */
export class GUIStateEvent_AcknowledgementParams {
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
   * @summary Restructures an object into a GUIStateEvent_AcknowledgementParams
   * @description
   *
   * This takes an `object` and converts it to a `GUIStateEvent_AcknowledgementParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIStateEvent_AcknowledgementParams`.
   * @returns {GUIStateEvent_AcknowledgementParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIStateEvent_AcknowledgementParams]: GUIStateEvent_AcknowledgementParams[_K];
    }
  ): GUIStateEvent_AcknowledgementParams {
    return new GUIStateEvent_AcknowledgementParams(
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
/* END_OF_SYMBOL_DEFINITION GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIStateEvent_AcknowledgementParams */
/**
 * @summary The Leading Root Component Types of GUIStateEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIStateEvent_AcknowledgementParams: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIStateEvent_AcknowledgementParams */
/**
 * @summary The Trailing Root Component Types of GUIStateEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIStateEvent_AcknowledgementParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIStateEvent_AcknowledgementParams */
/**
 * @summary The Extension Addition Component Types of GUIStateEvent_AcknowledgementParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIStateEvent_AcknowledgementParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIStateEvent_AcknowledgementParams */
let _cached_decoder_for_GUIStateEvent_AcknowledgementParams: $.ASN1Decoder<GUIStateEvent_AcknowledgementParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _decode_GUIStateEvent_AcknowledgementParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GUIStateEvent_AcknowledgementParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIStateEvent_AcknowledgementParams} The decoded data structure.
 */
export function _decode_GUIStateEvent_AcknowledgementParams(el: _Element) {
  if (!_cached_decoder_for_GUIStateEvent_AcknowledgementParams) {
    _cached_decoder_for_GUIStateEvent_AcknowledgementParams = function (
      el: _Element
    ): GUIStateEvent_AcknowledgementParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'GUIStateEvent-AcknowledgementParams contained only ' +
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
      return new GUIStateEvent_AcknowledgementParams(
        response,
        enrollSampleIndexToRecapture
      );
    };
  }
  return _cached_decoder_for_GUIStateEvent_AcknowledgementParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIStateEvent_AcknowledgementParams */
let _cached_encoder_for_GUIStateEvent_AcknowledgementParams: $.ASN1Encoder<GUIStateEvent_AcknowledgementParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIStateEvent_AcknowledgementParams */

/* START_OF_SYMBOL_DEFINITION _encode_GUIStateEvent_AcknowledgementParams */
/**
 * @summary Encodes a(n) GUIStateEvent_AcknowledgementParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIStateEvent_AcknowledgementParams, encoded as an ASN.1 Element.
 */
export function _encode_GUIStateEvent_AcknowledgementParams(
  value: GUIStateEvent_AcknowledgementParams,
  elGetter: $.ASN1Encoder<GUIStateEvent_AcknowledgementParams>
) {
  if (!_cached_encoder_for_GUIStateEvent_AcknowledgementParams) {
    _cached_encoder_for_GUIStateEvent_AcknowledgementParams = function (
      value: GUIStateEvent_AcknowledgementParams    ): _Element {
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
  return _cached_encoder_for_GUIStateEvent_AcknowledgementParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_GUIStateEvent_AcknowledgementParams */

/* eslint-enable */
