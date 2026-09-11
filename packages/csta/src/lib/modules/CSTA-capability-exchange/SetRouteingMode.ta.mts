/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetRouteingMode
 * @description
 * Capability bitmap for the Set Routeing Mode service (ECMA-269 C.14.22,
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
 * SetRouteingMode  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type SetRouteingMode = BIT_STRING;

/**
 * @summary SetRouteingMode_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.22).
 */
export
const SetRouteingMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetRouteingMode_privateData`.
 */
export
const privateData: number = SetRouteingMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetRouteingMode_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.22).
 */
export
const SetRouteingMode_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetRouteingMode_privateDataInAck`.
 */
export
const privateDataInAck: number = SetRouteingMode_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetRouteingMode_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.22).
 */
export
const SetRouteingMode_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetRouteingMode_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetRouteingMode_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetRouteingMode: $.ASN1Decoder<SetRouteingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRouteingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetRouteingMode (el: _Element): SetRouteingMode {
    if (!_cached_decoder_for_SetRouteingMode) { _cached_decoder_for_SetRouteingMode = $._decodeBitString; }
    return _cached_decoder_for_SetRouteingMode(el);
}

let _cached_encoder_for_SetRouteingMode: $.ASN1Encoder<SetRouteingMode> | null = null;

/**
 * @summary Encodes a(n) SetRouteingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRouteingMode, encoded as an ASN.1 Element.
 */
export
function _encode_SetRouteingMode (value: SetRouteingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetRouteingMode) { _cached_encoder_for_SetRouteingMode = $._encodeBitString; }
    return _cached_encoder_for_SetRouteingMode(value, elGetter);
}


/* eslint-enable */
