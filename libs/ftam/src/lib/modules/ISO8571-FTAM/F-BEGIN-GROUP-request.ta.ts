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

/* START_OF_SYMBOL_DEFINITION F_BEGIN_GROUP_request */
/**
 * @summary F_BEGIN_GROUP_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-BEGIN-GROUP-request ::= SEQUENCE {threshold  [0] IMPLICIT INTEGER
 * }
 * ```
 *
 * @class
 */
export class F_BEGIN_GROUP_request {
  constructor(
    /**
     * @summary `threshold`.
     * @public
     * @readonly
     */
    readonly threshold: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a F_BEGIN_GROUP_request
   * @description
   *
   * This takes an `object` and converts it to a `F_BEGIN_GROUP_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_BEGIN_GROUP_request`.
   * @returns {F_BEGIN_GROUP_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_BEGIN_GROUP_request]: F_BEGIN_GROUP_request[_K] }
  ): F_BEGIN_GROUP_request {
    return new F_BEGIN_GROUP_request(_o.threshold);
  }
}
/* END_OF_SYMBOL_DEFINITION F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_BEGIN_GROUP_request */
/**
 * @summary The Leading Root Component Types of F_BEGIN_GROUP_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_BEGIN_GROUP_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'threshold',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_BEGIN_GROUP_request */
/**
 * @summary The Trailing Root Component Types of F_BEGIN_GROUP_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_BEGIN_GROUP_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_BEGIN_GROUP_request */
/**
 * @summary The Extension Addition Component Types of F_BEGIN_GROUP_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_BEGIN_GROUP_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_BEGIN_GROUP_request */
let _cached_decoder_for_F_BEGIN_GROUP_request: $.ASN1Decoder<F_BEGIN_GROUP_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_BEGIN_GROUP_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_BEGIN_GROUP_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_BEGIN_GROUP_request} The decoded data structure.
 */
export function _decode_F_BEGIN_GROUP_request(el: _Element) {
  if (!_cached_decoder_for_F_BEGIN_GROUP_request) {
    _cached_decoder_for_F_BEGIN_GROUP_request = function (
      el: _Element
    ): F_BEGIN_GROUP_request {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'F-BEGIN-GROUP-request contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'threshold';
      let threshold!: INTEGER;
      threshold = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
        sequence[0]
      );
      return new F_BEGIN_GROUP_request(threshold);
    };
  }
  return _cached_decoder_for_F_BEGIN_GROUP_request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_BEGIN_GROUP_request */
let _cached_encoder_for_F_BEGIN_GROUP_request: $.ASN1Encoder<F_BEGIN_GROUP_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_BEGIN_GROUP_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_BEGIN_GROUP_request */
/**
 * @summary Encodes a(n) F_BEGIN_GROUP_request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_BEGIN_GROUP_request, encoded as an ASN.1 Element.
 */
export function _encode_F_BEGIN_GROUP_request(
  value: F_BEGIN_GROUP_request,
  elGetter: $.ASN1Encoder<F_BEGIN_GROUP_request>
) {
  if (!_cached_encoder_for_F_BEGIN_GROUP_request) {
    _cached_encoder_for_F_BEGIN_GROUP_request = function (
      value: F_BEGIN_GROUP_request,
      elGetter: $.ASN1Encoder<F_BEGIN_GROUP_request>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeInteger,
              $.BER
            )(value.threshold, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_BEGIN_GROUP_request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_BEGIN_GROUP_request */

/* eslint-enable */
