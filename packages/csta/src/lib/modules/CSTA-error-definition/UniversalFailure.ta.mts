/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { OperationErrors, _decode_OperationErrors, _encode_OperationErrors } from "../CSTA-error-definition/OperationErrors.ta.mjs";

import { SecurityErrors, _decode_SecurityErrors, _encode_SecurityErrors } from "../CSTA-error-definition/SecurityErrors.ta.mjs";

import { StateIncompatibilityErrors, _decode_StateIncompatibilityErrors, _encode_StateIncompatibilityErrors } from "../CSTA-error-definition/StateIncompatibilityErrors.ta.mjs";

import {
    SystemResourceAvailabilityErrors,
    _decode_SystemResourceAvailabilityErrors,
    _encode_SystemResourceAvailabilityErrors
} from "../CSTA-error-definition/SystemResourceAvailabilityErrors.ta.mjs";

import {
    SubscribedResourceAvailabilityErrors,
    _decode_SubscribedResourceAvailabilityErrors,
    _encode_SubscribedResourceAvailabilityErrors
} from "../CSTA-error-definition/SubscribedResourceAvailabilityErrors.ta.mjs";

import { PerformanceManagementErrors, _decode_PerformanceManagementErrors, _encode_PerformanceManagementErrors } from "../CSTA-error-definition/PerformanceManagementErrors.ta.mjs";

import { PrivateDataInfoErrors, _decode_PrivateDataInfoErrors, _encode_PrivateDataInfoErrors } from "../CSTA-error-definition/PrivateDataInfoErrors.ta.mjs";

import { UnspecifiedErrors, _decode_UnspecifiedErrors, _encode_UnspecifiedErrors } from "../CSTA-error-definition/UnspecifiedErrors.ta.mjs";



/**
 * @summary UniversalFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniversalFailure  ::=  CHOICE
 * {     operation                 [0] OperationErrors,
 *     security                 [1] SecurityErrors,
 *     stateIncompatibility             [2] StateIncompatibilityErrors,
 *     systemResourceAvailability         [3] SystemResourceAvailabilityErrors,
 *     subscribedResourceAvailability         [4] SubscribedResourceAvailabilityErrors,
 *     performanceManagement             [5] PerformanceManagementErrors,
 *     privateData                 [6] PrivateDataInfoErrors,
 *     unspecified                 [7] UnspecifiedErrors }
 * ```
 */
export
type UniversalFailure =
    { operation: OperationErrors } /* CHOICE_ALT_ROOT */
    | { security: SecurityErrors } /* CHOICE_ALT_ROOT */
    | { stateIncompatibility: StateIncompatibilityErrors } /* CHOICE_ALT_ROOT */
    | { systemResourceAvailability: SystemResourceAvailabilityErrors } /* CHOICE_ALT_ROOT */
    | { subscribedResourceAvailability: SubscribedResourceAvailabilityErrors } /* CHOICE_ALT_ROOT */
    | { performanceManagement: PerformanceManagementErrors } /* CHOICE_ALT_ROOT */
    | { privateData: PrivateDataInfoErrors } /* CHOICE_ALT_ROOT */
    | { unspecified: UnspecifiedErrors } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UniversalFailure: $.ASN1Decoder<UniversalFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UniversalFailure (el: _Element): UniversalFailure {
    if (!_cached_decoder_for_UniversalFailure) { _cached_decoder_for_UniversalFailure = $._decode_inextensible_choice<UniversalFailure>({
    "CONTEXT 0": [ "operation", $._decode_implicit<OperationErrors>(() => _decode_OperationErrors) ],
    "CONTEXT 1": [ "security", $._decode_implicit<SecurityErrors>(() => _decode_SecurityErrors) ],
    "CONTEXT 2": [ "stateIncompatibility", $._decode_implicit<StateIncompatibilityErrors>(() => _decode_StateIncompatibilityErrors) ],
    "CONTEXT 3": [ "systemResourceAvailability", $._decode_implicit<SystemResourceAvailabilityErrors>(() => _decode_SystemResourceAvailabilityErrors) ],
    "CONTEXT 4": [ "subscribedResourceAvailability", $._decode_implicit<SubscribedResourceAvailabilityErrors>(() => _decode_SubscribedResourceAvailabilityErrors) ],
    "CONTEXT 5": [ "performanceManagement", $._decode_implicit<PerformanceManagementErrors>(() => _decode_PerformanceManagementErrors) ],
    "CONTEXT 6": [ "privateData", $._decode_implicit<PrivateDataInfoErrors>(() => _decode_PrivateDataInfoErrors) ],
    "CONTEXT 7": [ "unspecified", $._decode_implicit<UnspecifiedErrors>(() => _decode_UnspecifiedErrors) ]
}); }
    return _cached_decoder_for_UniversalFailure(el);
}

let _cached_encoder_for_UniversalFailure: $.ASN1Encoder<UniversalFailure> | null = null;

/**
 * @summary Encodes a(n) UniversalFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalFailure, encoded as an ASN.1 Element.
 */
export
function _encode_UniversalFailure (value: UniversalFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UniversalFailure) { _cached_encoder_for_UniversalFailure = $._encode_choice<UniversalFailure>({
    "operation": $._encode_implicit(_TagClass.context, 0, () => _encode_OperationErrors, $.BER),
    "security": $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityErrors, $.BER),
    "stateIncompatibility": $._encode_implicit(_TagClass.context, 2, () => _encode_StateIncompatibilityErrors, $.BER),
    "systemResourceAvailability": $._encode_implicit(_TagClass.context, 3, () => _encode_SystemResourceAvailabilityErrors, $.BER),
    "subscribedResourceAvailability": $._encode_implicit(_TagClass.context, 4, () => _encode_SubscribedResourceAvailabilityErrors, $.BER),
    "performanceManagement": $._encode_implicit(_TagClass.context, 5, () => _encode_PerformanceManagementErrors, $.BER),
    "privateData": $._encode_implicit(_TagClass.context, 6, () => _encode_PrivateDataInfoErrors, $.BER),
    "unspecified": $._encode_implicit(_TagClass.context, 7, () => _encode_UnspecifiedErrors, $.BER),
}, $.BER); }
    return _cached_encoder_for_UniversalFailure(value, elGetter);
}


/* eslint-enable */
