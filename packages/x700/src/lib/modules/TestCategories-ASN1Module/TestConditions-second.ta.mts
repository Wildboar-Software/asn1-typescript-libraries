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
let _cached_decoder_for_TestConditions_second: $.ASN1Decoder<TestConditions_second> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_second */

/* START_OF_SYMBOL_DEFINITION _decode_TestConditions_second */
/**
 * @summary Decodes an ASN.1 element into a(n) TestConditions_second
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestConditions_second} The decoded data structure.
 */
export function _decode_TestConditions_second(el: _Element) {
    if (!_cached_decoder_for_TestConditions_second) {
        _cached_decoder_for_TestConditions_second = $._decodeInteger;
    }
    return _cached_decoder_for_TestConditions_second(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestConditions_second */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_second */
let _cached_encoder_for_TestConditions_second: $.ASN1Encoder<TestConditions_second> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_second */

/* START_OF_SYMBOL_DEFINITION _encode_TestConditions_second */
/**
 * @summary Encodes a(n) TestConditions_second into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestConditions_second, encoded as an ASN.1 Element.
 */
export function _encode_TestConditions_second(
    value: TestConditions_second,
    elGetter: $.ASN1Encoder<TestConditions_second>
) {
    if (!_cached_encoder_for_TestConditions_second) {
        _cached_encoder_for_TestConditions_second = $._encodeInteger;
    }
    return _cached_encoder_for_TestConditions_second(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestConditions_second */

/* eslint-enable */
