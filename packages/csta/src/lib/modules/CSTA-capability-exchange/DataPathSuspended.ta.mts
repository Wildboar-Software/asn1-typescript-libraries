/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataPathSuspended
 * @description
 * Capability bitmap for the Data Path Suspended service (ECMA-269 C.17.5,
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
 * DataPathSuspended  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type DataPathSuspended = BIT_STRING;

/**
 * @summary DataPathSuspended_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.5).
 */
export
const DataPathSuspended_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DataPathSuspended_privateData`.
 */
export
const privateData: number = DataPathSuspended_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataPathSuspended_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.5).
 */
export
const DataPathSuspended_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DataPathSuspended_privateDataInAck`.
 */
export
const privateDataInAck: number = DataPathSuspended_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DataPathSuspended: $.ASN1Decoder<DataPathSuspended> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataPathSuspended
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataPathSuspended (el: _Element): DataPathSuspended {
    if (!_cached_decoder_for_DataPathSuspended) { _cached_decoder_for_DataPathSuspended = $._decodeBitString; }
    return _cached_decoder_for_DataPathSuspended(el);
}

let _cached_encoder_for_DataPathSuspended: $.ASN1Encoder<DataPathSuspended> | null = null;

/**
 * @summary Encodes a(n) DataPathSuspended into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataPathSuspended, encoded as an ASN.1 Element.
 */
export
function _encode_DataPathSuspended (value: DataPathSuspended, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataPathSuspended) { _cached_encoder_for_DataPathSuspended = $._encodeBitString; }
    return _cached_encoder_for_DataPathSuspended(value, elGetter);
}


/* eslint-enable */
