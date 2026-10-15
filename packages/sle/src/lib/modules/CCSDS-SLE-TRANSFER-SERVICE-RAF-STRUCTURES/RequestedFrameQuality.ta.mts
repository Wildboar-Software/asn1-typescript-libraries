/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedFrameQuality
 * @description
 * 
 * Frame-quality filter supplied on RAF-START. It selects frames by the
 * `delivered-frame-quality` annotation. Until a successful RAF-START,
 * RAF-GET-PARAMETER reports the first element of the permitted-frame-quality
 * set.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedFrameQuality          ::=  INTEGER
 * {   goodFramesOnly                    (0)
 * ,   erredFrameOnly                    (1)
 * ,   allFrames                         (2)
 * }
 * ```
 */
export
type RequestedFrameQuality = INTEGER;

/**
 * @summary RequestedFrameQuality_goodFramesOnly
 * @description
 * 
 * Deliver only frames whose delivered-frame-quality is `good`.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7.
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_goodFramesOnly: RequestedFrameQuality = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_goodFramesOnly
 * @description
 * 
 * Deliver only frames annotated `good` (CCSDS 911.1-B-5, section 3.4.2.7).
 * @constant
 * @type {number}
 */
export
const goodFramesOnly: RequestedFrameQuality = RequestedFrameQuality_goodFramesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_erredFrameOnly
 * @description
 * 
 * Deliver only frames whose delivered-frame-quality is `erred`. The book spells
 * the criterion `erred frames only`; the ASN.1 name is `erredFrameOnly`.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7 and annex A2.5.
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_erredFrameOnly: RequestedFrameQuality = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_erredFrameOnly
 * @description
 * 
 * Deliver only frames annotated `erred` (CCSDS 911.1-B-5, section 3.4.2.7).
 * @constant
 * @type {number}
 */
export
const erredFrameOnly: RequestedFrameQuality = RequestedFrameQuality_erredFrameOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_allFrames
 * @description
 * 
 * Deliver every frame, whatever its delivered-frame-quality, including
 * `undetermined`.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.7 and 3.6.2.6.
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_allFrames: RequestedFrameQuality = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_allFrames
 * @description
 * 
 * Deliver every frame, including `undetermined` (CCSDS 911.1-B-5, sections
 * 3.4.2.7 and 3.6.2.6).
 * @constant
 * @type {number}
 */
export
const allFrames: RequestedFrameQuality = RequestedFrameQuality_allFrames; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RequestedFrameQuality: $.ASN1Decoder<RequestedFrameQuality> = $._decodeInteger;
export const _encode_RequestedFrameQuality: $.ASN1Encoder<RequestedFrameQuality> = $._encodeInteger;


/* eslint-enable */
