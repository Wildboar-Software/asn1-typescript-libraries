/**
 * @description
 *
 * STANAG 4406 military heading extensions.
 */
export * from "./Acp127MessageIdentifier.ta.mjs";
export * from "./AddressListDesignator-type.ta.mjs";
export * from "./AddressListDesignator.ta.mjs";
export * from "./AddressListDesignatorSeq.ta.mjs";
export * from "./AddressListRequest.ta.mjs";
export * from "./BodyPartSecurityLabel.ta.mjs";
export * from "./BodyPartSequenceNumber.ta.mjs";
export * from "./CodressMessage.ta.mjs";
export type {
    CopyPrecedence,
} from "./CopyPrecedence.ta.mjs";
export {
    CopyPrecedence_deferred,
    CopyPrecedence_routine,
    CopyPrecedence_priority,
    CopyPrecedence_immediate,
    CopyPrecedence_flash,
    CopyPrecedence_override,
    CopyPrecedence_ecp,
    CopyPrecedence_critic,
    CopyPrecedence_override_2,
    _decode_CopyPrecedence,
    _encode_CopyPrecedence,
} from "./CopyPrecedence.ta.mjs";
export * from "./DistributionCodes.ta.mjs";
export * from "./DistributionExtensionField.ta.mjs";
export * from "./ExemptedAddress.ta.mjs";
export * from "./ExemptedAddressSeq.ta.mjs";
export * from "./ExtendedAuthorisationInfo.ta.mjs";
export * from "./HandlingInstructions.ta.mjs";
export type {
    MMHSPrecedence,
} from "./MMHSPrecedence.ta.mjs";
export {
    MMHSPrecedence_deferred,
    MMHSPrecedence_routine,
    MMHSPrecedence_priority,
    MMHSPrecedence_immediate,
    MMHSPrecedence_flash,
    MMHSPrecedence_override,
    MMHSPrecedence_ecp,
    MMHSPrecedence_critic,
    MMHSPrecedence_override_2,
    _decode_MMHSPrecedence,
    _encode_MMHSPrecedence,
} from "./MMHSPrecedence.ta.mjs";
export * from "./MessageIdentifier.ta.mjs";
export * from "./MessageInstructions.ta.mjs";
export * from "./MessageType.ta.mjs";
export * from "./MilitaryString.ta.mjs";
export * from "./OriginatorPlad.ta.mjs";
export * from "./OriginatorReference.ta.mjs";
export * from "./OtherRecipientDesignator-type.ta.mjs";
export * from "./OtherRecipientDesignator.ta.mjs";
export * from "./OtherRecipientDesignatorSeq.ta.mjs";
export * from "./PilotInformation.ta.mjs";
export * from "./PilotInformationSeq.ta.mjs";
export type {
    PrimaryPrecedence,
} from "./PrimaryPrecedence.ta.mjs";
export {
    PrimaryPrecedence_deferred,
    PrimaryPrecedence_routine,
    PrimaryPrecedence_priority,
    PrimaryPrecedence_immediate,
    PrimaryPrecedence_flash,
    PrimaryPrecedence_override,
    PrimaryPrecedence_ecp,
    PrimaryPrecedence_critic,
    PrimaryPrecedence_override_2,
    _decode_PrimaryPrecedence,
    _encode_PrimaryPrecedence,
} from "./PrimaryPrecedence.ta.mjs";
export * from "./PriorityLevelQualifier.ta.mjs";
export * from "./SecurityInformationLabels.ta.mjs";
export * from "./Sic.ta.mjs";
export * from "./TypeMessage.ta.mjs";
