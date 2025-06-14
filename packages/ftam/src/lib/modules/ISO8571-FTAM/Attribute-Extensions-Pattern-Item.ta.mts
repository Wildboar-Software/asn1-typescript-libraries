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
  Extension_Set_Identifier,
  _decode_Extension_Set_Identifier,
  _encode_Extension_Set_Identifier,
} from '../ISO8571-FTAM/Extension-Set-Identifier.ta.mjs';
import {
  Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item,
  _decode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item,
  _encode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item,
} from '../ISO8571-FTAM/Attribute-Extensions-Pattern-Item-extension-set-attribute-Patterns-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Attribute_Extensions_Pattern_Item */
/**
 * @summary Attribute_Extensions_Pattern_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extensions-Pattern-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Attribute_Extensions_Pattern_Item {
  constructor(
    /**
     * @summary `extension_set_identifier`.
     * @public
     * @readonly
     */
    readonly extension_set_identifier: Extension_Set_Identifier,
    /**
     * @summary `extension_set_attribute_Patterns`.
     * @public
     * @readonly
     */
    readonly extension_set_attribute_Patterns: Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item[]
  ) {}

  /**
   * @summary Restructures an object into a Attribute_Extensions_Pattern_Item
   * @description
   *
   * This takes an `object` and converts it to a `Attribute_Extensions_Pattern_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Attribute_Extensions_Pattern_Item`.
   * @returns {Attribute_Extensions_Pattern_Item}
   */
  public static _from_object(
    _o: {
      [_K in keyof Attribute_Extensions_Pattern_Item]: Attribute_Extensions_Pattern_Item[_K];
    }
  ): Attribute_Extensions_Pattern_Item {
    return new Attribute_Extensions_Pattern_Item(
      _o.extension_set_identifier,
      _o.extension_set_attribute_Patterns
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extensions_Pattern_Item */
/**
 * @summary The Leading Root Component Types of Attribute_Extensions_Pattern_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute_Extensions_Pattern_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'extension-set-identifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extension-set-attribute-Patterns',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extensions_Pattern_Item */
/**
 * @summary The Trailing Root Component Types of Attribute_Extensions_Pattern_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute_Extensions_Pattern_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extensions_Pattern_Item */
/**
 * @summary The Extension Addition Component Types of Attribute_Extensions_Pattern_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute_Extensions_Pattern_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions_Pattern_Item */
let _cached_decoder_for_Attribute_Extensions_Pattern_Item: $.ASN1Decoder<Attribute_Extensions_Pattern_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions_Pattern_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extensions_Pattern_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extensions_Pattern_Item} The decoded data structure.
 */
export function _decode_Attribute_Extensions_Pattern_Item(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extensions_Pattern_Item) {
    _cached_decoder_for_Attribute_Extensions_Pattern_Item = function (
      el: _Element
    ): Attribute_Extensions_Pattern_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Attribute-Extensions-Pattern-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'extension-set-identifier';
      sequence[1].name = 'extension-set-attribute-Patterns';
      let extension_set_identifier!: Extension_Set_Identifier;
      let extension_set_attribute_Patterns!: Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item[];
      extension_set_identifier = $._decode_implicit<Extension_Set_Identifier>(
        () => _decode_Extension_Set_Identifier
      )(sequence[0]);
      extension_set_attribute_Patterns = $._decode_implicit<
        Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item[]
      >(() =>
        $._decodeSequenceOf<Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item>(
          () =>
            _decode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
        )
      )(sequence[1]);
      return new Attribute_Extensions_Pattern_Item(
        extension_set_identifier,
        extension_set_attribute_Patterns
      );
    };
  }
  return _cached_decoder_for_Attribute_Extensions_Pattern_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions_Pattern_Item */
let _cached_encoder_for_Attribute_Extensions_Pattern_Item: $.ASN1Encoder<Attribute_Extensions_Pattern_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions_Pattern_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions_Pattern_Item */
/**
 * @summary Encodes a(n) Attribute_Extensions_Pattern_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extensions_Pattern_Item, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extensions_Pattern_Item(
  value: Attribute_Extensions_Pattern_Item,
  elGetter: $.ASN1Encoder<Attribute_Extensions_Pattern_Item>
) {
  if (!_cached_encoder_for_Attribute_Extensions_Pattern_Item) {
    _cached_encoder_for_Attribute_Extensions_Pattern_Item = function (
      value: Attribute_Extensions_Pattern_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Extension_Set_Identifier,
              $.BER
            )(value.extension_set_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () =>
                $._encodeSequenceOf<Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item>(
                  () =>
                    _encode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item,
                  $.BER
                ),
              $.BER
            )(value.extension_set_attribute_Patterns, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Attribute_Extensions_Pattern_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions_Pattern_Item */

/* eslint-enable */
