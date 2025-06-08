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

/* START_OF_SYMBOL_DEFINITION GenericTimeTypeChoice */
/**
 * @summary GenericTimeTypeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericTimeTypeChoice {BasicType, Alternative}  ::=  CHOICE {
 *            asn1supportedvalue    BasicType,
 *         othervalues            Alternative}
 *         (CONSTRAINED BY
 *              {/ * The "othervalues" alternative shall not be used for abstract
 *                  values in the "asn1supportedvalue" alternative * /})
 * ```
 */
export type GenericTimeTypeChoice<BasicType, Alternative> =
  | { asn1supportedvalue: BasicType } /* CHOICE_ALT_ROOT */
  | { othervalues: Alternative } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION GenericTimeTypeChoice */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_GenericTimeTypeChoice */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) GenericTimeTypeChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_GenericTimeTypeChoice<BasicType, Alternative>(
  _decode_BasicType: $.ASN1Decoder<BasicType>,
  _decode_Alternative: $.ASN1Decoder<Alternative>
) {
  return $._decode_inextensible_choice<
    GenericTimeTypeChoice<BasicType, Alternative>
  >({
    'CONTEXT 0': ['asn1supportedvalue', _decode_BasicType],
    'CONTEXT 1': ['othervalues', _decode_Alternative],
  });
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_GenericTimeTypeChoice */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_GenericTimeTypeChoice */
/**
 * @summary Returns a function that will encode a(n) GenericTimeTypeChoice into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) GenericTimeTypeChoice as an ASN.1 element.
 */
export function _get_encoder_for_GenericTimeTypeChoice<BasicType, Alternative>(
  _encode_BasicType: $.ASN1Encoder<BasicType>,
  _encode_Alternative: $.ASN1Encoder<Alternative>
) {
  return $._encode_choice<GenericTimeTypeChoice<BasicType, Alternative>>(
    {
      asn1supportedvalue: _encode_BasicType,
      othervalues: _encode_Alternative,
    },
    $.BER
  );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_GenericTimeTypeChoice */

/* eslint-enable */
