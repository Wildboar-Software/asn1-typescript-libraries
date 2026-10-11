/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
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
     * @public
     * @readonly
     */
    readonly hi2CSDomainId: OBJECT_IDENTIFIER;
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
     * @summary `serviceCenterAddress`.
     * @public
     * @readonly
     */
    readonly serviceCenterAddress: OPTIONAL<PartyInformation>;
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
     * @summary `umts_Cs_Event`.
     * @public
     * @readonly
     */
    readonly umts_Cs_Event: OPTIONAL<Umts_Cs_Event>;
    /**
     * @summary `serving_System_Identifier`.
     * @public
     * @readonly
     */
    readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `carrierSpecificData`.
     * @public
     * @readonly
     */
    readonly carrierSpecificData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Previous_Systems`.
     * @public
     * @readonly
     */
    readonly current_Previous_Systems: OPTIONAL<Current_Previous_Systems>;
    /**
     * @summary `change_Of_Target_Identity`.
     * @public
     * @readonly
     */
    readonly change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    /**
     * @summary `requesting_Network_Identifier`.
     * @public
     * @readonly
     */
    readonly requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requesting_Node_Type`.
     * @public
     * @readonly
     */
    readonly requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    /**
     * @summary `extendedLocParameters`.
     * @public
     * @readonly
     */
    readonly extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    /**
     * @summary `locationErrorCode`.
     * @public
     * @readonly
     */
    readonly locationErrorCode: OPTIONAL<LocationErrorCode>;
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
        hi2CSDomainId: OBJECT_IDENTIFIER,
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
        serviceCenterAddress: OPTIONAL<PartyInformation>,
        sMS: OPTIONAL<SMS_report>,
        cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>,
        national_Parameters: OPTIONAL<National_Parameters>,
        umts_Cs_Event: OPTIONAL<Umts_Cs_Event>,
        serving_System_Identifier: OPTIONAL<OCTET_STRING>,
        carrierSpecificData: OPTIONAL<OCTET_STRING>,
        current_Previous_Systems: OPTIONAL<Current_Previous_Systems>,
        change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>,
        requesting_Network_Identifier: OPTIONAL<OCTET_STRING>,
        requesting_Node_Type: OPTIONAL<Requesting_Node_Type>,
        extendedLocParameters: OPTIONAL<ExtendedLocParameters>,
        locationErrorCode: OPTIONAL<LocationErrorCode>,
        national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>,
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
        if (this.ringingDuration !== undefined && (this.ringingDuration.length < 3 || this.ringingDuration.length > 3)) {
            throw new ASN1SizeError("ringingDuration violates the SIZE constraint");
        }
        this.conversationDuration = conversationDuration;
        if (this.conversationDuration !== undefined && (this.conversationDuration.length < 3 || this.conversationDuration.length > 3)) {
            throw new ASN1SizeError("conversationDuration violates the SIZE constraint");
        }
        this.locationOfTheTarget = locationOfTheTarget;
        this.partyInformation = partyInformation;
        if (this.partyInformation !== undefined && (this.partyInformation.length < 1 || this.partyInformation.length > 10)) {
            throw new ASN1SizeError("partyInformation violates the SIZE constraint");
        }
        this.callContentLinkInformation = callContentLinkInformation;
        this.release_Reason_Of_Intercepted_Call = release_Reason_Of_Intercepted_Call;
        if (this.release_Reason_Of_Intercepted_Call !== undefined && (this.release_Reason_Of_Intercepted_Call.length < 2 || this.release_Reason_Of_Intercepted_Call.length > 2)) {
            throw new ASN1SizeError("release_Reason_Of_Intercepted_Call violates the SIZE constraint");
        }
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
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2CSDomainId": (_el: _Element): void => { hi2CSDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "iRIversion": (_el: _Element): void => { iRIversion = $._decode_implicit<IRI_Parameters_iRIversion>(() => _decode_IRI_Parameters_iRIversion)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "intercepted-Call-Direct": (_el: _Element): void => { intercepted_Call_Direct = $._decode_implicit<IRI_Parameters_intercepted_Call_Direct>(() => _decode_IRI_Parameters_intercepted_Call_Direct)(_el); },
        "intercepted-Call-State": (_el: _Element): void => { intercepted_Call_State = $._decode_implicit<Intercepted_Call_State>(() => _decode_Intercepted_Call_State)(_el); },
        "ringingDuration": (_el: _Element): void => { ringingDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "conversationDuration": (_el: _Element): void => { conversationDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => { partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el); },
        "callContentLinkInformation": (_el: _Element): void => { callContentLinkInformation = $._decode_implicit<IRI_Parameters_callContentLinkInformation>(() => _decode_IRI_Parameters_callContentLinkInformation)(_el); },
        "release-Reason-Of-Intercepted-Call": (_el: _Element): void => { release_Reason_Of_Intercepted_Call = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, _elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
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
