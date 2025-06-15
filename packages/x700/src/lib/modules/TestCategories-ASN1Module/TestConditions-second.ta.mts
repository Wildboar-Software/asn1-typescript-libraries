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

/* START_OF_SYMBOL_DEFINITION TestConditions_second */
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
/* END_OF_SYMBOL_DEFINITION TestConditions_second */

/* START_OF_SYMBOL_DEFINITION TestConditions_second_customerOverrideTest */
/**
 * @summary TestConditions_second_customerOverrideTest
 * @constant
 * @type {number}
 */
export const TestConditions_second_customerOverrideTest: TestConditions_second = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_second_customerOverrideTest */

/* START_OF_SYMBOL_DEFINITION customerOverrideTest */
/**
 * @summary TestConditions_second_customerOverrideTest
 * @constant
 * @type {number}
 */
export const customerOverrideTest: TestConditions_second = TestConditions_second_customerOverrideTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION customerOverrideTest */

/* START_OF_SYMBOL_DEFINITION TestConditions_second_noCustomerOverrideTest */
/**
 * @summary TestConditions_second_noCustomerOverrideTest
 * @constant
 * @type {number}
 */
export const TestConditions_second_noCustomerOverrideTest: TestConditions_second = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_second_noCustomerOverrideTest */

/* START_OF_SYMBOL_DEFINITION noCustomerOverrideTest */
/**
 * @summary TestConditions_second_noCustomerOverrideTest
 * @constant
 * @type {number}
 */
export const noCustomerOverrideTest: TestConditions_second = TestConditions_second_noCustomerOverrideTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noCustomerOverrideTest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_second */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_second */

/* START_OF_SYMBOL_DEFINITION _decode_TestConditions_second */
export const _decode_TestConditions_second = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TestConditions_second */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_second */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_second */

/* START_OF_SYMBOL_DEFINITION _encode_TestConditions_second */
export const _encode_TestConditions_second = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TestConditions_second */

/* eslint-enable */
