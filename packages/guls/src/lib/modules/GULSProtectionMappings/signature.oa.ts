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
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.js';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.js';
import { gulsSignatureTransformation } from '../GulsSecurityTransformations/gulsSignatureTransformation.oa.js';
export { gulsSignatureTransformation } from '../GulsSecurityTransformations/gulsSignatureTransformation.oa.js';
import { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.js';
export { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.js';

/* START_OF_SYMBOL_DEFINITION signature */
/**
 * @summary signature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signature PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION
 *     {gulsSignatureTransformation
 *        {{symmetricKeyInformation | asymmetricKeyInformation}}}
 * }
 * ```
 *
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export const signature: PROTECTION_MAPPING = {
  class: 'PROTECTION-MAPPING',
  decoderFor: {},
  encoderFor: {},
  '&SecurityTransformation': [
    gulsSignatureTransformation([]),
  ] /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': new _OID(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signature */

/* eslint-enable */
