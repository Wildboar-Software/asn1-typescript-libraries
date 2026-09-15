/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ButtonInformation
 * @description
 * Capability bitmap for the Button Information event (ECMA-269 C.13.1, ECMA-285
 * §9.10). Presence of this entry in `PhysDevEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonInformation  ::=  BIT STRING
 * {     buttonLabel                 ( 0),     -- optional parameters
 *     buttonAssociatedNumber             ( 1),     -- optional parameters
 *     buttonPressIndicator             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type ButtonInformation = BIT_STRING;

/**
 * @summary ButtonInformation_buttonLabel
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.1).
 */
export
const ButtonInformation_buttonLabel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabel
 * @constant
 * @description
 * Alias of `ButtonInformation_buttonLabel`.
 */
export
const buttonLabel: number = ButtonInformation_buttonLabel; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonInformation_buttonAssociatedNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.1).
 */
export
const ButtonInformation_buttonAssociatedNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumber
 * @constant
 * @description
 * Alias of `ButtonInformation_buttonAssociatedNumber`.
 */
export
const buttonAssociatedNumber: number = ButtonInformation_buttonAssociatedNumber; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonInformation_buttonPressIndicator
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.1).
 */
export
const ButtonInformation_buttonPressIndicator: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary buttonPressIndicator
 * @constant
 * @description
 * Alias of `ButtonInformation_buttonPressIndicator`.
 */
export
const buttonPressIndicator: number = ButtonInformation_buttonPressIndicator; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.1).
 */
export
const ButtonInformation_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ButtonInformation_privateData`.
 */
export
const privateData: number = ButtonInformation_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ButtonInformation: $.ASN1Decoder<ButtonInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonInformation (el: _Element): ButtonInformation {
    if (!_cached_decoder_for_ButtonInformation) { _cached_decoder_for_ButtonInformation = $._decodeBitString; }
    return _cached_decoder_for_ButtonInformation(el);
}

let _cached_encoder_for_ButtonInformation: $.ASN1Encoder<ButtonInformation> | null = null;

/**
 * @summary Encodes a(n) ButtonInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonInformation (value: ButtonInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonInformation) { _cached_encoder_for_ButtonInformation = $._encodeBitString; }
    return _cached_encoder_for_ButtonInformation(value, elGetter);
}


/* eslint-enable */
