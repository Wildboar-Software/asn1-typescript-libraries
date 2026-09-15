/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetButtonInformation
 * @description
 * Capability bitmap for the Set Button Information service (ECMA-269 C.12.14,
 * ECMA-285 §9.10). Presence of this entry in `PhysDevServList` means the SF
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
 * SetButtonInformation  ::=  BIT STRING
 * {    buttonLabel                 ( 0),     -- optional parameters
 *     buttonAssociatedNumber             ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type SetButtonInformation = BIT_STRING;

/**
 * @summary SetButtonInformation_buttonLabel
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.14).
 */
export
const SetButtonInformation_buttonLabel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabel
 * @constant
 * @description
 * Alias of `SetButtonInformation_buttonLabel`.
 */
export
const buttonLabel: number = SetButtonInformation_buttonLabel; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_buttonAssociatedNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.14).
 */
export
const SetButtonInformation_buttonAssociatedNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumber
 * @constant
 * @description
 * Alias of `SetButtonInformation_buttonAssociatedNumber`.
 */
export
const buttonAssociatedNumber: number = SetButtonInformation_buttonAssociatedNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.14).
 */
export
const SetButtonInformation_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetButtonInformation_privateData`.
 */
export
const privateData: number = SetButtonInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.14).
 */
export
const SetButtonInformation_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetButtonInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = SetButtonInformation_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.12.14).
 */
export
const SetButtonInformation_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetButtonInformation_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetButtonInformation_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetButtonInformation: $.ASN1Decoder<SetButtonInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetButtonInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetButtonInformation (el: _Element): SetButtonInformation {
    if (!_cached_decoder_for_SetButtonInformation) { _cached_decoder_for_SetButtonInformation = $._decodeBitString; }
    return _cached_decoder_for_SetButtonInformation(el);
}

let _cached_encoder_for_SetButtonInformation: $.ASN1Encoder<SetButtonInformation> | null = null;

/**
 * @summary Encodes a(n) SetButtonInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetButtonInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SetButtonInformation (value: SetButtonInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetButtonInformation) { _cached_encoder_for_SetButtonInformation = $._encodeBitString; }
    return _cached_encoder_for_SetButtonInformation(value, elGetter);
}


/* eslint-enable */
