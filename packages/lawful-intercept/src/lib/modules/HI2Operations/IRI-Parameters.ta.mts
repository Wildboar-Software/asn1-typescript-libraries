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
 * Information content of an IRI-BEGIN, IRI-END, IRI-CONTINUE, or IRI-REPORT
 * record. HI2 carries IRI from the operator's mediation function to the LEMF.
 * Parameters are coded in ASN.1 BER and, where possible, in the format already
 * used in the network. They come from normal signalling. The interception
 * function does not ask for information the signalling system has not supplied.
 * Each available parameter is sent at least once. An identical value need not
 * be repeated in a later record unless it has changed. The interception
 * function does not store call context for that purpose.
 *
 * Table A.3.1 treats record type, version, LIID, CID, and timestamp as HI2
 * control information, and CCLID as control information only for CC-link option
 * B. In this type the LIID, the communication identifier, and the timestamp are
 * mandatory. `domainID` is optional in the syntax and mandatory for the sending
 * entity. `iRIversion` is optional. Clause A.3.3 says the CID may be absent
 * from an IRI-REPORT that is not about a target call; this type still requires
 * the communication identifier and makes the CIN optional inside it. BEGIN,
 * CONTINUE, and REPORT must include at least one optional parameter.
 *
 * Send the record as soon as the information is available. Do not hold it in
 * order to aggregate. Exceptionally, for example after a data-link failure, IRI
 * may be buffered for a specified time. Delivery is the class-2 ROSE operation
 * `sending-of-IRI` or FTP.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 5.2, clause 8, clause A.3.2.1,
 * clause A.3.3, clause A.3.5, clause C.0, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
     * @description
     *
     * Object identifier of the HI2 specification the sender is using.
     * Constrained to `hi2OperationId`, which is `{hi2DomainId version18(18)}`.
     * Optional in the type. The module says inclusion is mandatory for the
     * sending entity. Introduced in TS 101 671 v2.5.1, which made `iRIversion`
     * redundant.
     *
     * The module header in this edition is written `version17(18)`. The
     * specification does not say why that name and the number 18 differ. Do not
     * use module `version11(11)`: it has a syntax error and exists only in TS
     * 101 671 v3.5.1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `iRIversion`.
     * @description
     *
     * Version indication of the HI2 interface. Optional, and redundant with
     * `domainID` from TS 101 671 v2.5.1, the edition that introduced
     * `domainID`.
     * The module recommends always sending `lastVersion(8)`, even if the
     * version inside `domainID` is incremented. If this parameter is absent,
     * version 1 is handled. TS 101 671 does not define `version2` through
     * `version7`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRIversion: OPTIONAL<IRI_Parameters_iRIversion>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     *
     * LIID associated with the target. Mandatory in the record. Present in
     * every GSM and GPRS record sent to the LEMF. Correlates HI2 with HI3.
     * Assigned by the operator, agreed with the LEA, and unique per target
     * identity per LEA, with a national option of one LIID for several
     * identities of one subject.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.1, clause A.3.2.1, clause
     * A.8.4, clause B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `communicationIdentifier`.
     * @description
     *
     * CID of the intercepted call. Called `callIdentifier` in ES 201 671
     * v1.1.1. Mandatory in this type. The CIN inside it is mandatory for
     * connection-oriented IRI and whenever HI3 is associated, and optional for
     * IRI-REPORT with no HI3. Clause A.3.3 says the CID may be missing from an
     * IRI-REPORT that is not related to a target call. The same CID is sent on
     * HI3 and on each IRI of the same call.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2, clause A.3.2.1, clause
     * A.3.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Date and time of the event that triggered the report. Mandatory. Minimum
     * resolution is one second. Either local time, without a time zone in this
     * module, or UTC. The operator normally chooses which form is sent.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `intercepted_Call_Direct`.
     * @description
     *
     * Whether the target is the originating or the terminating party. Include
     * it when the direction is detected. For GPRS, originating means the mobile
     * station requested the PDP-context activation, modification, or
     * deactivation, and terminating means the network initiated it.
     * `not-Available` is named and not further defined.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.3, clause
     * A.8.4, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly intercepted_Call_Direct: OPTIONAL<IRI_Parameters_intercepted_Call_Direct>;
    /**
     * @summary `intercepted_Call_State`.
     * @description
     *
     * State of the intercepted call. Idle, with the release reason in
     * `release-Reason-Of-Intercepted-Call`; set-up in process; or connected,
     * meaning the answer has been received.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly intercepted_Call_State: OPTIONAL<Intercepted_Call_State>;
    /**
     * @summary `ringingDuration`.
     * @description
     *
     * Ringing duration. The module says the duration is in seconds and is BCD
     * coded HHMMSS, in three octets. LI-specific. Include it when the event to
     * be reported is detected. TS 101 671 does not define the nibble order or
     * which instant opens and closes the interval.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly ringingDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `conversationDuration`.
     * @description
     *
     * Conversation duration. The module says the duration is in seconds and is
     * BCD coded HHMMSS, in three octets. LI-specific. Include it when the event
     * to be reported is detected. TS 101 671 does not define the nibble order
     * or which instant opens and closes the interval.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly conversationDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationOfTheTarget`.
     * @description
     *
     * Location of the target subscriber. Include it when it becomes available.
     * GSM maps cell id and location area here. GPRS maps the cell global id and
     * the routing area identifier to components of this value.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.8.4, clause
     * B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly locationOfTheTarget: OPTIONAL<Location>;
    /**
     * @summary `partyInformation`.
     * @description
     *
     * Parties concerned in the call: a set of 1 to 10. Each element gives the
     * party role, the party's identities, and the information that party
     * provided. Include an item when it first becomes available. An identical
     * value need not be repeated.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.2.3, clause
     * D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `callContentLinkInformation`.
     * @description
     *
     * CC-link information for the transmit and receive channels toward the
     * LEMF, or the mono sum signal on the first channel. LI-specific. Include
     * it when a link event to be reported is detected. Two one-way 64 kbit/s
     * links are used for a bi-directional target call.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.4.1, clause
     * D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly callContentLinkInformation: OPTIONAL<IRI_Parameters_callContentLinkInformation>;
    /**
     * @summary `release_Reason_Of_Intercepted_Call`.
     * @description
     *
     * Why the intercepted call cannot be established, or why it was released
     * after the active phase. ITU-T Q.850 format, two octets. When the call
     * state is idle, this parameter provides the reason. Table A.8.2 maps the
     * call release reason here. Clause A.3.2.2 also sends a signalling cause
     * with the party that initiated the release, in the ISUP or DSS1
     * parameters. Table A.3.2 lists both that party container and this
     * parameter for the cause indicator.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.3, clause
     * A.8.4, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly release_Reason_Of_Intercepted_Call: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nature_Of_The_intercepted_call`.
     * @description
     *
     * Nature of the intercepted call, including which HI2 or HI3 interface
     * carries UUS, SMS, call content, or packet data. Include it when the
     * nature is known. Clause A.9.2.1 requires `tETRA-circuit-call` for the
     * TETRA events in that clause. The module does not state an HI3 path for
     * `lTE-circuit-call`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly nature_Of_The_intercepted_call: OPTIONAL<IRI_Parameters_nature_Of_The_intercepted_call>;
    /**
     * @summary `serverCenterAddress`.
     * @description
     *
     * Address of the relevant server. For an SMS, it is carried in the
     * calling-party address parameters when the server is originating, and in
     * the called-party address parameters when the server is terminating.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly serverCenterAddress: OPTIONAL<PartyInformation>;
    /**
     * @summary `sMS`.
     * @description
     *
     * SMS content and the information associated with it. GSM delivers SMS via
     * HI2. Tables A.8.1 and B.5.1 use an IRI-REPORT. Header information in the
     * SMS body that is IRI, such as the receiving MSISDN sent to the service
     * centre, is included in the IRI. Where an IRI-only authorization excludes
     * the message body, party information that the network element sees inside
     * the content is still included in the IRI.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.3, clause A.8.4, clause
     * B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sMS: OPTIONAL<SMS_report>;
    /**
     * @summary `cC_Link_Identifier`.
     * @description
     *
     * CCLID. Network option for multiparty calls when CC links are reused
     * (option B). Sent on HI2, and on HI3 set-up, in addition to the CIN and
     * the NID. ASCII digits, size 1 to 8. Subaddress option: only `0` to `9`.
     * It may be omitted on HI3 when it uses the CIN format, and the CIN may
     * then stand for it. Not used when only IRI is delivered.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.1.1, clause A.1.3, clause
     * A.5.4.2, clause D.5, annex E.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
    /**
     * @summary `national_Parameters`.
     * @description
     *
     * National parameters, a set of 1 to 40 octet strings of size 1 to 256.
     * Content is defined by national law. National or operator extensions of
     * tables A.3.2 and A.3.3 are carried here and transmitted as defined by the
     * sending network.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.3.4, clause
     * D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `gPRSCorrelationNumber`.
     * @description
     *
     * Correlation number the SGSN or GGSN gives to HI2 and HI3. Unique per PDP
     * context. It correlates CC with IRI, and correlates the IRIs of one PDP
     * context. Table B.5.2. The type is an octet string of size 8 to 20. This
     * module states no further coding. Annex H, as an example for UMTS, says it
     * may be the GGSN address and the charging id, and that a CSCF in this
     * release should use this parameter as a container.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.2.2, clause B.5.3, clause
     * D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly gPRSCorrelationNumber: OPTIONAL<GPRSCorrelationNumber>;
    /**
     * @summary `gPRSevent`.
     * @description
     *
     * A particular action of the target, such as attach or detach. The value
     * set refers to 3GPP TS 03.33. Table B.5.1 maps attach, detach, cell or RA
     * update, SMS, unsuccessful PDP-context activation, and end of intercept
     * with an active context to IRI-REPORT; successful activation to IRI-BEGIN;
     * modification to IRI-CONTINUE; deactivation to IRI-END; and start of
     * intercept with an active context to IRI-BEGIN or, optionally,
     * IRI-CONTINUE.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly gPRSevent: OPTIONAL<GPRSEvent>;
    /**
     * @summary `sgsnAddress`.
     * @description
     *
     * SGSN address. The module assigns the parameter and states no coding rule.
     * Annex B.5 states no correlation rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `gPRSOperationErrorCode`.
     * @description
     *
     * Reason a PDP-context activation failed, or an attach attempt failed.
     * Table B.5.2 maps both to this parameter. The type is two octets and says
     * to take the values from 3GPP TS 24.008, the GMM cause or the SM cause.
     * This module does not list those values.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>;
    /**
     * @summary `ggsnAddress`.
     * @description
     *
     * GGSN address. The module assigns the parameter and states no coding rule.
     * Annex B.5 states no correlation rule for it. GGSN interception itself is
     * a national option.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly ggsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `qOS`.
     * @description
     *
     * Duplicated from 3GPP TS 33.108. This document gives no coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly qOS: OPTIONAL<UmtsQos>;
    /**
     * @summary `networkIdentifier`.
     * @description
     *
     * Duplicated from 3GPP TS 33.108. This module gives no further coding rule.
     * It is a separate optional component from the NID inside
     * `communicationIdentifier`. Annex H maps the intercepting CSCF's network
     * identifier to this parameter: operator identifier mandatory, network
     * element identifier optional.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `sMSOriginatingAddress`.
     * @description
     *
     * Duplicated from 3GPP TS 33.108. This document gives no coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sMSOriginatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `sMSTerminatingAddress`.
     * @description
     *
     * Duplicated from 3GPP TS 33.108. This document gives no coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sMSTerminatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `iMSevent`.
     * @description
     *
     * IMS event, imported from the 3GPP TS 33.108 module `UmtsHI2Operations`.
     * This field has no comment of its own. Annex H maps the IMS event type
     * here and sends a SIP message as an IRI-REPORT. The value meanings are not
     * defined in this document.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly iMSevent: OPTIONAL<IMSevent>;
    /**
     * @summary `sIPMessage`.
     * @description
     *
     * Duplicated from 3GPP TS 33.108. Annex H carries either the whole SIP
     * message, or the SIP header plus an SDP body if any. The header form is
     * used when the warrant requires only IRI. Specific content, for example a
     * message body, is deleted. Unknown headers are not deleted. Table H.1.3
     * makes it mandatory for a SIP-Message REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sIPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_number`.
     * @description
     *
     * Octet string of size 1 to 20. Duplicated from 3GPP TS 33.108. This
     * document gives no further coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly servingSGSN_number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_address`.
     * @description
     *
     * Octet string of size 5 to 17. Octets are coded according to 3GPP TS
     * 23.003. Duplicated from 3GPP TS 33.108.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly servingSGSN_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tARGETACTIVITYMONITOR`.
     * @description
     *
     * Used in TS 101 909-20-1. This module states no further rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tARGETACTIVITYMONITOR: OPTIONAL<TARGETACTIVITYMONITOR_1>;
    /**
     * @summary `ldiEvent`.
     * @description
     *
     * Location-dependent interception parameter. Duplicated from 3GPP TS
     * 33.108. This document gives no coding rule for the values.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly ldiEvent: OPTIONAL<LDIevent>;
    /**
     * @summary `correlation`.
     * @description
     *
     * Duplicated from 3GPP TS 33.108. Annex H uses it to correlate PDP contexts
     * ( `iri-to-CC`, including a separate signalling context when two contexts
     * are used) and to correlate SIP messages of one session ( `iri-to-iri` ).
     * Optional on the SIP-Message REPORT when applicable. This module does not
     * define the inner fields.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly correlation: OPTIONAL<CorrelationValues>;
    /**
     * @summary `tARGETACTIVITYMONITORind`.
     * @description
     *
     * Used in EN 301 040. This module states no further rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tARGETACTIVITYMONITORind: OPTIONAL<TARGETACTIVITYMONITORind>;
    /**
     * @summary `tARGETCOMMSMONITORind`.
     * @description
     *
     * Used in EN 301 040. This module states no further rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tARGETCOMMSMONITORind: OPTIONAL<TARGETCOMMSMONITORind>;
    /**
     * @summary `tTRAFFICind`.
     * @description
     *
     * Used in EN 301 040. This module states no further rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tTRAFFICind: OPTIONAL<TTRAFFICind>;
    /**
     * @summary `cTTRAFFICind`.
     * @description
     *
     * Used in EN 301 040. This module states no further rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly cTTRAFFICind: OPTIONAL<CTTRAFFICind>;
    /**
     * @summary `servingSystem`.
     * @description
     *
     * Visited network element. Table A.8.2: the serving MSC/VLR. The Serving
     * System report is generated at the HLR when the HLR detects that the
     * intercept subject has roamed. Table A.8.1 sends that event as an
     * IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.4, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly servingSystem: OPTIONAL<Network_Element_Identifier>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @description
     *
     * National HI2 extensions in ASN.1. The country code is ISO 3166-1 alpha-2
     * and applies to parameters added after the extension marker. Include a
     * version and a vendor identification. Vendor identifications can be taken
     * from IANA; the module points to annex K. Avoid tags 240 to 255.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * BER extension additions that were not recognized. Clause C.1.2.4 refers
     * unrecognized fields and parameters to annex G. The LEMF ignores an
     * unrecognized parameter name and continues the record; that case does not
     * by itself require an error, because the network may be using a newer
     * specification. An unrecognized or disallowed value is also ignored, and
     * the LEMF may raise an alarm. An undecodable ROSE record is rejected. The
     * module allows an `OperationErrors` value when an operation or a parameter
     * is misunderstood. Annex G does not name those error codes.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.4, annex G, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
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
         * @description
         *
         * Optional HI2 version. Redundant with `domainID` from v2.5.1. Send
         * `lastVersion(8)` even if the `domainID` version increases. Absence
         * means version 1. `version2` through `version7` are not further
         * defined.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_iRIversion = _enum_for_IRI_Parameters_iRIversion;        /**
         * @summary The enum used as the type of the component `intercepted_Call_Direct`
         * @description
         *
         * Originating or terminating target. For GPRS, mobile-requested or
         * network-initiated PDP-context activation, modification, or
         * deactivation. `not-Available` is not further defined.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_intercepted_Call_Direct = _enum_for_IRI_Parameters_intercepted_Call_Direct;        /**
         * @summary The enum used as the type of the component `intercepted_Call_State`
         * @description
         *
         * Idle after release, set-up in process, or connected because the
         * answer was received. The idle reason is
         * `release-Reason-Of-Intercepted-Call`.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_intercepted_Call_State = _enum_for_Intercepted_Call_State;        /**
         * @summary The enum used as the type of the component `nature_Of_The_intercepted_call`
         * @description
         *
         * Nature of the intercepted call and the HI2 or HI3 interface that
         * carries content or data. `lTE-circuit-call` does not state an HI3
         * path. TETRA events in clause A.9.2.1 use `tETRA-circuit-call`.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_nature_Of_The_intercepted_call = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call;        /**
         * @summary The enum used as the type of the component `gPRSevent`
         * @description
         *
         * GPRS action of the target, such as attach or detach. Values refer to
         * 3GPP TS 03.33. Clause B.5.3 maps each event to an IRI record type.
         * This module does not restate the 3GPP event procedures.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_gPRSevent = _enum_for_GPRSEvent;        /**
         * @summary The enum used as the type of the component `iMSevent`
         * @description
         *
         * IMS event enumeration imported from 3GPP TS 33.108. Annex H maps the
         * IMS event type to this component. This document does not define the
         * values.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_iMSevent = _enum_for_IMSevent;        /**
         * @summary The enum used as the type of the component `ldiEvent`
         * @description
         *
         * Location-dependent interception enumeration, duplicated from 3GPP TS
         * 33.108. This document does not define the values.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
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
