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
import { POLICY } from '../SCVP-2009/POLICY.oca.mjs';
import { svp_nameValAlg } from '../SCVP-2009/svp-nameValAlg.oa.mjs';
/**
 * @summary NameValidationAlgSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameValidationAlgSet POLICY ::= {
 *     svp-nameValAlg, ...
 * }
 * ```
 *
 * @constant
 * @type {POLICY[]}
 *
 */
export const NameValidationAlgSet: POLICY[] = [svp_nameValAlg];

/* eslint-enable */
