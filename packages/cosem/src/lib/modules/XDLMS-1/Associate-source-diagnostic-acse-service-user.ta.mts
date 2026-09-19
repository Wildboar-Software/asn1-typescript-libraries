/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Associate_source_diagnostic_acse_service_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Associate-source-diagnostic-acse-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Associate_source_diagnostic_acse_service_user = INTEGER;

/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_null_: Associate_source_diagnostic_acse_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export
const null_: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_no_reason_given: Associate_source_diagnostic_acse_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export
const no_reason_given: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export
const application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognised
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognised: Associate_source_diagnostic_acse_service_user = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognised
 * @constant
 * @type {number}
 */
export
const authentication_mechanism_name_not_recognised: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognised; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required: Associate_source_diagnostic_acse_service_user = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export
const authentication_mechanism_name_required: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_failure
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_authentication_failure: Associate_source_diagnostic_acse_service_user = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_failure
 * @constant
 * @type {number}
 */
export
const authentication_failure: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_required
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_acse_service_user_authentication_required: Associate_source_diagnostic_acse_service_user = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_required
 * @constant
 * @type {number}
 */
export
const authentication_required: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_required; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Decoder<Associate_source_diagnostic_acse_service_user> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_acse_service_user
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Associate_source_diagnostic_acse_service_user (el: _Element): Associate_source_diagnostic_acse_service_user {
    if (!_cached_decoder_for_Associate_source_diagnostic_acse_service_user) { _cached_decoder_for_Associate_source_diagnostic_acse_service_user = $._decodeInteger; }
    return _cached_decoder_for_Associate_source_diagnostic_acse_service_user(el);
}

let _cached_encoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Encoder<Associate_source_diagnostic_acse_service_user> | null = null;

/**
 * @summary Encodes a(n) Associate_source_diagnostic_acse_service_user into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_acse_service_user, encoded as an ASN.1 Element.
 */
export
function _encode_Associate_source_diagnostic_acse_service_user (value: Associate_source_diagnostic_acse_service_user, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Associate_source_diagnostic_acse_service_user) { _cached_encoder_for_Associate_source_diagnostic_acse_service_user = $._encodeInteger; }
    return _cached_encoder_for_Associate_source_diagnostic_acse_service_user(value, elGetter);
}


/* eslint-enable */
