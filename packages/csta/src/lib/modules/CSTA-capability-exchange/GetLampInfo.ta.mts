/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLampInfo
 * @description
 * Capability bitmap for the Get Lamp Information service (ECMA-269 C.12.6,
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
 * GetLampInfo  ::=  BIT STRING
 * {     lamp                     ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     lampLabelInAck                 ( 2),     -- optional parameters
 *     buttonInAck                 ( 3),     -- optional parameters
 *     lampColorInAck                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5) }
 * ```
 */
export
type GetLampInfo = BIT_STRING;

/**
 * @summary GetLampInfo_lamp
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.6).
 */
export
const GetLampInfo_lamp: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lamp
 * @constant
 * @description
 * Alias of `GetLampInfo_lamp`.
 */
export
const lamp: number = GetLampInfo_lamp; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampInfo_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.6).
 */
export
const GetLampInfo_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetLampInfo_privateData`.
 */
export
const privateData: number = GetLampInfo_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampInfo_lampLabelInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `lampLabel` in the acknowledgement
 * (ECMA-269 C.12.6).
 */
export
const GetLampInfo_lampLabelInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lampLabelInAck
 * @constant
 * @description
 * Alias of `GetLampInfo_lampLabelInAck`.
 */
export
const lampLabelInAck: number = GetLampInfo_lampLabelInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampInfo_buttonInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `button` in the acknowledgement
 * (ECMA-269 C.12.6).
 */
export
const GetLampInfo_buttonInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary buttonInAck
 * @constant
 * @description
 * Alias of `GetLampInfo_buttonInAck`.
 */
export
const buttonInAck: number = GetLampInfo_buttonInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampInfo_lampColorInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `lampColor` in the acknowledgement
 * (ECMA-269 C.12.6).
 */
export
const GetLampInfo_lampColorInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lampColorInAck
 * @constant
 * @description
 * Alias of `GetLampInfo_lampColorInAck`.
 */
export
const lampColorInAck: number = GetLampInfo_lampColorInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLampInfo_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.6).
 */
export
const GetLampInfo_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetLampInfo_privateDataInAck`.
 */
export
const privateDataInAck: number = GetLampInfo_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLampInfo: $.ASN1Decoder<GetLampInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampInfo (el: _Element): GetLampInfo {
    if (!_cached_decoder_for_GetLampInfo) { _cached_decoder_for_GetLampInfo = $._decodeBitString; }
    return _cached_decoder_for_GetLampInfo(el);
}

let _cached_encoder_for_GetLampInfo: $.ASN1Encoder<GetLampInfo> | null = null;

/**
 * @summary Encodes a(n) GetLampInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampInfo (value: GetLampInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampInfo) { _cached_encoder_for_GetLampInfo = $._encodeBitString; }
    return _cached_encoder_for_GetLampInfo(value, elGetter);
}


/* eslint-enable */
