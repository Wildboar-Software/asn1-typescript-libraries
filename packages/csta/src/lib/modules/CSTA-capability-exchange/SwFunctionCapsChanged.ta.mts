/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SwFunctionCapsChanged
 * @description
 * Capability bitmap for the Switching Function Capabilities Changed service
 * (ECMA-269 C.2.7, ECMA-285 §9.10). Presence of this entry in
 * `SystemStatusServList` means the SF supports that service. Each set bit is an
 * optional parameter, enumerated value, initial connection state, or
 * miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwFunctionCapsChanged  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type SwFunctionCapsChanged = BIT_STRING;

/**
 * @summary SwFunctionCapsChanged_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.2.7).
 */
export
const SwFunctionCapsChanged_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SwFunctionCapsChanged_privateData`.
 */
export
const privateData: number = SwFunctionCapsChanged_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SwFunctionCapsChanged_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.2.7).
 */
export
const SwFunctionCapsChanged_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SwFunctionCapsChanged_privateDataInAck`.
 */
export
const privateDataInAck: number = SwFunctionCapsChanged_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwFunctionCapsChanged: $.ASN1Decoder<SwFunctionCapsChanged> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwFunctionCapsChanged
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwFunctionCapsChanged (el: _Element): SwFunctionCapsChanged {
    if (!_cached_decoder_for_SwFunctionCapsChanged) { _cached_decoder_for_SwFunctionCapsChanged = $._decodeBitString; }
    return _cached_decoder_for_SwFunctionCapsChanged(el);
}

let _cached_encoder_for_SwFunctionCapsChanged: $.ASN1Encoder<SwFunctionCapsChanged> | null = null;

/**
 * @summary Encodes a(n) SwFunctionCapsChanged into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwFunctionCapsChanged, encoded as an ASN.1 Element.
 */
export
function _encode_SwFunctionCapsChanged (value: SwFunctionCapsChanged, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwFunctionCapsChanged) { _cached_encoder_for_SwFunctionCapsChanged = $._encodeBitString; }
    return _cached_encoder_for_SwFunctionCapsChanged(value, elGetter);
}


/* eslint-enable */
