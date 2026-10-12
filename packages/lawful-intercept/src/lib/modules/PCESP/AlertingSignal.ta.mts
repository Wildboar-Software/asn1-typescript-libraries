/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AlertingSignal {
    notUsed = 0,
    alertingPattern0 = 1,
    alertingPattern1 = 2,
    alertingPattern2 = 3,
    alertingPattern3 = 4,
    alertingPattern4 = 5,
    callWaitingPattern1 = 6,
    callWaitingPattern2 = 7,
    callWaitingPattern3 = 8,
    callWaitingPattern4 = 9,
    bargeInTone = 10,
    alertingPattern5 = 11,
    alertingPattern6 = 12,
    alertingPattern7 = 13,
    alertingPattern8 = 14,
    alertingPattern9 = 15,
}

/**
 * @summary AlertingSignal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertingSignal  ::=  ENUMERATED {
 *     notUsed (0), -- Reserved
 *     alertingPattern0 (1), -- normal ringing
 *     alertingPattern1 (2), -- distinctive ringing: intergroup
 *     alertingPattern2 (3), -- distinctive ringing: special/priority
 *     alertingPattern3 (4), -- distinctive ringing: electronic key
 *     -- telephone srvc
 *     alertingPattern4 (5), -- ringsplash, reminder ring
 *     callWaitingPattern1 (6), -- normal call waiting tone
 *     callWaitingPattern2 (7), -- incoming additional call waiting tone
 *     callWaitingPattern3 (8), -- priority additional call waiting tone
 *     callWaitingPattern4 (9), -- distinctive call waiting tone
 *     bargeInTone (10), -- barge-in tone (e.g. for operator barge-in)
 *     alertingPattern5 (11), -- distinctive ringing: solution specific
 *     alertingPattern6 (12), -- distinctive ringing: solution specific
 *     alertingPattern7 (13), -- distinctive ringing: solution specific
 *     alertingPattern8 (14), -- distinctive ringing: solution specific
 *     alertingPattern9 (15), -- distinctive ringing: solution specific
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlertingSignal = _enum_for_AlertingSignal | ENUMERATED;

/**
 * @summary AlertingSignal_notUsed
 * @constant
 * @type {number}
 */
export
const AlertingSignal_notUsed: AlertingSignal = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notUsed
 * @constant
 * @type {number}
 */
export
const notUsed: AlertingSignal = AlertingSignal_notUsed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern0
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern0: AlertingSignal = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern0
 * @constant
 * @type {number}
 */
export
const alertingPattern0: AlertingSignal = AlertingSignal_alertingPattern0; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern1
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern1: AlertingSignal = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern1
 * @constant
 * @type {number}
 */
export
const alertingPattern1: AlertingSignal = AlertingSignal_alertingPattern1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern2
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern2: AlertingSignal = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern2
 * @constant
 * @type {number}
 */
export
const alertingPattern2: AlertingSignal = AlertingSignal_alertingPattern2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern3
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern3: AlertingSignal = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern3
 * @constant
 * @type {number}
 */
export
const alertingPattern3: AlertingSignal = AlertingSignal_alertingPattern3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern4
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern4: AlertingSignal = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern4
 * @constant
 * @type {number}
 */
export
const alertingPattern4: AlertingSignal = AlertingSignal_alertingPattern4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern1
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern1: AlertingSignal = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern1
 * @constant
 * @type {number}
 */
export
const callWaitingPattern1: AlertingSignal = AlertingSignal_callWaitingPattern1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern2
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern2: AlertingSignal = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern2
 * @constant
 * @type {number}
 */
export
const callWaitingPattern2: AlertingSignal = AlertingSignal_callWaitingPattern2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern3
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern3: AlertingSignal = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern3
 * @constant
 * @type {number}
 */
export
const callWaitingPattern3: AlertingSignal = AlertingSignal_callWaitingPattern3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern4
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern4: AlertingSignal = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern4
 * @constant
 * @type {number}
 */
export
const callWaitingPattern4: AlertingSignal = AlertingSignal_callWaitingPattern4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_bargeInTone
 * @constant
 * @type {number}
 */
export
const AlertingSignal_bargeInTone: AlertingSignal = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bargeInTone
 * @constant
 * @type {number}
 */
export
const bargeInTone: AlertingSignal = AlertingSignal_bargeInTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern5
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern5: AlertingSignal = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern5
 * @constant
 * @type {number}
 */
export
const alertingPattern5: AlertingSignal = AlertingSignal_alertingPattern5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern6
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern6: AlertingSignal = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern6
 * @constant
 * @type {number}
 */
export
const alertingPattern6: AlertingSignal = AlertingSignal_alertingPattern6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern7
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern7: AlertingSignal = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern7
 * @constant
 * @type {number}
 */
export
const alertingPattern7: AlertingSignal = AlertingSignal_alertingPattern7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern8
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern8: AlertingSignal = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern8
 * @constant
 * @type {number}
 */
export
const alertingPattern8: AlertingSignal = AlertingSignal_alertingPattern8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern9
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern9: AlertingSignal = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern9
 * @constant
 * @type {number}
 */
export
const alertingPattern9: AlertingSignal = AlertingSignal_alertingPattern9; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertingSignal: $.ASN1Decoder<AlertingSignal> = $._decodeEnumerated;
export const _encode_AlertingSignal: $.ASN1Encoder<AlertingSignal> = $._encodeEnumerated;


/* eslint-enable */
