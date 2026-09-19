/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EDPNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDPNotification  ::=  [93] IMPLICIT BIT STRING{
 *         oCalledPartyBusy(0), --always "0"
 *         oNoAnswer(1), --always "0"
 *         oTermSeized(2),
 *         oAnswer(3),
 *         tBusy(4), --always "0"*
 *         tNoAnswer(5), --always "0"*
 *         termResourceAvailable(6), -- *
 *         tAnswer(7), -- *
 *         networkBusy(8), --always “0”*
 *         oSuspended(9), --always “0”
 *         oDisconnectCalled(10), --always “0”
 *         oDisconnect(11), --always “0”
 *         oAbandon(12), --always “0”
 *         featureActivator(13), --always “0”
 *         switchHookFlash(14), --always “0”
 *         success(15), --always “0”
 *         tDisconnect(16),
 *         timeout(17),
 *         originationAttempt(18),
 *         oDTMFEntered(19),
 *         tDTMFEntered(20)
 *     }
 * ```
 */
export
type EDPNotification = BIT_STRING;

/**
 * @summary EDPNotification_oCalledPartyBusy
 * @constant
 */
export
const EDPNotification_oCalledPartyBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oCalledPartyBusy
 * @constant
 */
export
const oCalledPartyBusy: number = EDPNotification_oCalledPartyBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oNoAnswer
 * @constant
 */
export
const EDPNotification_oNoAnswer: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary oNoAnswer
 * @constant
 */
export
const oNoAnswer: number = EDPNotification_oNoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oTermSeized
 * @constant
 */
export
const EDPNotification_oTermSeized: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary oTermSeized
 * @constant
 */
export
const oTermSeized: number = EDPNotification_oTermSeized; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oAnswer
 * @constant
 */
export
const EDPNotification_oAnswer: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary oAnswer
 * @constant
 */
export
const oAnswer: number = EDPNotification_oAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_tBusy
 * @constant
 */
export
const EDPNotification_tBusy: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary tBusy
 * @constant
 */
export
const tBusy: number = EDPNotification_tBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_tNoAnswer
 * @constant
 */
export
const EDPNotification_tNoAnswer: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary tNoAnswer
 * @constant
 */
export
const tNoAnswer: number = EDPNotification_tNoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_termResourceAvailable
 * @constant
 */
export
const EDPNotification_termResourceAvailable: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary termResourceAvailable
 * @constant
 */
export
const termResourceAvailable: number = EDPNotification_termResourceAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_tAnswer
 * @constant
 */
export
const EDPNotification_tAnswer: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary tAnswer
 * @constant
 */
export
const tAnswer: number = EDPNotification_tAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_networkBusy
 * @constant
 */
export
const EDPNotification_networkBusy: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary networkBusy
 * @constant
 */
export
const networkBusy: number = EDPNotification_networkBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oSuspended
 * @constant
 */
export
const EDPNotification_oSuspended: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary oSuspended
 * @constant
 */
export
const oSuspended: number = EDPNotification_oSuspended; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oDisconnectCalled
 * @constant
 */
export
const EDPNotification_oDisconnectCalled: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary oDisconnectCalled
 * @constant
 */
export
const oDisconnectCalled: number = EDPNotification_oDisconnectCalled; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oDisconnect
 * @constant
 */
export
const EDPNotification_oDisconnect: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary oDisconnect
 * @constant
 */
export
const oDisconnect: number = EDPNotification_oDisconnect; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oAbandon
 * @constant
 */
export
const EDPNotification_oAbandon: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary oAbandon
 * @constant
 */
export
const oAbandon: number = EDPNotification_oAbandon; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_featureActivator
 * @constant
 */
export
const EDPNotification_featureActivator: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary featureActivator
 * @constant
 */
export
const featureActivator: number = EDPNotification_featureActivator; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_switchHookFlash
 * @constant
 */
export
const EDPNotification_switchHookFlash: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary switchHookFlash
 * @constant
 */
export
const switchHookFlash: number = EDPNotification_switchHookFlash; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_success
 * @constant
 */
export
const EDPNotification_success: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary success
 * @constant
 */
export
const success: number = EDPNotification_success; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_tDisconnect
 * @constant
 */
export
const EDPNotification_tDisconnect: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary tDisconnect
 * @constant
 */
export
const tDisconnect: number = EDPNotification_tDisconnect; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_timeout
 * @constant
 */
export
const EDPNotification_timeout: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary timeout
 * @constant
 */
export
const timeout: number = EDPNotification_timeout; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_originationAttempt
 * @constant
 */
export
const EDPNotification_originationAttempt: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary originationAttempt
 * @constant
 */
export
const originationAttempt: number = EDPNotification_originationAttempt; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_oDTMFEntered
 * @constant
 */
export
const EDPNotification_oDTMFEntered: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary oDTMFEntered
 * @constant
 */
export
const oDTMFEntered: number = EDPNotification_oDTMFEntered; /* SHORT_NAMED_BIT */

/**
 * @summary EDPNotification_tDTMFEntered
 * @constant
 */
export
const EDPNotification_tDTMFEntered: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary tDTMFEntered
 * @constant
 */
export
const tDTMFEntered: number = EDPNotification_tDTMFEntered; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EDPNotification: $.ASN1Decoder<EDPNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDPNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDPNotification (el: _Element): EDPNotification {
    if (!_cached_decoder_for_EDPNotification) { _cached_decoder_for_EDPNotification = $._decode_implicit<EDPNotification>(() => $._decodeBitString); }
    return _cached_decoder_for_EDPNotification(el);
}

let _cached_encoder_for_EDPNotification: $.ASN1Encoder<EDPNotification> | null = null;

/**
 * @summary Encodes a(n) EDPNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDPNotification, encoded as an ASN.1 Element.
 */
export
function _encode_EDPNotification (value: EDPNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDPNotification) { _cached_encoder_for_EDPNotification = $._encode_implicit(_TagClass.context, 93, () => $._encodeBitString, $.BER); }
    return _cached_encoder_for_EDPNotification(value, elGetter);
}


/* eslint-enable */
