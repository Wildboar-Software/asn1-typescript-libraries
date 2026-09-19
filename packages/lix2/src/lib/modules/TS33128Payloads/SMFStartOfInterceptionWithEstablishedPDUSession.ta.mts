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
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { PDUSessionType, _decode_PDUSessionType, _encode_PDUSessionType, _enum_for_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
// export { PDUSessionType, _enum_for_PDUSessionType, PDUSessionType_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv4v6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4v6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDUSessionType, _encode_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
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
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
// export { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
import { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
// export { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
// export { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
import { EPSStartOfInterceptionWithEstablishedPDNConnection, _decode_EPSStartOfInterceptionWithEstablishedPDNConnection, _encode_EPSStartOfInterceptionWithEstablishedPDNConnection } from "../TS33128Payloads/EPSStartOfInterceptionWithEstablishedPDNConnection.ta.mjs";
// export { EPSStartOfInterceptionWithEstablishedPDNConnection, _decode_EPSStartOfInterceptionWithEstablishedPDNConnection, _encode_EPSStartOfInterceptionWithEstablishedPDNConnection } from "../TS33128Payloads/EPSStartOfInterceptionWithEstablishedPDNConnection.ta.mjs";
import { PFDDataForApps, _decode_PFDDataForApps, _encode_PFDDataForApps } from "../TS33128Payloads/PFDDataForApps.ta.mjs";
// export { PFDDataForApps, _decode_PFDDataForApps, _encode_PFDDataForApps } from "../TS33128Payloads/PFDDataForApps.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
// export { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
import { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";
// export { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";


/**
 * @summary SMFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFStartOfInterceptionWithEstablishedPDUSession ::= SEQUENCE
 * {
 *     sUPI                                               [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated                                [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                                                [3] PEI OPTIONAL,
 *     gPSI                                               [4] GPSI OPTIONAL,
 *     pDUSessionID                                       [5] PDUSessionID,
 *     gTPTunnelID                                        [6] FTEID,
 *     pDUSessionType                                     [7] PDUSessionType,
 *     sNSSAI                                             [8] SNSSAI OPTIONAL,
 *     uEEndpoint                                         [9] SEQUENCE OF UEEndpointAddress,
 *     non3GPPAccessEndpoint                              [10] UEEndpointAddress OPTIONAL,
 *     location                                           [11] Location OPTIONAL,
 *     dNN                                                [12] DNN,
 *     aMFID                                              [13] AMFID OPTIONAL,
 *     hSMFURI                                            [14] HSMFURI OPTIONAL,
 *     requestType                                        [15] FiveGSMRequestType,
 *     accessType                                         [16] AccessType OPTIONAL,
 *     rATType                                            [17] RATType OPTIONAL,
 *     sMPDUDNRequest                                     [18] SMPDUDNRequest OPTIONAL,
 *     timeOfSessionEstablishment                         [19] Timestamp OPTIONAL,
 *     ePS5GSComboInfo                                    [20] EPS5GSComboInfo OPTIONAL,
 *     uEEPSPDNConnection                                 [21] UEEPSPDNConnection OPTIONAL,
 *     servingNetwork                                     [22] SMFServingNetwork OPTIONAL,
 *     gTPTunnelInfo                                      [23] GTPTunnelInfo OPTIONAL,
 *     pCCRules                                           [24] PCCRuleSet OPTIONAL,
 *     ePSStartOfInterceptionWithEstablishedPDNConnection [25] EPSStartOfInterceptionWithEstablishedPDNConnection OPTIONAL,
 *     pFDDataForApps                                     [26] PFDDataForApps OPTIONAL,
 *     satelliteBackhaulCategory                          [27] SBIType OPTIONAL,
 *     gEOSatelliteID                                     [28] GEOSatelliteID OPTIONAL,
 *     remoteUEsContextConnected                          [29] RemoteUEContextList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFStartOfInterceptionWithEstablishedPDUSession {
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
         * @summary `gTPTunnelID`.
         * @public
         * @readonly
         */
        readonly gTPTunnelID: FTEID,
        /**
         * @summary `pDUSessionType`.
         * @public
         * @readonly
         */
        readonly pDUSessionType: PDUSessionType,
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
        readonly uEEndpoint: UEEndpointAddress[],
        /**
         * @summary `non3GPPAccessEndpoint`.
         * @public
         * @readonly
         */
        readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
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
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: OPTIONAL<AccessType>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `sMPDUDNRequest`.
         * @public
         * @readonly
         */
        readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>,
        /**
         * @summary `timeOfSessionEstablishment`.
         * @public
         * @readonly
         */
        readonly timeOfSessionEstablishment: OPTIONAL<Timestamp>,
        /**
         * @summary `ePS5GSComboInfo`.
         * @public
         * @readonly
         */
        readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>,
        /**
         * @summary `uEEPSPDNConnection`.
         * @public
         * @readonly
         */
        readonly uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>,
        /**
         * @summary `servingNetwork`.
         * @public
         * @readonly
         */
        readonly servingNetwork: OPTIONAL<SMFServingNetwork>,
        /**
         * @summary `gTPTunnelInfo`.
         * @public
         * @readonly
         */
        readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        /**
         * @summary `pCCRules`.
         * @public
         * @readonly
         */
        readonly pCCRules: OPTIONAL<PCCRuleSet>,
        /**
         * @summary `ePSStartOfInterceptionWithEstablishedPDNConnection`.
         * @public
         * @readonly
         */
        readonly ePSStartOfInterceptionWithEstablishedPDNConnection: OPTIONAL<EPSStartOfInterceptionWithEstablishedPDNConnection>,
        /**
         * @summary `pFDDataForApps`.
         * @public
         * @readonly
         */
        readonly pFDDataForApps: OPTIONAL<PFDDataForApps>,
        /**
         * @summary `satelliteBackhaulCategory`.
         * @public
         * @readonly
         */
        readonly satelliteBackhaulCategory: OPTIONAL<SBIType>,
        /**
         * @summary `gEOSatelliteID`.
         * @public
         * @readonly
         */
        readonly gEOSatelliteID: OPTIONAL<GEOSatelliteID>,
        /**
         * @summary `remoteUEsContextConnected`.
         * @public
         * @readonly
         */
        readonly remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>
    ) {}

    /**
     * @summary Restructures an object into a SMFStartOfInterceptionWithEstablishedPDUSession
     * @description
     * 
     * This takes an `object` and converts it to a `SMFStartOfInterceptionWithEstablishedPDUSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFStartOfInterceptionWithEstablishedPDUSession`.
     * @returns {SMFStartOfInterceptionWithEstablishedPDUSession}
     */
    public static _from_object (_o: { [_K in keyof (SMFStartOfInterceptionWithEstablishedPDUSession)]: (SMFStartOfInterceptionWithEstablishedPDUSession)[_K] }): SMFStartOfInterceptionWithEstablishedPDUSession {
        return new SMFStartOfInterceptionWithEstablishedPDUSession(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.gTPTunnelID, _o.pDUSessionType, _o.sNSSAI, _o.uEEndpoint, _o.non3GPPAccessEndpoint, _o.location, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.accessType, _o.rATType, _o.sMPDUDNRequest, _o.timeOfSessionEstablishment, _o.ePS5GSComboInfo, _o.uEEPSPDNConnection, _o.servingNetwork, _o.gTPTunnelInfo, _o.pCCRules, _o.ePSStartOfInterceptionWithEstablishedPDNConnection, _o.pFDDataForApps, _o.satelliteBackhaulCategory, _o.gEOSatelliteID, _o.remoteUEsContextConnected);
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
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of SMFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFStartOfInterceptionWithEstablishedPDUSession: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gTPTunnelID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pDUSessionType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uEEndpoint", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("dNN", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("aMFID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("hSMFURI", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("requestType", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("timeOfSessionEstablishment", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("uEEPSPDNConnection", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servingNetwork", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("ePSStartOfInterceptionWithEstablishedPDNConnection", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("pFDDataForApps", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("satelliteBackhaulCategory", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("gEOSatelliteID", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("remoteUEsContextConnected", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of SMFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFStartOfInterceptionWithEstablishedPDUSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFStartOfInterceptionWithEstablishedPDUSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFStartOfInterceptionWithEstablishedPDUSession: $.ASN1Decoder<SMFStartOfInterceptionWithEstablishedPDUSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFStartOfInterceptionWithEstablishedPDUSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFStartOfInterceptionWithEstablishedPDUSession (el: _Element): SMFStartOfInterceptionWithEstablishedPDUSession {
    if (!_cached_decoder_for_SMFStartOfInterceptionWithEstablishedPDUSession) { _cached_decoder_for_SMFStartOfInterceptionWithEstablishedPDUSession = function (el: _Element): SMFStartOfInterceptionWithEstablishedPDUSession {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let gTPTunnelID!: FTEID;
    let pDUSessionType!: PDUSessionType;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let uEEndpoint!: UEEndpointAddress[];
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let location: OPTIONAL<Location>;
    let dNN!: DNN;
    let aMFID: OPTIONAL<AMFID>;
    let hSMFURI: OPTIONAL<HSMFURI>;
    let requestType!: FiveGSMRequestType;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let timeOfSessionEstablishment: OPTIONAL<Timestamp>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    let servingNetwork: OPTIONAL<SMFServingNetwork>;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let ePSStartOfInterceptionWithEstablishedPDNConnection: OPTIONAL<EPSStartOfInterceptionWithEstablishedPDNConnection>;
    let pFDDataForApps: OPTIONAL<PFDDataForApps>;
    let satelliteBackhaulCategory: OPTIONAL<SBIType>;
    let gEOSatelliteID: OPTIONAL<GEOSatelliteID>;
    let remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "gTPTunnelID": (_el: _Element): void => { gTPTunnelID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "pDUSessionType": (_el: _Element): void => { pDUSessionType = $._decode_implicit<PDUSessionType>(() => _decode_PDUSessionType)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "aMFID": (_el: _Element): void => { aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(_el); },
        "hSMFURI": (_el: _Element): void => { hSMFURI = $._decode_implicit<HSMFURI>(() => _decode_HSMFURI)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "timeOfSessionEstablishment": (_el: _Element): void => { timeOfSessionEstablishment = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "uEEPSPDNConnection": (_el: _Element): void => { uEEPSPDNConnection = $._decode_implicit<UEEPSPDNConnection>(() => _decode_UEEPSPDNConnection)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "ePSStartOfInterceptionWithEstablishedPDNConnection": (_el: _Element): void => { ePSStartOfInterceptionWithEstablishedPDNConnection = $._decode_implicit<EPSStartOfInterceptionWithEstablishedPDNConnection>(() => _decode_EPSStartOfInterceptionWithEstablishedPDNConnection)(_el); },
        "pFDDataForApps": (_el: _Element): void => { pFDDataForApps = $._decode_implicit<PFDDataForApps>(() => _decode_PFDDataForApps)(_el); },
        "satelliteBackhaulCategory": (_el: _Element): void => { satelliteBackhaulCategory = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "gEOSatelliteID": (_el: _Element): void => { gEOSatelliteID = $._decode_implicit<GEOSatelliteID>(() => _decode_GEOSatelliteID)(_el); },
        "remoteUEsContextConnected": (_el: _Element): void => { remoteUEsContextConnected = $._decode_implicit<RemoteUEContextList>(() => _decode_RemoteUEContextList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFStartOfInterceptionWithEstablishedPDUSession,
        _extension_additions_list_spec_for_SMFStartOfInterceptionWithEstablishedPDUSession,
        _root_component_type_list_2_spec_for_SMFStartOfInterceptionWithEstablishedPDUSession,
        undefined,
    );
    return new SMFStartOfInterceptionWithEstablishedPDUSession(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        gTPTunnelID,
        pDUSessionType,
        sNSSAI,
        uEEndpoint,
        non3GPPAccessEndpoint,
        location,
        dNN,
        aMFID,
        hSMFURI,
        requestType,
        accessType,
        rATType,
        sMPDUDNRequest,
        timeOfSessionEstablishment,
        ePS5GSComboInfo,
        uEEPSPDNConnection,
        servingNetwork,
        gTPTunnelInfo,
        pCCRules,
        ePSStartOfInterceptionWithEstablishedPDNConnection,
        pFDDataForApps,
        satelliteBackhaulCategory,
        gEOSatelliteID,
        remoteUEsContextConnected
    );
}; }
    return _cached_decoder_for_SMFStartOfInterceptionWithEstablishedPDUSession(el);
}

let _cached_encoder_for_SMFStartOfInterceptionWithEstablishedPDUSession: $.ASN1Encoder<SMFStartOfInterceptionWithEstablishedPDUSession> | null = null;

/**
 * @summary Encodes a(n) SMFStartOfInterceptionWithEstablishedPDUSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFStartOfInterceptionWithEstablishedPDUSession, encoded as an ASN.1 Element.
 */
export
function _encode_SMFStartOfInterceptionWithEstablishedPDUSession (value: SMFStartOfInterceptionWithEstablishedPDUSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFStartOfInterceptionWithEstablishedPDUSession) { _cached_encoder_for_SMFStartOfInterceptionWithEstablishedPDUSession = function (value: SMFStartOfInterceptionWithEstablishedPDUSession, elGetter: $.ASN1Encoder<SMFStartOfInterceptionWithEstablishedPDUSession>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_FTEID, $.BER)(value.gTPTunnelID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_PDUSessionType, $.BER)(value.pDUSessionType, $.BER),
            /* IF_ABSENT  */ ((value.sNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER),
            /* IF_ABSENT  */ ((value.non3GPPAccessEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_DNN, $.BER)(value.dNN, $.BER),
            /* IF_ABSENT  */ ((value.aMFID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_AMFID, $.BER)(value.aMFID, $.BER)),
            /* IF_ABSENT  */ ((value.hSMFURI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER),
            /* IF_ABSENT  */ ((value.accessType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_AccessType, $.BER)(value.accessType, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.sMPDUDNRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfSessionEstablishment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_Timestamp, $.BER)(value.timeOfSessionEstablishment, $.BER)),
            /* IF_ABSENT  */ ((value.ePS5GSComboInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uEEPSPDNConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_UEEPSPDNConnection, $.BER)(value.uEEPSPDNConnection, $.BER)),
            /* IF_ABSENT  */ ((value.servingNetwork === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER)),
            /* IF_ABSENT  */ ((value.gTPTunnelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.pCCRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER)),
            /* IF_ABSENT  */ ((value.ePSStartOfInterceptionWithEstablishedPDNConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_EPSStartOfInterceptionWithEstablishedPDNConnection, $.BER)(value.ePSStartOfInterceptionWithEstablishedPDNConnection, $.BER)),
            /* IF_ABSENT  */ ((value.pFDDataForApps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_PFDDataForApps, $.BER)(value.pFDDataForApps, $.BER)),
            /* IF_ABSENT  */ ((value.satelliteBackhaulCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_SBIType, $.BER)(value.satelliteBackhaulCategory, $.BER)),
            /* IF_ABSENT  */ ((value.gEOSatelliteID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_GEOSatelliteID, $.BER)(value.gEOSatelliteID, $.BER)),
            /* IF_ABSENT  */ ((value.remoteUEsContextConnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_RemoteUEContextList, $.BER)(value.remoteUEsContextConnected, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFStartOfInterceptionWithEstablishedPDUSession(value, elGetter);
}


/* eslint-enable */
