/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CorrelationReason
 * @description
 *
 * Why the Original Call and the Requested Call are correlated (ECMA-344
 * §6.3.1). Range 0..255. Only 0, 1, and 2 are named. §6.5 is silent on when
 * the element is present and which value is sent.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationReason  ::=  INTEGER {
 *     unknown(0),
 *     mCACommunication(1),
 *     cTIApplication(2)
 * } (0..255)
 * ```
 */
export
type CorrelationReason = INTEGER;

/**
 * @summary CorrelationReason_unknown
 * @description
 *
 * Named value 0. ECMA-344 §6.3.1 gives this value no definition beyond the
 * identifier.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 */
export
const CorrelationReason_unknown: 0 = 0 satisfies CorrelationReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link CorrelationReason_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown: 0 = CorrelationReason_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_mCACommunication
 * @description
 *
 * Named value 1. ECMA-344 §6.3.1 gives this value no definition beyond the
 * identifier `mCACommunication`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 */
export
const CorrelationReason_mCACommunication: 1 = 1 satisfies CorrelationReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mCACommunication
 * @description Alias of {@link CorrelationReason_mCACommunication}.
 * @constant
 * @type {number}
 */
export
const mCACommunication: 1 = CorrelationReason_mCACommunication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_cTIApplication
 * @description
 *
 * Named value 2. ECMA-344 §6.3.1 gives this value no definition beyond the
 * identifier `cTIApplication`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 */
export
const CorrelationReason_cTIApplication: 2 = 2 satisfies CorrelationReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cTIApplication
 * @description Alias of {@link CorrelationReason_cTIApplication}.
 * @constant
 * @type {number}
 */
export
const cTIApplication: 2 = CorrelationReason_cTIApplication; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CorrelationReason = (el: _Element): CorrelationReason => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("CorrelationReason violates INTEGER constraint");
    }
    return value;
};

export
const _encode_CorrelationReason: $.ASN1Encoder<CorrelationReason> = $._encodeInteger;

/* eslint-enable */
