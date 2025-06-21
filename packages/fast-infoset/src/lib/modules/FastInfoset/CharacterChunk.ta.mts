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
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta.mjs';
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
    $.hasTag(_TagClass.context, 0)
  ),
];

/**
 * @summary The Trailing Root Component Types of CharacterChunk
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CharacterChunk: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CharacterChunk
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CharacterChunk: $.ComponentSpec[] = [];

let _cached_decoder_for_CharacterChunk: $.ASN1Decoder<CharacterChunk> | null = null;

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

let _cached_encoder_for_CharacterChunk: $.ASN1Encoder<CharacterChunk> | null = null;

/**
 * @summary Encodes a(n) CharacterChunk into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterChunk, encoded as an ASN.1 Element.
 */
export function _encode_CharacterChunk(
  value: CharacterChunk,
  elGetter: $.ASN1Encoder<CharacterChunk>
) {
  if (!_cached_encoder_for_CharacterChunk) {
    _cached_encoder_for_CharacterChunk = function (
      value: CharacterChunk    ): _Element {
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


/* eslint-enable */
