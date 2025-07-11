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
import { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';

/**
 * @summary AnyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyType ::= SEQUENCE {
 * embed-values SEQUENCE OF String,
 * attr SEQUENCE
 *   (CONSTRAINED BY {
 *     / * Each item shall conform to the "AnyAttributeFormat" specified
 *     in Rec. ITU-T X.693 | ISO/IEC 8825-4, clause 18 * / } ) OF String,
 * elem-list SEQUENCE OF elem String
 *   (CONSTRAINED BY {
 *      / * Shall conform to the "AnyElementFormat" specified
 *         in Rec. ITU-T X.693 | ISO/IEC 8825-4, clause 19 * / } ) }
 *                  (CONSTRAINED BY {
 *                / * Shall conform to Rec. ITU-T X.693 | ISO/IEC 8825-4, clause 25 * / } )
 * ```
 *
 */
export class AnyType {
  constructor(
    /**
     * @summary `embed_values`.
     * @public
     * @readonly
     */
    readonly embed_values: String[],
    /**
     * @summary `attr`.
     * @public
     * @readonly
     */
    readonly attr: String[],
    /**
     * @summary `elem_list`.
     * @public
     * @readonly
     */
    readonly elem_list: String[]
  ) {}

  /**
   * @summary Restructures an object into a AnyType
   * @description
   *
   * This takes an `object` and converts it to a `AnyType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AnyType`.
   * @returns {AnyType}
   */
  public static _from_object(
    _o: { [_K in keyof AnyType]: AnyType[_K] }
  ): AnyType {
    return new AnyType(_o.embed_values, _o.attr, _o.elem_list);
  }
}


/**
 * @summary The Leading Root Component Types of AnyType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AnyType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'embed-values',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'attr',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'elem-list',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of AnyType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AnyType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AnyType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AnyType: $.ComponentSpec[] = [];


let _cached_decoder_for_AnyType: $.ASN1Decoder<AnyType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AnyType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnyType} The decoded data structure.
 */
export function _decode_AnyType(el: _Element): AnyType {
  if (!_cached_decoder_for_AnyType) {
    _cached_decoder_for_AnyType = function (el: _Element): AnyType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'AnyType contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'embed-values';
      sequence[1].name = 'attr';
      sequence[2].name = 'elem-list';
      let embed_values!: String[];
      let attr!: String[];
      let elem_list!: String[];
      embed_values = $._decodeSequenceOf<String>(() => _decode_String)(
        sequence[0]
      );
      attr = $._decodeSequenceOf<String>(() => _decode_String)(sequence[1]);
      elem_list = $._decodeSequenceOf<String>(() => _decode_String)(
        sequence[2]
      );
      return new AnyType(embed_values, attr, elem_list);
    };
  }
  return _cached_decoder_for_AnyType(el);
}


let _cached_encoder_for_AnyType: $.ASN1Encoder<AnyType> | null = null;


/**
 * @summary Encodes a(n) AnyType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyType, encoded as an ASN.1 Element.
 */
export function _encode_AnyType(
  value: AnyType,
  elGetter: $.ASN1Encoder<AnyType>
): _Element {
  if (!_cached_encoder_for_AnyType) {
    _cached_encoder_for_AnyType = function (
      value: AnyType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<String>(
              () => _encode_String,
              $.BER
            )(value.embed_values, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<String>(
              () => _encode_String,
              $.BER
            )(value.attr, $.BER),
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
  return _cached_encoder_for_AnyType(value, elGetter);
}


/* eslint-enable */
