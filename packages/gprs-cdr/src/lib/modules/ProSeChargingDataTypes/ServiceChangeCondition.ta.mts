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
 *    pLMNchange  (0 ),
 *    coverageStatusChange  (1 ),
 *    locationChange  (2 )}
 * ```
 */
export
type ServiceChangeCondition = BIT_STRING;

/**
 * @summary ServiceChangeCondition_pLMNchange
 * @constant
 */
export
const ServiceChangeCondition_pLMNchange: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pLMNchange
 * @constant
 */
export
const pLMNchange: number = ServiceChangeCondition_pLMNchange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_coverageStatusChange
 * @constant
 */
export
const ServiceChangeCondition_coverageStatusChange: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary coverageStatusChange
 * @constant
 */
export
const coverageStatusChange: number = ServiceChangeCondition_coverageStatusChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceChangeCondition_locationChange
 * @constant
 */
export
const ServiceChangeCondition_locationChange: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary locationChange
 * @constant
 */
export
const locationChange: number = ServiceChangeCondition_locationChange; /* SHORT_NAMED_BIT */

export
const _decode_ServiceChangeCondition: $.ASN1Decoder<ServiceChangeCondition> = $._decodeBitString;

export
const _encode_ServiceChangeCondition: $.ASN1Encoder<ServiceChangeCondition> = $._encodeBitString;

/* eslint-enable */
