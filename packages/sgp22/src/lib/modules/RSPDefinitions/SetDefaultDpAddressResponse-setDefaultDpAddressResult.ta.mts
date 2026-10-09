/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult
 * @description
 * 
 * `ok` (0) or `undefinedError` (127). SGP.22 v3.1 §5.7.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDefaultDpAddressResponse-setDefaultDpAddressResult ::= INTEGER {
 *     ok(0),
 *     undefinedError(127)
 * }
 * ```
 */
export
type SetDefaultDpAddressResponse_setDefaultDpAddressResult = INTEGER;

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok
 * @description
 * 
 * The default SM-DP+ address was stored. SGP.22 v3.1 §5.7.4.
 * 
 * @constant
 * @type {number}
 */
export
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok: SetDefaultDpAddressResponse_setDefaultDpAddressResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok
 * @description
 * 
 * The default SM-DP+ address was stored. SGP.22 v3.1 §5.7.4.
 * 
 * @constant
 * @type {number}
 */
export
const ok: SetDefaultDpAddressResponse_setDefaultDpAddressResult = SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError
 * @description
 * 
 * The address was not stored. SGP.22 v3.1 §5.7.4.
 * 
 * @constant
 * @type {number}
 */
export
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError: SetDefaultDpAddressResponse_setDefaultDpAddressResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError
 * @description
 * 
 * The address was not stored. SGP.22 v3.1 §5.7.4.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: SetDefaultDpAddressResponse_setDefaultDpAddressResult = SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult = $._decodeInteger;
export const _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult = $._encodeInteger;


/* eslint-enable */
