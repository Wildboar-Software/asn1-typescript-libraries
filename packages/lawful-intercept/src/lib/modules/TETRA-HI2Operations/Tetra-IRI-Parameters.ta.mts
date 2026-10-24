/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi2OperationId } from "../TETRA-HI2Operations/hi2OperationId.va.mjs";
import { Tetra_IRI_Parameters_iRIversion, _decode_Tetra_IRI_Parameters_iRIversion, _encode_Tetra_IRI_Parameters_iRIversion, _enum_for_Tetra_IRI_Parameters_iRIversion } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-iRIversion.ta.mjs";
// export { Tetra_IRI_Parameters_iRIversion, _enum_for_Tetra_IRI_Parameters_iRIversion, Tetra_IRI_Parameters_iRIversion_version0 /* IMPORTED_LONG_ENUMERATION_ITEM */, version0 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Tetra_IRI_Parameters_iRIversion, _encode_Tetra_IRI_Parameters_iRIversion } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-iRIversion.ta.mjs";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../TETRA-HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../TETRA-HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../TETRA-HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../TETRA-HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../TETRA-HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../TETRA-HI2Operations/TimeStamp.ta.mjs";
import { Tetra_IRI_Parameters_intercepted_Call_Direct, _decode_Tetra_IRI_Parameters_intercepted_Call_Direct, _encode_Tetra_IRI_Parameters_intercepted_Call_Direct, _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-intercepted-Call-Direct.ta.mjs";
// export { Tetra_IRI_Parameters_intercepted_Call_Direct, _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct, Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Tetra_IRI_Parameters_intercepted_Call_Direct, _encode_Tetra_IRI_Parameters_intercepted_Call_Direct } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-intercepted-Call-Direct.ta.mjs";
import { Intercepted_Call_State, _decode_Intercepted_Call_State, _encode_Intercepted_Call_State, _enum_for_Intercepted_Call_State } from "../TETRA-HI2Operations/Intercepted-Call-State.ta.mjs";
// export { Intercepted_Call_State, _enum_for_Intercepted_Call_State, Intercepted_Call_State_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, Intercepted_Call_State_setUpInProcess /* IMPORTED_LONG_ENUMERATION_ITEM */, setUpInProcess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Intercepted_Call_State_connected /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Intercepted_Call_State, _encode_Intercepted_Call_State } from "../TETRA-HI2Operations/Intercepted-Call-State.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TETRA-HI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TETRA-HI2Operations/Location.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../TETRA-HI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../TETRA-HI2Operations/PartyInformation.ta.mjs";
import { Tetra_IRI_Parameters_callContentLinkInformation, _decode_Tetra_IRI_Parameters_callContentLinkInformation, _encode_Tetra_IRI_Parameters_callContentLinkInformation } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-callContentLinkInformation.ta.mjs";
// export { Tetra_IRI_Parameters_callContentLinkInformation, _decode_Tetra_IRI_Parameters_callContentLinkInformation, _encode_Tetra_IRI_Parameters_callContentLinkInformation } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-callContentLinkInformation.ta.mjs";
import { Tetra_IRI_Parameters_nature_Of_The_intercepted_call, _decode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call, _encode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call, _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
// export { Tetra_IRI_Parameters_nature_Of_The_intercepted_call, _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, gSM_ISDN_PSTN_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message /* IMPORTED_LONG_ENUMERATION_ITEM */, gSM_SMS_Message /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages /* IMPORTED_LONG_ENUMERATION_ITEM */, uUS4_Messages /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, tETRA_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data /* IMPORTED_LONG_ENUMERATION_ITEM */, teTRA_Packet_Data /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRS_Packet_Data /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, uMTS_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message /* IMPORTED_LONG_ENUMERATION_ITEM */, lTE_SMS_Message /* IMPORTED_SHORT_ENUMERATION_ITEM */, Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call /* IMPORTED_LONG_ENUMERATION_ITEM */, lTE_circuit_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call, _encode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call } from "../TETRA-HI2Operations/Tetra-IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../TETRA-HI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../TETRA-HI2Operations/SMS-report.ta.mjs";
import { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../TETRA-HI2Operations/CC-Link-Identifier.ta.mjs";
// export { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../TETRA-HI2Operations/CC-Link-Identifier.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../TETRA-HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../TETRA-HI2Operations/National-Parameters.ta.mjs";
import { GPRSCorrelationNumber, _decode_GPRSCorrelationNumber, _encode_GPRSCorrelationNumber } from "../TETRA-HI2Operations/GPRSCorrelationNumber.ta.mjs";
// export { GPRSCorrelationNumber, _decode_GPRSCorrelationNumber, _encode_GPRSCorrelationNumber } from "../TETRA-HI2Operations/GPRSCorrelationNumber.ta.mjs";
import { GPRSEvent, _decode_GPRSEvent, _encode_GPRSEvent, _enum_for_GPRSEvent } from "../TETRA-HI2Operations/GPRSEvent.ta.mjs";
// export { GPRSEvent, _enum_for_GPRSEvent, GPRSEvent_pDPContextActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_startOfInterceptionWithPDPContextActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithPDPContextActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_pDPContextDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_gPRSAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_gPRSDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_cellOrRAUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, cellOrRAUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GPRSEvent_pDPContextModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GPRSEvent, _encode_GPRSEvent } from "../TETRA-HI2Operations/GPRSEvent.ta.mjs";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../TETRA-HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../TETRA-HI2Operations/DataNodeAddress.ta.mjs";
import { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../TETRA-HI2Operations/GPRSOperationErrorCode.ta.mjs";
// export { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../TETRA-HI2Operations/GPRSOperationErrorCode.ta.mjs";
import { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../UmtsHI2Operations/UmtsQos.ta.mjs";
// export { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../UmtsHI2Operations/UmtsQos.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../TETRA-HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../TETRA-HI2Operations/Network-Identifier.ta.mjs";
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
import { TETRA_LI_Event, _decode_TETRA_LI_Event, _encode_TETRA_LI_Event, _enum_for_TETRA_LI_Event } from "../TETRA-HI2Operations/TETRA-LI-Event.ta.mjs";
// export { TETRA_LI_Event, _enum_for_TETRA_LI_Event, TETRA_LI_Event_callSetupMobileOriginating /* IMPORTED_LONG_ENUMERATION_ITEM */, callSetupMobileOriginating /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_callSetupMobileTerminating /* IMPORTED_LONG_ENUMERATION_ITEM */, callSetupMobileTerminating /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_ringing /* IMPORTED_LONG_ENUMERATION_ITEM */, ringing /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_queueing /* IMPORTED_LONG_ENUMERATION_ITEM */, queueing /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_connected /* IMPORTED_LONG_ENUMERATION_ITEM */, TETRA_LI_Event_handover /* IMPORTED_LONG_ENUMERATION_ITEM */, handover /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_callRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, callRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_locationUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, locationUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_sDSMobileOriginating /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSMobileOriginating /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_sDSMobileTerminating /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSMobileTerminating /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_groupIndication /* IMPORTED_LONG_ENUMERATION_ITEM */, groupIndication /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_txGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, txGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_mobileOn /* IMPORTED_LONG_ENUMERATION_ITEM */, mobileOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_mobileOff /* IMPORTED_LONG_ENUMERATION_ITEM */, mobileOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, TETRA_LI_Event_dMO /* IMPORTED_LONG_ENUMERATION_ITEM */, dMO /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TETRA_LI_Event, _encode_TETRA_LI_Event } from "../TETRA-HI2Operations/TETRA-LI-Event.ta.mjs";
import { DMO_Indicator, _decode_DMO_Indicator, _encode_DMO_Indicator, _enum_for_DMO_Indicator } from "../TETRA-HI2Operations/DMO-Indicator.ta.mjs";
// export { DMO_Indicator, _enum_for_DMO_Indicator, DMO_Indicator_dMOSTATETUNKNOWNC /* IMPORTED_LONG_ENUMERATION_ITEM */, dMOSTATETUNKNOWNC /* IMPORTED_SHORT_ENUMERATION_ITEM */, DMO_Indicator_dMOSTATETTMOC /* IMPORTED_LONG_ENUMERATION_ITEM */, dMOSTATETTMOC /* IMPORTED_SHORT_ENUMERATION_ITEM */, DMO_Indicator_dMOSTATETDMOC /* IMPORTED_LONG_ENUMERATION_ITEM */, dMOSTATETDMOC /* IMPORTED_SHORT_ENUMERATION_ITEM */, DMO_Indicator_dMOSTATETIDLEDUALWATCHC /* IMPORTED_LONG_ENUMERATION_ITEM */, dMOSTATETIDLEDUALWATCHC /* IMPORTED_SHORT_ENUMERATION_ITEM */, DMO_Indicator_dMOSTATETFULLDUALWATCHC /* IMPORTED_LONG_ENUMERATION_ITEM */, dMOSTATETFULLDUALWATCHC /* IMPORTED_SHORT_ENUMERATION_ITEM */, DMO_Indicator_dMOSTATETTXINHIBITC /* IMPORTED_LONG_ENUMERATION_ITEM */, dMOSTATETTXINHIBITC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DMO_Indicator, _encode_DMO_Indicator } from "../TETRA-HI2Operations/DMO-Indicator.ta.mjs";
import { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";
// export { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";
import { TxGrantedStatus, _decode_TxGrantedStatus, _encode_TxGrantedStatus } from "../TETRA-HI2Operations/TxGrantedStatus.ta.mjs";
// export { TxGrantedStatus, _decode_TxGrantedStatus, _encode_TxGrantedStatus } from "../TETRA-HI2Operations/TxGrantedStatus.ta.mjs";
import { GroupStatus, _decode_GroupStatus, _encode_GroupStatus } from "../TETRA-HI2Operations/GroupStatus.ta.mjs";
// export { GroupStatus, _decode_GroupStatus, _encode_GroupStatus } from "../TETRA-HI2Operations/GroupStatus.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../TETRA-HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../TETRA-HI2Operations/National-HI2-ASN1parameters.ta.mjs";


/**
 * @summary Tetra_IRI_Parameters
 * @description
 * 
 * Parameters of one TETRA HI2 record. The record type is selected by
 * `TetraIRIContent`. The sending entity shall include `domainID`. If
 * `iRIversion` is absent, version 1 is handled. The only named version is
 * `version0(0)`, followed by an extension marker.
 *
 * After the shared extension marker this module adds `tETRA-LI-Event`,
 * `dMO-Indicator`, `tETRA-PartyInformation`, `tETRA-Other-PartyInformation`,
 * `txGrantedStatus`, and `groupStatus`, and then national HI2 parameters.
 * Clause A.9.2.1.0 requires `nature-Of-The-intercepted-call` to be
 * `tETRA-circuit-call` for the TETRA events defined there. Notes on an
 * information field apply from the first table that states them to every later
 * record that carries that field.
 *
 * BEGIN, CONTINUE, and REPORT shall include at least one optional parameter.
 * IRI parameters come from normal network signalling. The interception function
 * is not required to request extra information that signalling did not supply,
 * and it is not required to filter IRI.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 5.2, clause 8.2, clause A.9.2.1.0,
 * clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters ::= SEQUENCE 
 * {
 *     domainID                            [0] OBJECT IDENTIFIER (hi2OperationId) OPTIONAL,
 *         -- for the sending entity the inclusion of the Object Identifier is mandatory
 *     iRIversion                            [23] ENUMERATED
 *     {
 *         version0(0),
 *         ...
 *     } OPTIONAL,
 *         -- if not present, it means version 1 is handled
 *     lawfulInterceptionIdentifier        [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target
 *     communicationIdentifier                [2] CommunicationIdentifier,
 *         -- used to uniquely identify an intercepted call
 *         -- Called "callIdentifier" in V1.1.1 of ES 201 671 [i.5]
 *     timeStamp                            [3] TimeStamp,
 *         -- date and time of the event triggering the report
 *     intercepted-Call-Direct                [4] ENUMERATED
 *     {
 *         not-Available(0),
 *         originating-Target(1),
 *             -- In case of GPRS, this indicates that the PDP context activation, modification
 *             -- or deactivation is MS requested
 *         terminating-Target(2),
 *             -- In case of GPRS, this indicates that the PDP context activation, modification
 *             -- or deactivation is network initiated
 *         ...
 *     } OPTIONAL,
 *     intercepted-Call-State                [5] Intercepted-Call-State OPTIONAL,
 *     ringingDuration                        [6] OCTET STRING (SIZE (3)) OPTIONAL,
 *         -- Duration in seconds. BCD coded : HHMMSS
 *     conversationDuration                [7] OCTET STRING (SIZE (3)) OPTIONAL,
 *         -- Duration in seconds. BCD coded : HHMMSS
 *     locationOfTheTarget                    [8] Location OPTIONAL,
 *         -- location of the target subscriber
 *     partyInformation                    [9] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party (Originating, Terminating or forwarded
 *         -- party), the identity(ies) of the party and all the information provided by the party
 *     callContentLinkInformation            [10] SEQUENCE
 *     {
 *         cCLink1Characteristics    [1] CallContentLinkCharacteristics OPTIONAL,
 *             -- Information concerning the Content of Communication Link Tx channel established
 *             -- toward the LEMF (or the sum signal channel, in case of mono mode)
 *         cCLink2Characteristics    [2] CallContentLinkCharacteristics OPTIONAL,
 *             -- Information concerning the Content of Communication Link Rx channel established
 *             -- toward the LEMF
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
 *     } OPTIONAL,
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
 *     gPRSevent                             [20] GPRSEvent OPTIONAL,
 *         -- This information is used to provide particular action of the target
 *         -- such as attach/detach
 *     sgsnAddress                         [21] DataNodeAddress OPTIONAL,
 *     gPRSOperationErrorCode                 [22] GPRSOperationErrorCode OPTIONAL,
 *     ...,
 *     ggsnAddress                         [24] DataNodeAddress OPTIONAL,
 *     qOS                                 [25] UmtsQos OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     networkIdentifier                     [26] Network-Identifier OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     sMSOriginatingAddress                 [27] DataNodeAddress OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     sMSTerminatingAddress                 [28] DataNodeAddress OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     iMSevent                             [29] IMSevent OPTIONAL,
 *     sIPMessage                             [30] OCTET STRING OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     servingSGSN-number                     [31] OCTET STRING (SIZE (1..20)) OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     servingSGSN-address                 [32] OCTET STRING (SIZE (5..17)) OPTIONAL,
 *         -- Octets are coded according to TS 123 003
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     tARGETACTIVITYMONITOR                 [33] TARGETACTIVITYMONITOR-1 OPTIONAL,
 *         -- Parameter is used in TS 101 909-20-1 [69]
 *     ldiEvent                             [34] LDIevent OPTIONAL,
 *         -- The "Location Dependent Interception" parameter is duplicated from 3GPP TS 33.108 [61].
 *     correlation                            [35] CorrelationValues OPTIONAL,
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61]
 *     tARGETACTIVITYMONITORind            [36] TARGETACTIVITYMONITORind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     tARGETCOMMSMONITORind                [37] TARGETCOMMSMONITORind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     tTRAFFICind                         [38] TTRAFFICind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     cTTRAFFICind                         [39] CTTRAFFICind OPTIONAL,
 *         -- Parameter is used in EN 301 040 [72]
 *     tETRA-LI-Event                         [40] TETRA-LI-Event OPTIONAL,
 *     dMO-Indicator                        [41] DMO-Indicator OPTIONAL,
 *     tETRA-PartyInformation                [42] TETRAAddressType OPTIONAL,
 *     tETRA-Other-PartyInformation        [43] TETRAAddressType OPTIONAL,
 *     txGrantedStatus                        [44] TxGrantedStatus OPTIONAL,
 *     groupStatus                            [45] GroupStatus OPTIONAL,
 *     national-HI2-ASN1parameters            [255] National-HI2-ASN1parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Tetra_IRI_Parameters {
    /**
     * @summary `domainID`.
     * @description
     *
     * Object identifier of the sending entity, constrained to `hi2OperationId`
     * (`{tETRADomainId hi2(2) version3(3)}`). The component is marked optional,
     * and the module comment says that for the sending entity its inclusion is
     * mandatory.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Identifies which version of the HI2 specification the sender handles. The
     * only named value is `version0(0)`, and an extension marker follows it. If
     * the component is absent, version 1 is handled. The present document does
     * not define further behaviour for `version0`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRIversion: OPTIONAL<Tetra_IRI_Parameters_iRIversion>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     *
     * Lawful Interception Identifier associated with the target. See
     * `LawfulInterceptionIdentifier`. It is mandatory HI2 control information
     * and is required on every annex A.9 TETRA event.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.1, clause A.3.2.1, clause
     * A.9.2.1.
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
     * Identifies the intercepted call. The same value is sent on HI3, so IRI
     * can be correlated with CC, and on each IRI of that call. It was called
     * callIdentifier in V1.1.1 of ES 201 671. Clause A.3.2.1 allows it to be
     * omitted on IRI-REPORT records that are not about a call.
     *
     * The first TETRA call-setup note says the value shall be the same on every
     * record of a call from BEGIN to END, and unique for one LIID for at least
     * several days. That note continues to apply wherever the call identity
     * appears. The call-release note adds that the call identity is incoming or
     * outgoing depending on call type.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2, clause A.3.2.1, clause
     * A.9.2.1.1.1.
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
     * Date and time of the event that triggered the report. Clause A.3.2.1
     * describes it as the date and time of the record trigger condition. The
     * minimum resolution is one second. The operator normally chooses local
     * time or UTC. Annex A.9 marks the event time mandatory on every TETRA
     * event.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause A.9.2.1, clause
     * D.10.3.
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
     * Whether the target is the originating party, the terminating party, or
     * the direction is not available. For GPRS, originating means the mobile
     * station requested the PDP context activation, modification, or
     * deactivation, and terminating means the network initiated it. Include it
     * when it first becomes available. An identical later value need not be
     * repeated.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly intercepted_Call_Direct: OPTIONAL<Tetra_IRI_Parameters_intercepted_Call_Direct>;
    /**
     * @summary `intercepted_Call_State`.
     * @description
     *
     * State of the intercepted call. Idle means the call has been released, and
     * the reason is then taken from `release-Reason-Of-Intercepted-Call`. Annex
     * A.9 marks the call state mandatory on call setup, ringing, queueing,
     * connected, and call release.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.10.3.
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
     * Ringing duration in seconds, BCD coded HHMMSS. Clause A.3.3 includes it
     * when the corresponding event is detected. Where the octet string is not
     * an imported parameter format, clause D.1 places the most significant
     * half-octet in bits 5 to 8 and the least significant half-octet in bits 1
     * to 4. An imported format, such as an E.164 number coded as ISUP, keeps
     * the order of that standard.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.1, clause
     * D.10.3.
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
     * Conversation duration in seconds, BCD coded HHMMSS. Clause A.3.3 includes
     * it when the corresponding event is detected. Where the octet string is
     * not an imported parameter format, clause D.1 places the most significant
     * half-octet in bits 5 to 8 and the least significant half-octet in bits 1
     * to 4. An imported format, such as an E.164 number coded as ISUP, keeps
     * the order of that standard.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.1, clause
     * D.10.3.
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
     * Location of the target subscriber. Include it when signalling provides
     * it. Annex A.9 reports it as conditional TETRA location on call setup,
     * ringing, queueing, connected, call forward, call hold, call release, SDS,
     * group indication, mobile on, mobile off, and direct mode. Handover and
     * location update report the new location.
     *
     * The first call-setup note says `tetraLocation` may be used for that TETRA
     * location. The note continues to apply on later records. The component
     * `tetraLocation` inside `Location` is commented as no longer in use and
     * kept for compatibility. The TxGranted table names `TETRACGIType` rather
     * than this component. `TETRACGIType` is not a component of
     * `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.9.2.1, clause
     * D.10.3.
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
     * Originating, terminating, or forwarded-to party, the identities of that
     * party, and the information the party provided. From one to ten parties.
     * Send an address when it first becomes available, including a partial
     * called address in IRI-BEGIN, and send the completed address later.
     *
     * When a forwarded call reaches the target, redirecting-party information
     * is placed with the originating party. When the target forwards, the
     * target's redirecting information is placed with the terminating party,
     * and forwarded-to information, including the forwarding reason, is placed
     * with the forwarded-to party.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.2.3, clause
     * D.10.3.
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
     * CC links set up toward the LEMF. Link 1 is the Tx channel, or the sum
     * signal when mono mode is used. Link 2 is the Rx channel. For a
     * bi-directional circuit call, clause A.4 sets up two one-way delivery
     * calls: one carries CC from the target and one carries CC toward the
     * target. Annex E treats stereo as the default and mono as historic.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1, clause A.3.3, clause
     * D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly callContentLinkInformation: OPTIONAL<Tetra_IRI_Parameters_callContentLinkInformation>;
    /**
     * @summary `release_Reason_Of_Intercepted_Call`.
     * @description
     *
     * Why the intercepted call cannot be established, or why it was released
     * after the active phase. Coded in ITU-T Q.850 format. When the call state
     * is idle, that state uses this value as the reason. A cause received from
     * ISUP or DSS1 is sent with the party that initiated the release, or with
     * either party if the network initiated the release.
     *
     * The call-release table names `callReleaseReason`. That name is not a
     * component of `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.9.2.1.3.1,
     * clause D.10.3.
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
     * Nature of the intercepted call, and which handover interface carries
     * user-to-user data or call content. Clause A.9.2.1.0 requires
     * `tETRA-circuit-call` for the TETRA events defined in that clause. Annex
     * A.9 marks this component mandatory on the call and SDS-related tables
     * that include a call-information row.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.0, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly nature_Of_The_intercepted_call: OPTIONAL<Tetra_IRI_Parameters_nature_Of_The_intercepted_call>;
    /**
     * @summary `serverCenterAddress`.
     * @description
     *
     * Address of a server centre. For SMS, the address of the relevant server,
     * carried with the calling party when the server originates the message and
     * with the called party when the server terminates it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * SMS content and the information associated with that content. Clause
     * B.5.3 maps a GPRS SMS event to an IRI-REPORT and carries the SMS content,
     * including its header, here. Clause A.4.2 allows GSM SMS, exceptionally,
     * to be passed on HI2.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.2, clause B.5.3, clause
     * D.10.3.
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
     * Identifies a CC link when a network option reuses CC links for multiparty
     * calls. That reuse is option B. Option A keeps separate CC links for
     * active and non-active calls and does not use this identifier. It may use
     * the same format as the communication identity number. In that case it
     * need not be sent when the CC link is set up, and the CIN may stand for
     * it. Digits are ASCII, one octet per digit: `12345678` is `0x31` `0x32`
     * `0x33` `0x34` `0x35` `0x36` `0x37` `0x38`. Annex E carries it in the
     * called-party subaddress as 1 to 8 decimal digits.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.1.1, clause A.5.4, annex E,
     * clause D.10.3.
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
     * National extensions. The content is defined by national law. Clauses
     * A.3.2.2 and A.3.3 allow a country or an operator to extend the IRI
     * parameters. The operator is not required to filter IRI.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.10.3.
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
     * Correlation number for GPRS. It is unique per PDP context and correlates
     * CC with IRI, and the IRI records of that PDP context. The SGSN or GGSN
     * provides it to HI2 and HI3. Annex B gives the combination of GGSN address
     * and charging ID as an example.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.1, clause B.5.2.2, clause
     * B.5.3.
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
     * Particular action of the target, such as attach or detach. Clause B.5.3
     * maps each named event to an IRI record type. The module comment refers to
     * 3GPP TS 03.33. This document does not restate that specification.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.10.3.
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
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Reason a PDP context activation failed, or a GPRS attach failed. Values
     * are the GMM cause or the SM cause of 3GPP TS 24.008. This document does
     * not list those causes.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.10.3.
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
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * This parameter is duplicated from 3GPP TS 33.108. The present document
     * states no further coding rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Network identification. Annex A.9 marks it mandatory on every TETRA event
     * table. The module comment says this parameter is duplicated from 3GPP TS
     * 33.108 and states no further coding rule. It is a different component
     * from the network identifier inside `communicationIdentifier`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.10.3.
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
     * This parameter is duplicated from 3GPP TS 33.108. The present document
     * states no further coding rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * This parameter is duplicated from 3GPP TS 33.108. The present document
     * states no further coding rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Imported from `UmtsHI2Operations`, which this module attributes to 3GPP
     * TS 33.108. The present document assigns no behaviour to this component.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * This parameter is duplicated from 3GPP TS 33.108. The present document
     * states no further coding rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * This parameter is duplicated from 3GPP TS 33.108. The present document
     * states no further coding rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Octets are coded according to TS 123 003. The parameter is duplicated
     * from 3GPP TS 33.108. The present document states no further coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Used in TS 101 909-20-1. The present document assigns no further
     * behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Location Dependent Interception parameter, duplicated from 3GPP TS
     * 33.108. The present document states no further coding rule.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * This parameter is duplicated from 3GPP TS 33.108. The present document
     * states no further coding rule for it.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Used in EN 301 040. The present document assigns no further behaviour in
     * this module.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Used in EN 301 040. Annex A.9 uses `targetcommsid` of `CircuitIdType`
     * inside it as the HI3 line identity, which correlates IRI and CC. It is
     * mandatory on originating and terminating call setup, handover, call
     * forward, and call release. The call-release note says the line identity
     * is moc or mtc depending on call type.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.10.3.
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
     * Used in EN 301 040. The present document assigns no further behaviour in
     * this module.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
     * Used in EN 301 040. The present document assigns no further behaviour in
     * this module.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly cTTRAFFICind: OPTIONAL<CTTRAFFICind>;
    /**
     * @summary `tETRA_LI_Event`.
     * @description
     *
     * TETRA event that caused the record. Clause A.9.2.0 assigns each event to
     * a BEGIN, CONTINUE, END, or REPORT record. Each annex A.9 table marks the
     * event mandatory. The behaviour of each value is defined on
     * `TETRA-LI-Event`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.0, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tETRA_LI_Event: OPTIONAL<TETRA_LI_Event>;
    /**
     * @summary `dMO_Indicator`.
     * @description
     *
     * Direct Mode state on a DMO report. Annex A.9.2.1.4.7 requires it. That
     * report tells the LEA that the observed party has entered radio
     * communications which the TETRA switch cannot observe. Each enumeration
     * value is a name only. The specification gives those names no further
     * behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly dMO_Indicator: OPTIONAL<DMO_Indicator>;
    /**
     * @summary `tETRA_PartyInformation`.
     * @description
     *
     * TETRA identity of the target. The type is imported from EN 301 040. Annex
     * A.9 marks it mandatory on every event in clause A.9.2.1. For group
     * indication, observation of an individual subscriber puts the ITSI here
     * and the GTSI in the other party. Observation of a group puts the GTSI
     * here and the ITSI in the other party.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause A.9.2.1.4.4,
     * clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tETRA_PartyInformation: OPTIONAL<TETRAAddressType>;
    /**
     * @summary `tETRA_Other_PartyInformation`.
     * @description
     *
     * TETRA identity of the other party, imported from EN 301 040. Annex A.9
     * requires it on call setup, ringing, queueing, connected, call forward,
     * call hold, call release, and group indication. On TxGranted it is the
     * group identity. The group-indication note swaps ITSI and GTSI with the
     * target identity when the warrant is on a group rather than an individual.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause A.9.2.1.2.7,
     * clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tETRA_Other_PartyInformation: OPTIONAL<TETRAAddressType>;
    /**
     * @summary `txGrantedStatus`.
     * @description
     *
     * Talker status in a group. FALSE means TxCeased. TRUE means TxGranted.
     * Annex A.9.2.1.2.7 requires it on the TxGranted CONTINUE record.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly txGrantedStatus: OPTIONAL<TxGrantedStatus>;
    /**
     * @summary `groupStatus`.
     * @description
     *
     * FALSE when the observed subscriber leaves the group, TRUE when the
     * subscriber joins. Annex A.9.2.1.4.4 sends one REPORT for every such group
     * and requires this value.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.4, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly groupStatus: OPTIONAL<GroupStatus>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @description
     *
     * National HI2 parameters for one country. The country code is the ISO
     * 3166-1 code of the country to which parameters after the extension marker
     * apply. Those parameters should be defined in ASN.1 after the extension
     * marker. The module recommends a version parameter and a vendor
     * identification parameter. Vendor identifications can be retrieved from
     * the IANA web site (annex K). Tags 240 to 255 should be avoided in a
     * formal type definition.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3, annex K.
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
     * Extension additions carried after the extension marker that were not
     * mapped to a named component. The present document does not define their
     * content.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        iRIversion: OPTIONAL<Tetra_IRI_Parameters_iRIversion>,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        communicationIdentifier: CommunicationIdentifier,
        timeStamp: TimeStamp,
        intercepted_Call_Direct?: OPTIONAL<Tetra_IRI_Parameters_intercepted_Call_Direct>,
        intercepted_Call_State?: OPTIONAL<Intercepted_Call_State>,
        ringingDuration?: OPTIONAL<OCTET_STRING>,
        conversationDuration?: OPTIONAL<OCTET_STRING>,
        locationOfTheTarget?: OPTIONAL<Location>,
        partyInformation?: OPTIONAL<PartyInformation[]>,
        callContentLinkInformation?: OPTIONAL<Tetra_IRI_Parameters_callContentLinkInformation>,
        release_Reason_Of_Intercepted_Call?: OPTIONAL<OCTET_STRING>,
        nature_Of_The_intercepted_call?: OPTIONAL<Tetra_IRI_Parameters_nature_Of_The_intercepted_call>,
        serverCenterAddress?: OPTIONAL<PartyInformation>,
        sMS?: OPTIONAL<SMS_report>,
        cC_Link_Identifier?: OPTIONAL<CC_Link_Identifier>,
        national_Parameters?: OPTIONAL<National_Parameters>,
        gPRSCorrelationNumber?: OPTIONAL<GPRSCorrelationNumber>,
        gPRSevent?: OPTIONAL<GPRSEvent>,
        sgsnAddress?: OPTIONAL<DataNodeAddress>,
        gPRSOperationErrorCode?: OPTIONAL<GPRSOperationErrorCode>,
        ggsnAddress?: OPTIONAL<DataNodeAddress>,
        qOS?: OPTIONAL<UmtsQos>,
        networkIdentifier?: OPTIONAL<Network_Identifier>,
        sMSOriginatingAddress?: OPTIONAL<DataNodeAddress>,
        sMSTerminatingAddress?: OPTIONAL<DataNodeAddress>,
        iMSevent?: OPTIONAL<IMSevent>,
        sIPMessage?: OPTIONAL<OCTET_STRING>,
        servingSGSN_number?: OPTIONAL<OCTET_STRING>,
        servingSGSN_address?: OPTIONAL<OCTET_STRING>,
        tARGETACTIVITYMONITOR?: OPTIONAL<TARGETACTIVITYMONITOR_1>,
        ldiEvent?: OPTIONAL<LDIevent>,
        correlation?: OPTIONAL<CorrelationValues>,
        tARGETACTIVITYMONITORind?: OPTIONAL<TARGETACTIVITYMONITORind>,
        tARGETCOMMSMONITORind?: OPTIONAL<TARGETCOMMSMONITORind>,
        tTRAFFICind?: OPTIONAL<TTRAFFICind>,
        cTTRAFFICind?: OPTIONAL<CTTRAFFICind>,
        tETRA_LI_Event?: OPTIONAL<TETRA_LI_Event>,
        dMO_Indicator?: OPTIONAL<DMO_Indicator>,
        tETRA_PartyInformation?: OPTIONAL<TETRAAddressType>,
        tETRA_Other_PartyInformation?: OPTIONAL<TETRAAddressType>,
        txGrantedStatus?: OPTIONAL<TxGrantedStatus>,
        groupStatus?: OPTIONAL<GroupStatus>,
        national_HI2_ASN1parameters?: OPTIONAL<National_HI2_ASN1parameters>,
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
        this.tETRA_LI_Event = tETRA_LI_Event;
        this.dMO_Indicator = dMO_Indicator;
        this.tETRA_PartyInformation = tETRA_PartyInformation;
        this.tETRA_Other_PartyInformation = tETRA_Other_PartyInformation;
        this.txGrantedStatus = txGrantedStatus;
        this.groupStatus = groupStatus;
        this.national_HI2_ASN1parameters = national_HI2_ASN1parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Tetra_IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `Tetra_IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Tetra_IRI_Parameters`.
     * @returns {Tetra_IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (Tetra_IRI_Parameters)]: (Tetra_IRI_Parameters)[_K] }): Tetra_IRI_Parameters {
        return new Tetra_IRI_Parameters(_o.domainID, _o.iRIversion, _o.lawfulInterceptionIdentifier, _o.communicationIdentifier, _o.timeStamp, _o.intercepted_Call_Direct, _o.intercepted_Call_State, _o.ringingDuration, _o.conversationDuration, _o.locationOfTheTarget, _o.partyInformation, _o.callContentLinkInformation, _o.release_Reason_Of_Intercepted_Call, _o.nature_Of_The_intercepted_call, _o.serverCenterAddress, _o.sMS, _o.cC_Link_Identifier, _o.national_Parameters, _o.gPRSCorrelationNumber, _o.gPRSevent, _o.sgsnAddress, _o.gPRSOperationErrorCode, _o.ggsnAddress, _o.qOS, _o.networkIdentifier, _o.sMSOriginatingAddress, _o.sMSTerminatingAddress, _o.iMSevent, _o.sIPMessage, _o.servingSGSN_number, _o.servingSGSN_address, _o.tARGETACTIVITYMONITOR, _o.ldiEvent, _o.correlation, _o.tARGETACTIVITYMONITORind, _o.tARGETCOMMSMONITORind, _o.tTRAFFICind, _o.cTTRAFFICind, _o.tETRA_LI_Event, _o.dMO_Indicator, _o.tETRA_PartyInformation, _o.tETRA_Other_PartyInformation, _o.txGrantedStatus, _o.groupStatus, _o.national_HI2_ASN1parameters, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `iRIversion`
         * @public
         * @static
         */

    public static _enum_for_iRIversion = _enum_for_Tetra_IRI_Parameters_iRIversion;        /**
         * @summary The enum used as the type of the component `intercepted_Call_Direct`
         * @public
         * @static
         */

    public static _enum_for_intercepted_Call_Direct = _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct;        /**
         * @summary The enum used as the type of the component `intercepted_Call_State`
         * @public
         * @static
         */

    public static _enum_for_intercepted_Call_State = _enum_for_Intercepted_Call_State;        /**
         * @summary The enum used as the type of the component `nature_Of_The_intercepted_call`
         * @public
         * @static
         */

    public static _enum_for_nature_Of_The_intercepted_call = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call;        /**
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

    public static _enum_for_ldiEvent = _enum_for_LDIevent;        /**
         * @summary The enum used as the type of the component `tETRA_LI_Event`
         * @public
         * @static
         */

    public static _enum_for_tETRA_LI_Event = _enum_for_TETRA_LI_Event;        /**
         * @summary The enum used as the type of the component `dMO_Indicator`
         * @public
         * @static
         */

    public static _enum_for_dMO_Indicator = _enum_for_DMO_Indicator;
}

/**
 * @summary The Leading Root Component Types of Tetra_IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Tetra_IRI_Parameters: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of Tetra_IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Tetra_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Tetra_IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Tetra_IRI_Parameters: $.ComponentSpec[] = [
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
    new $.ComponentSpec("tETRA-LI-Event", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("dMO-Indicator", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("tETRA-PartyInformation", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("tETRA-Other-PartyInformation", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("txGrantedStatus", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("groupStatus", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("national-HI2-ASN1parameters", true, $.hasTag(_TagClass.context, 255))
];

let _cached_decoder_for_Tetra_IRI_Parameters: $.ASN1Decoder<Tetra_IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tetra_IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tetra_IRI_Parameters (el: _Element): Tetra_IRI_Parameters {
    if (!_cached_decoder_for_Tetra_IRI_Parameters) { _cached_decoder_for_Tetra_IRI_Parameters = function (el: _Element): Tetra_IRI_Parameters {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let iRIversion: OPTIONAL<Tetra_IRI_Parameters_iRIversion>;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let communicationIdentifier!: CommunicationIdentifier;
    let timeStamp!: TimeStamp;
    let intercepted_Call_Direct: OPTIONAL<Tetra_IRI_Parameters_intercepted_Call_Direct>;
    let intercepted_Call_State: OPTIONAL<Intercepted_Call_State>;
    let ringingDuration: OPTIONAL<OCTET_STRING>;
    let conversationDuration: OPTIONAL<OCTET_STRING>;
    let locationOfTheTarget: OPTIONAL<Location>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let callContentLinkInformation: OPTIONAL<Tetra_IRI_Parameters_callContentLinkInformation>;
    let release_Reason_Of_Intercepted_Call: OPTIONAL<OCTET_STRING>;
    let nature_Of_The_intercepted_call: OPTIONAL<Tetra_IRI_Parameters_nature_Of_The_intercepted_call>;
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
    let tETRA_LI_Event: OPTIONAL<TETRA_LI_Event>;
    let dMO_Indicator: OPTIONAL<DMO_Indicator>;
    let tETRA_PartyInformation: OPTIONAL<TETRAAddressType>;
    let tETRA_Other_PartyInformation: OPTIONAL<TETRAAddressType>;
    let txGrantedStatus: OPTIONAL<TxGrantedStatus>;
    let groupStatus: OPTIONAL<GroupStatus>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi2OperationId)) {
                throw new ASN1Error("Tetra_IRI_Parameters.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "iRIversion": (_el: _Element): void => { iRIversion = $._decode_implicit<Tetra_IRI_Parameters_iRIversion>(() => _decode_Tetra_IRI_Parameters_iRIversion)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "intercepted-Call-Direct": (_el: _Element): void => { intercepted_Call_Direct = $._decode_implicit<Tetra_IRI_Parameters_intercepted_Call_Direct>(() => _decode_Tetra_IRI_Parameters_intercepted_Call_Direct)(_el); },
        "intercepted-Call-State": (_el: _Element): void => { intercepted_Call_State = $._decode_implicit<Intercepted_Call_State>(() => _decode_Intercepted_Call_State)(_el); },
        "ringingDuration": (_el: _Element): void => {
            ringingDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (ringingDuration.length < 3 || ringingDuration.length > 3) {
                throw new ASN1SizeError("Tetra_IRI_Parameters.ringingDuration violates SIZE constraint");
            }
        },
        "conversationDuration": (_el: _Element): void => {
            conversationDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (conversationDuration.length < 3 || conversationDuration.length > 3) {
                throw new ASN1SizeError("Tetra_IRI_Parameters.conversationDuration violates SIZE constraint");
            }
        },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => {
            partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el);
            if (partyInformation.length < 1 || partyInformation.length > 10) {
                throw new ASN1SizeError("Tetra_IRI_Parameters.partyInformation violates SIZE constraint");
            }
        },
        "callContentLinkInformation": (_el: _Element): void => { callContentLinkInformation = $._decode_implicit<Tetra_IRI_Parameters_callContentLinkInformation>(() => _decode_Tetra_IRI_Parameters_callContentLinkInformation)(_el); },
        "release-Reason-Of-Intercepted-Call": (_el: _Element): void => {
            release_Reason_Of_Intercepted_Call = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (release_Reason_Of_Intercepted_Call.length < 2 || release_Reason_Of_Intercepted_Call.length > 2) {
                throw new ASN1SizeError("Tetra_IRI_Parameters.release_Reason_Of_Intercepted_Call violates SIZE constraint");
            }
        },
        "nature-Of-The-intercepted-call": (_el: _Element): void => { nature_Of_The_intercepted_call = $._decode_implicit<Tetra_IRI_Parameters_nature_Of_The_intercepted_call>(() => _decode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call)(_el); },
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
                throw new ASN1SizeError("Tetra_IRI_Parameters.servingSGSN_number violates SIZE constraint");
            }
        },
        "servingSGSN-address": (_el: _Element): void => {
            servingSGSN_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (servingSGSN_address.length < 5 || servingSGSN_address.length > 17) {
                throw new ASN1SizeError("Tetra_IRI_Parameters.servingSGSN_address violates SIZE constraint");
            }
        },
        "tARGETACTIVITYMONITOR": (_el: _Element): void => { tARGETACTIVITYMONITOR = $._decode_implicit<TARGETACTIVITYMONITOR_1>(() => _decode_TARGETACTIVITYMONITOR_1)(_el); },
        "ldiEvent": (_el: _Element): void => { ldiEvent = $._decode_implicit<LDIevent>(() => _decode_LDIevent)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_explicit<CorrelationValues>(() => _decode_CorrelationValues)(_el); },
        "tARGETACTIVITYMONITORind": (_el: _Element): void => { tARGETACTIVITYMONITORind = $._decode_implicit<TARGETACTIVITYMONITORind>(() => _decode_TARGETACTIVITYMONITORind)(_el); },
        "tARGETCOMMSMONITORind": (_el: _Element): void => { tARGETCOMMSMONITORind = $._decode_implicit<TARGETCOMMSMONITORind>(() => _decode_TARGETCOMMSMONITORind)(_el); },
        "tTRAFFICind": (_el: _Element): void => { tTRAFFICind = $._decode_implicit<TTRAFFICind>(() => _decode_TTRAFFICind)(_el); },
        "cTTRAFFICind": (_el: _Element): void => { cTTRAFFICind = $._decode_implicit<CTTRAFFICind>(() => _decode_CTTRAFFICind)(_el); },
        "tETRA-LI-Event": (_el: _Element): void => { tETRA_LI_Event = $._decode_implicit<TETRA_LI_Event>(() => _decode_TETRA_LI_Event)(_el); },
        "dMO-Indicator": (_el: _Element): void => { dMO_Indicator = $._decode_implicit<DMO_Indicator>(() => _decode_DMO_Indicator)(_el); },
        "tETRA-PartyInformation": (_el: _Element): void => { tETRA_PartyInformation = $._decode_explicit<TETRAAddressType>(() => _decode_TETRAAddressType)(_el); },
        "tETRA-Other-PartyInformation": (_el: _Element): void => { tETRA_Other_PartyInformation = $._decode_explicit<TETRAAddressType>(() => _decode_TETRAAddressType)(_el); },
        "txGrantedStatus": (_el: _Element): void => { txGrantedStatus = $._decode_implicit<TxGrantedStatus>(() => _decode_TxGrantedStatus)(_el); },
        "groupStatus": (_el: _Element): void => { groupStatus = $._decode_implicit<GroupStatus>(() => _decode_GroupStatus)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Tetra_IRI_Parameters,
        _extension_additions_list_spec_for_Tetra_IRI_Parameters,
        _root_component_type_list_2_spec_for_Tetra_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Tetra_IRI_Parameters(
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
        tETRA_LI_Event,
        dMO_Indicator,
        tETRA_PartyInformation,
        tETRA_Other_PartyInformation,
        txGrantedStatus,
        groupStatus,
        national_HI2_ASN1parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Tetra_IRI_Parameters(el);
}

let _cached_encoder_for_Tetra_IRI_Parameters: $.ASN1Encoder<Tetra_IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) Tetra_IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tetra_IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_Tetra_IRI_Parameters (value: Tetra_IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tetra_IRI_Parameters) { _cached_encoder_for_Tetra_IRI_Parameters = function (value: Tetra_IRI_Parameters, elGetter: $.ASN1Encoder<Tetra_IRI_Parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(45 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    if (value.iRIversion !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_Tetra_IRI_Parameters_iRIversion, $.BER)(value.iRIversion, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.intercepted_Call_Direct !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Tetra_IRI_Parameters_intercepted_Call_Direct, $.BER)(value.intercepted_Call_Direct, $.BER);
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
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Tetra_IRI_Parameters_callContentLinkInformation, $.BER)(value.callContentLinkInformation, $.BER);
    }
    if (value.release_Reason_Of_Intercepted_Call !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.release_Reason_Of_Intercepted_Call, $.BER);
    }
    if (value.nature_Of_The_intercepted_call !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call, $.BER)(value.nature_Of_The_intercepted_call, $.BER);
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
    if (value.tETRA_LI_Event !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_TETRA_LI_Event, $.BER)(value.tETRA_LI_Event, $.BER);
    }
    if (value.dMO_Indicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_DMO_Indicator, $.BER)(value.dMO_Indicator, $.BER);
    }
    if (value.tETRA_PartyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 42, () => _encode_TETRAAddressType, $.BER)(value.tETRA_PartyInformation, $.BER);
    }
    if (value.tETRA_Other_PartyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_TETRAAddressType, $.BER)(value.tETRA_Other_PartyInformation, $.BER);
    }
    if (value.txGrantedStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => _encode_TxGrantedStatus, $.BER)(value.txGrantedStatus, $.BER);
    }
    if (value.groupStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => _encode_GroupStatus, $.BER)(value.groupStatus, $.BER);
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
    return _cached_encoder_for_Tetra_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
