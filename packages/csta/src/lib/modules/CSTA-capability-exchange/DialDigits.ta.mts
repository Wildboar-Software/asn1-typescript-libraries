/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DialDigits
 * @description
 * Capability bitmap for the Dial Digits service (ECMA-269 C.5.12, ECMA-285
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
 * DialDigits  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     deviceIDOnly                 ( 3),     -- misc characteristics
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type DialDigits = BIT_STRING;

/**
 * @summary DialDigits_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.12).
 */
export
const DialDigits_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `DialDigits_correlatorData`.
 */
export
const correlatorData: number = DialDigits_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.12).
 */
export
const DialDigits_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DialDigits_privateData`.
 */
export
const privateData: number = DialDigits_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.12).
 */
export
const DialDigits_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DialDigits_privateDataInAck`.
 */
export
const privateDataInAck: number = DialDigits_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.12).
 */
export
const DialDigits_deviceIDOnly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `DialDigits_deviceIDOnly`.
 */
export
const deviceIDOnly: number = DialDigits_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.12).
 */
export
const DialDigits_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `DialDigits_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = DialDigits_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DialDigits: $.ASN1Decoder<DialDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialDigits (el: _Element): DialDigits {
    if (!_cached_decoder_for_DialDigits) { _cached_decoder_for_DialDigits = $._decodeBitString; }
    return _cached_decoder_for_DialDigits(el);
}

let _cached_encoder_for_DialDigits: $.ASN1Encoder<DialDigits> | null = null;

/**
 * @summary Encodes a(n) DialDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialDigits, encoded as an ASN.1 Element.
 */
export
function _encode_DialDigits (value: DialDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialDigits) { _cached_encoder_for_DialDigits = $._encodeBitString; }
    return _cached_encoder_for_DialDigits(value, elGetter);
}


/* eslint-enable */
