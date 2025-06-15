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

/* START_OF_SYMBOL_DEFINITION TestConditions_first */
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
/* END_OF_SYMBOL_DEFINITION TestConditions_first */

/* START_OF_SYMBOL_DEFINITION TestConditions_first_testIfBusy */
/**
 * @summary TestConditions_first_testIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_testIfBusy: TestConditions_first = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_first_testIfBusy */

/* START_OF_SYMBOL_DEFINITION testIfBusy */
/**
 * @summary TestConditions_first_testIfBusy
 * @constant
 * @type {number}
 */
export const testIfBusy: TestConditions_first = TestConditions_first_testIfBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION testIfBusy */

/* START_OF_SYMBOL_DEFINITION TestConditions_first_rejectIfBusy */
/**
 * @summary TestConditions_first_rejectIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_rejectIfBusy: TestConditions_first = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_first_rejectIfBusy */

/* START_OF_SYMBOL_DEFINITION rejectIfBusy */
/**
 * @summary TestConditions_first_rejectIfBusy
 * @constant
 * @type {number}
 */
export const rejectIfBusy: TestConditions_first = TestConditions_first_rejectIfBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rejectIfBusy */

/* START_OF_SYMBOL_DEFINITION TestConditions_first_waitIfBusy */
/**
 * @summary TestConditions_first_waitIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_waitIfBusy: TestConditions_first = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_first_waitIfBusy */

/* START_OF_SYMBOL_DEFINITION waitIfBusy */
/**
 * @summary TestConditions_first_waitIfBusy
 * @constant
 * @type {number}
 */
export const waitIfBusy: TestConditions_first = TestConditions_first_waitIfBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION waitIfBusy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_first */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_first */

/* START_OF_SYMBOL_DEFINITION _decode_TestConditions_first */
export const _decode_TestConditions_first = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TestConditions_first */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_first */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_first */

/* START_OF_SYMBOL_DEFINITION _encode_TestConditions_first */
export const _encode_TestConditions_first = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TestConditions_first */

/* eslint-enable */
