/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Review
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Review  ::=  BIT STRING
 * {     msgToReview                ( 4),    -- optional parameters
 *     resource                ( 5),    -- optional parameters
 *     periodToResumeStartOfMsg         ( 0),     -- optional parameters
 *     periodToResumeLengthOfReview         ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type Review = BIT_STRING;

/**
 * @summary Review_msgToReview
 * @constant
 */
export
const Review_msgToReview: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary msgToReview
 * @constant
 */
export
const msgToReview: number = Review_msgToReview; /* SHORT_NAMED_BIT */

/**
 * @summary Review_resource
 * @constant
 */
export
const Review_resource: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Review_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Review_periodToResumeStartOfMsg
 * @constant
 */
export
const Review_periodToResumeStartOfMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary periodToResumeStartOfMsg
 * @constant
 */
export
const periodToResumeStartOfMsg: number = Review_periodToResumeStartOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary Review_periodToResumeLengthOfReview
 * @constant
 */
export
const Review_periodToResumeLengthOfReview: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary periodToResumeLengthOfReview
 * @constant
 */
export
const periodToResumeLengthOfReview: number = Review_periodToResumeLengthOfReview; /* SHORT_NAMED_BIT */

/**
 * @summary Review_privateData
 * @constant
 */
export
const Review_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Review_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Review_privateDataInAck
 * @constant
 */
export
const Review_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Review_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Review: $.ASN1Decoder<Review> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Review
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Review (el: _Element): Review {
    if (!_cached_decoder_for_Review) { _cached_decoder_for_Review = $._decodeBitString; }
    return _cached_decoder_for_Review(el);
}

let _cached_encoder_for_Review: $.ASN1Encoder<Review> | null = null;

/**
 * @summary Encodes a(n) Review into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Review, encoded as an ASN.1 Element.
 */
export
function _encode_Review (value: Review, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Review) { _cached_encoder_for_Review = $._encodeBitString; }
    return _cached_encoder_for_Review(value, elGetter);
}


/* eslint-enable */
