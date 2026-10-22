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
import { ApplicationServersInformation, _decode_ApplicationServersInformation, _encode_ApplicationServersInformation } from "../IMSChargingDataTypes/ApplicationServersInformation.ta.mjs";
import { AccessNetworkInfoChange, _decode_AccessNetworkInfoChange, _encode_AccessNetworkInfoChange } from "../IMSChargingDataTypes/AccessNetworkInfoChange.ta.mjs";
import { CalledIdentityChange, _decode_CalledIdentityChange, _encode_CalledIdentityChange } from "../IMSChargingDataTypes/CalledIdentityChange.ta.mjs";


/**
 * @summary ECSCFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECSCFRecord ::= SET {
 *    recordType                              [0] IMPLICIT RecordType,
 *    retransmission                          [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                              [2] IMPLICIT GraphicString OPTIONAL,
 *    role-of-Node                            [3] IMPLICIT Role-of-Node OPTIONAL,
 *    nodeAddress                             [4] NodeAddress OPTIONAL,
 *    session-Id                              [5] IMPLICIT GraphicString OPTIONAL,
 *    list-Of-Calling-Party-Address           [6] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    called-Party-Address                    [7] InvolvedParty OPTIONAL,
 *    serviceRequestTimeStamp                 [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryStartTimeStamp           [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryEndTimeStamp             [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordOpeningTime                       [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime                       [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    interOperatorIdentifiers                [14] IMPLICIT SEQUENCE  OF
 *       InterOperatorIdentifiers OPTIONAL,
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
 *    applicationServersInformation           [40] IMPLICIT SEQUENCE  OF
 *       ApplicationServersInformation OPTIONAL,
 *    requested-Party-Address                 [41] InvolvedParty OPTIONAL,
 *    list-Of-Called-Asserted-Identity        [42] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    userLocationInformation                 [47] IMPLICIT OCTET STRING OPTIONAL,
 *    mSTimeZone                              [48] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    fromAddress                             [51] IMPLICIT OCTET STRING OPTIONAL,
 *    transit-IOI-Lists                       [53] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    listOfReasonHeader                      [55] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    additionalAccessNetworkInformation      [56] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-AccessNetworkInfoChange         [62] IMPLICIT SEQUENCE  OF
 *       AccessNetworkInfoChange OPTIONAL,
 *    listOfCalledIdentityChanges             [63] IMPLICIT SEQUENCE  OF
 *       CalledIdentityChange OPTIONAL,
 *    cellularNetworkInformation              [64] IMPLICIT OCTET STRING OPTIONAL,
 *    fEIdentifierList                        [65] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ECSCFRecord {
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
    readonly interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers[]>;
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
     * @summary `applicationServersInformation`.
     * @public
     * @readonly
     */
    readonly applicationServersInformation: OPTIONAL<ApplicationServersInformation[]>;
    /**
     * @summary `requested_Party_Address`.
     * @public
     * @readonly
     */
    readonly requested_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `list_Of_Called_Asserted_Identity`.
     * @public
     * @readonly
     */
    readonly list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>;
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
     * @summary `fromAddress`.
     * @public
     * @readonly
     */
    readonly fromAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `transit_IOI_Lists`.
     * @public
     * @readonly
     */
    readonly transit_IOI_Lists: OPTIONAL<GraphicString[]>;
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
        serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>,
        serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>,
        serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers[]>,
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
        applicationServersInformation: OPTIONAL<ApplicationServersInformation[]>,
        requested_Party_Address: OPTIONAL<InvolvedParty>,
        list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        fromAddress: OPTIONAL<OCTET_STRING>,
        transit_IOI_Lists: OPTIONAL<GraphicString[]>,
        listOfReasonHeader: OPTIONAL<GraphicString[]>,
        additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>,
        list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>,
        listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>,
        cellularNetworkInformation: OPTIONAL<OCTET_STRING>,
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
        this.applicationServersInformation = applicationServersInformation;
        this.requested_Party_Address = requested_Party_Address;
        this.list_Of_Called_Asserted_Identity = list_Of_Called_Asserted_Identity;
        this.userLocationInformation = userLocationInformation;
        this.mSTimeZone = mSTimeZone;
        this.fromAddress = fromAddress;
        this.transit_IOI_Lists = transit_IOI_Lists;
        this.listOfReasonHeader = listOfReasonHeader;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.list_Of_AccessNetworkInfoChange = list_Of_AccessNetworkInfoChange;
        this.listOfCalledIdentityChanges = listOfCalledIdentityChanges;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.fEIdentifierList = fEIdentifierList;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ECSCFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ECSCFRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ECSCFRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("ECSCFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("ECSCFRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ECSCFRecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.serviceRequestTimeStampFraction !== undefined && (this.serviceRequestTimeStampFraction < 0 || this.serviceRequestTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ECSCFRecord.serviceRequestTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryStartTimeStampFraction !== undefined && (this.serviceDeliveryStartTimeStampFraction < 0 || this.serviceDeliveryStartTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ECSCFRecord.serviceDeliveryStartTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryEndTimeStampFraction !== undefined && (this.serviceDeliveryEndTimeStampFraction < 0 || this.serviceDeliveryEndTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ECSCFRecord.serviceDeliveryEndTimeStampFraction violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("ECSCFRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ECSCFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ECSCFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECSCFRecord`.
     * @returns {ECSCFRecord}
     */
    public static _from_object (_o: { [_K in keyof (ECSCFRecord)]: (ECSCFRecord)[_K] }): ECSCFRecord {
        return new ECSCFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.role_of_Node, _o.nodeAddress, _o.session_Id, _o.list_Of_Calling_Party_Address, _o.called_Party_Address, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.list_Of_SDP_Media_Components, _o.gGSNaddress, _o.serviceReasonReturnCode, _o.list_Of_Message_Bodies, _o.recordExtensions, _o.expiresInformation, _o.event, _o.accessNetworkInformation, _o.serviceContextID, _o.list_of_subscription_ID, _o.list_Of_Early_SDP_Media_Components, _o.iMSCommunicationServiceIdentifier, _o.sessionPriority, _o.serviceRequestTimeStampFraction, _o.serviceDeliveryStartTimeStampFraction, _o.serviceDeliveryEndTimeStampFraction, _o.applicationServersInformation, _o.requested_Party_Address, _o.list_Of_Called_Asserted_Identity, _o.userLocationInformation, _o.mSTimeZone, _o.fromAddress, _o.transit_IOI_Lists, _o.listOfReasonHeader, _o.additionalAccessNetworkInformation, _o.list_Of_AccessNetworkInfoChange, _o.listOfCalledIdentityChanges, _o.cellularNetworkInformation, _o.fEIdentifierList);
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
 * @summary The Leading Root Component Types of ECSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECSCFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("role-of-Node", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("list-Of-Calling-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 7)),
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
    new $.ComponentSpec("applicationServersInformation", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("requested-Party-Address", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("list-Of-Called-Asserted-Identity", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("fromAddress", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("transit-IOI-Lists", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("listOfReasonHeader", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("list-Of-AccessNetworkInfoChange", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("listOfCalledIdentityChanges", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("fEIdentifierList", true, $.hasTag(_TagClass.context, 65))
];

/**
 * @summary The Trailing Root Component Types of ECSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECSCFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ECSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECSCFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ECSCFRecord: $.ASN1Decoder<ECSCFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECSCFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ECSCFRecord (el: _Element): ECSCFRecord {
    if (!_cached_decoder_for_ECSCFRecord) { _cached_decoder_for_ECSCFRecord = function (el: _Element): ECSCFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let sIP_Method: OPTIONAL<GraphicString>;
    let role_of_Node: OPTIONAL<Role_of_Node>;
    let nodeAddress: OPTIONAL<NodeAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>;
    let called_Party_Address: OPTIONAL<InvolvedParty>;
    let serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers[]>;
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
    let applicationServersInformation: OPTIONAL<ApplicationServersInformation[]>;
    let requested_Party_Address: OPTIONAL<InvolvedParty>;
    let list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let fromAddress: OPTIONAL<OCTET_STRING>;
    let transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    let listOfReasonHeader: OPTIONAL<GraphicString[]>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    let listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
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
        "serviceRequestTimeStamp": (_el: _Element): void => { serviceRequestTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryStartTimeStamp": (_el: _Element): void => { serviceDeliveryStartTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryEndTimeStamp": (_el: _Element): void => { serviceDeliveryEndTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers[]>(() => $._decodeSequenceOf<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers))(_el); },
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
        "applicationServersInformation": (_el: _Element): void => { applicationServersInformation = $._decode_implicit<ApplicationServersInformation[]>(() => $._decodeSequenceOf<ApplicationServersInformation>(() => _decode_ApplicationServersInformation))(_el); },
        "requested-Party-Address": (_el: _Element): void => { requested_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "list-Of-Called-Asserted-Identity": (_el: _Element): void => { list_Of_Called_Asserted_Identity = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "transit-IOI-Lists": (_el: _Element): void => { transit_IOI_Lists = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "listOfReasonHeader": (_el: _Element): void => { listOfReasonHeader = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-AccessNetworkInfoChange": (_el: _Element): void => { list_Of_AccessNetworkInfoChange = $._decode_implicit<AccessNetworkInfoChange[]>(() => $._decodeSequenceOf<AccessNetworkInfoChange>(() => _decode_AccessNetworkInfoChange))(_el); },
        "listOfCalledIdentityChanges": (_el: _Element): void => { listOfCalledIdentityChanges = $._decode_implicit<CalledIdentityChange[]>(() => $._decodeSequenceOf<CalledIdentityChange>(() => _decode_CalledIdentityChange))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fEIdentifierList": (_el: _Element): void => { fEIdentifierList = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ECSCFRecord,
        _extension_additions_list_spec_for_ECSCFRecord,
        _root_component_type_list_2_spec_for_ECSCFRecord,
        undefined,
    );
    return new ECSCFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        role_of_Node,
        nodeAddress,
        session_Id,
        list_Of_Calling_Party_Address,
        called_Party_Address,
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
        applicationServersInformation,
        requested_Party_Address,
        list_Of_Called_Asserted_Identity,
        userLocationInformation,
        mSTimeZone,
        fromAddress,
        transit_IOI_Lists,
        listOfReasonHeader,
        additionalAccessNetworkInformation,
        list_Of_AccessNetworkInfoChange,
        listOfCalledIdentityChanges,
        cellularNetworkInformation,
        fEIdentifierList
    );
}; }
    return _cached_decoder_for_ECSCFRecord(el);
}

let _cached_encoder_for_ECSCFRecord: $.ASN1Encoder<ECSCFRecord> | null = null;

/**
 * @summary Encodes a(n) ECSCFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECSCFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ECSCFRecord (value: ECSCFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ECSCFRecord) { _cached_encoder_for_ECSCFRecord = function (value: ECSCFRecord, _elGetter: $.ASN1Encoder<ECSCFRecord>): _Element {
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
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<InterOperatorIdentifiers>(() => _encode_InterOperatorIdentifiers, $.BER), $.BER)(value.interOperatorIdentifiers, $.BER));
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
    if (value.applicationServersInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeSequenceOf<ApplicationServersInformation>(() => _encode_ApplicationServersInformation, $.BER), $.BER)(value.applicationServersInformation, $.BER));
    }
    if (value.requested_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 41, () => _encode_InvolvedParty, $.BER)(value.requested_Party_Address, $.BER));
    }
    if (value.list_Of_Called_Asserted_Identity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Called_Asserted_Identity, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    if (value.fromAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.fromAddress, $.BER));
    }
    if (value.transit_IOI_Lists !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.transit_IOI_Lists, $.BER));
    }
    if (value.listOfReasonHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.listOfReasonHeader, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
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
    if (value.fEIdentifierList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.fEIdentifierList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ECSCFRecord(value, elGetter);
}


/* eslint-enable */
