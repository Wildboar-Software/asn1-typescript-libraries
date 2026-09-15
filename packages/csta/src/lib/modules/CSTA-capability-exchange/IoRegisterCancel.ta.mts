/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IoRegisterCancel
 * @description
 * Capability bitmap for the I/O Register Cancel service (ECMA-269 C.17.3,
 * ECMA-285 §9.10). Presence of this entry in `IOServicesServList` means the SF
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
 * IoRegisterCancel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type IoRegisterCancel = BIT_STRING;

/**
 * @summary IoRegisterCancel_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.3).
 */
export
const IoRegisterCancel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `IoRegisterCancel_privateData`.
 */
export
const privateData: number = IoRegisterCancel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegisterCancel_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.3).
 */
export
const IoRegisterCancel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `IoRegisterCancel_privateDataInAck`.
 */
export
const privateDataInAck: number = IoRegisterCancel_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IoRegisterCancel: $.ASN1Decoder<IoRegisterCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IoRegisterCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IoRegisterCancel (el: _Element): IoRegisterCancel {
    if (!_cached_decoder_for_IoRegisterCancel) { _cached_decoder_for_IoRegisterCancel = $._decodeBitString; }
    return _cached_decoder_for_IoRegisterCancel(el);
}

let _cached_encoder_for_IoRegisterCancel: $.ASN1Encoder<IoRegisterCancel> | null = null;

/**
 * @summary Encodes a(n) IoRegisterCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IoRegisterCancel, encoded as an ASN.1 Element.
 */
export
function _encode_IoRegisterCancel (value: IoRegisterCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IoRegisterCancel) { _cached_encoder_for_IoRegisterCancel = $._encodeBitString; }
    return _cached_encoder_for_IoRegisterCancel(value, elGetter);
}


/* eslint-enable */
