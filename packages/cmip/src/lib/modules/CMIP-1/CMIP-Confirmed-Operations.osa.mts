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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { m_Action_Confirmed } from '../CMIP-1/m-Action-Confirmed.oa.mjs';
export { m_Action_Confirmed } from '../CMIP-1/m-Action-Confirmed.oa.mjs';
import { m_CancelGet } from '../CMIP-1/m-CancelGet.oa.mjs';
export { m_CancelGet } from '../CMIP-1/m-CancelGet.oa.mjs';
import { m_Create } from '../CMIP-1/m-Create.oa.mjs';
export { m_Create } from '../CMIP-1/m-Create.oa.mjs';
import { m_Delete } from '../CMIP-1/m-Delete.oa.mjs';
export { m_Delete } from '../CMIP-1/m-Delete.oa.mjs';
import { m_EventReport_Confirmed } from '../CMIP-1/m-EventReport-Confirmed.oa.mjs';
export { m_EventReport_Confirmed } from '../CMIP-1/m-EventReport-Confirmed.oa.mjs';
import { m_Get } from '../CMIP-1/m-Get.oa.mjs';
export { m_Get } from '../CMIP-1/m-Get.oa.mjs';
import { m_Set_Confirmed } from '../CMIP-1/m-Set-Confirmed.oa.mjs';
export { m_Set_Confirmed } from '../CMIP-1/m-Set-Confirmed.oa.mjs';

/* START_OF_SYMBOL_DEFINITION CMIP_Confirmed_Operations */
/**
 * @summary CMIP_Confirmed_Operations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIP-Confirmed-Operations OPERATION ::= {m-Action-Confirmed | m-CancelGet | m-Create | m-Delete |
 *    m-EventReport-Confirmed | m-Get | m-Set-Confirmed}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const CMIP_Confirmed_Operations: OPERATION[] = [
  m_Action_Confirmed,
  m_CancelGet,
  m_Create,
  m_Delete,
  m_EventReport_Confirmed,
  m_Get,
  m_Set_Confirmed,
];
/* END_OF_SYMBOL_DEFINITION CMIP_Confirmed_Operations */

/* eslint-enable */
