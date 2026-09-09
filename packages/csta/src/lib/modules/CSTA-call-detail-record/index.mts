/**
 * @description
 *
 * ASN.1 module `CSTA-call-detail-record`.
 */
export {
    _enum_for_BillingID,
    BillingID,
    BillingID_normalCharging,
    normalCharging,
    BillingID_reverseCharging,
    reverseCharging,
    BillingID_creditCardCharging,
    creditCardCharging,
    BillingID_callForwarding,
    BillingID_callDeflection,
    callDeflection,
    BillingID_callTransfer,
    callTransfer,
    BillingID_other,
    _decode_BillingID,
    _encode_BillingID,
} from "./BillingID.ta.mjs";
export * from "./CDRCrossRefID.ta.mjs";
export * from "./CDRInfo.ta.mjs";
export * from "./CDRInformationItem.ta.mjs";
export {
    _enum_for_CDRReason,
    CDRReason,
    CDRReason_timeout,
    timeout,
    CDRReason_thresholdReached,
    CDRReason_other,
    _decode_CDRReason,
    _encode_CDRReason,
} from "./CDRReason.ta.mjs";
export {
    _enum_for_CDRTermReason,
    CDRTermReason,
    CDRTermReason_endOfDataDetected,
    endOfDataDetected,
    CDRTermReason_errorDetected,
    errorDetected,
    CDRTermReason_thresholdReached,
    CDRTermReason_other,
    _decode_CDRTermReason,
    _encode_CDRTermReason,
} from "./CDRTermReason.ta.mjs";
export * from "./CDRTimePeriod.ta.mjs";
export * from "./CDRTransferMode.ta.mjs";
export * from "./ChargedDevice.ta.mjs";
export * from "./NodeNumber.ta.mjs";
export {
    _enum_for_ReasonForTerm,
    ReasonForTerm,
    ReasonForTerm_normalClearing,
    normalClearing,
    ReasonForTerm_unsuccessfulCallAttempt,
    unsuccessfulCallAttempt,
    ReasonForTerm_abnormalTermination,
    abnormalTermination,
    ReasonForTerm_callTransferred,
    callTransferred,
    ReasonForTerm_other,
    _decode_ReasonForTerm,
    _encode_ReasonForTerm,
} from "./ReasonForTerm.ta.mjs";
export {
    type SupplServiceInfo,
    SupplServiceInfo_normalCall,
    normalCall,
    SupplServiceInfo_consultationCall,
    consultationCall,
    SupplServiceInfo_transferCall,
    transferCall,
    SupplServiceInfo_callCompletion,
    callCompletion,
    SupplServiceInfo_callForwarding,
    SupplServiceInfo_callDiversion,
    callDiversion,
    SupplServiceInfo_conferencing,
    conferencing,
    SupplServiceInfo_intrusion,
    intrusion,
    SupplServiceInfo_userUserInfo,
    userUserInfo,
    SupplServiceInfo_other,
    _decode_SupplServiceInfo,
    _encode_SupplServiceInfo,
} from "./SupplServiceInfo.ta.mjs";
