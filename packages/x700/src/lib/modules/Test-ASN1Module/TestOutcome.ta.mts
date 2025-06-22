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
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary TestOutcome_inconclusive
 * @constant
 * @type {number}
 */
export const TestOutcome_inconclusive: TestOutcome = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_inconclusive
 * @constant
 * @type {number}
 */
export const inconclusive: TestOutcome = TestOutcome_inconclusive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_pass
 * @constant
 * @type {number}
 */
export const TestOutcome_pass: TestOutcome = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_pass
 * @constant
 * @type {number}
 */
export const pass: TestOutcome = TestOutcome_pass; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_fail
 * @constant
 * @type {number}
 */
export const TestOutcome_fail: TestOutcome = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_fail
 * @constant
 * @type {number}
 */
export const fail: TestOutcome = TestOutcome_fail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_timed_out
 * @constant
 * @type {number}
 */
export const TestOutcome_timed_out: TestOutcome = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_timed_out
 * @constant
 * @type {number}
 */
export const timed_out: TestOutcome = TestOutcome_timed_out; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_premature_termination
 * @constant
 * @type {number}
 */
export const TestOutcome_premature_termination: TestOutcome = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_premature_termination
 * @constant
 * @type {number}
 */
export const premature_termination: TestOutcome = TestOutcome_premature_termination; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestOutcome = $._decodeInteger;


export const _encode_TestOutcome = $._encodeInteger;


/* eslint-enable */
