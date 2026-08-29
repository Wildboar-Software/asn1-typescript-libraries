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
 * @summary TestConditions_second
 * @description
 *
 * Inner INTEGER of `TestConditions.second`: whether the
 * user of the MORT can cause the test to abort. ITU-T Rec. X.737
 * (11/95) [§8.1.21](https://www.itu.int/rec/T-REC-X.737-199511-I).
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
 * @description
 *
 * User of the MORT may abort the test (0). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const TestConditions_second_customerOverrideTest: TestConditions_second = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_second_customerOverrideTest
 * @description
 *
 * User of the MORT may abort the test (0). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const customerOverrideTest: TestConditions_second = TestConditions_second_customerOverrideTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_second_noCustomerOverrideTest
 * @description
 *
 * User of the MORT may not abort the test (1). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const TestConditions_second_noCustomerOverrideTest: TestConditions_second = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestConditions_second_noCustomerOverrideTest
 * @description
 *
 * User of the MORT may not abort the test (1). X.737 §8.1.21.
 * @constant
 * @type {number}
 */
export const noCustomerOverrideTest: TestConditions_second = TestConditions_second_noCustomerOverrideTest; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestConditions_second = $._decodeInteger;


export const _encode_TestConditions_second = $._encodeInteger;


/* eslint-enable */
