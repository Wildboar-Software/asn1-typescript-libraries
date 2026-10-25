/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * Identifies the latest clock system exception event.
 * Syntax of `clockEventCode`. Named values (A.5):
 * `unspecified` (0), `restart` (1), `systemOrHardwareFault`
 * (2), `newStatusWord` (3), `newSynchSourceOrStratum` (4),
 * `systemClockReset` (5), `systemInvalidTimeOrDate` (6),
 * `systemClockException` (7). `reserved8` (8) through
 * `reserved15` (15) are reserved; the rec assigns them no
 * meaning. ITU-T Rec. X.743 (06/98)
 * [§8.3.4](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.4, A.5.
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
export const ClockEventCode_unspecified = 0 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_unspecified
 * @constant
 * @type {number}
 */
export const unspecified = ClockEventCode_unspecified satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_restart
 * @constant
 * @type {number}
 */
export const ClockEventCode_restart = 1 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_restart
 * @constant
 * @type {number}
 */
export const restart = ClockEventCode_restart satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemOrHardwareFault
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemOrHardwareFault = 2 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemOrHardwareFault
 * @constant
 * @type {number}
 */
export const systemOrHardwareFault = ClockEventCode_systemOrHardwareFault satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newStatusWord
 * @constant
 * @type {number}
 */
export const ClockEventCode_newStatusWord = 3 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newStatusWord
 * @constant
 * @type {number}
 */
export const newStatusWord = ClockEventCode_newStatusWord satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newSynchSourceOrStratum
 * @constant
 * @type {number}
 */
export const ClockEventCode_newSynchSourceOrStratum = 4 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_newSynchSourceOrStratum
 * @constant
 * @type {number}
 */
export const newSynchSourceOrStratum = ClockEventCode_newSynchSourceOrStratum satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockReset
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemClockReset = 5 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockReset
 * @constant
 * @type {number}
 */
export const systemClockReset = ClockEventCode_systemClockReset satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemInvalidTimeOrDate
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemInvalidTimeOrDate = 6 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemInvalidTimeOrDate
 * @constant
 * @type {number}
 */
export const systemInvalidTimeOrDate = ClockEventCode_systemInvalidTimeOrDate satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockException
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemClockException = 7 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_systemClockException
 * @constant
 * @type {number}
 */
export const systemClockException = ClockEventCode_systemClockException satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved8
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved8 = 8 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved8
 * @constant
 * @type {number}
 */
export const reserved8 = ClockEventCode_reserved8 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved9
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved9 = 9 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved9
 * @constant
 * @type {number}
 */
export const reserved9 = ClockEventCode_reserved9 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved10
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved10 = 10 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved10
 * @constant
 * @type {number}
 */
export const reserved10 = ClockEventCode_reserved10 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved11
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved11 = 11 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved11
 * @constant
 * @type {number}
 */
export const reserved11 = ClockEventCode_reserved11 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved12
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved12 = 12 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved12
 * @constant
 * @type {number}
 */
export const reserved12 = ClockEventCode_reserved12 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved13
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved13 = 13 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved13
 * @constant
 * @type {number}
 */
export const reserved13 = ClockEventCode_reserved13 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved14
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved14 = 14 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved14
 * @constant
 * @type {number}
 */
export const reserved14 = ClockEventCode_reserved14 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved15
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved15 = 15 satisfies ClockEventCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClockEventCode_reserved15
 * @constant
 * @type {number}
 */
export const reserved15 = ClockEventCode_reserved15 satisfies ClockEventCode; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ClockEventCode = $._decodeInteger;


export const _encode_ClockEventCode = $._encodeInteger;


/* eslint-enable */
