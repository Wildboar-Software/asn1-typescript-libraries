/* eslint-disable */
import {
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Vein_only
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Vein-only  ::=  BIT STRING {
 *   left(6), right(5), palm(4), back-of-hand(3), wrist(2), reserved1(1),
 *   reserved2(0)}(SIZE (7))
 * ```
 */
export type Vein_only = BIT_STRING;

/**
 * @summary Vein_only_left
 * @constant
 */
export const Vein_only_left: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary left
 * @constant
 */
export const left: number = Vein_only_left; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_right
 * @constant
 */
export const Vein_only_right: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary right
 * @constant
 */
export const right: number = Vein_only_right; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_palm
 * @constant
 */
export const Vein_only_palm: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary palm
 * @constant
 */
export const palm: number = Vein_only_palm; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_back_of_hand
 * @constant
 */
export const Vein_only_back_of_hand: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary back_of_hand
 * @constant
 */
export const back_of_hand: number = Vein_only_back_of_hand; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_wrist
 * @constant
 */
export const Vein_only_wrist: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary wrist
 * @constant
 */
export const wrist: number = Vein_only_wrist; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_reserved1
 * @constant
 */
export const Vein_only_reserved1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary reserved1
 * @constant
 */
export const reserved1: number = Vein_only_reserved1; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_reserved2
 * @constant
 */
export const Vein_only_reserved2: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reserved2
 * @constant
 */
export const reserved2: number = Vein_only_reserved2; /* SHORT_NAMED_BIT */


export const _decode_Vein_only = $._decodeBitString;


export const _encode_Vein_only = $._encodeBitString;


/* eslint-enable */
