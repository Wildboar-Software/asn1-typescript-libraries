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
  Equality_Comparision,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';
import {
  Pathname_Pattern_pathname_value_Item,
  _decode_Pathname_Pattern_pathname_value_Item,
  _encode_Pathname_Pattern_pathname_value_Item,
} from '../ISO8571-FTAM/Pathname-Pattern-pathname-value-Item.ta.mjs';

/**
 * @summary Pathname_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pathname-Pattern ::= SEQUENCE {
 *   equality-comparision  [0] IMPLICIT Equality-Comparision,
 *   pathname-value
 *     [1] IMPLICIT SEQUENCE OF
 *                    CHOICE {string-match  [2] IMPLICIT String-Pattern,
 *                            any-match     [3] IMPLICIT NULL}
 * }
 * ```
 *
 */
export class Pathname_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `pathname_value`.
     * @public
     * @readonly
     */
    readonly pathname_value: Pathname_Pattern_pathname_value_Item[]
  ) {}

  /**
   * @summary Restructures an object into a Pathname_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Pathname_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Pathname_Pattern`.
   * @returns {Pathname_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Pathname_Pattern]: Pathname_Pattern[_K] }
  ): Pathname_Pattern {
    return new Pathname_Pattern(_o.equality_comparision, _o.pathname_value);
  }
}


/**
 * @summary The Leading Root Component Types of Pathname_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Pathname_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'pathname-value',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Pathname_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Pathname_Pattern: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Pathname_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Pathname_Pattern: $.ComponentSpec[] = [];


let _cached_decoder_for_Pathname_Pattern: $.ASN1Decoder<Pathname_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Pathname_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pathname_Pattern} The decoded data structure.
 */
export function _decode_Pathname_Pattern(el: _Element): Pathname_Pattern {
  if (!_cached_decoder_for_Pathname_Pattern) {
    _cached_decoder_for_Pathname_Pattern = function (
      el: _Element
    ): Pathname_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Pathname-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'pathname-value';
      let equality_comparision!: Equality_Comparision;
      let pathname_value!: Pathname_Pattern_pathname_value_Item[];
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      pathname_value = $._decode_implicit<
        Pathname_Pattern_pathname_value_Item[]
      >(() =>
        $._decodeSequenceOf<Pathname_Pattern_pathname_value_Item>(
          () => _decode_Pathname_Pattern_pathname_value_Item
        )
      )(sequence[1]);
      return new Pathname_Pattern(equality_comparision, pathname_value);
    };
  }
  return _cached_decoder_for_Pathname_Pattern(el);
}


let _cached_encoder_for_Pathname_Pattern: $.ASN1Encoder<Pathname_Pattern> | null = null;


/**
 * @summary Encodes a(n) Pathname_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pathname_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Pathname_Pattern(
  value: Pathname_Pattern,
  elGetter: $.ASN1Encoder<Pathname_Pattern>
): _Element {
  if (!_cached_encoder_for_Pathname_Pattern) {
    _cached_encoder_for_Pathname_Pattern = function (
      value: Pathname_Pattern    ): _Element {
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
              () =>
                $._encodeSequenceOf<Pathname_Pattern_pathname_value_Item>(
                  () => _encode_Pathname_Pattern_pathname_value_Item,
                  $.BER
                ),
              $.BER
            )(value.pathname_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Pathname_Pattern(value, elGetter);
}


/* eslint-enable */
