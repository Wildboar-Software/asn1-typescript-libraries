/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetDoNotDisturb
 * @description
 * Capability bitmap for the Set Do Not Disturb service (ECMA-269 C.14.19,
 * ECMA-285 §9.10). Presence of this entry in `LogicalServList` means the SF
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
 * SetDoNotDisturb  ::=  BIT STRING
 * {     callOriginationInternal         ( 0),     -- optional parameters
 *     callOriginationExternal         ( 1),     -- optional parameters
 *     callingDeviceList             ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     privateDataInAck             ( 4),     -- optional parameters
 *     ackModelMultiStep             ( 5) }
 * ```
 */
export
type SetDoNotDisturb = BIT_STRING;

/**
 * @summary SetDoNotDisturb_callOriginationInternal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.19).
 */
export
const SetDoNotDisturb_callOriginationInternal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationInternal
 * @constant
 * @description
 * Alias of `SetDoNotDisturb_callOriginationInternal`.
 */
export
const callOriginationInternal: number = SetDoNotDisturb_callOriginationInternal; /* SHORT_NAMED_BIT */

/**
 * @summary SetDoNotDisturb_callOriginationExternal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.19).
 */
export
const SetDoNotDisturb_callOriginationExternal: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationExternal
 * @constant
 * @description
 * Alias of `SetDoNotDisturb_callOriginationExternal`.
 */
export
const callOriginationExternal: number = SetDoNotDisturb_callOriginationExternal; /* SHORT_NAMED_BIT */

/**
 * @summary SetDoNotDisturb_callingDeviceList
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.19).
 */
export
const SetDoNotDisturb_callingDeviceList: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callingDeviceList
 * @constant
 * @description
 * Alias of `SetDoNotDisturb_callingDeviceList`.
 */
export
const callingDeviceList: number = SetDoNotDisturb_callingDeviceList; /* SHORT_NAMED_BIT */

/**
 * @summary SetDoNotDisturb_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.19).
 */
export
const SetDoNotDisturb_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetDoNotDisturb_privateData`.
 */
export
const privateData: number = SetDoNotDisturb_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetDoNotDisturb_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.19).
 */
export
const SetDoNotDisturb_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetDoNotDisturb_privateDataInAck`.
 */
export
const privateDataInAck: number = SetDoNotDisturb_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetDoNotDisturb_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.19).
 */
export
const SetDoNotDisturb_ackModelMultiStep: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetDoNotDisturb_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetDoNotDisturb_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetDoNotDisturb: $.ASN1Decoder<SetDoNotDisturb> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDoNotDisturb
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDoNotDisturb (el: _Element): SetDoNotDisturb {
    if (!_cached_decoder_for_SetDoNotDisturb) { _cached_decoder_for_SetDoNotDisturb = $._decodeBitString; }
    return _cached_decoder_for_SetDoNotDisturb(el);
}

let _cached_encoder_for_SetDoNotDisturb: $.ASN1Encoder<SetDoNotDisturb> | null = null;

/**
 * @summary Encodes a(n) SetDoNotDisturb into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDoNotDisturb, encoded as an ASN.1 Element.
 */
export
function _encode_SetDoNotDisturb (value: SetDoNotDisturb, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDoNotDisturb) { _cached_encoder_for_SetDoNotDisturb = $._encodeBitString; }
    return _cached_encoder_for_SetDoNotDisturb(value, elGetter);
}


/* eslint-enable */
