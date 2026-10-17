/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters_iRIversion, _decode_IRI_Parameters_iRIversion, _encode_IRI_Parameters_iRIversion, _enum_for_IRI_Parameters_iRIversion } from "../UmtsHI2Operations/IRI-Parameters-iRIversion.ta.mjs";
// export { IRI_Parameters_iRIversion, _enum_for_IRI_Parameters_iRIversion, IRI_Parameters_iRIversion_version2 /* IMPORTED_LONG_ENUMERATION_ITEM */, version2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version3 /* IMPORTED_LONG_ENUMERATION_ITEM */, version3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version4 /* IMPORTED_LONG_ENUMERATION_ITEM */, version4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version6 /* IMPORTED_LONG_ENUMERATION_ITEM */, version6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_lastVersion /* IMPORTED_LONG_ENUMERATION_ITEM */, lastVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_iRIversion, _encode_IRI_Parameters_iRIversion } from "../UmtsHI2Operations/IRI-Parameters-iRIversion.ta.mjs";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { IRI_Parameters_initiator, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator } from "../UmtsHI2Operations/IRI-Parameters-initiator.ta.mjs";
// export { IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator, IRI_Parameters_initiator_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_terminating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator } from "../UmtsHI2Operations/IRI-Parameters-initiator.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../UmtsHI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../UmtsHI2Operations/PartyInformation.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../UmtsHI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../UmtsHI2Operations/SMS-report.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { GPRSCorrelationNumber, _decode_GPRSCorrelationNumber, _encode_GPRSCorrelationNumber } from "../UmtsHI2Operations/GPRSCorrelationNumber.ta.mjs";
// export { GPRSCorrelationNumber, _decode_GPRSCorrelationNumber, _encode_GPRSCorrelationNumber } from "../UmtsHI2Operations/GPRSCorrelationNumber.ta.mjs";
import { GPRSEvent, _decode_GPRSEvent, _encode_GPRSEvent, _enum_for_GPRSEvent } from "../UmtsHI2Operations/GPRSEvent.ta.mjs";
// export { GPRSEvent, _enum_for_GPRSEvent, GPRSEvent_pDPContextActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_startOfInterceptionWithPDPContextActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithPDPContextActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_pDPContextDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_gPRSAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_gPRSDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_locationInfoUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, locationInfoUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_pDPContextModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_servingSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, servingSystem /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_startOfInterceptionWithMSAttached /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithMSAttached /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_packetDataHeaderInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, packetDataHeaderInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_hSS_Subscriber_Record_Change /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS_Subscriber_Record_Change /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_registration_Termination /* IMPORTED_LONG_ENUMERATION_ITEM */, registration_Termination /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_location_Up_Date /* IMPORTED_LONG_ENUMERATION_ITEM */, location_Up_Date /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_cancel_Location /* IMPORTED_LONG_ENUMERATION_ITEM */, cancel_Location /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_register_Location /* IMPORTED_LONG_ENUMERATION_ITEM */, register_Location /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_location_Information_Request /* IMPORTED_LONG_ENUMERATION_ITEM */, location_Information_Request /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GPRSEvent, _encode_GPRSEvent } from "../UmtsHI2Operations/GPRSEvent.ta.mjs";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
import { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../UmtsHI2Operations/GPRSOperationErrorCode.ta.mjs";
// export { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../UmtsHI2Operations/GPRSOperationErrorCode.ta.mjs";
import { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../UmtsHI2Operations/UmtsQos.ta.mjs";
// export { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../UmtsHI2Operations/UmtsQos.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { IMSevent, _decode_IMSevent, _encode_IMSevent, _enum_for_IMSevent } from "../UmtsHI2Operations/IMSevent.ta.mjs";
// export { IMSevent, _enum_for_IMSevent, IMSevent_unfilteredSIPmessage /* IMPORTED_LONG_ENUMERATION_ITEM */, unfilteredSIPmessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_sIPheaderOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, sIPheaderOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_decryptionKeysAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, decryptionKeysAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_startOfInterceptionForIMSEstablishedSession /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionForIMSEstablishedSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_xCAPRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, xCAPRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_xCAPResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, xCAPResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_ccUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, ccUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMSevent, _encode_IMSevent } from "../UmtsHI2Operations/IMSevent.ta.mjs";
import { LDIevent, _decode_LDIevent, _encode_LDIevent, _enum_for_LDIevent } from "../UmtsHI2Operations/LDIevent.ta.mjs";
// export { LDIevent, _enum_for_LDIevent, LDIevent_targetEntersIA /* IMPORTED_LONG_ENUMERATION_ITEM */, targetEntersIA /* IMPORTED_SHORT_ENUMERATION_ITEM */, LDIevent_targetLeavesIA /* IMPORTED_LONG_ENUMERATION_ITEM */, targetLeavesIA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LDIevent, _encode_LDIevent } from "../UmtsHI2Operations/LDIevent.ta.mjs";
import { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";
// export { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";
import { MediaDecryption_info, _decode_MediaDecryption_info, _encode_MediaDecryption_info } from "../UmtsHI2Operations/MediaDecryption-info.ta.mjs";
// export { MediaDecryption_info, _decode_MediaDecryption_info, _encode_MediaDecryption_info } from "../UmtsHI2Operations/MediaDecryption-info.ta.mjs";
import { PacketDataHeaderInformation, _decode_PacketDataHeaderInformation, _encode_PacketDataHeaderInformation } from "../UmtsHI2Operations/PacketDataHeaderInformation.ta.mjs";
// export { PacketDataHeaderInformation, _decode_PacketDataHeaderInformation, _encode_PacketDataHeaderInformation } from "../UmtsHI2Operations/PacketDataHeaderInformation.ta.mjs";
import { MediaSecFailureIndication, _decode_MediaSecFailureIndication, _encode_MediaSecFailureIndication, _enum_for_MediaSecFailureIndication } from "../UmtsHI2Operations/MediaSecFailureIndication.ta.mjs";
// export { MediaSecFailureIndication, _enum_for_MediaSecFailureIndication, MediaSecFailureIndication_genericFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, genericFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaSecFailureIndication, _encode_MediaSecFailureIndication } from "../UmtsHI2Operations/MediaSecFailureIndication.ta.mjs";
import { PANI_Header_Info, _decode_PANI_Header_Info, _encode_PANI_Header_Info } from "../UmtsHI2Operations/PANI-Header-Info.ta.mjs";
// export { PANI_Header_Info, _decode_PANI_Header_Info, _encode_PANI_Header_Info } from "../UmtsHI2Operations/PANI-Header-Info.ta.mjs";
import { IMS_VoIP_Correlation, _decode_IMS_VoIP_Correlation, _encode_IMS_VoIP_Correlation } from "../UmtsHI2Operations/IMS-VoIP-Correlation.ta.mjs";
// export { IMS_VoIP_Correlation, _decode_IMS_VoIP_Correlation, _encode_IMS_VoIP_Correlation } from "../UmtsHI2Operations/IMS-VoIP-Correlation.ta.mjs";
import { Current_Previous_Systems, _decode_Current_Previous_Systems, _encode_Current_Previous_Systems } from "../UmtsHI2Operations/Current-Previous-Systems.ta.mjs";
// export { Current_Previous_Systems, _decode_Current_Previous_Systems, _encode_Current_Previous_Systems } from "../UmtsHI2Operations/Current-Previous-Systems.ta.mjs";
import { Change_Of_Target_Identity, _decode_Change_Of_Target_Identity, _encode_Change_Of_Target_Identity } from "../UmtsHI2Operations/Change-Of-Target-Identity.ta.mjs";
// export { Change_Of_Target_Identity, _decode_Change_Of_Target_Identity, _encode_Change_Of_Target_Identity } from "../UmtsHI2Operations/Change-Of-Target-Identity.ta.mjs";
import { Requesting_Node_Type, _decode_Requesting_Node_Type, _encode_Requesting_Node_Type, _enum_for_Requesting_Node_Type } from "../UmtsHI2Operations/Requesting-Node-Type.ta.mjs";
// export { Requesting_Node_Type, _enum_for_Requesting_Node_Type, Requesting_Node_Type_mSC /* IMPORTED_LONG_ENUMERATION_ITEM */, mSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_sMS_Centre /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS_Centre /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_gMLC /* IMPORTED_LONG_ENUMERATION_ITEM */, gMLC /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_sGSN /* IMPORTED_LONG_ENUMERATION_ITEM */, sGSN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Requesting_Node_Type, _encode_Requesting_Node_Type } from "../UmtsHI2Operations/Requesting-Node-Type.ta.mjs";
import { ExtendedLocParameters, _decode_ExtendedLocParameters, _encode_ExtendedLocParameters } from "../UmtsHI2Operations/ExtendedLocParameters.ta.mjs";
// export { ExtendedLocParameters, _decode_ExtendedLocParameters, _encode_ExtendedLocParameters } from "../UmtsHI2Operations/ExtendedLocParameters.ta.mjs";
import { LocationErrorCode, _decode_LocationErrorCode, _encode_LocationErrorCode } from "../UmtsHI2Operations/LocationErrorCode.ta.mjs";
// export { LocationErrorCode, _decode_LocationErrorCode, _encode_LocationErrorCode } from "../UmtsHI2Operations/LocationErrorCode.ta.mjs";
import { CSREvent, _decode_CSREvent, _encode_CSREvent, _enum_for_CSREvent } from "../UmtsHI2Operations/CSREvent.ta.mjs";
// export { CSREvent, _enum_for_CSREvent, CSREvent_cSREventMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, cSREventMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSREvent, _encode_CSREvent } from "../UmtsHI2Operations/CSREvent.ta.mjs";
import { PTC, _decode_PTC, _encode_PTC } from "../UmtsHI2Operations/PTC.ta.mjs";
// export { PTC, _decode_PTC, _encode_PTC } from "../UmtsHI2Operations/PTC.ta.mjs";
import { PTCEncryptionInfo, _decode_PTCEncryptionInfo, _encode_PTCEncryptionInfo } from "../UmtsHI2Operations/PTCEncryptionInfo.ta.mjs";
// export { PTCEncryptionInfo, _decode_PTCEncryptionInfo, _encode_PTCEncryptionInfo } from "../UmtsHI2Operations/PTCEncryptionInfo.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * One UMTS PS or IMS HI2 record. The delivery is an IRI-Begin, IRI-End,
 * IRI-Continue, or IRI-Report (clause 4.5.3).
 * 
 * For packet data, Begin opens a PDP context, End closes it, Continue carries
 * CC-related IRI while the context is active, and Report covers
 * non-communication events, failed attempts, and LALS (clause 6.5). IMS uses
 * the four record types as specified in clause 7.5, not as in clause 4.5.3. PTC
 * events of clauses 17 and 18 and cell-site reports of clause 16 are carried
 * here when they use this module. Stage 2 mandatory, conditional, and optional
 * inclusion overrides ASN.1 OPTIONAL. The LIID is required on every record.
 * Parameters with the same tag numbers stay identical from Release 5 onward.
 * 
 * 3GPP TS 33.108, clauses 4.5.3, 6.5, 7.5, 16, and 17, and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2DomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 domain
 *     iRIversion                [23] ENUMERATED
 *     {
 *         version2 (2),
 *         ...,
 *         version3 (3),
 *         version4 (4),
 *             -- note that version5 (5) cannot be used as it was missed in the version 5 of this
 *             -- ASN.1 module.
 *         version6 (6),
 *             -- vesion7(7) was ommited to align with ETSI TS 101 671.
 *         lastVersion (8)    } OPTIONAL,
 *         -- Optional parameter "iRIversion" (tag 23) was always redundant in 33.108, because
 *         -- the object identifier "hi2DomainId" was introduced into "IRI Parameters" in the
 *         -- initial version of 33.108v5.0.0. In order to keep backward compatibility, even when
 *         -- the version of the "hi2DomainId" parameter will be incremented it is recommended
 *         -- to always send to LEMF the same: enumeration value "lastVersion(8)".
 *         -- if not present, it means version 1 is handled
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     timeStamp                [3] TimeStamp,
 *         -- date and time of the event triggering the report.)
 *     initiator                 [4] ENUMERATED
 *     {
 *         not-Available        (0),
 *         originating-Target    (1),
 *             -- in case of GPRS, this indicates that the PDP context activation, modification
 *             -- or deactivation is MS requested
 *         terminating-Target    (2),
 *             -- in case of GPRS, this indicates that the PDP context activation, modification or
 *             -- deactivation is network initiated
 *     ...
 *     } OPTIONAL,
 * 
 *     locationOfTheTarget        [8] Location OPTIONAL,
 *         -- location of the target
 *         -- or cell site location
 *     partyInformation         [9] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party, the identiy(ies) of the party
 *         --)and all the information provided by the party.
 * 
 *     serviceCenterAddress    [13] PartyInformation OPTIONAL,
 *         -- e.g. in case of SMS message this parameter provides the address of  the relevant
 *         -- server
 *     sMS                        [14] SMS-report OPTIONAL,
 *         -- this parameter provides the SMS content and associated information
 * 
 *     national-Parameters        [16] National-Parameters OPTIONAL,
 *     gPRSCorrelationNumber    [18] GPRSCorrelationNumber OPTIONAL,
 *     gPRSevent                 [20] GPRSEvent OPTIONAL,
 *         -- This information is used to provide particular action of the target
 *         -- such as attach/detach
 *     sgsnAddress             [21] DataNodeAddress OPTIONAL,
 *     gPRSOperationErrorCode     [22] GPRSOperationErrorCode OPTIONAL,
 *     ggsnAddress             [24] DataNodeAddress OPTIONAL,
 *     qOS                        [25] UmtsQos OPTIONAL,
 *     networkIdentifier        [26] Network-Identifier OPTIONAL,
 *     sMSOriginatingAddress     [27] DataNodeAddress OPTIONAL,
 *     sMSTerminatingAddress     [28] DataNodeAddress OPTIONAL,
 *     iMSevent                [29] IMSevent OPTIONAL,
 *     sIPMessage                [30] OCTET STRING  OPTIONAL,
 *     servingSGSN-number        [31] OCTET STRING (SIZE (1..20))    OPTIONAL,
 *                                -- Coded according to 3GPP TS 29.002 [4] and 3GPP TS 23.003 25].
 *     servingSGSN-address        [32] OCTET STRING (SIZE (5..17))     OPTIONAL,
 *     -- Octets are coded according to 3GPP TS 23.003 [25]
 *     ...,
 *              -- Tag            [33] was taken into use by ETSI module in TS 101 671v2.13.1
 *     ldiEvent                 [34] LDIevent OPTIONAL,
 *     correlation             [35] CorrelationValues OPTIONAL,
 *     mediaDecryption-info    [36] MediaDecryption-info OPTIONAL,
 *     servingS4-SGSN-address    [37] OCTET STRING OPTIONAL,
 *     -- Diameter Origin-Host and Origin-Realm of the S4-SGSN based on the TS 29.272 [59].
 *     -- Only the data fields from the Diameter AVPs are provided concatenated
 *     -- with a semicolon to populate this field.
 *     sipMessageHeaderOffer   [38] OCTET STRING OPTIONAL,
 *     sipMessageHeaderAnswer  [39] OCTET STRING OPTIONAL,
 *     sdpOffer                [40] OCTET STRING OPTIONAL,
 *     sdpAnswer               [41] OCTET STRING OPTIONAL,
 *     uLITimestamp            [42] OCTET STRING (SIZE (8)) OPTIONAL,
 *     -- Coded according to 3GPP TS 29.060 [17]; The upper 4  octets shall carry the ULI Timestamp
 *     -- value; The lower 4 octets are undefined and shall be ignored by the receiver
 * 
 *     packetDataHeaderInformation         [43] PacketDataHeaderInformation    OPTIONAL,
 *     mediaSecFailureIndication       [44] MediaSecFailureIndication OPTIONAL,
 *     pANI-Header-Info        [45] SEQUENCE OF PANI-Header-Info        OPTIONAL,
 *     -- information extracted from P-Access-Network-Info headers of SIP message;
 *     -- described in TS 24.229 7.2A.4 [76]
 *     imsVoIP                    [46] IMS-VoIP-Correlation    OPTIONAL,
 *     xCAPmessage                [47] OCTET STRING OPTIONAL,
 *     -- The entire HTTP contents of any of the target's IMS supplementary service setting
 *     -- management or manipulation XCAP messages, mainly made through the Ut
 *     -- interface defined in the 3GPP TS 24 623 [77].
 *     ccUnavailableReason        [48] PrintableString    OPTIONAL,
 *     carrierSpecificData                    [49] OCTET STRING OPTIONAL,
 *     -- Copy of raw data specified by the CSP or his vendor related to HSS.
 *     current-Previous-Systems            [50] Current-Previous-Systems OPTIONAL,
 *     change-Of-Target-Identity                [51] Change-Of-Target-Identity OPTIONAL,
 *     requesting-Network-Identifier        [52] OCTET STRING OPTIONAL,
 *     -- the requesting network identifier PLMN id (Mobile Country Code and Mobile Network Country,
 *     -- defined in E212 [87]).
 *     requesting-Node-Type                    [53] Requesting-Node-Type OPTIONAL,
 *     serving-System-Identifier                [54] OCTET STRING OPTIONAL,
 *     -- the requesting network identifier (Mobile Country Code and Mobile Network Country,
 *     -- defined in E212 [87]).
 *     extendedLocParameters     [55]     ExtendedLocParameters OPTIONAL, -- LALS extended parameters
 *     locationErrorCode        [56]    LocationErrorCode OPTIONAL,    -- LALS error code
 *     cSREvent                [57]    CSREvent OPTIONAL,
 *     ptc                        [58]    PTC OPTIONAL,  -- PTC Events
 *     ptcEncryption            [59]    PTCEncryptionInfo OPTIONAL,
 *     -- PTC Security Information
 * 
 *     national-HI2-ASN1parameters    [255]    National-HI2-ASN1parameters    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2DomainId`.
     * @description
     * 
     * Object identifier of the 3GPP HI2 domain and of this module version.
     * Mandatory on every record. The LEMF uses it to see which annex B.3
     * version produced the IRI.
     * 
     * Annex B.3 assigns {itu-t(0) identified-organization(4) etsi(0)
     * securityDomain(2) lawfulIntercept(2) threeGPP(4) hi2(1) r17(17)
     * version-0(0)}: ITU-T, identified organization, ETSI, security domain,
     * lawful intercept, 3GPP, HI2, Release 17, version 0. It has been present
     * since TS 33.108 v5.0.0. Keep sending IRI version lastVersion (8) even if
     * this version arc changes.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly hi2DomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `iRIversion`.
     * @description
     * 
     * Version of these IRI parameters. If it is absent, version 1 is meant.
     * Annex B.3 recommends always sending lastVersion (8). The parameter is
     * redundant with the HI2 domain identifier, which has identified the module
     * since TS 33.108 v5.0.0.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly iRIversion: OPTIONAL<IRI_Parameters_iRIversion>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * LIID agreed between the LEA and the operator and associated with the
     * target. Required on every HI2 record and used on HI3 as well, so the LEMF
     * can identify the intercept and correlate the two ports.
     * 
     * Alphanumeric. It may carry a lawful-authorization reference and the date
     * the authorization was issued. One LIID per target identity, or one LIID
     * for several identities of the same target. A separate LIID for each LEA.
     * For IMS, one LIID across the target's IMS identities is recommended so
     * signalling can be matched to GSN content. If the GSN and the CSCF use
     * different LIIDs, the LEMF recovers the association.
     * 
     * 3GPP TS 33.108, clause 6.1.1 and clause 7.1.1.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time of the event that triggered the report, taken from the
     * intercepting node's clock. Stage 2 record tables make the event date and
     * time mandatory.
     * 
     * The precision should be at least one second; the required precision is
     * national. Subject to national requirements, the delivery function sends
     * each record within seconds of detection at least 95 percent of the time.
     * 
     * 3GPP TS 33.108, clause 6.2.1.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `initiator`.
     * @description
     * 
     * Whether the PDP-context activation, modification, or deactivation was
     * requested by the MS, initiated by the network, or is not available.
     * 
     * Mandatory on activation and deactivation (tables 6.5, 6.10, and 6.14). On
     * modification, include it when available (table 6.12).
     * 
     * 3GPP TS 33.108, clause 6.5.1 and annex B.3.
     * @public
     * @readonly
     */
    readonly initiator: OPTIONAL<IRI_Parameters_initiator>;
    /**
     * @summary `locationOfTheTarget`.
     * @description
     * 
     * Location of the target at the SGSN or at the LI LCS client when the event
     * or the LALS report is produced. Include it only when location reporting
     * is authorized.
     * 
     * Also the cell-site location. Clause 16.3 puts cell-site supplemental
     * information here, and a cell-site report includes the cell identity
     * (clause 16.4). On a location update the new SGSN sends the current
     * location; the old SGSN may send the previous location (table 6.6). When a
     * location is included, include the time at which the location source
     * established it.
     * 
     * 3GPP TS 33.108, table 6.2, clause 16.3, and annex B.3.
     * @public
     * @readonly
     */
    readonly locationOfTheTarget: OPTIONAL<Location>;
    /**
     * @summary `partyInformation`.
     * @description
     * 
     * Parties of the event, at most ten. Carries each observed target identity
     * the record tables require (MSISDN, IMSI, IMEI, non-local E.164 number,
     * SIP URI, TEL URI, IMPI) and the information that party supplied,
     * including the PDP address and the APN.
     * 
     * Provide at least one observed identity and the others when they are
     * available. Annex B.3: the concerned party, its identities, and the
     * information the party provided.
     * 
     * 3GPP TS 33.108, table 6.2, table 7.2, and annex B.3.
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `serviceCenterAddress`.
     * @description
     * 
     * Address of the server relevant to the event. For SMS, the SMSC: mandatory
     * when the SMS content is not delivered, and optional when the content is
     * delivered (table 6.7).
     * 
     * 3GPP TS 33.108, table 6.2, table 6.7, and annex B.3.
     * @public
     * @readonly
     */
    readonly serviceCenterAddress: OPTIONAL<PartyInformation>;
    /**
     * @summary `sMS`.
     * @description
     * 
     * SMS content and the information that goes with it. Conditional on an SMS
     * report, for backward compatibility, and it carries the SMS TPDU (TS
     * 23.040 clause 9.2).
     * 
     * The other party's identity is in the TPDU. For IRI-only SMS interception,
     * remove the content as annex P requires. National requirements choose
     * whether mobile-originated SMS is reported when the SGSN receives it or
     * when the SMSC accepts it, and the same choice for mobile-terminated SMS.
     * 
     * 3GPP TS 33.108, table 6.7 and annex B.3.
     * @public
     * @readonly
     */
    readonly sMS: OPTIONAL<SMS_report>;
    /**
     * @summary `national_Parameters`.
     * @description
     * 
     * National parameters agreed for a particular country or LEA. Clause 4.2
     * requires the handover specification to allow such options. Annex B.3 does
     * not define the contents.
     * 
     * 3GPP TS 33.108, clause 4.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `gPRSCorrelationNumber`.
     * @description
     * 
     * Correlation number, unique per PDP context. The LEMF uses it to tie CC to
     * IRI and to tie together the IRI of one PDP context. A CSCF may also place
     * a correlation value here. Not used for HSS interception.
     * 
     * Mandatory on PDP-context begin and end (tables 6.10 and 6.14) and on
     * modification (table 6.12). Conditional on the enhanced LALS report when
     * the triggering event had one (table 6.9I). Annex B.3 allows 8..20 octets.
     * An example is the GGSN address plus the charging ID; that layout is not
     * required.
     * 
     * 3GPP TS 33.108, clause 6.1.3 and clause 7.1.3.
     * @public
     * @readonly
     */
    readonly gPRSCorrelationNumber: OPTIONAL<GPRSCorrelationNumber>;
    /**
     * @summary `gPRSevent`.
     * @description
     * 
     * Which packet-domain or HLR action this record reports, such as attach,
     * detach, or a PDP-context event. Include it for those events. LALS reports
     * are sent without an event parameter.
     * 
     * 3GPP TS 33.108, clause 6.5 and table 6.1.
     * @public
     * @readonly
     */
    readonly gPRSevent: OPTIONAL<GPRSEvent>;
    /**
     * @summary `sgsnAddress`.
     * @description
     * 
     * SGSN address on the IRI. Clause 6 identifies the serving SGSN address
     * separately, as an IP address or as the S4-SGSN Diameter identity. Annex
     * B.3 does not further define this parameter.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `gPRSOperationErrorCode`.
     * @description
     * 
     * GMM cause or SM cause from 3GPP TS 24.008, without the
     * information-element identifier. Mandatory for a failed PDP-context
     * activation and for a deactivation. Conditional for a failed attach.
     * 
     * 3GPP TS 33.108, tables 6.3, 6.5, and 6.14.
     * @public
     * @readonly
     */
    readonly gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>;
    /**
     * @summary `ggsnAddress`.
     * @description
     * 
     * GGSN address on the IRI. GGSN IRI is a national option, and it is
     * required when 3G direct tunnel with the GGSN is used (clause 6.6). Annex
     * B.3 does not further define this parameter.
     * 
     * 3GPP TS 33.108, clause 6.6 and annex B.3.
     * @public
     * @readonly
     */
    readonly ggsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `qOS`.
     * @description
     * 
     * Quality of service of the PDP context. Include it when available on
     * activation. On modification, include it when available and the QoS
     * changed; if it did not change, reporting is optional (table 6.12).
     * 
     * Annex B.3 codes the radio QoS from TS 24.008 clause 10.5.6.5 without the
     * QoS information-element identifier and length, or the Gn QoS from TS
     * 29.060 clause 7.7.34.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly qOS: OPTIONAL<UmtsQos>;
    /**
     * @summary `networkIdentifier`.
     * @description
     * 
     * Operator identity plus the network element that produced the record
     * (SGSN, GGSN, CSCF, XCAP server, HLR, or LI LCS client). The operator
     * identity is mandatory and should be internationally unique. The element
     * identity is optional in general, required for GSM and UMTS in the United
     * States, and national regulation may require it.
     * 
     * Stage 2 record tables mark the network identifier mandatory, which
     * overrides ASN.1 OPTIONAL.
     * 
     * 3GPP TS 33.108, clause 6.1.2 and clause 7.1.2.
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `sMSOriginatingAddress`.
     * @description
     * 
     * Originator of the SMS. Optional on the SMS report (table 6.7). Table 6.2:
     * identifies the originator. The flattened table 6.7 cell runs the
     * originating and destination addresses together in one sentence.
     * 
     * 3GPP TS 33.108, table 6.2 and table 6.7.
     * @public
     * @readonly
     */
    readonly sMSOriginatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `sMSTerminatingAddress`.
     * @description
     * 
     * Intended recipient of the SMS. Optional on the SMS report. Table 6.2
     * calls this the terminating address; table 6.7's flattened cell calls it
     * the destination address of the SMS message.
     * 
     * 3GPP TS 33.108, table 6.2 and table 6.7.
     * @public
     * @readonly
     */
    readonly sMSTerminatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `iMSevent`.
     * @description
     * 
     * Which IMS action this record reports. The values defined for this module
     * are an unfiltered or header-only SIP message, decryption keys, start of
     * interception on an established session, an XCAP request or response, or
     * CC unavailable.
     * 
     * Mandatory on the IMS records in clause 7.5. Clause 7.5 also describes HSS
     * report kinds as IMS events; those kinds are not values of this
     * enumeration.
     * 
     * 3GPP TS 33.108, clause 7.5 and annex B.3.
     * @public
     * @readonly
     */
    readonly iMSevent: OPTIONAL<IMSevent>;
    /**
     * @summary `sIPMessage`.
     * @description
     * 
     * The SIP message, or only its header plus any SDP body. Mandatory on the
     * SIP-message report (table 7.3).
     * 
     * If the warrant is IRI only, delete specific content such as a MESSAGE
     * body and keep unknown headers. SMS content may be removed under annex P;
     * SMS headers stay when they are available. Location the provider knows,
     * including a PANI header, is removed when location is not authorized. SDP
     * is still reported for an IRI-only warrant.
     * 
     * 3GPP TS 33.108, table 7.2 and clause 7.5.
     * @public
     * @readonly
     */
    readonly sIPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_number`.
     * @description
     * 
     * E.164 number of the serving SGSN. Annex B.3: coded as in 3GPP TS 29.002
     * and TS 23.003, 1 to 20 octets.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly servingSGSN_number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_address`.
     * @description
     * 
     * IP address of the serving SGSN. Annex B.3: octets coded as in 3GPP TS
     * 23.003, 5 to 17 octets. The Diameter identity of an S4-SGSN is the
     * separate S4-SGSN address.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly servingSGSN_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ldiEvent`.
     * @description
     * 
     * Whether the target entered or left the interception area. Optional on a
     * location-update report, and only for location-dependent interception that
     * is authorized (table 6.6). Entry into the area with a PDP context active
     * also triggers a Begin record (clause 6.5.1.2).
     * 
     * 3GPP TS 33.108, table 6.6.
     * @public
     * @readonly
     */
    readonly ldiEvent: OPTIONAL<LDIevent>;
    /**
     * @summary `correlation`.
     * @description
     * 
     * Correlation other than the PDP-context correlation number. Use it for the
     * bearer correlation, for a second signalling bearer, for the SIP session,
     * or to tie an XCAP request to its response.
     * 
     * Conditional when it applies (tables 7.3, 7.4, 7.5, and 7.6). The CSCF
     * chooses the value; the layout is an implementation matter. For separated
     * IMS VoIP, the IMS VoIP correlation may be sent instead (clause 12).
     * 
     * 3GPP TS 33.108, clause 7.1.3 and table 7.2.
     * @public
     * @readonly
     */
    readonly correlation: OPTIONAL<CorrelationValues>;
    /**
     * @summary `mediaDecryption_info`.
     * @description
     * 
     * Session keys for decrypting the CC of the intercepted IMS session, one
     * key per media stream, when the DF has them. Sent on the
     * media-decryption-key report after MIKEY tickets are seen in SIP and the
     * KMS returns the keys.
     * 
     * When MIKEY-ticket media security is used and the CC is encrypted, the
     * keys go to the LEMF on HI2 (clause 4.4.2).
     * 
     * 3GPP TS 33.108, table 7.2, table 7.4, and clause 4.4.2.
     * @public
     * @readonly
     */
    readonly mediaDecryption_info: OPTIONAL<MediaDecryption_info>;
    /**
     * @summary `servingS4_SGSN_address`.
     * @description
     * 
     * Diameter Origin-Host and Origin-Realm of the S4-SGSN (3GPP TS 29.272).
     * Only the data of those AVPs, concatenated with a semicolon.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly servingS4_SGSN_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sipMessageHeaderOffer`.
     * @description
     * 
     * Header of the SIP message that carried the SDP offer. Only when
     * interception starts on an IMS session that is already up, and only when
     * the header is available (table 7.5, table 7.2 note 10).
     * 
     * 3GPP TS 33.108, table 7.5.
     * @public
     * @readonly
     */
    readonly sipMessageHeaderOffer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sipMessageHeaderAnswer`.
     * @description
     * 
     * Header of the SIP message that carried the SDP answer. Same condition as
     * the offer header: start of interception on an established session, and
     * only when available.
     * 
     * 3GPP TS 33.108, table 7.5.
     * @public
     * @readonly
     */
    readonly sipMessageHeaderAnswer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sdpOffer`.
     * @description
     * 
     * SDP offer used to establish the IMS session. Only for start of
     * interception on an already established session, and only when available.
     * SDP is reported even for an IRI-only warrant.
     * 
     * 3GPP TS 33.108, table 7.2 note 10 and table 7.5.
     * @public
     * @readonly
     */
    readonly sdpOffer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sdpAnswer`.
     * @description
     * 
     * SDP answer used to establish the IMS session. Only for start of
     * interception on an already established session, and only when available.
     * SDP is reported even for an IRI-only warrant.
     * 
     * 3GPP TS 33.108, table 7.2 note 10 and table 7.5.
     * @public
     * @readonly
     */
    readonly sdpAnswer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uLITimestamp`.
     * @description
     * 
     * Time at which the user location information was acquired. Optional on
     * PDP-context deactivation (table 6.14).
     * 
     * Coded as in 3GPP TS 29.060. The upper four octets carry the timestamp.
     * The lower four octets are undefined and the receiver shall ignore them.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly uLITimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `packetDataHeaderInformation`.
     * @description
     * 
     * Packet-header IRI for an active PDP context, either one packet at a time
     * or as a flow summary. The report is sent when a packet is seen, or when a
     * summary flow starts, hits the summary timer or the count threshold, or
     * ends, including when the PDP context is deactivated.
     * 
     * For IP fragments the 6-tuple may exist only on the first fragment, and
     * later fragments may not be reported.
     * 
     * 3GPP TS 33.108, clause 6.5.1.1.
     * @public
     * @readonly
     */
    readonly packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>;
    /**
     * @summary `mediaSecFailureIndication`.
     * @description
     * 
     * The procedure that fetches CC decryption keys from the KMS failed.
     * Optional on the media-decryption-key report (table 7.4).
     * 
     * 3GPP TS 33.108, table 7.4.
     * @public
     * @readonly
     */
    readonly mediaSecFailureIndication: OPTIONAL<MediaSecFailureIndication>;
    /**
     * @summary `pANI_Header_Info`.
     * @description
     * 
     * Elements copied from P-Access-Network-Info headers of SIP messages the
     * target's UE originated (3GPP TS 24.229 clause 7.2A.4). Optional when
     * available (tables 7.3 and 7.5).
     * 
     * If the warrant authorizes location, the MF copies the access type or
     * class and the location, and still sends the SIP message unmodified. If it
     * does not, location is removed from the raw SIP before delivery. Masking
     * the location instead of removing it is an implementation option.
     * 
     * 3GPP TS 33.108, clause 7.5 and annex B.3.
     * @public
     * @readonly
     */
    readonly pANI_Header_Info: OPTIONAL<PANI_Header_Info[]>;
    /**
     * @summary `imsVoIP`.
     * @description
     * 
     * Correlation numbers that bind the IRI and the CC of one IMS VoIP session.
     * The LEMF treats messages and content that carry those numbers as the same
     * session.
     * 
     * For separated IMS VoIP this may replace the PDP correlation number or the
     * general correlation parameter (clause 12.1.4, table 7.2 note 11).
     * 
     * 3GPP TS 33.108, clause 12.1.4.
     * @public
     * @readonly
     */
    readonly imsVoIP: OPTIONAL<IMS_VoIP_Correlation>;
    /**
     * @summary `xCAPmessage`.
     * @description
     * 
     * The whole HTTP message of an XCAP request or of the matching response for
     * the target's IMS supplementary-service settings, mainly on the Ut
     * interface (3GPP TS 24.623). That includes get, put, and delete on the
     * XCAP resources.
     * 
     * Mandatory on the XCAP report. Request and response are reported
     * separately (table 7.6). Settings changed outside Ut are for further
     * study.
     * 
     * 3GPP TS 33.108, clause 7.0, table 7.6, and annex B.3.
     * @public
     * @readonly
     */
    readonly xCAPmessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ccUnavailableReason`.
     * @description
     * 
     * Why the CC cannot be delivered. Clause 12.5: send the CC-unavailable
     * event only when the intercept requires media and the media does not enter
     * the CSP's network, including some local-breakout roaming cases in the
     * home network. Annex B.3 does not define the printable values.
     * 
     * 3GPP TS 33.108, clause 12.5 and annex B.3.
     * @public
     * @readonly
     */
    readonly ccUnavailableReason: OPTIONAL<PrintableString>;
    /**
     * @summary `carrierSpecificData`.
     * @description
     * 
     * Raw data the CSP or its vendor defines for an HLR or HSS subscription
     * update. Optional (tables 6.9D and 7.8). The CSP supplies the LEMF with
     * what is needed to understand it. Annex B.3 does not define the layout.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly carrierSpecificData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Previous_Systems`.
     * @description
     * 
     * Current and previous serving system from the intercepted MAP or Diameter
     * message: VPLMN identity, SGSN number, SGSN address, and S4-SGSN Diameter
     * identity.
     * 
     * On register location the current VPLMN identity is mandatory (table
     * 6.9F). Previous identities are included when available on cancel location
     * and on register location.
     * 
     * 3GPP TS 33.108, tables 6.9E and 6.9F.
     * @public
     * @readonly
     */
    readonly current_Previous_Systems: OPTIONAL<Current_Previous_Systems>;
    /**
     * @summary `change_Of_Target_Identity`.
     * @description
     * 
     * Old and new target identities for a subscriber-record change. The HLR
     * record shall state what changed among MSISDN, IMSI, and IMEI (table
     * 6.9D). The HSS record also carries SIP URI, TEL URI, and IMPI when they
     * are available (table 7.8).
     * 
     * 3GPP TS 33.108, table 6.9D and table 7.8.
     * @public
     * @readonly
     */
    readonly change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    /**
     * @summary `requesting_Network_Identifier`.
     * @description
     * 
     * PLMN identity (MCC and MNC, ITU-T E.212) of the network that requested
     * location information. Include it when available on a
     * location-information-request report (table 6.9G and table 7.10).
     * 
     * Table 6.2 and annex B.3 say "Mobile Network Country". Table 7.10 says
     * "Mobile Network Code". Both cite E.212.
     * 
     * 3GPP TS 33.108, table 6.9G, table 7.10, and annex B.3.
     * @public
     * @readonly
     */
    readonly requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requesting_Node_Type`.
     * @description
     * 
     * Kind of node that requested the location. Table 6.2: MSC, SMS Centre,
     * GMLC, MME, or SGSN. Table 6.9G says to provide it for a GMSC, SMS Centre,
     * GMLC, MME, or SGSN. Conditional on the location-information-request
     * report. Table 7.10, for the HSS, says the type is a GMLC when that is
     * what requested it.
     * 
     * 3GPP TS 33.108, table 6.2, table 6.9G, and table 7.10.
     * @public
     * @readonly
     */
    readonly requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    /**
     * @summary `serving_System_Identifier`.
     * @description
     * 
     * VPLMN identity (MCC and MNC, ITU-T E.212) of the serving system, or of
     * the third-party network interworking with the HLR. Mandatory on the
     * packet-domain serving-system report (table 6.8).
     * 
     * For the HSS, table 7.7 uses the current serving system as the visited
     * PLMN when the target is roaming, and table 7.9 includes the previous one
     * on deregistration when it is available. The annex B.3 comment repeats the
     * requesting-network wording; the stage-2 tables define this as the serving
     * or visited PLMN.
     * 
     * 3GPP TS 33.108, table 6.2, table 6.8, and annex B.3.
     * @public
     * @readonly
     */
    readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `extendedLocParameters`.
     * @description
     * 
     * Extra LALS location and QoS, mapped from the OMA MLP pos element (TS
     * 33.108 reference [88]). Optional when the LI LCS client has it (tables
     * 6.9H and 6.9I).
     * 
     * 3GPP TS 33.108, clause 6.5.1.1 and annex B.3.
     * @public
     * @readonly
     */
    readonly extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    /**
     * @summary `locationErrorCode`.
     * @description
     * 
     * Positioning error when a LALS fix fails. Tables 6.9H and 6.9I say to
     * include the error code if positioning is not successful. Annex B.3: the
     * OMA MLP result identifiers of reference [88] clause 5.4, integers 1 to
     * 699.
     * 
     * The paragraph after those tables says a target-positioning report is sent
     * only when the target is successfully located, and that no record is sent
     * when the target is not attached.
     * 
     * 3GPP TS 33.108, clause 6.5.1.1 and annex B.3.
     * @public
     * @readonly
     */
    readonly locationErrorCode: OPTIONAL<LocationErrorCode>;
    /**
     * @summary `cSREvent`.
     * @description
     * 
     * Marks this IRI-Report as a cell-site report. Sent when the MF could not
     * put the cell-site supplemental information into the original IRI. Not
     * repeated for a cell whose supplemental information was already sent and
     * has not changed.
     * 
     * 3GPP TS 33.108, clause 16.4 and table 16.2.
     * @public
     * @readonly
     */
    readonly cSREvent: OPTIONAL<CSREvent>;
    /**
     * @summary `ptc`.
     * @description
     * 
     * PTC events of clauses 17 and 18: registration, session, presence, lists,
     * access policy, floor control, group calls, and the related reports. The
     * LEMF reads the parameters inside for the particular PTC record.
     * 
     * 3GPP TS 33.108, clause 17 and annex B.3.
     * @public
     * @readonly
     */
    readonly ptc: OPTIONAL<PTC>;
    /**
     * @summary `ptcEncryption`.
     * @description
     * 
     * Cipher, key, and related values so the LEMF can decrypt PTC content when
     * the CSP provides or manages the encryption. Sent when the decryption data
     * is needed, and again when the keys change.
     * 
     * Table 18.1: the cipher and the key are mandatory; the salt is required
     * when the cipher needs one; the key encoding is required when the key is
     * not binary; other data is required when decryption needs it.
     * 
     * 3GPP TS 33.108, clause 18 and table 18.1.
     * @public
     * @readonly
     */
    readonly ptcEncryption: OPTIONAL<PTCEncryptionInfo>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @description
     * 
     * National HI2 parameters, as an ASN.1 value agreed for a particular
     * country or LEA. Clause 4.2 requires room for such options. Annex B.3 does
     * not define the contents.
     * 
     * 3GPP TS 33.108, clause 4.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2DomainId: OBJECT_IDENTIFIER,
        iRIversion: OPTIONAL<IRI_Parameters_iRIversion>,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        initiator: OPTIONAL<IRI_Parameters_initiator>,
        locationOfTheTarget: OPTIONAL<Location>,
        partyInformation: OPTIONAL<PartyInformation[]>,
        serviceCenterAddress: OPTIONAL<PartyInformation>,
        sMS: OPTIONAL<SMS_report>,
        national_Parameters: OPTIONAL<National_Parameters>,
        gPRSCorrelationNumber: OPTIONAL<GPRSCorrelationNumber>,
        gPRSevent: OPTIONAL<GPRSEvent>,
        sgsnAddress: OPTIONAL<DataNodeAddress>,
        gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>,
        ggsnAddress: OPTIONAL<DataNodeAddress>,
        qOS: OPTIONAL<UmtsQos>,
        networkIdentifier: OPTIONAL<Network_Identifier>,
        sMSOriginatingAddress: OPTIONAL<DataNodeAddress>,
        sMSTerminatingAddress: OPTIONAL<DataNodeAddress>,
        iMSevent: OPTIONAL<IMSevent>,
        sIPMessage: OPTIONAL<OCTET_STRING>,
        servingSGSN_number: OPTIONAL<OCTET_STRING>,
        servingSGSN_address: OPTIONAL<OCTET_STRING>,
        ldiEvent: OPTIONAL<LDIevent>,
        correlation: OPTIONAL<CorrelationValues>,
        mediaDecryption_info: OPTIONAL<MediaDecryption_info>,
        servingS4_SGSN_address: OPTIONAL<OCTET_STRING>,
        sipMessageHeaderOffer: OPTIONAL<OCTET_STRING>,
        sipMessageHeaderAnswer: OPTIONAL<OCTET_STRING>,
        sdpOffer: OPTIONAL<OCTET_STRING>,
        sdpAnswer: OPTIONAL<OCTET_STRING>,
        uLITimestamp: OPTIONAL<OCTET_STRING>,
        packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>,
        mediaSecFailureIndication: OPTIONAL<MediaSecFailureIndication>,
        pANI_Header_Info: OPTIONAL<PANI_Header_Info[]>,
        imsVoIP: OPTIONAL<IMS_VoIP_Correlation>,
        xCAPmessage: OPTIONAL<OCTET_STRING>,
        ccUnavailableReason: OPTIONAL<PrintableString>,
        carrierSpecificData: OPTIONAL<OCTET_STRING>,
        current_Previous_Systems: OPTIONAL<Current_Previous_Systems>,
        change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>,
        requesting_Network_Identifier: OPTIONAL<OCTET_STRING>,
        requesting_Node_Type: OPTIONAL<Requesting_Node_Type>,
        serving_System_Identifier: OPTIONAL<OCTET_STRING>,
        extendedLocParameters: OPTIONAL<ExtendedLocParameters>,
        locationErrorCode: OPTIONAL<LocationErrorCode>,
        cSREvent: OPTIONAL<CSREvent>,
        ptc: OPTIONAL<PTC>,
        ptcEncryption: OPTIONAL<PTCEncryptionInfo>,
        national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2DomainId = hi2DomainId;
        this.iRIversion = iRIversion;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.initiator = initiator;
        this.locationOfTheTarget = locationOfTheTarget;
        this.partyInformation = partyInformation;
        this.serviceCenterAddress = serviceCenterAddress;
        this.sMS = sMS;
        this.national_Parameters = national_Parameters;
        this.gPRSCorrelationNumber = gPRSCorrelationNumber;
        this.gPRSevent = gPRSevent;
        this.sgsnAddress = sgsnAddress;
        this.gPRSOperationErrorCode = gPRSOperationErrorCode;
        this.ggsnAddress = ggsnAddress;
        this.qOS = qOS;
        this.networkIdentifier = networkIdentifier;
        this.sMSOriginatingAddress = sMSOriginatingAddress;
        this.sMSTerminatingAddress = sMSTerminatingAddress;
        this.iMSevent = iMSevent;
        this.sIPMessage = sIPMessage;
        this.servingSGSN_number = servingSGSN_number;
        this.servingSGSN_address = servingSGSN_address;
        this.ldiEvent = ldiEvent;
        this.correlation = correlation;
        this.mediaDecryption_info = mediaDecryption_info;
        this.servingS4_SGSN_address = servingS4_SGSN_address;
        this.sipMessageHeaderOffer = sipMessageHeaderOffer;
        this.sipMessageHeaderAnswer = sipMessageHeaderAnswer;
        this.sdpOffer = sdpOffer;
        this.sdpAnswer = sdpAnswer;
        this.uLITimestamp = uLITimestamp;
        this.packetDataHeaderInformation = packetDataHeaderInformation;
        this.mediaSecFailureIndication = mediaSecFailureIndication;
        this.pANI_Header_Info = pANI_Header_Info;
        this.imsVoIP = imsVoIP;
        this.xCAPmessage = xCAPmessage;
        this.ccUnavailableReason = ccUnavailableReason;
        this.carrierSpecificData = carrierSpecificData;
        this.current_Previous_Systems = current_Previous_Systems;
        this.change_Of_Target_Identity = change_Of_Target_Identity;
        this.requesting_Network_Identifier = requesting_Network_Identifier;
        this.requesting_Node_Type = requesting_Node_Type;
        this.serving_System_Identifier = serving_System_Identifier;
        this.extendedLocParameters = extendedLocParameters;
        this.locationErrorCode = locationErrorCode;
        this.cSREvent = cSREvent;
        this.ptc = ptc;
        this.ptcEncryption = ptcEncryption;
        this.national_HI2_ASN1parameters = national_HI2_ASN1parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters`.
     * @returns {IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters)]: (IRI_Parameters)[_K] }): IRI_Parameters {
        return new IRI_Parameters(_o.hi2DomainId, _o.iRIversion, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.initiator, _o.locationOfTheTarget, _o.partyInformation, _o.serviceCenterAddress, _o.sMS, _o.national_Parameters, _o.gPRSCorrelationNumber, _o.gPRSevent, _o.sgsnAddress, _o.gPRSOperationErrorCode, _o.ggsnAddress, _o.qOS, _o.networkIdentifier, _o.sMSOriginatingAddress, _o.sMSTerminatingAddress, _o.iMSevent, _o.sIPMessage, _o.servingSGSN_number, _o.servingSGSN_address, _o.ldiEvent, _o.correlation, _o.mediaDecryption_info, _o.servingS4_SGSN_address, _o.sipMessageHeaderOffer, _o.sipMessageHeaderAnswer, _o.sdpOffer, _o.sdpAnswer, _o.uLITimestamp, _o.packetDataHeaderInformation, _o.mediaSecFailureIndication, _o.pANI_Header_Info, _o.imsVoIP, _o.xCAPmessage, _o.ccUnavailableReason, _o.carrierSpecificData, _o.current_Previous_Systems, _o.change_Of_Target_Identity, _o.requesting_Network_Identifier, _o.requesting_Node_Type, _o.serving_System_Identifier, _o.extendedLocParameters, _o.locationErrorCode, _o.cSREvent, _o.ptc, _o.ptcEncryption, _o.national_HI2_ASN1parameters, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `iRIversion`
         * @description
         * 
         * Version of the IRI parameters. Absence means version 1. Annex B.3
         * recommends always sending lastVersion (8).
         * 
         * 3GPP TS 33.108, annex B.3.
         * @public
         * @static
         */

    public static _enum_for_iRIversion = _enum_for_IRI_Parameters_iRIversion;        /**
         * @summary The enum used as the type of the component `initiator`
         * @description
         * 
         * Whether the PDP-context operation was requested by the MS, initiated
         * by the network, or is not available.
         * 
         * 3GPP TS 33.108, clause 6.5.1.
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_IRI_Parameters_initiator;        /**
         * @summary The enum used as the type of the component `gPRSevent`
         * @description
         * 
         * Packet-domain or HLR action that caused this IRI. LALS reports are
         * sent without an event parameter.
         * 
         * 3GPP TS 33.108, clause 6.5.
         * @public
         * @static
         */

    public static _enum_for_gPRSevent = _enum_for_GPRSEvent;        /**
         * @summary The enum used as the type of the component `iMSevent`
         * @description
         * 
         * IMS action that caused this IRI: SIP message, decryption keys, start
         * of interception, XCAP, or CC unavailable.
         * 
         * 3GPP TS 33.108, clause 7.5.
         * @public
         * @static
         */

    public static _enum_for_iMSevent = _enum_for_IMSevent;        /**
         * @summary The enum used as the type of the component `ldiEvent`
         * @description
         * 
         * Whether the target entered or left the interception area. Only for
         * location-dependent interception.
         * 
         * 3GPP TS 33.108, table 6.6.
         * @public
         * @static
         */

    public static _enum_for_ldiEvent = _enum_for_LDIevent;        /**
         * @summary The enum used as the type of the component `mediaSecFailureIndication`
         * @description
         * 
         * Retrieval of media decryption keys from the KMS failed. Optional on
         * the media-decryption-key report.
         * 
         * 3GPP TS 33.108, table 7.4.
         * @public
         * @static
         */

    public static _enum_for_mediaSecFailureIndication = _enum_for_MediaSecFailureIndication;        /**
         * @summary The enum used as the type of the component `requesting_Node_Type`
         * @description
         * 
         * Node that requested location information, such as an MSC, SMS Centre,
         * GMLC, MME, or SGSN.
         * 
         * 3GPP TS 33.108, table 6.2 and table 6.9G.
         * @public
         * @static
         */

    public static _enum_for_requesting_Node_Type = _enum_for_Requesting_Node_Type;        /**
         * @summary The enum used as the type of the component `cSREvent`
         * @description
         * 
         * Marks this IRI-Report as a cell-site report.
         * 
         * 3GPP TS 33.108, clause 16.4.
         * @public
         * @static
         */

    public static _enum_for_cSREvent = _enum_for_CSREvent;
}

/**
 * @summary The Leading Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2DomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iRIversion", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("locationOfTheTarget", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceCenterAddress", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("gPRSCorrelationNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("gPRSevent", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("gPRSOperationErrorCode", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("ggsnAddress", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("qOS", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("sMSOriginatingAddress", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("sMSTerminatingAddress", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("iMSevent", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("sIPMessage", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("servingSGSN-number", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("servingSGSN-address", true, $.hasTag(_TagClass.context, 32))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("ldiEvent", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("correlation", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("mediaDecryption-info", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("servingS4-SGSN-address", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("sipMessageHeaderOffer", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("sipMessageHeaderAnswer", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("sdpOffer", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("sdpAnswer", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("uLITimestamp", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("packetDataHeaderInformation", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("mediaSecFailureIndication", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("pANI-Header-Info", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("imsVoIP", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("xCAPmessage", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("ccUnavailableReason", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("carrierSpecificData", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("current-Previous-Systems", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("change-Of-Target-Identity", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("requesting-Network-Identifier", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("requesting-Node-Type", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("serving-System-Identifier", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("extendedLocParameters", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("locationErrorCode", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("cSREvent", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("ptc", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("ptcEncryption", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("national-HI2-ASN1parameters", true, $.hasTag(_TagClass.context, 255))
];

let _cached_decoder_for_IRI_Parameters: $.ASN1Decoder<IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters (el: _Element): IRI_Parameters {
    if (!_cached_decoder_for_IRI_Parameters) { _cached_decoder_for_IRI_Parameters = function (el: _Element): IRI_Parameters {
    let hi2DomainId!: OBJECT_IDENTIFIER;
    let iRIversion: OPTIONAL<IRI_Parameters_iRIversion>;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let initiator: OPTIONAL<IRI_Parameters_initiator>;
    let locationOfTheTarget: OPTIONAL<Location>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let serviceCenterAddress: OPTIONAL<PartyInformation>;
    let sMS: OPTIONAL<SMS_report>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    let gPRSCorrelationNumber: OPTIONAL<GPRSCorrelationNumber>;
    let gPRSevent: OPTIONAL<GPRSEvent>;
    let sgsnAddress: OPTIONAL<DataNodeAddress>;
    let gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>;
    let ggsnAddress: OPTIONAL<DataNodeAddress>;
    let qOS: OPTIONAL<UmtsQos>;
    let networkIdentifier: OPTIONAL<Network_Identifier>;
    let sMSOriginatingAddress: OPTIONAL<DataNodeAddress>;
    let sMSTerminatingAddress: OPTIONAL<DataNodeAddress>;
    let iMSevent: OPTIONAL<IMSevent>;
    let sIPMessage: OPTIONAL<OCTET_STRING>;
    let servingSGSN_number: OPTIONAL<OCTET_STRING>;
    let servingSGSN_address: OPTIONAL<OCTET_STRING>;
    let ldiEvent: OPTIONAL<LDIevent>;
    let correlation: OPTIONAL<CorrelationValues>;
    let mediaDecryption_info: OPTIONAL<MediaDecryption_info>;
    let servingS4_SGSN_address: OPTIONAL<OCTET_STRING>;
    let sipMessageHeaderOffer: OPTIONAL<OCTET_STRING>;
    let sipMessageHeaderAnswer: OPTIONAL<OCTET_STRING>;
    let sdpOffer: OPTIONAL<OCTET_STRING>;
    let sdpAnswer: OPTIONAL<OCTET_STRING>;
    let uLITimestamp: OPTIONAL<OCTET_STRING>;
    let packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>;
    let mediaSecFailureIndication: OPTIONAL<MediaSecFailureIndication>;
    let pANI_Header_Info: OPTIONAL<PANI_Header_Info[]>;
    let imsVoIP: OPTIONAL<IMS_VoIP_Correlation>;
    let xCAPmessage: OPTIONAL<OCTET_STRING>;
    let ccUnavailableReason: OPTIONAL<PrintableString>;
    let carrierSpecificData: OPTIONAL<OCTET_STRING>;
    let current_Previous_Systems: OPTIONAL<Current_Previous_Systems>;
    let change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    let requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    let requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    let serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    let locationErrorCode: OPTIONAL<LocationErrorCode>;
    let cSREvent: OPTIONAL<CSREvent>;
    let ptc: OPTIONAL<PTC>;
    let ptcEncryption: OPTIONAL<PTCEncryptionInfo>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2DomainId": (_el: _Element): void => { hi2DomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "iRIversion": (_el: _Element): void => { iRIversion = $._decode_implicit<IRI_Parameters_iRIversion>(() => _decode_IRI_Parameters_iRIversion)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<IRI_Parameters_initiator>(() => _decode_IRI_Parameters_initiator)(_el); },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => {
            partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el);
            if (partyInformation.length < 1 || partyInformation.length > 10) {
                throw new ASN1SizeError("IRI_Parameters.partyInformation violates SIZE constraint");
            }
        },
        "serviceCenterAddress": (_el: _Element): void => { serviceCenterAddress = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_implicit<SMS_report>(() => _decode_SMS_report)(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "gPRSCorrelationNumber": (_el: _Element): void => { gPRSCorrelationNumber = $._decode_implicit<GPRSCorrelationNumber>(() => _decode_GPRSCorrelationNumber)(_el); },
        "gPRSevent": (_el: _Element): void => { gPRSevent = $._decode_implicit<GPRSEvent>(() => _decode_GPRSEvent)(_el); },
        "sgsnAddress": (_el: _Element): void => { sgsnAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "gPRSOperationErrorCode": (_el: _Element): void => { gPRSOperationErrorCode = $._decode_implicit<GPRSOperationErrorCode>(() => _decode_GPRSOperationErrorCode)(_el); },
        "ggsnAddress": (_el: _Element): void => { ggsnAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "qOS": (_el: _Element): void => { qOS = $._decode_explicit<UmtsQos>(() => _decode_UmtsQos)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "sMSOriginatingAddress": (_el: _Element): void => { sMSOriginatingAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "sMSTerminatingAddress": (_el: _Element): void => { sMSTerminatingAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "iMSevent": (_el: _Element): void => { iMSevent = $._decode_implicit<IMSevent>(() => _decode_IMSevent)(_el); },
        "sIPMessage": (_el: _Element): void => { sIPMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingSGSN-number": (_el: _Element): void => {
            servingSGSN_number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (servingSGSN_number.length < 1 || servingSGSN_number.length > 20) {
                throw new ASN1SizeError("IRI_Parameters.servingSGSN_number violates SIZE constraint");
            }
        },
        "servingSGSN-address": (_el: _Element): void => {
            servingSGSN_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (servingSGSN_address.length < 5 || servingSGSN_address.length > 17) {
                throw new ASN1SizeError("IRI_Parameters.servingSGSN_address violates SIZE constraint");
            }
        },
        "ldiEvent": (_el: _Element): void => { ldiEvent = $._decode_implicit<LDIevent>(() => _decode_LDIevent)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_explicit<CorrelationValues>(() => _decode_CorrelationValues)(_el); },
        "mediaDecryption-info": (_el: _Element): void => { mediaDecryption_info = $._decode_implicit<MediaDecryption_info>(() => _decode_MediaDecryption_info)(_el); },
        "servingS4-SGSN-address": (_el: _Element): void => { servingS4_SGSN_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sipMessageHeaderOffer": (_el: _Element): void => { sipMessageHeaderOffer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sipMessageHeaderAnswer": (_el: _Element): void => { sipMessageHeaderAnswer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sdpOffer": (_el: _Element): void => { sdpOffer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sdpAnswer": (_el: _Element): void => { sdpAnswer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uLITimestamp": (_el: _Element): void => {
            uLITimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (uLITimestamp.length < 8 || uLITimestamp.length > 8) {
                throw new ASN1SizeError("IRI_Parameters.uLITimestamp violates SIZE constraint");
            }
        },
        "packetDataHeaderInformation": (_el: _Element): void => { packetDataHeaderInformation = $._decode_explicit<PacketDataHeaderInformation>(() => _decode_PacketDataHeaderInformation)(_el); },
        "mediaSecFailureIndication": (_el: _Element): void => { mediaSecFailureIndication = $._decode_implicit<MediaSecFailureIndication>(() => _decode_MediaSecFailureIndication)(_el); },
        "pANI-Header-Info": (_el: _Element): void => { pANI_Header_Info = $._decode_implicit<PANI_Header_Info[]>(() => $._decodeSequenceOf<PANI_Header_Info>(() => _decode_PANI_Header_Info))(_el); },
        "imsVoIP": (_el: _Element): void => { imsVoIP = $._decode_implicit<IMS_VoIP_Correlation>(() => _decode_IMS_VoIP_Correlation)(_el); },
        "xCAPmessage": (_el: _Element): void => { xCAPmessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ccUnavailableReason": (_el: _Element): void => { ccUnavailableReason = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "carrierSpecificData": (_el: _Element): void => { carrierSpecificData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Previous-Systems": (_el: _Element): void => { current_Previous_Systems = $._decode_implicit<Current_Previous_Systems>(() => _decode_Current_Previous_Systems)(_el); },
        "change-Of-Target-Identity": (_el: _Element): void => { change_Of_Target_Identity = $._decode_implicit<Change_Of_Target_Identity>(() => _decode_Change_Of_Target_Identity)(_el); },
        "requesting-Network-Identifier": (_el: _Element): void => { requesting_Network_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requesting-Node-Type": (_el: _Element): void => { requesting_Node_Type = $._decode_implicit<Requesting_Node_Type>(() => _decode_Requesting_Node_Type)(_el); },
        "serving-System-Identifier": (_el: _Element): void => { serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extendedLocParameters": (_el: _Element): void => { extendedLocParameters = $._decode_implicit<ExtendedLocParameters>(() => _decode_ExtendedLocParameters)(_el); },
        "locationErrorCode": (_el: _Element): void => { locationErrorCode = $._decode_implicit<LocationErrorCode>(() => _decode_LocationErrorCode)(_el); },
        "cSREvent": (_el: _Element): void => { cSREvent = $._decode_implicit<CSREvent>(() => _decode_CSREvent)(_el); },
        "ptc": (_el: _Element): void => { ptc = $._decode_implicit<PTC>(() => _decode_PTC)(_el); },
        "ptcEncryption": (_el: _Element): void => { ptcEncryption = $._decode_implicit<PTCEncryptionInfo>(() => _decode_PTCEncryptionInfo)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2DomainId,
        iRIversion,
        lawfulInterceptionIdentifier,
        timeStamp,
        initiator,
        locationOfTheTarget,
        partyInformation,
        serviceCenterAddress,
        sMS,
        national_Parameters,
        gPRSCorrelationNumber,
        gPRSevent,
        sgsnAddress,
        gPRSOperationErrorCode,
        ggsnAddress,
        qOS,
        networkIdentifier,
        sMSOriginatingAddress,
        sMSTerminatingAddress,
        iMSevent,
        sIPMessage,
        servingSGSN_number,
        servingSGSN_address,
        ldiEvent,
        correlation,
        mediaDecryption_info,
        servingS4_SGSN_address,
        sipMessageHeaderOffer,
        sipMessageHeaderAnswer,
        sdpOffer,
        sdpAnswer,
        uLITimestamp,
        packetDataHeaderInformation,
        mediaSecFailureIndication,
        pANI_Header_Info,
        imsVoIP,
        xCAPmessage,
        ccUnavailableReason,
        carrierSpecificData,
        current_Previous_Systems,
        change_Of_Target_Identity,
        requesting_Network_Identifier,
        requesting_Node_Type,
        serving_System_Identifier,
        extendedLocParameters,
        locationErrorCode,
        cSREvent,
        ptc,
        ptcEncryption,
        national_HI2_ASN1parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRI_Parameters(el);
}

let _cached_encoder_for_IRI_Parameters: $.ASN1Encoder<IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters (value: IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(50 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2DomainId, $.BER);
    if (value.iRIversion !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_IRI_Parameters_iRIversion, $.BER)(value.iRIversion, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.initiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters_initiator, $.BER)(value.initiator, $.BER);
    }
    if (value.locationOfTheTarget !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.locationOfTheTarget, $.BER);
    }
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.serviceCenterAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.serviceCenterAddress, $.BER);
    }
    if (value.sMS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_SMS_report, $.BER)(value.sMS, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    if (value.gPRSCorrelationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_GPRSCorrelationNumber, $.BER)(value.gPRSCorrelationNumber, $.BER);
    }
    if (value.gPRSevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_GPRSEvent, $.BER)(value.gPRSevent, $.BER);
    }
    if (value.sgsnAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 21, () => _encode_DataNodeAddress, $.BER)(value.sgsnAddress, $.BER);
    }
    if (value.gPRSOperationErrorCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_GPRSOperationErrorCode, $.BER)(value.gPRSOperationErrorCode, $.BER);
    }
    if (value.ggsnAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 24, () => _encode_DataNodeAddress, $.BER)(value.ggsnAddress, $.BER);
    }
    if (value.qOS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 25, () => _encode_UmtsQos, $.BER)(value.qOS, $.BER);
    }
    if (value.networkIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    }
    if (value.sMSOriginatingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => _encode_DataNodeAddress, $.BER)(value.sMSOriginatingAddress, $.BER);
    }
    if (value.sMSTerminatingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 28, () => _encode_DataNodeAddress, $.BER)(value.sMSTerminatingAddress, $.BER);
    }
    if (value.iMSevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_IMSevent, $.BER)(value.iMSevent, $.BER);
    }
    if (value.sIPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.sIPMessage, $.BER);
    }
    if (value.servingSGSN_number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.servingSGSN_number, $.BER);
    }
    if (value.servingSGSN_address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.servingSGSN_address, $.BER);
    }
    if (value.ldiEvent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_LDIevent, $.BER)(value.ldiEvent, $.BER);
    }
    if (value.correlation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 35, () => _encode_CorrelationValues, $.BER)(value.correlation, $.BER);
    }
    if (value.mediaDecryption_info !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_MediaDecryption_info, $.BER)(value.mediaDecryption_info, $.BER);
    }
    if (value.servingS4_SGSN_address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.servingS4_SGSN_address, $.BER);
    }
    if (value.sipMessageHeaderOffer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.sipMessageHeaderOffer, $.BER);
    }
    if (value.sipMessageHeaderAnswer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.sipMessageHeaderAnswer, $.BER);
    }
    if (value.sdpOffer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeOctetString, $.BER)(value.sdpOffer, $.BER);
    }
    if (value.sdpAnswer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeOctetString, $.BER)(value.sdpAnswer, $.BER);
    }
    if (value.uLITimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeOctetString, $.BER)(value.uLITimestamp, $.BER);
    }
    if (value.packetDataHeaderInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_PacketDataHeaderInformation, $.BER)(value.packetDataHeaderInformation, $.BER);
    }
    if (value.mediaSecFailureIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => _encode_MediaSecFailureIndication, $.BER)(value.mediaSecFailureIndication, $.BER);
    }
    if (value.pANI_Header_Info !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeSequenceOf<PANI_Header_Info>(() => _encode_PANI_Header_Info, $.BER), $.BER)(value.pANI_Header_Info, $.BER);
    }
    if (value.imsVoIP !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_IMS_VoIP_Correlation, $.BER)(value.imsVoIP, $.BER);
    }
    if (value.xCAPmessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.xCAPmessage, $.BER);
    }
    if (value.ccUnavailableReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodePrintableString, $.BER)(value.ccUnavailableReason, $.BER);
    }
    if (value.carrierSpecificData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeOctetString, $.BER)(value.carrierSpecificData, $.BER);
    }
    if (value.current_Previous_Systems !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => _encode_Current_Previous_Systems, $.BER)(value.current_Previous_Systems, $.BER);
    }
    if (value.change_Of_Target_Identity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => _encode_Change_Of_Target_Identity, $.BER)(value.change_Of_Target_Identity, $.BER);
    }
    if (value.requesting_Network_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeOctetString, $.BER)(value.requesting_Network_Identifier, $.BER);
    }
    if (value.requesting_Node_Type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_Requesting_Node_Type, $.BER)(value.requesting_Node_Type, $.BER);
    }
    if (value.serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeOctetString, $.BER)(value.serving_System_Identifier, $.BER);
    }
    if (value.extendedLocParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => _encode_ExtendedLocParameters, $.BER)(value.extendedLocParameters, $.BER);
    }
    if (value.locationErrorCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_LocationErrorCode, $.BER)(value.locationErrorCode, $.BER);
    }
    if (value.cSREvent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_CSREvent, $.BER)(value.cSREvent, $.BER);
    }
    if (value.ptc !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => _encode_PTC, $.BER)(value.ptc, $.BER);
    }
    if (value.ptcEncryption !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_PTCEncryptionInfo, $.BER)(value.ptcEncryption, $.BER);
    }
    if (value.national_HI2_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 255, () => _encode_National_HI2_ASN1parameters, $.BER)(value.national_HI2_ASN1parameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
