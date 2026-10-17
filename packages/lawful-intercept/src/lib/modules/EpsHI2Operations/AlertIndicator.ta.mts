/* eslint-disable */
import {
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
 * Group-call alert condition for a PTC or MCPTT emergency call: whether the
 * alert was sent, received, or cancelled (table 17.1.5). Carried on the
 * group-call request, cancel, and response records (clauses 17.3.2 to 17.3.4).
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * The group-call alert was sent (table 17.1.5). The module comment calls this
 * the group-call alert condition.
 * 
 * @constant
 * @type {number}
 */
export
const AlertIndicator_sent: AlertIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @description
 * 
 * The group-call alert was sent (clause 17.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const sent: AlertIndicator = AlertIndicator_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_received
 * @description
 * 
 * The group-call alert was received (table 17.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const AlertIndicator_received: AlertIndicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @description
 * 
 * The group-call alert was received (clause 17.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const received: AlertIndicator = AlertIndicator_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertIndicator_cancelled
 * @description
 * 
 * The group-call alert was cancelled (table 17.1.5). On a group-call cancel
 * record, alert signalling was cancelled (table 17.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const AlertIndicator_cancelled: AlertIndicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @description
 * 
 * The group-call alert was cancelled (clause 17.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const cancelled: AlertIndicator = AlertIndicator_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertIndicator: $.ASN1Decoder<AlertIndicator> = $._decodeEnumerated;
export const _encode_AlertIndicator: $.ASN1Encoder<AlertIndicator> = $._encodeEnumerated;


/* eslint-enable */
