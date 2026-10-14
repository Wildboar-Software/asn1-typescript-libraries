/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue
 * @description
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
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirInvocOnl_parameterValue_yes: FspGetParameter_parDirInvocOnl_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: FspGetParameter_parDirInvocOnl_parameterValue = FspGetParameter_parDirInvocOnl_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_no
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirInvocOnl_parameterValue_no: FspGetParameter_parDirInvocOnl_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: FspGetParameter_parDirInvocOnl_parameterValue = FspGetParameter_parDirInvocOnl_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parDirInvocOnl_parameterValue: $.ASN1Decoder<FspGetParameter_parDirInvocOnl_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parDirInvocOnl_parameterValue: $.ASN1Encoder<FspGetParameter_parDirInvocOnl_parameterValue> = $._encodeInteger;


/* eslint-enable */
