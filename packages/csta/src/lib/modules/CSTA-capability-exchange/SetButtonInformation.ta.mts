/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetButtonInformation
 * @description
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
 */
export
const SetButtonInformation_buttonLabel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabel
 * @constant
 */
export
const buttonLabel: number = SetButtonInformation_buttonLabel; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_buttonAssociatedNumber
 * @constant
 */
export
const SetButtonInformation_buttonAssociatedNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumber
 * @constant
 */
export
const buttonAssociatedNumber: number = SetButtonInformation_buttonAssociatedNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_privateData
 * @constant
 */
export
const SetButtonInformation_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetButtonInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_privateDataInAck
 * @constant
 */
export
const SetButtonInformation_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetButtonInformation_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_ackModelMultiStep
 * @constant
 */
export
const SetButtonInformation_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
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
