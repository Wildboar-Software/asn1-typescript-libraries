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
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.js';
export { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.js';
import {
  dirSignedTransformation_XformedDataType,
  _decode_dirSignedTransformation_XformedDataType,
  _encode_dirSignedTransformation_XformedDataType,
} from '../GulsSecurityTransformations/dirSignedTransformation-XformedDataType.ta.js';
export {
  dirSignedTransformation_XformedDataType,
  _decode_dirSignedTransformation_XformedDataType,
  _encode_dirSignedTransformation_XformedDataType,
} from '../GulsSecurityTransformations/dirSignedTransformation-XformedDataType.ta.js';
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.js';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.js';

/* START_OF_SYMBOL_DEFINITION dirSignedTransformation */
/**
 * @summary dirSignedTransformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirSignedTransformation SECURITY-TRANSFORMATION ::= {
 *   IDENTIFIER              {securityTransformations dir-signed(2)}
 *   INITIAL-ENCODING-RULES
 *     {joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}
 *   XFORMED-DATA-TYPE
 *     SEQUENCE {toBeSigned
 *                 ABSTRACT-SYNTAX.&Type
 *                   (CONSTRAINED BY {
 *
 *                      -- this type is constrained to being the to-be-signed type -- }),
 *               algorithmId     AlgorithmIdentifier,
 *               -- of the algorithms used to compute the signature
 *               encipheredHash  BIT STRING}
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_TRANSFORMATION<dirSignedTransformation_XformedDataType>}
 * @implements {SECURITY_TRANSFORMATION<dirSignedTransformation_XformedDataType>}
 */
export const dirSignedTransformation: SECURITY_TRANSFORMATION<dirSignedTransformation_XformedDataType> = {
  class: 'SECURITY-TRANSFORMATION',
  decoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': _decode_dirSignedTransformation_XformedDataType,
    '&QualifierType': undefined,
  },
  encoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': _encode_dirSignedTransformation_XformedDataType,
    '&QualifierType': undefined,
  },
  '&sT-Identifier': new _OID(
    [/* dir-signed */ 2],
    securityTransformations
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&initialEncodingRules': new _OID(
    [/* asn1 */ 1, /* ber-derived */ 2, /* distinguished-encoding */ 1],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */,
  '&StaticUnprotectedParm': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&DynamicUnprotectedParm': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&XformedDataType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&QualifierType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dirSignedTransformation */

/* eslint-enable */
