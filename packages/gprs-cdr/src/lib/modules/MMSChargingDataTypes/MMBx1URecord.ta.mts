/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
// export { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
// export { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
// export { MessageClass, _enum_for_MessageClass, MessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_information_service /* IMPORTED_LONG_ENUMERATION_ITEM */, information_service /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MessageClass, _encode_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
// export { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
// export { PriorityType, _enum_for_PriorityType, PriorityType_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityType_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PriorityType, _encode_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
// export { RequestStatusCodeType, RequestStatusCodeType_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_serviceDenied /* IMPORTED_LONG_NAMED_INTEGER */, serviceDenied /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_messageFormatCorrupt /* IMPORTED_LONG_NAMED_INTEGER */, messageFormatCorrupt /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_sendingAddressUnresolved /* IMPORTED_LONG_NAMED_INTEGER */, sendingAddressUnresolved /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_messageNotFound /* IMPORTED_LONG_NAMED_INTEGER */, messageNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_networkProblem /* IMPORTED_LONG_NAMED_INTEGER */, networkProblem /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_contentNotAccepted /* IMPORTED_LONG_NAMED_INTEGER */, contentNotAccepted /* IMPORTED_SHORT_NAMED_INTEGER */, RequestStatusCodeType_unsupportedMessage /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMessage /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMBx1URecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBx1URecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    mmsRelayAddress          [1] IPAddress,
 *    managingAddress          [2] IMPLICIT MMSAgentAddress,
 *    accessCorrelation        [3] AccessCorrelation OPTIONAL,
 *    recipientsAddressList    [4] IMPLICIT SET  OF
 *       MMSAgentAddress,
 *    messageClass             [5] IMPLICIT MessageClass OPTIONAL,
 *    uploadTime               [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfExpiry             [7] WaitTime OPTIONAL,
 *    earliestTimeOfDelivery   [8] WaitTime OPTIONAL,
 *    priority                 [9] IMPLICIT PriorityType OPTIONAL,
 *    mmState                  [10] IMPLICIT OCTET STRING OPTIONAL,
 *    mmFlags                  [11] IMPLICIT OCTET STRING OPTIONAL,
 *    contentType              [12] IMPLICIT OCTET STRING OPTIONAL,
 *    messageSize              [13] IMPLICIT INTEGER OPTIONAL,
 *    messageReference         [14] IMPLICIT OCTET STRING OPTIONAL,
 *    requestStatusCode        [15] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText               [16] IMPLICIT OCTET STRING OPTIONAL,
 *    sequenceNumber           [17] IMPLICIT INTEGER OPTIONAL,
 *    timeStamp                [18] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordExtensions         [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    sGSNPLMNIdentifier       [20] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType                  [21] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone               [22] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMBx1URecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `mmsRelayAddress`.
     * @public
     * @readonly
     */
    readonly mmsRelayAddress: IPAddress;
    /**
     * @summary `managingAddress`.
     * @public
     * @readonly
     */
    readonly managingAddress: MMSAgentAddress;
    /**
     * @summary `accessCorrelation`.
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `recipientsAddressList`.
     * @public
     * @readonly
     */
    readonly recipientsAddressList: MMSAgentAddress[];
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `uploadTime`.
     * @public
     * @readonly
     */
    readonly uploadTime: OPTIONAL<OCTET_STRING>;
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
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `mmState`.
     * @public
     * @readonly
     */
    readonly mmState: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mmFlags`.
     * @public
     * @readonly
     */
    readonly mmFlags: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `contentType`.
     * @public
     * @readonly
     */
    readonly contentType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OPTIONAL<OCTET_STRING>;
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
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `sGSNPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        mmsRelayAddress: IPAddress,
        managingAddress: MMSAgentAddress,
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        recipientsAddressList: MMSAgentAddress[],
        messageClass: OPTIONAL<MessageClass>,
        uploadTime: OPTIONAL<OCTET_STRING>,
        timeOfExpiry: OPTIONAL<WaitTime>,
        earliestTimeOfDelivery: OPTIONAL<WaitTime>,
        priority: OPTIONAL<PriorityType>,
        mmState: OPTIONAL<OCTET_STRING>,
        mmFlags: OPTIONAL<OCTET_STRING>,
        contentType: OPTIONAL<OCTET_STRING>,
        messageSize: OPTIONAL<INTEGER>,
        messageReference: OPTIONAL<OCTET_STRING>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        sequenceNumber: OPTIONAL<INTEGER>,
        timeStamp: OPTIONAL<OCTET_STRING>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.mmsRelayAddress = mmsRelayAddress;
        this.managingAddress = managingAddress;
        this.accessCorrelation = accessCorrelation;
        this.recipientsAddressList = recipientsAddressList;
        this.messageClass = messageClass;
        this.uploadTime = uploadTime;
        this.timeOfExpiry = timeOfExpiry;
        this.earliestTimeOfDelivery = earliestTimeOfDelivery;
        this.priority = priority;
        this.mmState = mmState;
        this.mmFlags = mmFlags;
        this.contentType = contentType;
        this.messageSize = messageSize;
        this.messageReference = messageReference;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.recordExtensions = recordExtensions;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    }

    /**
     * @summary Restructures an object into a MMBx1URecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMBx1URecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBx1URecord`.
     * @returns {MMBx1URecord}
     */
    public static _from_object (_o: { [_K in keyof (MMBx1URecord)]: (MMBx1URecord)[_K] }): MMBx1URecord {
        return new MMBx1URecord(_o.recordType, _o.mmsRelayAddress, _o.managingAddress, _o.accessCorrelation, _o.recipientsAddressList, _o.messageClass, _o.uploadTime, _o.timeOfExpiry, _o.earliestTimeOfDelivery, _o.priority, _o.mmState, _o.mmFlags, _o.contentType, _o.messageSize, _o.messageReference, _o.requestStatusCode, _o.statusText, _o.sequenceNumber, _o.timeStamp, _o.recordExtensions, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
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
 * @summary The Leading Root Component Types of MMBx1URecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBx1URecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmsRelayAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("managingAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recipientsAddressList", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uploadTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("earliestTimeOfDelivery", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mmState", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mmFlags", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("contentType", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("messageReference", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of MMBx1URecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBx1URecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBx1URecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBx1URecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBx1URecord: $.ASN1Decoder<MMBx1URecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBx1URecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBx1URecord (el: _Element): MMBx1URecord {
    if (!_cached_decoder_for_MMBx1URecord) { _cached_decoder_for_MMBx1URecord = function (el: _Element): MMBx1URecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let mmsRelayAddress!: IPAddress;
    let managingAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let recipientsAddressList!: MMSAgentAddress[];
    let messageClass: OPTIONAL<MessageClass>;
    let uploadTime: OPTIONAL<OCTET_STRING>;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    let priority: OPTIONAL<PriorityType>;
    let mmState: OPTIONAL<OCTET_STRING>;
    let mmFlags: OPTIONAL<OCTET_STRING>;
    let contentType: OPTIONAL<OCTET_STRING>;
    let messageSize: OPTIONAL<INTEGER>;
    let messageReference: OPTIONAL<OCTET_STRING>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let timeStamp: OPTIONAL<OCTET_STRING>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "mmsRelayAddress": (_el: _Element): void => { mmsRelayAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "managingAddress": (_el: _Element): void => { managingAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "recipientsAddressList": (_el: _Element): void => { recipientsAddressList = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "uploadTime": (_el: _Element): void => { uploadTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "earliestTimeOfDelivery": (_el: _Element): void => { earliestTimeOfDelivery = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "mmState": (_el: _Element): void => { mmState = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmFlags": (_el: _Element): void => { mmFlags = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMBx1URecord,
        _extension_additions_list_spec_for_MMBx1URecord,
        _root_component_type_list_2_spec_for_MMBx1URecord,
        undefined,
    );
    return new MMBx1URecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        mmsRelayAddress,
        managingAddress,
        accessCorrelation,
        recipientsAddressList,
        messageClass,
        uploadTime,
        timeOfExpiry,
        earliestTimeOfDelivery,
        priority,
        mmState,
        mmFlags,
        contentType,
        messageSize,
        messageReference,
        requestStatusCode,
        statusText,
        sequenceNumber,
        timeStamp,
        recordExtensions,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMBx1URecord(el);
}

let _cached_encoder_for_MMBx1URecord: $.ASN1Encoder<MMBx1URecord> | null = null;

/**
 * @summary Encodes a(n) MMBx1URecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBx1URecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMBx1URecord (value: MMBx1URecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBx1URecord) { _cached_encoder_for_MMBx1URecord = function (value: MMBx1URecord, elGetter: $.ASN1Encoder<MMBx1URecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.mmsRelayAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSAgentAddress, $.BER)(value.managingAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.recipientsAddressList, $.BER));
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.uploadTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.uploadTime, $.BER));
    }
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    if (value.earliestTimeOfDelivery !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_WaitTime, $.BER)(value.earliestTimeOfDelivery, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    if (value.mmState !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.mmState, $.BER));
    }
    if (value.mmFlags !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.mmFlags, $.BER));
    }
    if (value.contentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    }
    if (value.messageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    }
    if (value.messageReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMBx1URecord(value, elGetter);
}


/* eslint-enable */
