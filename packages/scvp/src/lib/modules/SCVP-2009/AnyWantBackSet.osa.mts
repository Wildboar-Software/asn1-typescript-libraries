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
import { type WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
import { swb_relayed_responses } from '../SCVP-2009/swb-relayed-responses.oa.mjs';
/**
 * @summary AnyWantBackSet
 * @description
 *
 * Object set of wantBacks usable for either PKC or AC
 * (e.g., `swb-relayed-responses`) ([RFC 5055 §3.2.3](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.3)).
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
