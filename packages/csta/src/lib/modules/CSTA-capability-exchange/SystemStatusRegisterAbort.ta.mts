/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemStatusRegisterAbort
 * @description
 * Capability bitmap for the System Status Register Abort service (ECMA-269
 * C.2.3, ECMA-285 §9.10). Presence of this entry in `SystemStatusServList`
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
 * SystemStatusRegisterAbort  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type SystemStatusRegisterAbort = BIT_STRING;

/**
 * @summary SystemStatusRegisterAbort_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.2.3).
 */
export
const SystemStatusRegisterAbort_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SystemStatusRegisterAbort_privateData`.
 */
export
const privateData: number = SystemStatusRegisterAbort_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatusRegisterAbort_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.2.3).
 */
export
const SystemStatusRegisterAbort_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SystemStatusRegisterAbort_privateDataInAck`.
 */
export
const privateDataInAck: number = SystemStatusRegisterAbort_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SystemStatusRegisterAbort: $.ASN1Decoder<SystemStatusRegisterAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatusRegisterAbort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatusRegisterAbort (el: _Element): SystemStatusRegisterAbort {
    if (!_cached_decoder_for_SystemStatusRegisterAbort) { _cached_decoder_for_SystemStatusRegisterAbort = $._decodeBitString; }
    return _cached_decoder_for_SystemStatusRegisterAbort(el);
}

let _cached_encoder_for_SystemStatusRegisterAbort: $.ASN1Encoder<SystemStatusRegisterAbort> | null = null;

/**
 * @summary Encodes a(n) SystemStatusRegisterAbort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatusRegisterAbort, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatusRegisterAbort (value: SystemStatusRegisterAbort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatusRegisterAbort) { _cached_encoder_for_SystemStatusRegisterAbort = $._encodeBitString; }
    return _cached_encoder_for_SystemStatusRegisterAbort(value, elGetter);
}


/* eslint-enable */
