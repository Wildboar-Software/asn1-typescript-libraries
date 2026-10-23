/* eslint-disable */
import {
    OPTIONAL,
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
import { EPSBearerContextCreated, _decode_EPSBearerContextCreated, _encode_EPSBearerContextCreated } from "../TS33128Payloads/EPSBearerContextCreated.ta.mjs";
// export { EPSBearerContextCreated, _decode_EPSBearerContextCreated, _encode_EPSBearerContextCreated } from "../TS33128Payloads/EPSBearerContextCreated.ta.mjs";
import { EPSBearerContextForRemoval, _decode_EPSBearerContextForRemoval, _encode_EPSBearerContextForRemoval } from "../TS33128Payloads/EPSBearerContextForRemoval.ta.mjs";
// export { EPSBearerContextForRemoval, _decode_EPSBearerContextForRemoval, _encode_EPSBearerContextForRemoval } from "../TS33128Payloads/EPSBearerContextForRemoval.ta.mjs";
import { PDNConnectionIndicationFlags, _decode_PDNConnectionIndicationFlags, _encode_PDNConnectionIndicationFlags } from "../TS33128Payloads/PDNConnectionIndicationFlags.ta.mjs";
// export { PDNConnectionIndicationFlags, _decode_PDNConnectionIndicationFlags, _encode_PDNConnectionIndicationFlags } from "../TS33128Payloads/PDNConnectionIndicationFlags.ta.mjs";
import { PDNHandoverIndication, _decode_PDNHandoverIndication, _encode_PDNHandoverIndication } from "../TS33128Payloads/PDNHandoverIndication.ta.mjs";
// export { PDNHandoverIndication, _decode_PDNHandoverIndication, _encode_PDNHandoverIndication } from "../TS33128Payloads/PDNHandoverIndication.ta.mjs";
import { PDNNBIFOMSupport, _decode_PDNNBIFOMSupport, _encode_PDNNBIFOMSupport } from "../TS33128Payloads/PDNNBIFOMSupport.ta.mjs";
// export { PDNNBIFOMSupport, _decode_PDNNBIFOMSupport, _encode_PDNNBIFOMSupport } from "../TS33128Payloads/PDNNBIFOMSupport.ta.mjs";
import { FiveGSInterworkingInfo, _decode_FiveGSInterworkingInfo, _encode_FiveGSInterworkingInfo } from "../TS33128Payloads/FiveGSInterworkingInfo.ta.mjs";
// export { FiveGSInterworkingInfo, _decode_FiveGSInterworkingInfo, _encode_FiveGSInterworkingInfo } from "../TS33128Payloads/FiveGSInterworkingInfo.ta.mjs";
import { CSRMFI, _decode_CSRMFI, _encode_CSRMFI } from "../TS33128Payloads/CSRMFI.ta.mjs";
// export { CSRMFI, _decode_CSRMFI, _encode_CSRMFI } from "../TS33128Payloads/CSRMFI.ta.mjs";
import { RestorationOfPDNConnectionsSupport, _decode_RestorationOfPDNConnectionsSupport, _encode_RestorationOfPDNConnectionsSupport } from "../TS33128Payloads/RestorationOfPDNConnectionsSupport.ta.mjs";
// export { RestorationOfPDNConnectionsSupport, _decode_RestorationOfPDNConnectionsSupport, _encode_RestorationOfPDNConnectionsSupport } from "../TS33128Payloads/RestorationOfPDNConnectionsSupport.ta.mjs";
import { PGWChangeIndication, _decode_PGWChangeIndication, _encode_PGWChangeIndication } from "../TS33128Payloads/PGWChangeIndication.ta.mjs";
// export { PGWChangeIndication, _decode_PGWChangeIndication, _encode_PGWChangeIndication } from "../TS33128Payloads/PGWChangeIndication.ta.mjs";
import { PGWRNSI, _decode_PGWRNSI, _encode_PGWRNSI } from "../TS33128Payloads/PGWRNSI.ta.mjs";
// export { PGWRNSI, _decode_PGWRNSI, _encode_PGWRNSI } from "../TS33128Payloads/PGWRNSI.ta.mjs";


/**
 * @summary EPSPDNConnectionEstablishment
 * @description
 * 
 * In the case of standalone EPS, the IRI-POI in the SGW/PGW shall generate an
 * xIRI containing an ePSPDNConnectionEstablishment record when the IRI-POI
 * present in the SGW/PGW detects that a PDN Connection has been established for
 * the target UE. The IRI-POI present in the SGW/PGW shall generate the xIRI for
 * the following events:
 *
 * - The SGW/PGW creates a new PDN Connection in the target UE context of the
 *   SGW/PGW (see TS 23.401 [50] clauses 5.7.3 and 5.7.4).
 *
 * In the case of interworked EPS/5GS, the IRI-POI in the SMF+PGW-C shall
 * generate an xIRI containing an SMFPDUSessionEstablishment record (see clause
 * 6.2.3.2.2) when the IRI-POI present in the SMF+PGW-C detects that a
 * single-access PDU Session or PDN Connection has been established for the
 * target UE. The IRI-POI present in the SMF+PGW-C shall generate the xIRI for
 * the following events:
 *
 * - The SMF+PGW-C creates a new PDN Connection in the target UE context of the
 *   SMF+PGW-C (see TS 23.401 [50] clause 5.7.4).
 *
 * - The SMF+PGW-C creates a new PDU Session context or SM Context for the
 *   target UE (see TS 29.502 [16] clause 5.2.2.2 and clause 5.2.2.7).
 *
 * When the SMFPDUSessionEstablishment record (see clause 6.2.3.2.2) is used to
 * report the creation of a new PDN Connection:
 *
 * - The ePSPDNConnectionEstablishment field shall be populated with the
 *   information in table 6.3.3.2.2-1.
 *
 * - If there is no SUPI associated to the SM context for the target UE, the
 *   SUPI field of the SMFPDUSessionEstablishment record shall be populated with
 *   the value of the IMSI from the target UE context.
 *
 * - If there is no PDU Session ID present in the PCO of the request or response
 *   messages or associated to the context for the PDN connection, the
 *   pDUSessionID field of the SMFPDUSessionEstablishment record shall be
 *   populated with the EBI of the default bearer for the PDN Connection.
 *
 * - If there is no 5G UP tunnel present in the context associated to the PDN
 *   Connection, the gTPTunnelID field of the SMFPDUSessionEstablishment record
 *   shall be populated with the F-TEID for the PGW S5 or S8 interface for the
 *   default bearer of the PDN Connection.
 *
 * Table 6.3.3.4.2-1 gives the LI_HI2 IRI message type for this record as BEGIN.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionEstablishment ::= SEQUENCE
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
 *     bearerContextsCreated              [17] SEQUENCE OF EPSBearerContextCreated,
 *     bearerContextsMarkedForRemoval     [18] SEQUENCE OF EPSBearerContextForRemoval OPTIONAL,
 *     indicationFlags                    [19] PDNConnectionIndicationFlags OPTIONAL,
 *     handoverIndication                 [20] PDNHandoverIndication OPTIONAL,
 *     nBIFOMSupport                      [21] PDNNBIFOMSupport OPTIONAL,
 *     fiveGSInterworkingInfo             [22] FiveGSInterworkingInfo OPTIONAL,
 *     cSRMFI                             [23] CSRMFI OPTIONAL,
 *     restorationOfPDNConnectionsSupport [24] RestorationOfPDNConnectionsSupport OPTIONAL,
 *     pGWChangeIndication                [25] PGWChangeIndication OPTIONAL,
 *     pGWRNSI                            [26] PGWRNSI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSPDNConnectionEstablishment {
    /**
     * @summary `ePSSubscriberIDs`.
     * @description
     *
     * EPS Subscriber Identities associated with the PDN connection (e.g. as
     * provided by the MME or SGW in the associated Create Session Request or as
     * associated with the PDN connection in the context known at the NF). The
     * IMSI shall be present except for unauthenticated emergency sessions.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly defaultBearerID: EPSBearerID;
    /**
     * @summary `gTPTunnelInfo`.
     * @description
     *
     * Contains the information for the Control Plane GTP Tunnels present in the
     * Create Session Request or known in the context at the SGW or PGW. See
     * table 6.2.3.2.2-3.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * clause 8.14) present in the Create Session Request or the IP Address
     * associated to the PDN Connection in the context known at the NF (see TS
     * 23.401 [50] clauses 5.7.3 and 5.7.4).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly uEEndpoints: OPTIONAL<UEEndpointAddress[]>;
    /**
     * @summary `non3GPPAccessEndpoint`.
     * @description
     *
     * UE's local IP address used to reach the ePDG, if present in the Create
     * Session Request (see TS 29.274 [87] clause 7.2.1) or known at the context
     * at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information present in the Create Session Request (see TS 29.274
     * [87] clause 7.2.1) or known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `additionalLocation`.
     * @description
     *
     * Additional location information present in the Create Session Request,
     * known in the context at the SGW or PGW, or known at the MDF.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly additionalLocation: OPTIONAL<Location>;
    /**
     * @summary `aPN`.
     * @description
     *
     * Access Point Name associated with the PDN connection present in the
     * Create Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.6) or
     * known at the context at the SGW or PGW (see TS 23.401 [50] clause 5.7.4),
     * as defined in TS 23.003[19] clause 9.1.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * access). Shall be set to nonThreeGPPAccess by the ePDG or by the PGW when
     * the Create Session Request for the PDN connection is received from an
     * ePDG. Shall be set to threeGPPAccess by the SGW or by the PGW when the
     * Create Session Request for the PDN connection is received from an SGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly accessType: OPTIONAL<AccessType>;
    /**
     * @summary `rATType`.
     * @description
     *
     * RAT Type associated with the PDN connection. Shall be present if included
     * in the Create Session Request (see TS 29.274 [87] clause 7.2.1) or known
     * at the context at the SGW or PGW (see TS 23.401 [50] clause 5.6.4).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<RATType>;
    /**
     * @summary `protocolConfigurationOptions`.
     * @description
     *
     * Shall be present if the Create Session Request or the Create Session
     * Response (see TS 29.274 [87] clauses 7.2.2 and 7.2.3) contains the
     * Protocol Configuration, Additional Protocol Configuration Options or
     * extended Protocol Configuration Options IE. See table 6.3.3.2.2-4.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    /**
     * @summary `servingNetwork`.
     * @description
     *
     * Shall be present if this IE is in the Create Session Request or the
     * context for the PDN connection at the SGW/PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
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
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    /**
     * @summary `bearerContextsCreated`.
     * @description
     *
     * Shall include a list of the Bearer Contexts created sent in the Create
     * Session Response message (see TS 29.274 [87] clause 7.2.2). See table
     * 6.3.3.2.2-2.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly bearerContextsCreated: EPSBearerContextCreated[];
    /**
     * @summary `bearerContextsMarkedForRemoval`.
     * @description
     *
     * Shall include a list of the Bearer Contexts to be removed sent in the
     * Create Session Response message (see TS 29.274 [87] clause 7.2.2). See
     * table 6.3.3.2.2-3.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly bearerContextsMarkedForRemoval: OPTIONAL<EPSBearerContextForRemoval[]>;
    /**
     * @summary `indicationFlags`.
     * @description
     *
     * Shall be included if the Indication Flags field is present in the Create
     * Session Request (see TS 29.274 [87] clause 7.2.1). The value of this
     * parameter shall be set to the value of the Indication IE (see TS 29.274
     * [87] clause 8.12) starting with octet 5.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly indicationFlags: OPTIONAL<PDNConnectionIndicationFlags>;
    /**
     * @summary `handoverIndication`.
     * @description
     *
     * Shall be present if the Handover Indication is set to 1 in the Create
     * Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.12).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly handoverIndication: OPTIONAL<PDNHandoverIndication>;
    /**
     * @summary `nBIFOMSupport`.
     * @description
     *
     * Shall be present if the NBIFOM Support Indication is set to 1 in the
     * Create Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.12).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly nBIFOMSupport: OPTIONAL<PDNNBIFOMSupport>;
    /**
     * @summary `fiveGSInterworkingInfo`.
     * @description
     *
     * Shall be present if the 5GS Interworking Indication is present in the
     * Create Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.12). See
     * table 6.3.3.2.2-5.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fiveGSInterworkingInfo: OPTIONAL<FiveGSInterworkingInfo>;
    /**
     * @summary `cSRMFI`.
     * @description
     *
     * Shall be present if the Create Session Request Message Forwarded
     * Indication (CSRMFI) is present in the Create Session Request (see TS
     * 29.274 [87] clauses 7.2.1 and 8.12). Indicates the Create Session Request
     * message has been forwarded by a PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly cSRMFI: OPTIONAL<CSRMFI>;
    /**
     * @summary `restorationOfPDNConnectionsSupport`.
     * @description
     *
     * Shall be present if the Restoration of PDN connection after an PGW-C/SMF
     * Change Support Indication is present in the Create Session Request (see
     * TS 29.274 [87] clauses 7.2.1 and 8.12).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly restorationOfPDNConnectionsSupport: OPTIONAL<RestorationOfPDNConnectionsSupport>;
    /**
     * @summary `pGWChangeIndication`.
     * @description
     *
     * Shall be present if the PGW Change Indication is present in the Create
     * Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.12).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly pGWChangeIndication: OPTIONAL<PGWChangeIndication>;
    /**
     * @summary `pGWRNSI`.
     * @description
     *
     * Shall be present if the PGW Redirection due to mismatch with Network
     * Slice subscribed by the UE Support Indication is present in the Create
     * Session Request (see TS 29.274 [87] clauses 7.2.1 and 8.12).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly pGWRNSI: OPTIONAL<PGWRNSI>;
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
        bearerContextsCreated: EPSBearerContextCreated[],
        bearerContextsMarkedForRemoval?: OPTIONAL<EPSBearerContextForRemoval[]>,
        indicationFlags?: OPTIONAL<PDNConnectionIndicationFlags>,
        handoverIndication?: OPTIONAL<PDNHandoverIndication>,
        nBIFOMSupport?: OPTIONAL<PDNNBIFOMSupport>,
        fiveGSInterworkingInfo?: OPTIONAL<FiveGSInterworkingInfo>,
        cSRMFI?: OPTIONAL<CSRMFI>,
        restorationOfPDNConnectionsSupport?: OPTIONAL<RestorationOfPDNConnectionsSupport>,
        pGWChangeIndication?: OPTIONAL<PGWChangeIndication>,
        pGWRNSI?: OPTIONAL<PGWRNSI>,
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
        this.bearerContextsCreated = bearerContextsCreated;
        this.bearerContextsMarkedForRemoval = bearerContextsMarkedForRemoval;
        this.indicationFlags = indicationFlags;
        this.handoverIndication = handoverIndication;
        this.nBIFOMSupport = nBIFOMSupport;
        this.fiveGSInterworkingInfo = fiveGSInterworkingInfo;
        this.cSRMFI = cSRMFI;
        this.restorationOfPDNConnectionsSupport = restorationOfPDNConnectionsSupport;
        this.pGWChangeIndication = pGWChangeIndication;
        this.pGWRNSI = pGWRNSI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSPDNConnectionEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `EPSPDNConnectionEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSPDNConnectionEstablishment`.
     * @returns {EPSPDNConnectionEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (EPSPDNConnectionEstablishment)]: (EPSPDNConnectionEstablishment)[_K] }): EPSPDNConnectionEstablishment {
        return new EPSPDNConnectionEstablishment(_o.ePSSubscriberIDs, _o.iMSIUnauthenticated, _o.defaultBearerID, _o.gTPTunnelInfo, _o.pDNConnectionType, _o.uEEndpoints, _o.non3GPPAccessEndpoint, _o.location, _o.additionalLocation, _o.aPN, _o.requestType, _o.accessType, _o.rATType, _o.protocolConfigurationOptions, _o.servingNetwork, _o.sMPDUDNRequest, _o.bearerContextsCreated, _o.bearerContextsMarkedForRemoval, _o.indicationFlags, _o.handoverIndication, _o.nBIFOMSupport, _o.fiveGSInterworkingInfo, _o.cSRMFI, _o.restorationOfPDNConnectionsSupport, _o.pGWChangeIndication, _o.pGWRNSI, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of EPSPDNConnectionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSPDNConnectionEstablishment: $.ComponentSpec[] = [
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
    new $.ComponentSpec("bearerContextsCreated", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("bearerContextsMarkedForRemoval", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("indicationFlags", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("handoverIndication", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("nBIFOMSupport", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("fiveGSInterworkingInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("cSRMFI", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("restorationOfPDNConnectionsSupport", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("pGWChangeIndication", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("pGWRNSI", true, $.hasTag(_TagClass.context, 26))
];

/**
 * @summary The Trailing Root Component Types of EPSPDNConnectionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSPDNConnectionEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSPDNConnectionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSPDNConnectionEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSPDNConnectionEstablishment: $.ASN1Decoder<EPSPDNConnectionEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNConnectionEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNConnectionEstablishment (el: _Element): EPSPDNConnectionEstablishment {
    if (!_cached_decoder_for_EPSPDNConnectionEstablishment) { _cached_decoder_for_EPSPDNConnectionEstablishment = function (el: _Element): EPSPDNConnectionEstablishment {
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
    let bearerContextsCreated!: EPSBearerContextCreated[];
    let bearerContextsMarkedForRemoval: OPTIONAL<EPSBearerContextForRemoval[]>;
    let indicationFlags: OPTIONAL<PDNConnectionIndicationFlags>;
    let handoverIndication: OPTIONAL<PDNHandoverIndication>;
    let nBIFOMSupport: OPTIONAL<PDNNBIFOMSupport>;
    let fiveGSInterworkingInfo: OPTIONAL<FiveGSInterworkingInfo>;
    let cSRMFI: OPTIONAL<CSRMFI>;
    let restorationOfPDNConnectionsSupport: OPTIONAL<RestorationOfPDNConnectionsSupport>;
    let pGWChangeIndication: OPTIONAL<PGWChangeIndication>;
    let pGWRNSI: OPTIONAL<PGWRNSI>;
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
        "bearerContextsCreated": (_el: _Element): void => { bearerContextsCreated = $._decode_implicit<EPSBearerContextCreated[]>(() => $._decodeSequenceOf<EPSBearerContextCreated>(() => _decode_EPSBearerContextCreated))(_el); },
        "bearerContextsMarkedForRemoval": (_el: _Element): void => { bearerContextsMarkedForRemoval = $._decode_implicit<EPSBearerContextForRemoval[]>(() => $._decodeSequenceOf<EPSBearerContextForRemoval>(() => _decode_EPSBearerContextForRemoval))(_el); },
        "indicationFlags": (_el: _Element): void => { indicationFlags = $._decode_implicit<PDNConnectionIndicationFlags>(() => _decode_PDNConnectionIndicationFlags)(_el); },
        "handoverIndication": (_el: _Element): void => { handoverIndication = $._decode_implicit<PDNHandoverIndication>(() => _decode_PDNHandoverIndication)(_el); },
        "nBIFOMSupport": (_el: _Element): void => { nBIFOMSupport = $._decode_implicit<PDNNBIFOMSupport>(() => _decode_PDNNBIFOMSupport)(_el); },
        "fiveGSInterworkingInfo": (_el: _Element): void => { fiveGSInterworkingInfo = $._decode_implicit<FiveGSInterworkingInfo>(() => _decode_FiveGSInterworkingInfo)(_el); },
        "cSRMFI": (_el: _Element): void => { cSRMFI = $._decode_implicit<CSRMFI>(() => _decode_CSRMFI)(_el); },
        "restorationOfPDNConnectionsSupport": (_el: _Element): void => { restorationOfPDNConnectionsSupport = $._decode_implicit<RestorationOfPDNConnectionsSupport>(() => _decode_RestorationOfPDNConnectionsSupport)(_el); },
        "pGWChangeIndication": (_el: _Element): void => { pGWChangeIndication = $._decode_implicit<PGWChangeIndication>(() => _decode_PGWChangeIndication)(_el); },
        "pGWRNSI": (_el: _Element): void => { pGWRNSI = $._decode_implicit<PGWRNSI>(() => _decode_PGWRNSI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSPDNConnectionEstablishment,
        _extension_additions_list_spec_for_EPSPDNConnectionEstablishment,
        _root_component_type_list_2_spec_for_EPSPDNConnectionEstablishment,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSPDNConnectionEstablishment(
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
        bearerContextsCreated,
        bearerContextsMarkedForRemoval,
        indicationFlags,
        handoverIndication,
        nBIFOMSupport,
        fiveGSInterworkingInfo,
        cSRMFI,
        restorationOfPDNConnectionsSupport,
        pGWChangeIndication,
        pGWRNSI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSPDNConnectionEstablishment(el);
}

let _cached_encoder_for_EPSPDNConnectionEstablishment: $.ASN1Encoder<EPSPDNConnectionEstablishment> | null = null;

/**
 * @summary Encodes a(n) EPSPDNConnectionEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNConnectionEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNConnectionEstablishment (value: EPSPDNConnectionEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNConnectionEstablishment) { _cached_encoder_for_EPSPDNConnectionEstablishment = function (value: EPSPDNConnectionEstablishment, elGetter: $.ASN1Encoder<EPSPDNConnectionEstablishment>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(26 + (_unrecognized ? _unrecognized.length : 0));
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
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<EPSBearerContextCreated>(() => _encode_EPSBearerContextCreated, $.BER), $.BER)(value.bearerContextsCreated, $.BER);
    if (value.bearerContextsMarkedForRemoval !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeSequenceOf<EPSBearerContextForRemoval>(() => _encode_EPSBearerContextForRemoval, $.BER), $.BER)(value.bearerContextsMarkedForRemoval, $.BER);
    }
    if (value.indicationFlags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_PDNConnectionIndicationFlags, $.BER)(value.indicationFlags, $.BER);
    }
    if (value.handoverIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_PDNHandoverIndication, $.BER)(value.handoverIndication, $.BER);
    }
    if (value.nBIFOMSupport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_PDNNBIFOMSupport, $.BER)(value.nBIFOMSupport, $.BER);
    }
    if (value.fiveGSInterworkingInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_FiveGSInterworkingInfo, $.BER)(value.fiveGSInterworkingInfo, $.BER);
    }
    if (value.cSRMFI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_CSRMFI, $.BER)(value.cSRMFI, $.BER);
    }
    if (value.restorationOfPDNConnectionsSupport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_RestorationOfPDNConnectionsSupport, $.BER)(value.restorationOfPDNConnectionsSupport, $.BER);
    }
    if (value.pGWChangeIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_PGWChangeIndication, $.BER)(value.pGWChangeIndication, $.BER);
    }
    if (value.pGWRNSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_PGWRNSI, $.BER)(value.pGWRNSI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSPDNConnectionEstablishment(value, elGetter);
}


/* eslint-enable */
