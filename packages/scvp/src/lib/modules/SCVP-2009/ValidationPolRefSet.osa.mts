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
import { type POLICY } from '../SCVP-2009/POLICY.oca.mjs';
import { svp_defaultValPolicy } from '../SCVP-2009/svp-defaultValPolicy.oa.mjs';
/**
 * @summary ValidationPolRefSet
 * @description
 *
 * Object set of validation policies (`svp-defaultValPolicy`, …)
 * ([RFC 5055 §3.2.4.1](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4.1)) / ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
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

/* eslint-enable */
