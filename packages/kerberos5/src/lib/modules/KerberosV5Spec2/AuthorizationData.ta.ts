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
  AuthorizationData_Item,
  _decode_AuthorizationData_Item,
  _encode_AuthorizationData_Item,
} from '../KerberosV5Spec2/AuthorizationData-Item.ta';
export {
  AuthorizationData_Item,
  _decode_AuthorizationData_Item,
  _encode_AuthorizationData_Item,
} from '../KerberosV5Spec2/AuthorizationData-Item.ta';

/* START_OF_SYMBOL_DEFINITION AuthorizationData */
/**
 * @summary AuthorizationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationData        ::=  SEQUENCE OF SEQUENCE {
 *         ad-type         [0] Int32,
 *         ad-data         [1] OCTET STRING
 * }
 * ```
 */
export type AuthorizationData = AuthorizationData_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationData */
let _cached_decoder_for_AuthorizationData: $.ASN1Decoder<AuthorizationData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationData */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationData} The decoded data structure.
 */
export function _decode_AuthorizationData(el: _Element) {
  if (!_cached_decoder_for_AuthorizationData) {
    _cached_decoder_for_AuthorizationData = $._decodeSequenceOf<AuthorizationData_Item>(
      () => _decode_AuthorizationData_Item
    );
  }
  return _cached_decoder_for_AuthorizationData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationData */
let _cached_encoder_for_AuthorizationData: $.ASN1Encoder<AuthorizationData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationData */
/**
 * @summary Encodes a(n) AuthorizationData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationData, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationData(
  value: AuthorizationData,
  elGetter: $.ASN1Encoder<AuthorizationData>
) {
  if (!_cached_encoder_for_AuthorizationData) {
    _cached_encoder_for_AuthorizationData = $._encodeSequenceOf<AuthorizationData_Item>(
      () => _encode_AuthorizationData_Item,
      $.BER
    );
  }
  return _cached_encoder_for_AuthorizationData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationData */

/* eslint-enable */
