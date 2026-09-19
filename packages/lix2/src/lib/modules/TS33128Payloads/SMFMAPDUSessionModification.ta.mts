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
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
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
import { UPPathChange, _decode_UPPathChange, _encode_UPPathChange } from "../TS33128Payloads/UPPathChange.ta.mjs";
// export { UPPathChange, _decode_UPPathChange, _encode_UPPathChange } from "../TS33128Payloads/UPPathChange.ta.mjs";
import { PFDDataForApp, _decode_PFDDataForApp, _encode_PFDDataForApp } from "../TS33128Payloads/PFDDataForApp.ta.mjs";
// export { PFDDataForApp, _decode_PFDDataForApp, _encode_PFDDataForApp } from "../TS33128Payloads/PFDDataForApp.ta.mjs";
import { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
// export { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";


/**
 * @summary SMFMAPDUSessionModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAPDUSessionModification ::= SEQUENCE
 * {
 *     sUPI                         [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated          [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                          [3] PEI OPTIONAL,
 *     gPSI                         [4] GPSI OPTIONAL,
 *     pDUSessionID                 [5] PDUSessionID,
 *     accessInfo                   [6] SEQUENCE OF AccessInfo OPTIONAL,
 *     sNSSAI                       [7] SNSSAI OPTIONAL,
 *     location                     [8] Location OPTIONAL,
 *     requestType                  [9] FiveGSMRequestType OPTIONAL,
 *     servingNetwork               [10] SMFServingNetwork,
 *     oldPDUSessionID              [11] PDUSessionID OPTIONAL,
 *     mAUpgradeIndication          [12] SMFMAUpgradeIndication OPTIONAL,
 *     ePSPDNCnxInfo                [13] SMFEPSPDNCnxInfo OPTIONAL,
 *     mAAcceptedIndication         [14] SMFMAAcceptedIndication,
 *     aTSSSContainer               [15] ATSSSContainer OPTIONAL,
 *     uEEPSPDNConnection           [16] UEEPSPDNConnection OPTIONAL,
 *     ePS5GSComboInfo              [17] EPS5GSComboInfo OPTIONAL,
 *     handoverState                [18] HandoverState OPTIONAL,
 *     pCCRules                     [19] PCCRuleSet OPTIONAL,
 *     uPPathChange                 [20] UPPathChange OPTIONAL,
 *     pFDDataForApp                [21] PFDDataForApp OPTIONAL,
 *     ePSPDNConnectionModification [22] EPSPDNConnectionModification OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAPDUSessionModification {
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
         * @summary `accessInfo`.
         * @public
         * @readonly
         */
        readonly accessInfo: OPTIONAL<AccessInfo[]>,
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: OPTIONAL<SNSSAI>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `requestType`.
         * @public
         * @readonly
         */
        readonly requestType: OPTIONAL<FiveGSMRequestType>,
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
         * @summary `uPPathChange`.
         * @public
         * @readonly
         */
        readonly uPPathChange: OPTIONAL<UPPathChange>,
        /**
         * @summary `pFDDataForApp`.
         * @public
         * @readonly
         */
        readonly pFDDataForApp: OPTIONAL<PFDDataForApp>,
        /**
         * @summary `ePSPDNConnectionModification`.
         * @public
         * @readonly
         */
        readonly ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>
    ) {}

    /**
     * @summary Restructures an object into a SMFMAPDUSessionModification
     * @description
     * 
     * This takes an `object` and converts it to a `SMFMAPDUSessionModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFMAPDUSessionModification`.
     * @returns {SMFMAPDUSessionModification}
     */
    public static _from_object (_o: { [_K in keyof (SMFMAPDUSessionModification)]: (SMFMAPDUSessionModification)[_K] }): SMFMAPDUSessionModification {
        return new SMFMAPDUSessionModification(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.accessInfo, _o.sNSSAI, _o.location, _o.requestType, _o.servingNetwork, _o.oldPDUSessionID, _o.mAUpgradeIndication, _o.ePSPDNCnxInfo, _o.mAAcceptedIndication, _o.aTSSSContainer, _o.uEEPSPDNConnection, _o.ePS5GSComboInfo, _o.handoverState, _o.pCCRules, _o.uPPathChange, _o.pFDDataForApp, _o.ePSPDNConnectionModification);
    }

        /**
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
 * @summary The Leading Root Component Types of SMFMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFMAPDUSessionModification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("requestType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("servingNetwork", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("oldPDUSessionID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("mAUpgradeIndication", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("ePSPDNCnxInfo", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("mAAcceptedIndication", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("aTSSSContainer", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("uEEPSPDNConnection", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("uPPathChange", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("pFDDataForApp", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("ePSPDNConnectionModification", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of SMFMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFMAPDUSessionModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFMAPDUSessionModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFMAPDUSessionModification: $.ASN1Decoder<SMFMAPDUSessionModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAPDUSessionModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAPDUSessionModification (el: _Element): SMFMAPDUSessionModification {
    if (!_cached_decoder_for_SMFMAPDUSessionModification) { _cached_decoder_for_SMFMAPDUSessionModification = function (el: _Element): SMFMAPDUSessionModification {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let accessInfo: OPTIONAL<AccessInfo[]>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let location: OPTIONAL<Location>;
    let requestType: OPTIONAL<FiveGSMRequestType>;
    let servingNetwork!: SMFServingNetwork;
    let oldPDUSessionID: OPTIONAL<PDUSessionID>;
    let mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>;
    let ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>;
    let mAAcceptedIndication!: SMFMAAcceptedIndication;
    let aTSSSContainer: OPTIONAL<ATSSSContainer>;
    let uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let handoverState: OPTIONAL<HandoverState>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let uPPathChange: OPTIONAL<UPPathChange>;
    let pFDDataForApp: OPTIONAL<PFDDataForApp>;
    let ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<AccessInfo[]>(() => $._decodeSequenceOf<AccessInfo>(() => _decode_AccessInfo))(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "oldPDUSessionID": (_el: _Element): void => { oldPDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "mAUpgradeIndication": (_el: _Element): void => { mAUpgradeIndication = $._decode_implicit<SMFMAUpgradeIndication>(() => _decode_SMFMAUpgradeIndication)(_el); },
        "ePSPDNCnxInfo": (_el: _Element): void => { ePSPDNCnxInfo = $._decode_implicit<SMFEPSPDNCnxInfo>(() => _decode_SMFEPSPDNCnxInfo)(_el); },
        "mAAcceptedIndication": (_el: _Element): void => { mAAcceptedIndication = $._decode_implicit<SMFMAAcceptedIndication>(() => _decode_SMFMAAcceptedIndication)(_el); },
        "aTSSSContainer": (_el: _Element): void => { aTSSSContainer = $._decode_implicit<ATSSSContainer>(() => _decode_ATSSSContainer)(_el); },
        "uEEPSPDNConnection": (_el: _Element): void => { uEEPSPDNConnection = $._decode_implicit<UEEPSPDNConnection>(() => _decode_UEEPSPDNConnection)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "uPPathChange": (_el: _Element): void => { uPPathChange = $._decode_implicit<UPPathChange>(() => _decode_UPPathChange)(_el); },
        "pFDDataForApp": (_el: _Element): void => { pFDDataForApp = $._decode_implicit<PFDDataForApp>(() => _decode_PFDDataForApp)(_el); },
        "ePSPDNConnectionModification": (_el: _Element): void => { ePSPDNConnectionModification = $._decode_implicit<EPSPDNConnectionModification>(() => _decode_EPSPDNConnectionModification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAPDUSessionModification,
        _extension_additions_list_spec_for_SMFMAPDUSessionModification,
        _root_component_type_list_2_spec_for_SMFMAPDUSessionModification,
        undefined,
    );
    return new SMFMAPDUSessionModification(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        accessInfo,
        sNSSAI,
        location,
        requestType,
        servingNetwork,
        oldPDUSessionID,
        mAUpgradeIndication,
        ePSPDNCnxInfo,
        mAAcceptedIndication,
        aTSSSContainer,
        uEEPSPDNConnection,
        ePS5GSComboInfo,
        handoverState,
        pCCRules,
        uPPathChange,
        pFDDataForApp,
        ePSPDNConnectionModification
    );
}; }
    return _cached_decoder_for_SMFMAPDUSessionModification(el);
}

let _cached_encoder_for_SMFMAPDUSessionModification: $.ASN1Encoder<SMFMAPDUSessionModification> | null = null;

/**
 * @summary Encodes a(n) SMFMAPDUSessionModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAPDUSessionModification, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAPDUSessionModification (value: SMFMAPDUSessionModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAPDUSessionModification) { _cached_encoder_for_SMFMAPDUSessionModification = function (value: SMFMAPDUSessionModification, elGetter: $.ASN1Encoder<SMFMAPDUSessionModification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* IF_ABSENT  */ ((value.accessInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<AccessInfo>(() => _encode_AccessInfo, $.BER), $.BER)(value.accessInfo, $.BER)),
            /* IF_ABSENT  */ ((value.sNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.requestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER),
            /* IF_ABSENT  */ ((value.oldPDUSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_PDUSessionID, $.BER)(value.oldPDUSessionID, $.BER)),
            /* IF_ABSENT  */ ((value.mAUpgradeIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SMFMAUpgradeIndication, $.BER)(value.mAUpgradeIndication, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNCnxInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SMFEPSPDNCnxInfo, $.BER)(value.ePSPDNCnxInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_SMFMAAcceptedIndication, $.BER)(value.mAAcceptedIndication, $.BER),
            /* IF_ABSENT  */ ((value.aTSSSContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_ATSSSContainer, $.BER)(value.aTSSSContainer, $.BER)),
            /* IF_ABSENT  */ ((value.uEEPSPDNConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_UEEPSPDNConnection, $.BER)(value.uEEPSPDNConnection, $.BER)),
            /* IF_ABSENT  */ ((value.ePS5GSComboInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER)),
            /* IF_ABSENT  */ ((value.handoverState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER)),
            /* IF_ABSENT  */ ((value.pCCRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER)),
            /* IF_ABSENT  */ ((value.uPPathChange === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_UPPathChange, $.BER)(value.uPPathChange, $.BER)),
            /* IF_ABSENT  */ ((value.pFDDataForApp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_PFDDataForApp, $.BER)(value.pFDDataForApp, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNConnectionModification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_EPSPDNConnectionModification, $.BER)(value.ePSPDNConnectionModification, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFMAPDUSessionModification(value, elGetter);
}


/* eslint-enable */
