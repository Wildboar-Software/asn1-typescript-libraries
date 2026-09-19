/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CauseRadioNetwork, _decode_CauseRadioNetwork, _encode_CauseRadioNetwork } from "../TS33128Payloads/CauseRadioNetwork.ta.mjs";
// export { CauseRadioNetwork, _enum_for_CauseRadioNetwork, CauseRadioNetwork_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, CauseRadioNetwork_txnrelocoverallExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, txnrelocoverallExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_successfulHandover /* IMPORTED_LONG_ENUMERATION_ITEM */, successfulHandover /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_releaseDueToNGRANGeneratedReason /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseDueToNGRANGeneratedReason /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_releaseDueTo5gcGeneratedReason /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseDueTo5gcGeneratedReason /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_handoverCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, handoverCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_partialHandover /* IMPORTED_LONG_ENUMERATION_ITEM */, partialHandover /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_hoFailureInTarget5GCNGRANNodeOrTargetSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, hoFailureInTarget5GCNGRANNodeOrTargetSystem /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_hoTargetNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, hoTargetNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_tNGRelocOverallExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, tNGRelocOverallExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_tNGRelocPrepExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, tNGRelocPrepExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_cellNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, cellNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_unknownTargetID /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownTargetID /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_noRadioResourcesAvailableInTargetCell /* IMPORTED_LONG_ENUMERATION_ITEM */, noRadioResourcesAvailableInTargetCell /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_unknownLocalUENGAPID /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownLocalUENGAPID /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_inconsistentRemoteUENGAPID /* IMPORTED_LONG_ENUMERATION_ITEM */, inconsistentRemoteUENGAPID /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_handoverDesirableForRadioReason /* IMPORTED_LONG_ENUMERATION_ITEM */, handoverDesirableForRadioReason /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_timeCriticalHandover /* IMPORTED_LONG_ENUMERATION_ITEM */, timeCriticalHandover /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_resourceOptimisationHandover /* IMPORTED_LONG_ENUMERATION_ITEM */, resourceOptimisationHandover /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_reduceLoadInServingCell /* IMPORTED_LONG_ENUMERATION_ITEM */, reduceLoadInServingCell /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_userInactivity /* IMPORTED_LONG_ENUMERATION_ITEM */, userInactivity /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_radioConnectionWithUELost /* IMPORTED_LONG_ENUMERATION_ITEM */, radioConnectionWithUELost /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_radioResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, radioResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_invalidQoSCombination /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidQoSCombination /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_failureInRadioInterfaceProcedure /* IMPORTED_LONG_ENUMERATION_ITEM */, failureInRadioInterfaceProcedure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_interactionWithOtherProcedure /* IMPORTED_LONG_ENUMERATION_ITEM */, interactionWithOtherProcedure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_unknownPDUSessionID /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownPDUSessionID /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_multiplePDUSessionIDInstances /* IMPORTED_LONG_ENUMERATION_ITEM */, multiplePDUSessionIDInstances /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_multipleQoSFlowIDInstances /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQoSFlowIDInstances /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_encryptionAndOrIntegrityProtectionAlgorithmsNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, encryptionAndOrIntegrityProtectionAlgorithmsNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_nGIntraSystemHandoverTriggered /* IMPORTED_LONG_ENUMERATION_ITEM */, nGIntraSystemHandoverTriggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_nGInterSystemHandoverTriggered /* IMPORTED_LONG_ENUMERATION_ITEM */, nGInterSystemHandoverTriggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_xNHandoverTriggered /* IMPORTED_LONG_ENUMERATION_ITEM */, xNHandoverTriggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_notSupported5QIValue /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupported5QIValue /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_uEContextTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, uEContextTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_iMSVoiceeEPSFallbackOrRATFallbackTriggered /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSVoiceeEPSFallbackOrRATFallbackTriggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_uPIntegrityProtectioNotPossible /* IMPORTED_LONG_ENUMERATION_ITEM */, uPIntegrityProtectioNotPossible /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_uPConfidentialityProtectionNotPossible /* IMPORTED_LONG_ENUMERATION_ITEM */, uPConfidentialityProtectionNotPossible /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_sliceNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, sliceNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_uEInRRCInactiveStateNotReachable /* IMPORTED_LONG_ENUMERATION_ITEM */, uEInRRCInactiveStateNotReachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_redirection /* IMPORTED_LONG_ENUMERATION_ITEM */, redirection /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_resourcesNotAvailableForTheSlice /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailableForTheSlice /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_uEMaxIntegrityProtectedDataRateReason /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMaxIntegrityProtectedDataRateReason /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_releaseDueToCNDetectedMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseDueToCNDetectedMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_n26InterfaceNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, n26InterfaceNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_releaseDueToPreemption /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseDueToPreemption /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_multipleLocationReportingReferenceIDInstances /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleLocationReportingReferenceIDInstances /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_rSNNotAvailableForTheUP /* IMPORTED_LONG_ENUMERATION_ITEM */, rSNNotAvailableForTheUP /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_nPMAccessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, nPMAccessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_cAGOnlyAccessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, cAGOnlyAccessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseRadioNetwork_insufficientUECapabilities /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientUECapabilities /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CauseRadioNetwork, _encode_CauseRadioNetwork } from "../TS33128Payloads/CauseRadioNetwork.ta.mjs";
import { CauseTransport, _decode_CauseTransport, _encode_CauseTransport } from "../TS33128Payloads/CauseTransport.ta.mjs";
// export { CauseTransport, _enum_for_CauseTransport, CauseTransport_transportResourceUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, transportResourceUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseTransport_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CauseTransport, _encode_CauseTransport } from "../TS33128Payloads/CauseTransport.ta.mjs";
import { CauseNas, _decode_CauseNas, _encode_CauseNas } from "../TS33128Payloads/CauseNas.ta.mjs";
// export { CauseNas, _enum_for_CauseNas, CauseNas_normalRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, normalRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseNas_authenticationFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseNas_deregister /* IMPORTED_LONG_ENUMERATION_ITEM */, deregister /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseNas_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CauseNas, _encode_CauseNas } from "../TS33128Payloads/CauseNas.ta.mjs";
import { CauseProtocol, _decode_CauseProtocol, _encode_CauseProtocol } from "../TS33128Payloads/CauseProtocol.ta.mjs";
// export { CauseProtocol, _enum_for_CauseProtocol, CauseProtocol_transferSyntaxError /* IMPORTED_LONG_ENUMERATION_ITEM */, transferSyntaxError /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseProtocol_abstractSyntaxError_reject /* IMPORTED_LONG_ENUMERATION_ITEM */, abstractSyntaxError_reject /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseProtocol_abstractSyntaxErrorIgnoreAndNotify /* IMPORTED_LONG_ENUMERATION_ITEM */, abstractSyntaxErrorIgnoreAndNotify /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseProtocol_messageNotCompatibleWithReceiverState /* IMPORTED_LONG_ENUMERATION_ITEM */, messageNotCompatibleWithReceiverState /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseProtocol_semanticError /* IMPORTED_LONG_ENUMERATION_ITEM */, semanticError /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, abstractSyntaxErrorFalselyConstructedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseProtocol_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CauseProtocol, _encode_CauseProtocol } from "../TS33128Payloads/CauseProtocol.ta.mjs";
import { CauseMisc, _decode_CauseMisc, _encode_CauseMisc } from "../TS33128Payloads/CauseMisc.ta.mjs";
// export { CauseMisc, _enum_for_CauseMisc, CauseMisc_controlProcessingOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, controlProcessingOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseMisc_notEnoughUserPlaneProcessingResources /* IMPORTED_LONG_ENUMERATION_ITEM */, notEnoughUserPlaneProcessingResources /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseMisc_hardwareFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, hardwareFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseMisc_oMIntervention /* IMPORTED_LONG_ENUMERATION_ITEM */, oMIntervention /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseMisc_unknownPLMNOrSNPN /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownPLMNOrSNPN /* IMPORTED_SHORT_ENUMERATION_ITEM */, CauseMisc_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CauseMisc, _encode_CauseMisc } from "../TS33128Payloads/CauseMisc.ta.mjs";


/**
 * @summary HandoverCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverCause  ::=  CHOICE
 * {
 *     radioNetwork    [1] CauseRadioNetwork,
 *     transport       [2] CauseTransport,
 *     nas             [3] CauseNas,
 *     protocol        [4] CauseProtocol,
 *     misc            [5] CauseMisc
 * }
 * ```
 */
export
type HandoverCause =
    { radioNetwork: CauseRadioNetwork } /* CHOICE_ALT_ROOT */
    | { transport: CauseTransport } /* CHOICE_ALT_ROOT */
    | { nas: CauseNas } /* CHOICE_ALT_ROOT */
    | { protocol: CauseProtocol } /* CHOICE_ALT_ROOT */
    | { misc: CauseMisc } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HandoverCause: $.ASN1Decoder<HandoverCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandoverCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandoverCause (el: _Element): HandoverCause {
    if (!_cached_decoder_for_HandoverCause) { _cached_decoder_for_HandoverCause = $._decode_inextensible_choice<HandoverCause>({
    "CONTEXT 1": [ "radioNetwork", $._decode_implicit<CauseRadioNetwork>(() => _decode_CauseRadioNetwork) ],
    "CONTEXT 2": [ "transport", $._decode_implicit<CauseTransport>(() => _decode_CauseTransport) ],
    "CONTEXT 3": [ "nas", $._decode_implicit<CauseNas>(() => _decode_CauseNas) ],
    "CONTEXT 4": [ "protocol", $._decode_implicit<CauseProtocol>(() => _decode_CauseProtocol) ],
    "CONTEXT 5": [ "misc", $._decode_implicit<CauseMisc>(() => _decode_CauseMisc) ]
}); }
    return _cached_decoder_for_HandoverCause(el);
}

let _cached_encoder_for_HandoverCause: $.ASN1Encoder<HandoverCause> | null = null;

/**
 * @summary Encodes a(n) HandoverCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandoverCause, encoded as an ASN.1 Element.
 */
export
function _encode_HandoverCause (value: HandoverCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandoverCause) { _cached_encoder_for_HandoverCause = $._encode_choice<HandoverCause>({
    "radioNetwork": $._encode_implicit(_TagClass.context, 1, () => _encode_CauseRadioNetwork, $.BER),
    "transport": $._encode_implicit(_TagClass.context, 2, () => _encode_CauseTransport, $.BER),
    "nas": $._encode_implicit(_TagClass.context, 3, () => _encode_CauseNas, $.BER),
    "protocol": $._encode_implicit(_TagClass.context, 4, () => _encode_CauseProtocol, $.BER),
    "misc": $._encode_implicit(_TagClass.context, 5, () => _encode_CauseMisc, $.BER),
}, $.BER); }
    return _cached_encoder_for_HandoverCause(value, elGetter);
}


/* eslint-enable */
