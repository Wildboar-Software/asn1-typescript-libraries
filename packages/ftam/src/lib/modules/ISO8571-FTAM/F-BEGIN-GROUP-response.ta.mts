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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary F_BEGIN_GROUP_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-BEGIN-GROUP-response ::= SEQUENCE {
 * }
 * ```
 *
 * @class
 */
export class F_BEGIN_GROUP_response {
  constructor() {}

  /**
   * @summary Restructures an object into a F_BEGIN_GROUP_response
   * @description
   *
   * This takes an `object` and converts it to a `F_BEGIN_GROUP_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_BEGIN_GROUP_response`.
   * @returns {F_BEGIN_GROUP_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_BEGIN_GROUP_response]: F_BEGIN_GROUP_response[_K] }
  ): F_BEGIN_GROUP_response {
    return new F_BEGIN_GROUP_response();
  }
}


/**
 * @summary The Leading Root Component Types of F_BEGIN_GROUP_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_BEGIN_GROUP_response: $.ComponentSpec[] = [];


/**
 * @summary The Trailing Root Component Types of F_BEGIN_GROUP_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_BEGIN_GROUP_response: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_BEGIN_GROUP_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_BEGIN_GROUP_response: $.ComponentSpec[] = [];


let _cached_decoder_for_F_BEGIN_GROUP_response: $.ASN1Decoder<F_BEGIN_GROUP_response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_BEGIN_GROUP_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_BEGIN_GROUP_response} The decoded data structure.
 */
export function _decode_F_BEGIN_GROUP_response(el: _Element) {
  if (!_cached_decoder_for_F_BEGIN_GROUP_response) {
    _cached_decoder_for_F_BEGIN_GROUP_response = function (
      el: _Element
    ): F_BEGIN_GROUP_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */

      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {};
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_BEGIN_GROUP_response,
        _extension_additions_list_spec_for_F_BEGIN_GROUP_response,
        _root_component_type_list_2_spec_for_F_BEGIN_GROUP_response,
        undefined
      );
      return new F_BEGIN_GROUP_response /* SEQUENCE_CONSTRUCTOR_CALL */();
    };
  }
  return _cached_decoder_for_F_BEGIN_GROUP_response(el);
}


let _cached_encoder_for_F_BEGIN_GROUP_response: $.ASN1Encoder<F_BEGIN_GROUP_response> | null = null;


/**
 * @summary Encodes a(n) F_BEGIN_GROUP_response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_BEGIN_GROUP_response, encoded as an ASN.1 Element.
 */
export function _encode_F_BEGIN_GROUP_response(
  value: F_BEGIN_GROUP_response,
  elGetter: $.ASN1Encoder<F_BEGIN_GROUP_response>
) {
  if (!_cached_encoder_for_F_BEGIN_GROUP_response) {
    _cached_encoder_for_F_BEGIN_GROUP_response = function (
          ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat()
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_BEGIN_GROUP_response(value, elGetter);
}


/* eslint-enable */
