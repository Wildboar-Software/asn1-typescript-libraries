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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import { m_Action } from '../CMIP-1/m-Action.oa';
export { m_Action } from '../CMIP-1/m-Action.oa';
import { m_Action_Confirmed } from '../CMIP-1/m-Action-Confirmed.oa';
export { m_Action_Confirmed } from '../CMIP-1/m-Action-Confirmed.oa';
import { m_CancelGet } from '../CMIP-1/m-CancelGet.oa';
export { m_CancelGet } from '../CMIP-1/m-CancelGet.oa';
import { m_Create } from '../CMIP-1/m-Create.oa';
export { m_Create } from '../CMIP-1/m-Create.oa';
import { m_Delete } from '../CMIP-1/m-Delete.oa';
export { m_Delete } from '../CMIP-1/m-Delete.oa';
import { m_EventReport } from '../CMIP-1/m-EventReport.oa';
export { m_EventReport } from '../CMIP-1/m-EventReport.oa';
import { m_EventReport_Confirmed } from '../CMIP-1/m-EventReport-Confirmed.oa';
export { m_EventReport_Confirmed } from '../CMIP-1/m-EventReport-Confirmed.oa';
import { m_Get } from '../CMIP-1/m-Get.oa';
export { m_Get } from '../CMIP-1/m-Get.oa';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa';
export { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa';
import { m_Set } from '../CMIP-1/m-Set.oa';
export { m_Set } from '../CMIP-1/m-Set.oa';
import { m_Set_Confirmed } from '../CMIP-1/m-Set-Confirmed.oa';
export { m_Set_Confirmed } from '../CMIP-1/m-Set-Confirmed.oa';

/* START_OF_SYMBOL_DEFINITION CMIP_Operations */
/**
 * @summary CMIP_Operations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIP-Operations OPERATION ::= {m-Action | m-Action-Confirmed | m-CancelGet | m-Create | m-Delete |
 *    m-EventReport | m-EventReport-Confirmed | m-Get | m-Linked-Reply | m-Set |
 *    m-Set-Confirmed}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const CMIP_Operations: OPERATION[] = [
  m_Action,
  m_Action_Confirmed,
  m_CancelGet,
  m_Create,
  m_Delete,
  m_EventReport,
  m_EventReport_Confirmed,
  m_Get,
  m_Linked_Reply,
  m_Set,
  m_Set_Confirmed,
];
/* END_OF_SYMBOL_DEFINITION CMIP_Operations */

/* eslint-enable */
