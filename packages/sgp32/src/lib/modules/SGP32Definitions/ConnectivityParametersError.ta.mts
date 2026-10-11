/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectivityParametersError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectivityParametersError  ::=  INTEGER {
 *     parametersNotAvailable(1),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConnectivityParametersError = INTEGER;

/**
 * @summary ConnectivityParametersError_parametersNotAvailable
 * @constant
 * @type {number}
 */
export
const ConnectivityParametersError_parametersNotAvailable: ConnectivityParametersError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_parametersNotAvailable
 * @constant
 * @type {number}
 */
export
const parametersNotAvailable: ConnectivityParametersError = ConnectivityParametersError_parametersNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_undefinedError
 * @constant
 * @type {number}
 */
export
const ConnectivityParametersError_undefinedError: ConnectivityParametersError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ConnectivityParametersError = ConnectivityParametersError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConnectivityParametersError: $.ASN1Decoder<ConnectivityParametersError> = $._decodeInteger;
export const _encode_ConnectivityParametersError: $.ASN1Encoder<ConnectivityParametersError> = $._encodeInteger;


/* eslint-enable */
