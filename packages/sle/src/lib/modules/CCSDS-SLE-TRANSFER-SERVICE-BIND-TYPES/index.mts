/**
 * @description
 *
 * ASN.1 module `CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES` from the CCSDS Space Link Extension
 * transfer services. The module is declared with IMPLICIT TAGS.
 *
 * SLE-PDUs that establish, release, or abort an association, with the
 * identifiers and diagnostics those PDUs carry. CCSDS 911.1-B-5, sections 3.2,
 * 3.3, 3.11, and annex A2.2.
 *
 * `{iso identified-organization(3) standards-producing-organization(112) ccsds(4) space-link-extension(3) sle-transfer-services(1) modules(1) common-modules(99) version-four(4) asn1-bind-types(2)}`
 */
export * from "./ApplicationIdentifier.ta.mjs";
export * from "./AuthorityIdentifier.ta.mjs";
export {
    BindDiagnostic_accessDenied,
    BindDiagnostic_serviceTypeNotSupported,
    serviceTypeNotSupported,
    BindDiagnostic_versionNotSupported,
    BindDiagnostic_noSuchServiceInstance,
    noSuchServiceInstance,
    BindDiagnostic_alreadyBound,
    alreadyBound,
    BindDiagnostic_siNotAccessibleToThisInitiator,
    siNotAccessibleToThisInitiator,
    BindDiagnostic_inconsistentServiceType,
    inconsistentServiceType,
    BindDiagnostic_invalidTime,
    invalidTime,
    BindDiagnostic_outOfService,
    outOfService,
    BindDiagnostic_otherReason,
    _decode_BindDiagnostic,
    _encode_BindDiagnostic,
} from "./BindDiagnostic.ta.mjs";
export type {
    BindDiagnostic,
} from "./BindDiagnostic.ta.mjs";
export * from "./IdentifierString.ta.mjs";
export * from "./LogicalPortName.ta.mjs";
export {
    PeerAbortDiagnostic_accessDenied,
    PeerAbortDiagnostic_unexpectedResponderId,
    unexpectedResponderId,
    PeerAbortDiagnostic_operationalRequirement,
    operationalRequirement,
    PeerAbortDiagnostic_protocolError,
    protocolError,
    PeerAbortDiagnostic_communicationsFailure,
    communicationsFailure,
    PeerAbortDiagnostic_encodingError,
    encodingError,
    PeerAbortDiagnostic_returnTimeout,
    returnTimeout,
    PeerAbortDiagnostic_endOfServiceProvisionPeriod,
    endOfServiceProvisionPeriod,
    PeerAbortDiagnostic_unsolicitedInvokeId,
    unsolicitedInvokeId,
    PeerAbortDiagnostic_otherReason,
    _decode_PeerAbortDiagnostic,
    _encode_PeerAbortDiagnostic,
} from "./PeerAbortDiagnostic.ta.mjs";
export type {
    PeerAbortDiagnostic,
} from "./PeerAbortDiagnostic.ta.mjs";
export * from "./PortId.ta.mjs";
export * from "./SleBindInvocation.ta.mjs";
export * from "./SleBindReturn-result.ta.mjs";
export * from "./SleBindReturn.ta.mjs";
export * from "./SlePeerAbort.ta.mjs";
export * from "./SleUnbindInvocation.ta.mjs";
export * from "./SleUnbindReturn-result.ta.mjs";
export * from "./SleUnbindReturn.ta.mjs";
export {
    UnbindReason_end,
    end,
    UnbindReason_suspend,
    suspend,
    UnbindReason_versionNotSupported,
    UnbindReason_other,
    other,
    _decode_UnbindReason,
    _encode_UnbindReason,
} from "./UnbindReason.ta.mjs";
export type {
    UnbindReason,
} from "./UnbindReason.ta.mjs";
export * from "./VersionNumber.ta.mjs";
