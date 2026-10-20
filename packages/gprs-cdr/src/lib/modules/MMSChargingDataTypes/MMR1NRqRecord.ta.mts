/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
// export { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
// export { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
// export { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
// export { MessageClass, _enum_for_MessageClass, MessageClass_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_information_service /* IMPORTED_LONG_ENUMERATION_ITEM */, information_service /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageClass_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MessageClass, _encode_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
// export { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
// export { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
// export { MMStatusCodeType, _enum_for_MMStatusCodeType, MMStatusCodeType_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_unrecognised /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognised /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_read /* IMPORTED_LONG_ENUMERATION_ITEM */, read /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatusCodeType_deletedWithoutBeingRead /* IMPORTED_LONG_ENUMERATION_ITEM */, deletedWithoutBeingRead /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatusCodeType, _encode_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
import { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";
// export { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";


/**
 * @summary MMR1NRqRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMR1NRqRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress     [1] IMPLICIT MMSRSAddress,
 *    messageID                 [2] IMPLICIT OCTET STRING,
 *    replyChargingID           [3] IMPLICIT OCTET STRING OPTIONAL,
 *    senderAddress             [4] IMPLICIT MMSAgentAddress,
 *    recipientAddress          [5] IMPLICIT MMSAgentAddress,
 *    accessCorrelation         [6] AccessCorrelation OPTIONAL,
 *    messageClass              [7] IMPLICIT MessageClass OPTIONAL,
 *    mmComponentType           [8] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize               [9] IMPLICIT INTEGER,
 *    timeOfExpiry              [10] WaitTime OPTIONAL,
 *    messageReference          [11] IMPLICIT OCTET STRING,
 *    deliveryReportRequested   [12] IMPLICIT BOOLEAN OPTIONAL,
 *    replyCharging             [13] IMPLICIT BOOLEAN OPTIONAL,
 *    replyDeadline             [14] WaitTime OPTIONAL,
 *    replyChargingSize         [15] IMPLICIT INTEGER OPTIONAL,
 *    mmStatusCode              [16] IMPLICIT MMStatusCodeType OPTIONAL,
 *    statusText                [17] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp           [18] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber       [19] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions          [20] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    mscfInformation           [21] IMPLICIT MSCFInformation OPTIONAL,
 *    vaspID                    [22] IMPLICIT OCTET STRING OPTIONAL,
 *    vasID                     [23] IMPLICIT OCTET STRING OPTIONAL,
 *    sGSNPLMNIdentifier        [24] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType                   [25] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                [26] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMR1NRqRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: MMSRSAddress;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `replyChargingID`.
     * @public
     * @readonly
     */
    readonly replyChargingID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `senderAddress`.
     * @public
     * @readonly
     */
    readonly senderAddress: MMSAgentAddress;
    /**
     * @summary `recipientAddress`.
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
    /**
     * @summary `accessCorrelation`.
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
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
     * @summary `timeOfExpiry`.
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `deliveryReportRequested`.
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
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
     * @summary `mmStatusCode`.
     * @public
     * @readonly
     */
    readonly mmStatusCode: OPTIONAL<MMStatusCodeType>;
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
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
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
    /**
     * @summary `vaspID`.
     * @public
     * @readonly
     */
    readonly vaspID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `vasID`.
     * @public
     * @readonly
     */
    readonly vasID: OPTIONAL<OCTET_STRING>;
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
        recipientMmsRSAddress: MMSRSAddress,
        messageID: OCTET_STRING,
        replyChargingID: OPTIONAL<OCTET_STRING>,
        senderAddress: MMSAgentAddress,
        recipientAddress: MMSAgentAddress,
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        messageClass: OPTIONAL<MessageClass>,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        timeOfExpiry: OPTIONAL<WaitTime>,
        messageReference: OCTET_STRING,
        deliveryReportRequested: OPTIONAL<BOOLEAN>,
        replyCharging: OPTIONAL<BOOLEAN>,
        replyDeadline: OPTIONAL<WaitTime>,
        replyChargingSize: OPTIONAL<INTEGER>,
        mmStatusCode: OPTIONAL<MMStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        mscfInformation: OPTIONAL<MSCFInformation>,
        vaspID: OPTIONAL<OCTET_STRING>,
        vasID: OPTIONAL<OCTET_STRING>,
        sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.messageID = messageID;
        this.replyChargingID = replyChargingID;
        this.senderAddress = senderAddress;
        this.recipientAddress = recipientAddress;
        this.accessCorrelation = accessCorrelation;
        this.messageClass = messageClass;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.timeOfExpiry = timeOfExpiry;
        this.messageReference = messageReference;
        this.deliveryReportRequested = deliveryReportRequested;
        this.replyCharging = replyCharging;
        this.replyDeadline = replyDeadline;
        this.replyChargingSize = replyChargingSize;
        this.mmStatusCode = mmStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.mscfInformation = mscfInformation;
        this.vaspID = vaspID;
        this.vasID = vasID;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    }

    /**
     * @summary Restructures an object into a MMR1NRqRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMR1NRqRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMR1NRqRecord`.
     * @returns {MMR1NRqRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMR1NRqRecord)]: (MMR1NRqRecord)[_K] }): MMR1NRqRecord {
        return new MMR1NRqRecord(_o.recordType, _o.recipientMmsRSAddress, _o.messageID, _o.replyChargingID, _o.senderAddress, _o.recipientAddress, _o.accessCorrelation, _o.messageClass, _o.mmComponentType, _o.messageSize, _o.timeOfExpiry, _o.messageReference, _o.deliveryReportRequested, _o.replyCharging, _o.replyDeadline, _o.replyChargingSize, _o.mmStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.mscfInformation, _o.vaspID, _o.vasID, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }

        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MessageClass;        /**
         * @summary The enum used as the type of the component `mmStatusCode`
         * @public
         * @static
         */

    public static _enum_for_mmStatusCode = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMR1NRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMR1NRqRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyChargingID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("senderAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("replyDeadline", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("replyChargingSize", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mmStatusCode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("mscfInformation", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("vaspID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("vasID", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 26))
];

/**
 * @summary The Trailing Root Component Types of MMR1NRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMR1NRqRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMR1NRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMR1NRqRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMR1NRqRecord: $.ASN1Decoder<MMR1NRqRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMR1NRqRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMR1NRqRecord (el: _Element): MMR1NRqRecord {
    if (!_cached_decoder_for_MMR1NRqRecord) { _cached_decoder_for_MMR1NRqRecord = function (el: _Element): MMR1NRqRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let replyChargingID: OPTIONAL<OCTET_STRING>;
    let senderAddress!: MMSAgentAddress;
    let recipientAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let messageClass: OPTIONAL<MessageClass>;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let messageReference!: OCTET_STRING;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let replyCharging: OPTIONAL<BOOLEAN>;
    let replyDeadline: OPTIONAL<WaitTime>;
    let replyChargingSize: OPTIONAL<INTEGER>;
    let mmStatusCode: OPTIONAL<MMStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let mscfInformation: OPTIONAL<MSCFInformation>;
    let vaspID: OPTIONAL<OCTET_STRING>;
    let vasID: OPTIONAL<OCTET_STRING>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replyChargingID": (_el: _Element): void => { replyChargingID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "senderAddress": (_el: _Element): void => { senderAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyDeadline": (_el: _Element): void => { replyDeadline = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "replyChargingSize": (_el: _Element): void => { replyChargingSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mmStatusCode": (_el: _Element): void => { mmStatusCode = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "mscfInformation": (_el: _Element): void => { mscfInformation = $._decode_implicit<MSCFInformation>(() => _decode_MSCFInformation)(_el); },
        "vaspID": (_el: _Element): void => { vaspID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vasID": (_el: _Element): void => { vasID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMR1NRqRecord,
        _extension_additions_list_spec_for_MMR1NRqRecord,
        _root_component_type_list_2_spec_for_MMR1NRqRecord,
        undefined,
    );
    return new MMR1NRqRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        messageID,
        replyChargingID,
        senderAddress,
        recipientAddress,
        accessCorrelation,
        messageClass,
        mmComponentType,
        messageSize,
        timeOfExpiry,
        messageReference,
        deliveryReportRequested,
        replyCharging,
        replyDeadline,
        replyChargingSize,
        mmStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        mscfInformation,
        vaspID,
        vasID,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMR1NRqRecord(el);
}

let _cached_encoder_for_MMR1NRqRecord: $.ASN1Encoder<MMR1NRqRecord> | null = null;

/**
 * @summary Encodes a(n) MMR1NRqRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMR1NRqRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMR1NRqRecord (value: MMR1NRqRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMR1NRqRecord) { _cached_encoder_for_MMR1NRqRecord = function (value: MMR1NRqRecord, elGetter: $.ASN1Encoder<MMR1NRqRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.replyChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.replyChargingID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSAgentAddress, $.BER)(value.senderAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.replyCharging !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.replyCharging, $.BER));
    }
    if (value.replyDeadline !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_WaitTime, $.BER)(value.replyDeadline, $.BER));
    }
    if (value.replyChargingSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.replyChargingSize, $.BER));
    }
    if (value.mmStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_MMStatusCodeType, $.BER)(value.mmStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.mscfInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_MSCFInformation, $.BER)(value.mscfInformation, $.BER));
    }
    if (value.vaspID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.vaspID, $.BER));
    }
    if (value.vasID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.vasID, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMR1NRqRecord(value, elGetter);
}


/* eslint-enable */
