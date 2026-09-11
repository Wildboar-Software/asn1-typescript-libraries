/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary EscapeRegisterCancel
 * @description
 * Capability bitmap for the Escape Register Cancel service (ECMA-269 C.23.3,
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
 * EscapeRegisterCancel  ::=  BIT STRING    
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type EscapeRegisterCancel = BIT_STRING;

/**
 * @summary EscapeRegisterCancel_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.23.3).
 */
export
const EscapeRegisterCancel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `EscapeRegisterCancel_privateData`.
 */
export
const privateData: number = EscapeRegisterCancel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary EscapeRegisterCancel_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.23.3).
 */
export
const EscapeRegisterCancel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `EscapeRegisterCancel_privateDataInAck`.
 */
export
const privateDataInAck: number = EscapeRegisterCancel_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EscapeRegisterCancel: $.ASN1Decoder<EscapeRegisterCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterCancel (el: _Element): EscapeRegisterCancel {
    if (!_cached_decoder_for_EscapeRegisterCancel) { _cached_decoder_for_EscapeRegisterCancel = $._decodeBitString; }
    return _cached_decoder_for_EscapeRegisterCancel(el);
}

let _cached_encoder_for_EscapeRegisterCancel: $.ASN1Encoder<EscapeRegisterCancel> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterCancel, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterCancel (value: EscapeRegisterCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterCancel) { _cached_encoder_for_EscapeRegisterCancel = $._encodeBitString; }
    return _cached_encoder_for_EscapeRegisterCancel(value, elGetter);
}


/* eslint-enable */
