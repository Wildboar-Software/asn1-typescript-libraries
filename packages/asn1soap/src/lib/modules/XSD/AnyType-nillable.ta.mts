/* eslint-disable */
import {
  OPTIONAL,
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
import { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';
import {
  AnyType_nillable_content,
  _decode_AnyType_nillable_content,
  _encode_AnyType_nillable_content,
} from '../XSD/AnyType-nillable-content.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AnyType_nillable */
/**
 * @summary AnyType_nillable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyType-nillable ::= SEQUENCE {
 * embed-values SEQUENCE OF String,
 * attr SEQUENCE
 *   (CONSTRAINED BY {
 *     / * Each item shall conform to the "AnyAttributeFormat" specified
 *     in Rec. ITU-T X.693 | ISO/IEC 8825-4, clause 18 * / } ) OF String,
 * content SEQUENCE {
 *     elem-list SEQUENCE OF elem String
 *       (CONSTRAINED BY {
 *              / * Shall conform to the "AnyElementFormat" specified
 *                 in Rec. ITU-T X.693 | ISO/IEC 8825-4, clause 19 * / } )
 * } OPTIONAL }
 *                  (CONSTRAINED BY {
 *                / * Shall conform to Rec. ITU-T X.693 | ISO/IEC 8825-4, clause 25 * / } )
 * ```
 *
 * @class
 */
export class AnyType_nillable {
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
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: OPTIONAL<AnyType_nillable_content>
  ) {}

  /**
   * @summary Restructures an object into a AnyType_nillable
   * @description
   *
   * This takes an `object` and converts it to a `AnyType_nillable`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AnyType_nillable`.
   * @returns {AnyType_nillable}
   */
  public static _from_object(
    _o: { [_K in keyof AnyType_nillable]: AnyType_nillable[_K] }
  ): AnyType_nillable {
    return new AnyType_nillable(_o.embed_values, _o.attr, _o.content);
  }
}
/* END_OF_SYMBOL_DEFINITION AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AnyType_nillable */
/**
 * @summary The Leading Root Component Types of AnyType_nillable
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AnyType_nillable: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'embed-values',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attr',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'content',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AnyType_nillable */
/**
 * @summary The Trailing Root Component Types of AnyType_nillable
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AnyType_nillable: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AnyType_nillable */
/**
 * @summary The Extension Addition Component Types of AnyType_nillable
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AnyType_nillable: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AnyType_nillable */
let _cached_decoder_for_AnyType_nillable: $.ASN1Decoder<AnyType_nillable> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _decode_AnyType_nillable */
/**
 * @summary Decodes an ASN.1 element into a(n) AnyType_nillable
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnyType_nillable} The decoded data structure.
 */
export function _decode_AnyType_nillable(el: _Element) {
  if (!_cached_decoder_for_AnyType_nillable) {
    _cached_decoder_for_AnyType_nillable = function (
      el: _Element
    ): AnyType_nillable {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let embed_values!: String[];
      let attr!: String[];
      let content: OPTIONAL<AnyType_nillable_content>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'embed-values': (_el: _Element): void => {
          embed_values = $._decodeSequenceOf<String>(() => _decode_String)(_el);
        },
        attr: (_el: _Element): void => {
          attr = $._decodeSequenceOf<String>(() => _decode_String)(_el);
        },
        content: (_el: _Element): void => {
          content = _decode_AnyType_nillable_content(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AnyType_nillable,
        _extension_additions_list_spec_for_AnyType_nillable,
        _root_component_type_list_2_spec_for_AnyType_nillable,
        undefined
      );
      return new AnyType_nillable /* SEQUENCE_CONSTRUCTOR_CALL */(
        embed_values,
        attr,
        content
      );
    };
  }
  return _cached_decoder_for_AnyType_nillable(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AnyType_nillable */
let _cached_encoder_for_AnyType_nillable: $.ASN1Encoder<AnyType_nillable> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AnyType_nillable */

/* START_OF_SYMBOL_DEFINITION _encode_AnyType_nillable */
/**
 * @summary Encodes a(n) AnyType_nillable into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyType_nillable, encoded as an ASN.1 Element.
 */
export function _encode_AnyType_nillable(
  value: AnyType_nillable,
  elGetter: $.ASN1Encoder<AnyType_nillable>
) {
  if (!_cached_encoder_for_AnyType_nillable) {
    _cached_encoder_for_AnyType_nillable = function (
      value: AnyType_nillable    ): _Element {
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
            /* IF_ABSENT  */ value.content === undefined
              ? undefined
              : _encode_AnyType_nillable_content(value.content, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AnyType_nillable(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AnyType_nillable */

/* eslint-enable */
