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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { DefaultCallHandling, _decode_DefaultCallHandling, _encode_DefaultCallHandling, _enum_for_DefaultCallHandling } from "../CSChargingDataTypes/DefaultCallHandling.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { TermCAMELRecord_levelOfCAMELService, _decode_TermCAMELRecord_levelOfCAMELService, _encode_TermCAMELRecord_levelOfCAMELService } from "../CSChargingDataTypes/TermCAMELRecord-levelOfCAMELService.ta.mjs";
import { CAMELInformation, _decode_CAMELInformation, _encode_CAMELInformation } from "../CSChargingDataTypes/CAMELInformation.ta.mjs";
import { TermCAMELRecord_lrnSoInd, _decode_TermCAMELRecord_lrnSoInd, _encode_TermCAMELRecord_lrnSoInd } from "../CSChargingDataTypes/TermCAMELRecord-lrnSoInd.ta.mjs";
import { TermCAMELRecord_lrnQuryStatus, _decode_TermCAMELRecord_lrnQuryStatus, _encode_TermCAMELRecord_lrnQuryStatus } from "../CSChargingDataTypes/TermCAMELRecord-lrnQuryStatus.ta.mjs";
import { TermCAMELRecord_jIPSoInd, _decode_TermCAMELRecord_jIPSoInd, _encode_TermCAMELRecord_jIPSoInd } from "../CSChargingDataTypes/TermCAMELRecord-jIPSoInd.ta.mjs";
import { TermCAMELRecord_jIPQuryStatus, _decode_TermCAMELRecord_jIPQuryStatus, _encode_TermCAMELRecord_jIPQuryStatus } from "../CSChargingDataTypes/TermCAMELRecord-jIPQuryStatus.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";


/**
 * @summary TermCAMELRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord ::= SET {
 *    recordtype                  [0] IMPLICIT RecordType,
 *    servedIMSI                  [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN                [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity             [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    interrogationTime           [4] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    destinationRoutingAddress   [5] IMPLICIT SEQUENCE  ( SIZE( 1 ) ) OF
 *       OCTET STRING ( SIZE( 1 .. 41 ) ),
 *    gsm-SCFAddress              [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    serviceKey                  [7] IMPLICIT INTEGER ( 0 .. 2147483647 ),
 *    networkCallReference        [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    mSCAddress                  [9] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    defaultCallHandling         [10] IMPLICIT DefaultCallHandling OPTIONAL,
 *    recordExtensions            [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    calledNumber                [12] IMPLICIT OCTET STRING,
 *    callingNumber               [13] IMPLICIT OCTET STRING OPTIONAL,
 *    mscIncomingTKGP             [14] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP             [15] TrunkGroup OPTIONAL,
 *    seizureTime                 [16] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime                  [17] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime                 [18] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration                [19] IMPLICIT INTEGER,
 *    dataVolume                  [20] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm                [21] IMPLICIT CauseForTerm,
 *    diagnostics                 [22] HLRIntResult OPTIONAL,
 *    callReference               [23] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber              [24] IMPLICIT INTEGER OPTIONAL,
 *    numberOfDPEncountered       [25] IMPLICIT INTEGER OPTIONAL,
 *    levelOfCAMELService         [26] IMPLICIT BIT STRING {
 *       basic  (0 ),
 *       callDurationSupervision  (1 ),
 *       onlineCharging  (2 )} OPTIONAL,
 *    freeFormatData              [27] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    cAMELCallLegInformation     [28] IMPLICIT SEQUENCE  OF
 *       CAMELInformation OPTIONAL,
 *    freeFormatDataAppend        [29] IMPLICIT BOOLEAN OPTIONAL,
 *    defaultCallHandling-2       [30] IMPLICIT DefaultCallHandling OPTIONAL,
 *    gsm-SCFAddress-2            [31] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey-2                [32] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    freeFormatData-2            [33] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    freeFormatDataAppend-2      [34] IMPLICIT BOOLEAN OPTIONAL,
 *    mscServerIndication         [35] IMPLICIT BOOLEAN OPTIONAL,
 *    locationRoutNum             [36] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                    [37] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus               [38] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                     [39] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                    [40] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus               [41] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    partialRecordType           [42] IMPLICIT PartialRecordType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TermCAMELRecord {
    /**
     * @summary `recordtype`.
     * @public
     * @readonly
     */
    readonly recordtype: RecordType;
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
     * @summary `interrogationTime`.
     * @public
     * @readonly
     */
    readonly interrogationTime: OCTET_STRING;
    /**
     * @summary `destinationRoutingAddress`.
     * @public
     * @readonly
     */
    readonly destinationRoutingAddress: OCTET_STRING[];
    /**
     * @summary `gsm_SCFAddress`.
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress: OCTET_STRING;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: INTEGER;
    /**
     * @summary `networkCallReference`.
     * @public
     * @readonly
     */
    readonly networkCallReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mSCAddress`.
     * @public
     * @readonly
     */
    readonly mSCAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `defaultCallHandling`.
     * @public
     * @readonly
     */
    readonly defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `calledNumber`.
     * @public
     * @readonly
     */
    readonly calledNumber: OCTET_STRING;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mscIncomingTKGP`.
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
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
     * @summary `dataVolume`.
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForTerm`.
     * @public
     * @readonly
     */
    readonly causeForTerm: CauseForTerm;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<HLRIntResult>;
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
     * @summary `numberOfDPEncountered`.
     * @public
     * @readonly
     */
    readonly numberOfDPEncountered: OPTIONAL<INTEGER>;
    /**
     * @summary `levelOfCAMELService`.
     * @public
     * @readonly
     */
    readonly levelOfCAMELService: OPTIONAL<TermCAMELRecord_levelOfCAMELService>;
    /**
     * @summary `freeFormatData`.
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELCallLegInformation`.
     * @public
     * @readonly
     */
    readonly cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    /**
     * @summary `freeFormatDataAppend`.
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `defaultCallHandling_2`.
     * @public
     * @readonly
     */
    readonly defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `gsm_SCFAddress_2`.
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey_2`.
     * @public
     * @readonly
     */
    readonly serviceKey_2: OPTIONAL<INTEGER>;
    /**
     * @summary `freeFormatData_2`.
     * @public
     * @readonly
     */
    readonly freeFormatData_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `freeFormatDataAppend_2`.
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mscServerIndication`.
     * @public
     * @readonly
     */
    readonly mscServerIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `locationRoutNum`.
     * @public
     * @readonly
     */
    readonly locationRoutNum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lrnSoInd`.
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<TermCAMELRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<TermCAMELRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @public
     * @readonly
     */
    readonly jIPPara: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `jIPSoInd`.
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<TermCAMELRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<TermCAMELRecord_jIPQuryStatus>;
    /**
     * @summary `partialRecordType`.
     * @public
     * @readonly
     */
    readonly partialRecordType: OPTIONAL<PartialRecordType>;

    constructor (
        recordtype: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        interrogationTime: OCTET_STRING,
        destinationRoutingAddress: OCTET_STRING[],
        gsm_SCFAddress: OCTET_STRING,
        serviceKey: INTEGER,
        networkCallReference: OPTIONAL<OCTET_STRING>,
        mSCAddress: OPTIONAL<OCTET_STRING>,
        defaultCallHandling: OPTIONAL<DefaultCallHandling>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        calledNumber: OCTET_STRING,
        callingNumber: OPTIONAL<OCTET_STRING>,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        numberOfDPEncountered: OPTIONAL<INTEGER>,
        levelOfCAMELService: OPTIONAL<TermCAMELRecord_levelOfCAMELService>,
        freeFormatData: OPTIONAL<OCTET_STRING>,
        cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>,
        freeFormatDataAppend: OPTIONAL<BOOLEAN>,
        defaultCallHandling_2: OPTIONAL<DefaultCallHandling>,
        gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>,
        serviceKey_2: OPTIONAL<INTEGER>,
        freeFormatData_2: OPTIONAL<OCTET_STRING>,
        freeFormatDataAppend_2: OPTIONAL<BOOLEAN>,
        mscServerIndication: OPTIONAL<BOOLEAN>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<TermCAMELRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<TermCAMELRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<TermCAMELRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<TermCAMELRecord_jIPQuryStatus>,
        partialRecordType: OPTIONAL<PartialRecordType>
    ) {
        this.recordtype = recordtype;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.interrogationTime = interrogationTime;
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.gsm_SCFAddress = gsm_SCFAddress;
        this.serviceKey = serviceKey;
        this.networkCallReference = networkCallReference;
        this.mSCAddress = mSCAddress;
        this.defaultCallHandling = defaultCallHandling;
        this.recordExtensions = recordExtensions;
        this.calledNumber = calledNumber;
        this.callingNumber = callingNumber;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.numberOfDPEncountered = numberOfDPEncountered;
        this.levelOfCAMELService = levelOfCAMELService;
        this.freeFormatData = freeFormatData;
        this.cAMELCallLegInformation = cAMELCallLegInformation;
        this.freeFormatDataAppend = freeFormatDataAppend;
        this.defaultCallHandling_2 = defaultCallHandling_2;
        this.gsm_SCFAddress_2 = gsm_SCFAddress_2;
        this.serviceKey_2 = serviceKey_2;
        this.freeFormatData_2 = freeFormatData_2;
        this.freeFormatDataAppend_2 = freeFormatDataAppend_2;
        this.mscServerIndication = mscServerIndication;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.partialRecordType = partialRecordType;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("TermCAMELRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("TermCAMELRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("TermCAMELRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.interrogationTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.interrogationTime violates SIZE constraint");
        }
        if ((this.destinationRoutingAddress.length !== 1)) {
            throw new ASN1SizeError("TermCAMELRecord.destinationRoutingAddress violates SIZE constraint");
        }
        if (this.destinationRoutingAddress) {
            for (const _item of this.destinationRoutingAddress) {
                if (_item.length < 1 || _item.length > 41) {
                    throw new ASN1SizeError("TermCAMELRecord.destinationRoutingAddress element violates SIZE constraint");
                }
            }
        }
        if ((this.gsm_SCFAddress.length < 1 || this.gsm_SCFAddress.length > 9)) {
            throw new ASN1SizeError("TermCAMELRecord.gsm_SCFAddress violates SIZE constraint");
        }
        if (((typeof this.serviceKey === "bigint" ? Number(this.serviceKey) : this.serviceKey) < 0 || (typeof this.serviceKey === "bigint" ? Number(this.serviceKey) : this.serviceKey) > 2147483647)) {
            throw new ASN1OverflowError("TermCAMELRecord.serviceKey violates INTEGER range");
        }
        if (this.networkCallReference !== undefined && (this.networkCallReference.length < 1 || this.networkCallReference.length > 8)) {
            throw new ASN1SizeError("TermCAMELRecord.networkCallReference violates SIZE constraint");
        }
        if (this.mSCAddress !== undefined && (this.mSCAddress.length < 1 || this.mSCAddress.length > 20)) {
            throw new ASN1SizeError("TermCAMELRecord.mSCAddress violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("TermCAMELRecord.callReference violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("TermCAMELRecord.freeFormatData violates SIZE constraint");
        }
        if (this.gsm_SCFAddress_2 !== undefined && (this.gsm_SCFAddress_2.length < 1 || this.gsm_SCFAddress_2.length > 9)) {
            throw new ASN1SizeError("TermCAMELRecord.gsm_SCFAddress_2 violates SIZE constraint");
        }
        if (this.serviceKey_2 !== undefined && ((typeof this.serviceKey_2 === "bigint" ? Number(this.serviceKey_2) : this.serviceKey_2) < 0 || (typeof this.serviceKey_2 === "bigint" ? Number(this.serviceKey_2) : this.serviceKey_2) > 2147483647)) {
            throw new ASN1OverflowError("TermCAMELRecord.serviceKey_2 violates INTEGER range");
        }
        if (this.freeFormatData_2 !== undefined && (this.freeFormatData_2.length < 1 || this.freeFormatData_2.length > 160)) {
            throw new ASN1SizeError("TermCAMELRecord.freeFormatData_2 violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("TermCAMELRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("TermCAMELRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a TermCAMELRecord
     * @description
     * 
     * This takes an `object` and converts it to a `TermCAMELRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermCAMELRecord`.
     * @returns {TermCAMELRecord}
     */
    public static _from_object (_o: { [_K in keyof (TermCAMELRecord)]: (TermCAMELRecord)[_K] }): TermCAMELRecord {
        return new TermCAMELRecord(_o.recordtype, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.interrogationTime, _o.destinationRoutingAddress, _o.gsm_SCFAddress, _o.serviceKey, _o.networkCallReference, _o.mSCAddress, _o.defaultCallHandling, _o.recordExtensions, _o.calledNumber, _o.callingNumber, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.numberOfDPEncountered, _o.levelOfCAMELService, _o.freeFormatData, _o.cAMELCallLegInformation, _o.freeFormatDataAppend, _o.defaultCallHandling_2, _o.gsm_SCFAddress_2, _o.serviceKey_2, _o.freeFormatData_2, _o.freeFormatDataAppend_2, _o.mscServerIndication, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.partialRecordType);
    }

        /**
         * @summary The enum used as the type of the component `defaultCallHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `defaultCallHandling_2`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling_2 = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;
}

/**
 * @summary The Leading Root Component Types of TermCAMELRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermCAMELRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordtype", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("interrogationTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gsm-SCFAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("networkCallReference", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mSCAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("defaultCallHandling", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("numberOfDPEncountered", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("levelOfCAMELService", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("cAMELCallLegInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("freeFormatDataAppend", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("defaultCallHandling-2", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("gsm-SCFAddress-2", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("serviceKey-2", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("freeFormatData-2", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("freeFormatDataAppend-2", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("mscServerIndication", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 42))
];

/**
 * @summary The Trailing Root Component Types of TermCAMELRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermCAMELRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermCAMELRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermCAMELRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermCAMELRecord: $.ASN1Decoder<TermCAMELRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermCAMELRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermCAMELRecord (el: _Element): TermCAMELRecord {
    if (!_cached_decoder_for_TermCAMELRecord) { _cached_decoder_for_TermCAMELRecord = function (el: _Element): TermCAMELRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordtype!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let interrogationTime!: OCTET_STRING;
    let destinationRoutingAddress!: OCTET_STRING[];
    let gsm_SCFAddress!: OCTET_STRING;
    let serviceKey!: INTEGER;
    let networkCallReference: OPTIONAL<OCTET_STRING>;
    let mSCAddress: OPTIONAL<OCTET_STRING>;
    let defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let calledNumber!: OCTET_STRING;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let numberOfDPEncountered: OPTIONAL<INTEGER>;
    let levelOfCAMELService: OPTIONAL<TermCAMELRecord_levelOfCAMELService>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    let freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    let defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    let gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    let serviceKey_2: OPTIONAL<INTEGER>;
    let freeFormatData_2: OPTIONAL<OCTET_STRING>;
    let freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    let mscServerIndication: OPTIONAL<BOOLEAN>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<TermCAMELRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<TermCAMELRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<TermCAMELRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<TermCAMELRecord_jIPQuryStatus>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordtype": (_el: _Element): void => { recordtype = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interrogationTime": (_el: _Element): void => { interrogationTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "gsm-SCFAddress": (_el: _Element): void => { gsm_SCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "networkCallReference": (_el: _Element): void => { networkCallReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCAddress": (_el: _Element): void => { mSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "defaultCallHandling": (_el: _Element): void => { defaultCallHandling = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfDPEncountered": (_el: _Element): void => { numberOfDPEncountered = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "levelOfCAMELService": (_el: _Element): void => { levelOfCAMELService = $._decode_implicit<TermCAMELRecord_levelOfCAMELService>(() => _decode_TermCAMELRecord_levelOfCAMELService)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELCallLegInformation": (_el: _Element): void => { cAMELCallLegInformation = $._decode_implicit<CAMELInformation[]>(() => $._decodeSequenceOf<CAMELInformation>(() => _decode_CAMELInformation))(_el); },
        "freeFormatDataAppend": (_el: _Element): void => { freeFormatDataAppend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "defaultCallHandling-2": (_el: _Element): void => { defaultCallHandling_2 = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "gsm-SCFAddress-2": (_el: _Element): void => { gsm_SCFAddress_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey-2": (_el: _Element): void => { serviceKey_2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "freeFormatData-2": (_el: _Element): void => { freeFormatData_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatDataAppend-2": (_el: _Element): void => { freeFormatDataAppend_2 = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mscServerIndication": (_el: _Element): void => { mscServerIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<TermCAMELRecord_lrnSoInd>(() => _decode_TermCAMELRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<TermCAMELRecord_lrnQuryStatus>(() => _decode_TermCAMELRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<TermCAMELRecord_jIPSoInd>(() => _decode_TermCAMELRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<TermCAMELRecord_jIPQuryStatus>(() => _decode_TermCAMELRecord_jIPQuryStatus)(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TermCAMELRecord,
        _extension_additions_list_spec_for_TermCAMELRecord,
        _root_component_type_list_2_spec_for_TermCAMELRecord,
        undefined,
    );
    return new TermCAMELRecord( /* SET_CONSTRUCTOR_CALL */
        recordtype,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        interrogationTime,
        destinationRoutingAddress,
        gsm_SCFAddress,
        serviceKey,
        networkCallReference,
        mSCAddress,
        defaultCallHandling,
        recordExtensions,
        calledNumber,
        callingNumber,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        numberOfDPEncountered,
        levelOfCAMELService,
        freeFormatData,
        cAMELCallLegInformation,
        freeFormatDataAppend,
        defaultCallHandling_2,
        gsm_SCFAddress_2,
        serviceKey_2,
        freeFormatData_2,
        freeFormatDataAppend_2,
        mscServerIndication,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        partialRecordType
    );
}; }
    return _cached_decoder_for_TermCAMELRecord(el);
}

let _cached_encoder_for_TermCAMELRecord: $.ASN1Encoder<TermCAMELRecord> | null = null;

/**
 * @summary Encodes a(n) TermCAMELRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermCAMELRecord, encoded as an ASN.1 Element.
 */
export
function _encode_TermCAMELRecord (value: TermCAMELRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermCAMELRecord) { _cached_encoder_for_TermCAMELRecord = function (value: TermCAMELRecord, _elGetter: $.ASN1Encoder<TermCAMELRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordtype, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.interrogationTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.destinationRoutingAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    if (value.networkCallReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.networkCallReference, $.BER));
    }
    if (value.mSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.mSCAddress, $.BER));
    }
    if (value.defaultCallHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 22, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.numberOfDPEncountered !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.numberOfDPEncountered, $.BER));
    }
    if (value.levelOfCAMELService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_TermCAMELRecord_levelOfCAMELService, $.BER)(value.levelOfCAMELService, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.cAMELCallLegInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeSequenceOf<CAMELInformation>(() => _encode_CAMELInformation, $.BER), $.BER)(value.cAMELCallLegInformation, $.BER));
    }
    if (value.freeFormatDataAppend !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend, $.BER));
    }
    if (value.defaultCallHandling_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling_2, $.BER));
    }
    if (value.gsm_SCFAddress_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress_2, $.BER));
    }
    if (value.serviceKey_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeInteger, $.BER)(value.serviceKey_2, $.BER));
    }
    if (value.freeFormatData_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.freeFormatData_2, $.BER));
    }
    if (value.freeFormatDataAppend_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend_2, $.BER));
    }
    if (value.mscServerIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeBoolean, $.BER)(value.mscServerIndication, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_TermCAMELRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_TermCAMELRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_TermCAMELRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_TermCAMELRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TermCAMELRecord(value, elGetter);
}


/* eslint-enable */
