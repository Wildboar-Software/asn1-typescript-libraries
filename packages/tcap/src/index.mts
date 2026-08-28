/**
 * Transaction Capabilities Application Part (TCAP) formats
 * and encodings from ITU-T Rec. Q.773 (06/97)
 * [§1](https://www.itu.int/rec/T-REC-Q.773-199706-I).
 *
 * A TCAP message is one constructor information element: a
 * Transaction Portion (message type and transaction IDs), an
 * optional Dialogue Portion (application context and user
 * information), and an optional Component Portion (ROSE-based
 * operation APDUs). Encoding is X.209 BER with three extra
 * constraints (§4.1.1): length less than 128 octets uses the
 * short form; long-form length uses the fewest octets; OCTET
 * STRING and BIT STRING are primitive. Unassigned
 * Application-wide tags are reserved (§4.1.2.2.1). In SS No. 7
 * connectionless use, the total message length is limited by
 * the network (Figure 8 note).
 *
 * `TCMessage` is parametrized by the invokable and returnable
 * operation sets (Annex A); encodings match the clause 3
 * abstract syntax. Structured dialogue APDUs use
 * `dialogue-as-id`; unstructured use `uniDialogue-as-id`.
 *
 * TCAP-Tools, TCAP-Examples, and TC-Notation-Extensions are
 * from Q.775 / Q.680–Q.683; Q.773 does not define them.
 *
 * @module
 */
export {
    type AARE_apdu_protocol_version,
    AARE_apdu_protocol_version_version1,
    _decode_AARE_apdu_protocol_version,
    _encode_AARE_apdu_protocol_version,
} from "./lib/modules/DialoguePDUs/AARE-apdu-protocol-version.ta.mjs";
export * from "./lib/modules/DialoguePDUs/AARE-apdu.ta.mjs";
export {
    type AARQ_apdu_protocol_version,
    AARQ_apdu_protocol_version_version1,
    _decode_AARQ_apdu_protocol_version,
    _encode_AARQ_apdu_protocol_version,
} from "./lib/modules/DialoguePDUs/AARQ-apdu-protocol-version.ta.mjs";
export * from "./lib/modules/DialoguePDUs/AARQ-apdu.ta.mjs";
export * from "./lib/modules/DialoguePDUs/ABRT-apdu.ta.mjs";
export * from "./lib/modules/DialoguePDUs/ABRT-source.ta.mjs";
export * from "./lib/modules/DialoguePDUs/Associate-result.ta.mjs";
export {
    type Associate_source_diagnostic_dialogue_service_provider,
    Associate_source_diagnostic_dialogue_service_provider_null_,
    Associate_source_diagnostic_dialogue_service_provider_no_reason_given,
    Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion,
    _decode_Associate_source_diagnostic_dialogue_service_provider,
    _encode_Associate_source_diagnostic_dialogue_service_provider,
} from "./lib/modules/DialoguePDUs/Associate-source-diagnostic-dialogue-service-provider.ta.mjs";
export {
    type Associate_source_diagnostic_dialogue_service_user,
    Associate_source_diagnostic_dialogue_service_user_null_,
    Associate_source_diagnostic_dialogue_service_user_no_reason_given,
    Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported,
    _decode_Associate_source_diagnostic_dialogue_service_user,
    _encode_Associate_source_diagnostic_dialogue_service_user,
} from "./lib/modules/DialoguePDUs/Associate-source-diagnostic-dialogue-service-user.ta.mjs";
export * from "./lib/modules/DialoguePDUs/Associate-source-diagnostic.ta.mjs";
export * from "./lib/modules/DialoguePDUs/dialogue-as-id.va.mjs";
export * from "./lib/modules/DialoguePDUs/DialoguePDU.ta.mjs";
export {
    type Release_request_reason,
    Release_request_reason_normal,
    Release_request_reason_urgent,
    Release_request_reason_user_defined,
    _decode_Release_request_reason,
    _encode_Release_request_reason,
} from "./lib/modules/DialoguePDUs/Release-request-reason.ta.mjs";
export {
    type Release_response_reason,
    Release_response_reason_normal,
    Release_response_reason_not_finished,
    Release_response_reason_user_defined,
    _decode_Release_response_reason,
    _encode_Release_response_reason,
} from "./lib/modules/DialoguePDUs/Release-response-reason.ta.mjs";
export * from "./lib/modules/DialoguePDUs/RLRE-apdu.ta.mjs";
export * from "./lib/modules/DialoguePDUs/RLRQ-apdu.ta.mjs";
export * from "./lib/modules/TCAP-Examples/BasicServiceIndicator.ta.mjs";
export * from "./lib/modules/TCAP-Examples/calledBarred.oa.mjs";
export * from "./lib/modules/TCAP-Examples/callingPartyAddressNotAvailable.oa.mjs";
export * from "./lib/modules/TCAP-Examples/CallingPartyAddress.ta.mjs";
export * from "./lib/modules/TCAP-Examples/getCallingPartyAddress.oa.mjs";
export * from "./lib/modules/TCAP-Examples/invalidCalledNumber.oa.mjs";
export * from "./lib/modules/TCAP-Examples/IsdnNumber.ta.mjs";
export * from "./lib/modules/TCAP-Examples/processingFailure.oa.mjs";
export * from "./lib/modules/TCAP-Examples/provideRoutingInformation.oa.mjs";
export * from "./lib/modules/TCAP-Examples/RequestArgument.ta.mjs";
export * from "./lib/modules/TCAP-Examples/RoutingInformation.ta.mjs";
export * from "./lib/modules/TCAP-Examples/subscriberNotReachable.oa.mjs";
export * from "./lib/modules/TCAP-Examples/TelephonyString.ta.mjs";
export * from "./lib/modules/TCAP-Examples/TypeOfAddress.ta.mjs";
export * from "./lib/modules/TCAPMessages/Abort-reason.ta.mjs";
export * from "./lib/modules/TCAPMessages/Abort.ta.mjs";
export * from "./lib/modules/TCAPMessages/Begin.ta.mjs";
export * from "./lib/modules/TCAPMessages/ComponentPortion.ta.mjs";
export * from "./lib/modules/TCAPMessages/Component.ta.mjs";
export * from "./lib/modules/TCAPMessages/Continue.ta.mjs";
export * from "./lib/modules/TCAPMessages/DestTransactionID.ta.mjs";
export * from "./lib/modules/TCAPMessages/DialoguePortion.ta.mjs";
export * from "./lib/modules/TCAPMessages/End.ta.mjs";
export * from "./lib/modules/TCAPMessages/OrigTransactionID.ta.mjs";
export * from "./lib/modules/TCAPMessages/P-AbortCause.ta.mjs";
export * from "./lib/modules/TCAPMessages/TCInvokeIdSet.ta.mjs";
export * from "./lib/modules/TCAPMessages/TCMessage.ta.mjs";
export * from "./lib/modules/TCAPMessages/Unidirectional.ta.mjs";
export * from "./lib/modules/TCAP-Tools/cancelFailed.oa.mjs";
export * from "./lib/modules/TCAP-Tools/cancelFailed-ParameterType.ta.mjs";
export * from "./lib/modules/TCAP-Tools/cancelled.oa.mjs";
export * from "./lib/modules/TCAP-Tools/cancel.oa.mjs";
export * from "./lib/modules/TCAP-Tools/CancelProblem.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/AllPackagesAS.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";
export * from "./lib/modules/TC-Notation-Extensions/ConnectionAS.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
export * from "./lib/modules/TC-Notation-Extensions/DialogueMode.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/TCConsumerAS.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/TCSingleAS.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/TCSupplierAS.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/Termination.ta.mjs";
export * from "./lib/modules/TC-Notation-Extensions/uniDialogue-abstract-syntax.oa.mjs";
export * from "./lib/modules/UnidialoguePDUs/AUDT-apdu-protocol-version.ta.mjs";
export * from "./lib/modules/UnidialoguePDUs/AUDT-apdu.ta.mjs";
export * from "./lib/modules/UnidialoguePDUs/uniDialogue-as-id.va.mjs";
export * from "./lib/modules/UnidialoguePDUs/UniDialoguePDU.ta.mjs";
