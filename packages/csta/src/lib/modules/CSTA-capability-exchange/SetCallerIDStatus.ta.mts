/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetCallerIDStatus
 * @description
 * Capability bitmap for the Set Caller ID Status service (ECMA-269 C.14.18,
 * ECMA-285 §9.10). Presence of this entry in `LogicalServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetCallerIDStatus  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type SetCallerIDStatus = BIT_STRING;

/**
 * @summary SetCallerIDStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.18).
 */
export
const SetCallerIDStatus_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetCallerIDStatus_privateData`.
 */
export
const privateData: number = SetCallerIDStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetCallerIDStatus_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.18).
 */
export
const SetCallerIDStatus_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetCallerIDStatus_privateDataInAck`.
 */
export
const privateDataInAck: number = SetCallerIDStatus_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetCallerIDStatus_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.18).
 */
export
const SetCallerIDStatus_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetCallerIDStatus_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetCallerIDStatus_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetCallerIDStatus: $.ASN1Decoder<SetCallerIDStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetCallerIDStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetCallerIDStatus (el: _Element): SetCallerIDStatus {
    if (!_cached_decoder_for_SetCallerIDStatus) { _cached_decoder_for_SetCallerIDStatus = $._decodeBitString; }
    return _cached_decoder_for_SetCallerIDStatus(el);
}

let _cached_encoder_for_SetCallerIDStatus: $.ASN1Encoder<SetCallerIDStatus> | null = null;

/**
 * @summary Encodes a(n) SetCallerIDStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetCallerIDStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SetCallerIDStatus (value: SetCallerIDStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetCallerIDStatus) { _cached_encoder_for_SetCallerIDStatus = $._encodeBitString; }
    return _cached_encoder_for_SetCallerIDStatus(value, elGetter);
}


/* eslint-enable */
