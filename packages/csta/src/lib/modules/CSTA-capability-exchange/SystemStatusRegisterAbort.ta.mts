/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemStatusRegisterAbort
 * @description
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
 */
export
const SystemStatusRegisterAbort_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SystemStatusRegisterAbort_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatusRegisterAbort_privateDataInAck
 * @constant
 */
export
const SystemStatusRegisterAbort_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
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
