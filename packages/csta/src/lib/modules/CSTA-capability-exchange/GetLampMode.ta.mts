/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLampMode
 * @description
 * Capability bitmap for the Get Lamp Mode service (ECMA-269 C.12.7, ECMA-285
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
 * GetLampMode  ::=  BIT STRING
 * {     lamp                     ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     lampModeInAck                 ( 2),     -- optional parameters
 *     lampBrightnessNormal             ( 3),     -- optional parameters
 *     lampBrightnessDim             ( 4),     -- optional parameters
 *     lampBrightnessBright             ( 5),     -- optional parameters
 *     lampColorInAck                 ( 6),     -- optional parameters
 *     buttonInAck                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type GetLampMode = BIT_STRING;

/**
 * @summary GetLampMode_lamp
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.7).
 */
export
const GetLampMode_lamp: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lamp
 * @constant
 * @description
 * Alias of `GetLampMode_lamp`.
 */
export
const lamp: number = GetLampMode_lamp; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.7).
 */
export
const GetLampMode_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetLampMode_privateData`.
 */
export
const privateData: number = GetLampMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampModeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `lampMode` in the acknowledgement
 * (ECMA-269 C.12.7).
 */
export
const GetLampMode_lampModeInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lampModeInAck
 * @constant
 * @description
 * Alias of `GetLampMode_lampModeInAck`.
 */
export
const lampModeInAck: number = GetLampMode_lampModeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampBrightnessNormal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.7).
 */
export
const GetLampMode_lampBrightnessNormal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessNormal
 * @constant
 * @description
 * Alias of `GetLampMode_lampBrightnessNormal`.
 */
export
const lampBrightnessNormal: number = GetLampMode_lampBrightnessNormal; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampBrightnessDim
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.7).
 */
export
const GetLampMode_lampBrightnessDim: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessDim
 * @constant
 * @description
 * Alias of `GetLampMode_lampBrightnessDim`.
 */
export
const lampBrightnessDim: number = GetLampMode_lampBrightnessDim; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampBrightnessBright
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.7).
 */
export
const GetLampMode_lampBrightnessBright: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessBright
 * @constant
 * @description
 * Alias of `GetLampMode_lampBrightnessBright`.
 */
export
const lampBrightnessBright: number = GetLampMode_lampBrightnessBright; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_lampColorInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `lampColor` in the acknowledgement
 * (ECMA-269 C.12.7).
 */
export
const GetLampMode_lampColorInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary lampColorInAck
 * @constant
 * @description
 * Alias of `GetLampMode_lampColorInAck`.
 */
export
const lampColorInAck: number = GetLampMode_lampColorInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_buttonInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `button` in the acknowledgement
 * (ECMA-269 C.12.7).
 */
export
const GetLampMode_buttonInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary buttonInAck
 * @constant
 * @description
 * Alias of `GetLampMode_buttonInAck`.
 */
export
const buttonInAck: number = GetLampMode_buttonInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampMode_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.7).
 */
export
const GetLampMode_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetLampMode_privateDataInAck`.
 */
export
const privateDataInAck: number = GetLampMode_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLampMode: $.ASN1Decoder<GetLampMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampMode (el: _Element): GetLampMode {
    if (!_cached_decoder_for_GetLampMode) { _cached_decoder_for_GetLampMode = $._decodeBitString; }
    return _cached_decoder_for_GetLampMode(el);
}

let _cached_encoder_for_GetLampMode: $.ASN1Encoder<GetLampMode> | null = null;

/**
 * @summary Encodes a(n) GetLampMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampMode, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampMode (value: GetLampMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampMode) { _cached_encoder_for_GetLampMode = $._encodeBitString; }
    return _cached_encoder_for_GetLampMode(value, elGetter);
}


/* eslint-enable */
