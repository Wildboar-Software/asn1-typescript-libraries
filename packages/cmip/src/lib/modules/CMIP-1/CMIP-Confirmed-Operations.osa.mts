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
import { type OPERATION } from '@wildboar/rose';
import { m_Action_Confirmed } from '../CMIP-1/m-Action-Confirmed.oa.mjs';
import { m_CancelGet } from '../CMIP-1/m-CancelGet.oa.mjs';
import { m_Create } from '../CMIP-1/m-Create.oa.mjs';
import { m_Delete } from '../CMIP-1/m-Delete.oa.mjs';
import { m_EventReport_Confirmed } from '../CMIP-1/m-EventReport-Confirmed.oa.mjs';
import { m_Get } from '../CMIP-1/m-Get.oa.mjs';
import { m_Set_Confirmed } from '../CMIP-1/m-Set-Confirmed.oa.mjs';

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

/* eslint-enable */
