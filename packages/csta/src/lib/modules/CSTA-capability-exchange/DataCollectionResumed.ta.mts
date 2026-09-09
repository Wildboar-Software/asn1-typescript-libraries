/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataCollectionResumed
 * @description
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
 */
export
const DataCollectionResumed_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DataCollectionResumed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollectionResumed_privateDataInAck
 * @constant
 */
export
const DataCollectionResumed_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
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
