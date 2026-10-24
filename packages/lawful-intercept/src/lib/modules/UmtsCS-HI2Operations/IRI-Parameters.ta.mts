/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters_iRIversion, _decode_IRI_Parameters_iRIversion, _encode_IRI_Parameters_iRIversion, _enum_for_IRI_Parameters_iRIversion } from "../UmtsCS-HI2Operations/IRI-Parameters-iRIversion.ta.mjs";
// export { IRI_Parameters_iRIversion, _enum_for_IRI_Parameters_iRIversion, IRI_Parameters_iRIversion_version1 /* IMPORTED_LONG_ENUMERATION_ITEM */, version1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version2 /* IMPORTED_LONG_ENUMERATION_ITEM */, version2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version3 /* IMPORTED_LONG_ENUMERATION_ITEM */, version3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_lastVersion /* IMPORTED_LONG_ENUMERATION_ITEM */, lastVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_iRIversion, _encode_IRI_Parameters_iRIversion } from "../UmtsCS-HI2Operations/IRI-Parameters-iRIversion.ta.mjs";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { IRI_Parameters_intercepted_Call_Direct, _decode_IRI_Parameters_intercepted_Call_Direct, _encode_IRI_Parameters_intercepted_Call_Direct, _enum_for_IRI_Parameters_intercepted_Call_Direct } from "../UmtsCS-HI2Operations/IRI-Parameters-intercepted-Call-Direct.ta.mjs";
// export { IRI_Parameters_intercepted_Call_Direct, _enum_for_IRI_Parameters_intercepted_Call_Direct, IRI_Parameters_intercepted_Call_Direct_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_intercepted_Call_Direct_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_intercepted_Call_Direct_terminating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_intercepted_Call_Direct, _encode_IRI_Parameters_intercepted_Call_Direct } from "../UmtsCS-HI2Operations/IRI-Parameters-intercepted-Call-Direct.ta.mjs";
import { Intercepted_Call_State, _decode_Intercepted_Call_State, _encode_Intercepted_Call_State, _enum_for_Intercepted_Call_State } from "../HI2Operations/Intercepted-Call-State.ta.mjs";
// export { Intercepted_Call_State, _enum_for_Intercepted_Call_State, Intercepted_Call_State_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, Intercepted_Call_State_setUpInProcess /* IMPORTED_LONG_ENUMERATION_ITEM */, setUpInProcess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Intercepted_Call_State_connected /* IMPORTED_LONG_ENUMERATION_ITEM */, connected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Intercepted_Call_State, _encode_Intercepted_Call_State } from "../HI2Operations/Intercepted-Call-State.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
import { IRI_Parameters_callContentLinkInformation, _decode_IRI_Parameters_callContentLinkInformation, _encode_IRI_Parameters_callContentLinkInformation } from "../UmtsCS-HI2Operations/IRI-Parameters-callContentLinkInformation.ta.mjs";
// export { IRI_Parameters_callContentLinkInformation, _decode_IRI_Parameters_callContentLinkInformation, _encode_IRI_Parameters_callContentLinkInformation } from "../UmtsCS-HI2Operations/IRI-Parameters-callContentLinkInformation.ta.mjs";
import { IRI_Parameters_nature_Of_The_intercepted_call, _decode_IRI_Parameters_nature_Of_The_intercepted_call, _encode_IRI_Parameters_nature_Of_The_intercepted_call, _enum_for_IRI_Parameters_nature_Of_The_intercepted_call } from "../UmtsCS-HI2Operations/IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
// export { IRI_Parameters_nature_Of_The_intercepted_call, _enum_for_IRI_Parameters_nature_Of_The_intercepted_call, IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, gSM_ISDN_PSTN_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message /* IMPORTED_LONG_ENUMERATION_ITEM */, gSM_SMS_Message /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages /* IMPORTED_LONG_ENUMERATION_ITEM */, uUS4_Messages /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, tETRA_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data /* IMPORTED_LONG_ENUMERATION_ITEM */, teTRA_Packet_Data /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRS_Packet_Data /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_nature_Of_The_intercepted_call, _encode_IRI_Parameters_nature_Of_The_intercepted_call } from "../UmtsCS-HI2Operations/IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../UmtsHI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../UmtsHI2Operations/SMS-report.ta.mjs";
import { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
// export { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { Umts_Cs_Event, _decode_Umts_Cs_Event, _encode_Umts_Cs_Event, _enum_for_Umts_Cs_Event } from "../UmtsCS-HI2Operations/Umts-Cs-Event.ta.mjs";
// export { Umts_Cs_Event, _enum_for_Umts_Cs_Event, Umts_Cs_Event_call_establishment /* IMPORTED_LONG_ENUMERATION_ITEM */, call_establishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_answer /* IMPORTED_LONG_ENUMERATION_ITEM */, answer /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_supplementary_Service /* IMPORTED_LONG_ENUMERATION_ITEM */, supplementary_Service /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_handover /* IMPORTED_LONG_ENUMERATION_ITEM */, handover /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_release /* IMPORTED_LONG_ENUMERATION_ITEM */, release /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_location_update /* IMPORTED_LONG_ENUMERATION_ITEM */, location_update /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_subscriber_Controlled_Input /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriber_Controlled_Input /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_hLR_Subscriber_Record_Change /* IMPORTED_LONG_ENUMERATION_ITEM */, hLR_Subscriber_Record_Change /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_serving_System /* IMPORTED_LONG_ENUMERATION_ITEM */, serving_System /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_cancel_Location /* IMPORTED_LONG_ENUMERATION_ITEM */, cancel_Location /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_register_Location /* IMPORTED_LONG_ENUMERATION_ITEM */, register_Location /* IMPORTED_SHORT_ENUMERATION_ITEM */, Umts_Cs_Event_location_Information_Request /* IMPORTED_LONG_ENUMERATION_ITEM */, location_Information_Request /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Umts_Cs_Event, _encode_Umts_Cs_Event } from "../UmtsCS-HI2Operations/Umts-Cs-Event.ta.mjs";
import { Current_Previous_Systems, _decode_Current_Previous_Systems, _encode_Current_Previous_Systems } from "../UmtsCS-HI2Operations/Current-Previous-Systems.ta.mjs";
// export { Current_Previous_Systems, _decode_Current_Previous_Systems, _encode_Current_Previous_Systems } from "../UmtsCS-HI2Operations/Current-Previous-Systems.ta.mjs";
import { Change_Of_Target_Identity, _decode_Change_Of_Target_Identity, _encode_Change_Of_Target_Identity } from "../UmtsCS-HI2Operations/Change-Of-Target-Identity.ta.mjs";
// export { Change_Of_Target_Identity, _decode_Change_Of_Target_Identity, _encode_Change_Of_Target_Identity } from "../UmtsCS-HI2Operations/Change-Of-Target-Identity.ta.mjs";
import { Requesting_Node_Type, _decode_Requesting_Node_Type, _encode_Requesting_Node_Type, _enum_for_Requesting_Node_Type } from "../UmtsCS-HI2Operations/Requesting-Node-Type.ta.mjs";
// export { Requesting_Node_Type, _enum_for_Requesting_Node_Type, Requesting_Node_Type_mSC /* IMPORTED_LONG_ENUMERATION_ITEM */, mSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_sMS_Centre /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS_Centre /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_gMLC /* IMPORTED_LONG_ENUMERATION_ITEM */, gMLC /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_sGSN /* IMPORTED_LONG_ENUMERATION_ITEM */, sGSN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Requesting_Node_Type, _encode_Requesting_Node_Type } from "../UmtsCS-HI2Operations/Requesting-Node-Type.ta.mjs";
import { ExtendedLocParameters, _decode_ExtendedLocParameters, _encode_ExtendedLocParameters } from "../UmtsHI2Operations/ExtendedLocParameters.ta.mjs";
// export { ExtendedLocParameters, _decode_ExtendedLocParameters, _encode_ExtendedLocParameters } from "../UmtsHI2Operations/ExtendedLocParameters.ta.mjs";
import { LocationErrorCode, _decode_LocationErrorCode, _encode_LocationErrorCode } from "../UmtsHI2Operations/LocationErrorCode.ta.mjs";
// export { LocationErrorCode, _decode_LocationErrorCode, _encode_LocationErrorCode } from "../UmtsHI2Operations/LocationErrorCode.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * Parameters of one circuit-switched IRI. Control information (clause 5.2.2.1)
 * identifies the target and maps the record to content links. Basic-call items
 * are sent when they first become available and need not be repeated (clause
 * 5.2.2.2). Supplementary-service information is sent when the signalling event
 * is available (clause 5.4.3). Services absent from table 5.7 have no LI
 * impact: no extra content links and no service-specific IRI. National
 * extensions use the national parameters. Each network adopts either
 * content-link option A or option B (clause 5.4.4). 3GPP TS 33.108, clause 5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2CSDomainId                        [0]    OBJECT IDENTIFIER, -- 3GPP HI2 CS domain
 * 
 *     iRIversion                            [23] ENUMERATED
 *     {
 *         version1(1),
 *         ...,
 *         version2(2),
 *         version3(3),
 *         -- versions 4-7 were ommited to align with UmtsHI2Operations.
 *         lastVersion(8)
 *     } OPTIONAL,
 *         -- Optional parameter "iRIversion" (tag 23) was always redundant in 33.108, because
 *         -- the object identifier "hi2CSDomainId" was introduced into "IRI Parameters" with the
 *         -- initial HI2 CS domain module in 33.108v6.1.0. In order to keep backward compatibility,
 *         -- even when the version of the "hi2CSDomainId" parameter will be incremented it is
 *         -- recommended to always send to LEMF the same: enumeration value "lastVersion(8)".
 *         -- if not present, it means version 1 is handled
 *     lawfulInterceptionIdentifier        [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     communicationIdentifier                [2] CommunicationIdentifier,
 *         -- used to uniquely identify an intercepted call.
 * 
 *     timeStamp                            [3] TimeStamp,
 *         -- date and time of the event triggering the report.
 *     intercepted-Call-Direct             [4] ENUMERATED
 *     {
 *         not-Available(0),
 *         originating-Target(1),
 *         terminating-Target(2),
 *     ...
 *     } OPTIONAL,
 *     intercepted-Call-State                 [5] Intercepted-Call-State OPTIONAL,
 *         -- Not required for UMTS. May be included for backwards compatibility to GSM
 *     ringingDuration                     [6] OCTET STRING (SIZE (3)) OPTIONAL,
 *         -- Duration in seconds. BCD coded : HHMMSS
 *         -- Not required for UMTS. May be included for backwards compatibility to GSM
 *     conversationDuration                 [7] OCTET STRING (SIZE (3)) OPTIONAL,
 *         -- Duration in seconds. BCD coded : HHMMSS
 *         -- Not required for UMTS. May be included for backwards compatibility to GSM
 *     locationOfTheTarget                    [8] Location OPTIONAL,
 *         -- location of the target
 *     partyInformation                     [9] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party (Originating, Terminating or forwarded
 *         -- party), the identity(ies) of the party and all the information provided by the party.
 *     callContentLinkInformation            [10] SEQUENCE
 *     {
 *         cCLink1Characteristics        [1] CallContentLinkCharacteristics OPTIONAL,
 *             -- information concerning the Content of Communication Link Tx channel established
 *             -- toward the LEMF (or the sum signal channel, in case of mono mode).
 *         cCLink2Characteristics        [2] CallContentLinkCharacteristics OPTIONAL,
 *             -- information concerning the Content of Communication Link Rx channel established
 *             -- toward the LEMF.
 *         ...
 *     } OPTIONAL,
 *     release-Reason-Of-Intercepted-Call    [11] OCTET STRING (SIZE (2)) OPTIONAL,
 *         -- Release cause coded in [31] format.
 *         -- This parameter indicates the reason why the
 *         -- intercepted call cannot be established or why the intercepted call has been
 *         -- released after the active phase.
 *     nature-Of-The-intercepted-call        [12] ENUMERATED
 *     {
 *         --Not required for UMTS. May be included for backwards compatibility to GSM
 *         --Nature of the intercepted "call":
 *         gSM-ISDN-PSTN-circuit-call(0),
 *             -- the possible UUS content is sent through the HI2 or HI3 "data" interface
 *             -- the possible call content call is established through the HI3 "circuit" interface
 *         gSM-SMS-Message(1),
 *             -- the SMS content is sent through the HI2 or HI3 "data" interface
 *         uUS4-Messages(2),
 *             -- the UUS content is sent through the HI2 or HI3 "data" interface
 *         tETRA-circuit-call(3),
 *             -- the possible call content call is established through the HI3 "circuit" interface
 *             -- the possible data are sent through the HI3 "data" interface
 *         teTRA-Packet-Data(4),
 *             -- the data are sent through the HI3 "data" interface
 *         gPRS-Packet-Data(5),
 *             -- the data are sent through the HI3 "data" interface
 *         ...
 *     } OPTIONAL,
 *     serviceCenterAddress                [13] PartyInformation OPTIONAL,
 *         -- e.g. in case of SMS message this parameter provides the address of  the relevant
 *         -- server within the calling (if server is originating) or called
 *         -- (if server is terminating) party address parameters
 *     sMS                                    [14] SMS-report OPTIONAL,
 *         -- this parameter provides the SMS content and associated information
 *     cC-Link-Identifier                    [15] CC-Link-Identifier OPTIONAL,
 *         -- Depending on a network option, this parameter may be used to identify a CC link
 *         -- in case of multiparty calls.
 *     national-Parameters                    [16] National-Parameters OPTIONAL,
 *     ...,
 *     umts-Cs-Event                        [33] Umts-Cs-Event OPTIONAL,
 *     -- Care should be taken to ensure additional parameter numbering does not conflict with
 *     -- ETSI TS 101 671 or Annex B.3 of this document (PS HI2).
 *     serving-System-Identifier            [34] OCTET STRING OPTIONAL,
 *         -- the serving network identifier PLMN id (MNC, Mobile Country Code and MNC, Mobile Network
 * 
 *              -- Country, defined in E212 [87]) and 3GPP TR 21.905 [38].
 *     carrierSpecificData                    [35] OCTET STRING OPTIONAL,
 *     -- Copy of raw data specified by the CSP or his vendor related to HLR.
 *     current-Previous-Systems            [36] Current-Previous-Systems OPTIONAL,
 *     change-Of-Target-Identity            [37] Change-Of-Target-Identity OPTIONAL,
 *     requesting-Network-Identifier        [38] OCTET STRING OPTIONAL,
 *         -- the requesting network identifier PLMN id (Mobile Country Code and Mobile Network Country,
 *         -- defined in E212 [87]).
 *     requesting-Node-Type                [39] Requesting-Node-Type OPTIONAL,
 *     extendedLocParameters                  [40]     ExtendedLocParameters OPTIONAL, -- LALS extended parameters
 *     locationErrorCode                      [41]    LocationErrorCode OPTIONAL,    -- LALS error code
 *     national-HI2-ASN1parameters            [255]    National-HI2-ASN1parameters    OPTIONAL
 * 
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2CSDomainId`.
     * @description
     * 
     * 3GPP HI2 CS domain identifier. Present on the IRI. It is the version
     * indication annex B.3a treats as sufficient; the separate version
     * component is redundant beside it and is still recommended as lastVersion.
     * 3GPP TS 33.108, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly hi2CSDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `iRIversion`.
     * @description
     * 
     * HI2 interface version. Clause 5.2.2.1 lists version indication as control
     * information. The module marks it optional: absence means version 1. Annex
     * B.3a says the component was always redundant because this domain
     * identifier has been present since the first CS HI2 module (v6.1.0), and
     * recommends always sending lastVersion even after that identifier's
     * version arc changes. Values 4 to 7 are omitted to align with the
     * packet-switched HI2 module. 3GPP TS 33.108, clause 5.2.2.1 and annex
     * B.3a.
     * 
     * @public
     * @readonly
     */
    readonly iRIversion: OPTIONAL<IRI_Parameters_iRIversion>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * LIID agreed between the LEA and the operator, one per target identity,
     * and a distinct LIID per LEA if several intercept the same identity.
     * Required on every record. Alphanumeric, or a digit string when the HI3
     * subaddress option of annex J is used. Used on HI2 and HI3 to identify the
     * target and to correlate IRI with content. In the intercepting function it
     * corresponds to the warrant reference number. 3GPP TS 33.108, clauses
     * 5.1.1 and 5.1.4.
     * 
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `communicationIdentifier`.
     * @description
     * 
     * Communication identifier: network identifier plus, for
     * connection-oriented events, the communication identity number. Uniquely
     * identifies the intercepted call and correlates IRI with content, and LALS
     * reports with the triggering IRI. In UMTS the network identifier is the
     * intercepting node identity and the communication identity number is the
     * correlation number.
     *
     * Required for connection-oriented IRI. May be omitted for non-call-related
     * records such as SMS and subscriber controlled input, which have no
     * content to correlate. The network identifier should be internationally
     * unique: a mandatory operator identifier and an optional network-element
     * identifier (E.164 node number, X.25 address, or IP address). National
     * regulation may require the network-element identifier. One session of a
     * target uses one communication identity number; another session at the
     * same element uses a different one. Several target identities in the same
     * communication may share it. 3GPP TS 33.108, clauses 5.1.2 and 5.2.2.1.
     * 
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time of the event that triggered the record, at the 3G MSC
     * server, 3G GMSC server, or HLR. The value shall be able to say whether it
     * is local time without a time zone or UTC. The operator chooses which of
     * those forms is used. Required as control information. 3GPP TS 33.108,
     * clause 5.2.2.1 and table 5.5.
     * 
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `intercepted_Call_Direct`.
     * @description
     * 
     * Whether the target is the originating or the terminating party, when that
     * is known. Sent when it first becomes available. Not a
     * supplementary-service indicator. 3GPP TS 33.108, clause 5.2.2.2 and table
     * 5.5.
     * 
     * @public
     * @readonly
     */
    readonly intercepted_Call_Direct: OPTIONAL<IRI_Parameters_intercepted_Call_Direct>;
    /**
     * @summary `intercepted_Call_State`.
     * @description
     * 
     * Not required for UMTS. May be included for GSM backward compatibility.
     * 3GPP TS 33.108, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly intercepted_Call_State: OPTIONAL<Intercepted_Call_State>;
    /**
     * @summary `ringingDuration`.
     * @description
     * 
     * Ringing duration in seconds, three octets, BCD-coded HHMMSS. Not required
     * for UMTS. May be included for GSM backward compatibility. 3GPP TS 33.108,
     * annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly ringingDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `conversationDuration`.
     * @description
     * 
     * Conversation duration in seconds, three octets, BCD-coded HHMMSS. Not
     * required for UMTS. May be included for GSM backward compatibility. 3GPP
     * TS 33.108, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly conversationDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationOfTheTarget`.
     * @description
     * 
     * Location of the target. Table 5.5 maps CGI or SAI to this parameter. The
     * location-area-code row names its ASN.1 cell "Location Information" rather
     * than this parameter. LALS target-positioning and enhanced-location
     * reports include location when positioning succeeds (tables 5.5F and
     * 5.5G). Those tables also list time of location as its own conditional
     * item; this module has no separate component for that time. 3GPP TS
     * 33.108, clauses 5.2.2.2 and 5.2.3.
     * 
     * @public
     * @readonly
     */
    readonly locationOfTheTarget: OPTIONAL<Location>;
    /**
     * @summary `partyInformation`.
     * @description
     * 
     * The concerned party (originating, terminating, or forwarded-to), that
     * party's identities, and the information the party supplied. Observed
     * MSISDN, IMSI, and IMEI, and a non-local E.164 identity, are carried here
     * (table 5.5). Basic service parameters are included as received. A release
     * cause is included with the party that released, or with either party if
     * the network released.
     *
     * Call forwarding (clause 5.2.2.3). Previous redirecting parties are placed
     * with the originating party. If the target's access forwards the call, the
     * target's redirecting information is placed with the terminating party.
     * The forwarded-to address, the forwarding reason, and the redirection
     * count are placed with the forwarded-to party. Immediate forwarding
     * (unconditional, or network-determined busy) is one IRI transaction.
     * Forwarding after the target access is seized (no reply, user-determined
     * busy, call deflection) is either an end record plus a new transaction, or
     * a continue record for the diversion (clause 5.5.12). A forwarded call
     * that terminates at the target, or a call from the target that another
     * party forwards, carries the available diversion information; the other
     * party's forwarding does not add content links.
     *
     * Supplementary-service IRI (clauses 5.4 and 5.5, table 5.7), sent when the
     * signalling information becomes available. Only a successful invocation
     * that returns a result needs a record, and one record may carry both the
     * invocation and the result. Call waiting: if the target is the served
     * user, the waiting call's begin record or a later continue record carries
     * the call-waiting indication; if the other party is the served user, a
     * received notification is included in a continue record. Hold or retrieve
     * by the target is a continue record with the hold or retrieve indication;
     * hold or retrieve by another party is a continue record when the target's
     * call receives the notification. Explicit call transfer adds continue
     * records with the transfer information, then an end record when the target
     * leaves. CLIP includes the calling-line identity; on a call to the target
     * the other party's identity is included even if restricted, and a second
     * delivered number is included as well. CLIR is ignored for interception
     * and copied with that identity. COLP includes a connected number; extra
     * numbers are included when the other party is the served user. COLR is
     * ignored and copied. A closed user group call includes the interlock code.
     * Multiparty conference start and end generate IRI records. Subaddress
     * information elements are included whenever they are present (clause
     * 5.5.14). UUS1, UUS2, and UUS3 user-to-user information is reported on
     * HI2; if it is not delivered to the other party, the LEA is not notified
     * (clause 5.5.15). Subscriber controlled input is an IRI report and shall
     * indicate whether the request succeeded (clause 5.4.5). Advice of charge
     * and the CCBS recall procedures add no service IRI. Incoming barring of a
     * call to the target is usually a report, or an end record with the cause
     * if the access was already determined; a call from the target to a barred
     * party ends with an end record. Outgoing barring produces an ordinary
     * record whose type depends on where the call was released. 3GPP TS 33.108,
     * clause 5.
     * 
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `callContentLinkInformation`.
     * @description
     * 
     * Characteristics of the content links toward the LEMF. A target call has a
     * direction toward the target and a direction from the target, so two
     * one-way 64 kbit/s links are set up (stereo). SMS is an exception and is
     * delivered on HI2. Extra links are created only when the target is the
     * served user; another party's service invocation does not add links
     * (clause 5.4.2).
     *
     * Option A (clause 5.4.4.1): a separate link for every leg, active or not,
     * so a held party's signal can still be intercepted. Whether that signal is
     * switched through is a network option. Option B (clause 5.4.4.2): links
     * only while a leg is active. Reuse is signalled by a continue record
     * carrying the communication identifier and the CC-link identifier. Each
     * network chooses one option.
     *
     * Call waiting uses the hold configurations: option A sets up a link for
     * the waiting call; option B does not (clause 5.5.2.1). Hold under option A
     * keeps the links; under option B the links stay up but are reused by the
     * next active leg (clause 5.5.3). During transfer preparation the hold
     * rules apply; if the target is the transferring user, the original call's
     * links are released. After transfer, the new call may be intercepted like
     * a forwarded call or not intercepted (clause 5.5.4). Multiparty, target as
     * controller: the active call's links carry the target on transmit and the
     * conference sum on receive, and the held leg's links stay. A passive party
     * has no link impact (clause 5.5.11). Immediate call forwarding sets up
     * links at once; forwarding after answer starts as a basic call and may
     * then release those links (clause 5.5.12). Forwarding invoked by another
     * party does not add links. Subaddressing, user-to-user signalling, CLIP,
     * CLIR, COLP, COLR, and closed user group do not change links (table 5.7).
     * Tones and announcements are content on the receive link when normal
     * procedures would play them there (clause 5.5.18). 3GPP TS 33.108, clauses
     * 5.3 and 5.4.
     * 
     * @public
     * @readonly
     */
    readonly callContentLinkInformation: OPTIONAL<IRI_Parameters_callContentLinkInformation>;
    /**
     * @summary `release_Reason_Of_Intercepted_Call`.
     * @description
     * 
     * Why the intercepted call was not established, or why it was released
     * after the active phase. Two octets, cause coded in the format of ETSI EN
     * 300 403-1 (reference 31). The cause is also associated with the party
     * that initiated the release. 3GPP TS 33.108, clause 5.2.2.2, table 5.5,
     * and annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly release_Reason_Of_Intercepted_Call: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nature_Of_The_intercepted_call`.
     * @description
     * 
     * Nature of the intercepted communication. Not required for UMTS. May be
     * included for GSM backward compatibility. The values say whether content
     * uses the HI3 circuit link or the HI2 or HI3 data interface. 3GPP TS
     * 33.108, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly nature_Of_The_intercepted_call: OPTIONAL<IRI_Parameters_nature_Of_The_intercepted_call>;
    /**
     * @summary `serviceCenterAddress`.
     * @description
     * 
     * Address of the server involved in the call. For SMS, the service centre:
     * with the calling party if the server originates, or with the called party
     * if the server terminates. 3GPP TS 33.108, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly serviceCenterAddress: OPTIONAL<PartyInformation>;
    /**
     * @summary `sMS`.
     * @description
     * 
     * SMS content and the associated information, delivered on an IRI report.
     * SMS is also the exception that may be delivered as content on HI2 rather
     * than on a circuit link. For SMS IRI only, annex P applies. The other
     * party may already be inside the SMS TPDU (3GPP TS 23.040); using a
     * separate other-party parameter is then implementation dependent, and an
     * alphanumeric other party shall not be carried that way (table 5.5 notes 2
     * and 3). 3GPP TS 33.108, clauses 5.2.3 and 5.3.1.
     * 
     * @public
     * @readonly
     */
    readonly sMS: OPTIONAL<SMS_report>;
    /**
     * @summary `cC_Link_Identifier`.
     * @description
     * 
     * CC-link identifier, used only for option B so a multiparty call shows
     * which content link carries the content (clause 5.1.3). It may use the
     * same format as the communication identity number; in that case it need
     * not be sent when the HI3 link is set up, and the communication identity
     * number stands for it. Table 5.1 places it on HI2 for option B, and on HI3
     * unless omitted that way. It is absent when only IRI is transmitted (table
     * 5.2). Each time another active leg reuses a link, a continue record
     * carries this identifier with the communication identifier (clause
     * 5.4.4.2). 3GPP TS 33.108, clauses 5.1.3 and 5.4.4.
     * 
     * @public
     * @readonly
     */
    readonly cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
    /**
     * @summary `national_Parameters`.
     * @description
     * 
     * National extension for services or parameters not covered by the 3GPP
     * coding. The layout is not defined. 3GPP TS 33.108, clauses 5.2.2.2 and
     * 5.2.2.3.
     * 
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `umts_Cs_Event`.
     * @description
     * 
     * Which CS event the record reports. Table 5.4 maps the thirteen events
     * onto begin, continue, end, and report. If this is omitted, other
     * parameters indicate the event, for example the SMS contents. LALS reports
     * may omit it. Tables 5.5A to 5.5E mark the event type conditional. 3GPP TS
     * 33.108, clause 5.2.3 and table 5.5.
     * 
     * @public
     * @readonly
     */
    readonly umts_Cs_Event: OPTIONAL<Umts_Cs_Event>;
    /**
     * @summary `serving_System_Identifier`.
     * @description
     * 
     * Serving-system PLMN identity: mobile country code and mobile network
     * code, ITU-T E.212 (reference 87). Table 5.5: VPLMN of the serving system,
     * or of the third-party network interworking with the HLR. Conditional on a
     * serving-system report. The annex B.3a comment on this component misstates
     * the expansion of the PLMN identity; the stage 2 wording is mobile country
     * code and mobile network code. 3GPP TS 33.108, clause 5.2.3, table 5.5A.
     * 
     * @public
     * @readonly
     */
    readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `carrierSpecificData`.
     * @description
     * 
     * Raw data the CSP or the HLR vendor associates with a subscriber-record
     * update. Conditional on an HLR subscriber-record-change report. The layout
     * is not defined. 3GPP TS 33.108, table 5.5 and table 5.5B, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly carrierSpecificData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Previous_Systems`.
     * @description
     * 
     * Current and previous serving system, MSC number, and MSC address. Used on
     * cancel-location and register-location reports. Register location may
     * include both current and previous; cancel location lists the previous
     * values. 3GPP TS 33.108, tables 5.5, 5.5C, and 5.5D.
     * 
     * @public
     * @readonly
     */
    readonly current_Previous_Systems: OPTIONAL<Current_Previous_Systems>;
    /**
     * @summary `change_Of_Target_Identity`.
     * @description
     * 
     * Old and new MSISDN, IMSI, or IMEI from an HLR subscriber-record change.
     * Required on that report: state what changed. 3GPP TS 33.108, tables 5.5
     * and 5.5B.
     * 
     * @public
     * @readonly
     */
    readonly change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    /**
     * @summary `requesting_Network_Identifier`.
     * @description
     * 
     * PLMN identity of the network that requested location information: mobile
     * country code and mobile network code, ITU-T E.212. Conditional on a
     * location-information-request report. 3GPP TS 33.108, table 5.5E and annex
     * B.3a.
     * 
     * @public
     * @readonly
     */
    readonly requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requesting_Node_Type`.
     * @description
     * 
     * Node that requested location information. Conditional on a
     * location-information-request report. Table 5.5E lists GMSC, SMS centre,
     * GMLC, MME, and SGSN. The enumeration has an MSC value and no separate
     * GMSC value. 3GPP TS 33.108, table 5.5E.
     * 
     * @public
     * @readonly
     */
    readonly requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    /**
     * @summary `extendedLocParameters`.
     * @description
     * 
     * Additional LALS location information and the associated quality of
     * service, if available. Stage 2 marks this optional on target-positioning
     * and enhanced-location reports (tables 5.5F and 5.5G). Annex B.3a calls
     * these the LALS extended parameters. 3GPP TS 33.108, clause 5.2.3.
     * 
     * @public
     * @readonly
     */
    readonly extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    /**
     * @summary `locationErrorCode`.
     * @description
     * 
     * LALS error identification when positioning is not successful. Conditional
     * on target-positioning and enhanced-location reports. 3GPP TS 33.108,
     * tables 5.5F and 5.5G, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly locationErrorCode: OPTIONAL<LocationErrorCode>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @description
     * 
     * National HI2 parameters. The layout is not defined. Annex B.3a warns that
     * added parameter numbers must not collide with ETSI TS 101 671 or with the
     * packet-switched HI2 module in annex B.3. 3GPP TS 33.108, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2CSDomainId: OBJECT_IDENTIFIER,
        iRIversion: OPTIONAL<IRI_Parameters_iRIversion>,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        communicationIdentifier: CommunicationIdentifier,
        timeStamp: TimeStamp,
        intercepted_Call_Direct?: OPTIONAL<IRI_Parameters_intercepted_Call_Direct>,
        intercepted_Call_State?: OPTIONAL<Intercepted_Call_State>,
        ringingDuration?: OPTIONAL<OCTET_STRING>,
        conversationDuration?: OPTIONAL<OCTET_STRING>,
        locationOfTheTarget?: OPTIONAL<Location>,
        partyInformation?: OPTIONAL<PartyInformation[]>,
        callContentLinkInformation?: OPTIONAL<IRI_Parameters_callContentLinkInformation>,
        release_Reason_Of_Intercepted_Call?: OPTIONAL<OCTET_STRING>,
        nature_Of_The_intercepted_call?: OPTIONAL<IRI_Parameters_nature_Of_The_intercepted_call>,
        serviceCenterAddress?: OPTIONAL<PartyInformation>,
        sMS?: OPTIONAL<SMS_report>,
        cC_Link_Identifier?: OPTIONAL<CC_Link_Identifier>,
        national_Parameters?: OPTIONAL<National_Parameters>,
        umts_Cs_Event?: OPTIONAL<Umts_Cs_Event>,
        serving_System_Identifier?: OPTIONAL<OCTET_STRING>,
        carrierSpecificData?: OPTIONAL<OCTET_STRING>,
        current_Previous_Systems?: OPTIONAL<Current_Previous_Systems>,
        change_Of_Target_Identity?: OPTIONAL<Change_Of_Target_Identity>,
        requesting_Network_Identifier?: OPTIONAL<OCTET_STRING>,
        requesting_Node_Type?: OPTIONAL<Requesting_Node_Type>,
        extendedLocParameters?: OPTIONAL<ExtendedLocParameters>,
        locationErrorCode?: OPTIONAL<LocationErrorCode>,
        national_HI2_ASN1parameters?: OPTIONAL<National_HI2_ASN1parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2CSDomainId = hi2CSDomainId;
        this.iRIversion = iRIversion;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.intercepted_Call_Direct = intercepted_Call_Direct;
        this.intercepted_Call_State = intercepted_Call_State;
        this.ringingDuration = ringingDuration;
        this.conversationDuration = conversationDuration;
        this.locationOfTheTarget = locationOfTheTarget;
        this.partyInformation = partyInformation;
        this.callContentLinkInformation = callContentLinkInformation;
        this.release_Reason_Of_Intercepted_Call = release_Reason_Of_Intercepted_Call;
        this.nature_Of_The_intercepted_call = nature_Of_The_intercepted_call;
        this.serviceCenterAddress = serviceCenterAddress;
        this.sMS = sMS;
        this.cC_Link_Identifier = cC_Link_Identifier;
        this.national_Parameters = national_Parameters;
        this.umts_Cs_Event = umts_Cs_Event;
        this.serving_System_Identifier = serving_System_Identifier;
        this.carrierSpecificData = carrierSpecificData;
        this.current_Previous_Systems = current_Previous_Systems;
        this.change_Of_Target_Identity = change_Of_Target_Identity;
        this.requesting_Network_Identifier = requesting_Network_Identifier;
        this.requesting_Node_Type = requesting_Node_Type;
        this.extendedLocParameters = extendedLocParameters;
        this.locationErrorCode = locationErrorCode;
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
        return new IRI_Parameters(_o.hi2CSDomainId, _o.iRIversion, _o.lawfulInterceptionIdentifier, _o.communicationIdentifier, _o.timeStamp, _o.intercepted_Call_Direct, _o.intercepted_Call_State, _o.ringingDuration, _o.conversationDuration, _o.locationOfTheTarget, _o.partyInformation, _o.callContentLinkInformation, _o.release_Reason_Of_Intercepted_Call, _o.nature_Of_The_intercepted_call, _o.serviceCenterAddress, _o.sMS, _o.cC_Link_Identifier, _o.national_Parameters, _o.umts_Cs_Event, _o.serving_System_Identifier, _o.carrierSpecificData, _o.current_Previous_Systems, _o.change_Of_Target_Identity, _o.requesting_Network_Identifier, _o.requesting_Node_Type, _o.extendedLocParameters, _o.locationErrorCode, _o.national_HI2_ASN1parameters, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `iRIversion`
         * @public
         * @static
         */

    public static _enum_for_iRIversion = _enum_for_IRI_Parameters_iRIversion;        /**
         * @summary The enum used as the type of the component `intercepted_Call_Direct`
         * @public
         * @static
         */

    public static _enum_for_intercepted_Call_Direct = _enum_for_IRI_Parameters_intercepted_Call_Direct;        /**
         * @summary The enum used as the type of the component `intercepted_Call_State`
         * @public
         * @static
         */

    public static _enum_for_intercepted_Call_State = _enum_for_Intercepted_Call_State;        /**
         * @summary The enum used as the type of the component `nature_Of_The_intercepted_call`
         * @public
         * @static
         */

    public static _enum_for_nature_Of_The_intercepted_call = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call;        /**
         * @summary The enum used as the type of the component `umts_Cs_Event`
         * @public
         * @static
         */

    public static _enum_for_umts_Cs_Event = _enum_for_Umts_Cs_Event;        /**
         * @summary The enum used as the type of the component `requesting_Node_Type`
         * @public
         * @static
         */

    public static _enum_for_requesting_Node_Type = _enum_for_Requesting_Node_Type;
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
    new $.ComponentSpec("hi2CSDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iRIversion", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("intercepted-Call-Direct", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("intercepted-Call-State", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ringingDuration", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("conversationDuration", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("locationOfTheTarget", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("callContentLinkInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("release-Reason-Of-Intercepted-Call", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("nature-Of-The-intercepted-call", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("serviceCenterAddress", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("cC-Link-Identifier", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 16))
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
    new $.ComponentSpec("umts-Cs-Event", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("serving-System-Identifier", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("carrierSpecificData", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("current-Previous-Systems", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("change-Of-Target-Identity", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("requesting-Network-Identifier", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("requesting-Node-Type", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("extendedLocParameters", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("locationErrorCode", true, $.hasTag(_TagClass.context, 41)),
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
    let hi2CSDomainId!: OBJECT_IDENTIFIER;
    let iRIversion: OPTIONAL<IRI_Parameters_iRIversion>;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let communicationIdentifier!: CommunicationIdentifier;
    let timeStamp!: TimeStamp;
    let intercepted_Call_Direct: OPTIONAL<IRI_Parameters_intercepted_Call_Direct>;
    let intercepted_Call_State: OPTIONAL<Intercepted_Call_State>;
    let ringingDuration: OPTIONAL<OCTET_STRING>;
    let conversationDuration: OPTIONAL<OCTET_STRING>;
    let locationOfTheTarget: OPTIONAL<Location>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let callContentLinkInformation: OPTIONAL<IRI_Parameters_callContentLinkInformation>;
    let release_Reason_Of_Intercepted_Call: OPTIONAL<OCTET_STRING>;
    let nature_Of_The_intercepted_call: OPTIONAL<IRI_Parameters_nature_Of_The_intercepted_call>;
    let serviceCenterAddress: OPTIONAL<PartyInformation>;
    let sMS: OPTIONAL<SMS_report>;
    let cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    let umts_Cs_Event: OPTIONAL<Umts_Cs_Event>;
    let serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let carrierSpecificData: OPTIONAL<OCTET_STRING>;
    let current_Previous_Systems: OPTIONAL<Current_Previous_Systems>;
    let change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    let requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    let requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    let extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    let locationErrorCode: OPTIONAL<LocationErrorCode>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2CSDomainId": (_el: _Element): void => { hi2CSDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "iRIversion": (_el: _Element): void => { iRIversion = $._decode_implicit<IRI_Parameters_iRIversion>(() => _decode_IRI_Parameters_iRIversion)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "intercepted-Call-Direct": (_el: _Element): void => { intercepted_Call_Direct = $._decode_implicit<IRI_Parameters_intercepted_Call_Direct>(() => _decode_IRI_Parameters_intercepted_Call_Direct)(_el); },
        "intercepted-Call-State": (_el: _Element): void => { intercepted_Call_State = $._decode_implicit<Intercepted_Call_State>(() => _decode_Intercepted_Call_State)(_el); },
        "ringingDuration": (_el: _Element): void => {
            ringingDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (ringingDuration.length < 3 || ringingDuration.length > 3) {
                throw new ASN1SizeError("IRI_Parameters.ringingDuration violates SIZE constraint");
            }
        },
        "conversationDuration": (_el: _Element): void => {
            conversationDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (conversationDuration.length < 3 || conversationDuration.length > 3) {
                throw new ASN1SizeError("IRI_Parameters.conversationDuration violates SIZE constraint");
            }
        },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => {
            partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el);
            if (partyInformation.length < 1 || partyInformation.length > 10) {
                throw new ASN1SizeError("IRI_Parameters.partyInformation violates SIZE constraint");
            }
        },
        "callContentLinkInformation": (_el: _Element): void => { callContentLinkInformation = $._decode_implicit<IRI_Parameters_callContentLinkInformation>(() => _decode_IRI_Parameters_callContentLinkInformation)(_el); },
        "release-Reason-Of-Intercepted-Call": (_el: _Element): void => {
            release_Reason_Of_Intercepted_Call = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (release_Reason_Of_Intercepted_Call.length < 2 || release_Reason_Of_Intercepted_Call.length > 2) {
                throw new ASN1SizeError("IRI_Parameters.release_Reason_Of_Intercepted_Call violates SIZE constraint");
            }
        },
        "nature-Of-The-intercepted-call": (_el: _Element): void => { nature_Of_The_intercepted_call = $._decode_implicit<IRI_Parameters_nature_Of_The_intercepted_call>(() => _decode_IRI_Parameters_nature_Of_The_intercepted_call)(_el); },
        "serviceCenterAddress": (_el: _Element): void => { serviceCenterAddress = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_implicit<SMS_report>(() => _decode_SMS_report)(_el); },
        "cC-Link-Identifier": (_el: _Element): void => { cC_Link_Identifier = $._decode_implicit<CC_Link_Identifier>(() => _decode_CC_Link_Identifier)(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "umts-Cs-Event": (_el: _Element): void => { umts_Cs_Event = $._decode_implicit<Umts_Cs_Event>(() => _decode_Umts_Cs_Event)(_el); },
        "serving-System-Identifier": (_el: _Element): void => { serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "carrierSpecificData": (_el: _Element): void => { carrierSpecificData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Previous-Systems": (_el: _Element): void => { current_Previous_Systems = $._decode_implicit<Current_Previous_Systems>(() => _decode_Current_Previous_Systems)(_el); },
        "change-Of-Target-Identity": (_el: _Element): void => { change_Of_Target_Identity = $._decode_implicit<Change_Of_Target_Identity>(() => _decode_Change_Of_Target_Identity)(_el); },
        "requesting-Network-Identifier": (_el: _Element): void => { requesting_Network_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requesting-Node-Type": (_el: _Element): void => { requesting_Node_Type = $._decode_implicit<Requesting_Node_Type>(() => _decode_Requesting_Node_Type)(_el); },
        "extendedLocParameters": (_el: _Element): void => { extendedLocParameters = $._decode_implicit<ExtendedLocParameters>(() => _decode_ExtendedLocParameters)(_el); },
        "locationErrorCode": (_el: _Element): void => { locationErrorCode = $._decode_implicit<LocationErrorCode>(() => _decode_LocationErrorCode)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2CSDomainId,
        iRIversion,
        lawfulInterceptionIdentifier,
        communicationIdentifier,
        timeStamp,
        intercepted_Call_Direct,
        intercepted_Call_State,
        ringingDuration,
        conversationDuration,
        locationOfTheTarget,
        partyInformation,
        callContentLinkInformation,
        release_Reason_Of_Intercepted_Call,
        nature_Of_The_intercepted_call,
        serviceCenterAddress,
        sMS,
        cC_Link_Identifier,
        national_Parameters,
        umts_Cs_Event,
        serving_System_Identifier,
        carrierSpecificData,
        current_Previous_Systems,
        change_Of_Target_Identity,
        requesting_Network_Identifier,
        requesting_Node_Type,
        extendedLocParameters,
        locationErrorCode,
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
    const _components: _Element[] = new Array(28 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2CSDomainId, $.BER);
    if (value.iRIversion !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_IRI_Parameters_iRIversion, $.BER)(value.iRIversion, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.intercepted_Call_Direct !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters_intercepted_Call_Direct, $.BER)(value.intercepted_Call_Direct, $.BER);
    }
    if (value.intercepted_Call_State !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Intercepted_Call_State, $.BER)(value.intercepted_Call_State, $.BER);
    }
    if (value.ringingDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.ringingDuration, $.BER);
    }
    if (value.conversationDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.conversationDuration, $.BER);
    }
    if (value.locationOfTheTarget !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.locationOfTheTarget, $.BER);
    }
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.callContentLinkInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_IRI_Parameters_callContentLinkInformation, $.BER)(value.callContentLinkInformation, $.BER);
    }
    if (value.release_Reason_Of_Intercepted_Call !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.release_Reason_Of_Intercepted_Call, $.BER);
    }
    if (value.nature_Of_The_intercepted_call !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_IRI_Parameters_nature_Of_The_intercepted_call, $.BER)(value.nature_Of_The_intercepted_call, $.BER);
    }
    if (value.serviceCenterAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.serviceCenterAddress, $.BER);
    }
    if (value.sMS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_SMS_report, $.BER)(value.sMS, $.BER);
    }
    if (value.cC_Link_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_CC_Link_Identifier, $.BER)(value.cC_Link_Identifier, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    if (value.umts_Cs_Event !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_Umts_Cs_Event, $.BER)(value.umts_Cs_Event, $.BER);
    }
    if (value.serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeOctetString, $.BER)(value.serving_System_Identifier, $.BER);
    }
    if (value.carrierSpecificData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeOctetString, $.BER)(value.carrierSpecificData, $.BER);
    }
    if (value.current_Previous_Systems !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_Current_Previous_Systems, $.BER)(value.current_Previous_Systems, $.BER);
    }
    if (value.change_Of_Target_Identity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_Change_Of_Target_Identity, $.BER)(value.change_Of_Target_Identity, $.BER);
    }
    if (value.requesting_Network_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.requesting_Network_Identifier, $.BER);
    }
    if (value.requesting_Node_Type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_Requesting_Node_Type, $.BER)(value.requesting_Node_Type, $.BER);
    }
    if (value.extendedLocParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_ExtendedLocParameters, $.BER)(value.extendedLocParameters, $.BER);
    }
    if (value.locationErrorCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_LocationErrorCode, $.BER)(value.locationErrorCode, $.BER);
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
