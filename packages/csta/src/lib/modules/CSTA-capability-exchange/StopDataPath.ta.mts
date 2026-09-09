/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StopDataPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopDataPath  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type StopDataPath = BIT_STRING;

/**
 * @summary StopDataPath_privateData
 * @constant
 */
export
const StopDataPath_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StopDataPath_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StopDataPath_privateDataInAck
 * @constant
 */
export
const StopDataPath_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StopDataPath_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopDataPath: $.ASN1Decoder<StopDataPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopDataPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopDataPath (el: _Element): StopDataPath {
    if (!_cached_decoder_for_StopDataPath) { _cached_decoder_for_StopDataPath = $._decodeBitString; }
    return _cached_decoder_for_StopDataPath(el);
}

let _cached_encoder_for_StopDataPath: $.ASN1Encoder<StopDataPath> | null = null;

/**
 * @summary Encodes a(n) StopDataPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopDataPath, encoded as an ASN.1 Element.
 */
export
function _encode_StopDataPath (value: StopDataPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopDataPath) { _cached_encoder_for_StopDataPath = $._encodeBitString; }
    return _cached_encoder_for_StopDataPath(value, elGetter);
}


/* eslint-enable */
