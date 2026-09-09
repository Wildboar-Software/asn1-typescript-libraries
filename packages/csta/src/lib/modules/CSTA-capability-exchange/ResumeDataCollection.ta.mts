/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ResumeDataCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeDataCollection  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type ResumeDataCollection = BIT_STRING;

/**
 * @summary ResumeDataCollection_privateData
 * @constant
 */
export
const ResumeDataCollection_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ResumeDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ResumeDataCollection_privateDataInAck
 * @constant
 */
export
const ResumeDataCollection_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ResumeDataCollection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ResumeDataCollection: $.ASN1Decoder<ResumeDataCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeDataCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeDataCollection (el: _Element): ResumeDataCollection {
    if (!_cached_decoder_for_ResumeDataCollection) { _cached_decoder_for_ResumeDataCollection = $._decodeBitString; }
    return _cached_decoder_for_ResumeDataCollection(el);
}

let _cached_encoder_for_ResumeDataCollection: $.ASN1Encoder<ResumeDataCollection> | null = null;

/**
 * @summary Encodes a(n) ResumeDataCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeDataCollection, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeDataCollection (value: ResumeDataCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeDataCollection) { _cached_encoder_for_ResumeDataCollection = $._encodeBitString; }
    return _cached_encoder_for_ResumeDataCollection(value, elGetter);
}


/* eslint-enable */
