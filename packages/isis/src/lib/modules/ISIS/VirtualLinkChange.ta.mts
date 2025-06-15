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

/* START_OF_SYMBOL_DEFINITION _enum_for_VirtualLinkChange */
/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```@enum {number}
 */
export enum _enum_for_VirtualLinkChange {
  deleted = 0,
  created = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange */
/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```@enum {number}
 */
export type VirtualLinkChange = _enum_for_VirtualLinkChange;
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange */
/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```@enum {number}
 */
export const VirtualLinkChange = _enum_for_VirtualLinkChange;
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange_deleted */
/**
 * @summary VirtualLinkChange_deleted
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_deleted: VirtualLinkChange =
  VirtualLinkChange.deleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange_deleted */

/* START_OF_SYMBOL_DEFINITION deleted */
/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: VirtualLinkChange =
  VirtualLinkChange.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deleted */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange_created */
/**
 * @summary VirtualLinkChange_created
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_created: VirtualLinkChange =
  VirtualLinkChange.created; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange_created */

/* START_OF_SYMBOL_DEFINITION created */
/**
 * @summary created
 * @constant
 * @type {number}
 */
export const created: VirtualLinkChange =
  VirtualLinkChange.created; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION created */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VirtualLinkChange */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION _decode_VirtualLinkChange */
export const _decode_VirtualLinkChange = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VirtualLinkChange */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION _encode_VirtualLinkChange */
export const _encode_VirtualLinkChange = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_VirtualLinkChange */

/* eslint-enable */
