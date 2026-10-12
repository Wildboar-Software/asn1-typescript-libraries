/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_OperatorLeaMessagePriority {
    error = 1,
    informational = 2,
}

/**
 * @summary OperatorLeaMessagePriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperatorLeaMessagePriority  ::=  ENUMERATED
 * {
 *     error(1),
 *         -- reporting of error conditions that have impact on the quality of the
 *         -- intercepted data
 *     informational(2),
 *         -- reporting of conditions that will not have direct impact on the quality of
 *         -- the intercepted data
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type OperatorLeaMessagePriority = _enum_for_OperatorLeaMessagePriority | ENUMERATED;

/**
 * @summary OperatorLeaMessagePriority_error
 * @constant
 * @type {number}
 */
export
const OperatorLeaMessagePriority_error: OperatorLeaMessagePriority = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error
 * @constant
 * @type {number}
 */
export
const error: OperatorLeaMessagePriority = OperatorLeaMessagePriority_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperatorLeaMessagePriority_informational
 * @constant
 * @type {number}
 */
export
const OperatorLeaMessagePriority_informational: OperatorLeaMessagePriority = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @constant
 * @type {number}
 */
export
const informational: OperatorLeaMessagePriority = OperatorLeaMessagePriority_informational; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_OperatorLeaMessagePriority: $.ASN1Decoder<OperatorLeaMessagePriority> = $._decodeEnumerated;
export const _encode_OperatorLeaMessagePriority: $.ASN1Encoder<OperatorLeaMessagePriority> = $._encodeEnumerated;


/* eslint-enable */
