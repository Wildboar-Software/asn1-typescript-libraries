/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_PwdResponse_error: {
    readonly passwordExpired: 0;
    readonly changeAfterReset: 1;
} = {
    passwordExpired: 0,
    changeAfterReset: 1,
};

export
type _enum_for_PwdResponse_error = ENUMERATED;

/**
 * @summary PwdResponse_error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PwdResponse-error ::= ENUMERATED {
 *   passwordExpired   (0),
 *   changeAfterReset  (1),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export
type PwdResponse_error = _enum_for_PwdResponse_error | ENUMERATED;

/**
 * @summary PwdResponse_error_passwordExpired
 * @constant
 * @type {number}
 */
export
const PwdResponse_error_passwordExpired: number = 0 satisfies PwdResponse_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export
const passwordExpired: number = PwdResponse_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PwdResponse_error_changeAfterReset
 * @constant
 * @type {number}
 */
export
const PwdResponse_error_changeAfterReset: number = 1 satisfies PwdResponse_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export
const changeAfterReset: number = PwdResponse_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PwdResponse_error: $.ASN1Decoder<PwdResponse_error> = $._decodeEnumerated;

export
const _encode_PwdResponse_error: $.ASN1Encoder<PwdResponse_error> = $._encodeEnumerated;

/* eslint-enable */
