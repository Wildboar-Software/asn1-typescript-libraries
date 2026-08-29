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
 * @summary TestConditions_first
 * @description
 *
 * Inner INTEGER of `TestConditions.first`: behaviour when
 * the MORT is busy. ITU-T Rec. X.737 (11/95)
 * [§8.1.21](https://www.itu.int/rec/T-REC-X.737-199511-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestConditions-first ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestConditions_first = INTEGER;

/**
 * @summary TestConditions_first_testIfBusy
 * @description
 *
 * Initiate even if the MORT is busy (0). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const TestConditions_first_testIfBusy: TestConditions_first = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_testIfBusy
 * @description
 *
 * Initiate even if the MORT is busy (0). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const testIfBusy: TestConditions_first = TestConditions_first_testIfBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_rejectIfBusy
 * @description
 *
 * Reject the test if the MORT is busy (1). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const TestConditions_first_rejectIfBusy: TestConditions_first = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_rejectIfBusy
 * @description
 *
 * Reject the test if the MORT is busy (1). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const rejectIfBusy: TestConditions_first = TestConditions_first_rejectIfBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_waitIfBusy
 * @description
 *
 * Wait if the MORT is busy (2). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const TestConditions_first_waitIfBusy: TestConditions_first = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_waitIfBusy
 * @description
 *
 * Wait if the MORT is busy (2). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const waitIfBusy: TestConditions_first = TestConditions_first_waitIfBusy; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestConditions_first = $._decodeInteger;


export const _encode_TestConditions_first = $._encodeInteger;


/* eslint-enable */
