/* eslint-disable */
import {
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../ExposureFunctionAPIChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../ExposureFunctionAPIChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ExposureFunctionAPIChargingDataTypes/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ExposureFunctionAPIChargingDataTypes/IPAddress.ta.mjs";
import { SCSASAddress, _decode_SCSASAddress, _encode_SCSASAddress } from "../ExposureFunctionAPIChargingDataTypes/SCSASAddress.ta.mjs";
// export { SCSASAddress, _decode_SCSASAddress, _encode_SCSASAddress } from "../ExposureFunctionAPIChargingDataTypes/SCSASAddress.ta.mjs";
import { APIDirection, _decode_APIDirection, _encode_APIDirection, _enum_for_APIDirection } from "../ExposureFunctionAPIChargingDataTypes/APIDirection.ta.mjs";
// export { APIDirection, _enum_for_APIDirection, APIDirection_invocation /* IMPORTED_LONG_ENUMERATION_ITEM */, invocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, APIDirection_notification /* IMPORTED_LONG_ENUMERATION_ITEM */, notification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_APIDirection, _encode_APIDirection } from "../ExposureFunctionAPIChargingDataTypes/APIDirection.ta.mjs";
import { APINetworkServiceNode, _decode_APINetworkServiceNode, _encode_APINetworkServiceNode, _enum_for_APINetworkServiceNode } from "../ExposureFunctionAPIChargingDataTypes/APINetworkServiceNode.ta.mjs";
// export { APINetworkServiceNode, _enum_for_APINetworkServiceNode, APINetworkServiceNode_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_sGSN /* IMPORTED_LONG_ENUMERATION_ITEM */, sGSN /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_hSS /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_pCRF /* IMPORTED_LONG_ENUMERATION_ITEM */, pCRF /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_pFDF /* IMPORTED_LONG_ENUMERATION_ITEM */, pFDF /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_bMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, bMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_cCSCF /* IMPORTED_LONG_ENUMERATION_ITEM */, cCSCF /* IMPORTED_SHORT_ENUMERATION_ITEM */, APINetworkServiceNode_rCAF /* IMPORTED_LONG_ENUMERATION_ITEM */, rCAF /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_APINetworkServiceNode, _encode_APINetworkServiceNode } from "../ExposureFunctionAPIChargingDataTypes/APINetworkServiceNode.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../ExposureFunctionAPIChargingDataTypes/SubscriptionID.ta.mjs";
// export { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../ExposureFunctionAPIChargingDataTypes/SubscriptionID.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ExposureFunctionAPIChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ExposureFunctionAPIChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary EASCERecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASCERecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    retransmission              [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID            [2] IMPLICIT UTF8String OPTIONAL,
 *    nodeId                      [3] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    sCEFID                      [4] IMPLICIT OCTET STRING OPTIONAL,
 *    sCEFAddress                 [5] IPAddress OPTIONAL,
 *    aPIIdentifier               [6] IMPLICIT OCTET STRING OPTIONAL,
 *    tLTRI                       [7] IMPLICIT INTEGER OPTIONAL,
 *    sCSASAddress                [9] IMPLICIT SCSASAddress OPTIONAL,
 *    eventTimestamp              [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    aPIInvocationTimestamp      [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    aPIDirection                [12] IMPLICIT APIDirection OPTIONAL,
 *    aPINetworkServiceNode       [13] IMPLICIT APINetworkServiceNode OPTIONAL,
 *    aPIContent                  [14] IMPLICIT UTF8String OPTIONAL,
 *    aPISize                     [15] IMPLICIT INTEGER OPTIONAL,
 *    aPIresultCode               [16] IMPLICIT INTEGER OPTIONAL,
 *    externalIdentifier          [17] IMPLICIT SubscriptionID OPTIONAL,
 *    localRecordSequenceNumber   [18] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions            [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    startTime                   [20] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                    [21] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EASCERecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `nodeId`.
     * @public
     * @readonly
     */
    readonly nodeId: OPTIONAL<IA5String>;
    /**
     * @summary `sCEFID`.
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sCEFAddress`.
     * @public
     * @readonly
     */
    readonly sCEFAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `aPIIdentifier`.
     * @public
     * @readonly
     */
    readonly aPIIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tLTRI`.
     * @public
     * @readonly
     */
    readonly tLTRI: OPTIONAL<INTEGER>;
    /**
     * @summary `sCSASAddress`.
     * @public
     * @readonly
     */
    readonly sCSASAddress: OPTIONAL<SCSASAddress>;
    /**
     * @summary `eventTimestamp`.
     * @public
     * @readonly
     */
    readonly eventTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPIInvocationTimestamp`.
     * @public
     * @readonly
     */
    readonly aPIInvocationTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPIDirection`.
     * @public
     * @readonly
     */
    readonly aPIDirection: OPTIONAL<APIDirection>;
    /**
     * @summary `aPINetworkServiceNode`.
     * @public
     * @readonly
     */
    readonly aPINetworkServiceNode: OPTIONAL<APINetworkServiceNode>;
    /**
     * @summary `aPIContent`.
     * @public
     * @readonly
     */
    readonly aPIContent: OPTIONAL<UTF8String>;
    /**
     * @summary `aPISize`.
     * @public
     * @readonly
     */
    readonly aPISize: OPTIONAL<INTEGER>;
    /**
     * @summary `aPIresultCode`.
     * @public
     * @readonly
     */
    readonly aPIresultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `externalIdentifier`.
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<SubscriptionID>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `stopTime`.
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        nodeId: OPTIONAL<IA5String>,
        sCEFID: OPTIONAL<OCTET_STRING>,
        sCEFAddress: OPTIONAL<IPAddress>,
        aPIIdentifier: OPTIONAL<OCTET_STRING>,
        tLTRI: OPTIONAL<INTEGER>,
        sCSASAddress: OPTIONAL<SCSASAddress>,
        eventTimestamp: OPTIONAL<OCTET_STRING>,
        aPIInvocationTimestamp: OPTIONAL<OCTET_STRING>,
        aPIDirection: OPTIONAL<APIDirection>,
        aPINetworkServiceNode: OPTIONAL<APINetworkServiceNode>,
        aPIContent: OPTIONAL<UTF8String>,
        aPISize: OPTIONAL<INTEGER>,
        aPIresultCode: OPTIONAL<INTEGER>,
        externalIdentifier: OPTIONAL<SubscriptionID>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.nodeId = nodeId;
        this.sCEFID = sCEFID;
        this.sCEFAddress = sCEFAddress;
        this.aPIIdentifier = aPIIdentifier;
        this.tLTRI = tLTRI;
        this.sCSASAddress = sCSASAddress;
        this.eventTimestamp = eventTimestamp;
        this.aPIInvocationTimestamp = aPIInvocationTimestamp;
        this.aPIDirection = aPIDirection;
        this.aPINetworkServiceNode = aPINetworkServiceNode;
        this.aPIContent = aPIContent;
        this.aPISize = aPISize;
        this.aPIresultCode = aPIresultCode;
        this.externalIdentifier = externalIdentifier;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.startTime = startTime;
        this.stopTime = stopTime;
    }

    /**
     * @summary Restructures an object into a EASCERecord
     * @description
     * 
     * This takes an `object` and converts it to a `EASCERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASCERecord`.
     * @returns {EASCERecord}
     */
    public static _from_object (_o: { [_K in keyof (EASCERecord)]: (EASCERecord)[_K] }): EASCERecord {
        return new EASCERecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.nodeId, _o.sCEFID, _o.sCEFAddress, _o.aPIIdentifier, _o.tLTRI, _o.sCSASAddress, _o.eventTimestamp, _o.aPIInvocationTimestamp, _o.aPIDirection, _o.aPINetworkServiceNode, _o.aPIContent, _o.aPISize, _o.aPIresultCode, _o.externalIdentifier, _o.localRecordSequenceNumber, _o.recordExtensions, _o.startTime, _o.stopTime);
    }

        /**
         * @summary The enum used as the type of the component `aPIDirection`
         * @public
         * @static
         */

    public static _enum_for_aPIDirection = _enum_for_APIDirection;        /**
         * @summary The enum used as the type of the component `aPINetworkServiceNode`
         * @public
         * @static
         */

    public static _enum_for_aPINetworkServiceNode = _enum_for_APINetworkServiceNode;
}

/**
 * @summary The Leading Root Component Types of EASCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASCERecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nodeId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sCEFID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sCEFAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPIIdentifier", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("tLTRI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sCSASAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eventTimestamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aPIInvocationTimestamp", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("aPIDirection", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("aPINetworkServiceNode", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("aPIContent", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("aPISize", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("aPIresultCode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of EASCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASCERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASCERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASCERecord: $.ASN1Decoder<EASCERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASCERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASCERecord (el: _Element): EASCERecord {
    if (!_cached_decoder_for_EASCERecord) { _cached_decoder_for_EASCERecord = function (el: _Element): EASCERecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let nodeId: OPTIONAL<IA5String>;
    let sCEFID: OPTIONAL<OCTET_STRING>;
    let sCEFAddress: OPTIONAL<IPAddress>;
    let aPIIdentifier: OPTIONAL<OCTET_STRING>;
    let tLTRI: OPTIONAL<INTEGER>;
    let sCSASAddress: OPTIONAL<SCSASAddress>;
    let eventTimestamp: OPTIONAL<OCTET_STRING>;
    let aPIInvocationTimestamp: OPTIONAL<OCTET_STRING>;
    let aPIDirection: OPTIONAL<APIDirection>;
    let aPINetworkServiceNode: OPTIONAL<APINetworkServiceNode>;
    let aPIContent: OPTIONAL<UTF8String>;
    let aPISize: OPTIONAL<INTEGER>;
    let aPIresultCode: OPTIONAL<INTEGER>;
    let externalIdentifier: OPTIONAL<SubscriptionID>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nodeId": (_el: _Element): void => { nodeId = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sCEFAddress": (_el: _Element): void => { sCEFAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "aPIIdentifier": (_el: _Element): void => { aPIIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tLTRI": (_el: _Element): void => { tLTRI = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sCSASAddress": (_el: _Element): void => { sCSASAddress = $._decode_implicit<SCSASAddress>(() => _decode_SCSASAddress)(_el); },
        "eventTimestamp": (_el: _Element): void => { eventTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aPIInvocationTimestamp": (_el: _Element): void => { aPIInvocationTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aPIDirection": (_el: _Element): void => { aPIDirection = $._decode_implicit<APIDirection>(() => _decode_APIDirection)(_el); },
        "aPINetworkServiceNode": (_el: _Element): void => { aPINetworkServiceNode = $._decode_implicit<APINetworkServiceNode>(() => _decode_APINetworkServiceNode)(_el); },
        "aPIContent": (_el: _Element): void => { aPIContent = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "aPISize": (_el: _Element): void => { aPISize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aPIresultCode": (_el: _Element): void => { aPIresultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_EASCERecord,
        _extension_additions_list_spec_for_EASCERecord,
        _root_component_type_list_2_spec_for_EASCERecord,
        undefined,
    );
    return new EASCERecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        nodeId,
        sCEFID,
        sCEFAddress,
        aPIIdentifier,
        tLTRI,
        sCSASAddress,
        eventTimestamp,
        aPIInvocationTimestamp,
        aPIDirection,
        aPINetworkServiceNode,
        aPIContent,
        aPISize,
        aPIresultCode,
        externalIdentifier,
        localRecordSequenceNumber,
        recordExtensions,
        startTime,
        stopTime
    );
}; }
    return _cached_decoder_for_EASCERecord(el);
}

let _cached_encoder_for_EASCERecord: $.ASN1Encoder<EASCERecord> | null = null;

/**
 * @summary Encodes a(n) EASCERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASCERecord, encoded as an ASN.1 Element.
 */
export
function _encode_EASCERecord (value: EASCERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASCERecord) { _cached_encoder_for_EASCERecord = function (value: EASCERecord, elGetter: $.ASN1Encoder<EASCERecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.nodeId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.nodeId, $.BER));
    }
    if (value.sCEFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.sCEFID, $.BER));
    }
    if (value.sCEFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_IPAddress, $.BER)(value.sCEFAddress, $.BER));
    }
    if (value.aPIIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.aPIIdentifier, $.BER));
    }
    if (value.tLTRI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.tLTRI, $.BER));
    }
    if (value.sCSASAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_SCSASAddress, $.BER)(value.sCSASAddress, $.BER));
    }
    if (value.eventTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eventTimestamp, $.BER));
    }
    if (value.aPIInvocationTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.aPIInvocationTimestamp, $.BER));
    }
    if (value.aPIDirection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_APIDirection, $.BER)(value.aPIDirection, $.BER));
    }
    if (value.aPINetworkServiceNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_APINetworkServiceNode, $.BER)(value.aPINetworkServiceNode, $.BER));
    }
    if (value.aPIContent !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.aPIContent, $.BER));
    }
    if (value.aPISize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.aPISize, $.BER));
    }
    if (value.aPIresultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.aPIresultCode, $.BER));
    }
    if (value.externalIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_SubscriptionID, $.BER)(value.externalIdentifier, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_EASCERecord(value, elGetter);
}


/* eslint-enable */
