/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedFrameQuality
 * @description
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
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_goodFramesOnly: RequestedFrameQuality = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const goodFramesOnly: RequestedFrameQuality = RequestedFrameQuality_goodFramesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_erredFrameOnly: RequestedFrameQuality = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const erredFrameOnly: RequestedFrameQuality = RequestedFrameQuality_erredFrameOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_allFrames
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_allFrames: RequestedFrameQuality = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_allFrames
 * @constant
 * @type {number}
 */
export
const allFrames: RequestedFrameQuality = RequestedFrameQuality_allFrames; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RequestedFrameQuality: $.ASN1Decoder<RequestedFrameQuality> = $._decodeInteger;
export const _encode_RequestedFrameQuality: $.ASN1Encoder<RequestedFrameQuality> = $._encodeInteger;


/* eslint-enable */
