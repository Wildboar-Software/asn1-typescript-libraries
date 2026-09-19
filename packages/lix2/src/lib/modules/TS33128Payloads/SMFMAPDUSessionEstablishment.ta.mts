/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
// export { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { PDUSessionType, _decode_PDUSessionType, _encode_PDUSessionType, _enum_for_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
// export { PDUSessionType, _enum_for_PDUSessionType, PDUSessionType_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv4v6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4v6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDUSessionType, _encode_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { SMFMAUpgradeIndication, _decode_SMFMAUpgradeIndication, _encode_SMFMAUpgradeIndication } from "../TS33128Payloads/SMFMAUpgradeIndication.ta.mjs";
// export { SMFMAUpgradeIndication, _decode_SMFMAUpgradeIndication, _encode_SMFMAUpgradeIndication } from "../TS33128Payloads/SMFMAUpgradeIndication.ta.mjs";
import { SMFEPSPDNCnxInfo, _decode_SMFEPSPDNCnxInfo, _encode_SMFEPSPDNCnxInfo } from "../TS33128Payloads/SMFEPSPDNCnxInfo.ta.mjs";
// export { SMFEPSPDNCnxInfo, _decode_SMFEPSPDNCnxInfo, _encode_SMFEPSPDNCnxInfo } from "../TS33128Payloads/SMFEPSPDNCnxInfo.ta.mjs";
import { SMFMAAcceptedIndication, _decode_SMFMAAcceptedIndication, _encode_SMFMAAcceptedIndication } from "../TS33128Payloads/SMFMAAcceptedIndication.ta.mjs";
// export { SMFMAAcceptedIndication, _decode_SMFMAAcceptedIndication, _encode_SMFMAAcceptedIndication } from "../TS33128Payloads/SMFMAAcceptedIndication.ta.mjs";
import { ATSSSContainer, _decode_ATSSSContainer, _encode_ATSSSContainer } from "../TS33128Payloads/ATSSSContainer.ta.mjs";
// export { ATSSSContainer, _decode_ATSSSContainer, _encode_ATSSSContainer } from "../TS33128Payloads/ATSSSContainer.ta.mjs";
import { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
// export { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
import { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
// export { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
import { HandoverState, _decode_HandoverState, _encode_HandoverState, _enum_for_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
// export { HandoverState, _enum_for_HandoverState, HandoverState_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_preparing /* IMPORTED_LONG_ENUMERATION_ITEM */, preparing /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_prepared /* IMPORTED_LONG_ENUMERATION_ITEM */, prepared /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverState, _encode_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
import { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
// export { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
import { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
// export { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";


/**
 * @summary SMFMAPDUSessionEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAPDUSessionEstablishment ::= SEQUENCE
 * {
 *     sUPI                          [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated           [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                           [3] PEI OPTIONAL,
 *     gPSI                          [4] GPSI OPTIONAL,
 *     pDUSessionID                  [5] PDUSessionID,
 *     pDUSessionType                [6] PDUSessionType,
 *     accessInfo                    [7] SEQUENCE OF AccessInfo,
 *     sNSSAI                        [8] SNSSAI OPTIONAL,
 *     uEEndpoint                    [9] SEQUENCE OF UEEndpointAddress OPTIONAL,
 *     location                      [10] Location OPTIONAL,
 *     dNN                           [11] DNN,
 *     aMFID                         [12] AMFID OPTIONAL,
 *     hSMFURI                       [13] HSMFURI OPTIONAL,
 *     requestType                   [14] FiveGSMRequestType,
 *     sMPDUDNRequest                [15] SMPDUDNRequest OPTIONAL,
 *     servingNetwork                [16] SMFServingNetwork,
 *     oldPDUSessionID               [17] PDUSessionID OPTIONAL,
 *     mAUpgradeIndication           [18] SMFMAUpgradeIndication OPTIONAL,
 *     ePSPDNCnxInfo                 [19] SMFEPSPDNCnxInfo OPTIONAL,
 *     mAAcceptedIndication          [20] SMFMAAcceptedIndication,
 *     aTSSSContainer                [21] ATSSSContainer OPTIONAL,
 *     uEEPSPDNConnection            [22] UEEPSPDNConnection OPTIONAL,
 *     ePS5GSComboInfo               [23] EPS5GSComboInfo OPTIONAL,
 *     selectedDNN                   [24] DNN OPTIONAL,
 *     handoverState                 [25] HandoverState OPTIONAL,
 *     pCCRules                      [26] PCCRuleSet OPTIONAL,
 *     ePSPDNConnectionEstablishment [27] EPSPDNConnectionEstablishment OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAPDUSessionEstablishment {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `sUPIUnauthenticated`.
         * @public
         * @readonly
         */
        readonly sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `pDUSessionType`.
         * @public
         * @readonly
         */
        readonly pDUSessionType: PDUSessionType,
        /**
         * @summary `accessInfo`.
         * @public
         * @readonly
         */
        readonly accessInfo: AccessInfo[],
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: OPTIONAL<SNSSAI>,
        /**
         * @summary `uEEndpoint`.
         * @public
         * @readonly
         */
        readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `dNN`.
         * @public
         * @readonly
         */
        readonly dNN: DNN,
        /**
         * @summary `aMFID`.
         * @public
         * @readonly
         */
        readonly aMFID: OPTIONAL<AMFID>,
        /**
         * @summary `hSMFURI`.
         * @public
         * @readonly
         */
        readonly hSMFURI: OPTIONAL<HSMFURI>,
        /**
         * @summary `requestType`.
         * @public
         * @readonly
         */
        readonly requestType: FiveGSMRequestType,
        /**
         * @summary `sMPDUDNRequest`.
         * @public
         * @readonly
         */
        readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>,
        /**
         * @summary `servingNetwork`.
         * @public
         * @readonly
         */
        readonly servingNetwork: SMFServingNetwork,
        /**
         * @summary `oldPDUSessionID`.
         * @public
         * @readonly
         */
        readonly oldPDUSessionID: OPTIONAL<PDUSessionID>,
        /**
         * @summary `mAUpgradeIndication`.
         * @public
         * @readonly
         */
        readonly mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>,
        /**
         * @summary `ePSPDNCnxInfo`.
         * @public
         * @readonly
         */
        readonly ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>,
        /**
         * @summary `mAAcceptedIndication`.
         * @public
         * @readonly
         */
        readonly mAAcceptedIndication: SMFMAAcceptedIndication,
        /**
         * @summary `aTSSSContainer`.
         * @public
         * @readonly
         */
        readonly aTSSSContainer: OPTIONAL<ATSSSContainer>,
        /**
         * @summary `uEEPSPDNConnection`.
         * @public
         * @readonly
         */
        readonly uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>,
        /**
         * @summary `ePS5GSComboInfo`.
         * @public
         * @readonly
         */
        readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>,
        /**
         * @summary `selectedDNN`.
         * @public
         * @readonly
         */
        readonly selectedDNN: OPTIONAL<DNN>,
        /**
         * @summary `handoverState`.
         * @public
         * @readonly
         */
        readonly handoverState: OPTIONAL<HandoverState>,
        /**
         * @summary `pCCRules`.
         * @public
         * @readonly
         */
        readonly pCCRules: OPTIONAL<PCCRuleSet>,
        /**
         * @summary `ePSPDNConnectionEstablishment`.
         * @public
         * @readonly
         */
        readonly ePSPDNConnectionEstablishment: OPTIONAL<EPSPDNConnectionEstablishment>
    ) {}

    /**
     * @summary Restructures an object into a SMFMAPDUSessionEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `SMFMAPDUSessionEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFMAPDUSessionEstablishment`.
     * @returns {SMFMAPDUSessionEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (SMFMAPDUSessionEstablishment)]: (SMFMAPDUSessionEstablishment)[_K] }): SMFMAPDUSessionEstablishment {
        return new SMFMAPDUSessionEstablishment(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.pDUSessionType, _o.accessInfo, _o.sNSSAI, _o.uEEndpoint, _o.location, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.sMPDUDNRequest, _o.servingNetwork, _o.oldPDUSessionID, _o.mAUpgradeIndication, _o.ePSPDNCnxInfo, _o.mAAcceptedIndication, _o.aTSSSContainer, _o.uEEPSPDNConnection, _o.ePS5GSComboInfo, _o.selectedDNN, _o.handoverState, _o.pCCRules, _o.ePSPDNConnectionEstablishment);
    }

        /**
         * @summary The enum used as the type of the component `pDUSessionType`
         * @public
         * @static
         */

    public static _enum_for_pDUSessionType = _enum_for_PDUSessionType;        /**
         * @summary The enum used as the type of the component `requestType`
         * @public
         * @static
         */

    public static _enum_for_requestType = _enum_for_FiveGSMRequestType;        /**
         * @summary The enum used as the type of the component `handoverState`
         * @public
         * @static
         */

    public static _enum_for_handoverState = _enum_for_HandoverState;
}

/**
 * @summary The Leading Root Component Types of SMFMAPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFMAPDUSessionEstablishment: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pDUSessionType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessInfo", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("dNN", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("aMFID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("hSMFURI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("requestType", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("servingNetwork", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("oldPDUSessionID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("mAUpgradeIndication", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("ePSPDNCnxInfo", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("mAAcceptedIndication", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("aTSSSContainer", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("uEEPSPDNConnection", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("selectedDNN", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("ePSPDNConnectionEstablishment", true, $.hasTag(_TagClass.context, 27))
];

/**
 * @summary The Trailing Root Component Types of SMFMAPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFMAPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFMAPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFMAPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFMAPDUSessionEstablishment: $.ASN1Decoder<SMFMAPDUSessionEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAPDUSessionEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAPDUSessionEstablishment (el: _Element): SMFMAPDUSessionEstablishment {
    if (!_cached_decoder_for_SMFMAPDUSessionEstablishment) { _cached_decoder_for_SMFMAPDUSessionEstablishment = function (el: _Element): SMFMAPDUSessionEstablishment {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let pDUSessionType!: PDUSessionType;
    let accessInfo!: AccessInfo[];
    let sNSSAI: OPTIONAL<SNSSAI>;
    let uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    let location: OPTIONAL<Location>;
    let dNN!: DNN;
    let aMFID: OPTIONAL<AMFID>;
    let hSMFURI: OPTIONAL<HSMFURI>;
    let requestType!: FiveGSMRequestType;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let servingNetwork!: SMFServingNetwork;
    let oldPDUSessionID: OPTIONAL<PDUSessionID>;
    let mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>;
    let ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>;
    let mAAcceptedIndication!: SMFMAAcceptedIndication;
    let aTSSSContainer: OPTIONAL<ATSSSContainer>;
    let uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let selectedDNN: OPTIONAL<DNN>;
    let handoverState: OPTIONAL<HandoverState>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let ePSPDNConnectionEstablishment: OPTIONAL<EPSPDNConnectionEstablishment>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "pDUSessionType": (_el: _Element): void => { pDUSessionType = $._decode_implicit<PDUSessionType>(() => _decode_PDUSessionType)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<AccessInfo[]>(() => $._decodeSequenceOf<AccessInfo>(() => _decode_AccessInfo))(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "aMFID": (_el: _Element): void => { aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(_el); },
        "hSMFURI": (_el: _Element): void => { hSMFURI = $._decode_implicit<HSMFURI>(() => _decode_HSMFURI)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "oldPDUSessionID": (_el: _Element): void => { oldPDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "mAUpgradeIndication": (_el: _Element): void => { mAUpgradeIndication = $._decode_implicit<SMFMAUpgradeIndication>(() => _decode_SMFMAUpgradeIndication)(_el); },
        "ePSPDNCnxInfo": (_el: _Element): void => { ePSPDNCnxInfo = $._decode_implicit<SMFEPSPDNCnxInfo>(() => _decode_SMFEPSPDNCnxInfo)(_el); },
        "mAAcceptedIndication": (_el: _Element): void => { mAAcceptedIndication = $._decode_implicit<SMFMAAcceptedIndication>(() => _decode_SMFMAAcceptedIndication)(_el); },
        "aTSSSContainer": (_el: _Element): void => { aTSSSContainer = $._decode_implicit<ATSSSContainer>(() => _decode_ATSSSContainer)(_el); },
        "uEEPSPDNConnection": (_el: _Element): void => { uEEPSPDNConnection = $._decode_implicit<UEEPSPDNConnection>(() => _decode_UEEPSPDNConnection)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "selectedDNN": (_el: _Element): void => { selectedDNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "ePSPDNConnectionEstablishment": (_el: _Element): void => { ePSPDNConnectionEstablishment = $._decode_implicit<EPSPDNConnectionEstablishment>(() => _decode_EPSPDNConnectionEstablishment)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAPDUSessionEstablishment,
        _extension_additions_list_spec_for_SMFMAPDUSessionEstablishment,
        _root_component_type_list_2_spec_for_SMFMAPDUSessionEstablishment,
        undefined,
    );
    return new SMFMAPDUSessionEstablishment(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        pDUSessionType,
        accessInfo,
        sNSSAI,
        uEEndpoint,
        location,
        dNN,
        aMFID,
        hSMFURI,
        requestType,
        sMPDUDNRequest,
        servingNetwork,
        oldPDUSessionID,
        mAUpgradeIndication,
        ePSPDNCnxInfo,
        mAAcceptedIndication,
        aTSSSContainer,
        uEEPSPDNConnection,
        ePS5GSComboInfo,
        selectedDNN,
        handoverState,
        pCCRules,
        ePSPDNConnectionEstablishment
    );
}; }
    return _cached_decoder_for_SMFMAPDUSessionEstablishment(el);
}

let _cached_encoder_for_SMFMAPDUSessionEstablishment: $.ASN1Encoder<SMFMAPDUSessionEstablishment> | null = null;

/**
 * @summary Encodes a(n) SMFMAPDUSessionEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAPDUSessionEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAPDUSessionEstablishment (value: SMFMAPDUSessionEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAPDUSessionEstablishment) { _cached_encoder_for_SMFMAPDUSessionEstablishment = function (value: SMFMAPDUSessionEstablishment, elGetter: $.ASN1Encoder<SMFMAPDUSessionEstablishment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_PDUSessionType, $.BER)(value.pDUSessionType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<AccessInfo>(() => _encode_AccessInfo, $.BER), $.BER)(value.accessInfo, $.BER),
            /* IF_ABSENT  */ ((value.sNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.uEEndpoint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_DNN, $.BER)(value.dNN, $.BER),
            /* IF_ABSENT  */ ((value.aMFID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_AMFID, $.BER)(value.aMFID, $.BER)),
            /* IF_ABSENT  */ ((value.hSMFURI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER),
            /* IF_ABSENT  */ ((value.sMPDUDNRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER),
            /* IF_ABSENT  */ ((value.oldPDUSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_PDUSessionID, $.BER)(value.oldPDUSessionID, $.BER)),
            /* IF_ABSENT  */ ((value.mAUpgradeIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SMFMAUpgradeIndication, $.BER)(value.mAUpgradeIndication, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNCnxInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_SMFEPSPDNCnxInfo, $.BER)(value.ePSPDNCnxInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => _encode_SMFMAAcceptedIndication, $.BER)(value.mAAcceptedIndication, $.BER),
            /* IF_ABSENT  */ ((value.aTSSSContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_ATSSSContainer, $.BER)(value.aTSSSContainer, $.BER)),
            /* IF_ABSENT  */ ((value.uEEPSPDNConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_UEEPSPDNConnection, $.BER)(value.uEEPSPDNConnection, $.BER)),
            /* IF_ABSENT  */ ((value.ePS5GSComboInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER)),
            /* IF_ABSENT  */ ((value.selectedDNN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_DNN, $.BER)(value.selectedDNN, $.BER)),
            /* IF_ABSENT  */ ((value.handoverState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER)),
            /* IF_ABSENT  */ ((value.pCCRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNConnectionEstablishment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_EPSPDNConnectionEstablishment, $.BER)(value.ePSPDNConnectionEstablishment, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFMAPDUSessionEstablishment(value, elGetter);
}


/* eslint-enable */
