/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfProSeCondition-serviceChangeCondition ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ChangeOfProSeCondition_serviceChangeCondition = BIT_STRING;

/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition_pLMNchange
 * @constant
 */
export
const ChangeOfProSeCondition_serviceChangeCondition_pLMNchange: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pLMNchange
 * @constant
 */
export
const pLMNchange: number = ChangeOfProSeCondition_serviceChangeCondition_pLMNchange; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition_coverageStatusChange
 * @constant
 */
export
const ChangeOfProSeCondition_serviceChangeCondition_coverageStatusChange: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary coverageStatusChange
 * @constant
 */
export
const coverageStatusChange: number = ChangeOfProSeCondition_serviceChangeCondition_coverageStatusChange; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeOfProSeCondition_serviceChangeCondition_locationChange
 * @constant
 */
export
const ChangeOfProSeCondition_serviceChangeCondition_locationChange: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary locationChange
 * @constant
 */
export
const locationChange: number = ChangeOfProSeCondition_serviceChangeCondition_locationChange; /* SHORT_NAMED_BIT */

export
const _decode_ChangeOfProSeCondition_serviceChangeCondition: $.ASN1Decoder<ChangeOfProSeCondition_serviceChangeCondition> = $._decodeBitString;

export
const _encode_ChangeOfProSeCondition_serviceChangeCondition: $.ASN1Encoder<ChangeOfProSeCondition_serviceChangeCondition> = $._encodeBitString;

/* eslint-enable */
