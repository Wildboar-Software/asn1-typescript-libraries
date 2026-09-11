/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Escape
 * @description
 * Capability bitmap for the Escape service (ECMA-269 C.23.4, ECMA-285 §9.10).
 * Presence of this entry in `VendorSpecificServList` means the SF supports that
 * service. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Escape  ::=  BIT STRING
 * {     privateDataInAck             ( 0),     -- optional parameters
 *     swFunctionSupportsSending         ( 1),     -- misc characteristics
 *     swFunctionSupportsReceiving         ( 2) }
 * ```
 */
export
type Escape = BIT_STRING;

/**
 * @summary Escape_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.23.4).
 */
export
const Escape_privateDataInAck: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Escape_privateDataInAck`.
 */
export
const privateDataInAck: number = Escape_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary Escape_swFunctionSupportsSending
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.23.4).
 */
export
const Escape_swFunctionSupportsSending: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionSupportsSending
 * @constant
 * @description
 * Alias of `Escape_swFunctionSupportsSending`.
 */
export
const swFunctionSupportsSending: number = Escape_swFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary Escape_swFunctionSupportsReceiving
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.23.4).
 */
export
const Escape_swFunctionSupportsReceiving: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionSupportsReceiving
 * @constant
 * @description
 * Alias of `Escape_swFunctionSupportsReceiving`.
 */
export
const swFunctionSupportsReceiving: number = Escape_swFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Escape: $.ASN1Decoder<Escape> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Escape
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Escape (el: _Element): Escape {
    if (!_cached_decoder_for_Escape) { _cached_decoder_for_Escape = $._decodeBitString; }
    return _cached_decoder_for_Escape(el);
}

let _cached_encoder_for_Escape: $.ASN1Encoder<Escape> | null = null;

/**
 * @summary Encodes a(n) Escape into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Escape, encoded as an ASN.1 Element.
 */
export
function _encode_Escape (value: Escape, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Escape) { _cached_encoder_for_Escape = $._encodeBitString; }
    return _cached_encoder_for_Escape(value, elGetter);
}


/* eslint-enable */
