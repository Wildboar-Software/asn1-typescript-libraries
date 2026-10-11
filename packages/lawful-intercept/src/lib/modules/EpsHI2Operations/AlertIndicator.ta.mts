/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AlertIndicator {
    sent = 1,
    received = 2,
    cancelled = 3,
}

/**
 * @summary AlertIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertIndicator  ::=  ENUMERATED
 * {
 *     -- indicates the group call alert condition.
 *                                     sent    (1),
 *                                 received    (2),
 *                                 cancelled    (3),
 *     ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type AlertIndicator = _enum_for_AlertIndicator | ENUMERATED;

/**
 * @summary AlertIndicator_sent
 * @constant
 * @type {number}
 */
export
const AlertIndicator_sent: AlertIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: AlertIndicator = AlertIndicator_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_received
 * @constant
 * @type {number}
 */
export
const AlertIndicator_received: AlertIndicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @constant
 * @type {number}
 */
export
const received: AlertIndicator = AlertIndicator_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_cancelled
 * @constant
 * @type {number}
 */
export
const AlertIndicator_cancelled: AlertIndicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: AlertIndicator = AlertIndicator_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_AlertIndicator: $.ASN1Decoder<AlertIndicator> = $._decodeEnumerated;

export const _encode_AlertIndicator: $.ASN1Encoder<AlertIndicator> = $._encodeEnumerated;


/* eslint-enable */
