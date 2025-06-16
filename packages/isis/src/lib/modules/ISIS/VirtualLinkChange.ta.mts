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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 *  {number}
 */
export enum _enum_for_VirtualLinkChange {
  deleted = 0,
  created = 1,
}

/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * alLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```
 *
 * @enum {number}
 */
export type VirtualLinkChange = _enum_for_VirtualLinkChange;

/**
 * @summary VirtualLinkChange
 * @description
 *
 * ion:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```
 *
 * @enum {number}
 */
export const VirtualLinkChange = _enum_for_VirtualLinkChange;

/**
 * @summary VirtualLinkChange_deleted
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_deleted: VirtualLinkChange =
  VirtualLinkChange.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: VirtualLinkChange =
  VirtualLinkChange.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VirtualLinkChange_created
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_created: VirtualLinkChange =
  VirtualLinkChange.created; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created
 * @constant
 * @type {number}
 */
export const created: VirtualLinkChange =
  VirtualLinkChange.created; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_VirtualLinkChange = $._decodeEnumerated;
