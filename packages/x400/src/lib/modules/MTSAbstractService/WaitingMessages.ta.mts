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

/* START_OF_SYMBOL_DEFINITION WaitingMessages */
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
/* END_OF_SYMBOL_DEFINITION WaitingMessages */

/* START_OF_SYMBOL_DEFINITION WaitingMessages_long_content */
/**
 * @summary WaitingMessages_long_content
 * @constant
 */
export const WaitingMessages_long_content: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WaitingMessages_long_content */

/* START_OF_SYMBOL_DEFINITION long_content */
/**
 * @summary long_content
 * @constant
 */
export const long_content: number = WaitingMessages_long_content; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION long_content */

/* START_OF_SYMBOL_DEFINITION WaitingMessages_low_priority */
/**
 * @summary WaitingMessages_low_priority
 * @constant
 */
export const WaitingMessages_low_priority: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WaitingMessages_low_priority */

/* START_OF_SYMBOL_DEFINITION low_priority */
/**
 * @summary low_priority
 * @constant
 */
export const low_priority: number = WaitingMessages_low_priority; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION low_priority */

/* START_OF_SYMBOL_DEFINITION WaitingMessages_other_security_labels */
/**
 * @summary WaitingMessages_other_security_labels
 * @constant
 */
export const WaitingMessages_other_security_labels: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WaitingMessages_other_security_labels */

/* START_OF_SYMBOL_DEFINITION other_security_labels */
/**
 * @summary other_security_labels
 * @constant
 */
export const other_security_labels: number = WaitingMessages_other_security_labels; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION other_security_labels */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitingMessages */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitingMessages */

/* START_OF_SYMBOL_DEFINITION _decode_WaitingMessages */
export const _decode_WaitingMessages = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_WaitingMessages */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitingMessages */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitingMessages */

/* START_OF_SYMBOL_DEFINITION _encode_WaitingMessages */
export const _encode_WaitingMessages = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_WaitingMessages */

/* eslint-enable */
