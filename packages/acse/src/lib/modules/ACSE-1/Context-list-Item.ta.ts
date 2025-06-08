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
  Presentation_context_identifier,
  _decode_Presentation_context_identifier,
  _encode_Presentation_context_identifier,
} from '../ACSE-1/Presentation-context-identifier.ta';
export {
  Presentation_context_identifier,
  _decode_Presentation_context_identifier,
  _encode_Presentation_context_identifier,
} from '../ACSE-1/Presentation-context-identifier.ta';
import {
  Abstract_syntax_name,
  _decode_Abstract_syntax_name,
  _encode_Abstract_syntax_name,
} from '../ACSE-1/Abstract-syntax-name.ta';
export {
  Abstract_syntax_name,
  _decode_Abstract_syntax_name,
  _encode_Abstract_syntax_name,
} from '../ACSE-1/Abstract-syntax-name.ta';
import {
  Transfer_syntax_name,
  _decode_Transfer_syntax_name,
  _encode_Transfer_syntax_name,
} from '../ACSE-1/Transfer-syntax-name.ta';
export {
  Transfer_syntax_name,
  _decode_Transfer_syntax_name,
  _encode_Transfer_syntax_name,
} from '../ACSE-1/Transfer-syntax-name.ta';

/* START_OF_SYMBOL_DEFINITION Context_list_Item */
/**
 * @summary Context_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Context_list_Item {
  constructor(
    /**
     * @summary `pci`.
     * @public
     * @readonly
     */
    readonly pci: Presentation_context_identifier,
    /**
     * @summary `abstract_syntax`.
     * @public
     * @readonly
     */
    readonly abstract_syntax: Abstract_syntax_name,
    /**
     * @summary `transfer_syntaxes`.
     * @public
     * @readonly
     */
    readonly transfer_syntaxes: Transfer_syntax_name[]
  ) {}

  /**
   * @summary Restructures an object into a Context_list_Item
   * @description
   *
   * This takes an `object` and converts it to a `Context_list_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Context_list_Item`.
   * @returns {Context_list_Item}
   */
  public static _from_object(
    _o: { [_K in keyof Context_list_Item]: Context_list_Item[_K] }
  ): Context_list_Item {
    return new Context_list_Item(
      _o.pci,
      _o.abstract_syntax,
      _o.transfer_syntaxes
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Context_list_Item */
/**
 * @summary The Leading Root Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context_list_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pci',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'abstract-syntax',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'transfer-syntaxes',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Context_list_Item */
/**
 * @summary The Trailing Root Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Context_list_Item */
/**
 * @summary The Extension Addition Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Context_list_Item */
let _cached_decoder_for_Context_list_Item: $.ASN1Decoder<Context_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Context_list_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Context_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_list_Item} The decoded data structure.
 */
export function _decode_Context_list_Item(el: _Element) {
  if (!_cached_decoder_for_Context_list_Item) {
    _cached_decoder_for_Context_list_Item = function (
      el: _Element
    ): Context_list_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'Context-list-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'pci';
      sequence[1].name = 'abstract-syntax';
      sequence[2].name = 'transfer-syntaxes';
      let pci!: Presentation_context_identifier;
      let abstract_syntax!: Abstract_syntax_name;
      let transfer_syntaxes!: Transfer_syntax_name[];
      pci = _decode_Presentation_context_identifier(sequence[0]);
      abstract_syntax = _decode_Abstract_syntax_name(sequence[1]);
      transfer_syntaxes = $._decodeSequenceOf<Transfer_syntax_name>(
        () => _decode_Transfer_syntax_name
      )(sequence[2]);
      return new Context_list_Item(pci, abstract_syntax, transfer_syntaxes);
    };
  }
  return _cached_decoder_for_Context_list_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Context_list_Item */
let _cached_encoder_for_Context_list_Item: $.ASN1Encoder<Context_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Context_list_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Context_list_Item */
/**
 * @summary Encodes a(n) Context_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Context_list_Item(
  value: Context_list_Item,
  elGetter: $.ASN1Encoder<Context_list_Item>
) {
  if (!_cached_encoder_for_Context_list_Item) {
    _cached_encoder_for_Context_list_Item = function (
      value: Context_list_Item,
      elGetter: $.ASN1Encoder<Context_list_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Presentation_context_identifier(
              value.pci,
              $.BER
            ),
            /* REQUIRED   */ _encode_Abstract_syntax_name(
              value.abstract_syntax,
              $.BER
            ),
            /* REQUIRED   */ $._encodeSequenceOf<Transfer_syntax_name>(
              () => _encode_Transfer_syntax_name,
              $.BER
            )(value.transfer_syntaxes, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Context_list_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Context_list_Item */

/* eslint-enable */
