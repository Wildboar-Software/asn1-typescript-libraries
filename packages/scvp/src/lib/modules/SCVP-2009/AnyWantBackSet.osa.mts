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
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
import { swb_relayed_responses } from '../SCVP-2009/swb-relayed-responses.oa.mjs';
/**
 * @summary AnyWantBackSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyWantBackSet WANT-BACK ::= { swb-relayed-responses }
 * ```
 *
 * @constant
 * @type {WANT_BACK[]}
 *
 */
export const AnyWantBackSet: WANT_BACK<any>[] = [swb_relayed_responses];

/* eslint-enable */
