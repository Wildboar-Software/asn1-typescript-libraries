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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta';
export {
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta';

/* START_OF_SYMBOL_DEFINITION CharacterChunk */
/**
 * @summary CharacterChunk
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterChunk ::= SEQUENCE {character-codes  NonIdentifyingStringOrIndex
 * }
 * ```
 *
 * @class
 */
export class CharacterChunk {
  constructor(
    /**
     * @summary `character_codes`.
     * @public
     * @readonly
     */
    readonly character_codes: NonIdentifyingStringOrIndex
  ) {}

  /**
   * @summary Restructures an object into a CharacterChunk
   * @description
   *
   * This takes an `object` and converts it to a `CharacterChunk`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CharacterChunk`.
   * @returns {CharacterChunk}
   */
  public static _from_object(
    _o: { [_K in keyof CharacterChunk]: CharacterChunk[_K] }
  ): CharacterChunk {
    return new CharacterChunk(_o.character_codes);
  }
}
/* END_OF_SYMBOL_DEFINITION CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CharacterChunk */
/**
 * @summary The Leading Root Component Types of CharacterChunk
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CharacterChunk: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'character-codes',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CharacterChunk */
/**
 * @summary The Trailing Root Component Types of CharacterChunk
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CharacterChunk: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CharacterChunk */
/**
 * @summary The Extension Addition Component Types of CharacterChunk
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CharacterChunk: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterChunk */
let _cached_decoder_for_CharacterChunk: $.ASN1Decoder<CharacterChunk> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterChunk */
/**
 * @summary Decodes an ASN.1 element into a(n) CharacterChunk
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterChunk} The decoded data structure.
 */
export function _decode_CharacterChunk(el: _Element) {
  if (!_cached_decoder_for_CharacterChunk) {
    _cached_decoder_for_CharacterChunk = function (
      el: _Element
    ): CharacterChunk {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'CharacterChunk contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'character-codes';
      let character_codes!: NonIdentifyingStringOrIndex;
      character_codes = _decode_NonIdentifyingStringOrIndex(sequence[0]);
      return new CharacterChunk(character_codes);
    };
  }
  return _cached_decoder_for_CharacterChunk(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterChunk */
let _cached_encoder_for_CharacterChunk: $.ASN1Encoder<CharacterChunk> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterChunk */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterChunk */
/**
 * @summary Encodes a(n) CharacterChunk into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterChunk, encoded as an ASN.1 Element.
 */
export function _encode_CharacterChunk(
  value: CharacterChunk,
  elGetter: $.ASN1Encoder<CharacterChunk>
) {
  if (!_cached_encoder_for_CharacterChunk) {
    _cached_encoder_for_CharacterChunk = function (
      value: CharacterChunk,
      elGetter: $.ASN1Encoder<CharacterChunk>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_NonIdentifyingStringOrIndex(
              value.character_codes,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CharacterChunk(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CharacterChunk */

/* eslint-enable */
