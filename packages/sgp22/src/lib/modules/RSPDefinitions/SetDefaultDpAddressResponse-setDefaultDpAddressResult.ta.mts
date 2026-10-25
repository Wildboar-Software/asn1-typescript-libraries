/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
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
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok: 0 = 0 satisfies SetDefaultDpAddressResponse_setDefaultDpAddressResult; /* LONG_NAMED_INTEGER_VALUE */

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
const ok: 0 = SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

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
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError: 127 = 127 satisfies SetDefaultDpAddressResponse_setDefaultDpAddressResult; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError: 127 = SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
