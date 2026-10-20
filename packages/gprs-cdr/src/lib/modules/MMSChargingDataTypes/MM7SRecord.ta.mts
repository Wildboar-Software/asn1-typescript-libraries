/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
// export { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
// export { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
// export { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
// export { MessageClass, _enum_for_MessageClass, MessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_information_service /* IMPORTED_LONG_ENUMERATION_ITEM */, information_service /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MessageClass, _encode_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { ChargeInformation, _decode_ChargeInformation, _encode_ChargeInformation } from "../MMSChargingDataTypes/ChargeInformation.ta.mjs";
// export { ChargeInformation, _decode_ChargeInformation, _encode_ChargeInformation } from "../MMSChargingDataTypes/ChargeInformation.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
// export { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
// export { PriorityType, _enum_for_PriorityType, PriorityType_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityType_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PriorityType, _encode_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
// export { RequestStatusCodeType, RequestStatusCodeType_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_serviceDenied /* IMPORTED_LONG_NAMED_INTEGER */, serviceDenied /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_messageFormatCorrupt /* IMPORTED_LONG_NAMED_INTEGER */, messageFormatCorrupt /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_sendingAddressUnresolved /* IMPORTED_LONG_NAMED_INTEGER */, sendingAddressUnresolved /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_messageNotFound /* IMPORTED_LONG_NAMED_INTEGER */, messageNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_networkProblem /* IMPORTED_LONG_NAMED_INTEGER */, networkProblem /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_contentNotAccepted /* IMPORTED_LONG_NAMED_INTEGER */, contentNotAccepted /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_unsupportedMessage /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMessage /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
import { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";
// export { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";


/**
 * @summary MM7SRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM7SRecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    originatorMmsRSAddress         [1] IMPLICIT MMSRSAddress,
 *    linkedID                       [2] IMPLICIT OCTET STRING OPTIONAL,
 *    vaspID                         [3] IMPLICIT OCTET STRING,
 *    vasID                          [4] IMPLICIT OCTET STRING,
 *    messageID                      [5] IMPLICIT OCTET STRING,
 *    originatorAddress              [6] IMPLICIT MMSAgentAddress,
 *    recipientAddresses             [7] IMPLICIT SET  OF
 *       MMSAgentAddress,
 *    serviceCode                    [8] IMPLICIT OCTET STRING OPTIONAL,
 *    contentType                    [9] IMPLICIT OCTET STRING,
 *    mmComponentType                [10] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize                    [11] IMPLICIT INTEGER,
 *    messageClass                   [12] IMPLICIT MessageClass OPTIONAL,
 *    chargeInformation              [13] IMPLICIT ChargeInformation OPTIONAL,
 *    submissionTime                 [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfExpiry                   [15] WaitTime OPTIONAL,
 *    earliestTimeOfDelivery         [16] WaitTime OPTIONAL,
 *    deliveryReportRequested        [17] IMPLICIT BOOLEAN OPTIONAL,
 *    readReplyRequested             [18] IMPLICIT BOOLEAN OPTIONAL,
 *    replyCharging                  [19] IMPLICIT BOOLEAN OPTIONAL,
 *    replyDeadline                  [20] WaitTime OPTIONAL,
 *    replyChargingSize              [21] IMPLICIT INTEGER OPTIONAL,
 *    priority                       [22] IMPLICIT PriorityType OPTIONAL,
 *    messageDistributionIndicator   [23] IMPLICIT BOOLEAN OPTIONAL,
 *    requestStatusCode              [24] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText                     [25] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp                [26] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber            [27] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions               [28] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    mscfInformation                [29] IMPLICIT MSCFInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MM7SRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `originatorMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: MMSRSAddress;
    /**
     * @summary `linkedID`.
     * @public
     * @readonly
     */
    readonly linkedID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `vaspID`.
     * @public
     * @readonly
     */
    readonly vaspID: OCTET_STRING;
    /**
     * @summary `vasID`.
     * @public
     * @readonly
     */
    readonly vasID: OCTET_STRING;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `originatorAddress`.
     * @public
     * @readonly
     */
    readonly originatorAddress: MMSAgentAddress;
    /**
     * @summary `recipientAddresses`.
     * @public
     * @readonly
     */
    readonly recipientAddresses: MMSAgentAddress[];
    /**
     * @summary `serviceCode`.
     * @public
     * @readonly
     */
    readonly serviceCode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `contentType`.
     * @public
     * @readonly
     */
    readonly contentType: OCTET_STRING;
    /**
     * @summary `mmComponentType`.
     * @public
     * @readonly
     */
    readonly mmComponentType: OPTIONAL<MMComponentType>;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: INTEGER;
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `chargeInformation`.
     * @public
     * @readonly
     */
    readonly chargeInformation: OPTIONAL<ChargeInformation>;
    /**
     * @summary `submissionTime`.
     * @public
     * @readonly
     */
    readonly submissionTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfExpiry`.
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
    /**
     * @summary `earliestTimeOfDelivery`.
     * @public
     * @readonly
     */
    readonly earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    /**
     * @summary `deliveryReportRequested`.
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `readReplyRequested`.
     * @public
     * @readonly
     */
    readonly readReplyRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyCharging`.
     * @public
     * @readonly
     */
    readonly replyCharging: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyDeadline`.
     * @public
     * @readonly
     */
    readonly replyDeadline: OPTIONAL<WaitTime>;
    /**
     * @summary `replyChargingSize`.
     * @public
     * @readonly
     */
    readonly replyChargingSize: OPTIONAL<INTEGER>;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `messageDistributionIndicator`.
     * @public
     * @readonly
     */
    readonly messageDistributionIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `requestStatusCode`.
     * @public
     * @readonly
     */
    readonly requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    /**
     * @summary `statusText`.
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordTimeStamp`.
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OCTET_STRING;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `mscfInformation`.
     * @public
     * @readonly
     */
    readonly mscfInformation: OPTIONAL<MSCFInformation>;

    constructor (
        recordType: RecordType,
        originatorMmsRSAddress: MMSRSAddress,
        linkedID: OPTIONAL<OCTET_STRING>,
        vaspID: OCTET_STRING,
        vasID: OCTET_STRING,
        messageID: OCTET_STRING,
        originatorAddress: MMSAgentAddress,
        recipientAddresses: MMSAgentAddress[],
        serviceCode: OPTIONAL<OCTET_STRING>,
        contentType: OCTET_STRING,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        messageClass: OPTIONAL<MessageClass>,
        chargeInformation: OPTIONAL<ChargeInformation>,
        submissionTime: OPTIONAL<OCTET_STRING>,
        timeOfExpiry: OPTIONAL<WaitTime>,
        earliestTimeOfDelivery: OPTIONAL<WaitTime>,
        deliveryReportRequested: OPTIONAL<BOOLEAN>,
        readReplyRequested: OPTIONAL<BOOLEAN>,
        replyCharging: OPTIONAL<BOOLEAN>,
        replyDeadline: OPTIONAL<WaitTime>,
        replyChargingSize: OPTIONAL<INTEGER>,
        priority: OPTIONAL<PriorityType>,
        messageDistributionIndicator: OPTIONAL<BOOLEAN>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        mscfInformation: OPTIONAL<MSCFInformation>
    ) {
        this.recordType = recordType;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.linkedID = linkedID;
        this.vaspID = vaspID;
        this.vasID = vasID;
        this.messageID = messageID;
        this.originatorAddress = originatorAddress;
        this.recipientAddresses = recipientAddresses;
        this.serviceCode = serviceCode;
        this.contentType = contentType;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.messageClass = messageClass;
        this.chargeInformation = chargeInformation;
        this.submissionTime = submissionTime;
        this.timeOfExpiry = timeOfExpiry;
        this.earliestTimeOfDelivery = earliestTimeOfDelivery;
        this.deliveryReportRequested = deliveryReportRequested;
        this.readReplyRequested = readReplyRequested;
        this.replyCharging = replyCharging;
        this.replyDeadline = replyDeadline;
        this.replyChargingSize = replyChargingSize;
        this.priority = priority;
        this.messageDistributionIndicator = messageDistributionIndicator;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.mscfInformation = mscfInformation;
    
        if (this.submissionTime !== undefined && (this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("MM7SRecord.submissionTime violates SIZE constraint");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MM7SRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("MM7SRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MM7SRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MM7SRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM7SRecord`.
     * @returns {MM7SRecord}
     */
    public static _from_object (_o: { [_K in keyof (MM7SRecord)]: (MM7SRecord)[_K] }): MM7SRecord {
        return new MM7SRecord(_o.recordType, _o.originatorMmsRSAddress, _o.linkedID, _o.vaspID, _o.vasID, _o.messageID, _o.originatorAddress, _o.recipientAddresses, _o.serviceCode, _o.contentType, _o.mmComponentType, _o.messageSize, _o.messageClass, _o.chargeInformation, _o.submissionTime, _o.timeOfExpiry, _o.earliestTimeOfDelivery, _o.deliveryReportRequested, _o.readReplyRequested, _o.replyCharging, _o.replyDeadline, _o.replyChargingSize, _o.priority, _o.messageDistributionIndicator, _o.requestStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.mscfInformation);
    }

        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MessageClass;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_PriorityType;
}

/**
 * @summary The Leading Root Component Types of MM7SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM7SRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("linkedID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vaspID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("vasID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originatorAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recipientAddresses", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceCode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("chargeInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("submissionTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("earliestTimeOfDelivery", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("readReplyRequested", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("replyDeadline", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("replyChargingSize", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("messageDistributionIndicator", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("mscfInformation", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of MM7SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM7SRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM7SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM7SRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM7SRecord: $.ASN1Decoder<MM7SRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM7SRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM7SRecord (el: _Element): MM7SRecord {
    if (!_cached_decoder_for_MM7SRecord) { _cached_decoder_for_MM7SRecord = function (el: _Element): MM7SRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let originatorMmsRSAddress!: MMSRSAddress;
    let linkedID: OPTIONAL<OCTET_STRING>;
    let vaspID!: OCTET_STRING;
    let vasID!: OCTET_STRING;
    let messageID!: OCTET_STRING;
    let originatorAddress!: MMSAgentAddress;
    let recipientAddresses!: MMSAgentAddress[];
    let serviceCode: OPTIONAL<OCTET_STRING>;
    let contentType!: OCTET_STRING;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let messageClass: OPTIONAL<MessageClass>;
    let chargeInformation: OPTIONAL<ChargeInformation>;
    let submissionTime: OPTIONAL<OCTET_STRING>;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let readReplyRequested: OPTIONAL<BOOLEAN>;
    let replyCharging: OPTIONAL<BOOLEAN>;
    let replyDeadline: OPTIONAL<WaitTime>;
    let replyChargingSize: OPTIONAL<INTEGER>;
    let priority: OPTIONAL<PriorityType>;
    let messageDistributionIndicator: OPTIONAL<BOOLEAN>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let mscfInformation: OPTIONAL<MSCFInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "linkedID": (_el: _Element): void => { linkedID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vaspID": (_el: _Element): void => { vaspID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vasID": (_el: _Element): void => { vasID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddresses": (_el: _Element): void => { recipientAddresses = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "serviceCode": (_el: _Element): void => { serviceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "chargeInformation": (_el: _Element): void => { chargeInformation = $._decode_implicit<ChargeInformation>(() => _decode_ChargeInformation)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "earliestTimeOfDelivery": (_el: _Element): void => { earliestTimeOfDelivery = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReplyRequested": (_el: _Element): void => { readReplyRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyDeadline": (_el: _Element): void => { replyDeadline = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "replyChargingSize": (_el: _Element): void => { replyChargingSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "messageDistributionIndicator": (_el: _Element): void => { messageDistributionIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "mscfInformation": (_el: _Element): void => { mscfInformation = $._decode_implicit<MSCFInformation>(() => _decode_MSCFInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MM7SRecord,
        _extension_additions_list_spec_for_MM7SRecord,
        _root_component_type_list_2_spec_for_MM7SRecord,
        undefined,
    );
    return new MM7SRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        originatorMmsRSAddress,
        linkedID,
        vaspID,
        vasID,
        messageID,
        originatorAddress,
        recipientAddresses,
        serviceCode,
        contentType,
        mmComponentType,
        messageSize,
        messageClass,
        chargeInformation,
        submissionTime,
        timeOfExpiry,
        earliestTimeOfDelivery,
        deliveryReportRequested,
        readReplyRequested,
        replyCharging,
        replyDeadline,
        replyChargingSize,
        priority,
        messageDistributionIndicator,
        requestStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        mscfInformation
    );
}; }
    return _cached_decoder_for_MM7SRecord(el);
}

let _cached_encoder_for_MM7SRecord: $.ASN1Encoder<MM7SRecord> | null = null;

/**
 * @summary Encodes a(n) MM7SRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM7SRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MM7SRecord (value: MM7SRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM7SRecord) { _cached_encoder_for_MM7SRecord = function (value: MM7SRecord, _elGetter: $.ASN1Encoder<MM7SRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    if (value.linkedID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.linkedID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.vaspID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.vasID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.recipientAddresses, $.BER));
    if (value.serviceCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.serviceCode, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.chargeInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ChargeInformation, $.BER)(value.chargeInformation, $.BER));
    }
    if (value.submissionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    }
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    if (value.earliestTimeOfDelivery !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_WaitTime, $.BER)(value.earliestTimeOfDelivery, $.BER));
    }
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.readReplyRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.readReplyRequested, $.BER));
    }
    if (value.replyCharging !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeBoolean, $.BER)(value.replyCharging, $.BER));
    }
    if (value.replyDeadline !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_WaitTime, $.BER)(value.replyDeadline, $.BER));
    }
    if (value.replyChargingSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.replyChargingSize, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    if (value.messageDistributionIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.messageDistributionIndicator, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.mscfInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_MSCFInformation, $.BER)(value.mscfInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MM7SRecord(value, elGetter);
}


/* eslint-enable */
