/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Error_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Error-reason  ::=  INTEGER {
 *     unknown-subscriber (1),
 *     illegal-subscriber (9),
 *     teleservice-not-provisioned (11),
 *     call-barred (13),
 *     cug-reject (15),
 *     sMS-ll-capabilities-not-prov (19),
 *     error-in-MS (20),
 *     facility-not-supported (21),
 *     memory-capacity-exceeded (22),
 *     absent-subscriber (29),
 *     ms-busy-for-MT-sms (30),
 *     system-failure (36),
 *     illegal-equipment (44),
 *     no-resp-to-paging (60),
 *     gMSC-congestion (61),
 *     dublicate-sm (70),
 *     sC-congestion (101),
 *     mS-not-SC-Subscriber (103),
 *     invalid-sme-address (104)
 * }
 * ```
 */
export
type Error_reason = INTEGER;

/**
 * @summary Error_reason_unknown_subscriber
 * @constant
 * @type {number}
 */
export
const Error_reason_unknown_subscriber: Error_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_unknown_subscriber
 * @constant
 * @type {number}
 */
export
const unknown_subscriber: Error_reason = Error_reason_unknown_subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_subscriber
 * @constant
 * @type {number}
 */
export
const Error_reason_illegal_subscriber: Error_reason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_subscriber
 * @constant
 * @type {number}
 */
export
const illegal_subscriber: Error_reason = Error_reason_illegal_subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_teleservice_not_provisioned
 * @constant
 * @type {number}
 */
export
const Error_reason_teleservice_not_provisioned: Error_reason = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_teleservice_not_provisioned
 * @constant
 * @type {number}
 */
export
const teleservice_not_provisioned: Error_reason = Error_reason_teleservice_not_provisioned; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_call_barred
 * @constant
 * @type {number}
 */
export
const Error_reason_call_barred: Error_reason = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_call_barred
 * @constant
 * @type {number}
 */
export
const call_barred: Error_reason = Error_reason_call_barred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_cug_reject
 * @constant
 * @type {number}
 */
export
const Error_reason_cug_reject: Error_reason = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_cug_reject
 * @constant
 * @type {number}
 */
export
const cug_reject: Error_reason = Error_reason_cug_reject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sMS_ll_capabilities_not_prov
 * @constant
 * @type {number}
 */
export
const Error_reason_sMS_ll_capabilities_not_prov: Error_reason = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sMS_ll_capabilities_not_prov
 * @constant
 * @type {number}
 */
export
const sMS_ll_capabilities_not_prov: Error_reason = Error_reason_sMS_ll_capabilities_not_prov; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_error_in_MS
 * @constant
 * @type {number}
 */
export
const Error_reason_error_in_MS: Error_reason = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_error_in_MS
 * @constant
 * @type {number}
 */
export
const error_in_MS: Error_reason = Error_reason_error_in_MS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_facility_not_supported
 * @constant
 * @type {number}
 */
export
const Error_reason_facility_not_supported: Error_reason = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_facility_not_supported
 * @constant
 * @type {number}
 */
export
const facility_not_supported: Error_reason = Error_reason_facility_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_memory_capacity_exceeded
 * @constant
 * @type {number}
 */
export
const Error_reason_memory_capacity_exceeded: Error_reason = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_memory_capacity_exceeded
 * @constant
 * @type {number}
 */
export
const memory_capacity_exceeded: Error_reason = Error_reason_memory_capacity_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_absent_subscriber
 * @constant
 * @type {number}
 */
export
const Error_reason_absent_subscriber: Error_reason = 29; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_absent_subscriber
 * @constant
 * @type {number}
 */
export
const absent_subscriber: Error_reason = Error_reason_absent_subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_ms_busy_for_MT_sms
 * @constant
 * @type {number}
 */
export
const Error_reason_ms_busy_for_MT_sms: Error_reason = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_ms_busy_for_MT_sms
 * @constant
 * @type {number}
 */
export
const ms_busy_for_MT_sms: Error_reason = Error_reason_ms_busy_for_MT_sms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_system_failure
 * @constant
 * @type {number}
 */
export
const Error_reason_system_failure: Error_reason = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_system_failure
 * @constant
 * @type {number}
 */
export
const system_failure: Error_reason = Error_reason_system_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_equipment
 * @constant
 * @type {number}
 */
export
const Error_reason_illegal_equipment: Error_reason = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_equipment
 * @constant
 * @type {number}
 */
export
const illegal_equipment: Error_reason = Error_reason_illegal_equipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_no_resp_to_paging
 * @constant
 * @type {number}
 */
export
const Error_reason_no_resp_to_paging: Error_reason = 60; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_no_resp_to_paging
 * @constant
 * @type {number}
 */
export
const no_resp_to_paging: Error_reason = Error_reason_no_resp_to_paging; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_gMSC_congestion
 * @constant
 * @type {number}
 */
export
const Error_reason_gMSC_congestion: Error_reason = 61; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_gMSC_congestion
 * @constant
 * @type {number}
 */
export
const gMSC_congestion: Error_reason = Error_reason_gMSC_congestion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_dublicate_sm
 * @constant
 * @type {number}
 */
export
const Error_reason_dublicate_sm: Error_reason = 70; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_dublicate_sm
 * @constant
 * @type {number}
 */
export
const dublicate_sm: Error_reason = Error_reason_dublicate_sm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sC_congestion
 * @constant
 * @type {number}
 */
export
const Error_reason_sC_congestion: Error_reason = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sC_congestion
 * @constant
 * @type {number}
 */
export
const sC_congestion: Error_reason = Error_reason_sC_congestion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_mS_not_SC_Subscriber
 * @constant
 * @type {number}
 */
export
const Error_reason_mS_not_SC_Subscriber: Error_reason = 103; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_mS_not_SC_Subscriber
 * @constant
 * @type {number}
 */
export
const mS_not_SC_Subscriber: Error_reason = Error_reason_mS_not_SC_Subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_invalid_sme_address
 * @constant
 * @type {number}
 */
export
const Error_reason_invalid_sme_address: Error_reason = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_invalid_sme_address
 * @constant
 * @type {number}
 */
export
const invalid_sme_address: Error_reason = Error_reason_invalid_sme_address; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Error_reason: $.ASN1Decoder<Error_reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Error_reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Error_reason (el: _Element): Error_reason {
    if (!_cached_decoder_for_Error_reason) { _cached_decoder_for_Error_reason = $._decodeInteger; }
    return _cached_decoder_for_Error_reason(el);
}

let _cached_encoder_for_Error_reason: $.ASN1Encoder<Error_reason> | null = null;

/**
 * @summary Encodes a(n) Error_reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Error_reason, encoded as an ASN.1 Element.
 */
export
function _encode_Error_reason (value: Error_reason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Error_reason) { _cached_encoder_for_Error_reason = $._encodeInteger; }
    return _cached_encoder_for_Error_reason(value, elGetter);
}


/* eslint-enable */
