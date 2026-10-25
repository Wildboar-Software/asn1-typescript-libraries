/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue
 * @description
 * 
 * Whether production-status may become operational only when the CLCW reports
 * bit lock. yes is 0 and no is 1. CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parBitLockRequired-parameterValue ::= INTEGER
 *       {  yes                                          (0)
 *       ,  no                                           (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parBitLockRequired_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_yes
 * @description
 *
 * The CLCW No Bit Lock flag must be false before the provider may set
 * production-status to operational. CCSDS 912.1-B-5, table 3-11.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parBitLockRequired_parameterValue_yes = 0 satisfies CltuGetParameter_parBitLockRequired_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_yes
 * @description
 *
 * No Bit Lock must be false before production-status becomes operational (CCSDS
 * 912.1-B-5, table 3-11).
 * @constant
 * @type {number}
 */
export
const yes = CltuGetParameter_parBitLockRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_no
 * @description
 *
 * Table 3-11 states the No Bit Lock constraint for yes. It does not further
 * define no. The value is still a service-management setting of
 * bit-lock-required. CCSDS 912.1-B-5, table 3-1 and table 3-11.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parBitLockRequired_parameterValue_no = 1 satisfies CltuGetParameter_parBitLockRequired_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_no
 * @description
 *
 * Table 3-11 does not further define no for bit-lock-required.
 * @constant
 * @type {number}
 */
export
const no = CltuGetParameter_parBitLockRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parBitLockRequired_parameterValue: $.ASN1Decoder<CltuGetParameter_parBitLockRequired_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parBitLockRequired_parameterValue: $.ASN1Encoder<CltuGetParameter_parBitLockRequired_parameterValue> = $._encodeInteger;


/* eslint-enable */
