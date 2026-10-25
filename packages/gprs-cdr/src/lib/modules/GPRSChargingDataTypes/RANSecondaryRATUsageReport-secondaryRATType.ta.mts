/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANSecondaryRATUsageReport_secondaryRATType
 * @description
 * 
 * Radio access used as the secondary RAT for this usage report, for
 * example NR (clause 5.2.1.11).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANSecondaryRATUsageReport-secondaryRATType ::= INTEGER {
 *    nR          ( 0 )
 * }
 * ```
 */
export
type RANSecondaryRATUsageReport_secondaryRATType = INTEGER;

/**
 * @summary RANSecondaryRATUsageReport_secondaryRATType_nR
 * @constant
 * @type {number}
 */
export
const RANSecondaryRATUsageReport_secondaryRATType_nR: 0 = 0 satisfies RANSecondaryRATUsageReport_secondaryRATType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RANSecondaryRATUsageReport_secondaryRATType_nR
 * @constant
 * @type {number}
 */
export
const nR: 0 = RANSecondaryRATUsageReport_secondaryRATType_nR; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RANSecondaryRATUsageReport_secondaryRATType: $.ASN1Decoder<RANSecondaryRATUsageReport_secondaryRATType> = $._decodeInteger;

export
const _encode_RANSecondaryRATUsageReport_secondaryRATType: $.ASN1Encoder<RANSecondaryRATUsageReport_secondaryRATType> = $._encodeInteger;

/* eslint-enable */
