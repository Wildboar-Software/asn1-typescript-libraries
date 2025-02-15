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
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta';
export {
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta';

/* START_OF_SYMBOL_DEFINITION KDCOptions */
/**
 * @summary KDCOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KDCOptions       ::=  KerberosFlags
 * ```
 */
export type KDCOptions = KerberosFlags; // DefinedType
/* END_OF_SYMBOL_DEFINITION KDCOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KDCOptions */
let _cached_decoder_for_KDCOptions: $.ASN1Decoder<KDCOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KDCOptions */

/* START_OF_SYMBOL_DEFINITION _decode_KDCOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) KDCOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KDCOptions} The decoded data structure.
 */
export function _decode_KDCOptions(el: _Element) {
  if (!_cached_decoder_for_KDCOptions) {
    _cached_decoder_for_KDCOptions = _decode_KerberosFlags;
  }
  return _cached_decoder_for_KDCOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KDCOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KDCOptions */
let _cached_encoder_for_KDCOptions: $.ASN1Encoder<KDCOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KDCOptions */

/* START_OF_SYMBOL_DEFINITION _encode_KDCOptions */
/**
 * @summary Encodes a(n) KDCOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDCOptions, encoded as an ASN.1 Element.
 */
export function _encode_KDCOptions(
  value: KDCOptions,
  elGetter: $.ASN1Encoder<KDCOptions>
) {
  if (!_cached_encoder_for_KDCOptions) {
    _cached_encoder_for_KDCOptions = _encode_KerberosFlags;
  }
  return _cached_encoder_for_KDCOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KDCOptions */

/* eslint-enable */
