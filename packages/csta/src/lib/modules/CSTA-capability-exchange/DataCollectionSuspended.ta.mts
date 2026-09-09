/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataCollectionSuspended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectionSuspended  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type DataCollectionSuspended = BIT_STRING;

/**
 * @summary DataCollectionSuspended_privateData
 * @constant
 */
export
const DataCollectionSuspended_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DataCollectionSuspended_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollectionSuspended_privateDataInAck
 * @constant
 */
export
const DataCollectionSuspended_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DataCollectionSuspended_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DataCollectionSuspended: $.ASN1Decoder<DataCollectionSuspended> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectionSuspended
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectionSuspended (el: _Element): DataCollectionSuspended {
    if (!_cached_decoder_for_DataCollectionSuspended) { _cached_decoder_for_DataCollectionSuspended = $._decodeBitString; }
    return _cached_decoder_for_DataCollectionSuspended(el);
}

let _cached_encoder_for_DataCollectionSuspended: $.ASN1Encoder<DataCollectionSuspended> | null = null;

/**
 * @summary Encodes a(n) DataCollectionSuspended into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectionSuspended, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectionSuspended (value: DataCollectionSuspended, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectionSuspended) { _cached_encoder_for_DataCollectionSuspended = $._encodeBitString; }
    return _cached_encoder_for_DataCollectionSuspended(value, elGetter);
}


/* eslint-enable */
