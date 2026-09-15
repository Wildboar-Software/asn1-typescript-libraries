/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetDisplay
 * @description
 * Capability bitmap for the Set Display service (ECMA-269 C.12.15, ECMA-285
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
 * SetDisplay  ::=  BIT STRING
 * {     physBaseRowNumber             ( 0),     -- optional parameters
 *     physColumnRowNumber             ( 1),     -- optional parameters
 *     offset                     ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     privateDataInAck             ( 4),     -- optional parameters
 *     supportsModifyingPosition        ( 5),     -- misc characteristics
 *     ackModelMultiStep             ( 6) }
 * ```
 */
export
type SetDisplay = BIT_STRING;

/**
 * @summary SetDisplay_physBaseRowNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.15).
 */
export
const SetDisplay_physBaseRowNumber: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary physBaseRowNumber
 * @constant
 * @description
 * Alias of `SetDisplay_physBaseRowNumber`.
 */
export
const physBaseRowNumber: number = SetDisplay_physBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_physColumnRowNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.15).
 */
export
const SetDisplay_physColumnRowNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary physColumnRowNumber
 * @constant
 * @description
 * Alias of `SetDisplay_physColumnRowNumber`.
 */
export
const physColumnRowNumber: number = SetDisplay_physColumnRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_offset
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.15).
 */
export
const SetDisplay_offset: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary offset
 * @constant
 * @description
 * Alias of `SetDisplay_offset`.
 */
export
const offset: number = SetDisplay_offset; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.15).
 */
export
const SetDisplay_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetDisplay_privateData`.
 */
export
const privateData: number = SetDisplay_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.15).
 */
export
const SetDisplay_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetDisplay_privateDataInAck`.
 */
export
const privateDataInAck: number = SetDisplay_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_supportsModifyingPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.15).
 */
export
const SetDisplay_supportsModifyingPosition: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 * @description
 * Alias of `SetDisplay_supportsModifyingPosition`.
 */
export
const supportsModifyingPosition: number = SetDisplay_supportsModifyingPosition; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.12.15).
 */
export
const SetDisplay_ackModelMultiStep: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetDisplay_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetDisplay_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetDisplay: $.ASN1Decoder<SetDisplay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDisplay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDisplay (el: _Element): SetDisplay {
    if (!_cached_decoder_for_SetDisplay) { _cached_decoder_for_SetDisplay = $._decodeBitString; }
    return _cached_decoder_for_SetDisplay(el);
}

let _cached_encoder_for_SetDisplay: $.ASN1Encoder<SetDisplay> | null = null;

/**
 * @summary Encodes a(n) SetDisplay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDisplay, encoded as an ASN.1 Element.
 */
export
function _encode_SetDisplay (value: SetDisplay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDisplay) { _cached_encoder_for_SetDisplay = $._encodeBitString; }
    return _cached_encoder_for_SetDisplay(value, elGetter);
}


/* eslint-enable */
