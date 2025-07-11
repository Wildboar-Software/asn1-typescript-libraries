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
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.mjs';

/**
 * @summary BioAPI_BIR_ARRAY_POPULATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-ARRAY-POPULATION ::= SEQUENCE {
 *   members  SEQUENCE (SIZE (0..max-unsigned-int)) OF member BioAPI-BIR
 * }
 * ```
 *
 */
export class BioAPI_BIR_ARRAY_POPULATION {
  constructor(
    /**
     * @summary `members`.
     * @public
     * @readonly
     */
    readonly members: BioAPI_BIR[]
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR_ARRAY_POPULATION
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR_ARRAY_POPULATION`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR_ARRAY_POPULATION`.
   * @returns {BioAPI_BIR_ARRAY_POPULATION}
   */
  public static _from_object(
    _o: {
      [_K in keyof BioAPI_BIR_ARRAY_POPULATION]: BioAPI_BIR_ARRAY_POPULATION[_K];
    }
  ): BioAPI_BIR_ARRAY_POPULATION {
    return new BioAPI_BIR_ARRAY_POPULATION(_o.members);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_BIR_ARRAY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR_ARRAY_POPULATION: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'members',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_ARRAY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_ARRAY_POPULATION: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_ARRAY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_ARRAY_POPULATION: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION: $.ASN1Decoder<BioAPI_BIR_ARRAY_POPULATION> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_ARRAY_POPULATION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_ARRAY_POPULATION} The decoded data structure.
 */
export function _decode_BioAPI_BIR_ARRAY_POPULATION(el: _Element): BioAPI_BIR_ARRAY_POPULATION {
  if (!_cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION) {
    _cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION = function (
      el: _Element
    ): BioAPI_BIR_ARRAY_POPULATION {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BioAPI-BIR-ARRAY-POPULATION contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'members';
      let members!: BioAPI_BIR[];
      members = $._decodeSequenceOf<BioAPI_BIR>(() => _decode_BioAPI_BIR)(
        sequence[0]
      );
      return new BioAPI_BIR_ARRAY_POPULATION(members);
    };
  }
  return _cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION(el);
}


let _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION: $.ASN1Encoder<BioAPI_BIR_ARRAY_POPULATION> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BIR_ARRAY_POPULATION into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_ARRAY_POPULATION, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_ARRAY_POPULATION(
  value: BioAPI_BIR_ARRAY_POPULATION,
  elGetter: $.ASN1Encoder<BioAPI_BIR_ARRAY_POPULATION>
): _Element {
  if (!_cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION) {
    _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION = function (
      value: BioAPI_BIR_ARRAY_POPULATION    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BIR>(
              () => _encode_BioAPI_BIR,
              $.BER
            )(value.members, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION(value, elGetter);
}


/* eslint-enable */
