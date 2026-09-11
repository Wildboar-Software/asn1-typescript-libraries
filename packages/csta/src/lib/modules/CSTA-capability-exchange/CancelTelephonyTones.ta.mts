/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CancelTelephonyTones
 * @description
 * Capability bitmap for the Cancel Telephony Tone service (ECMA-269 C.7.2,
 * ECMA-285 §9.10). Presence of this entry in `CallAssociatedServList` means the
 * SF supports that service. Each set bit is an optional parameter, enumerated
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
 * CancelTelephonyTones  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type CancelTelephonyTones = BIT_STRING;

/**
 * @summary CancelTelephonyTones_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.7.2).
 */
export
const CancelTelephonyTones_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CancelTelephonyTones_privateData`.
 */
export
const privateData: number = CancelTelephonyTones_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CancelTelephonyTones_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.7.2).
 */
export
const CancelTelephonyTones_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CancelTelephonyTones_privateDataInAck`.
 */
export
const privateDataInAck: number = CancelTelephonyTones_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CancelTelephonyTones_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.7.2).
 */
export
const CancelTelephonyTones_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `CancelTelephonyTones_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = CancelTelephonyTones_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CancelTelephonyTones: $.ASN1Decoder<CancelTelephonyTones> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelTelephonyTones
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelTelephonyTones (el: _Element): CancelTelephonyTones {
    if (!_cached_decoder_for_CancelTelephonyTones) { _cached_decoder_for_CancelTelephonyTones = $._decodeBitString; }
    return _cached_decoder_for_CancelTelephonyTones(el);
}

let _cached_encoder_for_CancelTelephonyTones: $.ASN1Encoder<CancelTelephonyTones> | null = null;

/**
 * @summary Encodes a(n) CancelTelephonyTones into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelTelephonyTones, encoded as an ASN.1 Element.
 */
export
function _encode_CancelTelephonyTones (value: CancelTelephonyTones, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelTelephonyTones) { _cached_encoder_for_CancelTelephonyTones = $._encodeBitString; }
    return _cached_encoder_for_CancelTelephonyTones(value, elGetter);
}


/* eslint-enable */
