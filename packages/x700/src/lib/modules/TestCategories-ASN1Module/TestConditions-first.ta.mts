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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestConditions-first ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestConditions_first = INTEGER;

/**
 * @summary TestConditions_first_testIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_testIfBusy: TestConditions_first = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_testIfBusy
 * @constant
 * @type {number}
 */
export const testIfBusy: TestConditions_first = TestConditions_first_testIfBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_rejectIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_rejectIfBusy: TestConditions_first = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_rejectIfBusy
 * @constant
 * @type {number}
 */
export const rejectIfBusy: TestConditions_first = TestConditions_first_rejectIfBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_waitIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_waitIfBusy: TestConditions_first = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_first_waitIfBusy
 * @constant
 * @type {number}
 */
export const waitIfBusy: TestConditions_first = TestConditions_first_waitIfBusy; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestConditions_first = $._decodeInteger;


export const _encode_TestConditions_first = $._encodeInteger;


/* eslint-enable */
