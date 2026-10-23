/**
 * @description
 *
 * Offline charging records for the Multimedia Messaging Service. An MMS
 * Relay/Server produces one CDR for each chargeable MM transaction on MM1,
 * MM4, or MM7. Charging is event based, and each chargeable event
 * produces one CDR. The records are visible in the CDR files the
 * Relay/Server sends to the billing domain on Bm.
 *
 * The records cover submission, retrieval, forwarding, delivery reports,
 * read-reply reports, deletion, MMBox upload, store, view, and delete, and
 * VASP transactions. Online charging of submission and retrieval uses
 * Debit / Reserve Units on Ro (clauses 5.3 and 6.2). Converged-charging
 * CHF CDR contents are specified in clause 6.1.7. The formal ASN.1 of
 * these CDR parameters is specified in TS 32.298.
 *
 * Field categories in the record tables follow TS 32.240 clause 5.4, as
 * applied by clause 6.1.0. M is always present. C is present when the
 * field's conditions are met. OM and OC are included only when the
 * operator provisions them; OC also requires those conditions.
 *
 * Assignments that are identical in other charging modules are re-exported
 * from `shared`.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.1, 5.2, and 6.1.
 */
export * from "./AccessCorrelation.ta.mjs";
export * from "./AttributesList.ta.mjs";
export * from "./ChargeInformation.ta.mjs";
export * from "./ChargeType.ta.mjs";
export * from "./ChargedParty.ta.mjs";
export * from "./CircuitSwitchedAccess.ta.mjs";
export * from "./ContentType.ta.mjs";
export * from "./DMI-EXTENSION.oca.mjs";
export * from "./DataVolume.ta.mjs";
export * from "./DeltaSeconds.ta.mjs";
export * from "./IPAddress.ta.mjs";
export * from "./IPBinV6AddressWithOrWithoutPrefixLength.ta.mjs";
export * from "./IPBinV6AddressWithPrefixLength.ta.mjs";
export * from "./IPBinaryAddress.ta.mjs";
export * from "./IPTextRepresentedAddress.ta.mjs";
export * from "./MM7CRecord.ta.mjs";
export * from "./MM7DRRqRecord.ta.mjs";
export * from "./MM7DRRsRecord.ta.mjs";
export * from "./MM7DRqRecord.ta.mjs";
export * from "./MM7DRsRecord.ta.mjs";
export * from "./MM7RRecord.ta.mjs";
export * from "./MM7RRqRecord.ta.mjs";
export * from "./MM7RRsRecord.ta.mjs";
export * from "./MM7SRecord.ta.mjs";
export * from "./MMBoxStorageInformation.ta.mjs";
export * from "./MMBx1DRecord.ta.mjs";
export * from "./MMBx1SRecord.ta.mjs";
export * from "./MMBx1URecord.ta.mjs";
export * from "./MMBx1VRecord.ta.mjs";
export * from "./MMComponentType.ta.mjs";
export * from "./MMFRecord.ta.mjs";
export * from "./MMO1DRecord.ta.mjs";
export * from "./MMO1RRecord.ta.mjs";
export * from "./MMO1SRecord.ta.mjs";
export * from "./MMO4DRecord.ta.mjs";
export * from "./MMO4FRqRecord.ta.mjs";
export * from "./MMO4FRsRecord.ta.mjs";
export * from "./MMO4RRecord.ta.mjs";
export * from "./MMOMDRecord.ta.mjs";
export * from "./MMR1ARecord.ta.mjs";
export * from "./MMR1NRqRecord.ta.mjs";
export * from "./MMR1NRsRecord.ta.mjs";
export * from "./MMR1RRRecord.ta.mjs";
export * from "./MMR1RtRecord.ta.mjs";
export * from "./MMR4DRqRecord.ta.mjs";
export * from "./MMR4DRsRecord.ta.mjs";
export * from "./MMR4FRecord.ta.mjs";
export * from "./MMR4RRqRecord.ta.mjs";
export * from "./MMR4RRsRecord.ta.mjs";
export * from "./MMRMDRecord.ta.mjs";
export * from "./MMSAgentAddress.ta.mjs";
export * from "./MMSAgentAddressData.ta.mjs";
export * from "./MMSAgentAddresses.ta.mjs";
export * from "./MMSRSAddress.ta.mjs";
export * from "./MMSRecipientType.ta.mjs";
export * from "./MMSRecordType.ta.mjs";
export {
    _enum_for_MMState,
    type MMState,
    MMState_draft,
    draft,
    MMState_sent,
    sent,
    MMState_new_,
    new_,
    MMState_retrieved,
    MMState_forwarded,
    _decode_MMState,
    _encode_MMState,
} from "./MMState.ta.mjs";
export {
    _enum_for_MMStatusCodeType,
    type MMStatusCodeType,
    MMStatusCodeType_retrieved,
    MMStatusCodeType_forwarded,
    MMStatusCodeType_expired,
    expired,
    MMStatusCodeType_rejected,
    rejected,
    MMStatusCodeType_deferred,
    deferred,
    MMStatusCodeType_unrecognised,
    unrecognised,
    MMStatusCodeType_read,
    read,
    MMStatusCodeType_deletedWithoutBeingRead,
    deletedWithoutBeingRead,
    _decode_MMStatusCodeType,
    _encode_MMStatusCodeType,
} from "./MMStatusCodeType.ta.mjs";
export * from "./MSCFInformation.ta.mjs";
export * from "./ManagementExtension.ta.mjs";
export * from "./ManagementExtensionSet.osa.mjs";
export * from "./MediaComponent.ta.mjs";
export * from "./MediaComponents.ta.mjs";
export * from "./MessageClass.ta.mjs";
export * from "./MessageSelection.ta.mjs";
export * from "./PacketSwitchedAccess.ta.mjs";
export * from "./PriorityType.ta.mjs";
export * from "./Quotas.ta.mjs";
export * from "./RecordType.ta.mjs";
export * from "./RequestStatusCodeType.ta.mjs";
export * from "./RouteingAddress.ta.mjs";
export * from "./RouteingAddressList.ta.mjs";
export * from "./StatusTextType.ta.mjs";
export * from "./StoreStatus.ta.mjs";
export * from "./SubjectComponent.ta.mjs";
export * from "./Totals.ta.mjs";
export * from "./WaitTime.ta.mjs";
