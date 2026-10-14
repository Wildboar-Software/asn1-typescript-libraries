/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedUpdateMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedUpdateMode      ::=    INTEGER
 * {  continuous                    (0)
 * ,  changeBased                   (1)
 * }
 * ```
 */
export
type RequestedUpdateMode = INTEGER;

/**
 * @summary RequestedUpdateMode_continuous
 * @constant
 * @type {number}
 */
export
const RequestedUpdateMode_continuous: RequestedUpdateMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_continuous
 * @constant
 * @type {number}
 */
export
const continuous: RequestedUpdateMode = RequestedUpdateMode_continuous; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_changeBased
 * @constant
 * @type {number}
 */
export
const RequestedUpdateMode_changeBased: RequestedUpdateMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_changeBased
 * @constant
 * @type {number}
 */
export
const changeBased: RequestedUpdateMode = RequestedUpdateMode_changeBased; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RequestedUpdateMode: $.ASN1Decoder<RequestedUpdateMode> = $._decodeInteger;
export const _encode_RequestedUpdateMode: $.ASN1Encoder<RequestedUpdateMode> = $._encodeInteger;


/* eslint-enable */
