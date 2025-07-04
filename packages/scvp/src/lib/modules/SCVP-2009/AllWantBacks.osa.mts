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
import { WantBackSet } from '../SCVP-2009/WantBackSet.osa.mjs';
import { ACertWantBackSet } from '../SCVP-2009/ACertWantBackSet.osa.mjs';
import { AnyWantBackSet } from '../SCVP-2009/AnyWantBackSet.osa.mjs';
/**
 * @summary AllWantBacks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllWantBacks WANT-BACK ::= {
 *     WantBackSet | ACertWantBackSet | AnyWantBackSet, ...
 * }
 * ```
 *
 * @constant
 * @type {WANT_BACK[]}
 *
 */
export const AllWantBacks: WANT_BACK<any>[] = [
  ...WantBackSet,
  ...ACertWantBackSet,
  ...AnyWantBackSet,
];

/* eslint-enable */
