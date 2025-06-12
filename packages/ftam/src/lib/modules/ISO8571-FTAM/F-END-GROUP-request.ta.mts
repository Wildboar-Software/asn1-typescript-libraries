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

/* START_OF_SYMBOL_DEFINITION F_END_GROUP_request */
/**
 * @summary F_END_GROUP_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-END-GROUP-request ::= SEQUENCE {
 * }
 * ```
 *
 * @class
 */
export class F_END_GROUP_request {
  constructor() {}

  /**
   * @summary Restructures an object into a F_END_GROUP_request
   * @description
   *
   * This takes an `object` and converts it to a `F_END_GROUP_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_END_GROUP_request`.
   * @returns {F_END_GROUP_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_END_GROUP_request]: F_END_GROUP_request[_K] }
  ): F_END_GROUP_request {
    return new F_END_GROUP_request();
  }
}
/* END_OF_SYMBOL_DEFINITION F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_END_GROUP_request */
/**
 * @summary The Leading Root Component Types of F_END_GROUP_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_END_GROUP_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_END_GROUP_request */
/**
 * @summary The Trailing Root Component Types of F_END_GROUP_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_END_GROUP_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_END_GROUP_request */
/**
 * @summary The Extension Addition Component Types of F_END_GROUP_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_END_GROUP_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_END_GROUP_request */
let _cached_decoder_for_F_END_GROUP_request: $.ASN1Decoder<F_END_GROUP_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_END_GROUP_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_END_GROUP_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_END_GROUP_request} The decoded data structure.
 */
export function _decode_F_END_GROUP_request(el: _Element) {
  if (!_cached_decoder_for_F_END_GROUP_request) {
    _cached_decoder_for_F_END_GROUP_request = function (
      el: _Element
    ): F_END_GROUP_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */

      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {};
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_END_GROUP_request,
        _extension_additions_list_spec_for_F_END_GROUP_request,
        _root_component_type_list_2_spec_for_F_END_GROUP_request,
        undefined
      );
      return new F_END_GROUP_request /* SEQUENCE_CONSTRUCTOR_CALL */();
    };
  }
  return _cached_decoder_for_F_END_GROUP_request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_END_GROUP_request */
let _cached_encoder_for_F_END_GROUP_request: $.ASN1Encoder<F_END_GROUP_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_END_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_END_GROUP_request */
/**
 * @summary Encodes a(n) F_END_GROUP_request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_END_GROUP_request, encoded as an ASN.1 Element.
 */
export function _encode_F_END_GROUP_request(
  value: F_END_GROUP_request,
  elGetter: $.ASN1Encoder<F_END_GROUP_request>
) {
  if (!_cached_encoder_for_F_END_GROUP_request) {
    _cached_encoder_for_F_END_GROUP_request = function (
      value: F_END_GROUP_request,
      elGetter: $.ASN1Encoder<F_END_GROUP_request>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat()
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_END_GROUP_request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_END_GROUP_request */

/* eslint-enable */
