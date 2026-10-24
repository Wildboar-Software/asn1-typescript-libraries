/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
// export { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { PDNConnectionType, _decode_PDNConnectionType, _encode_PDNConnectionType, _enum_for_PDNConnectionType } from "../TS33128Payloads/PDNConnectionType.ta.mjs";
// export { PDNConnectionType, _enum_for_PDNConnectionType, PDNConnectionType_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_iPv4v6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4v6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_nonIP /* IMPORTED_LONG_ENUMERATION_ITEM */, nonIP /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDNConnectionType_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDNConnectionType, _encode_PDNConnectionType } from "../TS33128Payloads/PDNConnectionType.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
import { EPSPDNConnectionRequestType, _decode_EPSPDNConnectionRequestType, _encode_EPSPDNConnectionRequestType, _enum_for_EPSPDNConnectionRequestType } from "../TS33128Payloads/EPSPDNConnectionRequestType.ta.mjs";
// export { EPSPDNConnectionRequestType, _enum_for_EPSPDNConnectionRequestType, EPSPDNConnectionRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSPDNConnectionRequestType_handover /* IMPORTED_LONG_ENUMERATION_ITEM */, handover /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSPDNConnectionRequestType_rLOS /* IMPORTED_LONG_ENUMERATION_ITEM */, rLOS /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSPDNConnectionRequestType_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSPDNConnectionRequestType_handoverOfEmergencyBearerServices /* IMPORTED_LONG_ENUMERATION_ITEM */, handoverOfEmergencyBearerServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSPDNConnectionRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSPDNConnectionRequestType, _encode_EPSPDNConnectionRequestType } from "../TS33128Payloads/EPSPDNConnectionRequestType.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { EPSBearerContext, _decode_EPSBearerContext, _encode_EPSBearerContext } from "../TS33128Payloads/EPSBearerContext.ta.mjs";
// export { EPSBearerContext, _decode_EPSBearerContext, _encode_EPSBearerContext } from "../TS33128Payloads/EPSBearerContext.ta.mjs";


/**
 * @summary EPSStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * In the case of standalone EPS, the IRI-POI in the SGW/PGW shall generate an
 * xIRI containing an ePSStartOfInterceptionWithEstablishedPDNConnection record
 * when the IRI-POI present in the SGW/PGW detects that a PDN Connection has
 * already been established for the target UE when interception starts. The
 * IRI-POI present in the SGW/PGW shall generate the xIRI for following events:
 *
 * - The SGW/PGW has an existing PDN Connection in the target UE context of the
 *   SGW/PGW (see TS 23.401 [50] clause 5.7.4).
 *
 * In the case of interworked EPS/5GS, the IRI-POI in the SMF+PGW-C shall
 * generate an xIRI containing an
 * SMFStartOfInterceptionWithEstablishedPDUSession record (see clause 6.2.3.2.5)
 * when the IRI-POI present in the SMF+PGW-C detects that a single-access PDU
 * Session or PDN Connection has already been established for the target UE when
 * interception starts. The IRI-POI present in the SMF+PGW-C shall generate the
 * xIRI for the following events:
 *
 * - The SMF+PGW-C has an existing PDN Connection in the target UE context of
 *   the SMF+PGW-C (see TS 23.401 [50] clause 5.7.4).
 *
 * - The SMF+PGW-C has an existing PDU Session context or SM Context for the
 *   target UE (see TS 29.502 [16] clause 5.2.2.2 and clause 5.2.2.7).
 *
 * When the SMFStartOfInterceptionWithEstablishedPDUSession record (see clause
 * 6.2.3.2.5) is used to report an existing PDN Connection:
 *
 * - The ePSStartOfInterceptionWithEstablishedPDNConnection field shall be
 *   populated with the information in table 6.3.3.2.5-1.
 *
 * - If there is no SUPI associated to the SM context for the target UE, the
 *   SUPI field of the SMFStartOfInterceptionWithEstablishedPDUSession record
 *   shall be populated with the value of the IMSI from the target UE context.
 *
 * - If there is no PDU Session ID associated to the context for the PDN
 *   connection, the pDUSessionID field of the
 *   SMFStartOfInterceptionWithEstablishedPDUSession record shall be populated
 *   with the EBI of the default bearer for the PDN Connection.
 *
 * - If there is no 5G UP tunnel present in the context associated to the PDN
 *   Connection, the gTPTunnelID field of the
 *   SMFStartOfInterceptionWithEstablishedPDNConnection record shall be
 *   populated with the F-TEID for the PGW S5 or S8 interface for the default
 *   bearer of the PDN Connection.
 *
 * Table 6.3.3.4.2-1 gives the LI_HI2 IRI message type for this record as BEGIN.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSStartOfInterceptionWithEstablishedPDNConnection ::= SEQUENCE
 * {
 *     ePSSubscriberIDs                   [1] EPSSubscriberIDs,
 *     iMSIUnauthenticated                [2] IMSIUnauthenticatedIndication OPTIONAL,
 *     defaultBearerID                    [3] EPSBearerID,
 *     gTPTunnelInfo                      [4] GTPTunnelInfo OPTIONAL,
 *     pDNConnectionType                  [5] PDNConnectionType,
 *     uEEndpoints                        [6] SEQUENCE OF UEEndpointAddress OPTIONAL,
 *     non3GPPAccessEndpoint              [7] UEEndpointAddress OPTIONAL,
 *     location                           [8] Location OPTIONAL,
 *     additionalLocation                 [9] Location OPTIONAL,
 *     aPN                                [10] APN,
 *     requestType                        [11] EPSPDNConnectionRequestType OPTIONAL,
 *     accessType                         [12] AccessType OPTIONAL,
 *     rATType                            [13] RATType OPTIONAL,
 *     protocolConfigurationOptions       [14] PDNProtocolConfigurationOptions OPTIONAL,
 *     servingNetwork                     [15] SMFServingNetwork OPTIONAL,
 *     sMPDUDNRequest                     [16] SMPDUDNRequest OPTIONAL,
 *     bearerContexts                     [17] SEQUENCE OF EPSBearerContext
 * }
 * ```
 * 
 * @class
 */
export
class EPSStartOfInterceptionWithEstablishedPDNConnection {
    /**
     * @summary `ePSSubscriberIDs`.
     * @description
     *
     * EPS Subscriber Identities associated with the PDN connection (as
     * associated with the PDN connection in the context known at the NF). The
     * IMSI shall be present except for unauthenticated emergency sessions.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly ePSSubscriberIDs: EPSSubscriberIDs;
    /**
     * @summary `iMSIUnauthenticated`.
     * @description
     *
     * Shall be present if an IMSI is present in the ePSSubscriberIDs and set to
     * "true" if the IMSI has not been authenticated, or "false" if it has been
     * authenticated.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    /**
     * @summary `defaultBearerID`.
     * @description
     *
     * Shall contain the EPS Bearer Identity of the default bearer associated
     * with the PDN connection.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly defaultBearerID: EPSBearerID;
    /**
     * @summary `gTPTunnelInfo`.
     * @description
     *
     * Contains the information for the Control Plane GTP Tunnels known in the
     * context at the SGW or PGW. See table 6.2.3.2.2-3.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    /**
     * @summary `pDNConnectionType`.
     * @description
     *
     * Identifies selected PDN session type, see TS 29.274 [87] clause 8.34.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly pDNConnectionType: PDNConnectionType;
    /**
     * @summary `uEEndpoints`.
     * @description
     *
     * UE endpoint address(es) if available. Derived from the PDN Address
     * portion of the PDN Address Allocation parameter (see TS 29.274 [87]
     * clause 8.14) associated to the PDN Connection in the context known at the
     * NF (see TS 23.401 [50] clauses 5.7.3 and 5.7.4).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly uEEndpoints: OPTIONAL<UEEndpointAddress[]>;
    /**
     * @summary `non3GPPAccessEndpoint`.
     * @description
     *
     * UE's local IP address used to reach the ePDG, if known at the context at
     * the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `additionalLocation`.
     * @description
     *
     * Additional location information known in the context at the SGW or PGW,
     * or known at the MDF.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly additionalLocation: OPTIONAL<Location>;
    /**
     * @summary `aPN`.
     * @description
     *
     * Access Point Name associated with the PDN known at the context at the SGW
     * or PGW (see TS 23.401 [50] clause 5.7.4), as defined in TS 23.003[19]
     * clause 9.1.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly aPN: APN;
    /**
     * @summary `requestType`.
     * @description
     *
     * Type of request as derived from the Request Type described in TS 24.301
     * [50] clause 9.9.4.14 and TS 24.008 [95] clause 10.5.6.17, if available.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly requestType: OPTIONAL<EPSPDNConnectionRequestType>;
    /**
     * @summary `accessType`.
     * @description
     *
     * Access type associated with the PDN connection (i.e. 3GPP or non-3GPP
     * access).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly accessType: OPTIONAL<AccessType>;
    /**
     * @summary `rATType`.
     * @description
     *
     * RAT Type associated with the PDN connection. Shall be present if known at
     * the context at the SGW or PGW (see TS 23.401 [50] clause 5.7.4).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<RATType>;
    /**
     * @summary `protocolConfigurationOptions`.
     * @description
     *
     * Shall be present the Protocol Configuration, Additional Protocol
     * Configuration Options or extended Protocol Configuration Options are
     * known in the context at the SGW or PGW. See table 6.3.3.2.2-4.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    /**
     * @summary `servingNetwork`.
     * @description
     *
     * Shall be present if this IE is in the context for the PDN connection at
     * the SGW/PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly servingNetwork: OPTIONAL<SMFServingNetwork>;
    /**
     * @summary `sMPDUDNRequest`.
     * @description
     *
     * Contents of the SM PDU DN Request container, if available, as described
     * in TS 24.501 [13] clause 9.11.4.15.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    /**
     * @summary `bearerContexts`.
     * @description
     *
     * Shall include a list of the Bearer Contexts present in the UE Context
     * (see TS 23.401 [50] clauses 5.7.3 and 5.7.4). See table 6.3.3.2.2-2.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.5.
     *
     * @public
     * @readonly
     */
    readonly bearerContexts: EPSBearerContext[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ePSSubscriberIDs: EPSSubscriberIDs,
        iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>,
        defaultBearerID: EPSBearerID,
        gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        pDNConnectionType: PDNConnectionType,
        uEEndpoints: OPTIONAL<UEEndpointAddress[]>,
        non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        location: OPTIONAL<Location>,
        additionalLocation: OPTIONAL<Location>,
        aPN: APN,
        requestType: OPTIONAL<EPSPDNConnectionRequestType>,
        accessType: OPTIONAL<AccessType>,
        rATType: OPTIONAL<RATType>,
        protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>,
        servingNetwork: OPTIONAL<SMFServingNetwork>,
        sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>,
        bearerContexts: EPSBearerContext[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ePSSubscriberIDs = ePSSubscriberIDs;
        this.iMSIUnauthenticated = iMSIUnauthenticated;
        this.defaultBearerID = defaultBearerID;
        this.gTPTunnelInfo = gTPTunnelInfo;
        this.pDNConnectionType = pDNConnectionType;
        this.uEEndpoints = uEEndpoints;
        this.non3GPPAccessEndpoint = non3GPPAccessEndpoint;
        this.location = location;
        this.additionalLocation = additionalLocation;
        this.aPN = aPN;
        this.requestType = requestType;
        this.accessType = accessType;
        this.rATType = rATType;
        this.protocolConfigurationOptions = protocolConfigurationOptions;
        this.servingNetwork = servingNetwork;
        this.sMPDUDNRequest = sMPDUDNRequest;
        this.bearerContexts = bearerContexts;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSStartOfInterceptionWithEstablishedPDNConnection
     * @description
     * 
     * This takes an `object` and converts it to a `EPSStartOfInterceptionWithEstablishedPDNConnection`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSStartOfInterceptionWithEstablishedPDNConnection`.
     * @returns {EPSStartOfInterceptionWithEstablishedPDNConnection}
     */
    public static _from_object (_o: { [_K in keyof (EPSStartOfInterceptionWithEstablishedPDNConnection)]: (EPSStartOfInterceptionWithEstablishedPDNConnection)[_K] }): EPSStartOfInterceptionWithEstablishedPDNConnection {
        return new EPSStartOfInterceptionWithEstablishedPDNConnection(_o.ePSSubscriberIDs, _o.iMSIUnauthenticated, _o.defaultBearerID, _o.gTPTunnelInfo, _o.pDNConnectionType, _o.uEEndpoints, _o.non3GPPAccessEndpoint, _o.location, _o.additionalLocation, _o.aPN, _o.requestType, _o.accessType, _o.rATType, _o.protocolConfigurationOptions, _o.servingNetwork, _o.sMPDUDNRequest, _o.bearerContexts, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pDNConnectionType`
         * @public
         * @static
         */

    public static _enum_for_pDNConnectionType = _enum_for_PDNConnectionType;        /**
         * @summary The enum used as the type of the component `requestType`
         * @public
         * @static
         */

    public static _enum_for_requestType = _enum_for_EPSPDNConnectionRequestType;        /**
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
 * @summary The Leading Root Component Types of EPSStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSStartOfInterceptionWithEstablishedPDNConnection: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSSubscriberIDs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultBearerID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDNConnectionType", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uEEndpoints", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("additionalLocation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("aPN", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("requestType", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("servingNetwork", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("bearerContexts", false, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of EPSStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSStartOfInterceptionWithEstablishedPDNConnection: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSStartOfInterceptionWithEstablishedPDNConnection: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection: $.ASN1Decoder<EPSStartOfInterceptionWithEstablishedPDNConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSStartOfInterceptionWithEstablishedPDNConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSStartOfInterceptionWithEstablishedPDNConnection (el: _Element): EPSStartOfInterceptionWithEstablishedPDNConnection {
    if (!_cached_decoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection) { _cached_decoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection = function (el: _Element): EPSStartOfInterceptionWithEstablishedPDNConnection {
    let ePSSubscriberIDs!: EPSSubscriberIDs;
    let iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    let defaultBearerID!: EPSBearerID;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let pDNConnectionType!: PDNConnectionType;
    let uEEndpoints: OPTIONAL<UEEndpointAddress[]>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let location: OPTIONAL<Location>;
    let additionalLocation: OPTIONAL<Location>;
    let aPN!: APN;
    let requestType: OPTIONAL<EPSPDNConnectionRequestType>;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    let servingNetwork: OPTIONAL<SMFServingNetwork>;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let bearerContexts!: EPSBearerContext[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); },
        "iMSIUnauthenticated": (_el: _Element): void => { iMSIUnauthenticated = $._decode_implicit<IMSIUnauthenticatedIndication>(() => _decode_IMSIUnauthenticatedIndication)(_el); },
        "defaultBearerID": (_el: _Element): void => { defaultBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "pDNConnectionType": (_el: _Element): void => { pDNConnectionType = $._decode_implicit<PDNConnectionType>(() => _decode_PDNConnectionType)(_el); },
        "uEEndpoints": (_el: _Element): void => { uEEndpoints = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "additionalLocation": (_el: _Element): void => { additionalLocation = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<EPSPDNConnectionRequestType>(() => _decode_EPSPDNConnectionRequestType)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "bearerContexts": (_el: _Element): void => { bearerContexts = $._decode_implicit<EPSBearerContext[]>(() => $._decodeSequenceOf<EPSBearerContext>(() => _decode_EPSBearerContext))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSStartOfInterceptionWithEstablishedPDNConnection,
        _extension_additions_list_spec_for_EPSStartOfInterceptionWithEstablishedPDNConnection,
        _root_component_type_list_2_spec_for_EPSStartOfInterceptionWithEstablishedPDNConnection,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSStartOfInterceptionWithEstablishedPDNConnection(
        ePSSubscriberIDs,
        iMSIUnauthenticated,
        defaultBearerID,
        gTPTunnelInfo,
        pDNConnectionType,
        uEEndpoints,
        non3GPPAccessEndpoint,
        location,
        additionalLocation,
        aPN,
        requestType,
        accessType,
        rATType,
        protocolConfigurationOptions,
        servingNetwork,
        sMPDUDNRequest,
        bearerContexts,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection(el);
}

let _cached_encoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection: $.ASN1Encoder<EPSStartOfInterceptionWithEstablishedPDNConnection> | null = null;

/**
 * @summary Encodes a(n) EPSStartOfInterceptionWithEstablishedPDNConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSStartOfInterceptionWithEstablishedPDNConnection, encoded as an ASN.1 Element.
 */
export
function _encode_EPSStartOfInterceptionWithEstablishedPDNConnection (value: EPSStartOfInterceptionWithEstablishedPDNConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection) { _cached_encoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection = function (value: EPSStartOfInterceptionWithEstablishedPDNConnection, elGetter: $.ASN1Encoder<EPSStartOfInterceptionWithEstablishedPDNConnection>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(17 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER);
    if (value.iMSIUnauthenticated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMSIUnauthenticatedIndication, $.BER)(value.iMSIUnauthenticated, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSBearerID, $.BER)(value.defaultBearerID, $.BER);
    if (value.gTPTunnelInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDNConnectionType, $.BER)(value.pDNConnectionType, $.BER);
    if (value.uEEndpoints !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoints, $.BER);
    }
    if (value.non3GPPAccessEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.additionalLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.additionalLocation, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_APN, $.BER)(value.aPN, $.BER);
    if (value.requestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_EPSPDNConnectionRequestType, $.BER)(value.requestType, $.BER);
    }
    if (value.accessType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_AccessType, $.BER)(value.accessType, $.BER);
    }
    if (value.rATType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_RATType, $.BER)(value.rATType, $.BER);
    }
    if (value.protocolConfigurationOptions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER);
    }
    if (value.servingNetwork !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER);
    }
    if (value.sMPDUDNRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<EPSBearerContext>(() => _encode_EPSBearerContext, $.BER), $.BER)(value.bearerContexts, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSStartOfInterceptionWithEstablishedPDNConnection(value, elGetter);
}


/* eslint-enable */
