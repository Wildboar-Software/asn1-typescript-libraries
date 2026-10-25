/* eslint-disable */
import {
    type ENUMERATED
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
 * Group-call alert condition: the alert was sent, received, or cancelled.
 * 
 * Conditional on a PTC group-call record when an emergency alert was indicated,
 * or when that alert signalling was cancelled.
 * 
 * 3GPP TS 33.108, clause 17.1.5, table 17.3.2, and table 17.3.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * @description
 * 
 * The group-call emergency alert was sent.
 * 
 * 3GPP TS 33.108, clause 17.1.5 and table 17.3.2.
 * @constant
 * @type {number}
 */
export
const AlertIndicator_sent = _enum_for_AlertIndicator.sent satisfies AlertIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @description
 * 
 * The group-call emergency alert was sent (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const sent = AlertIndicator_sent satisfies AlertIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_received
 * @description
 * 
 * The group-call emergency alert was received.
 * 
 * 3GPP TS 33.108, clause 17.1.5 and table 17.3.2.
 * @constant
 * @type {number}
 */
export
const AlertIndicator_received = _enum_for_AlertIndicator.received satisfies AlertIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @description
 * 
 * The group-call emergency alert was received (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const received = AlertIndicator_received satisfies AlertIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_cancelled
 * @description
 * 
 * The group-call emergency alert was cancelled.
 * 
 * 3GPP TS 33.108, clause 17.1.5 and table 17.3.3.
 * @constant
 * @type {number}
 */
export
const AlertIndicator_cancelled = _enum_for_AlertIndicator.cancelled satisfies AlertIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @description
 * 
 * The group-call emergency alert was cancelled (clause 17.3.3).
 * @constant
 * @type {number}
 */
export
const cancelled = AlertIndicator_cancelled satisfies AlertIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertIndicator: $.ASN1Decoder<AlertIndicator> = $._decodeEnumerated;
export const _encode_AlertIndicator: $.ASN1Encoder<AlertIndicator> = $._encodeEnumerated;


/* eslint-enable */
