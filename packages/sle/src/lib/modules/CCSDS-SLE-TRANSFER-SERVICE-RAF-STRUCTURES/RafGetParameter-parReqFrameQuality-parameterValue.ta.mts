/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parReqFrameQuality-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RafGetParameter_parReqFrameQuality_parameterValue = INTEGER;

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly: RafGetParameter_parReqFrameQuality_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const goodFramesOnly: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly: RafGetParameter_parReqFrameQuality_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const erredFrameOnly: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_allFrames
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_allFrames: RafGetParameter_parReqFrameQuality_parameterValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_allFrames
 * @constant
 * @type {number}
 */
export
const allFrames: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_allFrames; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RafGetParameter_parReqFrameQuality_parameterValue: $.ASN1Decoder<RafGetParameter_parReqFrameQuality_parameterValue> = $._decodeInteger;
export const _encode_RafGetParameter_parReqFrameQuality_parameterValue: $.ASN1Encoder<RafGetParameter_parReqFrameQuality_parameterValue> = $._encodeInteger;


/* eslint-enable */
