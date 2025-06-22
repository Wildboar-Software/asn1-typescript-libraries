/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { m_Action } from '../CMIP-1/m-Action.oa.mjs';
import { m_Action_Confirmed } from '../CMIP-1/m-Action-Confirmed.oa.mjs';
import { m_CancelGet } from '../CMIP-1/m-CancelGet.oa.mjs';
import { m_Create } from '../CMIP-1/m-Create.oa.mjs';
import { m_Delete } from '../CMIP-1/m-Delete.oa.mjs';
import { m_EventReport } from '../CMIP-1/m-EventReport.oa.mjs';
import { m_EventReport_Confirmed } from '../CMIP-1/m-EventReport-Confirmed.oa.mjs';
import { m_Get } from '../CMIP-1/m-Get.oa.mjs';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa.mjs';
import { m_Set } from '../CMIP-1/m-Set.oa.mjs';
import { m_Set_Confirmed } from '../CMIP-1/m-Set-Confirmed.oa.mjs';

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

/* eslint-enable */
