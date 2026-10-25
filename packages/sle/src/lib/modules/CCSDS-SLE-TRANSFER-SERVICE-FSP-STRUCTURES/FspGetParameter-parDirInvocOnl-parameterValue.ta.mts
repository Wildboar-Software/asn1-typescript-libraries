/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue
 * @description
 * 
 * Whether a service instance permitted to invoke directives for this VC is
 * online. yes is 0 and no is 1.
 * 
 * CCSDS 912.3-B-3, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirInvocOnl-parameterValue ::= INTEGER
 *       {  yes               (0)
 *       ,  no                (1)
 *       }
 * ```
 */
export
type FspGetParameter_parDirInvocOnl_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_yes
 * @description
 *
 * A service instance permitted to invoke directives for this VC is in state
 * ready or active. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirInvocOnl_parameterValue_yes = 0 satisfies FspGetParameter_parDirInvocOnl_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_yes
 * @description
 *
 * The directive-capable instance for this VC is ready or active (CCSDS
 * 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const yes = FspGetParameter_parDirInvocOnl_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_no
 * @description
 *
 * No service instance permitted to invoke directives exists for this VC, or
 * that instance is unbound. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirInvocOnl_parameterValue_no = 1 satisfies FspGetParameter_parDirInvocOnl_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_no
 * @description
 *
 * No directive-capable instance is online for this VC (CCSDS 912.3-B-3, table
 * 3-11).
 * @constant
 * @type {number}
 */
export
const no = FspGetParameter_parDirInvocOnl_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parDirInvocOnl_parameterValue: $.ASN1Decoder<FspGetParameter_parDirInvocOnl_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parDirInvocOnl_parameterValue: $.ASN1Encoder<FspGetParameter_parDirInvocOnl_parameterValue> = $._encodeInteger;


/* eslint-enable */
