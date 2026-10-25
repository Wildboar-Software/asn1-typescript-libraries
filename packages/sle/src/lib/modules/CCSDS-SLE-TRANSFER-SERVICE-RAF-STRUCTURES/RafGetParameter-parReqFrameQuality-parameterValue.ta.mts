/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue
 * @description
 * 
 * Current requested-frame-quality filter, as returned by RAF-GET-PARAMETER. The
 * codes match `RequestedFrameQuality`. Until the user sets the filter with a
 * successful RAF-START, the value is the first element of
 * `permitted-frame-quality-set`.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parReqFrameQuality-parameterValue ::= INTEGER
 *         {   goodFramesOnly                (0)
 *         ,   erredFrameOnly                (1)
 *         ,   allFrames                     (2)
 *         }
 * ```
 */
export
type RafGetParameter_parReqFrameQuality_parameterValue = INTEGER;

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly
 * @description
 * 
 * Deliver only frames annotated `good`. This is the value RAF-GET-PARAMETER
 * returns for `requested-frame-quality`. Until a successful RAF-START, that
 * value is the first element of the permitted-frame-quality set.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7 and table 3-11.
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly: RafGetParameter_parReqFrameQuality_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly
 * @description
 * 
 * Deliver only frames annotated `good` (CCSDS 911.1-B-5, section 3.4.2.7 and
 * table 3-11).
 * @constant
 * @type {number}
 */
export
const goodFramesOnly: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly
 * @description
 * 
 * Deliver only frames annotated `erred`. This is the value RAF-GET-PARAMETER
 * returns for `requested-frame-quality`. Until a successful RAF-START, that
 * value is the first element of the permitted-frame-quality set.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7 and table 3-11.
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly: RafGetParameter_parReqFrameQuality_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly
 * @description
 * 
 * Deliver only frames annotated `erred` (CCSDS 911.1-B-5, section 3.4.2.7 and
 * table 3-11).
 * @constant
 * @type {number}
 */
export
const erredFrameOnly: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_allFrames
 * @description
 * 
 * Deliver every frame, including `undetermined`. This is the value
 * RAF-GET-PARAMETER returns for `requested-frame-quality`. Until a successful
 * RAF-START, that value is the first element of the permitted-frame-quality
 * set.
 * 
 * CCSDS 911.1-B-5, section 3.4.2.7 and table 3-11.
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_allFrames: RafGetParameter_parReqFrameQuality_parameterValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_allFrames
 * @description
 * 
 * Deliver every frame, including `undetermined` (CCSDS 911.1-B-5, section
 * 3.4.2.7 and table 3-11).
 * @constant
 * @type {number}
 */
export
const allFrames: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_allFrames; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RafGetParameter_parReqFrameQuality_parameterValue: $.ASN1Decoder<RafGetParameter_parReqFrameQuality_parameterValue> = $._decodeInteger;
export const _encode_RafGetParameter_parReqFrameQuality_parameterValue: $.ASN1Encoder<RafGetParameter_parReqFrameQuality_parameterValue> = $._encodeInteger;


/* eslint-enable */
