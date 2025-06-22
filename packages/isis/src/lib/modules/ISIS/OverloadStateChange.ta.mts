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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary OverloadStateChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverloadStateChange  ::=  ENUMERATED {on(0), waiting(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_OverloadStateChange {
  on = 0,
  waiting = 1,
}

/**
 * @summary OverloadStateChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverloadStateChange  ::=  ENUMERATED {on(0), waiting(1)}
 * ```
 *
 * @enum {number}
 */
export type OverloadStateChange = _enum_for_OverloadStateChange;

/**
 * @summary OverloadStateChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverloadStateChange  ::=  ENUMERATED {on(0), waiting(1)}
 * ```
 *
 * @enum {number}
 */
export const OverloadStateChange = _enum_for_OverloadStateChange;

/**
 * @summary OverloadStateChange_on
 * @constant
 * @type {number}
 */
export const OverloadStateChange_on: OverloadStateChange =
  OverloadStateChange.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on: OverloadStateChange =
  OverloadStateChange.on; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OverloadStateChange_waiting
 * @constant
 * @type {number}
 */
export const OverloadStateChange_waiting: OverloadStateChange =
  OverloadStateChange.waiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary waiting
 * @constant
 * @type {number}
 */
export const waiting: OverloadStateChange =
  OverloadStateChange.waiting; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_OverloadStateChange = $._decodeEnumerated;


export const _encode_OverloadStateChange = $._encodeEnumerated;


/* eslint-enable */
