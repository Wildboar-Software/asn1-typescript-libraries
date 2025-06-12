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

/* START_OF_SYMBOL_DEFINITION F_CHECK_request */
/**
 * @summary F_CHECK_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CHECK-request ::= SEQUENCE {
 *   checkpoint-identifier  [0] IMPLICIT INTEGER,
 *   transfer-number        [1] IMPLICIT INTEGER
 * }
 * ```
 *
 * @class
 */
export class F_CHECK_request {
  constructor(
    /**
     * @summary `checkpoint_identifier`.
     * @public
     * @readonly
     */
    readonly checkpoint_identifier: INTEGER,
    /**
     * @summary `transfer_number`.
     * @public
     * @readonly
     */
    readonly transfer_number: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a F_CHECK_request
   * @description
   *
   * This takes an `object` and converts it to a `F_CHECK_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CHECK_request`.
   * @returns {F_CHECK_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_CHECK_request]: F_CHECK_request[_K] }
  ): F_CHECK_request {
    return new F_CHECK_request(_o.checkpoint_identifier, _o.transfer_number);
  }
}
/* END_OF_SYMBOL_DEFINITION F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CHECK_request */
/**
 * @summary The Leading Root Component Types of F_CHECK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CHECK_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'checkpoint-identifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'transfer-number',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CHECK_request */
/**
 * @summary The Trailing Root Component Types of F_CHECK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CHECK_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CHECK_request */
/**
 * @summary The Extension Addition Component Types of F_CHECK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CHECK_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CHECK_request */
let _cached_decoder_for_F_CHECK_request: $.ASN1Decoder<F_CHECK_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_CHECK_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_CHECK_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CHECK_request} The decoded data structure.
 */
export function _decode_F_CHECK_request(el: _Element) {
  if (!_cached_decoder_for_F_CHECK_request) {
    _cached_decoder_for_F_CHECK_request = function (
      el: _Element
    ): F_CHECK_request {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'F-CHECK-request contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'checkpoint-identifier';
      sequence[1].name = 'transfer-number';
      let checkpoint_identifier!: INTEGER;
      let transfer_number!: INTEGER;
      checkpoint_identifier = $._decode_implicit<INTEGER>(
        () => $._decodeInteger
      )(sequence[0]);
      transfer_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
        sequence[1]
      );
      return new F_CHECK_request(checkpoint_identifier, transfer_number);
    };
  }
  return _cached_decoder_for_F_CHECK_request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CHECK_request */
let _cached_encoder_for_F_CHECK_request: $.ASN1Encoder<F_CHECK_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CHECK_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_CHECK_request */
/**
 * @summary Encodes a(n) F_CHECK_request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CHECK_request, encoded as an ASN.1 Element.
 */
export function _encode_F_CHECK_request(
  value: F_CHECK_request,
  elGetter: $.ASN1Encoder<F_CHECK_request>
) {
  if (!_cached_encoder_for_F_CHECK_request) {
    _cached_encoder_for_F_CHECK_request = function (
      value: F_CHECK_request,
      elGetter: $.ASN1Encoder<F_CHECK_request>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeInteger,
              $.BER
            )(value.checkpoint_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeInteger,
              $.BER
            )(value.transfer_number, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_CHECK_request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_CHECK_request */

/* eslint-enable */
