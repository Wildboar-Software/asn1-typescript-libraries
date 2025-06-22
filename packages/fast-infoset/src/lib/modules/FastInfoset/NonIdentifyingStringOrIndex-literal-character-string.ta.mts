/* eslint-disable */
import {
  BOOLEAN,
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
  EncodedCharacterString,
  _decode_EncodedCharacterString,
  _encode_EncodedCharacterString,
} from '../FastInfoset/EncodedCharacterString.ta.mjs';
/**
 * @summary NonIdentifyingStringOrIndex_literal_character_string
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonIdentifyingStringOrIndex-literal-character-string ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class NonIdentifyingStringOrIndex_literal_character_string {
  constructor(
    /**
     * @summary `add_to_table`.
     * @public
     * @readonly
     */
    readonly add_to_table: BOOLEAN,
    /**
     * @summary `character_string`.
     * @public
     * @readonly
     */
    readonly character_string: EncodedCharacterString
  ) {}

  /**
   * @summary Restructures an object into a NonIdentifyingStringOrIndex_literal_character_string
   * @description
   *
   * This takes an `object` and converts it to a `NonIdentifyingStringOrIndex_literal_character_string`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NonIdentifyingStringOrIndex_literal_character_string`.
   * @returns {NonIdentifyingStringOrIndex_literal_character_string}
   */
  public static _from_object(
    _o: {
      [_K in keyof NonIdentifyingStringOrIndex_literal_character_string]: NonIdentifyingStringOrIndex_literal_character_string[_K];
    }
  ): NonIdentifyingStringOrIndex_literal_character_string {
    return new NonIdentifyingStringOrIndex_literal_character_string(
      _o.add_to_table,
      _o.character_string
    );
  }
}

/**
 * @summary The Leading Root Component Types of NonIdentifyingStringOrIndex_literal_character_string
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonIdentifyingStringOrIndex_literal_character_string: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'add-to-table',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'character-string',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];

/**
 * @summary The Trailing Root Component Types of NonIdentifyingStringOrIndex_literal_character_string
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonIdentifyingStringOrIndex_literal_character_string: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NonIdentifyingStringOrIndex_literal_character_string
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonIdentifyingStringOrIndex_literal_character_string: $.ComponentSpec[] = [];

let _cached_decoder_for_NonIdentifyingStringOrIndex_literal_character_string: $.ASN1Decoder<NonIdentifyingStringOrIndex_literal_character_string> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonIdentifyingStringOrIndex_literal_character_string
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonIdentifyingStringOrIndex_literal_character_string} The decoded data structure.
 */
export function _decode_NonIdentifyingStringOrIndex_literal_character_string(
  el: _Element
) {
  if (
    !_cached_decoder_for_NonIdentifyingStringOrIndex_literal_character_string
  ) {
    _cached_decoder_for_NonIdentifyingStringOrIndex_literal_character_string = function (
      el: _Element
    ): NonIdentifyingStringOrIndex_literal_character_string {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NonIdentifyingStringOrIndex-literal-character-string contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'add-to-table';
      sequence[1].name = 'character-string';
      let add_to_table!: BOOLEAN;
      let character_string!: EncodedCharacterString;
      add_to_table = $._decodeBoolean(sequence[0]);
      character_string = _decode_EncodedCharacterString(sequence[1]);
      return new NonIdentifyingStringOrIndex_literal_character_string(
        add_to_table,
        character_string
      );
    };
  }
  return _cached_decoder_for_NonIdentifyingStringOrIndex_literal_character_string(
    el
  );
}

let _cached_encoder_for_NonIdentifyingStringOrIndex_literal_character_string: $.ASN1Encoder<NonIdentifyingStringOrIndex_literal_character_string> | null = null;

/**
 * @summary Encodes a(n) NonIdentifyingStringOrIndex_literal_character_string into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonIdentifyingStringOrIndex_literal_character_string, encoded as an ASN.1 Element.
 */
export function _encode_NonIdentifyingStringOrIndex_literal_character_string(
  value: NonIdentifyingStringOrIndex_literal_character_string,
  elGetter: $.ASN1Encoder<NonIdentifyingStringOrIndex_literal_character_string>
) {
  if (
    !_cached_encoder_for_NonIdentifyingStringOrIndex_literal_character_string
  ) {
    _cached_encoder_for_NonIdentifyingStringOrIndex_literal_character_string = function (
      value: NonIdentifyingStringOrIndex_literal_character_string    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeBoolean(value.add_to_table, $.BER),
            /* REQUIRED   */ _encode_EncodedCharacterString(
              value.character_string,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NonIdentifyingStringOrIndex_literal_character_string(
    value,
    elGetter
  );
}


/* eslint-enable */
