/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataPathResumed
 * @description
 * Capability bitmap for the Data Path Resumed service (ECMA-269 C.17.4,
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
 * DataPathResumed  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type DataPathResumed = BIT_STRING;

/**
 * @summary DataPathResumed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const DataPathResumed_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DataPathResumed_privateData`.
 */
export
const privateData: number = DataPathResumed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataPathResumed_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const DataPathResumed_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DataPathResumed_privateDataInAck`.
 */
export
const privateDataInAck: number = DataPathResumed_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DataPathResumed: $.ASN1Decoder<DataPathResumed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataPathResumed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataPathResumed (el: _Element): DataPathResumed {
    if (!_cached_decoder_for_DataPathResumed) { _cached_decoder_for_DataPathResumed = $._decodeBitString; }
    return _cached_decoder_for_DataPathResumed(el);
}

let _cached_encoder_for_DataPathResumed: $.ASN1Encoder<DataPathResumed> | null = null;

/**
 * @summary Encodes a(n) DataPathResumed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataPathResumed, encoded as an ASN.1 Element.
 */
export
function _encode_DataPathResumed (value: DataPathResumed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataPathResumed) { _cached_encoder_for_DataPathResumed = $._encodeBitString; }
    return _cached_encoder_for_DataPathResumed(value, elGetter);
}


/* eslint-enable */
