/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthenticateErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateErrorCode  ::=  INTEGER {invalidCertificate(1), invalidSignature(2), unsupportedCurve(3), noSessionContext(4), invalidOid(5), euiccChallengeMismatch(6), ciPKUnknown(7), undefinedError(127)}
 * ```
 */
export
type AuthenticateErrorCode = INTEGER;

/**
 * @summary AuthenticateErrorCode_invalidCertificate
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidCertificate: AuthenticateErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidCertificate
 * @constant
 * @type {number}
 */
export
const invalidCertificate: AuthenticateErrorCode = AuthenticateErrorCode_invalidCertificate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidSignature
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidSignature: AuthenticateErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: AuthenticateErrorCode = AuthenticateErrorCode_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_unsupportedCurve
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_unsupportedCurve: AuthenticateErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_unsupportedCurve
 * @constant
 * @type {number}
 */
export
const unsupportedCurve: AuthenticateErrorCode = AuthenticateErrorCode_unsupportedCurve; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_noSessionContext
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_noSessionContext: AuthenticateErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_noSessionContext
 * @constant
 * @type {number}
 */
export
const noSessionContext: AuthenticateErrorCode = AuthenticateErrorCode_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidOid
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidOid: AuthenticateErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidOid
 * @constant
 * @type {number}
 */
export
const invalidOid: AuthenticateErrorCode = AuthenticateErrorCode_invalidOid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_euiccChallengeMismatch
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_euiccChallengeMismatch: AuthenticateErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_euiccChallengeMismatch
 * @constant
 * @type {number}
 */
export
const euiccChallengeMismatch: AuthenticateErrorCode = AuthenticateErrorCode_euiccChallengeMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_ciPKUnknown: AuthenticateErrorCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AuthenticateErrorCode = AuthenticateErrorCode_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_undefinedError: AuthenticateErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateErrorCode = AuthenticateErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AuthenticateErrorCode: $.ASN1Decoder<AuthenticateErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateErrorCode (el: _Element): AuthenticateErrorCode {
    if (!_cached_decoder_for_AuthenticateErrorCode) { _cached_decoder_for_AuthenticateErrorCode = $._decodeInteger; }
    return _cached_decoder_for_AuthenticateErrorCode(el);
}

let _cached_encoder_for_AuthenticateErrorCode: $.ASN1Encoder<AuthenticateErrorCode> | null = null;

/**
 * @summary Encodes a(n) AuthenticateErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateErrorCode (value: AuthenticateErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateErrorCode) { _cached_encoder_for_AuthenticateErrorCode = $._encodeInteger; }
    return _cached_encoder_for_AuthenticateErrorCode(value, elGetter);
}


/* eslint-enable */
