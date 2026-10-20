/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NIDDsubmission_serviceChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDDsubmission-serviceChangeCondition ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type NIDDsubmission_serviceChangeCondition = BIT_STRING;

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt
 * @constant
 */
export
const NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseReceipt
 * @constant
 */
export
const nIDDsubmissionResponseReceipt: number = NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseReceipt; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending
 * @constant
 */
export
const NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionResponseSending
 * @constant
 */
export
const nIDDsubmissionResponseSending: number = NIDDsubmission_serviceChangeCondition_nIDDsubmissionResponseSending; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE
 * @constant
 */
export
const NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryToUE
 * @constant
 */
export
const nIDDdeliveryToUE: number = NIDDsubmission_serviceChangeCondition_nIDDdeliveryToUE; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror
 * @constant
 */
export
const NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nIDDdeliveryFromUEerror
 * @constant
 */
export
const nIDDdeliveryFromUEerror: number = NIDDsubmission_serviceChangeCondition_nIDDdeliveryFromUEerror; /* SHORT_NAMED_BIT */

/**
 * @summary NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout
 * @constant
 */
export
const NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary nIDDsubmissionTimeout
 * @constant
 */
export
const nIDDsubmissionTimeout: number = NIDDsubmission_serviceChangeCondition_nIDDsubmissionTimeout; /* SHORT_NAMED_BIT */

export
const _decode_NIDDsubmission_serviceChangeCondition: $.ASN1Decoder<NIDDsubmission_serviceChangeCondition> = $._decodeBitString;

export
const _encode_NIDDsubmission_serviceChangeCondition: $.ASN1Encoder<NIDDsubmission_serviceChangeCondition> = $._encodeBitString;

/* eslint-enable */
