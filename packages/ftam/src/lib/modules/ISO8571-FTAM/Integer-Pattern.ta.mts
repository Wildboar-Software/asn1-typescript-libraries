/* eslint-disable */
import {
  INTEGER,
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
  Relational_Comparision,
  _decode_Relational_Comparision,
  _encode_Relational_Comparision,
} from '../ISO8571-FTAM/Relational-Comparision.ta.mjs';

/**
 * @summary Integer_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integer-Pattern ::= SEQUENCE {
 *   relational-comparision  [0] IMPLICIT Relational-Comparision,
 *   integer-value           [1] IMPLICIT INTEGER
 * }
 * ```
 *
 * @class
 */
export class Integer_Pattern {
  constructor(
    /**
     * @summary `relational_comparision`.
     * @public
     * @readonly
     */
    readonly relational_comparision: Relational_Comparision,
    /**
     * @summary `integer_value`.
     * @public
     * @readonly
     */
    readonly integer_value: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a Integer_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Integer_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Integer_Pattern`.
   * @returns {Integer_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Integer_Pattern]: Integer_Pattern[_K] }
  ): Integer_Pattern {
    return new Integer_Pattern(_o.relational_comparision, _o.integer_value);
  }
}


/**
 * @summary The Leading Root Component Types of Integer_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Integer_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'relational-comparision',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'integer-value',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Integer_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Integer_Pattern: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Integer_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Integer_Pattern: $.ComponentSpec[] = [];


let _cached_decoder_for_Integer_Pattern: $.ASN1Decoder<Integer_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Integer_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Integer_Pattern} The decoded data structure.
 */
export function _decode_Integer_Pattern(el: _Element) {
  if (!_cached_decoder_for_Integer_Pattern) {
    _cached_decoder_for_Integer_Pattern = function (
      el: _Element
    ): Integer_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Integer-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'relational-comparision';
      sequence[1].name = 'integer-value';
      let relational_comparision!: Relational_Comparision;
      let integer_value!: INTEGER;
      relational_comparision = $._decode_implicit<Relational_Comparision>(
        () => _decode_Relational_Comparision
      )(sequence[0]);
      integer_value = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
        sequence[1]
      );
      return new Integer_Pattern(relational_comparision, integer_value);
    };
  }
  return _cached_decoder_for_Integer_Pattern(el);
}


let _cached_encoder_for_Integer_Pattern: $.ASN1Encoder<Integer_Pattern> | null = null;


/**
 * @summary Encodes a(n) Integer_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Integer_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Integer_Pattern(
  value: Integer_Pattern,
  elGetter: $.ASN1Encoder<Integer_Pattern>
) {
  if (!_cached_encoder_for_Integer_Pattern) {
    _cached_encoder_for_Integer_Pattern = function (
      value: Integer_Pattern    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Relational_Comparision,
              $.BER
            )(value.relational_comparision, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeInteger,
              $.BER
            )(value.integer_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Integer_Pattern(value, elGetter);
}


/* eslint-enable */
