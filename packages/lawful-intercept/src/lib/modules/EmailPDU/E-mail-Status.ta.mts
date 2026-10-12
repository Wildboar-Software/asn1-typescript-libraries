/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E_mail_Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Status  ::=  ENUMERATED
 * {
 *     status-unknown(1),
 *     operation-failed(2),
 *     operation-succeeded(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_E_mail_Status {
    status_unknown = 1,
    operation_failed = 2,
    operation_succeeded = 3,
}

/**
 * @summary E_mail_Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Status  ::=  ENUMERATED
 * {
 *     status-unknown(1),
 *     operation-failed(2),
 *     operation-succeeded(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type E_mail_Status = _enum_for_E_mail_Status;

/**
 * @summary E_mail_Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Status  ::=  ENUMERATED
 * {
 *     status-unknown(1),
 *     operation-failed(2),
 *     operation-succeeded(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const E_mail_Status = _enum_for_E_mail_Status;

/**
 * @summary E_mail_Status_status_unknown
 * @constant
 * @type {number}
 */
export
const E_mail_Status_status_unknown: E_mail_Status = E_mail_Status.status_unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary status_unknown
 * @constant
 * @type {number}
 */
export
const status_unknown: E_mail_Status = E_mail_Status.status_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Status_operation_failed
 * @constant
 * @type {number}
 */
export
const E_mail_Status_operation_failed: E_mail_Status = E_mail_Status.operation_failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_failed
 * @constant
 * @type {number}
 */
export
const operation_failed: E_mail_Status = E_mail_Status.operation_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Status_operation_succeeded
 * @constant
 * @type {number}
 */
export
const E_mail_Status_operation_succeeded: E_mail_Status = E_mail_Status.operation_succeeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_succeeded
 * @constant
 * @type {number}
 */
export
const operation_succeeded: E_mail_Status = E_mail_Status.operation_succeeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_E_mail_Status: $.ASN1Decoder<E_mail_Status> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) E_mail_Status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_E_mail_Status (el: _Element): E_mail_Status {
    if (!_cached_decoder_for_E_mail_Status) { _cached_decoder_for_E_mail_Status = $._decodeEnumerated; }
    return _cached_decoder_for_E_mail_Status(el);
}

let _cached_encoder_for_E_mail_Status: $.ASN1Encoder<E_mail_Status> | null = null;

/**
 * @summary Encodes a(n) E_mail_Status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_mail_Status, encoded as an ASN.1 Element.
 */
export
function _encode_E_mail_Status (value: E_mail_Status, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_E_mail_Status) { _cached_encoder_for_E_mail_Status = $._encodeEnumerated; }
    return _cached_encoder_for_E_mail_Status(value, elGetter);
}


/* eslint-enable */
