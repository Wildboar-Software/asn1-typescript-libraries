/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemStatusRegisterCancel
 * @description
 * Capability bitmap for the System Status Register Cancel service (ECMA-269
 * C.2.4, ECMA-285 §9.10). Presence of this entry in `SystemStatusServList`
 * means the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatusRegisterCancel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type SystemStatusRegisterCancel = BIT_STRING;

/**
 * @summary SystemStatusRegisterCancel_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.2.4).
 */
export
const SystemStatusRegisterCancel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SystemStatusRegisterCancel_privateData`.
 */
export
const privateData: number = SystemStatusRegisterCancel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatusRegisterCancel_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.2.4).
 */
export
const SystemStatusRegisterCancel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SystemStatusRegisterCancel_privateDataInAck`.
 */
export
const privateDataInAck: number = SystemStatusRegisterCancel_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SystemStatusRegisterCancel: $.ASN1Decoder<SystemStatusRegisterCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatusRegisterCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatusRegisterCancel (el: _Element): SystemStatusRegisterCancel {
    if (!_cached_decoder_for_SystemStatusRegisterCancel) { _cached_decoder_for_SystemStatusRegisterCancel = $._decodeBitString; }
    return _cached_decoder_for_SystemStatusRegisterCancel(el);
}

let _cached_encoder_for_SystemStatusRegisterCancel: $.ASN1Encoder<SystemStatusRegisterCancel> | null = null;

/**
 * @summary Encodes a(n) SystemStatusRegisterCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatusRegisterCancel, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatusRegisterCancel (value: SystemStatusRegisterCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatusRegisterCancel) { _cached_encoder_for_SystemStatusRegisterCancel = $._encodeBitString; }
    return _cached_encoder_for_SystemStatusRegisterCancel(value, elGetter);
}


/* eslint-enable */
