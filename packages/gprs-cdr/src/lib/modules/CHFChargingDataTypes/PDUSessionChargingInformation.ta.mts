/* eslint-disable */
import {
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
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../CHFChargingDataTypes/InvolvedParty.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../CHFChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";
import { RoamerInOut, _decode_RoamerInOut, _encode_RoamerInOut, _enum_for_RoamerInOut } from "../CHFChargingDataTypes/RoamerInOut.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../CHFChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { NetworkSliceInstanceID, _decode_NetworkSliceInstanceID, _encode_NetworkSliceInstanceID } from "../CHFChargingDataTypes/NetworkSliceInstanceID.ta.mjs";
import { PDUSessionType, _decode_PDUSessionType, _encode_PDUSessionType, _enum_for_PDUSessionType } from "../CHFChargingDataTypes/PDUSessionType.ta.mjs";
import { PDUSessionChargingInformation_sSCMode, _decode_PDUSessionChargingInformation_sSCMode, _encode_PDUSessionChargingInformation_sSCMode } from "../CHFChargingDataTypes/PDUSessionChargingInformation-sSCMode.ta.mjs";
import { ServingNetworkFunctionID, _decode_ServingNetworkFunctionID, _encode_ServingNetworkFunctionID } from "../CHFChargingDataTypes/ServingNetworkFunctionID.ta.mjs";
import { PDUAddress, _decode_PDUAddress, _encode_PDUAddress } from "../CHFChargingDataTypes/PDUAddress.ta.mjs";
import { AuthorizedQoSInformation, _decode_AuthorizedQoSInformation, _encode_AuthorizedQoSInformation } from "../CHFChargingDataTypes/AuthorizedQoSInformation.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CHFChargingDataTypes/Diagnostics.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../CHFChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../CHFChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { NGRANSecondaryRATUsageReport, _decode_NGRANSecondaryRATUsageReport, _encode_NGRANSecondaryRATUsageReport } from "../CHFChargingDataTypes/NGRANSecondaryRATUsageReport.ta.mjs";
import { SubscribedQoSInformation, _decode_SubscribedQoSInformation, _encode_SubscribedQoSInformation } from "../CHFChargingDataTypes/SubscribedQoSInformation.ta.mjs";
import { SessionAMBR, _decode_SessionAMBR, _encode_SessionAMBR } from "../CHFChargingDataTypes/SessionAMBR.ta.mjs";
import { DNNSelectionMode, _decode_DNNSelectionMode, _encode_DNNSelectionMode, _enum_for_DNNSelectionMode } from "../CHFChargingDataTypes/DNNSelectionMode.ta.mjs";


/**
 * @summary PDUSessionChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionChargingInformation ::= SET {
 *    pDUSessionChargingID         [0] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    userIdentifier               [1] InvolvedParty OPTIONAL,
 *    userEquipmentInfo            [2] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    userLocationInformation      [3] IMPLICIT OCTET STRING OPTIONAL,
 *    userRoamerInOut              [4] IMPLICIT RoamerInOut OPTIONAL,
 *    presenceReportingAreaInfo    [5] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    pDUSessionId                 [6] IMPLICIT INTEGER ( 0 .. 255 ),
 *    networkSliceInstanceID       [7] IMPLICIT NetworkSliceInstanceID OPTIONAL,
 *    pDUType                      [8] IMPLICIT PDUSessionType OPTIONAL,
 *    sSCMode                      [9] IMPLICIT INTEGER {
 *       sSCMode1    ( 1 ),
 *       sSCMode2    ( 2 ),
 *       sSCMode3    ( 3 )} OPTIONAL,
 *    sUPIPLMNIdentifier           [10] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    servingNetworkFunctionID     [11] IMPLICIT SEQUENCE  OF
 *       ServingNetworkFunctionID OPTIONAL,
 *    rATType                      [12] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    dataNetworkNameIdentifier    [13] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pDUAddress                   [14] IMPLICIT PDUAddress OPTIONAL,
 *    authorizedQoSInformation     [15] IMPLICIT AuthorizedQoSInformation OPTIONAL,
 *    uETimeZone                   [16] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    pDUSessionstartTime          [17] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    pDUSessionstopTime           [18] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    diagnostics                  [19] Diagnostics OPTIONAL,
 *    chargingCharacteristics      [20] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode            [21] IMPLICIT ChChSelectionMode OPTIONAL,
 *    threeGPPPSDataOffStatus      [22] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    rANSecondaryRATUsageReport   [23] IMPLICIT SEQUENCE  OF
 *       NGRANSecondaryRATUsageReport OPTIONAL,
 *    subscribedQoSInformation     [24] IMPLICIT SubscribedQoSInformation OPTIONAL,
 *    authorizedSessionAMBR        [25] IMPLICIT SessionAMBR OPTIONAL,
 *    subscribedSessionAMBR        [26] IMPLICIT SessionAMBR OPTIONAL,
 *    servingCNPLMNID              [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    sUPIunauthenticatedFlag      [28] IMPLICIT NULL OPTIONAL,
 *    dNNSelectionMode             [29] IMPLICIT DNNSelectionMode OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PDUSessionChargingInformation {
    /**
     * @summary `pDUSessionChargingID`.
     * @public
     * @readonly
     */
    readonly pDUSessionChargingID: INTEGER;
    /**
     * @summary `userIdentifier`.
     * @public
     * @readonly
     */
    readonly userIdentifier: OPTIONAL<InvolvedParty>;
    /**
     * @summary `userEquipmentInfo`.
     * @public
     * @readonly
     */
    readonly userEquipmentInfo: OPTIONAL<SubscriberEquipmentNumber>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userRoamerInOut`.
     * @public
     * @readonly
     */
    readonly userRoamerInOut: OPTIONAL<RoamerInOut>;
    /**
     * @summary `presenceReportingAreaInfo`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    /**
     * @summary `pDUSessionId`.
     * @public
     * @readonly
     */
    readonly pDUSessionId: INTEGER;
    /**
     * @summary `networkSliceInstanceID`.
     * @public
     * @readonly
     */
    readonly networkSliceInstanceID: OPTIONAL<NetworkSliceInstanceID>;
    /**
     * @summary `pDUType`.
     * @public
     * @readonly
     */
    readonly pDUType: OPTIONAL<PDUSessionType>;
    /**
     * @summary `sSCMode`.
     * @public
     * @readonly
     */
    readonly sSCMode: OPTIONAL<PDUSessionChargingInformation_sSCMode>;
    /**
     * @summary `sUPIPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly sUPIPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingNetworkFunctionID`.
     * @public
     * @readonly
     */
    readonly servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `dataNetworkNameIdentifier`.
     * @public
     * @readonly
     */
    readonly dataNetworkNameIdentifier: OPTIONAL<IA5String>;
    /**
     * @summary `pDUAddress`.
     * @public
     * @readonly
     */
    readonly pDUAddress: OPTIONAL<PDUAddress>;
    /**
     * @summary `authorizedQoSInformation`.
     * @public
     * @readonly
     */
    readonly authorizedQoSInformation: OPTIONAL<AuthorizedQoSInformation>;
    /**
     * @summary `uETimeZone`.
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDUSessionstartTime`.
     * @public
     * @readonly
     */
    readonly pDUSessionstartTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDUSessionstopTime`.
     * @public
     * @readonly
     */
    readonly pDUSessionstopTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `chargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `rANSecondaryRATUsageReport`.
     * @public
     * @readonly
     */
    readonly rANSecondaryRATUsageReport: OPTIONAL<NGRANSecondaryRATUsageReport[]>;
    /**
     * @summary `subscribedQoSInformation`.
     * @public
     * @readonly
     */
    readonly subscribedQoSInformation: OPTIONAL<SubscribedQoSInformation>;
    /**
     * @summary `authorizedSessionAMBR`.
     * @public
     * @readonly
     */
    readonly authorizedSessionAMBR: OPTIONAL<SessionAMBR>;
    /**
     * @summary `subscribedSessionAMBR`.
     * @public
     * @readonly
     */
    readonly subscribedSessionAMBR: OPTIONAL<SessionAMBR>;
    /**
     * @summary `servingCNPLMNID`.
     * @public
     * @readonly
     */
    readonly servingCNPLMNID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sUPIunauthenticatedFlag`.
     * @public
     * @readonly
     */
    readonly sUPIunauthenticatedFlag: OPTIONAL<NULL>;
    /**
     * @summary `dNNSelectionMode`.
     * @public
     * @readonly
     */
    readonly dNNSelectionMode: OPTIONAL<DNNSelectionMode>;

    constructor (
        pDUSessionChargingID: INTEGER,
        userIdentifier: OPTIONAL<InvolvedParty>,
        userEquipmentInfo: OPTIONAL<SubscriberEquipmentNumber>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        userRoamerInOut: OPTIONAL<RoamerInOut>,
        presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>,
        pDUSessionId: INTEGER,
        networkSliceInstanceID: OPTIONAL<NetworkSliceInstanceID>,
        pDUType: OPTIONAL<PDUSessionType>,
        sSCMode: OPTIONAL<PDUSessionChargingInformation_sSCMode>,
        sUPIPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>,
        rATType: OPTIONAL<INTEGER>,
        dataNetworkNameIdentifier: OPTIONAL<IA5String>,
        pDUAddress: OPTIONAL<PDUAddress>,
        authorizedQoSInformation: OPTIONAL<AuthorizedQoSInformation>,
        uETimeZone: OPTIONAL<OCTET_STRING>,
        pDUSessionstartTime: OPTIONAL<OCTET_STRING>,
        pDUSessionstopTime: OPTIONAL<OCTET_STRING>,
        diagnostics: OPTIONAL<Diagnostics>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>,
        rANSecondaryRATUsageReport: OPTIONAL<NGRANSecondaryRATUsageReport[]>,
        subscribedQoSInformation: OPTIONAL<SubscribedQoSInformation>,
        authorizedSessionAMBR: OPTIONAL<SessionAMBR>,
        subscribedSessionAMBR: OPTIONAL<SessionAMBR>,
        servingCNPLMNID: OPTIONAL<OCTET_STRING>,
        sUPIunauthenticatedFlag: OPTIONAL<NULL>,
        dNNSelectionMode: OPTIONAL<DNNSelectionMode>
    ) {
        this.pDUSessionChargingID = pDUSessionChargingID;
        this.userIdentifier = userIdentifier;
        this.userEquipmentInfo = userEquipmentInfo;
        this.userLocationInformation = userLocationInformation;
        this.userRoamerInOut = userRoamerInOut;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.pDUSessionId = pDUSessionId;
        this.networkSliceInstanceID = networkSliceInstanceID;
        this.pDUType = pDUType;
        this.sSCMode = sSCMode;
        this.sUPIPLMNIdentifier = sUPIPLMNIdentifier;
        this.servingNetworkFunctionID = servingNetworkFunctionID;
        this.rATType = rATType;
        this.dataNetworkNameIdentifier = dataNetworkNameIdentifier;
        this.pDUAddress = pDUAddress;
        this.authorizedQoSInformation = authorizedQoSInformation;
        this.uETimeZone = uETimeZone;
        this.pDUSessionstartTime = pDUSessionstartTime;
        this.pDUSessionstopTime = pDUSessionstopTime;
        this.diagnostics = diagnostics;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.rANSecondaryRATUsageReport = rANSecondaryRATUsageReport;
        this.subscribedQoSInformation = subscribedQoSInformation;
        this.authorizedSessionAMBR = authorizedSessionAMBR;
        this.subscribedSessionAMBR = subscribedSessionAMBR;
        this.servingCNPLMNID = servingCNPLMNID;
        this.sUPIunauthenticatedFlag = sUPIunauthenticatedFlag;
        this.dNNSelectionMode = dNNSelectionMode;
    
        if (((typeof this.pDUSessionChargingID === "bigint" ? Number(this.pDUSessionChargingID) : this.pDUSessionChargingID) < 0 || (typeof this.pDUSessionChargingID === "bigint" ? Number(this.pDUSessionChargingID) : this.pDUSessionChargingID) > 4294967295)) {
            throw new ASN1OverflowError("PDUSessionChargingInformation.pDUSessionChargingID violates INTEGER range");
        }
        if (((typeof this.pDUSessionId === "bigint" ? Number(this.pDUSessionId) : this.pDUSessionId) < 0 || (typeof this.pDUSessionId === "bigint" ? Number(this.pDUSessionId) : this.pDUSessionId) > 255)) {
            throw new ASN1OverflowError("PDUSessionChargingInformation.pDUSessionId violates INTEGER range");
        }
        if (this.sUPIPLMNIdentifier !== undefined && (this.sUPIPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.sUPIPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("PDUSessionChargingInformation.rATType violates INTEGER range");
        }
        if (this.dataNetworkNameIdentifier !== undefined && (this.dataNetworkNameIdentifier.length < 1 || this.dataNetworkNameIdentifier.length > 63)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.dataNetworkNameIdentifier violates SIZE constraint");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.uETimeZone violates SIZE constraint");
        }
        if (this.pDUSessionstartTime !== undefined && (this.pDUSessionstartTime.length !== 9)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.pDUSessionstartTime violates SIZE constraint");
        }
        if (this.pDUSessionstopTime !== undefined && (this.pDUSessionstopTime.length !== 9)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.pDUSessionstopTime violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingCNPLMNID !== undefined && (this.servingCNPLMNID.length !== 3)) {
            throw new ASN1SizeError("PDUSessionChargingInformation.servingCNPLMNID violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PDUSessionChargingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PDUSessionChargingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUSessionChargingInformation`.
     * @returns {PDUSessionChargingInformation}
     */
    public static _from_object (_o: { [_K in keyof (PDUSessionChargingInformation)]: (PDUSessionChargingInformation)[_K] }): PDUSessionChargingInformation {
        return new PDUSessionChargingInformation(_o.pDUSessionChargingID, _o.userIdentifier, _o.userEquipmentInfo, _o.userLocationInformation, _o.userRoamerInOut, _o.presenceReportingAreaInfo, _o.pDUSessionId, _o.networkSliceInstanceID, _o.pDUType, _o.sSCMode, _o.sUPIPLMNIdentifier, _o.servingNetworkFunctionID, _o.rATType, _o.dataNetworkNameIdentifier, _o.pDUAddress, _o.authorizedQoSInformation, _o.uETimeZone, _o.pDUSessionstartTime, _o.pDUSessionstopTime, _o.diagnostics, _o.chargingCharacteristics, _o.chChSelectionMode, _o.threeGPPPSDataOffStatus, _o.rANSecondaryRATUsageReport, _o.subscribedQoSInformation, _o.authorizedSessionAMBR, _o.subscribedSessionAMBR, _o.servingCNPLMNID, _o.sUPIunauthenticatedFlag, _o.dNNSelectionMode);
    }

        /**
         * @summary The enum used as the type of the component `userRoamerInOut`
         * @public
         * @static
         */

    public static _enum_for_userRoamerInOut = _enum_for_RoamerInOut;        /**
         * @summary The enum used as the type of the component `pDUType`
         * @public
         * @static
         */

    public static _enum_for_pDUType = _enum_for_PDUSessionType;        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;        /**
         * @summary The enum used as the type of the component `dNNSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_dNNSelectionMode = _enum_for_DNNSelectionMode;
}

/**
 * @summary The Leading Root Component Types of PDUSessionChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDUSessionChargingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pDUSessionChargingID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userIdentifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("userEquipmentInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("userRoamerInOut", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pDUSessionId", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("networkSliceInstanceID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pDUType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sSCMode", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sUPIPLMNIdentifier", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("servingNetworkFunctionID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("dataNetworkNameIdentifier", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("pDUAddress", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("authorizedQoSInformation", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("pDUSessionstartTime", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("pDUSessionstopTime", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("rANSecondaryRATUsageReport", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("subscribedQoSInformation", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("authorizedSessionAMBR", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("subscribedSessionAMBR", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("servingCNPLMNID", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("sUPIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("dNNSelectionMode", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of PDUSessionChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDUSessionChargingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDUSessionChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDUSessionChargingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDUSessionChargingInformation: $.ASN1Decoder<PDUSessionChargingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUSessionChargingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUSessionChargingInformation (el: _Element): PDUSessionChargingInformation {
    if (!_cached_decoder_for_PDUSessionChargingInformation) { _cached_decoder_for_PDUSessionChargingInformation = function (el: _Element): PDUSessionChargingInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let pDUSessionChargingID!: INTEGER;
    let userIdentifier: OPTIONAL<InvolvedParty>;
    let userEquipmentInfo: OPTIONAL<SubscriberEquipmentNumber>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let userRoamerInOut: OPTIONAL<RoamerInOut>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let pDUSessionId!: INTEGER;
    let networkSliceInstanceID: OPTIONAL<NetworkSliceInstanceID>;
    let pDUType: OPTIONAL<PDUSessionType>;
    let sSCMode: OPTIONAL<PDUSessionChargingInformation_sSCMode>;
    let sUPIPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>;
    let rATType: OPTIONAL<INTEGER>;
    let dataNetworkNameIdentifier: OPTIONAL<IA5String>;
    let pDUAddress: OPTIONAL<PDUAddress>;
    let authorizedQoSInformation: OPTIONAL<AuthorizedQoSInformation>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
    let pDUSessionstartTime: OPTIONAL<OCTET_STRING>;
    let pDUSessionstopTime: OPTIONAL<OCTET_STRING>;
    let diagnostics: OPTIONAL<Diagnostics>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let rANSecondaryRATUsageReport: OPTIONAL<NGRANSecondaryRATUsageReport[]>;
    let subscribedQoSInformation: OPTIONAL<SubscribedQoSInformation>;
    let authorizedSessionAMBR: OPTIONAL<SessionAMBR>;
    let subscribedSessionAMBR: OPTIONAL<SessionAMBR>;
    let servingCNPLMNID: OPTIONAL<OCTET_STRING>;
    let sUPIunauthenticatedFlag: OPTIONAL<NULL>;
    let dNNSelectionMode: OPTIONAL<DNNSelectionMode>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "pDUSessionChargingID": (_el: _Element): void => { pDUSessionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userIdentifier": (_el: _Element): void => { userIdentifier = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "userEquipmentInfo": (_el: _Element): void => { userEquipmentInfo = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userRoamerInOut": (_el: _Element): void => { userRoamerInOut = $._decode_implicit<RoamerInOut>(() => _decode_RoamerInOut)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "pDUSessionId": (_el: _Element): void => { pDUSessionId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "networkSliceInstanceID": (_el: _Element): void => { networkSliceInstanceID = $._decode_implicit<NetworkSliceInstanceID>(() => _decode_NetworkSliceInstanceID)(_el); },
        "pDUType": (_el: _Element): void => { pDUType = $._decode_implicit<PDUSessionType>(() => _decode_PDUSessionType)(_el); },
        "sSCMode": (_el: _Element): void => { sSCMode = $._decode_implicit<PDUSessionChargingInformation_sSCMode>(() => _decode_PDUSessionChargingInformation_sSCMode)(_el); },
        "sUPIPLMNIdentifier": (_el: _Element): void => { sUPIPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNetworkFunctionID": (_el: _Element): void => { servingNetworkFunctionID = $._decode_implicit<ServingNetworkFunctionID[]>(() => $._decodeSequenceOf<ServingNetworkFunctionID>(() => _decode_ServingNetworkFunctionID))(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataNetworkNameIdentifier": (_el: _Element): void => { dataNetworkNameIdentifier = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pDUAddress": (_el: _Element): void => { pDUAddress = $._decode_implicit<PDUAddress>(() => _decode_PDUAddress)(_el); },
        "authorizedQoSInformation": (_el: _Element): void => { authorizedQoSInformation = $._decode_implicit<AuthorizedQoSInformation>(() => _decode_AuthorizedQoSInformation)(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDUSessionstartTime": (_el: _Element): void => { pDUSessionstartTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDUSessionstopTime": (_el: _Element): void => { pDUSessionstopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "rANSecondaryRATUsageReport": (_el: _Element): void => { rANSecondaryRATUsageReport = $._decode_implicit<NGRANSecondaryRATUsageReport[]>(() => $._decodeSequenceOf<NGRANSecondaryRATUsageReport>(() => _decode_NGRANSecondaryRATUsageReport))(_el); },
        "subscribedQoSInformation": (_el: _Element): void => { subscribedQoSInformation = $._decode_implicit<SubscribedQoSInformation>(() => _decode_SubscribedQoSInformation)(_el); },
        "authorizedSessionAMBR": (_el: _Element): void => { authorizedSessionAMBR = $._decode_implicit<SessionAMBR>(() => _decode_SessionAMBR)(_el); },
        "subscribedSessionAMBR": (_el: _Element): void => { subscribedSessionAMBR = $._decode_implicit<SessionAMBR>(() => _decode_SessionAMBR)(_el); },
        "servingCNPLMNID": (_el: _Element): void => { servingCNPLMNID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sUPIunauthenticatedFlag": (_el: _Element): void => { sUPIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dNNSelectionMode": (_el: _Element): void => { dNNSelectionMode = $._decode_implicit<DNNSelectionMode>(() => _decode_DNNSelectionMode)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PDUSessionChargingInformation,
        _extension_additions_list_spec_for_PDUSessionChargingInformation,
        _root_component_type_list_2_spec_for_PDUSessionChargingInformation,
        undefined,
    );
    return new PDUSessionChargingInformation( /* SET_CONSTRUCTOR_CALL */
        pDUSessionChargingID,
        userIdentifier,
        userEquipmentInfo,
        userLocationInformation,
        userRoamerInOut,
        presenceReportingAreaInfo,
        pDUSessionId,
        networkSliceInstanceID,
        pDUType,
        sSCMode,
        sUPIPLMNIdentifier,
        servingNetworkFunctionID,
        rATType,
        dataNetworkNameIdentifier,
        pDUAddress,
        authorizedQoSInformation,
        uETimeZone,
        pDUSessionstartTime,
        pDUSessionstopTime,
        diagnostics,
        chargingCharacteristics,
        chChSelectionMode,
        threeGPPPSDataOffStatus,
        rANSecondaryRATUsageReport,
        subscribedQoSInformation,
        authorizedSessionAMBR,
        subscribedSessionAMBR,
        servingCNPLMNID,
        sUPIunauthenticatedFlag,
        dNNSelectionMode
    );
}; }
    return _cached_decoder_for_PDUSessionChargingInformation(el);
}

let _cached_encoder_for_PDUSessionChargingInformation: $.ASN1Encoder<PDUSessionChargingInformation> | null = null;

/**
 * @summary Encodes a(n) PDUSessionChargingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUSessionChargingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PDUSessionChargingInformation (value: PDUSessionChargingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUSessionChargingInformation) { _cached_encoder_for_PDUSessionChargingInformation = function (value: PDUSessionChargingInformation, _elGetter: $.ASN1Encoder<PDUSessionChargingInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.pDUSessionChargingID, $.BER));
    if (value.userIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_InvolvedParty, $.BER)(value.userIdentifier, $.BER));
    }
    if (value.userEquipmentInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SubscriberEquipmentNumber, $.BER)(value.userEquipmentInfo, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.userRoamerInOut !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RoamerInOut, $.BER)(value.userRoamerInOut, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.pDUSessionId, $.BER));
    if (value.networkSliceInstanceID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_NetworkSliceInstanceID, $.BER)(value.networkSliceInstanceID, $.BER));
    }
    if (value.pDUType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PDUSessionType, $.BER)(value.pDUType, $.BER));
    }
    if (value.sSCMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PDUSessionChargingInformation_sSCMode, $.BER)(value.sSCMode, $.BER));
    }
    if (value.sUPIPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.sUPIPLMNIdentifier, $.BER));
    }
    if (value.servingNetworkFunctionID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<ServingNetworkFunctionID>(() => _encode_ServingNetworkFunctionID, $.BER), $.BER)(value.servingNetworkFunctionID, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.dataNetworkNameIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeIA5String, $.BER)(value.dataNetworkNameIdentifier, $.BER));
    }
    if (value.pDUAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_PDUAddress, $.BER)(value.pDUAddress, $.BER));
    }
    if (value.authorizedQoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_AuthorizedQoSInformation, $.BER)(value.authorizedQoSInformation, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.pDUSessionstartTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.pDUSessionstartTime, $.BER));
    }
    if (value.pDUSessionstopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.pDUSessionstopTime, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.rANSecondaryRATUsageReport !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<NGRANSecondaryRATUsageReport>(() => _encode_NGRANSecondaryRATUsageReport, $.BER), $.BER)(value.rANSecondaryRATUsageReport, $.BER));
    }
    if (value.subscribedQoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_SubscribedQoSInformation, $.BER)(value.subscribedQoSInformation, $.BER));
    }
    if (value.authorizedSessionAMBR !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_SessionAMBR, $.BER)(value.authorizedSessionAMBR, $.BER));
    }
    if (value.subscribedSessionAMBR !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_SessionAMBR, $.BER)(value.subscribedSessionAMBR, $.BER));
    }
    if (value.servingCNPLMNID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servingCNPLMNID, $.BER));
    }
    if (value.sUPIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeNull, $.BER)(value.sUPIunauthenticatedFlag, $.BER));
    }
    if (value.dNNSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_DNNSelectionMode, $.BER)(value.dNNSelectionMode, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PDUSessionChargingInformation(value, elGetter);
}


/* eslint-enable */
