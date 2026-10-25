/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Result of the POP3, IMAP4, or authenticated-SMTP exchange reported in
 * `AAAInformation`.
 *
 * Clauses 6.2.3 and 6.4.3 require that the result be included. The module does
 * not define `resultUnknown`, `aAAFailed`, or `aAASucceeded` beyond those
 * names, and it does not map them onto SMTP reply codes or POP3 `+OK` / `-ERR`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3 and 6.4.3 and annex D.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_AAAResult {
    /**
     * The authentication result is unknown. The module gives no further rule
     * for when to use this value.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
     */
    resultUnknown = 1,
    /**
     * The authentication failed. The module does not tie this value to a
     * particular protocol error.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
     */
    aAAFailed = 2,
    /**
     * The authentication succeeded. The module does not tie this value to a
     * particular protocol success code.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
     */
    aAASucceeded = 3,
}

/**
 * @summary AAAResult
 * @description
 *
 * Result of the POP3, IMAP4, or authenticated-SMTP exchange reported in
 * `AAAInformation`.
 *
 * Clauses 6.2.3 and 6.4.3 require that the result be included. The module does
 * not define `resultUnknown`, `aAAFailed`, or `aAASucceeded` beyond those
 * names, and it does not map them onto SMTP reply codes or POP3 `+OK` / `-ERR`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3 and 6.4.3 and annex D.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAAResult  ::=  ENUMERATED
 * {
 *     resultUnknown(1),
 *     aAAFailed(2),
 *     aAASucceeded(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AAAResult = _enum_for_AAAResult | ENUMERATED;

/**
 * @summary AAAResult_resultUnknown
 * @description
 *
 * The authentication result is unknown. The module gives no further rule for
 * when to use this value.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
 *
 * @constant
 * @type {number}
 */
export
const AAAResult_resultUnknown = _enum_for_AAAResult.resultUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resultUnknown
 * @description
 *
 * The authentication result is unknown. The module gives no further rule for
 * when to use this value.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
 *
 * @constant
 * @type {number}
 */
export
const resultUnknown = AAAResult_resultUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAResult_aAAFailed
 * @description
 *
 * The authentication failed. The module does not tie this value to a particular
 * protocol error.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
 *
 * @constant
 * @type {number}
 */
export
const AAAResult_aAAFailed = _enum_for_AAAResult.aAAFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aAAFailed
 * @description
 *
 * The authentication failed. The module does not tie this value to a particular
 * protocol error.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
 *
 * @constant
 * @type {number}
 */
export
const aAAFailed = AAAResult_aAAFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAResult_aAASucceeded
 * @description
 *
 * The authentication succeeded. The module does not tie this value to a
 * particular protocol success code.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
 *
 * @constant
 * @type {number}
 */
export
const AAAResult_aAASucceeded = _enum_for_AAAResult.aAASucceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aAASucceeded
 * @description
 *
 * The authentication succeeded. The module does not tie this value to a
 * particular protocol success code.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`AAAResult`).
 *
 * @constant
 * @type {number}
 */
export
const aAASucceeded = AAAResult_aAASucceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AAAResult: $.ASN1Decoder<AAAResult> = $._decodeEnumerated;
export const _encode_AAAResult: $.ASN1Encoder<AAAResult> = $._encodeEnumerated;


/* eslint-enable */
