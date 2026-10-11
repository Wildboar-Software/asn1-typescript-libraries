/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Abort_reason
 * @description
 *
 * Provider reason on a provider-initiated `Abort-PDU`
 * ([RFC 1085 §8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3),
 * [Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * Section 8.3 lists, as examples, invalid PPDU parameter,
 * unexpected PPDU, unrecognized PPDU, and specified reason.
 * The named integers below are the codes Appendix A assigns.
 * Integers 3, 6, 7, and 8 are unassigned. The memo names
 * `unspecified` and `reference-mismatch` and does not state
 * when either is produced.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-reason  ::=  INTEGER {
 *     unspecified                 (0),
 *     unrecognized-ppdu           (1),
 *     unexpected-ppdu             (2),
 *     unrecognized-ppdu-parameter (4),
 *     invalid-ppdu-parameter      (5),
 *     reference-mismatch          (9)
 * }
 * ```
 */
export
type Abort_reason = INTEGER;

/**
 * @summary Abort_reason_unspecified
 * @description
 *
 * `unspecified` (0). Appendix A assigns this code and does not
 * state the condition that produces it.
 *
 * @constant
 * @type {number}
 */
export
const Abort_reason_unspecified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unspecified
 * @description
 *
 * `unspecified` (0). Appendix A assigns this code and does not
 * state the condition that produces it.
 *
 * @constant
 * @type {number}
 */
export
const unspecified: Abort_reason = Abort_reason_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu
 * @description
 *
 * `unrecognized-ppdu` (1): the PPDU was not recognized
 * ([§8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3)).
 *
 * @constant
 * @type {number}
 */
export
const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognized_ppdu
 * @description
 *
 * `unrecognized-ppdu` (1): the PPDU was not recognized
 * ([§8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3)).
 *
 * @constant
 * @type {number}
 */
export
const unrecognized_ppdu: Abort_reason = Abort_reason_unrecognized_ppdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu
 * @description
 *
 * `unexpected-ppdu` (2): the PPDU was unexpected
 * ([§8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3)).
 * A PDU that arrives in a state which does not handle it
 * causes a provider-initiated abort
 * ([§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)).
 * The memo does not require this integer for that event.
 *
 * @constant
 * @type {number}
 */
export
const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unexpected_ppdu
 * @description
 *
 * `unexpected-ppdu` (2): the PPDU was unexpected
 * ([§8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3)).
 * A PDU that arrives in a state which does not handle it
 * causes a provider-initiated abort
 * ([§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)).
 * The memo does not require this integer for that event.
 *
 * @constant
 * @type {number}
 */
export
const unexpected_ppdu: Abort_reason = Abort_reason_unexpected_ppdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @description
 *
 * `unrecognized-ppdu-parameter` (4): a parameter of the PPDU
 * was not recognized. Integer 3 is unassigned. The memo gives
 * no example
 * ([Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * @constant
 * @type {number}
 */
export
const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognized_ppdu_parameter
 * @description
 *
 * `unrecognized-ppdu-parameter` (4): a parameter of the PPDU
 * was not recognized. Integer 3 is unassigned. The memo gives
 * no example
 * ([Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * @constant
 * @type {number}
 */
export
const unrecognized_ppdu_parameter: Abort_reason = Abort_reason_unrecognized_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_invalid_ppdu_parameter
 * @description
 *
 * `invalid-ppdu-parameter` (5): a PPDU parameter was invalid
 * ([§8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3)).
 *
 * @constant
 * @type {number}
 */
export
const Abort_reason_invalid_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invalid_ppdu_parameter
 * @description
 *
 * `invalid-ppdu-parameter` (5): a PPDU parameter was invalid
 * ([§8.3](https://datatracker.ietf.org/doc/html/rfc1085#section-8.3)).
 *
 * @constant
 * @type {number}
 */
export
const invalid_ppdu_parameter: Abort_reason = Abort_reason_invalid_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_reference_mismatch
 * @description
 *
 * `reference-mismatch` (9). Appendix A assigns this code and
 * does not state the condition that produces it. Integers 6,
 * 7, and 8 are unassigned.
 *
 * @constant
 * @type {number}
 */
export
const Abort_reason_reference_mismatch: Abort_reason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary reference_mismatch
 * @description
 *
 * `reference-mismatch` (9). Appendix A assigns this code and
 * does not state the condition that produces it. Integers 6,
 * 7, and 8 are unassigned.
 *
 * @constant
 * @type {number}
 */
export
const reference_mismatch: Abort_reason = Abort_reason_reference_mismatch; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Abort_reason: $.ASN1Decoder<Abort_reason> = $._decodeInteger;
export const _encode_Abort_reason: $.ASN1Encoder<Abort_reason> = $._encodeInteger;


/* eslint-enable */
