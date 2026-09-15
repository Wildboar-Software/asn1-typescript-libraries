/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendUserInformation
 * @description
 * Capability bitmap for the Send User Information service (ECMA-269 C.7.6,
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
 * SendUserInformation  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     deviceIDOnly                 ( 2),     -- misc characteristics
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type SendUserInformation = BIT_STRING;

/**
 * @summary SendUserInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.7.6).
 */
export
const SendUserInformation_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SendUserInformation_privateData`.
 */
export
const privateData: number = SendUserInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendUserInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.7.6).
 */
export
const SendUserInformation_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SendUserInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = SendUserInformation_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SendUserInformation_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.7.6).
 */
export
const SendUserInformation_deviceIDOnly: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `SendUserInformation_deviceIDOnly`.
 */
export
const deviceIDOnly: number = SendUserInformation_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SendUserInformation_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.7.6).
 */
export
const SendUserInformation_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SendUserInformation_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SendUserInformation_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendUserInformation: $.ASN1Decoder<SendUserInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendUserInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendUserInformation (el: _Element): SendUserInformation {
    if (!_cached_decoder_for_SendUserInformation) { _cached_decoder_for_SendUserInformation = $._decodeBitString; }
    return _cached_decoder_for_SendUserInformation(el);
}

let _cached_encoder_for_SendUserInformation: $.ASN1Encoder<SendUserInformation> | null = null;

/**
 * @summary Encodes a(n) SendUserInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendUserInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SendUserInformation (value: SendUserInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendUserInformation) { _cached_encoder_for_SendUserInformation = $._encodeBitString; }
    return _cached_encoder_for_SendUserInformation(value, elGetter);
}


/* eslint-enable */
