/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi2OperationId } from "../HI2Operations/hi2OperationId.va.mjs";
import { IRI_Parameters_iRIversion, _decode_IRI_Parameters_iRIversion, _encode_IRI_Parameters_iRIversion, _enum_for_IRI_Parameters_iRIversion } from "../HI2Operations/IRI-Parameters-iRIversion.ta.mjs";
// export { IRI_Parameters_iRIversion, _enum_for_IRI_Parameters_iRIversion, IRI_Parameters_iRIversion_version2 /* IMPORTED_LONG_ENUMERATION_ITEM */, version2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version3 /* IMPORTED_LONG_ENUMERATION_ITEM */, version3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version4 /* IMPORTED_LONG_ENUMERATION_ITEM */, version4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version5 /* IMPORTED_LONG_ENUMERATION_ITEM */, version5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version6 /* IMPORTED_LONG_ENUMERATION_ITEM */, version6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_version7 /* IMPORTED_LONG_ENUMERATION_ITEM */, version7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_iRIversion_lastVersion /* IMPORTED_LONG_ENUMERATION_ITEM */, lastVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_iRIversion, _encode_IRI_Parameters_iRIversion } from "../HI2Operations/IRI-Parameters-iRIversion.ta.mjs";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { IRI_Parameters_intercepted_Call_Direct, _decode_IRI_Parameters_intercepted_Call_Direct, _encode_IRI_Parameters_intercepted_Call_Direct, _enum_for_IRI_Parameters_intercepted_Call_Direct } from "../HI2Operations/IRI-Parameters-intercepted-Call-Direct.ta.mjs";
// export { IRI_Parameters_intercepted_Call_Direct, _enum_for_IRI_Parameters_intercepted_Call_Direct, IRI_Parameters_intercepted_Call_Direct_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_intercepted_Call_Direct_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_intercepted_Call_Direct_terminating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_intercepted_Call_Direct, _encode_IRI_Parameters_intercepted_Call_Direct } from "../HI2Operations/IRI-Parameters-intercepted-Call-Direct.ta.mjs";
import { Intercepted_Call_State, _decode_Intercepted_Call_State, _encode_Intercepted_Call_State, _enum_for_Intercepted_Call_State } from "../HI2Operations/Intercepted-Call-State.ta.mjs";
// export { Intercepted_Call_State, _enum_for_Intercepted_Call_State, Intercepted_Call_State_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, Intercepted_Call_State_setUpInProcess /* IMPORTED_LONG_ENUMERATION_ITEM */, setUpInProcess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Intercepted_Call_State_connected /* IMPORTED_LONG_ENUMERATION_ITEM */, connected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Intercepted_Call_State, _encode_Intercepted_Call_State } from "../HI2Operations/Intercepted-Call-State.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../HI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../HI2Operations/Location.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
import { IRI_Parameters_callContentLinkInformation, _decode_IRI_Parameters_callContentLinkInformation, _encode_IRI_Parameters_callContentLinkInformation } from "../HI2Operations/IRI-Parameters-callContentLinkInformation.ta.mjs";
// export { IRI_Parameters_callContentLinkInformation, _decode_IRI_Parameters_callContentLinkInformation, _encode_IRI_Parameters_callContentLinkInformation } from "../HI2Operations/IRI-Parameters-callContentLinkInformation.ta.mjs";
import { IRI_Parameters_nature_Of_The_intercepted_call, _decode_IRI_Parameters_nature_Of_The_intercepted_call, _encode_IRI_Parameters_nature_Of_The_intercepted_call, _enum_for_IRI_Parameters_nature_Of_The_intercepted_call } from "../HI2Operations/IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
// export { IRI_Parameters_nature_Of_The_intercepted_call, _enum_for_IRI_Parameters_nature_Of_The_intercepted_call, IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, gSM_ISDN_PSTN_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message /* IMPORTED_LONG_ENUMERATION_ITEM */, gSM_SMS_Message /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages /* IMPORTED_LONG_ENUMERATION_ITEM */, uUS4_Messages /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, tETRA_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data /* IMPORTED_LONG_ENUMERATION_ITEM */, teTRA_Packet_Data /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRS_Packet_Data /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, uMTS_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message /* IMPORTED_LONG_ENUMERATION_ITEM */, lTE_SMS_Message /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, lTE_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_nature_Of_The_intercepted_call, _encode_IRI_Parameters_nature_Of_The_intercepted_call } from "../HI2Operations/IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../HI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../HI2Operations/SMS-report.ta.mjs";
import { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
// export { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { GPRSCorrelationNumber, _decode_GPRSCorrelationNumber, _encode_GPRSCorrelationNumber } from "../HI2Operations/GPRSCorrelationNumber.ta.mjs";
// export { GPRSCorrelationNumber, _decode_GPRSCorrelationNumber, _encode_GPRSCorrelationNumber } from "../HI2Operations/GPRSCorrelationNumber.ta.mjs";
import { GPRSEvent, _decode_GPRSEvent, _encode_GPRSEvent, _enum_for_GPRSEvent } from "../HI2Operations/GPRSEvent.ta.mjs";
// export { GPRSEvent, _enum_for_GPRSEvent, GPRSEvent_pDPContextActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_startOfInterceptionWithPDPContextActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithPDPContextActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_pDPContextDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_gPRSAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_gPRSDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_cellOrRAUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, cellOrRAUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_pDPContextModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_endOfInterceptionWithPDPContextActive /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfInterceptionWithPDPContextActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GPRSEvent, _encode_GPRSEvent } from "../HI2Operations/GPRSEvent.ta.mjs";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
import { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../HI2Operations/GPRSOperationErrorCode.ta.mjs";
// export { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../HI2Operations/GPRSOperationErrorCode.ta.mjs";
import { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../UmtsHI2Operations/UmtsQos.ta.mjs";
// export { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../UmtsHI2Operations/UmtsQos.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { IMSevent, _decode_IMSevent, _encode_IMSevent, _enum_for_IMSevent } from "../UmtsHI2Operations/IMSevent.ta.mjs";
// export { IMSevent, _enum_for_IMSevent, IMSevent_unfilteredSIPmessage /* IMPORTED_LONG_ENUMERATION_ITEM */, unfilteredSIPmessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_sIPheaderOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, sIPheaderOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_decryptionKeysAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, decryptionKeysAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_startOfInterceptionForIMSEstablishedSession /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionForIMSEstablishedSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_xCAPRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, xCAPRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_xCAPResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, xCAPResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_ccUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, ccUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMSevent, _encode_IMSevent } from "../UmtsHI2Operations/IMSevent.ta.mjs";
import { TARGETACTIVITYMONITOR_1, _decode_TARGETACTIVITYMONITOR_1, _encode_TARGETACTIVITYMONITOR_1 } from "../TS101909201/TARGETACTIVITYMONITOR-1.ta.mjs";
// export { TARGETACTIVITYMONITOR_1, _decode_TARGETACTIVITYMONITOR_1, _encode_TARGETACTIVITYMONITOR_1 } from "../TS101909201/TARGETACTIVITYMONITOR-1.ta.mjs";
import { LDIevent, _decode_LDIevent, _encode_LDIevent, _enum_for_LDIevent } from "../UmtsHI2Operations/LDIevent.ta.mjs";
// export { LDIevent, _enum_for_LDIevent, LDIevent_targetEntersIA /* IMPORTED_LONG_ENUMERATION_ITEM */, targetEntersIA /* IMPORTED_SHORT_ENUMERATION_ITEM */, LDIevent_targetLeavesIA /* IMPORTED_LONG_ENUMERATION_ITEM */, targetLeavesIA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LDIevent, _encode_LDIevent } from "../UmtsHI2Operations/LDIevent.ta.mjs";
import { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";
// export { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";
import { TARGETACTIVITYMONITORind, _decode_TARGETACTIVITYMONITORind, _encode_TARGETACTIVITYMONITORind } from "../EN301040/TARGETACTIVITYMONITORind.ta.mjs";
// export { TARGETACTIVITYMONITORind, _decode_TARGETACTIVITYMONITORind, _encode_TARGETACTIVITYMONITORind } from "../EN301040/TARGETACTIVITYMONITORind.ta.mjs";
import { TARGETCOMMSMONITORind, _decode_TARGETCOMMSMONITORind, _encode_TARGETCOMMSMONITORind } from "../EN301040/TARGETCOMMSMONITORind.ta.mjs";
// export { TARGETCOMMSMONITORind, _decode_TARGETCOMMSMONITORind, _encode_TARGETCOMMSMONITORind } from "../EN301040/TARGETCOMMSMONITORind.ta.mjs";
import { TTRAFFICind, _decode_TTRAFFICind, _encode_TTRAFFICind } from "../EN301040/TTRAFFICind.ta.mjs";
// export { TTRAFFICind, _decode_TTRAFFICind, _encode_TTRAFFICind } from "../EN301040/TTRAFFICind.ta.mjs";
import { CTTRAFFICind, _decode_CTTRAFFICind, _encode_CTTRAFFICind } from "../EN301040/CTTRAFFICind.ta.mjs";
// export { CTTRAFFICind, _decode_CTTRAFFICind, _encode_CTTRAFFICind } from "../EN301040/CTTRAFFICind.ta.mjs";
import { Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../HI2Operations/Network-Element-Identifier.ta.mjs";
// export { Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../HI2Operations/Network-Element-Identifier.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     domainID                            [0]    OBJECT IDENTIFIER (hi2OperationId) OPTIONAL,
 *         -- for the sending entity the inclusion of the Object Identifier is mandatory
 *     iRIversion                            [23] ENUMERATED
 *     {
 *         version2(2),
 *         ...,
 *         version3(3),
 *         version4(4),
 *         version5(5),
 *         version6(6),
 *         version7(7),
 *         lastVersion(8)
 *     } OPTIONAL,
 *         -- Optional parameter "iRIversion" (tag 23) is redundant starting
 *         -- from TS 101 671 v2.5.1 [81]
 *         -- where to the object identifier "domainID" was introduced into IRI-Parameters.
 *         -- In order to keep backward compatibility, even when the version of the "domainID"
 *         -- parameter will be incremented it is recommended to always send to LEMF the same:
 *         -- enumeration value "lastVersion(8)".
 *         -- if not present, it means version 1 is handled
 *     lawfulInterceptionIdentifier        [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     communicationIdentifier                [2] CommunicationIdentifier,
 *         -- used to uniquely identify an intercepted call.
 *         -- Called "callIdentifier" in v1.1.1 of ES 201 671 [i.5].
 *     timeStamp                            [3] TimeStamp,
 *         -- date and time of the event triggering the report.
 *     intercepted-Call-Direct                [4] ENUMERATED
 *     {
 *         not-Available(0),
 *         originating-Target(1),
 *             -- In case of GPRS, this indicates that the PDP context activation, modification
 *             -- or deactivation is MS requested.
 *         terminating-Target(2),
 *             -- In case of GPRS, this indicates that the PDP context activation, modification
 *             -- or deactivation is network initiated.
 *         ...
 *     } OPTIONAL,
 *     intercepted-Call-State                [5] Intercepted-Call-State OPTIONAL,
 *     ringingDuration                        [6] OCTET STRING (SIZE (3)) OPTIONAL,
 *         -- Duration in seconds. BCD coded: HHMMSS
 *     conversationDuration                [7] OCTET STRING (SIZE (3)) OPTIONAL,
 *         -- Duration in seconds. BCD coded: HHMMSS
 *     locationOfTheTarget                    [8] Location OPTIONAL,
 *         -- location of the target subscriber
 *     partyInformation                    [9] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party (Originating, Terminating or forwarded
 *         -- party), the identity(ies) of the party and all the information provided by the party.
 *     callContentLinkInformation            [10] SEQUENCE
 *     {
 *         cCLink1Characteristics        [1] CallContentLinkCharacteristics OPTIONAL,
 *             -- Information concerning the Content of Communication Link Tx channel established
 *             -- toward the LEMF (or the sum signal channel, in case of mono mode).
 *         cCLink2Characteristics        [2] CallContentLinkCharacteristics OPTIONAL,
 *             -- Information concerning the Content of Communication Link Rx channel established
 *             -- toward the LEMF.
 *         ...
 *     } OPTIONAL,
 *     release-Reason-Of-Intercepted-Call    [11] OCTET STRING (SIZE (2)) OPTIONAL,
 *         -- Release cause coded in ITU-T Q.850 [31] format.
 *         -- This parameter indicates the reason why the intercepted call cannot be established or
 *         -- why the intercepted call has been released after the active phase.
 *     nature-Of-The-intercepted-call        [12] ENUMERATED
 *     {
 *         -- Nature of the intercepted "call":
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
 *         ...,
 *         uMTS-circuit-call(6),
 *             -- the possible call content call is established through the HI3 "circuit" interface
 *             -- the possible data are sent through the HI3 "data" interface
 *         lTE-SMS-Message(7),
 *             -- indicator for SMS from LTE handset
 *             -- the SMS content is sent through the HI2 or HI3 "data" interface
 *         lTE-circuit-call(8)
 *             -- indicator for CS call from LTE handset
 * } OPTIONAL,
 *     serverCenterAddress                    [13] PartyInformation OPTIONAL,
 *         -- e.g. in case of SMS message this parameter provides the address of the relevant
 *         -- server within the calling (if server is originating) or called
 *         -- (if server is terminating) party address parameters
 *     sMS                                    [14] SMS-report OPTIONAL,
 *         -- this parameter provides the SMS content and associated information
 *     cC-Link-Identifier                    [15] CC-Link-Identifier OPTIONAL,
 *         -- Depending on a network option, this parameter may be used to identify a CC link
 *         -- in case of multiparty calls.
 *     national-Parameters                    [16] National-Parameters OPTIONAL,
 *     gPRSCorrelationNumber                [18] GPRSCorrelationNumber OPTIONAL,
 *     gPRSevent                            [20] GPRSEvent OPTIONAL,
 *         -- This information is used to provide particular action of the target
 *         -- such as attach/detach
 *     sgsnAddress                            [21] DataNodeAddress OPTIONAL,
 *     gPRSOperationErrorCode                [22] GPRSOperationErrorCode OPTIONAL,
 *     ...,
 *     ggsnAddress                            [24] DataNodeAddress OPTIONAL,
 *     qOS                                    [25] UmtsQos OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     networkIdentifier                    [26] Network-Identifier OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     sMSOriginatingAddress                [27] DataNodeAddress OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     sMSTerminatingAddress                [28] DataNodeAddress OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     iMSevent                            [29] IMSevent OPTIONAL,
 *     sIPMessage                            [30] OCTET STRING OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     servingSGSN-number                    [31] OCTET STRING (SIZE (1..20)) OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     servingSGSN-address                    [32] OCTET STRING (SIZE (5..17)) OPTIONAL,
 *         -- Octets are coded according to 3GPP TS 23.003 [76]
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     tARGETACTIVITYMONITOR                [33] TARGETACTIVITYMONITOR-1 OPTIONAL,
 *         -- Parameter is used in TS 101 909-20-1 [69]
 *     ldiEvent                            [34] LDIevent OPTIONAL,
 *         -- The "Location Dependent Interception" parameter is duplicated from 3GPP TS 33.108 [61]
 *     correlation                            [35] CorrelationValues OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61]
 *     tARGETACTIVITYMONITORind            [36] TARGETACTIVITYMONITORind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     tARGETCOMMSMONITORind                [37] TARGETCOMMSMONITORind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     tTRAFFICind                            [38] TTRAFFICind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     cTTRAFFICind                        [39] CTTRAFFICind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     servingSystem                        [40] Network-Element-Identifier OPTIONAL,
 *         -- Parameter identifies the visited network element
 *     national-HI2-ASN1parameters            [255] National-HI2-ASN1parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `domainID`.
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `iRIversion`.
     * @public
     * @readonly
     */
    readonly iRIversion: OPTIONAL<IRI_Parameters_iRIversion>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `communicationIdentifier`.
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `intercepted_Call_Direct`.
     * @public
     * @readonly
     */
    readonly intercepted_Call_Direct: OPTIONAL<IRI_Parameters_intercepted_Call_Direct>;
    /**
     * @summary `intercepted_Call_State`.
     * @public
     * @readonly
     */
    readonly intercepted_Call_State: OPTIONAL<Intercepted_Call_State>;
    /**
     * @summary `ringingDuration`.
     * @public
     * @readonly
     */
    readonly ringingDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `conversationDuration`.
     * @public
     * @readonly
     */
    readonly conversationDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationOfTheTarget`.
     * @public
     * @readonly
     */
    readonly locationOfTheTarget: OPTIONAL<Location>;
    /**
     * @summary `partyInformation`.
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `callContentLinkInformation`.
     * @public
     * @readonly
     */
    readonly callContentLinkInformation: OPTIONAL<IRI_Parameters_callContentLinkInformation>;
    /**
     * @summary `release_Reason_Of_Intercepted_Call`.
     * @public
     * @readonly
     */
    readonly release_Reason_Of_Intercepted_Call: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nature_Of_The_intercepted_call`.
     * @public
     * @readonly
     */
    readonly nature_Of_The_intercepted_call: OPTIONAL<IRI_Parameters_nature_Of_The_intercepted_call>;
    /**
     * @summary `serverCenterAddress`.
     * @public
     * @readonly
     */
    readonly serverCenterAddress: OPTIONAL<PartyInformation>;
    /**
     * @summary `sMS`.
     * @public
     * @readonly
     */
    readonly sMS: OPTIONAL<SMS_report>;
    /**
     * @summary `cC_Link_Identifier`.
     * @public
     * @readonly
     */
    readonly cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
    /**
     * @summary `national_Parameters`.
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `gPRSCorrelationNumber`.
     * @public
     * @readonly
     */
    readonly gPRSCorrelationNumber: OPTIONAL<GPRSCorrelationNumber>;
    /**
     * @summary `gPRSevent`.
     * @public
     * @readonly
     */
    readonly gPRSevent: OPTIONAL<GPRSEvent>;
    /**
     * @summary `sgsnAddress`.
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `gPRSOperationErrorCode`.
     * @public
     * @readonly
     */
    readonly gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>;
    /**
     * @summary `ggsnAddress`.
     * @public
     * @readonly
     */
    readonly ggsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `qOS`.
     * @public
     * @readonly
     */
    readonly qOS: OPTIONAL<UmtsQos>;
    /**
     * @summary `networkIdentifier`.
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `sMSOriginatingAddress`.
     * @public
     * @readonly
     */
    readonly sMSOriginatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `sMSTerminatingAddress`.
     * @public
     * @readonly
     */
    readonly sMSTerminatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `iMSevent`.
     * @public
     * @readonly
     */
    readonly iMSevent: OPTIONAL<IMSevent>;
    /**
     * @summary `sIPMessage`.
     * @public
     * @readonly
     */
    readonly sIPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_number`.
     * @public
     * @readonly
     */
    readonly servingSGSN_number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_address`.
     * @public
     * @readonly
     */
    readonly servingSGSN_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tARGETACTIVITYMONITOR`.
     * @public
     * @readonly
     */
    readonly tARGETACTIVITYMONITOR: OPTIONAL<TARGETACTIVITYMONITOR_1>;
    /**
     * @summary `ldiEvent`.
     * @public
     * @readonly
     */
    readonly ldiEvent: OPTIONAL<LDIevent>;
    /**
     * @summary `correlation`.
     * @public
     * @readonly
     */
    readonly correlation: OPTIONAL<CorrelationValues>;
    /**
     * @summary `tARGETACTIVITYMONITORind`.
     * @public
     * @readonly
     */
    readonly tARGETACTIVITYMONITORind: OPTIONAL<TARGETACTIVITYMONITORind>;
    /**
     * @summary `tARGETCOMMSMONITORind`.
     * @public
     * @readonly
     */
    readonly tARGETCOMMSMONITORind: OPTIONAL<TARGETCOMMSMONITORind>;
    /**
     * @summary `tTRAFFICind`.
     * @public
     * @readonly
     */
    readonly tTRAFFICind: OPTIONAL<TTRAFFICind>;
    /**
     * @summary `cTTRAFFICind`.
     * @public
     * @readonly
     */
    readonly cTTRAFFICind: OPTIONAL<CTTRAFFICind>;
    /**
     * @summary `servingSystem`.
     * @public
     * @readonly
     */
    readonly servingSystem: OPTIONAL<Network_Element_Identifier>;
    /**
     * @summary `national_HI2_ASN1parameters`.
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
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        iRIversion: OPTIONAL<IRI_Parameters_iRIversion>,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        communicationIdentifier: CommunicationIdentifier,
        timeStamp: TimeStamp,
        intercepted_Call_Direct: OPTIONAL<IRI_Parameters_intercepted_Call_Direct>,
        intercepted_Call_State: OPTIONAL<Intercepted_Call_State>,
        ringingDuration: OPTIONAL<OCTET_STRING>,
        conversationDuration: OPTIONAL<OCTET_STRING>,
        locationOfTheTarget: OPTIONAL<Location>,
        partyInformation: OPTIONAL<PartyInformation[]>,
        callContentLinkInformation: OPTIONAL<IRI_Parameters_callContentLinkInformation>,
        release_Reason_Of_Intercepted_Call: OPTIONAL<OCTET_STRING>,
        nature_Of_The_intercepted_call: OPTIONAL<IRI_Parameters_nature_Of_The_intercepted_call>,
        serverCenterAddress: OPTIONAL<PartyInformation>,
        sMS: OPTIONAL<SMS_report>,
        cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>,
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
        tARGETACTIVITYMONITOR: OPTIONAL<TARGETACTIVITYMONITOR_1>,
        ldiEvent: OPTIONAL<LDIevent>,
        correlation: OPTIONAL<CorrelationValues>,
        tARGETACTIVITYMONITORind: OPTIONAL<TARGETACTIVITYMONITORind>,
        tARGETCOMMSMONITORind: OPTIONAL<TARGETCOMMSMONITORind>,
        tTRAFFICind: OPTIONAL<TTRAFFICind>,
        cTTRAFFICind: OPTIONAL<CTTRAFFICind>,
        servingSystem: OPTIONAL<Network_Element_Identifier>,
        national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
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
        this.serverCenterAddress = serverCenterAddress;
        this.sMS = sMS;
        this.cC_Link_Identifier = cC_Link_Identifier;
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
        this.tARGETACTIVITYMONITOR = tARGETACTIVITYMONITOR;
        this.ldiEvent = ldiEvent;
        this.correlation = correlation;
        this.tARGETACTIVITYMONITORind = tARGETACTIVITYMONITORind;
        this.tARGETCOMMSMONITORind = tARGETCOMMSMONITORind;
        this.tTRAFFICind = tTRAFFICind;
        this.cTTRAFFICind = cTTRAFFICind;
        this.servingSystem = servingSystem;
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
        return new IRI_Parameters(_o.domainID, _o.iRIversion, _o.lawfulInterceptionIdentifier, _o.communicationIdentifier, _o.timeStamp, _o.intercepted_Call_Direct, _o.intercepted_Call_State, _o.ringingDuration, _o.conversationDuration, _o.locationOfTheTarget, _o.partyInformation, _o.callContentLinkInformation, _o.release_Reason_Of_Intercepted_Call, _o.nature_Of_The_intercepted_call, _o.serverCenterAddress, _o.sMS, _o.cC_Link_Identifier, _o.national_Parameters, _o.gPRSCorrelationNumber, _o.gPRSevent, _o.sgsnAddress, _o.gPRSOperationErrorCode, _o.ggsnAddress, _o.qOS, _o.networkIdentifier, _o.sMSOriginatingAddress, _o.sMSTerminatingAddress, _o.iMSevent, _o.sIPMessage, _o.servingSGSN_number, _o.servingSGSN_address, _o.tARGETACTIVITYMONITOR, _o.ldiEvent, _o.correlation, _o.tARGETACTIVITYMONITORind, _o.tARGETCOMMSMONITORind, _o.tTRAFFICind, _o.cTTRAFFICind, _o.servingSystem, _o.national_HI2_ASN1parameters, _o._unrecognizedExtensionsList);
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
         * @summary The enum used as the type of the component `gPRSevent`
         * @public
         * @static
         */

    public static _enum_for_gPRSevent = _enum_for_GPRSEvent;        /**
         * @summary The enum used as the type of the component `iMSevent`
         * @public
         * @static
         */

    public static _enum_for_iMSevent = _enum_for_IMSevent;        /**
         * @summary The enum used as the type of the component `ldiEvent`
         * @public
         * @static
         */

    public static _enum_for_ldiEvent = _enum_for_LDIevent;
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
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
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
    new $.ComponentSpec("serverCenterAddress", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("cC-Link-Identifier", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("gPRSCorrelationNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("gPRSevent", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("gPRSOperationErrorCode", true, $.hasTag(_TagClass.context, 22))
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
    new $.ComponentSpec("ggsnAddress", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("qOS", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("sMSOriginatingAddress", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("sMSTerminatingAddress", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("iMSevent", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("sIPMessage", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("servingSGSN-number", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("servingSGSN-address", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("tARGETACTIVITYMONITOR", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("ldiEvent", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("correlation", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("tARGETACTIVITYMONITORind", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("tARGETCOMMSMONITORind", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("tTRAFFICind", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("cTTRAFFICind", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("servingSystem", true, $.hasTag(_TagClass.context, 40)),
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
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
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
    let serverCenterAddress: OPTIONAL<PartyInformation>;
    let sMS: OPTIONAL<SMS_report>;
    let cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
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
    let tARGETACTIVITYMONITOR: OPTIONAL<TARGETACTIVITYMONITOR_1>;
    let ldiEvent: OPTIONAL<LDIevent>;
    let correlation: OPTIONAL<CorrelationValues>;
    let tARGETACTIVITYMONITORind: OPTIONAL<TARGETACTIVITYMONITORind>;
    let tARGETCOMMSMONITORind: OPTIONAL<TARGETCOMMSMONITORind>;
    let tTRAFFICind: OPTIONAL<TTRAFFICind>;
    let cTTRAFFICind: OPTIONAL<CTTRAFFICind>;
    let servingSystem: OPTIONAL<Network_Element_Identifier>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi2OperationId)) {
                throw new ASN1Error("IRI_Parameters.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
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
        "serverCenterAddress": (_el: _Element): void => { serverCenterAddress = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_implicit<SMS_report>(() => _decode_SMS_report)(_el); },
        "cC-Link-Identifier": (_el: _Element): void => { cC_Link_Identifier = $._decode_implicit<CC_Link_Identifier>(() => _decode_CC_Link_Identifier)(_el); },
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
        "tARGETACTIVITYMONITOR": (_el: _Element): void => { tARGETACTIVITYMONITOR = $._decode_implicit<TARGETACTIVITYMONITOR_1>(() => _decode_TARGETACTIVITYMONITOR_1)(_el); },
        "ldiEvent": (_el: _Element): void => { ldiEvent = $._decode_implicit<LDIevent>(() => _decode_LDIevent)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_explicit<CorrelationValues>(() => _decode_CorrelationValues)(_el); },
        "tARGETACTIVITYMONITORind": (_el: _Element): void => { tARGETACTIVITYMONITORind = $._decode_implicit<TARGETACTIVITYMONITORind>(() => _decode_TARGETACTIVITYMONITORind)(_el); },
        "tARGETCOMMSMONITORind": (_el: _Element): void => { tARGETCOMMSMONITORind = $._decode_implicit<TARGETCOMMSMONITORind>(() => _decode_TARGETCOMMSMONITORind)(_el); },
        "tTRAFFICind": (_el: _Element): void => { tTRAFFICind = $._decode_implicit<TTRAFFICind>(() => _decode_TTRAFFICind)(_el); },
        "cTTRAFFICind": (_el: _Element): void => { cTTRAFFICind = $._decode_implicit<CTTRAFFICind>(() => _decode_CTTRAFFICind)(_el); },
        "servingSystem": (_el: _Element): void => { servingSystem = $._decode_explicit<Network_Element_Identifier>(() => _decode_Network_Element_Identifier)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        domainID,
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
        serverCenterAddress,
        sMS,
        cC_Link_Identifier,
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
        tARGETACTIVITYMONITOR,
        ldiEvent,
        correlation,
        tARGETACTIVITYMONITORind,
        tARGETCOMMSMONITORind,
        tTRAFFICind,
        cTTRAFFICind,
        servingSystem,
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
    const _components: _Element[] = new Array(40 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
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
    if (value.serverCenterAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.serverCenterAddress, $.BER);
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
    if (value.tARGETACTIVITYMONITOR !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_TARGETACTIVITYMONITOR_1, $.BER)(value.tARGETACTIVITYMONITOR, $.BER);
    }
    if (value.ldiEvent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_LDIevent, $.BER)(value.ldiEvent, $.BER);
    }
    if (value.correlation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 35, () => _encode_CorrelationValues, $.BER)(value.correlation, $.BER);
    }
    if (value.tARGETACTIVITYMONITORind !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_TARGETACTIVITYMONITORind, $.BER)(value.tARGETACTIVITYMONITORind, $.BER);
    }
    if (value.tARGETCOMMSMONITORind !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_TARGETCOMMSMONITORind, $.BER)(value.tARGETCOMMSMONITORind, $.BER);
    }
    if (value.tTRAFFICind !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_TTRAFFICind, $.BER)(value.tTRAFFICind, $.BER);
    }
    if (value.cTTRAFFICind !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_CTTRAFFICind, $.BER)(value.cTTRAFFICind, $.BER);
    }
    if (value.servingSystem !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 40, () => _encode_Network_Element_Identifier, $.BER)(value.servingSystem, $.BER);
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
