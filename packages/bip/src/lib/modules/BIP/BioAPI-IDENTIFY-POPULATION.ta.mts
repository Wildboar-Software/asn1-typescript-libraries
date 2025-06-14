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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_IDENTIFY_POPULATION_birs,
  _decode_BioAPI_IDENTIFY_POPULATION_birs,
  _encode_BioAPI_IDENTIFY_POPULATION_birs,
} from '../BIP/BioAPI-IDENTIFY-POPULATION-birs.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BioAPI_IDENTIFY_POPULATION */
/**
 * @summary BioAPI_IDENTIFY_POPULATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-IDENTIFY-POPULATION ::= SEQUENCE {
 *   birs
 *     CHOICE {birDataBase     BioAPI-DB-HANDLE,
 *             birArray        BioAPI-BIR-ARRAY-POPULATION,
 *             birPresetArray  NULL}
 * }
 * ```
 *
 * @class
 */
export class BioAPI_IDENTIFY_POPULATION {
  constructor(
    /**
     * @summary `birs`.
     * @public
     * @readonly
     */
    readonly birs: BioAPI_IDENTIFY_POPULATION_birs
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_IDENTIFY_POPULATION
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_IDENTIFY_POPULATION`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_IDENTIFY_POPULATION`.
   * @returns {BioAPI_IDENTIFY_POPULATION}
   */
  public static _from_object(
    _o: {
      [_K in keyof BioAPI_IDENTIFY_POPULATION]: BioAPI_IDENTIFY_POPULATION[_K];
    }
  ): BioAPI_IDENTIFY_POPULATION {
    return new BioAPI_IDENTIFY_POPULATION(_o.birs);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_IDENTIFY_POPULATION */
/**
 * @summary The Leading Root Component Types of BioAPI_IDENTIFY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_IDENTIFY_POPULATION: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'birs',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_IDENTIFY_POPULATION */
/**
 * @summary The Trailing Root Component Types of BioAPI_IDENTIFY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_IDENTIFY_POPULATION: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_IDENTIFY_POPULATION */
/**
 * @summary The Extension Addition Component Types of BioAPI_IDENTIFY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_IDENTIFY_POPULATION: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_IDENTIFY_POPULATION */
let _cached_decoder_for_BioAPI_IDENTIFY_POPULATION: $.ASN1Decoder<BioAPI_IDENTIFY_POPULATION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_IDENTIFY_POPULATION */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_IDENTIFY_POPULATION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_IDENTIFY_POPULATION} The decoded data structure.
 */
export function _decode_BioAPI_IDENTIFY_POPULATION(el: _Element) {
  if (!_cached_decoder_for_BioAPI_IDENTIFY_POPULATION) {
    _cached_decoder_for_BioAPI_IDENTIFY_POPULATION = function (
      el: _Element
    ): BioAPI_IDENTIFY_POPULATION {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BioAPI-IDENTIFY-POPULATION contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'birs';
      let birs!: BioAPI_IDENTIFY_POPULATION_birs;
      birs = _decode_BioAPI_IDENTIFY_POPULATION_birs(sequence[0]);
      return new BioAPI_IDENTIFY_POPULATION(birs);
    };
  }
  return _cached_decoder_for_BioAPI_IDENTIFY_POPULATION(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_IDENTIFY_POPULATION */
let _cached_encoder_for_BioAPI_IDENTIFY_POPULATION: $.ASN1Encoder<BioAPI_IDENTIFY_POPULATION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_IDENTIFY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_IDENTIFY_POPULATION */
/**
 * @summary Encodes a(n) BioAPI_IDENTIFY_POPULATION into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_IDENTIFY_POPULATION, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_IDENTIFY_POPULATION(
  value: BioAPI_IDENTIFY_POPULATION,
  elGetter: $.ASN1Encoder<BioAPI_IDENTIFY_POPULATION>
) {
  if (!_cached_encoder_for_BioAPI_IDENTIFY_POPULATION) {
    _cached_encoder_for_BioAPI_IDENTIFY_POPULATION = function (
      value: BioAPI_IDENTIFY_POPULATION    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_IDENTIFY_POPULATION_birs(
              value.birs,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_IDENTIFY_POPULATION(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_IDENTIFY_POPULATION */

/* eslint-enable */
