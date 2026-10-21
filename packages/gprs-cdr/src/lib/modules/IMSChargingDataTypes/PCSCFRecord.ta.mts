/* eslint-disable */
import {
    GraphicString,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../IMSChargingDataTypes/RecordType.ta.mjs";
import { Role_of_Node, _decode_Role_of_Node, _encode_Role_of_Node, _enum_for_Role_of_Node } from "../IMSChargingDataTypes/Role-of-Node.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../IMSChargingDataTypes/NodeAddress.ta.mjs";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../IMSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
import { CauseForRecordClosing, _decode_CauseForRecordClosing, _encode_CauseForRecordClosing, _enum_for_CauseForRecordClosing } from "../IMSChargingDataTypes/CauseForRecordClosing.ta.mjs";
import { Incomplete_CDR_Indication, _decode_Incomplete_CDR_Indication, _encode_Incomplete_CDR_Indication } from "../IMSChargingDataTypes/Incomplete-CDR-Indication.ta.mjs";
import { Media_Components_List, _decode_Media_Components_List, _encode_Media_Components_List } from "../IMSChargingDataTypes/Media-Components-List.ta.mjs";
import { MessageBody, _decode_MessageBody, _encode_MessageBody } from "../IMSChargingDataTypes/MessageBody.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../IMSChargingDataTypes/ManagementExtension.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../IMSChargingDataTypes/SubscriptionID.ta.mjs";
import { Early_Media_Components_List, _decode_Early_Media_Components_List, _encode_Early_Media_Components_List } from "../IMSChargingDataTypes/Early-Media-Components-List.ta.mjs";
import { SessionPriority, _decode_SessionPriority, _encode_SessionPriority, _enum_for_SessionPriority } from "../IMSChargingDataTypes/SessionPriority.ta.mjs";
import { NNI_Information, _decode_NNI_Information, _encode_NNI_Information } from "../IMSChargingDataTypes/NNI-Information.ta.mjs";
import { ServedPartyIPAddress, _decode_ServedPartyIPAddress, _encode_ServedPartyIPAddress } from "../IMSChargingDataTypes/ServedPartyIPAddress.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../IMSChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";
import { AccessNetworkInfoChange, _decode_AccessNetworkInfoChange, _encode_AccessNetworkInfoChange } from "../IMSChargingDataTypes/AccessNetworkInfoChange.ta.mjs";
import { CalledIdentityChange, _decode_CalledIdentityChange, _encode_CalledIdentityChange } from "../IMSChargingDataTypes/CalledIdentityChange.ta.mjs";
import { AccessTransferInformation, _decode_AccessTransferInformation, _encode_AccessTransferInformation } from "../IMSChargingDataTypes/AccessTransferInformation.ta.mjs";


/**
 * @summary PCSCFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCSCFRecord ::= SET {
 *    recordType                              [0] IMPLICIT RecordType,
 *    retransmission                          [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                              [2] IMPLICIT GraphicString OPTIONAL,
 *    role-of-Node                            [3] IMPLICIT Role-of-Node OPTIONAL,
 *    nodeAddress                             [4] NodeAddress OPTIONAL,
 *    session-Id                              [5] IMPLICIT GraphicString OPTIONAL,
 *    list-Of-Calling-Party-Address           [6] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    called-Party-Address                    [7] InvolvedParty OPTIONAL,
 *    privateUserID                           [8] IMPLICIT GraphicString OPTIONAL,
 *    serviceRequestTimeStamp                 [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryStartTimeStamp           [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryEndTimeStamp             [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordOpeningTime                       [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime                       [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    interOperatorIdentifiers                [14] IMPLICIT InterOperatorIdentifiers OPTIONAL,
 *    localRecordSequenceNumber               [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordSequenceNumber                    [16] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecordClosing                   [17] IMPLICIT CauseForRecordClosing OPTIONAL,
 *    incomplete-CDR-Indication               [18] IMPLICIT Incomplete-CDR-Indication OPTIONAL,
 *    iMS-Charging-Identifier                 [19] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-SDP-Media-Components            [21] IMPLICIT SEQUENCE  OF
 *       Media-Components-List OPTIONAL,
 *    gGSNaddress                             [22] NodeAddress OPTIONAL,
 *    serviceReasonReturnCode                 [23] IMPLICIT UTF8String OPTIONAL,
 *    list-Of-Message-Bodies                  [24] IMPLICIT SEQUENCE  OF
 *       MessageBody OPTIONAL,
 *    recordExtensions                        [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    expiresInformation                      [26] IMPLICIT INTEGER OPTIONAL,
 *    list-Of-Associated-URI                  [27] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    event                                   [28] IMPLICIT UTF8String OPTIONAL,
 *    accessNetworkInformation                [29] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceContextID                        [30] IMPLICIT UTF8String OPTIONAL,
 *    list-of-subscription-ID                 [31] IMPLICIT SEQUENCE  OF
 *       SubscriptionID OPTIONAL,
 *    list-Of-Early-SDP-Media-Components      [32] IMPLICIT SEQUENCE  OF
 *       Early-Media-Components-List OPTIONAL,
 *    iMSCommunicationServiceIdentifier       [33] IMPLICIT OCTET STRING OPTIONAL,
 *    sessionPriority                         [36] IMPLICIT SessionPriority OPTIONAL,
 *    serviceRequestTimeStampFraction         [37] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryStartTimeStampFraction   [38] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryEndTimeStampFraction     [39] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    list-of-Requested-Party-Address         [41] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    list-Of-Called-Asserted-Identity        [42] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    nNI-Information                         [46] IMPLICIT NNI-Information OPTIONAL,
 *    userLocationInformation                 [47] IMPLICIT OCTET STRING OPTIONAL,
 *    mSTimeZone                              [48] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPartyIPAddress                    [50] ServedPartyIPAddress OPTIONAL,
 *    fromAddress                             [51] IMPLICIT OCTET STRING OPTIONAL,
 *    iMSEmergencyIndicator                   [52] IMPLICIT NULL OPTIONAL,
 *    transit-IOI-Lists                       [53] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    iMSVisitedNetworkIdentifier             [54] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfReasonHeader                      [55] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    additionalAccessNetworkInformation      [56] IMPLICIT OCTET STRING OPTIONAL,
 *    instanceId                              [57] IMPLICIT OCTET STRING OPTIONAL,
 *    subscriberEquipmentNumber               [58] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    routeHeaderReceived                     [59] IMPLICIT OCTET STRING OPTIONAL,
 *    routeHeaderTransmitted                  [60] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-AccessNetworkInfoChange         [62] IMPLICIT SEQUENCE  OF
 *       AccessNetworkInfoChange OPTIONAL,
 *    listOfCalledIdentityChanges             [63] IMPLICIT SEQUENCE  OF
 *       CalledIdentityChange OPTIONAL,
 *    cellularNetworkInformation              [64] IMPLICIT OCTET STRING OPTIONAL,
 *    initialIMS-Charging-Identifier          [105] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-AccessTransferInformation       [106] IMPLICIT SEQUENCE  OF
 *       AccessTransferInformation OPTIONAL,
 *    relatedICID                             [107] IMPLICIT OCTET STRING OPTIONAL,
 *    relatedICIDGenerationNode               [108] NodeAddress OPTIONAL,
 *    fEIdentifierList                        [109] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PCSCFRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `sIP_Method`.
     * @public
     * @readonly
     */
    readonly sIP_Method: OPTIONAL<GraphicString>;
    /**
     * @summary `role_of_Node`.
     * @public
     * @readonly
     */
    readonly role_of_Node: OPTIONAL<Role_of_Node>;
    /**
     * @summary `nodeAddress`.
     * @public
     * @readonly
     */
    readonly nodeAddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `session_Id`.
     * @public
     * @readonly
     */
    readonly session_Id: OPTIONAL<GraphicString>;
    /**
     * @summary `list_Of_Calling_Party_Address`.
     * @public
     * @readonly
     */
    readonly list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `called_Party_Address`.
     * @public
     * @readonly
     */
    readonly called_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `privateUserID`.
     * @public
     * @readonly
     */
    readonly privateUserID: OPTIONAL<GraphicString>;
    /**
     * @summary `serviceRequestTimeStamp`.
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceDeliveryStartTimeStamp`.
     * @public
     * @readonly
     */
    readonly serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceDeliveryEndTimeStamp`.
     * @public
     * @readonly
     */
    readonly serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordOpeningTime`.
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordClosureTime`.
     * @public
     * @readonly
     */
    readonly recordClosureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `interOperatorIdentifiers`.
     * @public
     * @readonly
     */
    readonly interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForRecordClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    /**
     * @summary `incomplete_CDR_Indication`.
     * @public
     * @readonly
     */
    readonly incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_SDP_Media_Components`.
     * @public
     * @readonly
     */
    readonly list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>;
    /**
     * @summary `gGSNaddress`.
     * @public
     * @readonly
     */
    readonly gGSNaddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `serviceReasonReturnCode`.
     * @public
     * @readonly
     */
    readonly serviceReasonReturnCode: OPTIONAL<UTF8String>;
    /**
     * @summary `list_Of_Message_Bodies`.
     * @public
     * @readonly
     */
    readonly list_Of_Message_Bodies: OPTIONAL<MessageBody[]>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `expiresInformation`.
     * @public
     * @readonly
     */
    readonly expiresInformation: OPTIONAL<INTEGER>;
    /**
     * @summary `list_Of_Associated_URI`.
     * @public
     * @readonly
     */
    readonly list_Of_Associated_URI: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `event`.
     * @public
     * @readonly
     */
    readonly event: OPTIONAL<UTF8String>;
    /**
     * @summary `accessNetworkInformation`.
     * @public
     * @readonly
     */
    readonly accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `list_of_subscription_ID`.
     * @public
     * @readonly
     */
    readonly list_of_subscription_ID: OPTIONAL<SubscriptionID[]>;
    /**
     * @summary `list_Of_Early_SDP_Media_Components`.
     * @public
     * @readonly
     */
    readonly list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>;
    /**
     * @summary `iMSCommunicationServiceIdentifier`.
     * @public
     * @readonly
     */
    readonly iMSCommunicationServiceIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sessionPriority`.
     * @public
     * @readonly
     */
    readonly sessionPriority: OPTIONAL<SessionPriority>;
    /**
     * @summary `serviceRequestTimeStampFraction`.
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceDeliveryStartTimeStampFraction`.
     * @public
     * @readonly
     */
    readonly serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceDeliveryEndTimeStampFraction`.
     * @public
     * @readonly
     */
    readonly serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `list_of_Requested_Party_Address`.
     * @public
     * @readonly
     */
    readonly list_of_Requested_Party_Address: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `list_Of_Called_Asserted_Identity`.
     * @public
     * @readonly
     */
    readonly list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `nNI_Information`.
     * @public
     * @readonly
     */
    readonly nNI_Information: OPTIONAL<NNI_Information>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mSTimeZone`.
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPartyIPAddress`.
     * @public
     * @readonly
     */
    readonly servedPartyIPAddress: OPTIONAL<ServedPartyIPAddress>;
    /**
     * @summary `fromAddress`.
     * @public
     * @readonly
     */
    readonly fromAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMSEmergencyIndicator`.
     * @public
     * @readonly
     */
    readonly iMSEmergencyIndicator: OPTIONAL<NULL>;
    /**
     * @summary `transit_IOI_Lists`.
     * @public
     * @readonly
     */
    readonly transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    /**
     * @summary `iMSVisitedNetworkIdentifier`.
     * @public
     * @readonly
     */
    readonly iMSVisitedNetworkIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfReasonHeader`.
     * @public
     * @readonly
     */
    readonly listOfReasonHeader: OPTIONAL<GraphicString[]>;
    /**
     * @summary `additionalAccessNetworkInformation`.
     * @public
     * @readonly
     */
    readonly additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `instanceId`.
     * @public
     * @readonly
     */
    readonly instanceId: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `subscriberEquipmentNumber`.
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    /**
     * @summary `routeHeaderReceived`.
     * @public
     * @readonly
     */
    readonly routeHeaderReceived: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routeHeaderTransmitted`.
     * @public
     * @readonly
     */
    readonly routeHeaderTransmitted: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_AccessNetworkInfoChange`.
     * @public
     * @readonly
     */
    readonly list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    /**
     * @summary `listOfCalledIdentityChanges`.
     * @public
     * @readonly
     */
    readonly listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>;
    /**
     * @summary `cellularNetworkInformation`.
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `initialIMS_Charging_Identifier`.
     * @public
     * @readonly
     */
    readonly initialIMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_AccessTransferInformation`.
     * @public
     * @readonly
     */
    readonly list_Of_AccessTransferInformation: OPTIONAL<AccessTransferInformation[]>;
    /**
     * @summary `relatedICID`.
     * @public
     * @readonly
     */
    readonly relatedICID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `relatedICIDGenerationNode`.
     * @public
     * @readonly
     */
    readonly relatedICIDGenerationNode: OPTIONAL<NodeAddress>;
    /**
     * @summary `fEIdentifierList`.
     * @public
     * @readonly
     */
    readonly fEIdentifierList: OPTIONAL<GraphicString[]>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        sIP_Method: OPTIONAL<GraphicString>,
        role_of_Node: OPTIONAL<Role_of_Node>,
        nodeAddress: OPTIONAL<NodeAddress>,
        session_Id: OPTIONAL<GraphicString>,
        list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>,
        called_Party_Address: OPTIONAL<InvolvedParty>,
        privateUserID: OPTIONAL<GraphicString>,
        serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>,
        serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>,
        serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        causeForRecordClosing: OPTIONAL<CauseForRecordClosing>,
        incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>,
        iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>,
        gGSNaddress: OPTIONAL<NodeAddress>,
        serviceReasonReturnCode: OPTIONAL<UTF8String>,
        list_Of_Message_Bodies: OPTIONAL<MessageBody[]>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        expiresInformation: OPTIONAL<INTEGER>,
        list_Of_Associated_URI: OPTIONAL<InvolvedParty[]>,
        event: OPTIONAL<UTF8String>,
        accessNetworkInformation: OPTIONAL<OCTET_STRING>,
        serviceContextID: OPTIONAL<UTF8String>,
        list_of_subscription_ID: OPTIONAL<SubscriptionID[]>,
        list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>,
        iMSCommunicationServiceIdentifier: OPTIONAL<OCTET_STRING>,
        sessionPriority: OPTIONAL<SessionPriority>,
        serviceRequestTimeStampFraction: OPTIONAL<INTEGER>,
        serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>,
        serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>,
        list_of_Requested_Party_Address: OPTIONAL<InvolvedParty[]>,
        list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>,
        nNI_Information: OPTIONAL<NNI_Information>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        servedPartyIPAddress: OPTIONAL<ServedPartyIPAddress>,
        fromAddress: OPTIONAL<OCTET_STRING>,
        iMSEmergencyIndicator: OPTIONAL<NULL>,
        transit_IOI_Lists: OPTIONAL<GraphicString[]>,
        iMSVisitedNetworkIdentifier: OPTIONAL<OCTET_STRING>,
        listOfReasonHeader: OPTIONAL<GraphicString[]>,
        additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>,
        instanceId: OPTIONAL<OCTET_STRING>,
        subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>,
        routeHeaderReceived: OPTIONAL<OCTET_STRING>,
        routeHeaderTransmitted: OPTIONAL<OCTET_STRING>,
        list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>,
        listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>,
        cellularNetworkInformation: OPTIONAL<OCTET_STRING>,
        initialIMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        list_Of_AccessTransferInformation: OPTIONAL<AccessTransferInformation[]>,
        relatedICID: OPTIONAL<OCTET_STRING>,
        relatedICIDGenerationNode: OPTIONAL<NodeAddress>,
        fEIdentifierList: OPTIONAL<GraphicString[]>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.sIP_Method = sIP_Method;
        this.role_of_Node = role_of_Node;
        this.nodeAddress = nodeAddress;
        this.session_Id = session_Id;
        this.list_Of_Calling_Party_Address = list_Of_Calling_Party_Address;
        this.called_Party_Address = called_Party_Address;
        this.privateUserID = privateUserID;
        this.serviceRequestTimeStamp = serviceRequestTimeStamp;
        this.serviceDeliveryStartTimeStamp = serviceDeliveryStartTimeStamp;
        this.serviceDeliveryEndTimeStamp = serviceDeliveryEndTimeStamp;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.interOperatorIdentifiers = interOperatorIdentifiers;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordSequenceNumber = recordSequenceNumber;
        this.causeForRecordClosing = causeForRecordClosing;
        this.incomplete_CDR_Indication = incomplete_CDR_Indication;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.list_Of_SDP_Media_Components = list_Of_SDP_Media_Components;
        this.gGSNaddress = gGSNaddress;
        this.serviceReasonReturnCode = serviceReasonReturnCode;
        this.list_Of_Message_Bodies = list_Of_Message_Bodies;
        this.recordExtensions = recordExtensions;
        this.expiresInformation = expiresInformation;
        this.list_Of_Associated_URI = list_Of_Associated_URI;
        this.event = event;
        this.accessNetworkInformation = accessNetworkInformation;
        this.serviceContextID = serviceContextID;
        this.list_of_subscription_ID = list_of_subscription_ID;
        this.list_Of_Early_SDP_Media_Components = list_Of_Early_SDP_Media_Components;
        this.iMSCommunicationServiceIdentifier = iMSCommunicationServiceIdentifier;
        this.sessionPriority = sessionPriority;
        this.serviceRequestTimeStampFraction = serviceRequestTimeStampFraction;
        this.serviceDeliveryStartTimeStampFraction = serviceDeliveryStartTimeStampFraction;
        this.serviceDeliveryEndTimeStampFraction = serviceDeliveryEndTimeStampFraction;
        this.list_of_Requested_Party_Address = list_of_Requested_Party_Address;
        this.list_Of_Called_Asserted_Identity = list_Of_Called_Asserted_Identity;
        this.nNI_Information = nNI_Information;
        this.userLocationInformation = userLocationInformation;
        this.mSTimeZone = mSTimeZone;
        this.servedPartyIPAddress = servedPartyIPAddress;
        this.fromAddress = fromAddress;
        this.iMSEmergencyIndicator = iMSEmergencyIndicator;
        this.transit_IOI_Lists = transit_IOI_Lists;
        this.iMSVisitedNetworkIdentifier = iMSVisitedNetworkIdentifier;
        this.listOfReasonHeader = listOfReasonHeader;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.instanceId = instanceId;
        this.subscriberEquipmentNumber = subscriberEquipmentNumber;
        this.routeHeaderReceived = routeHeaderReceived;
        this.routeHeaderTransmitted = routeHeaderTransmitted;
        this.list_Of_AccessNetworkInfoChange = list_Of_AccessNetworkInfoChange;
        this.listOfCalledIdentityChanges = listOfCalledIdentityChanges;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.initialIMS_Charging_Identifier = initialIMS_Charging_Identifier;
        this.list_Of_AccessTransferInformation = list_Of_AccessTransferInformation;
        this.relatedICID = relatedICID;
        this.relatedICIDGenerationNode = relatedICIDGenerationNode;
        this.fEIdentifierList = fEIdentifierList;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("PCSCFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("PCSCFRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("PCSCFRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PCSCFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("PCSCFRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("PCSCFRecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.serviceRequestTimeStampFraction !== undefined && (this.serviceRequestTimeStampFraction < 0 || this.serviceRequestTimeStampFraction > 999)) {
            throw new ASN1OverflowError("PCSCFRecord.serviceRequestTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryStartTimeStampFraction !== undefined && (this.serviceDeliveryStartTimeStampFraction < 0 || this.serviceDeliveryStartTimeStampFraction > 999)) {
            throw new ASN1OverflowError("PCSCFRecord.serviceDeliveryStartTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryEndTimeStampFraction !== undefined && (this.serviceDeliveryEndTimeStampFraction < 0 || this.serviceDeliveryEndTimeStampFraction > 999)) {
            throw new ASN1OverflowError("PCSCFRecord.serviceDeliveryEndTimeStampFraction violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("PCSCFRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PCSCFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PCSCFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PCSCFRecord`.
     * @returns {PCSCFRecord}
     */
    public static _from_object (_o: { [_K in keyof (PCSCFRecord)]: (PCSCFRecord)[_K] }): PCSCFRecord {
        return new PCSCFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.role_of_Node, _o.nodeAddress, _o.session_Id, _o.list_Of_Calling_Party_Address, _o.called_Party_Address, _o.privateUserID, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.list_Of_SDP_Media_Components, _o.gGSNaddress, _o.serviceReasonReturnCode, _o.list_Of_Message_Bodies, _o.recordExtensions, _o.expiresInformation, _o.list_Of_Associated_URI, _o.event, _o.accessNetworkInformation, _o.serviceContextID, _o.list_of_subscription_ID, _o.list_Of_Early_SDP_Media_Components, _o.iMSCommunicationServiceIdentifier, _o.sessionPriority, _o.serviceRequestTimeStampFraction, _o.serviceDeliveryStartTimeStampFraction, _o.serviceDeliveryEndTimeStampFraction, _o.list_of_Requested_Party_Address, _o.list_Of_Called_Asserted_Identity, _o.nNI_Information, _o.userLocationInformation, _o.mSTimeZone, _o.servedPartyIPAddress, _o.fromAddress, _o.iMSEmergencyIndicator, _o.transit_IOI_Lists, _o.iMSVisitedNetworkIdentifier, _o.listOfReasonHeader, _o.additionalAccessNetworkInformation, _o.instanceId, _o.subscriberEquipmentNumber, _o.routeHeaderReceived, _o.routeHeaderTransmitted, _o.list_Of_AccessNetworkInfoChange, _o.listOfCalledIdentityChanges, _o.cellularNetworkInformation, _o.initialIMS_Charging_Identifier, _o.list_Of_AccessTransferInformation, _o.relatedICID, _o.relatedICIDGenerationNode, _o.fEIdentifierList);
    }

        /**
         * @summary The enum used as the type of the component `role_of_Node`
         * @public
         * @static
         */

    public static _enum_for_role_of_Node = _enum_for_Role_of_Node;        /**
         * @summary The enum used as the type of the component `causeForRecordClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecordClosing = _enum_for_CauseForRecordClosing;        /**
         * @summary The enum used as the type of the component `sessionPriority`
         * @public
         * @static
         */

    public static _enum_for_sessionPriority = _enum_for_SessionPriority;
}

/**
 * @summary The Leading Root Component Types of PCSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PCSCFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("role-of-Node", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("list-Of-Calling-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("privateUserID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("serviceRequestTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceDeliveryStartTimeStamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("serviceDeliveryEndTimeStamp", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("interOperatorIdentifiers", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("causeForRecordClosing", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("incomplete-CDR-Indication", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("list-Of-SDP-Media-Components", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("gGSNaddress", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("list-Of-Message-Bodies", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("expiresInformation", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("list-Of-Associated-URI", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("event", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("list-of-subscription-ID", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("list-Of-Early-SDP-Media-Components", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("iMSCommunicationServiceIdentifier", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("sessionPriority", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceRequestTimeStampFraction", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("serviceDeliveryStartTimeStampFraction", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("serviceDeliveryEndTimeStampFraction", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("list-of-Requested-Party-Address", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("list-Of-Called-Asserted-Identity", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("nNI-Information", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("servedPartyIPAddress", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("fromAddress", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("iMSEmergencyIndicator", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("transit-IOI-Lists", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("iMSVisitedNetworkIdentifier", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("listOfReasonHeader", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("instanceId", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("subscriberEquipmentNumber", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("routeHeaderReceived", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("routeHeaderTransmitted", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("list-Of-AccessNetworkInfoChange", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("listOfCalledIdentityChanges", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("initialIMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 105)),
    new $.ComponentSpec("list-Of-AccessTransferInformation", true, $.hasTag(_TagClass.context, 106)),
    new $.ComponentSpec("relatedICID", true, $.hasTag(_TagClass.context, 107)),
    new $.ComponentSpec("relatedICIDGenerationNode", true, $.hasTag(_TagClass.context, 108)),
    new $.ComponentSpec("fEIdentifierList", true, $.hasTag(_TagClass.context, 109))
];

/**
 * @summary The Trailing Root Component Types of PCSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PCSCFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PCSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PCSCFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PCSCFRecord: $.ASN1Decoder<PCSCFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PCSCFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PCSCFRecord (el: _Element): PCSCFRecord {
    if (!_cached_decoder_for_PCSCFRecord) { _cached_decoder_for_PCSCFRecord = function (el: _Element): PCSCFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let sIP_Method: OPTIONAL<GraphicString>;
    let role_of_Node: OPTIONAL<Role_of_Node>;
    let nodeAddress: OPTIONAL<NodeAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>;
    let called_Party_Address: OPTIONAL<InvolvedParty>;
    let privateUserID: OPTIONAL<GraphicString>;
    let serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    let incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>;
    let gGSNaddress: OPTIONAL<NodeAddress>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let list_Of_Message_Bodies: OPTIONAL<MessageBody[]>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let expiresInformation: OPTIONAL<INTEGER>;
    let list_Of_Associated_URI: OPTIONAL<InvolvedParty[]>;
    let event: OPTIONAL<UTF8String>;
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let list_of_subscription_ID: OPTIONAL<SubscriptionID[]>;
    let list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>;
    let iMSCommunicationServiceIdentifier: OPTIONAL<OCTET_STRING>;
    let sessionPriority: OPTIONAL<SessionPriority>;
    let serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    let list_of_Requested_Party_Address: OPTIONAL<InvolvedParty[]>;
    let list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>;
    let nNI_Information: OPTIONAL<NNI_Information>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let servedPartyIPAddress: OPTIONAL<ServedPartyIPAddress>;
    let fromAddress: OPTIONAL<OCTET_STRING>;
    let iMSEmergencyIndicator: OPTIONAL<NULL>;
    let transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    let iMSVisitedNetworkIdentifier: OPTIONAL<OCTET_STRING>;
    let listOfReasonHeader: OPTIONAL<GraphicString[]>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let instanceId: OPTIONAL<OCTET_STRING>;
    let subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    let routeHeaderReceived: OPTIONAL<OCTET_STRING>;
    let routeHeaderTransmitted: OPTIONAL<OCTET_STRING>;
    let list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    let listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    let initialIMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let list_Of_AccessTransferInformation: OPTIONAL<AccessTransferInformation[]>;
    let relatedICID: OPTIONAL<OCTET_STRING>;
    let relatedICIDGenerationNode: OPTIONAL<NodeAddress>;
    let fEIdentifierList: OPTIONAL<GraphicString[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sIP-Method": (_el: _Element): void => { sIP_Method = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "role-of-Node": (_el: _Element): void => { role_of_Node = $._decode_implicit<Role_of_Node>(() => _decode_Role_of_Node)(_el); },
        "nodeAddress": (_el: _Element): void => { nodeAddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "session-Id": (_el: _Element): void => { session_Id = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "list-Of-Calling-Party-Address": (_el: _Element): void => { list_Of_Calling_Party_Address = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "called-Party-Address": (_el: _Element): void => { called_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "privateUserID": (_el: _Element): void => { privateUserID = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "serviceRequestTimeStamp": (_el: _Element): void => { serviceRequestTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryStartTimeStamp": (_el: _Element): void => { serviceDeliveryStartTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryEndTimeStamp": (_el: _Element): void => { serviceDeliveryEndTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecordClosing": (_el: _Element): void => { causeForRecordClosing = $._decode_implicit<CauseForRecordClosing>(() => _decode_CauseForRecordClosing)(_el); },
        "incomplete-CDR-Indication": (_el: _Element): void => { incomplete_CDR_Indication = $._decode_implicit<Incomplete_CDR_Indication>(() => _decode_Incomplete_CDR_Indication)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-SDP-Media-Components": (_el: _Element): void => { list_Of_SDP_Media_Components = $._decode_implicit<Media_Components_List[]>(() => $._decodeSequenceOf<Media_Components_List>(() => _decode_Media_Components_List))(_el); },
        "gGSNaddress": (_el: _Element): void => { gGSNaddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-Of-Message-Bodies": (_el: _Element): void => { list_Of_Message_Bodies = $._decode_implicit<MessageBody[]>(() => $._decodeSequenceOf<MessageBody>(() => _decode_MessageBody))(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "expiresInformation": (_el: _Element): void => { expiresInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "list-Of-Associated-URI": (_el: _Element): void => { list_Of_Associated_URI = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "event": (_el: _Element): void => { event = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-of-subscription-ID": (_el: _Element): void => { list_of_subscription_ID = $._decode_implicit<SubscriptionID[]>(() => $._decodeSequenceOf<SubscriptionID>(() => _decode_SubscriptionID))(_el); },
        "list-Of-Early-SDP-Media-Components": (_el: _Element): void => { list_Of_Early_SDP_Media_Components = $._decode_implicit<Early_Media_Components_List[]>(() => $._decodeSequenceOf<Early_Media_Components_List>(() => _decode_Early_Media_Components_List))(_el); },
        "iMSCommunicationServiceIdentifier": (_el: _Element): void => { iMSCommunicationServiceIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sessionPriority": (_el: _Element): void => { sessionPriority = $._decode_implicit<SessionPriority>(() => _decode_SessionPriority)(_el); },
        "serviceRequestTimeStampFraction": (_el: _Element): void => { serviceRequestTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryStartTimeStampFraction": (_el: _Element): void => { serviceDeliveryStartTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryEndTimeStampFraction": (_el: _Element): void => { serviceDeliveryEndTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "list-of-Requested-Party-Address": (_el: _Element): void => { list_of_Requested_Party_Address = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "list-Of-Called-Asserted-Identity": (_el: _Element): void => { list_Of_Called_Asserted_Identity = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "nNI-Information": (_el: _Element): void => { nNI_Information = $._decode_implicit<NNI_Information>(() => _decode_NNI_Information)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPartyIPAddress": (_el: _Element): void => { servedPartyIPAddress = $._decode_explicit<ServedPartyIPAddress>(() => _decode_ServedPartyIPAddress)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMSEmergencyIndicator": (_el: _Element): void => { iMSEmergencyIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "transit-IOI-Lists": (_el: _Element): void => { transit_IOI_Lists = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "iMSVisitedNetworkIdentifier": (_el: _Element): void => { iMSVisitedNetworkIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfReasonHeader": (_el: _Element): void => { listOfReasonHeader = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "instanceId": (_el: _Element): void => { instanceId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "subscriberEquipmentNumber": (_el: _Element): void => { subscriberEquipmentNumber = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "routeHeaderReceived": (_el: _Element): void => { routeHeaderReceived = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routeHeaderTransmitted": (_el: _Element): void => { routeHeaderTransmitted = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-AccessNetworkInfoChange": (_el: _Element): void => { list_Of_AccessNetworkInfoChange = $._decode_implicit<AccessNetworkInfoChange[]>(() => $._decodeSequenceOf<AccessNetworkInfoChange>(() => _decode_AccessNetworkInfoChange))(_el); },
        "listOfCalledIdentityChanges": (_el: _Element): void => { listOfCalledIdentityChanges = $._decode_implicit<CalledIdentityChange[]>(() => $._decodeSequenceOf<CalledIdentityChange>(() => _decode_CalledIdentityChange))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "initialIMS-Charging-Identifier": (_el: _Element): void => { initialIMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-AccessTransferInformation": (_el: _Element): void => { list_Of_AccessTransferInformation = $._decode_implicit<AccessTransferInformation[]>(() => $._decodeSequenceOf<AccessTransferInformation>(() => _decode_AccessTransferInformation))(_el); },
        "relatedICID": (_el: _Element): void => { relatedICID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "relatedICIDGenerationNode": (_el: _Element): void => { relatedICIDGenerationNode = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "fEIdentifierList": (_el: _Element): void => { fEIdentifierList = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PCSCFRecord,
        _extension_additions_list_spec_for_PCSCFRecord,
        _root_component_type_list_2_spec_for_PCSCFRecord,
        undefined,
    );
    return new PCSCFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        role_of_Node,
        nodeAddress,
        session_Id,
        list_Of_Calling_Party_Address,
        called_Party_Address,
        privateUserID,
        serviceRequestTimeStamp,
        serviceDeliveryStartTimeStamp,
        serviceDeliveryEndTimeStamp,
        recordOpeningTime,
        recordClosureTime,
        interOperatorIdentifiers,
        localRecordSequenceNumber,
        recordSequenceNumber,
        causeForRecordClosing,
        incomplete_CDR_Indication,
        iMS_Charging_Identifier,
        list_Of_SDP_Media_Components,
        gGSNaddress,
        serviceReasonReturnCode,
        list_Of_Message_Bodies,
        recordExtensions,
        expiresInformation,
        list_Of_Associated_URI,
        event,
        accessNetworkInformation,
        serviceContextID,
        list_of_subscription_ID,
        list_Of_Early_SDP_Media_Components,
        iMSCommunicationServiceIdentifier,
        sessionPriority,
        serviceRequestTimeStampFraction,
        serviceDeliveryStartTimeStampFraction,
        serviceDeliveryEndTimeStampFraction,
        list_of_Requested_Party_Address,
        list_Of_Called_Asserted_Identity,
        nNI_Information,
        userLocationInformation,
        mSTimeZone,
        servedPartyIPAddress,
        fromAddress,
        iMSEmergencyIndicator,
        transit_IOI_Lists,
        iMSVisitedNetworkIdentifier,
        listOfReasonHeader,
        additionalAccessNetworkInformation,
        instanceId,
        subscriberEquipmentNumber,
        routeHeaderReceived,
        routeHeaderTransmitted,
        list_Of_AccessNetworkInfoChange,
        listOfCalledIdentityChanges,
        cellularNetworkInformation,
        initialIMS_Charging_Identifier,
        list_Of_AccessTransferInformation,
        relatedICID,
        relatedICIDGenerationNode,
        fEIdentifierList
    );
}; }
    return _cached_decoder_for_PCSCFRecord(el);
}

let _cached_encoder_for_PCSCFRecord: $.ASN1Encoder<PCSCFRecord> | null = null;

/**
 * @summary Encodes a(n) PCSCFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCSCFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PCSCFRecord (value: PCSCFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PCSCFRecord) { _cached_encoder_for_PCSCFRecord = function (value: PCSCFRecord, _elGetter: $.ASN1Encoder<PCSCFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.sIP_Method !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER)(value.sIP_Method, $.BER));
    }
    if (value.role_of_Node !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Role_of_Node, $.BER)(value.role_of_Node, $.BER));
    }
    if (value.nodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_NodeAddress, $.BER)(value.nodeAddress, $.BER));
    }
    if (value.session_Id !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeGraphicString, $.BER)(value.session_Id, $.BER));
    }
    if (value.list_Of_Calling_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Calling_Party_Address, $.BER));
    }
    if (value.called_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_InvolvedParty, $.BER)(value.called_Party_Address, $.BER));
    }
    if (value.privateUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeGraphicString, $.BER)(value.privateUserID, $.BER));
    }
    if (value.serviceRequestTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.serviceRequestTimeStamp, $.BER));
    }
    if (value.serviceDeliveryStartTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.serviceDeliveryStartTimeStamp, $.BER));
    }
    if (value.serviceDeliveryEndTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.serviceDeliveryEndTimeStamp, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.interOperatorIdentifiers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_InterOperatorIdentifiers, $.BER)(value.interOperatorIdentifiers, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.causeForRecordClosing !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_CauseForRecordClosing, $.BER)(value.causeForRecordClosing, $.BER));
    }
    if (value.incomplete_CDR_Indication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_Incomplete_CDR_Indication, $.BER)(value.incomplete_CDR_Indication, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.list_Of_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSequenceOf<Media_Components_List>(() => _encode_Media_Components_List, $.BER), $.BER)(value.list_Of_SDP_Media_Components, $.BER));
    }
    if (value.gGSNaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 22, () => _encode_NodeAddress, $.BER)(value.gGSNaddress, $.BER));
    }
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
    }
    if (value.list_Of_Message_Bodies !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeSequenceOf<MessageBody>(() => _encode_MessageBody, $.BER), $.BER)(value.list_Of_Message_Bodies, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.expiresInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.expiresInformation, $.BER));
    }
    if (value.list_Of_Associated_URI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Associated_URI, $.BER));
    }
    if (value.event !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeUTF8String, $.BER)(value.event, $.BER));
    }
    if (value.accessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.accessNetworkInformation, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.list_of_subscription_ID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeSequenceOf<SubscriptionID>(() => _encode_SubscriptionID, $.BER), $.BER)(value.list_of_subscription_ID, $.BER));
    }
    if (value.list_Of_Early_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeSequenceOf<Early_Media_Components_List>(() => _encode_Early_Media_Components_List, $.BER), $.BER)(value.list_Of_Early_SDP_Media_Components, $.BER));
    }
    if (value.iMSCommunicationServiceIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.iMSCommunicationServiceIdentifier, $.BER));
    }
    if (value.sessionPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SessionPriority, $.BER)(value.sessionPriority, $.BER));
    }
    if (value.serviceRequestTimeStampFraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeInteger, $.BER)(value.serviceRequestTimeStampFraction, $.BER));
    }
    if (value.serviceDeliveryStartTimeStampFraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeInteger, $.BER)(value.serviceDeliveryStartTimeStampFraction, $.BER));
    }
    if (value.serviceDeliveryEndTimeStampFraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeInteger, $.BER)(value.serviceDeliveryEndTimeStampFraction, $.BER));
    }
    if (value.list_of_Requested_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_of_Requested_Party_Address, $.BER));
    }
    if (value.list_Of_Called_Asserted_Identity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Called_Asserted_Identity, $.BER));
    }
    if (value.nNI_Information !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_NNI_Information, $.BER)(value.nNI_Information, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    if (value.servedPartyIPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_ServedPartyIPAddress, $.BER)(value.servedPartyIPAddress, $.BER));
    }
    if (value.fromAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.fromAddress, $.BER));
    }
    if (value.iMSEmergencyIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.iMSEmergencyIndicator, $.BER));
    }
    if (value.transit_IOI_Lists !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.transit_IOI_Lists, $.BER));
    }
    if (value.iMSVisitedNetworkIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeOctetString, $.BER)(value.iMSVisitedNetworkIdentifier, $.BER));
    }
    if (value.listOfReasonHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.listOfReasonHeader, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.instanceId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => $._encodeOctetString, $.BER)(value.instanceId, $.BER));
    }
    if (value.subscriberEquipmentNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => _encode_SubscriberEquipmentNumber, $.BER)(value.subscriberEquipmentNumber, $.BER));
    }
    if (value.routeHeaderReceived !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeOctetString, $.BER)(value.routeHeaderReceived, $.BER));
    }
    if (value.routeHeaderTransmitted !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeOctetString, $.BER)(value.routeHeaderTransmitted, $.BER));
    }
    if (value.list_Of_AccessNetworkInfoChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeSequenceOf<AccessNetworkInfoChange>(() => _encode_AccessNetworkInfoChange, $.BER), $.BER)(value.list_Of_AccessNetworkInfoChange, $.BER));
    }
    if (value.listOfCalledIdentityChanges !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => $._encodeSequenceOf<CalledIdentityChange>(() => _encode_CalledIdentityChange, $.BER), $.BER)(value.listOfCalledIdentityChanges, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    if (value.initialIMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 105, () => $._encodeOctetString, $.BER)(value.initialIMS_Charging_Identifier, $.BER));
    }
    if (value.list_Of_AccessTransferInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 106, () => $._encodeSequenceOf<AccessTransferInformation>(() => _encode_AccessTransferInformation, $.BER), $.BER)(value.list_Of_AccessTransferInformation, $.BER));
    }
    if (value.relatedICID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 107, () => $._encodeOctetString, $.BER)(value.relatedICID, $.BER));
    }
    if (value.relatedICIDGenerationNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 108, () => _encode_NodeAddress, $.BER)(value.relatedICIDGenerationNode, $.BER));
    }
    if (value.fEIdentifierList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 109, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.fEIdentifierList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PCSCFRecord(value, elGetter);
}


/* eslint-enable */
