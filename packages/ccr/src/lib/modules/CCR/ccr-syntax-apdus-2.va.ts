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
import { joint_CCR } from '../CCR/joint-CCR.va.js';
export { joint_CCR } from '../CCR/joint-CCR.va.js';

/* START_OF_SYMBOL_DEFINITION ccr_syntax_apdus_2 */
/**
 * @summary ccr_syntax_apdus_2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ccr-syntax-apdus-2 OBJECT IDENTIFIER ::= {joint-CCR abstract-syntax(2) apdus(1) version2(2)}
 * ```
 *
 * @constant
 */
export const ccr_syntax_apdus_2: OBJECT_IDENTIFIER = new _OID(
  [/* abstract-syntax */ 2, /* apdus */ 1, /* version2 */ 2],
  joint_CCR
);
/* END_OF_SYMBOL_DEFINITION ccr_syntax_apdus_2 */

/* eslint-enable */
