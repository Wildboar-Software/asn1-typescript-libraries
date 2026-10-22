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
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../IMSChargingDataTypes/ManagementExtension.ta.mjs";
import { SessionPriority, _decode_SessionPriority, _encode_SessionPriority, _enum_for_SessionPriority } from "../IMSChargingDataTypes/SessionPriority.ta.mjs";
import { NNI_Information, _decode_NNI_Information, _encode_NNI_Information } from "../IMSChargingDataTypes/NNI-Information.ta.mjs";


/**
 * @summary BGCFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BGCFRecord ::= SET {
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
 *    interOperatorIdentifiers                [14] IMPLICIT InterOperatorIdentifiers OPTIONAL,
 *    localRecordSequenceNumber               [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordSequenceNumber                    [16] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecordClosing                   [17] IMPLICIT CauseForRecordClosing OPTIONAL,
 *    incomplete-CDR-Indication               [18] IMPLICIT Incomplete-CDR-Indication OPTIONAL,
 *    iMS-Charging-Identifier                 [19] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceReasonReturnCode                 [23] IMPLICIT UTF8String OPTIONAL,
 *    recordExtensions                        [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    expiresInformation                      [26] IMPLICIT INTEGER OPTIONAL,
 *    event                                   [28] IMPLICIT UTF8String OPTIONAL,
 *    accessNetworkInformation                [29] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceContextID                        [30] IMPLICIT UTF8String OPTIONAL,
 *    numberPortabilityRouting                [34] IMPLICIT GraphicString OPTIONAL,
 *    carrierSelectRouting                    [35] IMPLICIT GraphicString OPTIONAL,
 *    sessionPriority                         [36] IMPLICIT SessionPriority OPTIONAL,
 *    serviceRequestTimeStampFraction         [37] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryStartTimeStampFraction   [38] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryEndTimeStampFraction     [39] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    transit-IOI-List                        [45] IMPLICIT GraphicString OPTIONAL,
 *    nNI-Information                         [46] IMPLICIT NNI-Information OPTIONAL,
 *    fromAddress                             [51] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfReasonHeader                      [55] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    additionalAccessNetworkInformation      [56] IMPLICIT OCTET STRING OPTIONAL,
 *    cellularNetworkInformation              [64] IMPLICIT OCTET STRING OPTIONAL,
 *    fEIdentifierList                        [65] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class BGCFRecord {
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
     * @summary `serviceReasonReturnCode`.
     * @public
     * @readonly
     */
    readonly serviceReasonReturnCode: OPTIONAL<UTF8String>;
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
     * @summary `numberPortabilityRouting`.
     * @public
     * @readonly
     */
    readonly numberPortabilityRouting: OPTIONAL<GraphicString>;
    /**
     * @summary `carrierSelectRouting`.
     * @public
     * @readonly
     */
    readonly carrierSelectRouting: OPTIONAL<GraphicString>;
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
     * @summary `transit_IOI_List`.
     * @public
     * @readonly
     */
    readonly transit_IOI_List: OPTIONAL<GraphicString>;
    /**
     * @summary `nNI_Information`.
     * @public
     * @readonly
     */
    readonly nNI_Information: OPTIONAL<NNI_Information>;
    /**
     * @summary `fromAddress`.
     * @public
     * @readonly
     */
    readonly fromAddress: OPTIONAL<OCTET_STRING>;
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
        interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        causeForRecordClosing: OPTIONAL<CauseForRecordClosing>,
        incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>,
        iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        serviceReasonReturnCode: OPTIONAL<UTF8String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        expiresInformation: OPTIONAL<INTEGER>,
        event: OPTIONAL<UTF8String>,
        accessNetworkInformation: OPTIONAL<OCTET_STRING>,
        serviceContextID: OPTIONAL<UTF8String>,
        numberPortabilityRouting: OPTIONAL<GraphicString>,
        carrierSelectRouting: OPTIONAL<GraphicString>,
        sessionPriority: OPTIONAL<SessionPriority>,
        serviceRequestTimeStampFraction: OPTIONAL<INTEGER>,
        serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>,
        serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>,
        transit_IOI_List: OPTIONAL<GraphicString>,
        nNI_Information: OPTIONAL<NNI_Information>,
        fromAddress: OPTIONAL<OCTET_STRING>,
        listOfReasonHeader: OPTIONAL<GraphicString[]>,
        additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>,
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
        this.serviceReasonReturnCode = serviceReasonReturnCode;
        this.recordExtensions = recordExtensions;
        this.expiresInformation = expiresInformation;
        this.event = event;
        this.accessNetworkInformation = accessNetworkInformation;
        this.serviceContextID = serviceContextID;
        this.numberPortabilityRouting = numberPortabilityRouting;
        this.carrierSelectRouting = carrierSelectRouting;
        this.sessionPriority = sessionPriority;
        this.serviceRequestTimeStampFraction = serviceRequestTimeStampFraction;
        this.serviceDeliveryStartTimeStampFraction = serviceDeliveryStartTimeStampFraction;
        this.serviceDeliveryEndTimeStampFraction = serviceDeliveryEndTimeStampFraction;
        this.transit_IOI_List = transit_IOI_List;
        this.nNI_Information = nNI_Information;
        this.fromAddress = fromAddress;
        this.listOfReasonHeader = listOfReasonHeader;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.fEIdentifierList = fEIdentifierList;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("BGCFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("BGCFRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("BGCFRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("BGCFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("BGCFRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("BGCFRecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.serviceRequestTimeStampFraction !== undefined && (this.serviceRequestTimeStampFraction < 0 || this.serviceRequestTimeStampFraction > 999)) {
            throw new ASN1OverflowError("BGCFRecord.serviceRequestTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryStartTimeStampFraction !== undefined && (this.serviceDeliveryStartTimeStampFraction < 0 || this.serviceDeliveryStartTimeStampFraction > 999)) {
            throw new ASN1OverflowError("BGCFRecord.serviceDeliveryStartTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryEndTimeStampFraction !== undefined && (this.serviceDeliveryEndTimeStampFraction < 0 || this.serviceDeliveryEndTimeStampFraction > 999)) {
            throw new ASN1OverflowError("BGCFRecord.serviceDeliveryEndTimeStampFraction violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a BGCFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `BGCFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BGCFRecord`.
     * @returns {BGCFRecord}
     */
    public static _from_object (_o: { [_K in keyof (BGCFRecord)]: (BGCFRecord)[_K] }): BGCFRecord {
        return new BGCFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.role_of_Node, _o.nodeAddress, _o.session_Id, _o.list_Of_Calling_Party_Address, _o.called_Party_Address, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.serviceReasonReturnCode, _o.recordExtensions, _o.expiresInformation, _o.event, _o.accessNetworkInformation, _o.serviceContextID, _o.numberPortabilityRouting, _o.carrierSelectRouting, _o.sessionPriority, _o.serviceRequestTimeStampFraction, _o.serviceDeliveryStartTimeStampFraction, _o.serviceDeliveryEndTimeStampFraction, _o.transit_IOI_List, _o.nNI_Information, _o.fromAddress, _o.listOfReasonHeader, _o.additionalAccessNetworkInformation, _o.cellularNetworkInformation, _o.fEIdentifierList);
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
 * @summary The Leading Root Component Types of BGCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BGCFRecord: $.ComponentSpec[] = [
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
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("expiresInformation", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("event", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("numberPortabilityRouting", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("carrierSelectRouting", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("sessionPriority", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceRequestTimeStampFraction", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("serviceDeliveryStartTimeStampFraction", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("serviceDeliveryEndTimeStampFraction", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("transit-IOI-List", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("nNI-Information", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("fromAddress", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("listOfReasonHeader", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("fEIdentifierList", true, $.hasTag(_TagClass.context, 65))
];

/**
 * @summary The Trailing Root Component Types of BGCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BGCFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BGCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BGCFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BGCFRecord: $.ASN1Decoder<BGCFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BGCFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BGCFRecord (el: _Element): BGCFRecord {
    if (!_cached_decoder_for_BGCFRecord) { _cached_decoder_for_BGCFRecord = function (el: _Element): BGCFRecord {
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
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    let incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let expiresInformation: OPTIONAL<INTEGER>;
    let event: OPTIONAL<UTF8String>;
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let numberPortabilityRouting: OPTIONAL<GraphicString>;
    let carrierSelectRouting: OPTIONAL<GraphicString>;
    let sessionPriority: OPTIONAL<SessionPriority>;
    let serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    let transit_IOI_List: OPTIONAL<GraphicString>;
    let nNI_Information: OPTIONAL<NNI_Information>;
    let fromAddress: OPTIONAL<OCTET_STRING>;
    let listOfReasonHeader: OPTIONAL<GraphicString[]>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
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
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecordClosing": (_el: _Element): void => { causeForRecordClosing = $._decode_implicit<CauseForRecordClosing>(() => _decode_CauseForRecordClosing)(_el); },
        "incomplete-CDR-Indication": (_el: _Element): void => { incomplete_CDR_Indication = $._decode_implicit<Incomplete_CDR_Indication>(() => _decode_Incomplete_CDR_Indication)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "expiresInformation": (_el: _Element): void => { expiresInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "event": (_el: _Element): void => { event = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "numberPortabilityRouting": (_el: _Element): void => { numberPortabilityRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "carrierSelectRouting": (_el: _Element): void => { carrierSelectRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sessionPriority": (_el: _Element): void => { sessionPriority = $._decode_implicit<SessionPriority>(() => _decode_SessionPriority)(_el); },
        "serviceRequestTimeStampFraction": (_el: _Element): void => { serviceRequestTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryStartTimeStampFraction": (_el: _Element): void => { serviceDeliveryStartTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryEndTimeStampFraction": (_el: _Element): void => { serviceDeliveryEndTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "transit-IOI-List": (_el: _Element): void => { transit_IOI_List = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "nNI-Information": (_el: _Element): void => { nNI_Information = $._decode_implicit<NNI_Information>(() => _decode_NNI_Information)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfReasonHeader": (_el: _Element): void => { listOfReasonHeader = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fEIdentifierList": (_el: _Element): void => { fEIdentifierList = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_BGCFRecord,
        _extension_additions_list_spec_for_BGCFRecord,
        _root_component_type_list_2_spec_for_BGCFRecord,
        undefined,
    );
    return new BGCFRecord( /* SET_CONSTRUCTOR_CALL */
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
        serviceReasonReturnCode,
        recordExtensions,
        expiresInformation,
        event,
        accessNetworkInformation,
        serviceContextID,
        numberPortabilityRouting,
        carrierSelectRouting,
        sessionPriority,
        serviceRequestTimeStampFraction,
        serviceDeliveryStartTimeStampFraction,
        serviceDeliveryEndTimeStampFraction,
        transit_IOI_List,
        nNI_Information,
        fromAddress,
        listOfReasonHeader,
        additionalAccessNetworkInformation,
        cellularNetworkInformation,
        fEIdentifierList
    );
}; }
    return _cached_decoder_for_BGCFRecord(el);
}

let _cached_encoder_for_BGCFRecord: $.ASN1Encoder<BGCFRecord> | null = null;

/**
 * @summary Encodes a(n) BGCFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BGCFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_BGCFRecord (value: BGCFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BGCFRecord) { _cached_encoder_for_BGCFRecord = function (value: BGCFRecord, _elGetter: $.ASN1Encoder<BGCFRecord>): _Element {
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
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
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
    if (value.numberPortabilityRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeGraphicString, $.BER)(value.numberPortabilityRouting, $.BER));
    }
    if (value.carrierSelectRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeGraphicString, $.BER)(value.carrierSelectRouting, $.BER));
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
    if (value.transit_IOI_List !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeGraphicString, $.BER)(value.transit_IOI_List, $.BER));
    }
    if (value.nNI_Information !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_NNI_Information, $.BER)(value.nNI_Information, $.BER));
    }
    if (value.fromAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.fromAddress, $.BER));
    }
    if (value.listOfReasonHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.listOfReasonHeader, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    if (value.fEIdentifierList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.fEIdentifierList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_BGCFRecord(value, elGetter);
}


/* eslint-enable */
