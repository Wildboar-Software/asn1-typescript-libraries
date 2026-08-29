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
 * @summary TestOutcome
 * @description
 *
 * Standardised view of a test result. Present in an uncontrolled test response
 * only on the final confirmation, and in a TO result notification only on the
 * last report for that execution. Reliable only after the execution completes.
 * A test category may refine the meaning of each value.
 * inconclusive (0): neither pass nor fail determined.
 * pass (1): executed correctly; no problem found.
 * fail (2): executed correctly; a problem was found (repair actions may
 * accompany).
 * timed-out (3): ceased because of a timeout or scheduling conflict.
 * premature-termination (4): never started, or ceased early (spontaneously or
 * by request; used on terminate if outcome not yet concluded). ITU-T Rec. X.745
 * (11/93) §8.1.5, 7.2.3, 7.2.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
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
 * @description
 *
 * Neither pass nor fail has been determined. ITU-T Rec. X.745 (11/93) §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TestOutcome_inconclusive: TestOutcome = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_inconclusive
 * @description
 *
 * Neither pass nor fail has been determined. ITU-T Rec. X.745 (11/93) §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const inconclusive: TestOutcome = TestOutcome_inconclusive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_pass
 * @description
 *
 * Test executed correctly and no problems were found. ITU-T Rec. X.745 (11/93)
 * §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TestOutcome_pass: TestOutcome = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_pass
 * @description
 *
 * Test executed correctly and no problems were found. ITU-T Rec. X.745 (11/93)
 * §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const pass: TestOutcome = TestOutcome_pass; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_fail
 * @description
 *
 * Test executed correctly and a problem was found. ITU-T Rec. X.745 (11/93)
 * §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TestOutcome_fail: TestOutcome = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_fail
 * @description
 *
 * Test executed correctly and a problem was found. ITU-T Rec. X.745 (11/93)
 * §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const fail: TestOutcome = TestOutcome_fail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_timed_out
 * @description
 *
 * Execution ceased because of a time-out or scheduling conflict. ITU-T Rec.
 * X.745 (11/93) §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TestOutcome_timed_out: TestOutcome = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_timed_out
 * @description
 *
 * Execution ceased because of a time-out or scheduling conflict. ITU-T Rec.
 * X.745 (11/93) §8.1.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const timed_out: TestOutcome = TestOutcome_timed_out; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_premature_termination
 * @description
 *
 * Execution never started or ceased prematurely, spontaneously or by request.
 * ITU-T Rec. X.745 (11/93) §8.1.5, 7.2.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TestOutcome_premature_termination: TestOutcome = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestOutcome_premature_termination
 * @description
 *
 * Execution never started or ceased prematurely, spontaneously or by request.
 * ITU-T Rec. X.745 (11/93) §8.1.5, 7.2.5.
 * [§8.1.5](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const premature_termination: TestOutcome = TestOutcome_premature_termination; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestOutcome = $._decodeInteger;


export const _encode_TestOutcome = $._encodeInteger;


/* eslint-enable */
