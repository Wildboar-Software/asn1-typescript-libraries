/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FrameQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameQuality                  ::=  INTEGER
 * {   good                              (0)
 * ,   erred                             (1)
 * ,   undetermined                      (2)
 * }
 * ```
 */
export
type FrameQuality = INTEGER;

/**
 * @summary FrameQuality_good
 * @constant
 * @type {number}
 */
export
const FrameQuality_good: FrameQuality = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_good
 * @constant
 * @type {number}
 */
export
const good: FrameQuality = FrameQuality_good; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_erred
 * @constant
 * @type {number}
 */
export
const FrameQuality_erred: FrameQuality = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_erred
 * @constant
 * @type {number}
 */
export
const erred: FrameQuality = FrameQuality_erred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_undetermined
 * @constant
 * @type {number}
 */
export
const FrameQuality_undetermined: FrameQuality = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_undetermined
 * @constant
 * @type {number}
 */
export
const undetermined: FrameQuality = FrameQuality_undetermined; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FrameQuality: $.ASN1Decoder<FrameQuality> = $._decodeInteger;
export const _encode_FrameQuality: $.ASN1Encoder<FrameQuality> = $._encodeInteger;


/* eslint-enable */
