/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataCollectionResumed
 * @description
 * Capability bitmap for the Data Collection Resumed service (ECMA-269 C.18.2,
 * ECMA-285 §9.10). Presence of this entry in `DataCollectionServList` means the
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
 * DataCollectionResumed  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type DataCollectionResumed = BIT_STRING;

/**
 * @summary DataCollectionResumed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.18.2).
 */
export
const DataCollectionResumed_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DataCollectionResumed_privateData`.
 */
export
const privateData: number = DataCollectionResumed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollectionResumed_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.18.2).
 */
export
const DataCollectionResumed_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DataCollectionResumed_privateDataInAck`.
 */
export
const privateDataInAck: number = DataCollectionResumed_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DataCollectionResumed: $.ASN1Decoder<DataCollectionResumed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectionResumed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectionResumed (el: _Element): DataCollectionResumed {
    if (!_cached_decoder_for_DataCollectionResumed) { _cached_decoder_for_DataCollectionResumed = $._decodeBitString; }
    return _cached_decoder_for_DataCollectionResumed(el);
}

let _cached_encoder_for_DataCollectionResumed: $.ASN1Encoder<DataCollectionResumed> | null = null;

/**
 * @summary Encodes a(n) DataCollectionResumed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectionResumed, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectionResumed (value: DataCollectionResumed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectionResumed) { _cached_encoder_for_DataCollectionResumed = $._encodeBitString; }
    return _cached_encoder_for_DataCollectionResumed(value, elGetter);
}


/* eslint-enable */
