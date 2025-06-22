/* eslint-disable */
import {
    INTEGER,
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
 * @summary ClockEventCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventCode  ::=  INTEGER {
 *   unspecified(0), restart(1), systemOrHardwareFault(2), newStatusWord(3),
 *   newSynchSourceOrStratum(4), systemClockReset(5), systemInvalidTimeOrDate(6),
 *   systemClockException(7), reserved8(8), reserved9(9), reserved10(10),
 *   reserved11(11), reserved12(12), reserved13(13), reserved14(14),
 *   reserved15(15)}
 * ```
 */
export type ClockEventCode = INTEGER;

/**
 * @summary ClockEventCode_unspecified
 * @constant
 * @type {number}
 */
export const ClockEventCode_unspecified: ClockEventCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ClockEventCode = ClockEventCode_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_restart
 * @constant
 * @type {number}
 */
export const ClockEventCode_restart: ClockEventCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_restart
 * @constant
 * @type {number}
 */
export const restart: ClockEventCode = ClockEventCode_restart; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemOrHardwareFault
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemOrHardwareFault: ClockEventCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemOrHardwareFault
 * @constant
 * @type {number}
 */
export const systemOrHardwareFault: ClockEventCode = ClockEventCode_systemOrHardwareFault; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newStatusWord
 * @constant
 * @type {number}
 */
export const ClockEventCode_newStatusWord: ClockEventCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newStatusWord
 * @constant
 * @type {number}
 */
export const newStatusWord: ClockEventCode = ClockEventCode_newStatusWord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newSynchSourceOrStratum
 * @constant
 * @type {number}
 */
export const ClockEventCode_newSynchSourceOrStratum: ClockEventCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newSynchSourceOrStratum
 * @constant
 * @type {number}
 */
export const newSynchSourceOrStratum: ClockEventCode = ClockEventCode_newSynchSourceOrStratum; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockReset
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemClockReset: ClockEventCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockReset
 * @constant
 * @type {number}
 */
export const systemClockReset: ClockEventCode = ClockEventCode_systemClockReset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemInvalidTimeOrDate
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemInvalidTimeOrDate: ClockEventCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemInvalidTimeOrDate
 * @constant
 * @type {number}
 */
export const systemInvalidTimeOrDate: ClockEventCode = ClockEventCode_systemInvalidTimeOrDate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockException
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemClockException: ClockEventCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockException
 * @constant
 * @type {number}
 */
export const systemClockException: ClockEventCode = ClockEventCode_systemClockException; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved8
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved8: ClockEventCode = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved8
 * @constant
 * @type {number}
 */
export const reserved8: ClockEventCode = ClockEventCode_reserved8; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved9
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved9: ClockEventCode = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved9
 * @constant
 * @type {number}
 */
export const reserved9: ClockEventCode = ClockEventCode_reserved9; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved10
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved10: ClockEventCode = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved10
 * @constant
 * @type {number}
 */
export const reserved10: ClockEventCode = ClockEventCode_reserved10; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved11
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved11: ClockEventCode = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved11
 * @constant
 * @type {number}
 */
export const reserved11: ClockEventCode = ClockEventCode_reserved11; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved12
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved12: ClockEventCode = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved12
 * @constant
 * @type {number}
 */
export const reserved12: ClockEventCode = ClockEventCode_reserved12; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved13
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved13: ClockEventCode = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved13
 * @constant
 * @type {number}
 */
export const reserved13: ClockEventCode = ClockEventCode_reserved13; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved14
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved14: ClockEventCode = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved14
 * @constant
 * @type {number}
 */
export const reserved14: ClockEventCode = ClockEventCode_reserved14; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved15
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved15: ClockEventCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved15
 * @constant
 * @type {number}
 */
export const reserved15: ClockEventCode = ClockEventCode_reserved15; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ClockEventCode = $._decodeInteger;


export const _encode_ClockEventCode = $._encodeInteger;


/* eslint-enable */
