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
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta.mjs';

/**
 * @summary F_CHANGE_ATTRIB_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CHANGE-ATTRIB-request ::= SEQUENCE {attributes  Change-Attributes
 * }
 * ```
 *
 * @class
 */
export class F_CHANGE_ATTRIB_request {
  constructor(
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: Change_Attributes
  ) {}

  /**
   * @summary Restructures an object into a F_CHANGE_ATTRIB_request
   * @description
   *
   * This takes an `object` and converts it to a `F_CHANGE_ATTRIB_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CHANGE_ATTRIB_request`.
   * @returns {F_CHANGE_ATTRIB_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_CHANGE_ATTRIB_request]: F_CHANGE_ATTRIB_request[_K] }
  ): F_CHANGE_ATTRIB_request {
    return new F_CHANGE_ATTRIB_request(_o.attributes);
  }
}


/**
 * @summary The Leading Root Component Types of F_CHANGE_ATTRIB_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CHANGE_ATTRIB_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attributes',
    false,
    $.hasTag(_TagClass.application, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_CHANGE_ATTRIB_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CHANGE_ATTRIB_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_CHANGE_ATTRIB_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CHANGE_ATTRIB_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_CHANGE_ATTRIB_request: $.ASN1Decoder<F_CHANGE_ATTRIB_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_CHANGE_ATTRIB_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CHANGE_ATTRIB_request} The decoded data structure.
 */
export function _decode_F_CHANGE_ATTRIB_request(el: _Element) {
  if (!_cached_decoder_for_F_CHANGE_ATTRIB_request) {
    _cached_decoder_for_F_CHANGE_ATTRIB_request = function (
      el: _Element
    ): F_CHANGE_ATTRIB_request {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'F-CHANGE-ATTRIB-request contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'attributes';
      let attributes!: Change_Attributes;
      attributes = _decode_Change_Attributes(sequence[0]);
      return new F_CHANGE_ATTRIB_request(attributes);
    };
  }
  return _cached_decoder_for_F_CHANGE_ATTRIB_request(el);
}


let _cached_encoder_for_F_CHANGE_ATTRIB_request: $.ASN1Encoder<F_CHANGE_ATTRIB_request> | null = null;


/**
 * @summary Encodes a(n) F_CHANGE_ATTRIB_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CHANGE_ATTRIB_request, encoded as an ASN.1 Element.
 */
export function _encode_F_CHANGE_ATTRIB_request(
  value: F_CHANGE_ATTRIB_request,
  elGetter: $.ASN1Encoder<F_CHANGE_ATTRIB_request>
) {
  if (!_cached_encoder_for_F_CHANGE_ATTRIB_request) {
    _cached_encoder_for_F_CHANGE_ATTRIB_request = function (
      value: F_CHANGE_ATTRIB_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Change_Attributes(value.attributes, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_CHANGE_ATTRIB_request(value, elGetter);
}


/* eslint-enable */
