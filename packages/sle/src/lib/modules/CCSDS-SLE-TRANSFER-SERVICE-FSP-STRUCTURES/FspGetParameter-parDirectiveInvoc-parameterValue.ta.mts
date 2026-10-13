/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirectiveInvoc-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parDirectiveInvoc_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_enabled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirectiveInvoc_parameterValue_enabled: FspGetParameter_parDirectiveInvoc_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_enabled
 * @constant
 * @type {number}
 */
export
const enabled: FspGetParameter_parDirectiveInvoc_parameterValue = FspGetParameter_parDirectiveInvoc_parameterValue_enabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_disabled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirectiveInvoc_parameterValue_disabled: FspGetParameter_parDirectiveInvoc_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_disabled
 * @constant
 * @type {number}
 */
export
const disabled: FspGetParameter_parDirectiveInvoc_parameterValue = FspGetParameter_parDirectiveInvoc_parameterValue_disabled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parDirectiveInvoc_parameterValue: $.ASN1Decoder<FspGetParameter_parDirectiveInvoc_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parDirectiveInvoc_parameterValue: $.ASN1Encoder<FspGetParameter_parDirectiveInvoc_parameterValue> = $._encodeInteger;


/* eslint-enable */
