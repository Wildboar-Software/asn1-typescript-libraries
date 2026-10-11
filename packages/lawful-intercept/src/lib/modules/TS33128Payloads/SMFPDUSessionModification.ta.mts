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
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
// export { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { HandoverState, _decode_HandoverState, _encode_HandoverState, _enum_for_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
// export { HandoverState, _enum_for_HandoverState, HandoverState_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_preparing /* IMPORTED_LONG_ENUMERATION_ITEM */, preparing /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_prepared /* IMPORTED_LONG_ENUMERATION_ITEM */, prepared /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverState, _encode_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
// export { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
import { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
// export { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
import { UPPathChange, _decode_UPPathChange, _encode_UPPathChange } from "../TS33128Payloads/UPPathChange.ta.mjs";
// export { UPPathChange, _decode_UPPathChange, _encode_UPPathChange } from "../TS33128Payloads/UPPathChange.ta.mjs";
import { PFDDataForApp, _decode_PFDDataForApp, _encode_PFDDataForApp } from "../TS33128Payloads/PFDDataForApp.ta.mjs";
// export { PFDDataForApp, _decode_PFDDataForApp, _encode_PFDDataForApp } from "../TS33128Payloads/PFDDataForApp.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
// export { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
import { ProSeRemoteUEsReport, _decode_ProSeRemoteUEsReport, _encode_ProSeRemoteUEsReport } from "../TS33128Payloads/ProSeRemoteUEsReport.ta.mjs";
// export { ProSeRemoteUEsReport, _decode_ProSeRemoteUEsReport, _encode_ProSeRemoteUEsReport } from "../TS33128Payloads/ProSeRemoteUEsReport.ta.mjs";
import { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
import { ANDSPRules, _decode_ANDSPRules, _encode_ANDSPRules } from "../TS33128Payloads/ANDSPRules.ta.mjs";
// export { ANDSPRules, _decode_ANDSPRules, _encode_ANDSPRules } from "../TS33128Payloads/ANDSPRules.ta.mjs";
import { ServiceLevelAAContainer, _decode_ServiceLevelAAContainer, _encode_ServiceLevelAAContainer } from "../TS33128Payloads/ServiceLevelAAContainer.ta.mjs";
// export { ServiceLevelAAContainer, _decode_ServiceLevelAAContainer, _encode_ServiceLevelAAContainer } from "../TS33128Payloads/ServiceLevelAAContainer.ta.mjs";
import { SatelliteID, _decode_SatelliteID, _encode_SatelliteID } from "../TS33128Payloads/SatelliteID.ta.mjs";
// export { SatelliteID, _decode_SatelliteID, _encode_SatelliteID } from "../TS33128Payloads/SatelliteID.ta.mjs";


/**
 * @summary SMFPDUSessionModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFPDUSessionModification ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated         [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                         [3] PEI OPTIONAL,
 *     gPSI                        [4] GPSI OPTIONAL,
 *     sNSSAI                      [5] SNSSAI OPTIONAL,
 *     non3GPPAccessEndpoint       [6] UEEndpointAddress OPTIONAL,
 *     location                    [7] Location OPTIONAL,
 *     requestType                 [8] FiveGSMRequestType,
 *     accessType                  [9] AccessType OPTIONAL,
 *     rATType                     [10] RATType OPTIONAL,
 *     pDUSessionID                [11] PDUSessionID OPTIONAL,
 *     ePS5GSComboInfo             [12] EPS5GSComboInfo OPTIONAL,
 *     uEEndpoint                  [13] UEEndpointAddress OPTIONAL,
 *     servingNetwork              [14] SMFServingNetwork OPTIONAL,
 *     handoverState               [15] HandoverState OPTIONAL,
 *     gTPTunnelInfo               [16] GTPTunnelInfo OPTIONAL,
 *     pCCRules                    [17] PCCRuleSet OPTIONAL,
 *     ePSPDNConnectionModification[18] EPSPDNConnectionModification OPTIONAL,
 *     uPPathChange                [19] UPPathChange OPTIONAL,
 *     pFDDataForApp               [20] PFDDataForApp OPTIONAL,
 *     satelliteBackhaulCategory   [21] SBIType OPTIONAL,
 *     gEOSatelliteID              [22] GEOSatelliteID OPTIONAL,
 *     proSeRemoteUEsReport        [23] ProSeRemoteUEsReport OPTIONAL,
 *     alternativeNSSAI            [24] AlternativeNSSAIList OPTIONAL,
 *     aNDSPRules                  [25] ANDSPRules OPTIONAL,
 *     serviceLevelAAContainer     [26] ServiceLevelAAContainer OPTIONAL,
 *     servingSatelliteID          [27] SatelliteID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFPDUSessionModification {
    /**
     * @summary `sUPI`.
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `sUPIUnauthenticated`.
     * @public
     * @readonly
     */
    readonly sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    /**
     * @summary `pEI`.
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `sNSSAI`.
     * @public
     * @readonly
     */
    readonly sNSSAI: OPTIONAL<SNSSAI>;
    /**
     * @summary `non3GPPAccessEndpoint`.
     * @public
     * @readonly
     */
    readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `requestType`.
     * @public
     * @readonly
     */
    readonly requestType: FiveGSMRequestType;
    /**
     * @summary `accessType`.
     * @public
     * @readonly
     */
    readonly accessType: OPTIONAL<AccessType>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<RATType>;
    /**
     * @summary `pDUSessionID`.
     * @public
     * @readonly
     */
    readonly pDUSessionID: OPTIONAL<PDUSessionID>;
    /**
     * @summary `ePS5GSComboInfo`.
     * @public
     * @readonly
     */
    readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    /**
     * @summary `uEEndpoint`.
     * @public
     * @readonly
     */
    readonly uEEndpoint: OPTIONAL<UEEndpointAddress>;
    /**
     * @summary `servingNetwork`.
     * @public
     * @readonly
     */
    readonly servingNetwork: OPTIONAL<SMFServingNetwork>;
    /**
     * @summary `handoverState`.
     * @public
     * @readonly
     */
    readonly handoverState: OPTIONAL<HandoverState>;
    /**
     * @summary `gTPTunnelInfo`.
     * @public
     * @readonly
     */
    readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    /**
     * @summary `pCCRules`.
     * @public
     * @readonly
     */
    readonly pCCRules: OPTIONAL<PCCRuleSet>;
    /**
     * @summary `ePSPDNConnectionModification`.
     * @public
     * @readonly
     */
    readonly ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>;
    /**
     * @summary `uPPathChange`.
     * @public
     * @readonly
     */
    readonly uPPathChange: OPTIONAL<UPPathChange>;
    /**
     * @summary `pFDDataForApp`.
     * @public
     * @readonly
     */
    readonly pFDDataForApp: OPTIONAL<PFDDataForApp>;
    /**
     * @summary `satelliteBackhaulCategory`.
     * @public
     * @readonly
     */
    readonly satelliteBackhaulCategory: OPTIONAL<SBIType>;
    /**
     * @summary `gEOSatelliteID`.
     * @public
     * @readonly
     */
    readonly gEOSatelliteID: OPTIONAL<GEOSatelliteID>;
    /**
     * @summary `proSeRemoteUEsReport`.
     * @public
     * @readonly
     */
    readonly proSeRemoteUEsReport: OPTIONAL<ProSeRemoteUEsReport>;
    /**
     * @summary `alternativeNSSAI`.
     * @public
     * @readonly
     */
    readonly alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    /**
     * @summary `aNDSPRules`.
     * @public
     * @readonly
     */
    readonly aNDSPRules: OPTIONAL<ANDSPRules>;
    /**
     * @summary `serviceLevelAAContainer`.
     * @public
     * @readonly
     */
    readonly serviceLevelAAContainer: OPTIONAL<ServiceLevelAAContainer>;
    /**
     * @summary `servingSatelliteID`.
     * @public
     * @readonly
     */
    readonly servingSatelliteID: OPTIONAL<SatelliteID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: OPTIONAL<SUPI>,
        sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        sNSSAI: OPTIONAL<SNSSAI>,
        non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        location: OPTIONAL<Location>,
        requestType: FiveGSMRequestType,
        accessType: OPTIONAL<AccessType>,
        rATType: OPTIONAL<RATType>,
        pDUSessionID: OPTIONAL<PDUSessionID>,
        ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>,
        uEEndpoint: OPTIONAL<UEEndpointAddress>,
        servingNetwork: OPTIONAL<SMFServingNetwork>,
        handoverState: OPTIONAL<HandoverState>,
        gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        pCCRules: OPTIONAL<PCCRuleSet>,
        ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>,
        uPPathChange: OPTIONAL<UPPathChange>,
        pFDDataForApp: OPTIONAL<PFDDataForApp>,
        satelliteBackhaulCategory: OPTIONAL<SBIType>,
        gEOSatelliteID: OPTIONAL<GEOSatelliteID>,
        proSeRemoteUEsReport: OPTIONAL<ProSeRemoteUEsReport>,
        alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>,
        aNDSPRules: OPTIONAL<ANDSPRules>,
        serviceLevelAAContainer: OPTIONAL<ServiceLevelAAContainer>,
        servingSatelliteID: OPTIONAL<SatelliteID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUPIUnauthenticated = sUPIUnauthenticated;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.sNSSAI = sNSSAI;
        this.non3GPPAccessEndpoint = non3GPPAccessEndpoint;
        this.location = location;
        this.requestType = requestType;
        this.accessType = accessType;
        this.rATType = rATType;
        this.pDUSessionID = pDUSessionID;
        this.ePS5GSComboInfo = ePS5GSComboInfo;
        this.uEEndpoint = uEEndpoint;
        this.servingNetwork = servingNetwork;
        this.handoverState = handoverState;
        this.gTPTunnelInfo = gTPTunnelInfo;
        this.pCCRules = pCCRules;
        this.ePSPDNConnectionModification = ePSPDNConnectionModification;
        this.uPPathChange = uPPathChange;
        this.pFDDataForApp = pFDDataForApp;
        this.satelliteBackhaulCategory = satelliteBackhaulCategory;
        this.gEOSatelliteID = gEOSatelliteID;
        this.proSeRemoteUEsReport = proSeRemoteUEsReport;
        this.alternativeNSSAI = alternativeNSSAI;
        this.aNDSPRules = aNDSPRules;
        this.serviceLevelAAContainer = serviceLevelAAContainer;
        this.servingSatelliteID = servingSatelliteID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMFPDUSessionModification
     * @description
     * 
     * This takes an `object` and converts it to a `SMFPDUSessionModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFPDUSessionModification`.
     * @returns {SMFPDUSessionModification}
     */
    public static _from_object (_o: { [_K in keyof (SMFPDUSessionModification)]: (SMFPDUSessionModification)[_K] }): SMFPDUSessionModification {
        return new SMFPDUSessionModification(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.sNSSAI, _o.non3GPPAccessEndpoint, _o.location, _o.requestType, _o.accessType, _o.rATType, _o.pDUSessionID, _o.ePS5GSComboInfo, _o.uEEndpoint, _o.servingNetwork, _o.handoverState, _o.gTPTunnelInfo, _o.pCCRules, _o.ePSPDNConnectionModification, _o.uPPathChange, _o.pFDDataForApp, _o.satelliteBackhaulCategory, _o.gEOSatelliteID, _o.proSeRemoteUEsReport, _o.alternativeNSSAI, _o.aNDSPRules, _o.serviceLevelAAContainer, _o.servingSatelliteID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestType`
         * @public
         * @static
         */

    public static _enum_for_requestType = _enum_for_FiveGSMRequestType;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;        /**
         * @summary The enum used as the type of the component `handoverState`
         * @public
         * @static
         */

    public static _enum_for_handoverState = _enum_for_HandoverState;
}

/**
 * @summary The Leading Root Component Types of SMFPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFPDUSessionModification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("requestType", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("pDUSessionID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servingNetwork", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("ePSPDNConnectionModification", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("uPPathChange", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("pFDDataForApp", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("satelliteBackhaulCategory", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("gEOSatelliteID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("proSeRemoteUEsReport", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("aNDSPRules", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("serviceLevelAAContainer", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("servingSatelliteID", true, $.hasTag(_TagClass.context, 27))
];

/**
 * @summary The Trailing Root Component Types of SMFPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFPDUSessionModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFPDUSessionModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFPDUSessionModification: $.ASN1Decoder<SMFPDUSessionModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFPDUSessionModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFPDUSessionModification (el: _Element): SMFPDUSessionModification {
    if (!_cached_decoder_for_SMFPDUSessionModification) { _cached_decoder_for_SMFPDUSessionModification = function (el: _Element): SMFPDUSessionModification {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let location: OPTIONAL<Location>;
    let requestType!: FiveGSMRequestType;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    let pDUSessionID: OPTIONAL<PDUSessionID>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let uEEndpoint: OPTIONAL<UEEndpointAddress>;
    let servingNetwork: OPTIONAL<SMFServingNetwork>;
    let handoverState: OPTIONAL<HandoverState>;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>;
    let uPPathChange: OPTIONAL<UPPathChange>;
    let pFDDataForApp: OPTIONAL<PFDDataForApp>;
    let satelliteBackhaulCategory: OPTIONAL<SBIType>;
    let gEOSatelliteID: OPTIONAL<GEOSatelliteID>;
    let proSeRemoteUEsReport: OPTIONAL<ProSeRemoteUEsReport>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    let aNDSPRules: OPTIONAL<ANDSPRules>;
    let serviceLevelAAContainer: OPTIONAL<ServiceLevelAAContainer>;
    let servingSatelliteID: OPTIONAL<SatelliteID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "ePSPDNConnectionModification": (_el: _Element): void => { ePSPDNConnectionModification = $._decode_implicit<EPSPDNConnectionModification>(() => _decode_EPSPDNConnectionModification)(_el); },
        "uPPathChange": (_el: _Element): void => { uPPathChange = $._decode_implicit<UPPathChange>(() => _decode_UPPathChange)(_el); },
        "pFDDataForApp": (_el: _Element): void => { pFDDataForApp = $._decode_implicit<PFDDataForApp>(() => _decode_PFDDataForApp)(_el); },
        "satelliteBackhaulCategory": (_el: _Element): void => { satelliteBackhaulCategory = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "gEOSatelliteID": (_el: _Element): void => { gEOSatelliteID = $._decode_implicit<GEOSatelliteID>(() => _decode_GEOSatelliteID)(_el); },
        "proSeRemoteUEsReport": (_el: _Element): void => { proSeRemoteUEsReport = $._decode_implicit<ProSeRemoteUEsReport>(() => _decode_ProSeRemoteUEsReport)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); },
        "aNDSPRules": (_el: _Element): void => { aNDSPRules = $._decode_implicit<ANDSPRules>(() => _decode_ANDSPRules)(_el); },
        "serviceLevelAAContainer": (_el: _Element): void => { serviceLevelAAContainer = $._decode_implicit<ServiceLevelAAContainer>(() => _decode_ServiceLevelAAContainer)(_el); },
        "servingSatelliteID": (_el: _Element): void => { servingSatelliteID = $._decode_implicit<SatelliteID>(() => _decode_SatelliteID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFPDUSessionModification,
        _extension_additions_list_spec_for_SMFPDUSessionModification,
        _root_component_type_list_2_spec_for_SMFPDUSessionModification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMFPDUSessionModification(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        sNSSAI,
        non3GPPAccessEndpoint,
        location,
        requestType,
        accessType,
        rATType,
        pDUSessionID,
        ePS5GSComboInfo,
        uEEndpoint,
        servingNetwork,
        handoverState,
        gTPTunnelInfo,
        pCCRules,
        ePSPDNConnectionModification,
        uPPathChange,
        pFDDataForApp,
        satelliteBackhaulCategory,
        gEOSatelliteID,
        proSeRemoteUEsReport,
        alternativeNSSAI,
        aNDSPRules,
        serviceLevelAAContainer,
        servingSatelliteID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMFPDUSessionModification(el);
}

let _cached_encoder_for_SMFPDUSessionModification: $.ASN1Encoder<SMFPDUSessionModification> | null = null;

/**
 * @summary Encodes a(n) SMFPDUSessionModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFPDUSessionModification, encoded as an ASN.1 Element.
 */
export
function _encode_SMFPDUSessionModification (value: SMFPDUSessionModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFPDUSessionModification) { _cached_encoder_for_SMFPDUSessionModification = function (value: SMFPDUSessionModification, elGetter: $.ASN1Encoder<SMFPDUSessionModification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(27 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sUPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    }
    if (value.sUPIUnauthenticated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.sNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    }
    if (value.non3GPPAccessEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER);
    if (value.accessType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_AccessType, $.BER)(value.accessType, $.BER);
    }
    if (value.rATType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_RATType, $.BER)(value.rATType, $.BER);
    }
    if (value.pDUSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    }
    if (value.ePS5GSComboInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER);
    }
    if (value.uEEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_UEEndpointAddress, $.BER)(value.uEEndpoint, $.BER);
    }
    if (value.servingNetwork !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER);
    }
    if (value.handoverState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER);
    }
    if (value.gTPTunnelInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER);
    }
    if (value.pCCRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER);
    }
    if (value.ePSPDNConnectionModification !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_EPSPDNConnectionModification, $.BER)(value.ePSPDNConnectionModification, $.BER);
    }
    if (value.uPPathChange !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_UPPathChange, $.BER)(value.uPPathChange, $.BER);
    }
    if (value.pFDDataForApp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_PFDDataForApp, $.BER)(value.pFDDataForApp, $.BER);
    }
    if (value.satelliteBackhaulCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_SBIType, $.BER)(value.satelliteBackhaulCategory, $.BER);
    }
    if (value.gEOSatelliteID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_GEOSatelliteID, $.BER)(value.gEOSatelliteID, $.BER);
    }
    if (value.proSeRemoteUEsReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_ProSeRemoteUEsReport, $.BER)(value.proSeRemoteUEsReport, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (value.aNDSPRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_ANDSPRules, $.BER)(value.aNDSPRules, $.BER);
    }
    if (value.serviceLevelAAContainer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_ServiceLevelAAContainer, $.BER)(value.serviceLevelAAContainer, $.BER);
    }
    if (value.servingSatelliteID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_SatelliteID, $.BER)(value.servingSatelliteID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFPDUSessionModification(value, elGetter);
}


/* eslint-enable */
