/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
  Equality_Comparision,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';

/**
 * @summary Object_Identifier_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Object-Identifier-Pattern ::= SEQUENCE {
 *   equality-comparision     [0] IMPLICIT Equality-Comparision,
 *   object-identifier-value  [1] IMPLICIT OBJECT IDENTIFIER
 * }
 * ```
 *
 * @class
 */
export class Object_Identifier_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `object_identifier_value`.
     * @public
     * @readonly
     */
    readonly object_identifier_value: OBJECT_IDENTIFIER
  ) {}

  /**
   * @summary Restructures an object into a Object_Identifier_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Object_Identifier_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Object_Identifier_Pattern`.
   * @returns {Object_Identifier_Pattern}
   */
  public static _from_object(
    _o: {
      [_K in keyof Object_Identifier_Pattern]: Object_Identifier_Pattern[_K];
    }
  ): Object_Identifier_Pattern {
    return new Object_Identifier_Pattern(
      _o.equality_comparision,
      _o.object_identifier_value
    );
  }
}


/**
 * @summary The Leading Root Component Types of Object_Identifier_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Object_Identifier_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'object-identifier-value',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Object_Identifier_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Object_Identifier_Pattern: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Object_Identifier_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Object_Identifier_Pattern: $.ComponentSpec[] = [];


let _cached_decoder_for_Object_Identifier_Pattern: $.ASN1Decoder<Object_Identifier_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Object_Identifier_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Object_Identifier_Pattern} The decoded data structure.
 */
export function _decode_Object_Identifier_Pattern(el: _Element) {
  if (!_cached_decoder_for_Object_Identifier_Pattern) {
    _cached_decoder_for_Object_Identifier_Pattern = function (
      el: _Element
    ): Object_Identifier_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Object-Identifier-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'object-identifier-value';
      let equality_comparision!: Equality_Comparision;
      let object_identifier_value!: OBJECT_IDENTIFIER;
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      object_identifier_value = $._decode_implicit<OBJECT_IDENTIFIER>(
        () => $._decodeObjectIdentifier
      )(sequence[1]);
      return new Object_Identifier_Pattern(
        equality_comparision,
        object_identifier_value
      );
    };
  }
  return _cached_decoder_for_Object_Identifier_Pattern(el);
}


let _cached_encoder_for_Object_Identifier_Pattern: $.ASN1Encoder<Object_Identifier_Pattern> | null = null;


/**
 * @summary Encodes a(n) Object_Identifier_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Object_Identifier_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Object_Identifier_Pattern(
  value: Object_Identifier_Pattern,
  elGetter: $.ASN1Encoder<Object_Identifier_Pattern>
) {
  if (!_cached_encoder_for_Object_Identifier_Pattern) {
    _cached_encoder_for_Object_Identifier_Pattern = function (
      value: Object_Identifier_Pattern    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Equality_Comparision,
              $.BER
            )(value.equality_comparision, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeObjectIdentifier,
              $.BER
            )(value.object_identifier_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Object_Identifier_Pattern(value, elGetter);
}


/* eslint-enable */
