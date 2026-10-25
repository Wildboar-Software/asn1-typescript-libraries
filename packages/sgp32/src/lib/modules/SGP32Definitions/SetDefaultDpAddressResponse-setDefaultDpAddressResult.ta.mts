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
 * Outcome of ES10b.SetDefaultDpAddress. SGP.32 v1.2, section 5.9.25.
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
 * The default SM-DP+ address was updated or removed. SGP.32 v1.2, section
 * 5.9.25.
 * @constant
 * @type {number}
 */
export
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok = 0 satisfies SetDefaultDpAddressResponse_setDefaultDpAddressResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok
 * @description
 * The default SM-DP+ address was updated or removed. SGP.32 v1.2, section
 * 5.9.25.
 * @constant
 * @type {number}
 */
export
const ok = SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError
 * @description
 * Immediate enable is configured, so the eUICC rejects
 * ES10b.SetDefaultDpAddress. SGP.32 v1.2 lists this code and does not further
 * define any other condition that produces it. Section 5.9.25.
 * @constant
 * @type {number}
 */
export
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError = 127 satisfies SetDefaultDpAddressResponse_setDefaultDpAddressResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError
 * @description
 * Immediate enable is configured, so the command is rejected. SGP.32 v1.2,
 * section 5.9.25.
 * @constant
 * @type {number}
 */
export
const undefinedError = SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult: $.ASN1Decoder<SetDefaultDpAddressResponse_setDefaultDpAddressResult> = $._decodeInteger;
export const _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult: $.ASN1Encoder<SetDefaultDpAddressResponse_setDefaultDpAddressResult> = $._encodeInteger;


/* eslint-enable */
