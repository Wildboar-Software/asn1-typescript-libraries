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
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta';

/* START_OF_SYMBOL_DEFINITION CertificateType */
/**
 * @summary CertificateType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateType ::= SEQUENCE {
 *     encoding    String
 *     }
 * ```
 *
 * @class
 */
export class CertificateType {
  constructor(
    /**
     * @summary `encoding`.
     * @public
     * @readonly
     */
    readonly encoding: String
  ) {}

  /**
   * @summary Restructures an object into a CertificateType
   * @description
   *
   * This takes an `object` and converts it to a `CertificateType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertificateType`.
   * @returns {CertificateType}
   */
  public static _from_object(
    _o: { [_K in keyof CertificateType]: CertificateType[_K] }
  ): CertificateType {
    return new CertificateType(_o.encoding);
  }
}
/* END_OF_SYMBOL_DEFINITION CertificateType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateType */
/**
 * @summary The Leading Root Component Types of CertificateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateType: $.ComponentSpec[] = [
  /* FIXME: encoding COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateType */
/**
 * @summary The Trailing Root Component Types of CertificateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateType */
/**
 * @summary The Extension Addition Component Types of CertificateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateType */
let _cached_decoder_for_CertificateType: $.ASN1Decoder<CertificateType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateType */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateType} The decoded data structure.
 */
export function _decode_CertificateType(el: _Element) {
  if (!_cached_decoder_for_CertificateType) {
    _cached_decoder_for_CertificateType = function (
      el: _Element
    ): CertificateType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'CertificateType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'encoding';
      let encoding!: String;
      encoding = _decode_String(sequence[0]);
      return new CertificateType(encoding);
    };
  }
  return _cached_decoder_for_CertificateType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateType */
let _cached_encoder_for_CertificateType: $.ASN1Encoder<CertificateType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateType */
/**
 * @summary Encodes a(n) CertificateType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateType, encoded as an ASN.1 Element.
 */
export function _encode_CertificateType(
  value: CertificateType,
  elGetter: $.ASN1Encoder<CertificateType>
) {
  if (!_cached_encoder_for_CertificateType) {
    _cached_encoder_for_CertificateType = function (
      value: CertificateType,
      elGetter: $.ASN1Encoder<CertificateType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ _encode_String(value.encoding, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertificateType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateType */

/* eslint-enable */
