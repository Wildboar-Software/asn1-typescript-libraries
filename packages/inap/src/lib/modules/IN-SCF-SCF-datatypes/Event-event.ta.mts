/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Event_event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-event ::=
 * ENUMERATED {
 *   now(0),
 *   answer(1),
 *   user-interaction(2),
 *   failure(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Event_event {
    now = 0,
    answer = 1,
    user_interaction = 2,
    failure = 3,
}

/**
 * @summary Event_event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-event ::=
 * ENUMERATED {
 *   now(0),
 *   answer(1),
 *   user-interaction(2),
 *   failure(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Event_event = _enum_for_Event_event;

/**
 * @summary Event_event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-event ::=
 * ENUMERATED {
 *   now(0),
 *   answer(1),
 *   user-interaction(2),
 *   failure(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Event_event = _enum_for_Event_event;

/**
 * @summary Event_event_now
 * @constant
 * @type {number}
 */
export
const Event_event_now = Event_event.now; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary now
 * @constant
 * @type {number}
 */
export
const now = Event_event.now; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Event_event_answer
 * @constant
 * @type {number}
 */
export
const Event_event_answer = Event_event.answer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answer
 * @constant
 * @type {number}
 */
export
const answer = Event_event.answer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Event_event_user_interaction
 * @constant
 * @type {number}
 */
export
const Event_event_user_interaction = Event_event.user_interaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_interaction
 * @constant
 * @type {number}
 */
export
const user_interaction = Event_event.user_interaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Event_event_failure
 * @constant
 * @type {number}
 */
export
const Event_event_failure = Event_event.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure = Event_event.failure; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Event_event(el: _Element): Event_event {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Event_event.now: return Event_event.now;
        case Event_event.answer: return Event_event.answer;
        case Event_event.user_interaction: return Event_event.user_interaction;
        case Event_event.failure: return Event_event.failure;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Event_event.",
                el,
            );
    }
}

export
const _encode_Event_event: $.ASN1Encoder<Event_event> = $._encodeEnumerated as $.ASN1Encoder<Event_event>;

/* eslint-enable */
