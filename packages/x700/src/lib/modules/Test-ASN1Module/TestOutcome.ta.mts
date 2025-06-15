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

/* START_OF_SYMBOL_DEFINITION TestOutcome */
/**
 * @summary TestOutcome
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestOutcome  ::=  INTEGER {
 *   inconclusive(0), pass(1), fail(2), timed-out(3), premature-termination(4)
 * }
 * ```
 */
export type TestOutcome = INTEGER;
/* END_OF_SYMBOL_DEFINITION TestOutcome */

/* START_OF_SYMBOL_DEFINITION TestOutcome_inconclusive */
/**
 * @summary TestOutcome_inconclusive
 * @constant
 * @type {number}
 */
export const TestOutcome_inconclusive: TestOutcome = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_inconclusive */

/* START_OF_SYMBOL_DEFINITION inconclusive */
/**
 * @summary TestOutcome_inconclusive
 * @constant
 * @type {number}
 */
export const inconclusive: TestOutcome = TestOutcome_inconclusive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inconclusive */

/* START_OF_SYMBOL_DEFINITION TestOutcome_pass */
/**
 * @summary TestOutcome_pass
 * @constant
 * @type {number}
 */
export const TestOutcome_pass: TestOutcome = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_pass */

/* START_OF_SYMBOL_DEFINITION pass */
/**
 * @summary TestOutcome_pass
 * @constant
 * @type {number}
 */
export const pass: TestOutcome = TestOutcome_pass; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pass */

/* START_OF_SYMBOL_DEFINITION TestOutcome_fail */
/**
 * @summary TestOutcome_fail
 * @constant
 * @type {number}
 */
export const TestOutcome_fail: TestOutcome = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_fail */

/* START_OF_SYMBOL_DEFINITION fail */
/**
 * @summary TestOutcome_fail
 * @constant
 * @type {number}
 */
export const fail: TestOutcome = TestOutcome_fail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION fail */

/* START_OF_SYMBOL_DEFINITION TestOutcome_timed_out */
/**
 * @summary TestOutcome_timed_out
 * @constant
 * @type {number}
 */
export const TestOutcome_timed_out: TestOutcome = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_timed_out */

/* START_OF_SYMBOL_DEFINITION timed_out */
/**
 * @summary TestOutcome_timed_out
 * @constant
 * @type {number}
 */
export const timed_out: TestOutcome = TestOutcome_timed_out; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timed_out */

/* START_OF_SYMBOL_DEFINITION TestOutcome_premature_termination */
/**
 * @summary TestOutcome_premature_termination
 * @constant
 * @type {number}
 */
export const TestOutcome_premature_termination: TestOutcome = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_premature_termination */

/* START_OF_SYMBOL_DEFINITION premature_termination */
/**
 * @summary TestOutcome_premature_termination
 * @constant
 * @type {number}
 */
export const premature_termination: TestOutcome = TestOutcome_premature_termination; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION premature_termination */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestOutcome */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestOutcome */

/* START_OF_SYMBOL_DEFINITION _decode_TestOutcome */
export const _decode_TestOutcome = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TestOutcome */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestOutcome */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestOutcome */

/* START_OF_SYMBOL_DEFINITION _encode_TestOutcome */
export const _encode_TestOutcome = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TestOutcome */

/* eslint-enable */
