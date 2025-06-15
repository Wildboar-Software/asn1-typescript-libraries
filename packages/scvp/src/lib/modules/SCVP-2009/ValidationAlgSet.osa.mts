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
} from 'asn1-ts';
import { POLICY } from '../SCVP-2009/POLICY.oca.mjs';
import { svp_basicValAlg } from '../SCVP-2009/svp-basicValAlg.oa.mjs';
/**
 * @summary ValidationAlgSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationAlgSet POLICY ::= {
 *         svp-basicValAlg, ...
 * }
 * ```
 *
 * @constant
 * @type {POLICY[]}
 *
 */
export const ValidationAlgSet: POLICY[] = [svp_basicValAlg];

/* eslint-enable */
