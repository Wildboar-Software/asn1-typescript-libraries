/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EDPRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDPRequest  ::=  [92] IMPLICIT BIT STRING{
 *         oCalledPartyBusy(0),
 *         oNoAnswer(1),
 *         oTermSeized(2), --always "0"
 *         oAnswer(3), --always "0"
 *         tBusy(4), --*
 *         tNoAnswer(5), --*
 *         termResourceAvailable(6), --always "0"*
 *         tAnswer(7), --always "0"*
 *         networkBusy(8),
 *         oSuspended(9),
 *         oDisconnectCalled(10),
 *         oDisconnect(11),
 *         oAbandon(12),
 *         featureActivator(13),
 *         switchHookFlash(14),
 *         success(15),
 *         tDisconnect(16),
 *         timeout(17),
 *         originationAttempt(18),
 *         oDTMFEntered(19),
 *         tDTMFEntered(20)
 *     }
 * ```
 */
export
type EDPRequest = BIT_STRING;

/**
 * @summary EDPRequest_oCalledPartyBusy
 * @constant
 */
export
const EDPRequest_oCalledPartyBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oCalledPartyBusy
 * @constant
 */
export
const oCalledPartyBusy: number = EDPRequest_oCalledPartyBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oNoAnswer
 * @constant
 */
export
const EDPRequest_oNoAnswer: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary oNoAnswer
 * @constant
 */
export
const oNoAnswer: number = EDPRequest_oNoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oTermSeized
 * @constant
 */
export
const EDPRequest_oTermSeized: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary oTermSeized
 * @constant
 */
export
const oTermSeized: number = EDPRequest_oTermSeized; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oAnswer
 * @constant
 */
export
const EDPRequest_oAnswer: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary oAnswer
 * @constant
 */
export
const oAnswer: number = EDPRequest_oAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_tBusy
 * @constant
 */
export
const EDPRequest_tBusy: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary tBusy
 * @constant
 */
export
const tBusy: number = EDPRequest_tBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_tNoAnswer
 * @constant
 */
export
const EDPRequest_tNoAnswer: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary tNoAnswer
 * @constant
 */
export
const tNoAnswer: number = EDPRequest_tNoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_termResourceAvailable
 * @constant
 */
export
const EDPRequest_termResourceAvailable: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary termResourceAvailable
 * @constant
 */
export
const termResourceAvailable: number = EDPRequest_termResourceAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_tAnswer
 * @constant
 */
export
const EDPRequest_tAnswer: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary tAnswer
 * @constant
 */
export
const tAnswer: number = EDPRequest_tAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_networkBusy
 * @constant
 */
export
const EDPRequest_networkBusy: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary networkBusy
 * @constant
 */
export
const networkBusy: number = EDPRequest_networkBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oSuspended
 * @constant
 */
export
const EDPRequest_oSuspended: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary oSuspended
 * @constant
 */
export
const oSuspended: number = EDPRequest_oSuspended; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oDisconnectCalled
 * @constant
 */
export
const EDPRequest_oDisconnectCalled: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary oDisconnectCalled
 * @constant
 */
export
const oDisconnectCalled: number = EDPRequest_oDisconnectCalled; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oDisconnect
 * @constant
 */
export
const EDPRequest_oDisconnect: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary oDisconnect
 * @constant
 */
export
const oDisconnect: number = EDPRequest_oDisconnect; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oAbandon
 * @constant
 */
export
const EDPRequest_oAbandon: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary oAbandon
 * @constant
 */
export
const oAbandon: number = EDPRequest_oAbandon; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_featureActivator
 * @constant
 */
export
const EDPRequest_featureActivator: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary featureActivator
 * @constant
 */
export
const featureActivator: number = EDPRequest_featureActivator; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_switchHookFlash
 * @constant
 */
export
const EDPRequest_switchHookFlash: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary switchHookFlash
 * @constant
 */
export
const switchHookFlash: number = EDPRequest_switchHookFlash; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_success
 * @constant
 */
export
const EDPRequest_success: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary success
 * @constant
 */
export
const success: number = EDPRequest_success; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_tDisconnect
 * @constant
 */
export
const EDPRequest_tDisconnect: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary tDisconnect
 * @constant
 */
export
const tDisconnect: number = EDPRequest_tDisconnect; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_timeout
 * @constant
 */
export
const EDPRequest_timeout: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary timeout
 * @constant
 */
export
const timeout: number = EDPRequest_timeout; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_originationAttempt
 * @constant
 */
export
const EDPRequest_originationAttempt: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary originationAttempt
 * @constant
 */
export
const originationAttempt: number = EDPRequest_originationAttempt; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_oDTMFEntered
 * @constant
 */
export
const EDPRequest_oDTMFEntered: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary oDTMFEntered
 * @constant
 */
export
const oDTMFEntered: number = EDPRequest_oDTMFEntered; /* SHORT_NAMED_BIT */

/**
 * @summary EDPRequest_tDTMFEntered
 * @constant
 */
export
const EDPRequest_tDTMFEntered: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary tDTMFEntered
 * @constant
 */
export
const tDTMFEntered: number = EDPRequest_tDTMFEntered; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EDPRequest: $.ASN1Decoder<EDPRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDPRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDPRequest (el: _Element): EDPRequest {
    if (!_cached_decoder_for_EDPRequest) { _cached_decoder_for_EDPRequest = $._decode_implicit<EDPRequest>(() => $._decodeBitString); }
    return _cached_decoder_for_EDPRequest(el);
}

let _cached_encoder_for_EDPRequest: $.ASN1Encoder<EDPRequest> | null = null;

/**
 * @summary Encodes a(n) EDPRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDPRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EDPRequest (value: EDPRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDPRequest) { _cached_encoder_for_EDPRequest = $._encode_implicit(_TagClass.context, 92, () => $._encodeBitString, $.BER); }
    return _cached_encoder_for_EDPRequest(value, elGetter);
}


/* eslint-enable */
