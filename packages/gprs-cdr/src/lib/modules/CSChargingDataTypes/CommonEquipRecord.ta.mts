/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { CommonEquipRecord_equipmentType, _decode_CommonEquipRecord_equipmentType, _encode_CommonEquipRecord_equipmentType } from "../CSChargingDataTypes/CommonEquipRecord-equipmentType.ta.mjs";
// export { CommonEquipRecord_equipmentType, CommonEquipRecord_equipmentType_conferenceBridge /* IMPORTED_LONG_NAMED_INTEGER */, conferenceBridge /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CommonEquipRecord_equipmentType, _encode_CommonEquipRecord_equipmentType } from "../CSChargingDataTypes/CommonEquipRecord-equipmentType.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
// export { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
// export { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
// export { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
// export { SystemType, _enum_for_SystemType, SystemType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, SystemType_iuUTRAN /* IMPORTED_LONG_ENUMERATION_ITEM */, iuUTRAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, SystemType_gERAN /* IMPORTED_LONG_ENUMERATION_ITEM */, gERAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SystemType, _encode_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";
// export { Fnur, _enum_for_Fnur, Fnur_fnurNotApplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, fnurNotApplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur9600_BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur9600_BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur14400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur14400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur19200BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur19200BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur28800BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur28800BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur38400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur38400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur48000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur48000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur56000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur56000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur64000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur64000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur33600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur33600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur32000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur32000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur31200BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur31200BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Fnur, _encode_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";


/**
 * @summary CommonEquipRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonEquipRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    equipmentType       [1] IMPLICIT INTEGER {
 *       conferenceBridge    ( 0 )},
 *    equipmentId         [2] IMPLICIT INTEGER,
 *    servedIMSI          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN        [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity     [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    basicService        [6] BasicService OPTIONAL,
 *    changeOfService     [7] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed   [8] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    seizureTime         [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    releaseTime         [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration        [11] IMPLICIT INTEGER,
 *    callReference       [12] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber      [13] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions    [14] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    systemType          [15] IMPLICIT SystemType OPTIONAL,
 *    rateIndication      [16] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    fnur                [17] IMPLICIT Fnur OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CommonEquipRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `equipmentType`.
     * @public
     * @readonly
     */
    readonly equipmentType: CommonEquipRecord_equipmentType;
    /**
     * @summary `equipmentId`.
     * @public
     * @readonly
     */
    readonly equipmentId: INTEGER;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `changeOfService`.
     * @public
     * @readonly
     */
    readonly changeOfService: OPTIONAL<ChangeOfService[]>;
    /**
     * @summary `supplServicesUsed`.
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OCTET_STRING;
    /**
     * @summary `releaseTime`.
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @public
     * @readonly
     */
    readonly callDuration: INTEGER;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `systemType`.
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `rateIndication`.
     * @public
     * @readonly
     */
    readonly rateIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fnur`.
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;

    constructor (
        recordType: RecordType,
        equipmentType: CommonEquipRecord_equipmentType,
        equipmentId: INTEGER,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        basicService: OPTIONAL<BasicService>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        seizureTime: OCTET_STRING,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        systemType: OPTIONAL<SystemType>,
        rateIndication: OPTIONAL<OCTET_STRING>,
        fnur: OPTIONAL<Fnur>
    ) {
        this.recordType = recordType;
        this.equipmentType = equipmentType;
        this.equipmentId = equipmentId;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.basicService = basicService;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.seizureTime = seizureTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.systemType = systemType;
        this.rateIndication = rateIndication;
        this.fnur = fnur;
    }

    /**
     * @summary Restructures an object into a CommonEquipRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CommonEquipRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonEquipRecord`.
     * @returns {CommonEquipRecord}
     */
    public static _from_object (_o: { [_K in keyof (CommonEquipRecord)]: (CommonEquipRecord)[_K] }): CommonEquipRecord {
        return new CommonEquipRecord(_o.recordType, _o.equipmentType, _o.equipmentId, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.basicService, _o.changeOfService, _o.supplServicesUsed, _o.seizureTime, _o.releaseTime, _o.callDuration, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.systemType, _o.rateIndication, _o.fnur);
    }

        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;
}

/**
 * @summary The Leading Root Component Types of CommonEquipRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("equipmentType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("equipmentId", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("seizureTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of CommonEquipRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonEquipRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonEquipRecord: $.ASN1Decoder<CommonEquipRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonEquipRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonEquipRecord (el: _Element): CommonEquipRecord {
    if (!_cached_decoder_for_CommonEquipRecord) { _cached_decoder_for_CommonEquipRecord = function (el: _Element): CommonEquipRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let equipmentType!: CommonEquipRecord_equipmentType;
    let equipmentId!: INTEGER;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let basicService: OPTIONAL<BasicService>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let seizureTime!: OCTET_STRING;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let systemType: OPTIONAL<SystemType>;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let fnur: OPTIONAL<Fnur>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "equipmentType": (_el: _Element): void => { equipmentType = $._decode_implicit<CommonEquipRecord_equipmentType>(() => _decode_CommonEquipRecord_equipmentType)(_el); },
        "equipmentId": (_el: _Element): void => { equipmentId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CommonEquipRecord,
        _extension_additions_list_spec_for_CommonEquipRecord,
        _root_component_type_list_2_spec_for_CommonEquipRecord,
        undefined,
    );
    return new CommonEquipRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        equipmentType,
        equipmentId,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        basicService,
        changeOfService,
        supplServicesUsed,
        seizureTime,
        releaseTime,
        callDuration,
        callReference,
        sequenceNumber,
        recordExtensions,
        systemType,
        rateIndication,
        fnur
    );
}; }
    return _cached_decoder_for_CommonEquipRecord(el);
}

let _cached_encoder_for_CommonEquipRecord: $.ASN1Encoder<CommonEquipRecord> | null = null;

/**
 * @summary Encodes a(n) CommonEquipRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonEquipRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CommonEquipRecord (value: CommonEquipRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonEquipRecord) { _cached_encoder_for_CommonEquipRecord = function (value: CommonEquipRecord, elGetter: $.ASN1Encoder<CommonEquipRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommonEquipRecord_equipmentType, $.BER)(value.equipmentType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.equipmentId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CommonEquipRecord(value, elGetter);
}


/* eslint-enable */
