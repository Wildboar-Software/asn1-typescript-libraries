/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue
 * @description
 * 
 * Whether production-status may become operational only when the CLCW reports
 * RF available. yes is 0 and no is 1. Table 3-11 defines yes and does not
 * further define no.
 * 
 * CCSDS 912.3-B-3, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parRfAvailableRequired-parameterValue ::= INTEGER
 *       {  yes                        (0)
 *       ,  no                         (1)
 *       }
 * ```
 */
export
type FspGetParameter_parRfAvailableRequired_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_yes
 * @description
 *
 * The CLCW No RF Available flag must be false before the provider may set
 * production-status to operational. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parRfAvailableRequired_parameterValue_yes = 0 satisfies FspGetParameter_parRfAvailableRequired_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_yes
 * @description
 *
 * No RF Available must be false before production-status becomes operational
 * (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const yes = FspGetParameter_parRfAvailableRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_no
 * @description
 *
 * Table 3-11 defines the No RF Available constraint for yes. It does not
 * further define no. The value remains a service-management setting of
 * rf-available-required. CCSDS 912.3-B-3, table 3-1 and table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parRfAvailableRequired_parameterValue_no = 1 satisfies FspGetParameter_parRfAvailableRequired_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_no
 * @description
 *
 * Table 3-11 does not further define no for rf-available-required.
 * @constant
 * @type {number}
 */
export
const no = FspGetParameter_parRfAvailableRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Decoder<FspGetParameter_parRfAvailableRequired_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Encoder<FspGetParameter_parRfAvailableRequired_parameterValue> = $._encodeInteger;


/* eslint-enable */
