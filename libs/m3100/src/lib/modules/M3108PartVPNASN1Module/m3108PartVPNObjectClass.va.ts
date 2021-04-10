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
import { m3108PartVPNInformationModel } from '../M3108PartVPNASN1Module/m3108PartVPNInformationModel.va';
export { m3108PartVPNInformationModel } from '../M3108PartVPNASN1Module/m3108PartVPNInformationModel.va';

/* START_OF_SYMBOL_DEFINITION m3108PartVPNObjectClass */
/**
 * @summary m3108PartVPNObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108PartVPNObjectClass OBJECT IDENTIFIER ::= {m3108PartVPNInformationModel managedObjectClass(1)}
 * ```
 *
 * @constant
 */
export const m3108PartVPNObjectClass: OBJECT_IDENTIFIER = new _OID(
  [/* managedObjectClass */ 1],
  m3108PartVPNInformationModel
);
/* END_OF_SYMBOL_DEFINITION m3108PartVPNObjectClass */

/* eslint-enable */
