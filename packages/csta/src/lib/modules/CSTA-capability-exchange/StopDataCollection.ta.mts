/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StopDataCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopDataCollection  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type StopDataCollection = BIT_STRING;

/**
 * @summary StopDataCollection_privateData
 * @constant
 */
export
const StopDataCollection_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StopDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StopDataCollection_privateDataInAck
 * @constant
 */
export
const StopDataCollection_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StopDataCollection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopDataCollection: $.ASN1Decoder<StopDataCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopDataCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopDataCollection (el: _Element): StopDataCollection {
    if (!_cached_decoder_for_StopDataCollection) { _cached_decoder_for_StopDataCollection = $._decodeBitString; }
    return _cached_decoder_for_StopDataCollection(el);
}

let _cached_encoder_for_StopDataCollection: $.ASN1Encoder<StopDataCollection> | null = null;

/**
 * @summary Encodes a(n) StopDataCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopDataCollection, encoded as an ASN.1 Element.
 */
export
function _encode_StopDataCollection (value: StopDataCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopDataCollection) { _cached_encoder_for_StopDataCollection = $._encodeBitString; }
    return _cached_encoder_for_StopDataCollection(value, elGetter);
}


/* eslint-enable */
