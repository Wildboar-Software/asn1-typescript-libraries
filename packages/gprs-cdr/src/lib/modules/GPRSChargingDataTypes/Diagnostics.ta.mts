/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { PositionMethodFailure_Diagnostic, _decode_PositionMethodFailure_Diagnostic, _encode_PositionMethodFailure_Diagnostic } from "../GPRSChargingDataTypes/PositionMethodFailure-Diagnostic.ta.mjs";
// export { PositionMethodFailure_Diagnostic, _enum_for_PositionMethodFailure_Diagnostic, PositionMethodFailure_Diagnostic_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_insufficientResources /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientResources /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_insufficientMeasurementData /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientMeasurementData /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_inconsistentMeasurementData /* IMPORTED_LONG_ENUMERATION_ITEM */, inconsistentMeasurementData /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_locationProcedureNotCompleted /* IMPORTED_LONG_ENUMERATION_ITEM */, locationProcedureNotCompleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS /* IMPORTED_LONG_ENUMERATION_ITEM */, locationProcedureNotSupportedByTargetMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_qoSNotAttainable /* IMPORTED_LONG_ENUMERATION_ITEM */, qoSNotAttainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, positionMethodNotAvailableInNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea /* IMPORTED_LONG_ENUMERATION_ITEM */, positionMethodNotAvailableInLocationArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositionMethodFailure_Diagnostic, _encode_PositionMethodFailure_Diagnostic } from "../GPRSChargingDataTypes/PositionMethodFailure-Diagnostic.ta.mjs";
import { UnauthorizedLCSClient_Diagnostic, _decode_UnauthorizedLCSClient_Diagnostic, _encode_UnauthorizedLCSClient_Diagnostic } from "../GPRSChargingDataTypes/UnauthorizedLCSClient-Diagnostic.ta.mjs";
// export { UnauthorizedLCSClient_Diagnostic, _enum_for_UnauthorizedLCSClient_Diagnostic, UnauthorizedLCSClient_Diagnostic_noAdditionalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, noAdditionalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList /* IMPORTED_LONG_ENUMERATION_ITEM */, clientNotInMSPrivacyExceptionList /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_callToClientNotSetup /* IMPORTED_LONG_ENUMERATION_ITEM */, callToClientNotSetup /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, privacyOverrideNotApplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements /* IMPORTED_LONG_ENUMERATION_ITEM */, disallowedByLocalRegulatoryRequirements /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedPrivacyClass /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedCallSessionUnrelatedExternalClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedCallSessionRelatedExternalClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnauthorizedLCSClient_Diagnostic, _encode_UnauthorizedLCSClient_Diagnostic } from "../GPRSChargingDataTypes/UnauthorizedLCSClient-Diagnostic.ta.mjs";


/**
 * @summary Diagnostics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Diagnostics  ::=  CHOICE {
 *    gsm0408Cause                                [0] IMPLICIT INTEGER,
 *    gsm0902MapErrorValue                        [1] IMPLICIT INTEGER,
 *    itu-tQ767Cause                              [2] IMPLICIT INTEGER,
 *    networkSpecificCause                        [3] IMPLICIT ManagementExtension,
 *    manufacturerSpecificCause                   [4] IMPLICIT ManagementExtension,
 *    positionMethodFailureCause                  [5] IMPLICIT PositionMethodFailure-Diagnostic,
 *    unauthorizedLCSClientCause                  [6] IMPLICIT UnauthorizedLCSClient-Diagnostic,
 *    diameterResultCodeAndExperimentalResult     [7] IMPLICIT INTEGER}
 * ```
 */
export
type Diagnostics =
    { gsm0408Cause: INTEGER } /* CHOICE_ALT_ROOT */
    | { gsm0902MapErrorValue: INTEGER } /* CHOICE_ALT_ROOT */
    | { itu_tQ767Cause: INTEGER } /* CHOICE_ALT_ROOT */
    | { networkSpecificCause: ManagementExtension } /* CHOICE_ALT_ROOT */
    | { manufacturerSpecificCause: ManagementExtension } /* CHOICE_ALT_ROOT */
    | { positionMethodFailureCause: PositionMethodFailure_Diagnostic } /* CHOICE_ALT_ROOT */
    | { unauthorizedLCSClientCause: UnauthorizedLCSClient_Diagnostic } /* CHOICE_ALT_ROOT */
    | { diameterResultCodeAndExperimentalResult: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Diagnostics: $.ASN1Decoder<Diagnostics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Diagnostics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Diagnostics (el: _Element): Diagnostics {
    if (!_cached_decoder_for_Diagnostics) { _cached_decoder_for_Diagnostics = $._decode_inextensible_choice<Diagnostics>({
    "CONTEXT 0": [ "gsm0408Cause", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "gsm0902MapErrorValue", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "itu_tQ767Cause", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "networkSpecificCause", $._decode_implicit<ManagementExtension>(() => _decode_ManagementExtension) ],
    "CONTEXT 4": [ "manufacturerSpecificCause", $._decode_implicit<ManagementExtension>(() => _decode_ManagementExtension) ],
    "CONTEXT 5": [ "positionMethodFailureCause", $._decode_implicit<PositionMethodFailure_Diagnostic>(() => _decode_PositionMethodFailure_Diagnostic) ],
    "CONTEXT 6": [ "unauthorizedLCSClientCause", $._decode_implicit<UnauthorizedLCSClient_Diagnostic>(() => _decode_UnauthorizedLCSClient_Diagnostic) ],
    "CONTEXT 7": [ "diameterResultCodeAndExperimentalResult", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_Diagnostics(el);
}

let _cached_encoder_for_Diagnostics: $.ASN1Encoder<Diagnostics> | null = null;

/**
 * @summary Encodes a(n) Diagnostics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diagnostics, encoded as an ASN.1 Element.
 */
export
function _encode_Diagnostics (value: Diagnostics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Diagnostics) { _cached_encoder_for_Diagnostics = $._encode_choice<Diagnostics>({
    "gsm0408Cause": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "gsm0902MapErrorValue": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "itu_tQ767Cause": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "networkSpecificCause": $._encode_implicit(_TagClass.context, 3, () => _encode_ManagementExtension, $.BER),
    "manufacturerSpecificCause": $._encode_implicit(_TagClass.context, 4, () => _encode_ManagementExtension, $.BER),
    "positionMethodFailureCause": $._encode_implicit(_TagClass.context, 5, () => _encode_PositionMethodFailure_Diagnostic, $.BER),
    "unauthorizedLCSClientCause": $._encode_implicit(_TagClass.context, 6, () => _encode_UnauthorizedLCSClient_Diagnostic, $.BER),
    "diameterResultCodeAndExperimentalResult": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_Diagnostics(value, elGetter);
}


/* eslint-enable */
