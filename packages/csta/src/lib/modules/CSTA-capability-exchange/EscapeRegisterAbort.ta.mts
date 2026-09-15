/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary EscapeRegisterAbort
 * @description
 * Capability bitmap for the Escape Register Abort service (ECMA-269 C.23.2,
 * ECMA-285 §9.10). Presence of this entry in `VendorSpecificServList` means the
 * SF supports that service. Each set bit is an optional parameter, enumerated
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
 * EscapeRegisterAbort  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type EscapeRegisterAbort = BIT_STRING;

/**
 * @summary EscapeRegisterAbort_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.23.2).
 */
export
const EscapeRegisterAbort_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `EscapeRegisterAbort_privateData`.
 */
export
const privateData: number = EscapeRegisterAbort_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary EscapeRegisterAbort_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.23.2).
 */
export
const EscapeRegisterAbort_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `EscapeRegisterAbort_privateDataInAck`.
 */
export
const privateDataInAck: number = EscapeRegisterAbort_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EscapeRegisterAbort: $.ASN1Decoder<EscapeRegisterAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterAbort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterAbort (el: _Element): EscapeRegisterAbort {
    if (!_cached_decoder_for_EscapeRegisterAbort) { _cached_decoder_for_EscapeRegisterAbort = $._decodeBitString; }
    return _cached_decoder_for_EscapeRegisterAbort(el);
}

let _cached_encoder_for_EscapeRegisterAbort: $.ASN1Encoder<EscapeRegisterAbort> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterAbort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterAbort, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterAbort (value: EscapeRegisterAbort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterAbort) { _cached_encoder_for_EscapeRegisterAbort = $._encodeBitString; }
    return _cached_encoder_for_EscapeRegisterAbort(value, elGetter);
}


/* eslint-enable */
