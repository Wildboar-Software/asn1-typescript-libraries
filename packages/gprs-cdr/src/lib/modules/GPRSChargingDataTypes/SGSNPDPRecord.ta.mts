/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { CAMELInformationPDP, _decode_CAMELInformationPDP, _encode_CAMELInformationPDP } from "../GPRSChargingDataTypes/CAMELInformationPDP.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";


/**
 * @summary SGSNPDPRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNPDPRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    networkInitiation           [1] IMPLICIT BOOLEAN OPTIONAL,
 *    servedIMSI                  [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    servedIMEI                  [4] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    sgsnAddress                 [5] GSNAddress OPTIONAL,
 *    msNetworkCapability         [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    routingArea                 [7] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationAreaCode            [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    cellIdentifier              [9] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    chargingID                  [10] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    ggsnAddressUsed             [11] GSNAddress,
 *    accessPointNameNI           [12] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpType                     [13] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPAddress            [14] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes        [15] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime           [16] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                    [17] IMPLICIT INTEGER,
 *    sgsnChange                  [18] IMPLICIT BOOLEAN OPTIONAL,
 *    causeForRecClosing          [19] IMPLICIT CauseForRecClosing,
 *    diagnostics                 [20] Diagnostics OPTIONAL,
 *    recordSequenceNumber        [21] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                      [22] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions            [23] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber         [24] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode            [25] IMPLICIT APNSelectionMode OPTIONAL,
 *    accessPointNameOI           [26] IMPLICIT IA5String  ( SIZE( 1 .. 37 ) ) OPTIONAL,
 *    servedMSISDN                [27] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics     [28] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    rATType                     [29] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    cAMELInformationPDP         [30] IMPLICIT CAMELInformationPDP OPTIONAL,
 *    rNCUnsentDownlinkVolume     [31] IMPLICIT INTEGER OPTIONAL,
 *    chChSelectionMode           [32] IMPLICIT ChChSelectionMode OPTIONAL,
 *    dynamicAddressFlag          [33] IMPLICIT BOOLEAN OPTIONAL,
 *    iMSIunauthenticatedFlag     [34] IMPLICIT NULL OPTIONAL,
 *    userCSGInformation          [35] IMPLICIT UserCSGInformation OPTIONAL,
 *    servedPDPPDNAddressExt      [36] PDPAddress OPTIONAL,
 *    lowPriorityIndicator        [37] IMPLICIT NULL OPTIONAL,
 *    servingNodePLMNIdentifier   [38] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt      [39] IMPLICIT CNOperatorSelectionEntity OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNPDPRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `networkInitiation`.
     * @public
     * @readonly
     */
    readonly networkInitiation: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sgsnAddress`.
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `msNetworkCapability`.
     * @public
     * @readonly
     */
    readonly msNetworkCapability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routingArea`.
     * @public
     * @readonly
     */
    readonly routingArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationAreaCode`.
     * @public
     * @readonly
     */
    readonly locationAreaCode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellIdentifier`.
     * @public
     * @readonly
     */
    readonly cellIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `ggsnAddressUsed`.
     * @public
     * @readonly
     */
    readonly ggsnAddressUsed: GSNAddress;
    /**
     * @summary `accessPointNameNI`.
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `pdpType`.
     * @public
     * @readonly
     */
    readonly pdpType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPAddress`.
     * @public
     * @readonly
     */
    readonly servedPDPAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    /**
     * @summary `recordOpeningTime`.
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `sgsnChange`.
     * @public
     * @readonly
     */
    readonly sgsnChange: OPTIONAL<BOOLEAN>;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `apnSelectionMode`.
     * @public
     * @readonly
     */
    readonly apnSelectionMode: OPTIONAL<APNSelectionMode>;
    /**
     * @summary `accessPointNameOI`.
     * @public
     * @readonly
     */
    readonly accessPointNameOI: OPTIONAL<IA5String>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `cAMELInformationPDP`.
     * @public
     * @readonly
     */
    readonly cAMELInformationPDP: OPTIONAL<CAMELInformationPDP>;
    /**
     * @summary `rNCUnsentDownlinkVolume`.
     * @public
     * @readonly
     */
    readonly rNCUnsentDownlinkVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `dynamicAddressFlag`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @public
     * @readonly
     */
    readonly iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    /**
     * @summary `userCSGInformation`.
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `lowPriorityIndicator`.
     * @public
     * @readonly
     */
    readonly lowPriorityIndicator: OPTIONAL<NULL>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;

    constructor (
        recordType: RecordType,
        networkInitiation: OPTIONAL<BOOLEAN>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        sgsnAddress: OPTIONAL<GSNAddress>,
        msNetworkCapability: OPTIONAL<OCTET_STRING>,
        routingArea: OPTIONAL<OCTET_STRING>,
        locationAreaCode: OPTIONAL<OCTET_STRING>,
        cellIdentifier: OPTIONAL<OCTET_STRING>,
        chargingID: INTEGER,
        ggsnAddressUsed: GSNAddress,
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpType: OPTIONAL<OCTET_STRING>,
        servedPDPAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        sgsnChange: OPTIONAL<BOOLEAN>,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        apnSelectionMode: OPTIONAL<APNSelectionMode>,
        accessPointNameOI: OPTIONAL<IA5String>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        rATType: OPTIONAL<INTEGER>,
        cAMELInformationPDP: OPTIONAL<CAMELInformationPDP>,
        rNCUnsentDownlinkVolume: OPTIONAL<INTEGER>,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        dynamicAddressFlag: OPTIONAL<BOOLEAN>,
        iMSIunauthenticatedFlag: OPTIONAL<NULL>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        lowPriorityIndicator: OPTIONAL<NULL>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>
    ) {
        this.recordType = recordType;
        this.networkInitiation = networkInitiation;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.sgsnAddress = sgsnAddress;
        this.msNetworkCapability = msNetworkCapability;
        this.routingArea = routingArea;
        this.locationAreaCode = locationAreaCode;
        this.cellIdentifier = cellIdentifier;
        this.chargingID = chargingID;
        this.ggsnAddressUsed = ggsnAddressUsed;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpType = pdpType;
        this.servedPDPAddress = servedPDPAddress;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.sgsnChange = sgsnChange;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.apnSelectionMode = apnSelectionMode;
        this.accessPointNameOI = accessPointNameOI;
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.rATType = rATType;
        this.cAMELInformationPDP = cAMELInformationPDP;
        this.rNCUnsentDownlinkVolume = rNCUnsentDownlinkVolume;
        this.chChSelectionMode = chChSelectionMode;
        this.dynamicAddressFlag = dynamicAddressFlag;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
        this.userCSGInformation = userCSGInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.lowPriorityIndicator = lowPriorityIndicator;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SGSNPDPRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SGSNPDPRecord.servedIMEI violates SIZE constraint");
        }
        if (this.msNetworkCapability !== undefined && (this.msNetworkCapability.length < 1 || this.msNetworkCapability.length > 8)) {
            throw new ASN1SizeError("SGSNPDPRecord.msNetworkCapability violates SIZE constraint");
        }
        if (this.routingArea !== undefined && (this.routingArea.length !== 1)) {
            throw new ASN1SizeError("SGSNPDPRecord.routingArea violates SIZE constraint");
        }
        if (this.locationAreaCode !== undefined && (this.locationAreaCode.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.locationAreaCode violates SIZE constraint");
        }
        if (this.cellIdentifier !== undefined && (this.cellIdentifier.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.cellIdentifier violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("SGSNPDPRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SGSNPDPRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpType !== undefined && (this.pdpType.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.pdpType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGSNPDPRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGSNPDPRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SGSNPDPRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.accessPointNameOI !== undefined && (this.accessPointNameOI.length < 1 || this.accessPointNameOI.length > 37)) {
            throw new ASN1SizeError("SGSNPDPRecord.accessPointNameOI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SGSNPDPRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SGSNPDPRecord.rATType violates INTEGER range");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGSNPDPRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGSNPDPRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNPDPRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNPDPRecord`.
     * @returns {SGSNPDPRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNPDPRecord)]: (SGSNPDPRecord)[_K] }): SGSNPDPRecord {
        return new SGSNPDPRecord(_o.recordType, _o.networkInitiation, _o.servedIMSI, _o.servedIMEI, _o.sgsnAddress, _o.msNetworkCapability, _o.routingArea, _o.locationAreaCode, _o.cellIdentifier, _o.chargingID, _o.ggsnAddressUsed, _o.accessPointNameNI, _o.pdpType, _o.servedPDPAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.sgsnChange, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.accessPointNameOI, _o.servedMSISDN, _o.chargingCharacteristics, _o.rATType, _o.cAMELInformationPDP, _o.rNCUnsentDownlinkVolume, _o.chChSelectionMode, _o.dynamicAddressFlag, _o.iMSIunauthenticatedFlag, _o.userCSGInformation, _o.servedPDPPDNAddressExt, _o.lowPriorityIndicator, _o.servingNodePLMNIdentifier, _o.cNOperatorSelectionEnt);
    }

        /**
         * @summary The enum used as the type of the component `apnSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_apnSelectionMode = _enum_for_APNSelectionMode;        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `cNOperatorSelectionEnt`
         * @public
         * @static
         */

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;
}

/**
 * @summary The Leading Root Component Types of SGSNPDPRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNPDPRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("networkInitiation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("msNetworkCapability", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routingArea", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("locationAreaCode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellIdentifier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ggsnAddressUsed", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pdpType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servedPDPAddress", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sgsnChange", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("apnSelectionMode", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("accessPointNameOI", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("cAMELInformationPDP", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("rNCUnsentDownlinkVolume", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("lowPriorityIndicator", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 39))
];

/**
 * @summary The Trailing Root Component Types of SGSNPDPRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNPDPRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNPDPRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNPDPRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNPDPRecord: $.ASN1Decoder<SGSNPDPRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNPDPRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNPDPRecord (el: _Element): SGSNPDPRecord {
    if (!_cached_decoder_for_SGSNPDPRecord) { _cached_decoder_for_SGSNPDPRecord = function (el: _Element): SGSNPDPRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let networkInitiation: OPTIONAL<BOOLEAN>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let sgsnAddress: OPTIONAL<GSNAddress>;
    let msNetworkCapability: OPTIONAL<OCTET_STRING>;
    let routingArea: OPTIONAL<OCTET_STRING>;
    let locationAreaCode: OPTIONAL<OCTET_STRING>;
    let cellIdentifier: OPTIONAL<OCTET_STRING>;
    let chargingID!: INTEGER;
    let ggsnAddressUsed!: GSNAddress;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpType: OPTIONAL<OCTET_STRING>;
    let servedPDPAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let sgsnChange: OPTIONAL<BOOLEAN>;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let apnSelectionMode: OPTIONAL<APNSelectionMode>;
    let accessPointNameOI: OPTIONAL<IA5String>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let rATType: OPTIONAL<INTEGER>;
    let cAMELInformationPDP: OPTIONAL<CAMELInformationPDP>;
    let rNCUnsentDownlinkVolume: OPTIONAL<INTEGER>;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let lowPriorityIndicator: OPTIONAL<NULL>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "networkInitiation": (_el: _Element): void => { networkInitiation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sgsnAddress": (_el: _Element): void => { sgsnAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "msNetworkCapability": (_el: _Element): void => { msNetworkCapability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingArea": (_el: _Element): void => { routingArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationAreaCode": (_el: _Element): void => { locationAreaCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellIdentifier": (_el: _Element): void => { cellIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ggsnAddressUsed": (_el: _Element): void => { ggsnAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpType": (_el: _Element): void => { pdpType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPAddress": (_el: _Element): void => { servedPDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfCharCondition[]>(() => $._decodeSequenceOf<ChangeOfCharCondition>(() => _decode_ChangeOfCharCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sgsnChange": (_el: _Element): void => { sgsnChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "apnSelectionMode": (_el: _Element): void => { apnSelectionMode = $._decode_implicit<APNSelectionMode>(() => _decode_APNSelectionMode)(_el); },
        "accessPointNameOI": (_el: _Element): void => { accessPointNameOI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cAMELInformationPDP": (_el: _Element): void => { cAMELInformationPDP = $._decode_implicit<CAMELInformationPDP>(() => _decode_CAMELInformationPDP)(_el); },
        "rNCUnsentDownlinkVolume": (_el: _Element): void => { rNCUnsentDownlinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "lowPriorityIndicator": (_el: _Element): void => { lowPriorityIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNPDPRecord,
        _extension_additions_list_spec_for_SGSNPDPRecord,
        _root_component_type_list_2_spec_for_SGSNPDPRecord,
        undefined,
    );
    return new SGSNPDPRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        networkInitiation,
        servedIMSI,
        servedIMEI,
        sgsnAddress,
        msNetworkCapability,
        routingArea,
        locationAreaCode,
        cellIdentifier,
        chargingID,
        ggsnAddressUsed,
        accessPointNameNI,
        pdpType,
        servedPDPAddress,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        sgsnChange,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        apnSelectionMode,
        accessPointNameOI,
        servedMSISDN,
        chargingCharacteristics,
        rATType,
        cAMELInformationPDP,
        rNCUnsentDownlinkVolume,
        chChSelectionMode,
        dynamicAddressFlag,
        iMSIunauthenticatedFlag,
        userCSGInformation,
        servedPDPPDNAddressExt,
        lowPriorityIndicator,
        servingNodePLMNIdentifier,
        cNOperatorSelectionEnt
    );
}; }
    return _cached_decoder_for_SGSNPDPRecord(el);
}

let _cached_encoder_for_SGSNPDPRecord: $.ASN1Encoder<SGSNPDPRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNPDPRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNPDPRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNPDPRecord (value: SGSNPDPRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNPDPRecord) { _cached_encoder_for_SGSNPDPRecord = function (value: SGSNPDPRecord, _elGetter: $.ASN1Encoder<SGSNPDPRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.networkInitiation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.networkInitiation, $.BER));
    }
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.sgsnAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_GSNAddress, $.BER)(value.sgsnAddress, $.BER));
    }
    if (value.msNetworkCapability !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.msNetworkCapability, $.BER));
    }
    if (value.routingArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.routingArea, $.BER));
    }
    if (value.locationAreaCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.locationAreaCode, $.BER));
    }
    if (value.cellIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.cellIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 11, () => _encode_GSNAddress, $.BER)(value.ggsnAddressUsed, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.pdpType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.pdpType, $.BER));
    }
    if (value.servedPDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_PDPAddress, $.BER)(value.servedPDPAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<ChangeOfCharCondition>(() => _encode_ChangeOfCharCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    if (value.sgsnChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.sgsnChange, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.apnSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_APNSelectionMode, $.BER)(value.apnSelectionMode, $.BER));
    }
    if (value.accessPointNameOI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeIA5String, $.BER)(value.accessPointNameOI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.cAMELInformationPDP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_CAMELInformationPDP, $.BER)(value.cAMELInformationPDP, $.BER));
    }
    if (value.rNCUnsentDownlinkVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeInteger, $.BER)(value.rNCUnsentDownlinkVolume, $.BER));
    }
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.dynamicAddressFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlag, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 36, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.lowPriorityIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeNull, $.BER)(value.lowPriorityIndicator, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNPDPRecord(value, elGetter);
}


/* eslint-enable */
