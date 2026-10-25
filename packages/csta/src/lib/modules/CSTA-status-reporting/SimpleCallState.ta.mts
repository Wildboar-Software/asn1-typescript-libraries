/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SimpleCallState
 * @description
 *
 * Widely recognized two-connection call states in simplified encoding.
 * Semantics match a pair of connection states (local then other) as in ECMA-269
 * Table 6-5. Used by Snapshot Device and Monitor Start. If no simple state
 * fits, use a compound state. ECMA-269 §6.1.4, §12.2.26.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
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
 * Widely recognized two-connection call states in simplified encoding.
 * Semantics match a pair of connection states (local then other) as in ECMA-269
 * Table 6-5. Used by Snapshot Device and Monitor Start. If no simple state
 * fits, use a compound state. ECMA-269 §6.1.4, §12.2.26.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
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
 * Widely recognized two-connection call states in simplified encoding.
 * Semantics match a pair of connection states (local then other) as in ECMA-269
 * Table 6-5. Used by Snapshot Device and Monitor Start. If no simple state
 * fits, use a compound state. ECMA-269 §6.1.4, §12.2.26.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
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
 * @description
 *
 * Null–Null. ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callNull = SimpleCallState.callNull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callNull
 * @constant
 * @type {number}
 */
export
const callNull = SimpleCallState.callNull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callPending
 * @description
 *
 * Initiated–Null (Pending). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callPending = SimpleCallState.callPending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callPending
 * @constant
 * @type {number}
 */
export
const callPending = SimpleCallState.callPending; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callOriginated
 * @description
 *
 * Connected–Null (Originated/Terminated). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callOriginated = SimpleCallState.callOriginated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callOriginated
 * @constant
 * @type {number}
 */
export
const callOriginated = SimpleCallState.callOriginated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callDelivered
 * @description
 *
 * Connected–Alerting (Delivered). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callDelivered = SimpleCallState.callDelivered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDelivered
 * @constant
 * @type {number}
 */
export
const callDelivered = SimpleCallState.callDelivered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callDeliveredHeld
 * @description
 *
 * Hold–Alerting (Delivered-Held). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callDeliveredHeld = SimpleCallState.callDeliveredHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeliveredHeld
 * @constant
 * @type {number}
 */
export
const callDeliveredHeld = SimpleCallState.callDeliveredHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callReceived
 * @description
 *
 * Alerting–Connected (Received). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callReceived = SimpleCallState.callReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReceived
 * @constant
 * @type {number}
 */
export
const callReceived = SimpleCallState.callReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callEstablished
 * @description
 *
 * Connected–Connected (Established). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callEstablished = SimpleCallState.callEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablished
 * @constant
 * @type {number}
 */
export
const callEstablished = SimpleCallState.callEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callEstablishedHeld
 * @description
 *
 * Connected–Hold (Established-Held). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callEstablishedHeld = SimpleCallState.callEstablishedHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablishedHeld
 * @constant
 * @type {number}
 */
export
const callEstablishedHeld = SimpleCallState.callEstablishedHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callReceivedOnHold
 * @description
 *
 * Alerting–Hold (Received-On Hold). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callReceivedOnHold = SimpleCallState.callReceivedOnHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReceivedOnHold
 * @constant
 * @type {number}
 */
export
const callReceivedOnHold = SimpleCallState.callReceivedOnHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callEstablishedOnHold
 * @description
 *
 * Hold–Connected (Established-On Hold). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callEstablishedOnHold = SimpleCallState.callEstablishedOnHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablishedOnHold
 * @constant
 * @type {number}
 */
export
const callEstablishedOnHold = SimpleCallState.callEstablishedOnHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callQueued
 * @description
 *
 * Connected–Queued (Queued). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callQueued = SimpleCallState.callQueued; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callQueued
 * @constant
 * @type {number}
 */
export
const callQueued = SimpleCallState.callQueued; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callQueuedHeld
 * @description
 *
 * Hold–Queued (Queued-Held). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callQueuedHeld = SimpleCallState.callQueuedHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callQueuedHeld
 * @constant
 * @type {number}
 */
export
const callQueuedHeld = SimpleCallState.callQueuedHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callFailed
 * @description
 *
 * Connected–Failed (Failed). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callFailed = SimpleCallState.callFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailed
 * @constant
 * @type {number}
 */
export
const callFailed = SimpleCallState.callFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callFailedHeld
 * @description
 *
 * Hold–Failed (Failed-Held). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callFailedHeld = SimpleCallState.callFailedHeld; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailedHeld
 * @constant
 * @type {number}
 */
export
const callFailedHeld = SimpleCallState.callFailedHeld; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleCallState_callBlocked
 * @description
 *
 * Failed–Null (Blocked). ECMA-269 Table 6-5, §12.2.26.
 *
 * @constant
 * @type {number}
 */
export
const SimpleCallState_callBlocked = SimpleCallState.callBlocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBlocked
 * @constant
 * @type {number}
 */
export
const callBlocked = SimpleCallState.callBlocked; /* SHORT_NAMED_ENUMERATED_VALUE */

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
