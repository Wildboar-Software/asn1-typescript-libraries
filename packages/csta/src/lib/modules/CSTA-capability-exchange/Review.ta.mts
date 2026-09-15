/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Review
 * @description
 * Capability bitmap for the Review event (ECMA-269 C.20.10, ECMA-285 §9.10).
 * Presence of this entry in `VoiceUnitEvtsList` means the SF supports that
 * event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.10).
 */
export
const Review_msgToReview: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary msgToReview
 * @constant
 * @description
 * Alias of `Review_msgToReview`.
 */
export
const msgToReview: number = Review_msgToReview; /* SHORT_NAMED_BIT */

/**
 * @summary Review_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.10).
 */
export
const Review_resource: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Review_resource`.
 */
export
const resource: number = Review_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Review_periodToResumeStartOfMsg
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.10).
 */
export
const Review_periodToResumeStartOfMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary periodToResumeStartOfMsg
 * @constant
 * @description
 * Alias of `Review_periodToResumeStartOfMsg`.
 */
export
const periodToResumeStartOfMsg: number = Review_periodToResumeStartOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary Review_periodToResumeLengthOfReview
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.10).
 */
export
const Review_periodToResumeLengthOfReview: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary periodToResumeLengthOfReview
 * @constant
 * @description
 * Alias of `Review_periodToResumeLengthOfReview`.
 */
export
const periodToResumeLengthOfReview: number = Review_periodToResumeLengthOfReview; /* SHORT_NAMED_BIT */

/**
 * @summary Review_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.10).
 */
export
const Review_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Review_privateData`.
 */
export
const privateData: number = Review_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Review_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.20.10).
 */
export
const Review_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Review_privateDataInAck`.
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
