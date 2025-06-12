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
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.js';
export {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.js';

/* START_OF_SYMBOL_DEFINITION Select_Attributes */
/**
 * @summary Select_Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Select-Attributes ::= [APPLICATION 19] IMPLICIT SEQUENCE {
 *   -- Kerne1 Group
 *   pathname  Pathname-Attribute
 * }
 * ```
 *
 * @class
 */
export class Select_Attributes {
  constructor(
    /**
     * @summary `pathname`.
     * @public
     * @readonly
     */
    readonly pathname: Pathname_Attribute
  ) {}

  /**
   * @summary Restructures an object into a Select_Attributes
   * @description
   *
   * This takes an `object` and converts it to a `Select_Attributes`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Select_Attributes`.
   * @returns {Select_Attributes}
   */
  public static _from_object(
    _o: { [_K in keyof Select_Attributes]: Select_Attributes[_K] }
  ): Select_Attributes {
    return new Select_Attributes(_o.pathname);
  }
}
/* END_OF_SYMBOL_DEFINITION Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Select_Attributes */
/**
 * @summary The Leading Root Component Types of Select_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Select_Attributes: $.ComponentSpec[] = [
  new $.ComponentSpec('pathname', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Select_Attributes */
/**
 * @summary The Trailing Root Component Types of Select_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Select_Attributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Select_Attributes */
/**
 * @summary The Extension Addition Component Types of Select_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Select_Attributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Select_Attributes */
let _cached_decoder_for_Select_Attributes: $.ASN1Decoder<Select_Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _decode_Select_Attributes */
/**
 * @summary Decodes an ASN.1 element into a(n) Select_Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Select_Attributes} The decoded data structure.
 */
export function _decode_Select_Attributes(el: _Element) {
  if (!_cached_decoder_for_Select_Attributes) {
    _cached_decoder_for_Select_Attributes = $._decode_implicit<Select_Attributes>(
      () =>
        function (el: _Element): Select_Attributes {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 1) {
            throw new _ConstructionError(
              'Select-Attributes contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pathname';
          let pathname!: Pathname_Attribute;
          pathname = _decode_Pathname_Attribute(sequence[0]);
          return new Select_Attributes(pathname);
        }
    );
  }
  return _cached_decoder_for_Select_Attributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Select_Attributes */
let _cached_encoder_for_Select_Attributes: $.ASN1Encoder<Select_Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Select_Attributes */

/* START_OF_SYMBOL_DEFINITION _encode_Select_Attributes */
/**
 * @summary Encodes a(n) Select_Attributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Select_Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Select_Attributes(
  value: Select_Attributes,
  elGetter: $.ASN1Encoder<Select_Attributes>
) {
  if (!_cached_encoder_for_Select_Attributes) {
    _cached_encoder_for_Select_Attributes = $._encode_implicit(
      _TagClass.application,
      19,
      () =>
        function (
          value: Select_Attributes,
          elGetter: $.ASN1Encoder<Select_Attributes>
        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ _encode_Pathname_Attribute(
                  value.pathname,
                  $.BER
                ),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Select_Attributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Select_Attributes */

/* eslint-enable */
