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
import { Extension_attribute_Patterns } from '../ISO8571-FTAM/Extension-attribute-Patterns.osa';
export { Extension_attribute_Patterns } from '../ISO8571-FTAM/Extension-attribute-Patterns.osa';

/* START_OF_SYMBOL_DEFINITION Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
/**
 * @summary Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extensions-Pattern-Item-extension-set-attribute-Patterns-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item {
  constructor(
    /**
     * @summary `extension_attribute_identifier`.
     * @public
     * @readonly
     */
    readonly extension_attribute_identifier: OBJECT_IDENTIFIER,
    /**
     * @summary `extension_attribute_Pattern`.
     * @public
     * @readonly
     */
    readonly extension_attribute_Pattern: _Element
  ) {}

  /**
   * @summary Restructures an object into a Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
   * @description
   *
   * This takes an `object` and converts it to a `Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item`.
   * @returns {Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item}
   */
  public static _from_object(
    _o: {
      [_K in keyof Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item]: Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item[_K];
    }
  ): Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item {
    return new Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item(
      _o.extension_attribute_identifier,
      _o.extension_attribute_Pattern
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
/**
 * @summary The Leading Root Component Types of Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'extension-attribute-identifier',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extension-attribute-Pattern',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
/**
 * @summary The Trailing Root Component Types of Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
/**
 * @summary The Extension Addition Component Types of Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
let _cached_decoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item: $.ASN1Decoder<Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item} The decoded data structure.
 */
export function _decode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item(
  el: _Element
) {
  if (
    !_cached_decoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
  ) {
    _cached_decoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item = function (
      el: _Element
    ): Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Attribute-Extensions-Pattern-Item-extension-set-attribute-Patterns-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'extension-attribute-identifier';
      sequence[1].name = 'extension-attribute-Pattern';
      let extension_attribute_identifier!: OBJECT_IDENTIFIER;
      let extension_attribute_Pattern!: _Element;
      extension_attribute_identifier = $._decodeObjectIdentifier(sequence[0]);
      extension_attribute_Pattern = $._decodeAny(sequence[1]);
      return new Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item(
        extension_attribute_identifier,
        extension_attribute_Pattern
      );
    };
  }
  return _cached_decoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item(
    el
  );
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
let _cached_encoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item: $.ASN1Encoder<Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */
/**
 * @summary Encodes a(n) Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item(
  value: Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item,
  elGetter: $.ASN1Encoder<Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item>
) {
  if (
    !_cached_encoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item
  ) {
    _cached_encoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item = function (
      value: Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item,
      elGetter: $.ASN1Encoder<Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.extension_attribute_identifier,
              $.BER
            ),
            /* REQUIRED   */ $._encodeAny(
              value.extension_attribute_Pattern,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions_Pattern_Item_extension_set_attribute_Patterns_Item */

/* eslint-enable */
