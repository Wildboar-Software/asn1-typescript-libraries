/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetHookSwitchStatus
 * @description
 * Capability bitmap for the Set HookSwitch Status service (ECMA-269 C.12.16,
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
 * SetHookSwitchStatus  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     ackModelMultiStep             ( 1) }
 * ```
 */
export
type SetHookSwitchStatus = BIT_STRING;

/**
 * @summary SetHookSwitchStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const SetHookSwitchStatus_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetHookSwitchStatus_privateData`.
 */
export
const privateData: number = SetHookSwitchStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetHookSwitchStatus_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 Annex C).
 */
export
const SetHookSwitchStatus_ackModelMultiStep: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetHookSwitchStatus_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetHookSwitchStatus_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetHookSwitchStatus: $.ASN1Decoder<SetHookSwitchStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetHookSwitchStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetHookSwitchStatus (el: _Element): SetHookSwitchStatus {
    if (!_cached_decoder_for_SetHookSwitchStatus) { _cached_decoder_for_SetHookSwitchStatus = $._decodeBitString; }
    return _cached_decoder_for_SetHookSwitchStatus(el);
}

let _cached_encoder_for_SetHookSwitchStatus: $.ASN1Encoder<SetHookSwitchStatus> | null = null;

/**
 * @summary Encodes a(n) SetHookSwitchStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetHookSwitchStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SetHookSwitchStatus (value: SetHookSwitchStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetHookSwitchStatus) { _cached_encoder_for_SetHookSwitchStatus = $._encodeBitString; }
    return _cached_encoder_for_SetHookSwitchStatus(value, elGetter);
}


/* eslint-enable */
