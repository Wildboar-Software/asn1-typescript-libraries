/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service1 ::=  ENUMERATED{
 *         messageWaitingIndicator(0),
 *         visualMessageWaitingIndicator(1),
 *         anonymousCallRejection(2),
 *         automaticCallback(3),
 *         automaticRecall(4),
 *         callScreening(5),
 *         outsideCallingAreaAlerting(6),
 *         callingIdPresentAndSuppress(7),
 *         callWaiting(8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service1 {
    messageWaitingIndicator = 0,
    visualMessageWaitingIndicator = 1,
    anonymousCallRejection = 2,
    automaticCallback = 3,
    automaticRecall = 4,
    callScreening = 5,
    outsideCallingAreaAlerting = 6,
    callingIdPresentAndSuppress = 7,
    callWaiting = 8,
}

/**
 * @summary Service1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service1 ::=  ENUMERATED{
 *         messageWaitingIndicator(0),
 *         visualMessageWaitingIndicator(1),
 *         anonymousCallRejection(2),
 *         automaticCallback(3),
 *         automaticRecall(4),
 *         callScreening(5),
 *         outsideCallingAreaAlerting(6),
 *         callingIdPresentAndSuppress(7),
 *         callWaiting(8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service1 = _enum_for_Service1;

/**
 * @summary Service1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service1 ::=  ENUMERATED{
 *         messageWaitingIndicator(0),
 *         visualMessageWaitingIndicator(1),
 *         anonymousCallRejection(2),
 *         automaticCallback(3),
 *         automaticRecall(4),
 *         callScreening(5),
 *         outsideCallingAreaAlerting(6),
 *         callingIdPresentAndSuppress(7),
 *         callWaiting(8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service1 = _enum_for_Service1;

/**
 * @summary Service1_messageWaitingIndicator
 * @constant
 * @type {number}
 */
export
const Service1_messageWaitingIndicator: Service1 = Service1.messageWaitingIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWaitingIndicator
 * @constant
 * @type {number}
 */
export
const messageWaitingIndicator: Service1 = Service1.messageWaitingIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_visualMessageWaitingIndicator
 * @constant
 * @type {number}
 */
export
const Service1_visualMessageWaitingIndicator: Service1 = Service1.visualMessageWaitingIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary visualMessageWaitingIndicator
 * @constant
 * @type {number}
 */
export
const visualMessageWaitingIndicator: Service1 = Service1.visualMessageWaitingIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_anonymousCallRejection
 * @constant
 * @type {number}
 */
export
const Service1_anonymousCallRejection: Service1 = Service1.anonymousCallRejection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anonymousCallRejection
 * @constant
 * @type {number}
 */
export
const anonymousCallRejection: Service1 = Service1.anonymousCallRejection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_automaticCallback
 * @constant
 * @type {number}
 */
export
const Service1_automaticCallback: Service1 = Service1.automaticCallback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary automaticCallback
 * @constant
 * @type {number}
 */
export
const automaticCallback: Service1 = Service1.automaticCallback; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_automaticRecall
 * @constant
 * @type {number}
 */
export
const Service1_automaticRecall: Service1 = Service1.automaticRecall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary automaticRecall
 * @constant
 * @type {number}
 */
export
const automaticRecall: Service1 = Service1.automaticRecall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_callScreening
 * @constant
 * @type {number}
 */
export
const Service1_callScreening: Service1 = Service1.callScreening; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callScreening
 * @constant
 * @type {number}
 */
export
const callScreening: Service1 = Service1.callScreening; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_outsideCallingAreaAlerting
 * @constant
 * @type {number}
 */
export
const Service1_outsideCallingAreaAlerting: Service1 = Service1.outsideCallingAreaAlerting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outsideCallingAreaAlerting
 * @constant
 * @type {number}
 */
export
const outsideCallingAreaAlerting: Service1 = Service1.outsideCallingAreaAlerting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_callingIdPresentAndSuppress
 * @constant
 * @type {number}
 */
export
const Service1_callingIdPresentAndSuppress: Service1 = Service1.callingIdPresentAndSuppress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingIdPresentAndSuppress
 * @constant
 * @type {number}
 */
export
const callingIdPresentAndSuppress: Service1 = Service1.callingIdPresentAndSuppress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service1_callWaiting
 * @constant
 * @type {number}
 */
export
const Service1_callWaiting: Service1 = Service1.callWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaiting
 * @constant
 * @type {number}
 */
export
const callWaiting: Service1 = Service1.callWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service1: $.ASN1Decoder<Service1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service1 (el: _Element): Service1 {
    if (!_cached_decoder_for_Service1) { _cached_decoder_for_Service1 = $._decodeEnumerated; }
    return _cached_decoder_for_Service1(el);
}

let _cached_encoder_for_Service1: $.ASN1Encoder<Service1> | null = null;

/**
 * @summary Encodes a(n) Service1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service1, encoded as an ASN.1 Element.
 */
export
function _encode_Service1 (value: Service1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service1) { _cached_encoder_for_Service1 = $._encodeEnumerated; }
    return _cached_encoder_for_Service1(value, elGetter);
}


/* eslint-enable */
