/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parSegmHeader_parameterValue
 * @description
 * 
 * Whether TC transfer frames carry a Segment Header. present is 0 and absent is
 * 1. Service management must keep this value consistent with
 * maximum-frame-length and maximum-packet-length.
 * 
 * CCSDS 912.3-B-3, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parSegmHeader-parameterValue ::= INTEGER
 *       {  present           (0)
 *       ,  absent            (1)
 *       }
 * ```
 */
export
type FspGetParameter_parSegmHeader_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_present
 * @description
 *
 * A Segment Header is present in the TC transfer frames. CCSDS 912.3-B-3, table
 * 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parSegmHeader_parameterValue_present: 0 = 0 satisfies FspGetParameter_parSegmHeader_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_present
 * @description
 *
 * Segment Header is present (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const present: 0 = FspGetParameter_parSegmHeader_parameterValue_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_absent
 * @description
 *
 * A Segment Header is absent from the TC transfer frames. The note to table
 * 3-11 requires this setting to stay consistent with maximum-frame-length and
 * maximum-packet-length. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parSegmHeader_parameterValue_absent: 1 = 1 satisfies FspGetParameter_parSegmHeader_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_absent
 * @description
 *
 * Segment Header is absent (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const absent: 1 = FspGetParameter_parSegmHeader_parameterValue_absent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parSegmHeader_parameterValue: $.ASN1Decoder<FspGetParameter_parSegmHeader_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parSegmHeader_parameterValue: $.ASN1Encoder<FspGetParameter_parSegmHeader_parameterValue> = $._encodeInteger;


/* eslint-enable */
