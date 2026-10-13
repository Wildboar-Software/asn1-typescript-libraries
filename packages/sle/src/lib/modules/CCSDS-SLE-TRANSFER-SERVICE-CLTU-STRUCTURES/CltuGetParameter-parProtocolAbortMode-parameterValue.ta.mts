/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parProtocolAbortMode-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CltuGetParameter_parProtocolAbortMode_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_abort
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parProtocolAbortMode_parameterValue_abort: CltuGetParameter_parProtocolAbortMode_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_abort
 * @constant
 * @type {number}
 */
export
const abort: CltuGetParameter_parProtocolAbortMode_parameterValue = CltuGetParameter_parProtocolAbortMode_parameterValue_abort; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_continue_
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parProtocolAbortMode_parameterValue_continue_: CltuGetParameter_parProtocolAbortMode_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_continue_
 * @constant
 * @type {number}
 */
export
const continue_: CltuGetParameter_parProtocolAbortMode_parameterValue = CltuGetParameter_parProtocolAbortMode_parameterValue_continue_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parProtocolAbortMode_parameterValue: $.ASN1Decoder<CltuGetParameter_parProtocolAbortMode_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parProtocolAbortMode_parameterValue: $.ASN1Encoder<CltuGetParameter_parProtocolAbortMode_parameterValue> = $._encodeInteger;


/* eslint-enable */
