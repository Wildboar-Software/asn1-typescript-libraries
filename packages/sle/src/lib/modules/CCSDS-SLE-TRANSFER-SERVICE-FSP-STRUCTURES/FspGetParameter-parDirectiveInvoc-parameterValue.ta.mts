/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue
 * @description
 * 
 * Whether this service instance may invoke FSP-INVOKE-DIRECTIVE. enabled is 0
 * and disabled is 1.
 * 
 * CCSDS 912.3-B-3, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirectiveInvoc-parameterValue ::= INTEGER
 *       {  enabled           (0)
 *       ,  disabled          (1)
 *       }
 * ```
 */
export
type FspGetParameter_parDirectiveInvoc_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_enabled
 * @description
 *
 * This service instance is authorized to invoke FSP-INVOKE-DIRECTIVE. CCSDS
 * 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirectiveInvoc_parameterValue_enabled = 0 satisfies FspGetParameter_parDirectiveInvoc_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_enabled
 * @description
 *
 * FSP-INVOKE-DIRECTIVE is authorized for this service instance (CCSDS
 * 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const enabled = FspGetParameter_parDirectiveInvoc_parameterValue_enabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_disabled
 * @description
 *
 * This service instance is unauthorized to invoke FSP-INVOKE-DIRECTIVE. CCSDS
 * 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirectiveInvoc_parameterValue_disabled = 1 satisfies FspGetParameter_parDirectiveInvoc_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_disabled
 * @description
 *
 * FSP-INVOKE-DIRECTIVE is unauthorized for this service instance (CCSDS
 * 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const disabled = FspGetParameter_parDirectiveInvoc_parameterValue_disabled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parDirectiveInvoc_parameterValue: $.ASN1Decoder<FspGetParameter_parDirectiveInvoc_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parDirectiveInvoc_parameterValue: $.ASN1Encoder<FspGetParameter_parDirectiveInvoc_parameterValue> = $._encodeInteger;


/* eslint-enable */
