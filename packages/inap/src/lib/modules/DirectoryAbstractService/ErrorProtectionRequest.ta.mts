/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorProtectionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorProtectionRequest  ::=  INTEGER {
 *   none(0), signed(1), encrypted(2), signed-encrypted(3)}
 * ```
 */
export
type ErrorProtectionRequest = INTEGER;

/**
 * @summary ErrorProtectionRequest_none
 * @constant
 * @type {number}
 */
export
const ErrorProtectionRequest_none: ErrorProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_none
 * @constant
 * @type {number}
 */
export
const none: ErrorProtectionRequest = ErrorProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_signed
 * @constant
 * @type {number}
 */
export
const ErrorProtectionRequest_signed: ErrorProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_signed
 * @constant
 * @type {number}
 */
export
const signed: ErrorProtectionRequest = ErrorProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_encrypted
 * @constant
 * @type {number}
 */
export
const ErrorProtectionRequest_encrypted: ErrorProtectionRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_encrypted
 * @constant
 * @type {number}
 */
export
const encrypted: ErrorProtectionRequest = ErrorProtectionRequest_encrypted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_signed_encrypted
 * @constant
 * @type {number}
 */
export
const ErrorProtectionRequest_signed_encrypted: ErrorProtectionRequest = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_signed_encrypted
 * @constant
 * @type {number}
 */
export
const signed_encrypted: ErrorProtectionRequest = ErrorProtectionRequest_signed_encrypted; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ErrorProtectionRequest: $.ASN1Decoder<ErrorProtectionRequest> = $._decodeInteger;

export
const _encode_ErrorProtectionRequest: $.ASN1Encoder<ErrorProtectionRequest> = $._encodeInteger;

/* eslint-enable */
