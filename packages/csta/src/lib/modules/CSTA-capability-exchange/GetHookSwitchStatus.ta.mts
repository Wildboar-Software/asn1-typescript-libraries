/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetHookSwitchStatus
 * @description
 * Capability bitmap for the Get HookSwitch Status service (ECMA-269 C.12.5,
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
 * GetHookSwitchStatus  ::=  BIT STRING
 * {     hookSwitch                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetHookSwitchStatus = BIT_STRING;

/**
 * @summary GetHookSwitchStatus_hookSwitch
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.5).
 */
export
const GetHookSwitchStatus_hookSwitch: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hookSwitch
 * @constant
 * @description
 * Alias of `GetHookSwitchStatus_hookSwitch`.
 */
export
const hookSwitch: number = GetHookSwitchStatus_hookSwitch; /* SHORT_NAMED_BIT */

/**
 * @summary GetHookSwitchStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.5).
 */
export
const GetHookSwitchStatus_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetHookSwitchStatus_privateData`.
 */
export
const privateData: number = GetHookSwitchStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetHookSwitchStatus_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.5).
 */
export
const GetHookSwitchStatus_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetHookSwitchStatus_privateDataInAck`.
 */
export
const privateDataInAck: number = GetHookSwitchStatus_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetHookSwitchStatus: $.ASN1Decoder<GetHookSwitchStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetHookSwitchStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetHookSwitchStatus (el: _Element): GetHookSwitchStatus {
    if (!_cached_decoder_for_GetHookSwitchStatus) { _cached_decoder_for_GetHookSwitchStatus = $._decodeBitString; }
    return _cached_decoder_for_GetHookSwitchStatus(el);
}

let _cached_encoder_for_GetHookSwitchStatus: $.ASN1Encoder<GetHookSwitchStatus> | null = null;

/**
 * @summary Encodes a(n) GetHookSwitchStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHookSwitchStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GetHookSwitchStatus (value: GetHookSwitchStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetHookSwitchStatus) { _cached_encoder_for_GetHookSwitchStatus = $._encodeBitString; }
    return _cached_encoder_for_GetHookSwitchStatus(value, elGetter);
}


/* eslint-enable */
