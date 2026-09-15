/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetDisplay
 * @description
 * Capability bitmap for the Get Display service (ECMA-269 C.12.4, ECMA-285
 * §9.10). Presence of this entry in `PhysDevServList` means the SF supports
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
 * GetDisplay  ::=  BIT STRING
 * {     displayID                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     characterSetASCII             ( 2),     -- optional parameters
 *     characterSetUnicode             ( 3),     -- optional parameters
 *     characterSetProprietary         ( 4),     -- optional parameters
 *     privateDataInAck             ( 5) }
 * ```
 */
export
type GetDisplay = BIT_STRING;

/**
 * @summary GetDisplay_displayID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.4).
 */
export
const GetDisplay_displayID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary displayID
 * @constant
 * @description
 * Alias of `GetDisplay_displayID`.
 */
export
const displayID: number = GetDisplay_displayID; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.4).
 */
export
const GetDisplay_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetDisplay_privateData`.
 */
export
const privateData: number = GetDisplay_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_characterSetASCII
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.4).
 */
export
const GetDisplay_characterSetASCII: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary characterSetASCII
 * @constant
 * @description
 * Alias of `GetDisplay_characterSetASCII`.
 */
export
const characterSetASCII: number = GetDisplay_characterSetASCII; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_characterSetUnicode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.4).
 */
export
const GetDisplay_characterSetUnicode: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary characterSetUnicode
 * @constant
 * @description
 * Alias of `GetDisplay_characterSetUnicode`.
 */
export
const characterSetUnicode: number = GetDisplay_characterSetUnicode; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_characterSetProprietary
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.4).
 */
export
const GetDisplay_characterSetProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary characterSetProprietary
 * @constant
 * @description
 * Alias of `GetDisplay_characterSetProprietary`.
 */
export
const characterSetProprietary: number = GetDisplay_characterSetProprietary; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.4).
 */
export
const GetDisplay_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetDisplay_privateDataInAck`.
 */
export
const privateDataInAck: number = GetDisplay_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetDisplay: $.ASN1Decoder<GetDisplay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDisplay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDisplay (el: _Element): GetDisplay {
    if (!_cached_decoder_for_GetDisplay) { _cached_decoder_for_GetDisplay = $._decodeBitString; }
    return _cached_decoder_for_GetDisplay(el);
}

let _cached_encoder_for_GetDisplay: $.ASN1Encoder<GetDisplay> | null = null;

/**
 * @summary Encodes a(n) GetDisplay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDisplay, encoded as an ASN.1 Element.
 */
export
function _encode_GetDisplay (value: GetDisplay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDisplay) { _cached_encoder_for_GetDisplay = $._encodeBitString; }
    return _cached_encoder_for_GetDisplay(value, elGetter);
}


/* eslint-enable */
