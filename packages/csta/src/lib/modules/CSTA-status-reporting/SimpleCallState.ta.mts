/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SimpleCallState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleCallState  ::=  ENUMERATED
 * {     callNull             (  0),     -- �00�H         - null-null
 *     callPending             (  1),     -- �01�H         - null-initiate
 *     callOriginated             (  3),     -- �03�H         - null-connect
 *     callDelivered             ( 35),     -- �23�H         - alerting-connect
 *     callDeliveredHeld         ( 36),     -- �24�H         - alerting-held
 *     callReceived             ( 50),     -- �32�H         - connect-alerting
 *     callEstablished         ( 51),     -- �33�H         - connect-connect
 *     callEstablishedHeld         ( 52),     -- �34�H         - connected-held
 *     callReceivedOnHold         ( 66),     -- �42�H         - held-alerting
 *     callEstablishedOnHold         ( 67),     -- �43�H         - held-connect
 *     callQueued             ( 83),     -- �53�H         - queued-connect
 *     callQueuedHeld             ( 84),     -- �54�H         - queued-held
 *     callFailed             ( 99),     -- �63�H         - failed-connect
 *     callFailedHeld             (100),     -- �64�H         - failed-held
 *     callBlocked             ( 96) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SimpleCallState {
    callNull = 0,
    callPending = 1,
    callOriginated = 3,
    callDelivered = 35,
    callDeliveredHeld = 36,
    callReceived = 50,
    callEstablished = 51,
    callEstablishedHeld = 52,
    callReceivedOnHold = 66,
    callEstablishedOnHold = 67,
    callQueued = 83,
    callQueuedHeld = 84,
    callFailed = 99,
    callFailedHeld = 100,
    callBlocked = 96,
}

/**
 * @summary SimpleCallState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleCallState  ::=  ENUMERATED
 * {     callNull             (  0),     -- �00�H         - null-null
 *     callPending             (  1),     -- �01�H         - null-initiate
 *     callOriginated             (  3),     -- �03�H         - null-connect
 *     callDelivered             ( 35),     -- �23�H         - alerting-connect
 *     callDeliveredHeld         ( 36),     -- �24�H         - alerting-held
 *     callReceived             ( 50),     -- �32�H         - connect-alerting
 *     callEstablished         ( 51),     -- �33�H         - connect-connect
 *     callEstablishedHeld         ( 52),     -- �34�H         - connected-held
 *     callReceivedOnHold         ( 66),     -- �42�H         - held-alerting
 *     callEstablishedOnHold         ( 67),     -- �43�H         - held-connect
 *     callQueued             ( 83),     -- �53�H         - queued-connect
 *     callQueuedHeld             ( 84),     -- �54�H         - queued-held
 *     callFailed             ( 99),     -- �63�H         - failed-connect
 *     callFailedHeld             (100),     -- �64�H         - failed-held
 *     callBlocked             ( 96) }
 * ```
 * 
 * @enum {number}
 */
export
type SimpleCallState = _enum_for_SimpleCallState;

/**
 * @summary SimpleCallState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleCallState  ::=  ENUMERATED
 * {     callNull             (  0),     -- �00�H         - null-null
 *     callPending             (  1),     -- �01�H         - null-initiate
 *     callOriginated             (  3),     -- �03�H         - null-connect
 *     callDelivered             ( 35),     -- �23�H         - alerting-connect
 *     callDeliveredHeld         ( 36),     -- �24�H         - alerting-held
 *     callReceived             ( 50),     -- �32�H         - connect-alerting
 *     callEstablished         ( 51),     -- �33�H         - connect-connect
 *     callEstablishedHeld         ( 52),     -- �34�H         - connected-held
 *     callReceivedOnHold         ( 66),     -- �42�H         - held-alerting
 *     callEstablishedOnHold         ( 67),     -- �43�H         - held-connect
 *     callQueued             ( 83),     -- �53�H         - queued-connect
 *     callQueuedHeld             ( 84),     -- �54�H         - queued-held
 *     callFailed             ( 99),     -- �63�H         - failed-connect
 *     callFailedHeld             (100),     -- �64�H         - failed-held
 *     callBlocked             ( 96) }
 * ```
 * 
 * @enum {number}
 */
export
const SimpleCallState = _enum_for_SimpleCallState;

/**
 * @summary SimpleCallState_callNull
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callNull: SimpleCallState = SimpleCallState.callNull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callNull
 * @constant
 * @type {number}
 */
export
const callNull: SimpleCallState = SimpleCallState.callNull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callPending
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callPending: SimpleCallState = SimpleCallState.callPending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callPending
 * @constant
 * @type {number}
 */
export
const callPending: SimpleCallState = SimpleCallState.callPending; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callOriginated
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callOriginated: SimpleCallState = SimpleCallState.callOriginated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callOriginated
 * @constant
 * @type {number}
 */
export
const callOriginated: SimpleCallState = SimpleCallState.callOriginated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callDelivered
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callDelivered: SimpleCallState = SimpleCallState.callDelivered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDelivered
 * @constant
 * @type {number}
 */
export
const callDelivered: SimpleCallState = SimpleCallState.callDelivered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callDeliveredHeld
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callDeliveredHeld: SimpleCallState = SimpleCallState.callDeliveredHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeliveredHeld
 * @constant
 * @type {number}
 */
export
const callDeliveredHeld: SimpleCallState = SimpleCallState.callDeliveredHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callReceived
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callReceived: SimpleCallState = SimpleCallState.callReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReceived
 * @constant
 * @type {number}
 */
export
const callReceived: SimpleCallState = SimpleCallState.callReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callEstablished
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callEstablished: SimpleCallState = SimpleCallState.callEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablished
 * @constant
 * @type {number}
 */
export
const callEstablished: SimpleCallState = SimpleCallState.callEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callEstablishedHeld
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callEstablishedHeld: SimpleCallState = SimpleCallState.callEstablishedHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablishedHeld
 * @constant
 * @type {number}
 */
export
const callEstablishedHeld: SimpleCallState = SimpleCallState.callEstablishedHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callReceivedOnHold
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callReceivedOnHold: SimpleCallState = SimpleCallState.callReceivedOnHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReceivedOnHold
 * @constant
 * @type {number}
 */
export
const callReceivedOnHold: SimpleCallState = SimpleCallState.callReceivedOnHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callEstablishedOnHold
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callEstablishedOnHold: SimpleCallState = SimpleCallState.callEstablishedOnHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablishedOnHold
 * @constant
 * @type {number}
 */
export
const callEstablishedOnHold: SimpleCallState = SimpleCallState.callEstablishedOnHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callQueued
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callQueued: SimpleCallState = SimpleCallState.callQueued; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callQueued
 * @constant
 * @type {number}
 */
export
const callQueued: SimpleCallState = SimpleCallState.callQueued; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callQueuedHeld
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callQueuedHeld: SimpleCallState = SimpleCallState.callQueuedHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callQueuedHeld
 * @constant
 * @type {number}
 */
export
const callQueuedHeld: SimpleCallState = SimpleCallState.callQueuedHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callFailed
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callFailed: SimpleCallState = SimpleCallState.callFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailed
 * @constant
 * @type {number}
 */
export
const callFailed: SimpleCallState = SimpleCallState.callFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callFailedHeld
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callFailedHeld: SimpleCallState = SimpleCallState.callFailedHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailedHeld
 * @constant
 * @type {number}
 */
export
const callFailedHeld: SimpleCallState = SimpleCallState.callFailedHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callBlocked
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callBlocked: SimpleCallState = SimpleCallState.callBlocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBlocked
 * @constant
 * @type {number}
 */
export
const callBlocked: SimpleCallState = SimpleCallState.callBlocked; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SimpleCallState: $.ASN1Decoder<SimpleCallState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCallState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleCallState (el: _Element): SimpleCallState {
    if (!_cached_decoder_for_SimpleCallState) { _cached_decoder_for_SimpleCallState = $._decodeEnumerated; }
    return _cached_decoder_for_SimpleCallState(el);
}

let _cached_encoder_for_SimpleCallState: $.ASN1Encoder<SimpleCallState> | null = null;

/**
 * @summary Encodes a(n) SimpleCallState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCallState, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleCallState (value: SimpleCallState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleCallState) { _cached_encoder_for_SimpleCallState = $._encodeEnumerated; }
    return _cached_encoder_for_SimpleCallState(value, elGetter);
}


/* eslint-enable */
