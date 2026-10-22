/* eslint-disable */
import {
    BOOLEAN,
    GraphicString,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { LocationChange, _decode_LocationChange, _encode_LocationChange } from "../CSChargingDataTypes/LocationChange.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { TransparencyInd, _decode_TransparencyInd, _encode_TransparencyInd, _enum_for_TransparencyInd } from "../CSChargingDataTypes/TransparencyInd.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { AOCParameters, _decode_AOCParameters, _encode_AOCParameters } from "../CSChargingDataTypes/AOCParameters.ta.mjs";
import { AOCParmChange, _decode_AOCParmChange, _encode_AOCParmChange } from "../CSChargingDataTypes/AOCParmChange.ta.mjs";
import { ChangeOfClassmark, _decode_ChangeOfClassmark, _encode_ChangeOfClassmark } from "../CSChargingDataTypes/ChangeOfClassmark.ta.mjs";
import { RadioChanRequested, _decode_RadioChanRequested, _encode_RadioChanRequested, _enum_for_RadioChanRequested } from "../CSChargingDataTypes/RadioChanRequested.ta.mjs";
import { TrafficChannel, _decode_TrafficChannel, _encode_TrafficChannel, _enum_for_TrafficChannel } from "../CSChargingDataTypes/TrafficChannel.ta.mjs";
import { ChangeOfRadioChannel, _decode_ChangeOfRadioChannel, _encode_ChangeOfRadioChannel } from "../CSChargingDataTypes/ChangeOfRadioChannel.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { AdditionalChgInfo, _decode_AdditionalChgInfo, _encode_AdditionalChgInfo } from "../CSChargingDataTypes/AdditionalChgInfo.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { HSCSDParmsChange, _decode_HSCSDParmsChange, _encode_HSCSDParmsChange } from "../CSChargingDataTypes/HSCSDParmsChange.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";
import { AiurRequested, _decode_AiurRequested, _encode_AiurRequested, _enum_for_AiurRequested } from "../CSChargingDataTypes/AiurRequested.ta.mjs";
import { ChannelCoding, _decode_ChannelCoding, _encode_ChannelCoding, _enum_for_ChannelCoding } from "../CSChargingDataTypes/ChannelCoding.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { MTCallRecord_lrnSoInd, _decode_MTCallRecord_lrnSoInd, _encode_MTCallRecord_lrnSoInd } from "../CSChargingDataTypes/MTCallRecord-lrnSoInd.ta.mjs";
import { MTCallRecord_lrnQuryStatus, _decode_MTCallRecord_lrnQuryStatus, _encode_MTCallRecord_lrnQuryStatus } from "../CSChargingDataTypes/MTCallRecord-lrnQuryStatus.ta.mjs";
import { MTCallRecord_jIPSoInd, _decode_MTCallRecord_jIPSoInd, _encode_MTCallRecord_jIPSoInd } from "../CSChargingDataTypes/MTCallRecord-jIPSoInd.ta.mjs";
import { MTCallRecord_jIPQuryStatus, _decode_MTCallRecord_jIPQuryStatus, _encode_MTCallRecord_jIPQuryStatus } from "../CSChargingDataTypes/MTCallRecord-jIPQuryStatus.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";
import { GuaranteedBitRate, _decode_GuaranteedBitRate, _encode_GuaranteedBitRate, _enum_for_GuaranteedBitRate } from "../CSChargingDataTypes/GuaranteedBitRate.ta.mjs";
import { MaximumBitRate, _decode_MaximumBitRate, _encode_MaximumBitRate, _enum_for_MaximumBitRate } from "../CSChargingDataTypes/MaximumBitRate.ta.mjs";
import { ReasonForServiceChange, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange, _enum_for_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";


/**
 * @summary MTCallRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    servedIMSI                [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI                [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN              [3] IMPLICIT OCTET STRING OPTIONAL,
 *    callingNumber             [4] IMPLICIT OCTET STRING OPTIONAL,
 *    connectedNumber           [5] IMPLICIT OCTET STRING OPTIONAL,
 *    recordingEntity           [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP           [7] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP           [8] TrunkGroup OPTIONAL,
 *    location                  [9] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    changeOfLocation          [10] IMPLICIT SEQUENCE  OF
 *       LocationChange OPTIONAL,
 *    basicService              [11] BasicService OPTIONAL,
 *    transparencyIndicator     [12] IMPLICIT TransparencyInd OPTIONAL,
 *    changeOfService           [13] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed         [14] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    aocParameters             [15] IMPLICIT AOCParameters OPTIONAL,
 *    changeOfAOCParms          [16] IMPLICIT SEQUENCE  OF
 *       AOCParmChange OPTIONAL,
 *    msClassmark               [17] IMPLICIT OCTET STRING OPTIONAL,
 *    changeOfClassmark         [18] IMPLICIT ChangeOfClassmark OPTIONAL,
 *    seizureTime               [19] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime                [20] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime               [21] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration              [22] IMPLICIT INTEGER,
 *    dataVolume                [23] IMPLICIT INTEGER OPTIONAL,
 *    radioChanRequested        [24] IMPLICIT RadioChanRequested OPTIONAL,
 *    radioChanUsed             [25] IMPLICIT TrafficChannel OPTIONAL,
 *    changeOfRadioChan         [26] IMPLICIT ChangeOfRadioChannel OPTIONAL,
 *    causeForTerm              [27] IMPLICIT CauseForTerm,
 *    diagnostics               [28] HLRIntResult OPTIONAL,
 *    callReference             [29] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber            [30] IMPLICIT INTEGER OPTIONAL,
 *    additionalChgInfo         [31] IMPLICIT AdditionalChgInfo OPTIONAL,
 *    recordExtensions          [32] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    networkCallReference      [33] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    mSCAddress                [34] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    hSCSDChanRequested        [35] IMPLICIT INTEGER OPTIONAL,
 *    hSCSDChanAllocated        [36] IMPLICIT INTEGER OPTIONAL,
 *    changeOfHSCSDParms        [37] IMPLICIT SEQUENCE  OF
 *       HSCSDParmsChange OPTIONAL,
 *    fnur                      [38] IMPLICIT Fnur OPTIONAL,
 *    aiurRequested             [39] IMPLICIT AiurRequested OPTIONAL,
 *    chanCodingsAcceptable     [40] IMPLICIT SEQUENCE  OF
 *       ChannelCoding OPTIONAL,
 *    chanCodingUsed            [41] IMPLICIT ChannelCoding OPTIONAL,
 *    speechVersionSupported    [42] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    speechVersionUsed         [43] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    gsm-SCFAddress            [44] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey                [45] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    systemType                [46] IMPLICIT SystemType OPTIONAL,
 *    rateIndication            [47] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationRoutNum           [48] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                  [49] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus             [50] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                   [51] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                  [52] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus             [53] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    partialRecordType         [54] IMPLICIT PartialRecordType OPTIONAL,
 *    guaranteedBitRate         [55] IMPLICIT GuaranteedBitRate OPTIONAL,
 *    maximumBitRate            [56] IMPLICIT MaximumBitRate OPTIONAL,
 *    reasonForServiceChange    [57] IMPLICIT ReasonForServiceChange OPTIONAL,
 *    serviceChangeInitiator    [58] IMPLICIT BOOLEAN OPTIONAL,
 *    iCSI2ActiveFlag           [59] IMPLICIT NULL OPTIONAL,
 *    iMS-Charging-Identifier   [60] IMPLICIT OCTET STRING OPTIONAL,
 *    privateUserID             [61] IMPLICIT GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MTCallRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `connectedNumber`.
     * @public
     * @readonly
     */
    readonly connectedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
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
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `changeOfLocation`.
     * @public
     * @readonly
     */
    readonly changeOfLocation: OPTIONAL<LocationChange[]>;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `transparencyIndicator`.
     * @public
     * @readonly
     */
    readonly transparencyIndicator: OPTIONAL<TransparencyInd>;
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
     * @summary `aocParameters`.
     * @public
     * @readonly
     */
    readonly aocParameters: OPTIONAL<AOCParameters>;
    /**
     * @summary `changeOfAOCParms`.
     * @public
     * @readonly
     */
    readonly changeOfAOCParms: OPTIONAL<AOCParmChange[]>;
    /**
     * @summary `msClassmark`.
     * @public
     * @readonly
     */
    readonly msClassmark: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `changeOfClassmark`.
     * @public
     * @readonly
     */
    readonly changeOfClassmark: OPTIONAL<ChangeOfClassmark>;
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
     * @summary `radioChanRequested`.
     * @public
     * @readonly
     */
    readonly radioChanRequested: OPTIONAL<RadioChanRequested>;
    /**
     * @summary `radioChanUsed`.
     * @public
     * @readonly
     */
    readonly radioChanUsed: OPTIONAL<TrafficChannel>;
    /**
     * @summary `changeOfRadioChan`.
     * @public
     * @readonly
     */
    readonly changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>;
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
     * @summary `additionalChgInfo`.
     * @public
     * @readonly
     */
    readonly additionalChgInfo: OPTIONAL<AdditionalChgInfo>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
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
     * @summary `hSCSDChanRequested`.
     * @public
     * @readonly
     */
    readonly hSCSDChanRequested: OPTIONAL<INTEGER>;
    /**
     * @summary `hSCSDChanAllocated`.
     * @public
     * @readonly
     */
    readonly hSCSDChanAllocated: OPTIONAL<INTEGER>;
    /**
     * @summary `changeOfHSCSDParms`.
     * @public
     * @readonly
     */
    readonly changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>;
    /**
     * @summary `fnur`.
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;
    /**
     * @summary `aiurRequested`.
     * @public
     * @readonly
     */
    readonly aiurRequested: OPTIONAL<AiurRequested>;
    /**
     * @summary `chanCodingsAcceptable`.
     * @public
     * @readonly
     */
    readonly chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>;
    /**
     * @summary `chanCodingUsed`.
     * @public
     * @readonly
     */
    readonly chanCodingUsed: OPTIONAL<ChannelCoding>;
    /**
     * @summary `speechVersionSupported`.
     * @public
     * @readonly
     */
    readonly speechVersionSupported: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `speechVersionUsed`.
     * @public
     * @readonly
     */
    readonly speechVersionUsed: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `gsm_SCFAddress`.
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<INTEGER>;
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
    readonly lrnSoInd: OPTIONAL<MTCallRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<MTCallRecord_lrnQuryStatus>;
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
    readonly jIPSoInd: OPTIONAL<MTCallRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<MTCallRecord_jIPQuryStatus>;
    /**
     * @summary `partialRecordType`.
     * @public
     * @readonly
     */
    readonly partialRecordType: OPTIONAL<PartialRecordType>;
    /**
     * @summary `guaranteedBitRate`.
     * @public
     * @readonly
     */
    readonly guaranteedBitRate: OPTIONAL<GuaranteedBitRate>;
    /**
     * @summary `maximumBitRate`.
     * @public
     * @readonly
     */
    readonly maximumBitRate: OPTIONAL<MaximumBitRate>;
    /**
     * @summary `reasonForServiceChange`.
     * @public
     * @readonly
     */
    readonly reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    /**
     * @summary `serviceChangeInitiator`.
     * @public
     * @readonly
     */
    readonly serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iCSI2ActiveFlag`.
     * @public
     * @readonly
     */
    readonly iCSI2ActiveFlag: OPTIONAL<NULL>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `privateUserID`.
     * @public
     * @readonly
     */
    readonly privateUserID: OPTIONAL<GraphicString>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        callingNumber: OPTIONAL<OCTET_STRING>,
        connectedNumber: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        location: OPTIONAL<LocationAreaAndCell>,
        changeOfLocation: OPTIONAL<LocationChange[]>,
        basicService: OPTIONAL<BasicService>,
        transparencyIndicator: OPTIONAL<TransparencyInd>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        aocParameters: OPTIONAL<AOCParameters>,
        changeOfAOCParms: OPTIONAL<AOCParmChange[]>,
        msClassmark: OPTIONAL<OCTET_STRING>,
        changeOfClassmark: OPTIONAL<ChangeOfClassmark>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        radioChanRequested: OPTIONAL<RadioChanRequested>,
        radioChanUsed: OPTIONAL<TrafficChannel>,
        changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        additionalChgInfo: OPTIONAL<AdditionalChgInfo>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        networkCallReference: OPTIONAL<OCTET_STRING>,
        mSCAddress: OPTIONAL<OCTET_STRING>,
        hSCSDChanRequested: OPTIONAL<INTEGER>,
        hSCSDChanAllocated: OPTIONAL<INTEGER>,
        changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>,
        fnur: OPTIONAL<Fnur>,
        aiurRequested: OPTIONAL<AiurRequested>,
        chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>,
        chanCodingUsed: OPTIONAL<ChannelCoding>,
        speechVersionSupported: OPTIONAL<OCTET_STRING>,
        speechVersionUsed: OPTIONAL<OCTET_STRING>,
        gsm_SCFAddress: OPTIONAL<OCTET_STRING>,
        serviceKey: OPTIONAL<INTEGER>,
        systemType: OPTIONAL<SystemType>,
        rateIndication: OPTIONAL<OCTET_STRING>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<MTCallRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<MTCallRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<MTCallRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<MTCallRecord_jIPQuryStatus>,
        partialRecordType: OPTIONAL<PartialRecordType>,
        guaranteedBitRate: OPTIONAL<GuaranteedBitRate>,
        maximumBitRate: OPTIONAL<MaximumBitRate>,
        reasonForServiceChange: OPTIONAL<ReasonForServiceChange>,
        serviceChangeInitiator: OPTIONAL<BOOLEAN>,
        iCSI2ActiveFlag: OPTIONAL<NULL>,
        iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        privateUserID: OPTIONAL<GraphicString>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.callingNumber = callingNumber;
        this.connectedNumber = connectedNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.location = location;
        this.changeOfLocation = changeOfLocation;
        this.basicService = basicService;
        this.transparencyIndicator = transparencyIndicator;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.aocParameters = aocParameters;
        this.changeOfAOCParms = changeOfAOCParms;
        this.msClassmark = msClassmark;
        this.changeOfClassmark = changeOfClassmark;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.radioChanRequested = radioChanRequested;
        this.radioChanUsed = radioChanUsed;
        this.changeOfRadioChan = changeOfRadioChan;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.additionalChgInfo = additionalChgInfo;
        this.recordExtensions = recordExtensions;
        this.networkCallReference = networkCallReference;
        this.mSCAddress = mSCAddress;
        this.hSCSDChanRequested = hSCSDChanRequested;
        this.hSCSDChanAllocated = hSCSDChanAllocated;
        this.changeOfHSCSDParms = changeOfHSCSDParms;
        this.fnur = fnur;
        this.aiurRequested = aiurRequested;
        this.chanCodingsAcceptable = chanCodingsAcceptable;
        this.chanCodingUsed = chanCodingUsed;
        this.speechVersionSupported = speechVersionSupported;
        this.speechVersionUsed = speechVersionUsed;
        this.gsm_SCFAddress = gsm_SCFAddress;
        this.serviceKey = serviceKey;
        this.systemType = systemType;
        this.rateIndication = rateIndication;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.partialRecordType = partialRecordType;
        this.guaranteedBitRate = guaranteedBitRate;
        this.maximumBitRate = maximumBitRate;
        this.reasonForServiceChange = reasonForServiceChange;
        this.serviceChangeInitiator = serviceChangeInitiator;
        this.iCSI2ActiveFlag = iCSI2ActiveFlag;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.privateUserID = privateUserID;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MTCallRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MTCallRecord.servedIMEI violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MTCallRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("MTCallRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("MTCallRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("MTCallRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("MTCallRecord.callReference violates SIZE constraint");
        }
        if (this.networkCallReference !== undefined && (this.networkCallReference.length < 1 || this.networkCallReference.length > 8)) {
            throw new ASN1SizeError("MTCallRecord.networkCallReference violates SIZE constraint");
        }
        if (this.mSCAddress !== undefined && (this.mSCAddress.length < 1 || this.mSCAddress.length > 20)) {
            throw new ASN1SizeError("MTCallRecord.mSCAddress violates SIZE constraint");
        }
        if (this.speechVersionSupported !== undefined && (this.speechVersionSupported.length !== 1)) {
            throw new ASN1SizeError("MTCallRecord.speechVersionSupported violates SIZE constraint");
        }
        if (this.speechVersionUsed !== undefined && (this.speechVersionUsed.length !== 1)) {
            throw new ASN1SizeError("MTCallRecord.speechVersionUsed violates SIZE constraint");
        }
        if (this.gsm_SCFAddress !== undefined && (this.gsm_SCFAddress.length < 1 || this.gsm_SCFAddress.length > 9)) {
            throw new ASN1SizeError("MTCallRecord.gsm_SCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && (this.serviceKey < 0 || this.serviceKey > 2147483647)) {
            throw new ASN1OverflowError("MTCallRecord.serviceKey violates INTEGER range");
        }
        if (this.rateIndication !== undefined && (this.rateIndication.length !== 1)) {
            throw new ASN1SizeError("MTCallRecord.rateIndication violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("MTCallRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("MTCallRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MTCallRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MTCallRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTCallRecord`.
     * @returns {MTCallRecord}
     */
    public static _from_object (_o: { [_K in keyof (MTCallRecord)]: (MTCallRecord)[_K] }): MTCallRecord {
        return new MTCallRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.callingNumber, _o.connectedNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.location, _o.changeOfLocation, _o.basicService, _o.transparencyIndicator, _o.changeOfService, _o.supplServicesUsed, _o.aocParameters, _o.changeOfAOCParms, _o.msClassmark, _o.changeOfClassmark, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.radioChanRequested, _o.radioChanUsed, _o.changeOfRadioChan, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.additionalChgInfo, _o.recordExtensions, _o.networkCallReference, _o.mSCAddress, _o.hSCSDChanRequested, _o.hSCSDChanAllocated, _o.changeOfHSCSDParms, _o.fnur, _o.aiurRequested, _o.chanCodingsAcceptable, _o.chanCodingUsed, _o.speechVersionSupported, _o.speechVersionUsed, _o.gsm_SCFAddress, _o.serviceKey, _o.systemType, _o.rateIndication, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.partialRecordType, _o.guaranteedBitRate, _o.maximumBitRate, _o.reasonForServiceChange, _o.serviceChangeInitiator, _o.iCSI2ActiveFlag, _o.iMS_Charging_Identifier, _o.privateUserID);
    }

        /**
         * @summary The enum used as the type of the component `transparencyIndicator`
         * @public
         * @static
         */

    public static _enum_for_transparencyIndicator = _enum_for_TransparencyInd;        /**
         * @summary The enum used as the type of the component `radioChanRequested`
         * @public
         * @static
         */

    public static _enum_for_radioChanRequested = _enum_for_RadioChanRequested;        /**
         * @summary The enum used as the type of the component `radioChanUsed`
         * @public
         * @static
         */

    public static _enum_for_radioChanUsed = _enum_for_TrafficChannel;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;        /**
         * @summary The enum used as the type of the component `aiurRequested`
         * @public
         * @static
         */

    public static _enum_for_aiurRequested = _enum_for_AiurRequested;        /**
         * @summary The enum used as the type of the component `chanCodingUsed`
         * @public
         * @static
         */

    public static _enum_for_chanCodingUsed = _enum_for_ChannelCoding;        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;        /**
         * @summary The enum used as the type of the component `guaranteedBitRate`
         * @public
         * @static
         */

    public static _enum_for_guaranteedBitRate = _enum_for_GuaranteedBitRate;        /**
         * @summary The enum used as the type of the component `maximumBitRate`
         * @public
         * @static
         */

    public static _enum_for_maximumBitRate = _enum_for_MaximumBitRate;        /**
         * @summary The enum used as the type of the component `reasonForServiceChange`
         * @public
         * @static
         */

    public static _enum_for_reasonForServiceChange = _enum_for_ReasonForServiceChange;
}

/**
 * @summary The Leading Root Component Types of MTCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MTCallRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connectedNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("changeOfLocation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("transparencyIndicator", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("aocParameters", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("changeOfAOCParms", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("msClassmark", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("changeOfClassmark", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("radioChanRequested", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("radioChanUsed", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("changeOfRadioChan", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("additionalChgInfo", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("networkCallReference", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("mSCAddress", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("hSCSDChanRequested", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("hSCSDChanAllocated", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("changeOfHSCSDParms", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("aiurRequested", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("chanCodingsAcceptable", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("chanCodingUsed", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("speechVersionSupported", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("speechVersionUsed", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("gsm-SCFAddress", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("guaranteedBitRate", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("maximumBitRate", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("reasonForServiceChange", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("serviceChangeInitiator", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("iCSI2ActiveFlag", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("privateUserID", true, $.hasTag(_TagClass.context, 61))
];

/**
 * @summary The Trailing Root Component Types of MTCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MTCallRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MTCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MTCallRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MTCallRecord: $.ASN1Decoder<MTCallRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTCallRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MTCallRecord (el: _Element): MTCallRecord {
    if (!_cached_decoder_for_MTCallRecord) { _cached_decoder_for_MTCallRecord = function (el: _Element): MTCallRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let connectedNumber: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let location: OPTIONAL<LocationAreaAndCell>;
    let changeOfLocation: OPTIONAL<LocationChange[]>;
    let basicService: OPTIONAL<BasicService>;
    let transparencyIndicator: OPTIONAL<TransparencyInd>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let aocParameters: OPTIONAL<AOCParameters>;
    let changeOfAOCParms: OPTIONAL<AOCParmChange[]>;
    let msClassmark: OPTIONAL<OCTET_STRING>;
    let changeOfClassmark: OPTIONAL<ChangeOfClassmark>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let radioChanRequested: OPTIONAL<RadioChanRequested>;
    let radioChanUsed: OPTIONAL<TrafficChannel>;
    let changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let additionalChgInfo: OPTIONAL<AdditionalChgInfo>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let networkCallReference: OPTIONAL<OCTET_STRING>;
    let mSCAddress: OPTIONAL<OCTET_STRING>;
    let hSCSDChanRequested: OPTIONAL<INTEGER>;
    let hSCSDChanAllocated: OPTIONAL<INTEGER>;
    let changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>;
    let fnur: OPTIONAL<Fnur>;
    let aiurRequested: OPTIONAL<AiurRequested>;
    let chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>;
    let chanCodingUsed: OPTIONAL<ChannelCoding>;
    let speechVersionSupported: OPTIONAL<OCTET_STRING>;
    let speechVersionUsed: OPTIONAL<OCTET_STRING>;
    let gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let systemType: OPTIONAL<SystemType>;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<MTCallRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<MTCallRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<MTCallRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<MTCallRecord_jIPQuryStatus>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    let guaranteedBitRate: OPTIONAL<GuaranteedBitRate>;
    let maximumBitRate: OPTIONAL<MaximumBitRate>;
    let reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    let serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    let iCSI2ActiveFlag: OPTIONAL<NULL>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let privateUserID: OPTIONAL<GraphicString>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "connectedNumber": (_el: _Element): void => { connectedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "changeOfLocation": (_el: _Element): void => { changeOfLocation = $._decode_implicit<LocationChange[]>(() => $._decodeSequenceOf<LocationChange>(() => _decode_LocationChange))(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "transparencyIndicator": (_el: _Element): void => { transparencyIndicator = $._decode_implicit<TransparencyInd>(() => _decode_TransparencyInd)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "aocParameters": (_el: _Element): void => { aocParameters = $._decode_implicit<AOCParameters>(() => _decode_AOCParameters)(_el); },
        "changeOfAOCParms": (_el: _Element): void => { changeOfAOCParms = $._decode_implicit<AOCParmChange[]>(() => $._decodeSequenceOf<AOCParmChange>(() => _decode_AOCParmChange))(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "changeOfClassmark": (_el: _Element): void => { changeOfClassmark = $._decode_implicit<ChangeOfClassmark>(() => _decode_ChangeOfClassmark)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "radioChanRequested": (_el: _Element): void => { radioChanRequested = $._decode_implicit<RadioChanRequested>(() => _decode_RadioChanRequested)(_el); },
        "radioChanUsed": (_el: _Element): void => { radioChanUsed = $._decode_implicit<TrafficChannel>(() => _decode_TrafficChannel)(_el); },
        "changeOfRadioChan": (_el: _Element): void => { changeOfRadioChan = $._decode_implicit<ChangeOfRadioChannel>(() => _decode_ChangeOfRadioChannel)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "additionalChgInfo": (_el: _Element): void => { additionalChgInfo = $._decode_implicit<AdditionalChgInfo>(() => _decode_AdditionalChgInfo)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "networkCallReference": (_el: _Element): void => { networkCallReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCAddress": (_el: _Element): void => { mSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hSCSDChanRequested": (_el: _Element): void => { hSCSDChanRequested = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "hSCSDChanAllocated": (_el: _Element): void => { hSCSDChanAllocated = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeOfHSCSDParms": (_el: _Element): void => { changeOfHSCSDParms = $._decode_implicit<HSCSDParmsChange[]>(() => $._decodeSequenceOf<HSCSDParmsChange>(() => _decode_HSCSDParmsChange))(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); },
        "aiurRequested": (_el: _Element): void => { aiurRequested = $._decode_implicit<AiurRequested>(() => _decode_AiurRequested)(_el); },
        "chanCodingsAcceptable": (_el: _Element): void => { chanCodingsAcceptable = $._decode_implicit<ChannelCoding[]>(() => $._decodeSequenceOf<ChannelCoding>(() => _decode_ChannelCoding))(_el); },
        "chanCodingUsed": (_el: _Element): void => { chanCodingUsed = $._decode_implicit<ChannelCoding>(() => _decode_ChannelCoding)(_el); },
        "speechVersionSupported": (_el: _Element): void => { speechVersionSupported = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "speechVersionUsed": (_el: _Element): void => { speechVersionUsed = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "gsm-SCFAddress": (_el: _Element): void => { gsm_SCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<MTCallRecord_lrnSoInd>(() => _decode_MTCallRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<MTCallRecord_lrnQuryStatus>(() => _decode_MTCallRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<MTCallRecord_jIPSoInd>(() => _decode_MTCallRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<MTCallRecord_jIPQuryStatus>(() => _decode_MTCallRecord_jIPQuryStatus)(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); },
        "guaranteedBitRate": (_el: _Element): void => { guaranteedBitRate = $._decode_implicit<GuaranteedBitRate>(() => _decode_GuaranteedBitRate)(_el); },
        "maximumBitRate": (_el: _Element): void => { maximumBitRate = $._decode_implicit<MaximumBitRate>(() => _decode_MaximumBitRate)(_el); },
        "reasonForServiceChange": (_el: _Element): void => { reasonForServiceChange = $._decode_implicit<ReasonForServiceChange>(() => _decode_ReasonForServiceChange)(_el); },
        "serviceChangeInitiator": (_el: _Element): void => { serviceChangeInitiator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iCSI2ActiveFlag": (_el: _Element): void => { iCSI2ActiveFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "privateUserID": (_el: _Element): void => { privateUserID = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MTCallRecord,
        _extension_additions_list_spec_for_MTCallRecord,
        _root_component_type_list_2_spec_for_MTCallRecord,
        undefined,
    );
    return new MTCallRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        callingNumber,
        connectedNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        location,
        changeOfLocation,
        basicService,
        transparencyIndicator,
        changeOfService,
        supplServicesUsed,
        aocParameters,
        changeOfAOCParms,
        msClassmark,
        changeOfClassmark,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        radioChanRequested,
        radioChanUsed,
        changeOfRadioChan,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        additionalChgInfo,
        recordExtensions,
        networkCallReference,
        mSCAddress,
        hSCSDChanRequested,
        hSCSDChanAllocated,
        changeOfHSCSDParms,
        fnur,
        aiurRequested,
        chanCodingsAcceptable,
        chanCodingUsed,
        speechVersionSupported,
        speechVersionUsed,
        gsm_SCFAddress,
        serviceKey,
        systemType,
        rateIndication,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        partialRecordType,
        guaranteedBitRate,
        maximumBitRate,
        reasonForServiceChange,
        serviceChangeInitiator,
        iCSI2ActiveFlag,
        iMS_Charging_Identifier,
        privateUserID
    );
}; }
    return _cached_decoder_for_MTCallRecord(el);
}

let _cached_encoder_for_MTCallRecord: $.ASN1Encoder<MTCallRecord> | null = null;

/**
 * @summary Encodes a(n) MTCallRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTCallRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MTCallRecord (value: MTCallRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MTCallRecord) { _cached_encoder_for_MTCallRecord = function (value: MTCallRecord, _elGetter: $.ASN1Encoder<MTCallRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.connectedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.connectedNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.changeOfLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<LocationChange>(() => _encode_LocationChange, $.BER), $.BER)(value.changeOfLocation, $.BER));
    }
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.transparencyIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_TransparencyInd, $.BER)(value.transparencyIndicator, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    if (value.aocParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_AOCParameters, $.BER)(value.aocParameters, $.BER));
    }
    if (value.changeOfAOCParms !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<AOCParmChange>(() => _encode_AOCParmChange, $.BER), $.BER)(value.changeOfAOCParms, $.BER));
    }
    if (value.msClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    }
    if (value.changeOfClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_ChangeOfClassmark, $.BER)(value.changeOfClassmark, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 22, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    if (value.radioChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_RadioChanRequested, $.BER)(value.radioChanRequested, $.BER));
    }
    if (value.radioChanUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_TrafficChannel, $.BER)(value.radioChanUsed, $.BER));
    }
    if (value.changeOfRadioChan !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_ChangeOfRadioChannel, $.BER)(value.changeOfRadioChan, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 28, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.additionalChgInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_AdditionalChgInfo, $.BER)(value.additionalChgInfo, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.networkCallReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.networkCallReference, $.BER));
    }
    if (value.mSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeOctetString, $.BER)(value.mSCAddress, $.BER));
    }
    if (value.hSCSDChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeInteger, $.BER)(value.hSCSDChanRequested, $.BER));
    }
    if (value.hSCSDChanAllocated !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => $._encodeInteger, $.BER)(value.hSCSDChanAllocated, $.BER));
    }
    if (value.changeOfHSCSDParms !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeSequenceOf<HSCSDParmsChange>(() => _encode_HSCSDParmsChange, $.BER), $.BER)(value.changeOfHSCSDParms, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    if (value.aiurRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_AiurRequested, $.BER)(value.aiurRequested, $.BER));
    }
    if (value.chanCodingsAcceptable !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeSequenceOf<ChannelCoding>(() => _encode_ChannelCoding, $.BER), $.BER)(value.chanCodingsAcceptable, $.BER));
    }
    if (value.chanCodingUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_ChannelCoding, $.BER)(value.chanCodingUsed, $.BER));
    }
    if (value.speechVersionSupported !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeOctetString, $.BER)(value.speechVersionSupported, $.BER));
    }
    if (value.speechVersionUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeOctetString, $.BER)(value.speechVersionUsed, $.BER));
    }
    if (value.gsm_SCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => _encode_MTCallRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => _encode_MTCallRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => _encode_MTCallRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_MTCallRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    if (value.guaranteedBitRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => _encode_GuaranteedBitRate, $.BER)(value.guaranteedBitRate, $.BER));
    }
    if (value.maximumBitRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_MaximumBitRate, $.BER)(value.maximumBitRate, $.BER));
    }
    if (value.reasonForServiceChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_ReasonForServiceChange, $.BER)(value.reasonForServiceChange, $.BER));
    }
    if (value.serviceChangeInitiator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeBoolean, $.BER)(value.serviceChangeInitiator, $.BER));
    }
    if (value.iCSI2ActiveFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeNull, $.BER)(value.iCSI2ActiveFlag, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.privateUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => $._encodeGraphicString, $.BER)(value.privateUserID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MTCallRecord(value, elGetter);
}


/* eslint-enable */
