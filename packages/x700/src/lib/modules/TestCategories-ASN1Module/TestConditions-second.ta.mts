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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary TestConditions_second
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestConditions-second ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestConditions_second = INTEGER;

/**
 * @summary TestConditions_second_customerOverrideTest
 * @constant
 * @type {number}
 */
export const TestConditions_second_customerOverrideTest: TestConditions_second = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_second_customerOverrideTest
 * @constant
 * @type {number}
 */
export const customerOverrideTest: TestConditions_second = TestConditions_second_customerOverrideTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_second_noCustomerOverrideTest
 * @constant
 * @type {number}
 */
export const TestConditions_second_noCustomerOverrideTest: TestConditions_second = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_second_noCustomerOverrideTest
 * @constant
 * @type {number}
 */
export const noCustomerOverrideTest: TestConditions_second = TestConditions_second_noCustomerOverrideTest; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestConditions_second = $._decodeInteger;


export const _encode_TestConditions_second = $._encodeInteger;


/* eslint-enable */
