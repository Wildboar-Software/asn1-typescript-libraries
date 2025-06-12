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
import { POLICY } from '../SCVP-2009/POLICY.oca.mjs';
export { POLICY } from '../SCVP-2009/POLICY.oca.mjs';
import { svp_defaultValPolicy } from '../SCVP-2009/svp-defaultValPolicy.oa.mjs';
export { svp_defaultValPolicy } from '../SCVP-2009/svp-defaultValPolicy.oa.mjs';

/* START_OF_SYMBOL_DEFINITION ValidationPolRefSet */
/**
 * @summary ValidationPolRefSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationPolRefSet POLICY ::= {
 *     svp-defaultValPolicy, ...
 * }
 * ```
 *
 * @constant
 * @type {POLICY[]}
 *
 */
export const ValidationPolRefSet: POLICY[] = [svp_defaultValPolicy];
/* END_OF_SYMBOL_DEFINITION ValidationPolRefSet */

/* eslint-enable */
