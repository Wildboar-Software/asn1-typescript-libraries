/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RetrieveCall
 * @description
 * Capability bitmap for the Retrieve Call service (ECMA-269 C.5.23, ECMA-285
 * §9.10). Presence of this entry in `CallControlServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveCall  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     deviceIDOnly                 ( 2),     -- misc characteristics
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type RetrieveCall = BIT_STRING;

/**
 * @summary RetrieveCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.23).
 */
export
const RetrieveCall_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RetrieveCall_privateData`.
 */
export
const privateData: number = RetrieveCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RetrieveCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.23).
 */
export
const RetrieveCall_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `RetrieveCall_privateDataInAck`.
 */
export
const privateDataInAck: number = RetrieveCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary RetrieveCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.23).
 */
export
const RetrieveCall_deviceIDOnly: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `RetrieveCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = RetrieveCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary RetrieveCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.23).
 */
export
const RetrieveCall_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `RetrieveCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = RetrieveCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RetrieveCall: $.ASN1Decoder<RetrieveCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveCall (el: _Element): RetrieveCall {
    if (!_cached_decoder_for_RetrieveCall) { _cached_decoder_for_RetrieveCall = $._decodeBitString; }
    return _cached_decoder_for_RetrieveCall(el);
}

let _cached_encoder_for_RetrieveCall: $.ASN1Encoder<RetrieveCall> | null = null;

/**
 * @summary Encodes a(n) RetrieveCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveCall, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveCall (value: RetrieveCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveCall) { _cached_encoder_for_RetrieveCall = $._encodeBitString; }
    return _cached_encoder_for_RetrieveCall(value, elGetter);
}


/* eslint-enable */
