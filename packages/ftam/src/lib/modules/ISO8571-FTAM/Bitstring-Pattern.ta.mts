/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary Bitstring_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bitstring-Pattern ::= SEQUENCE {
 *   equality-comparision    [0] IMPLICIT Equality-Comparision,
 *   match-bitstring         [1] IMPLICIT BIT STRING,
 *   significance-bitstring  [2] IMPLICIT BIT STRING
 * }
 * ```
 *
 */
export class Bitstring_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `match_bitstring`.
     * @public
     * @readonly
     */
    readonly match_bitstring: BIT_STRING,
    /**
     * @summary `significance_bitstring`.
     * @public
     * @readonly
     */
    readonly significance_bitstring: BIT_STRING
  ) {}

  /**
   * @summary Restructures an object into a Bitstring_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Bitstring_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Bitstring_Pattern`.
   * @returns {Bitstring_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Bitstring_Pattern]: Bitstring_Pattern[_K] }
  ): Bitstring_Pattern {
    return new Bitstring_Pattern(
      _o.equality_comparision,
      _o.match_bitstring,
      _o.significance_bitstring
    );
  }
}


/**
 * @summary The Leading Root Component Types of Bitstring_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Bitstring_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'match-bitstring',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'significance-bitstring',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of Bitstring_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Bitstring_Pattern: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Bitstring_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Bitstring_Pattern: $.ComponentSpec[] = [];


let _cached_decoder_for_Bitstring_Pattern: $.ASN1Decoder<Bitstring_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Bitstring_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bitstring_Pattern} The decoded data structure.
 */
export function _decode_Bitstring_Pattern(el: _Element): Bitstring_Pattern {
  if (!_cached_decoder_for_Bitstring_Pattern) {
    _cached_decoder_for_Bitstring_Pattern = function (
      el: _Element
    ): Bitstring_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'Bitstring-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'match-bitstring';
      sequence[2].name = 'significance-bitstring';
      let equality_comparision!: Equality_Comparision;
      let match_bitstring!: BIT_STRING;
      let significance_bitstring!: BIT_STRING;
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      match_bitstring = $._decode_implicit<BIT_STRING>(
        () => $._decodeBitString
      )(sequence[1]);
      significance_bitstring = $._decode_implicit<BIT_STRING>(
        () => $._decodeBitString
      )(sequence[2]);
      return new Bitstring_Pattern(
        equality_comparision,
        match_bitstring,
        significance_bitstring
      );
    };
  }
  return _cached_decoder_for_Bitstring_Pattern(el);
}


let _cached_encoder_for_Bitstring_Pattern: $.ASN1Encoder<Bitstring_Pattern> | null = null;


/**
 * @summary Encodes a(n) Bitstring_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bitstring_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Bitstring_Pattern(
  value: Bitstring_Pattern,
  elGetter: $.ASN1Encoder<Bitstring_Pattern>
): _Element {
  if (!_cached_encoder_for_Bitstring_Pattern) {
    _cached_encoder_for_Bitstring_Pattern = function (
      value: Bitstring_Pattern    ): _Element {
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
              () => $._encodeBitString,
              $.BER
            )(value.match_bitstring, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              2,
              () => $._encodeBitString,
              $.BER
            )(value.significance_bitstring, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Bitstring_Pattern(value, elGetter);
}


/* eslint-enable */
