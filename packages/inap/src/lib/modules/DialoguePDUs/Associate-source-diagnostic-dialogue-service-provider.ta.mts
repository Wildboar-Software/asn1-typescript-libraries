/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Associate_source_diagnostic_dialogue_service_provider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Associate-source-diagnostic-dialogue-service-provider ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Associate_source_diagnostic_dialogue_service_provider = INTEGER;

/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_null_
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_dialogue_service_provider_null_: Associate_source_diagnostic_dialogue_service_provider = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_null_
 * @constant
 * @type {number}
 */
export
const null_: Associate_source_diagnostic_dialogue_service_provider = Associate_source_diagnostic_dialogue_service_provider_null_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_reason_given
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_dialogue_service_provider_no_reason_given: Associate_source_diagnostic_dialogue_service_provider = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_reason_given
 * @constant
 * @type {number}
 */
export
const no_reason_given: Associate_source_diagnostic_dialogue_service_provider = Associate_source_diagnostic_dialogue_service_provider_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion
 * @constant
 * @type {number}
 */
export
const Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion: Associate_source_diagnostic_dialogue_service_provider = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion
 * @constant
 * @type {number}
 */
export
const no_common_dialogue_portion: Associate_source_diagnostic_dialogue_service_provider = Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Associate_source_diagnostic_dialogue_service_provider: $.ASN1Decoder<Associate_source_diagnostic_dialogue_service_provider> = $._decodeInteger;

export
const _encode_Associate_source_diagnostic_dialogue_service_provider: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_provider> = $._encodeInteger;

/* eslint-enable */
