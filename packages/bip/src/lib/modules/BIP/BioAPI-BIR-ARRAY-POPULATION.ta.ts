/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.js';
export {
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.js';

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_ARRAY_POPULATION */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BIR_ARRAY_POPULATION */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BIR_ARRAY_POPULATION */
/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_ARRAY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_ARRAY_POPULATION: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BIR_ARRAY_POPULATION */
/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_ARRAY_POPULATION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_ARRAY_POPULATION: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION */
let _cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION: $.ASN1Decoder<BioAPI_BIR_ARRAY_POPULATION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_ARRAY_POPULATION */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_ARRAY_POPULATION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_ARRAY_POPULATION} The decoded data structure.
 */
export function _decode_BioAPI_BIR_ARRAY_POPULATION(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION */
let _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION: $.ASN1Encoder<BioAPI_BIR_ARRAY_POPULATION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_ARRAY_POPULATION */
/**
 * @summary Encodes a(n) BioAPI_BIR_ARRAY_POPULATION into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_ARRAY_POPULATION, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_ARRAY_POPULATION(
  value: BioAPI_BIR_ARRAY_POPULATION,
  elGetter: $.ASN1Encoder<BioAPI_BIR_ARRAY_POPULATION>
) {
  if (!_cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION) {
    _cached_encoder_for_BioAPI_BIR_ARRAY_POPULATION = function (
      value: BioAPI_BIR_ARRAY_POPULATION,
      elGetter: $.ASN1Encoder<BioAPI_BIR_ARRAY_POPULATION>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_ARRAY_POPULATION */

/* eslint-enable */
