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
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta.mjs';
export {
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Text */
/**
 * @summary Text
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Text ::= SEQUENCE {lang  Language,
 *                    text  UTF8String
 * }
 * ```
 *
 * @class
 */
export class Text {
  constructor(
    /**
     * @summary `lang`.
     * @public
     * @readonly
     */
    readonly lang: Language,
    /**
     * @summary `text`.
     * @public
     * @readonly
     */
    readonly text: UTF8String
  ) {}

  /**
   * @summary Restructures an object into a Text
   * @description
   *
   * This takes an `object` and converts it to a `Text`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Text`.
   * @returns {Text}
   */
  public static _from_object(_o: { [_K in keyof Text]: Text[_K] }): Text {
    return new Text(_o.lang, _o.text);
  }
}
/* END_OF_SYMBOL_DEFINITION Text */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Text */
/**
 * @summary The Leading Root Component Types of Text
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Text: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'lang',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'text',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Text */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Text */
/**
 * @summary The Trailing Root Component Types of Text
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Text: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Text */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Text */
/**
 * @summary The Extension Addition Component Types of Text
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Text: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Text */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Text */
let _cached_decoder_for_Text: $.ASN1Decoder<Text> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Text */

/* START_OF_SYMBOL_DEFINITION _decode_Text */
/**
 * @summary Decodes an ASN.1 element into a(n) Text
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Text} The decoded data structure.
 */
export function _decode_Text(el: _Element) {
  if (!_cached_decoder_for_Text) {
    _cached_decoder_for_Text = function (el: _Element): Text {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Text contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'lang';
      sequence[1].name = 'text';
      let lang!: Language;
      let text!: UTF8String;
      lang = _decode_Language(sequence[0]);
      text = $._decodeUTF8String(sequence[1]);
      return new Text(lang, text);
    };
  }
  return _cached_decoder_for_Text(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Text */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Text */
let _cached_encoder_for_Text: $.ASN1Encoder<Text> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Text */

/* START_OF_SYMBOL_DEFINITION _encode_Text */
/**
 * @summary Encodes a(n) Text into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Text, encoded as an ASN.1 Element.
 */
export function _encode_Text(value: Text, elGetter: $.ASN1Encoder<Text>) {
  if (!_cached_encoder_for_Text) {
    _cached_encoder_for_Text = function (
      value: Text,
      elGetter: $.ASN1Encoder<Text>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Language(value.lang, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.text, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Text(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Text */

/* eslint-enable */
