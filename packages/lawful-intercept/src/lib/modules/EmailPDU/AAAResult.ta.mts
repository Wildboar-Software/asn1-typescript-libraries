/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AAAResult {
    resultUnknown = 1,
    aAAFailed = 2,
    aAASucceeded = 3,
}

/**
 * @summary AAAResult
 * @description
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
 * @constant
 * @type {number}
 */
export
const AAAResult_resultUnknown: AAAResult = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resultUnknown
 * @constant
 * @type {number}
 */
export
const resultUnknown: AAAResult = AAAResult_resultUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAResult_aAAFailed
 * @constant
 * @type {number}
 */
export
const AAAResult_aAAFailed: AAAResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aAAFailed
 * @constant
 * @type {number}
 */
export
const aAAFailed: AAAResult = AAAResult_aAAFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAResult_aAASucceeded
 * @constant
 * @type {number}
 */
export
const AAAResult_aAASucceeded: AAAResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aAASucceeded
 * @constant
 * @type {number}
 */
export
const aAASucceeded: AAAResult = AAAResult_aAASucceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AAAResult: $.ASN1Decoder<AAAResult> = $._decodeEnumerated;
export const _encode_AAAResult: $.ASN1Encoder<AAAResult> = $._encodeEnumerated;


/* eslint-enable */
