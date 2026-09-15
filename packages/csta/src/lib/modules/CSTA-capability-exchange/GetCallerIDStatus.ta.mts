/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetCallerIDStatus
 * @description
 * Capability bitmap for the Get Caller ID Status service (ECMA-269 C.14.9,
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
 * GetCallerIDStatus  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type GetCallerIDStatus = BIT_STRING;

/**
 * @summary GetCallerIDStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.9).
 */
export
const GetCallerIDStatus_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetCallerIDStatus_privateData`.
 */
export
const privateData: number = GetCallerIDStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetCallerIDStatus_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.9).
 */
export
const GetCallerIDStatus_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetCallerIDStatus_privateDataInAck`.
 */
export
const privateDataInAck: number = GetCallerIDStatus_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetCallerIDStatus: $.ASN1Decoder<GetCallerIDStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallerIDStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallerIDStatus (el: _Element): GetCallerIDStatus {
    if (!_cached_decoder_for_GetCallerIDStatus) { _cached_decoder_for_GetCallerIDStatus = $._decodeBitString; }
    return _cached_decoder_for_GetCallerIDStatus(el);
}

let _cached_encoder_for_GetCallerIDStatus: $.ASN1Encoder<GetCallerIDStatus> | null = null;

/**
 * @summary Encodes a(n) GetCallerIDStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallerIDStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallerIDStatus (value: GetCallerIDStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallerIDStatus) { _cached_encoder_for_GetCallerIDStatus = $._encodeBitString; }
    return _cached_encoder_for_GetCallerIDStatus(value, elGetter);
}


/* eslint-enable */
