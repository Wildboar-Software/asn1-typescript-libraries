/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeCondition  ::=  BIT STRING {
 *    nIDDsubmissionResponseReceipt  (0 ), 
 *    nIDDsubmissionResponseSending  (1 ), 
 *    nIDDdeliveryToUE  (2 ), 
 *    nIDDdeliveryFromUEerror  (3 ), 
 *    nIDDsubmissionTimeout  (4 )}
 * ```
 */
export
type ServiceChangeCondition = BIT_STRING;

/**
 * @summary ServiceChangeCondition_nIDDsubmissionResponseReceipt
 * @constant
 */
export
const ServiceChangeCondition_nIDDsubmissionResponseReceipt: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseReceipt
 * @constant
 */
export
const nIDDsubmissionResponseReceipt: number = ServiceChangeCondition_nIDDsubmissionResponseReceipt; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDsubmissionResponseSending
 * @constant
 */
export
const ServiceChangeCondition_nIDDsubmissionResponseSending: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseSending
 * @constant
 */
export
const nIDDsubmissionResponseSending: number = ServiceChangeCondition_nIDDsubmissionResponseSending; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDdeliveryToUE
 * @constant
 */
export
const ServiceChangeCondition_nIDDdeliveryToUE: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryToUE
 * @constant
 */
export
const nIDDdeliveryToUE: number = ServiceChangeCondition_nIDDdeliveryToUE; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDdeliveryFromUEerror
 * @constant
 */
export
const ServiceChangeCondition_nIDDdeliveryFromUEerror: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryFromUEerror
 * @constant
 */
export
const nIDDdeliveryFromUEerror: number = ServiceChangeCondition_nIDDdeliveryFromUEerror; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_nIDDsubmissionTimeout
 * @constant
 */
export
const ServiceChangeCondition_nIDDsubmissionTimeout: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionTimeout
 * @constant
 */
export
const nIDDsubmissionTimeout: number = ServiceChangeCondition_nIDDsubmissionTimeout; /* SHORT_NAMED_BIT */

export
const _decode_ServiceChangeCondition: $.ASN1Decoder<ServiceChangeCondition> = $._decodeBitString;

export
const _encode_ServiceChangeCondition: $.ASN1Encoder<ServiceChangeCondition> = $._encodeBitString;

/* eslint-enable */
