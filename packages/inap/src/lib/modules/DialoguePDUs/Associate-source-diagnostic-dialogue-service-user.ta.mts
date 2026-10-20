/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Associate_source_diagnostic_dialogue_service_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Associate-source-diagnostic-dialogue-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Associate_source_diagnostic_dialogue_service_user = INTEGER;

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_null_
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_dialogue_service_user_null_: Associate_source_diagnostic_dialogue_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_null_
 * @constant
 * @type {number}
 */
export
const null_: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_dialogue_service_user_no_reason_given: Associate_source_diagnostic_dialogue_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export
const no_reason_given: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported: Associate_source_diagnostic_dialogue_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export
const application_context_name_not_supported: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Associate_source_diagnostic_dialogue_service_user: $.ASN1Decoder<Associate_source_diagnostic_dialogue_service_user> = $._decodeInteger;

export
const _encode_Associate_source_diagnostic_dialogue_service_user: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_user> = $._encodeInteger;

/* eslint-enable */
