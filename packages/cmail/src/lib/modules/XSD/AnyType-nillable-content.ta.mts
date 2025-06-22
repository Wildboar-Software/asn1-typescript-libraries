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
import { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';

/**
 * @summary AnyType_nillable_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyType-nillable-content ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AnyType_nillable_content {
  constructor(
    /**
     * @summary `elem_list`.
     * @public
     * @readonly
     */
    readonly elem_list: String[]
  ) {}

  /**
   * @summary Restructures an object into a AnyType_nillable_content
   * @description
   *
   * This takes an `object` and converts it to a `AnyType_nillable_content`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AnyType_nillable_content`.
   * @returns {AnyType_nillable_content}
   */
  public static _from_object(
    _o: { [_K in keyof AnyType_nillable_content]: AnyType_nillable_content[_K] }
  ): AnyType_nillable_content {
    return new AnyType_nillable_content(_o.elem_list);
  }
}


/**
 * @summary The Leading Root Component Types of AnyType_nillable_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AnyType_nillable_content: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'elem-list',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of AnyType_nillable_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AnyType_nillable_content: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AnyType_nillable_content
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AnyType_nillable_content: $.ComponentSpec[] = [];


let _cached_decoder_for_AnyType_nillable_content: $.ASN1Decoder<AnyType_nillable_content> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AnyType_nillable_content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnyType_nillable_content} The decoded data structure.
 */
export function _decode_AnyType_nillable_content(el: _Element) {
  if (!_cached_decoder_for_AnyType_nillable_content) {
    _cached_decoder_for_AnyType_nillable_content = function (
      el: _Element
    ): AnyType_nillable_content {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'AnyType-nillable-content contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'elem-list';
      let elem_list!: String[];
      elem_list = $._decodeSequenceOf<String>(() => _decode_String)(
        sequence[0]
      );
      return new AnyType_nillable_content(elem_list);
    };
  }
  return _cached_decoder_for_AnyType_nillable_content(el);
}


let _cached_encoder_for_AnyType_nillable_content: $.ASN1Encoder<AnyType_nillable_content> | null = null;


/**
 * @summary Encodes a(n) AnyType_nillable_content into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyType_nillable_content, encoded as an ASN.1 Element.
 */
export function _encode_AnyType_nillable_content(
  value: AnyType_nillable_content,
  elGetter: $.ASN1Encoder<AnyType_nillable_content>
) {
  if (!_cached_encoder_for_AnyType_nillable_content) {
    _cached_encoder_for_AnyType_nillable_content = function (
      value: AnyType_nillable_content    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<String>(
              () => _encode_String,
              $.BER
            )(value.elem_list, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AnyType_nillable_content(value, elGetter);
}


/* eslint-enable */
