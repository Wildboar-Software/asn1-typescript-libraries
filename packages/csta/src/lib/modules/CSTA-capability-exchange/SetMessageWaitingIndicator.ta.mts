/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetMessageWaitingIndicator
 * @description
 * Capability bitmap for the Set Message Waiting Indicator service (ECMA-269
 * C.12.18, ECMA-285 §9.10). Presence of this entry in `PhysDevServList` means
 * the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMessageWaitingIndicator  ::=  BIT STRING
 * {     deviceForMsg                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type SetMessageWaitingIndicator = BIT_STRING;

/**
 * @summary SetMessageWaitingIndicator_deviceForMsg
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.18).
 */
export
const SetMessageWaitingIndicator_deviceForMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deviceForMsg
 * @constant
 * @description
 * Alias of `SetMessageWaitingIndicator_deviceForMsg`.
 */
export
const deviceForMsg: number = SetMessageWaitingIndicator_deviceForMsg; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.18).
 */
export
const SetMessageWaitingIndicator_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetMessageWaitingIndicator_privateData`.
 */
export
const privateData: number = SetMessageWaitingIndicator_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.18).
 */
export
const SetMessageWaitingIndicator_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetMessageWaitingIndicator_privateDataInAck`.
 */
export
const privateDataInAck: number = SetMessageWaitingIndicator_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.12.18).
 */
export
const SetMessageWaitingIndicator_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetMessageWaitingIndicator_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetMessageWaitingIndicator_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetMessageWaitingIndicator: $.ASN1Decoder<SetMessageWaitingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMessageWaitingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMessageWaitingIndicator (el: _Element): SetMessageWaitingIndicator {
    if (!_cached_decoder_for_SetMessageWaitingIndicator) { _cached_decoder_for_SetMessageWaitingIndicator = $._decodeBitString; }
    return _cached_decoder_for_SetMessageWaitingIndicator(el);
}

let _cached_encoder_for_SetMessageWaitingIndicator: $.ASN1Encoder<SetMessageWaitingIndicator> | null = null;

/**
 * @summary Encodes a(n) SetMessageWaitingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMessageWaitingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_SetMessageWaitingIndicator (value: SetMessageWaitingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMessageWaitingIndicator) { _cached_encoder_for_SetMessageWaitingIndicator = $._encodeBitString; }
    return _cached_encoder_for_SetMessageWaitingIndicator(value, elGetter);
}


/* eslint-enable */
