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
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DesignatedISChange {
  resigned = 0,
  elected = 1,
}

/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```
 *
 * @enum {number}
 */
export type DesignatedISChange = _enum_for_DesignatedISChange;

/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```
 *
 * @enum {number}
 */
export const DesignatedISChange = _enum_for_DesignatedISChange;

/**
 * @summary DesignatedISChange_resigned
 * @constant
 * @type {number}
 */
export const DesignatedISChange_resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resigned
 * @constant
 * @type {number}
 */
export const resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DesignatedISChange_elected
 * @constant
 * @type {number}
 */
export const DesignatedISChange_elected: DesignatedISChange =
  DesignatedISChange.elected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary elected
 * @constant
 * @type {number}
 */
export const elected: DesignatedISChange =
  DesignatedISChange.elected; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DesignatedISChange = $._decodeEnumerated;


export const _encode_DesignatedISChange = $._encodeEnumerated;


/* eslint-enable */
