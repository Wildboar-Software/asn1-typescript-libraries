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
  RequestType,
  _decode_RequestType,
  _encode_RequestType,
} from '../CMAIL/RequestType.ta';
export {
  RequestType,
  _decode_RequestType,
  _encode_RequestType,
} from '../CMAIL/RequestType.ta';
import {
  ResponseType,
  _decode_ResponseType,
  _encode_ResponseType,
} from '../CMAIL/ResponseType.ta';
export {
  ResponseType,
  _decode_ResponseType,
  _encode_ResponseType,
} from '../CMAIL/ResponseType.ta';

/* START_OF_SYMBOL_DEFINITION SecretQuestionType */
/**
 * @summary SecretQuestionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecretQuestionType ::= SEQUENCE {
 *     request        RequestType,
 *     response    ResponseType
 *     }
 * ```
 *
 * @class
 */
export class SecretQuestionType {
  constructor(
    /**
     * @summary `request`.
     * @public
     * @readonly
     */
    readonly request: RequestType,
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: ResponseType
  ) {}

  /**
   * @summary Restructures an object into a SecretQuestionType
   * @description
   *
   * This takes an `object` and converts it to a `SecretQuestionType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SecretQuestionType`.
   * @returns {SecretQuestionType}
   */
  public static _from_object(
    _o: { [_K in keyof SecretQuestionType]: SecretQuestionType[_K] }
  ): SecretQuestionType {
    return new SecretQuestionType(_o.request, _o.response);
  }
}
/* END_OF_SYMBOL_DEFINITION SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecretQuestionType */
/**
 * @summary The Leading Root Component Types of SecretQuestionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecretQuestionType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'request',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecretQuestionType */
/**
 * @summary The Trailing Root Component Types of SecretQuestionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecretQuestionType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecretQuestionType */
/**
 * @summary The Extension Addition Component Types of SecretQuestionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecretQuestionType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecretQuestionType */
let _cached_decoder_for_SecretQuestionType: $.ASN1Decoder<SecretQuestionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _decode_SecretQuestionType */
/**
 * @summary Decodes an ASN.1 element into a(n) SecretQuestionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecretQuestionType} The decoded data structure.
 */
export function _decode_SecretQuestionType(el: _Element) {
  if (!_cached_decoder_for_SecretQuestionType) {
    _cached_decoder_for_SecretQuestionType = function (
      el: _Element
    ): SecretQuestionType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SecretQuestionType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'request';
      sequence[1].name = 'response';
      let request!: RequestType;
      let response!: ResponseType;
      request = _decode_RequestType(sequence[0]);
      response = _decode_ResponseType(sequence[1]);
      return new SecretQuestionType(request, response);
    };
  }
  return _cached_decoder_for_SecretQuestionType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecretQuestionType */
let _cached_encoder_for_SecretQuestionType: $.ASN1Encoder<SecretQuestionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecretQuestionType */

/* START_OF_SYMBOL_DEFINITION _encode_SecretQuestionType */
/**
 * @summary Encodes a(n) SecretQuestionType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecretQuestionType, encoded as an ASN.1 Element.
 */
export function _encode_SecretQuestionType(
  value: SecretQuestionType,
  elGetter: $.ASN1Encoder<SecretQuestionType>
) {
  if (!_cached_encoder_for_SecretQuestionType) {
    _cached_encoder_for_SecretQuestionType = function (
      value: SecretQuestionType,
      elGetter: $.ASN1Encoder<SecretQuestionType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_RequestType(value.request, $.BER),
            /* REQUIRED   */ _encode_ResponseType(value.response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SecretQuestionType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecretQuestionType */

/* eslint-enable */
