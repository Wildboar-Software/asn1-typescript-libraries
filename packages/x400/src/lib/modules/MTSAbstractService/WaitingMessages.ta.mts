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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary WaitingMessages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitingMessages  ::=  BIT STRING {
 *   long-content(0), low-priority(1), other-security-labels(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type WaitingMessages = BIT_STRING;

/**
 * @summary WaitingMessages_long_content
 * @constant
 */
export const WaitingMessages_long_content: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary long_content
 * @constant
 */
export const long_content: number = WaitingMessages_long_content; /* SHORT_NAMED_BIT */

/**
 * @summary WaitingMessages_low_priority
 * @constant
 */
export const WaitingMessages_low_priority: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary low_priority
 * @constant
 */
export const low_priority: number = WaitingMessages_low_priority; /* SHORT_NAMED_BIT */

/**
 * @summary WaitingMessages_other_security_labels
 * @constant
 */
export const WaitingMessages_other_security_labels: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary other_security_labels
 * @constant
 */
export const other_security_labels: number = WaitingMessages_other_security_labels; /* SHORT_NAMED_BIT */


export const _decode_WaitingMessages = $._decodeBitString;


export const _encode_WaitingMessages = $._encodeBitString;


/* eslint-enable */
