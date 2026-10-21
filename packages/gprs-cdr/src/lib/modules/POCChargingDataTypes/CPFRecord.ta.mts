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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../POCChargingDataTypes/RecordType.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../POCChargingDataTypes/NodeAddress.ta.mjs";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../POCChargingDataTypes/InvolvedParty.ta.mjs";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../POCChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
import { CauseForRecordClosing, _decode_CauseForRecordClosing, _encode_CauseForRecordClosing, _enum_for_CauseForRecordClosing } from "../POCChargingDataTypes/CauseForRecordClosing.ta.mjs";
import { Incomplete_CDR_Indication, _decode_Incomplete_CDR_Indication, _encode_Incomplete_CDR_Indication } from "../POCChargingDataTypes/Incomplete-CDR-Indication.ta.mjs";
import { List_Of_SDP_Media_Components, _decode_List_Of_SDP_Media_Components, _encode_List_Of_SDP_Media_Components } from "../POCChargingDataTypes/List-Of-SDP-Media-Components.ta.mjs";
import { List_Of_Message_Bodies, _decode_List_Of_Message_Bodies, _encode_List_Of_Message_Bodies } from "../POCChargingDataTypes/List-Of-Message-Bodies.ta.mjs";
import { POCInformation, _decode_POCInformation, _encode_POCInformation } from "../POCChargingDataTypes/POCInformation.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../POCChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary CPFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPFRecord ::= SET {
 *    recordType                      [0] IMPLICIT RecordType,
 *    retransmission                  [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                      [2] IMPLICIT GraphicString OPTIONAL,
 *    nodeAddress                     [3] NodeAddress OPTIONAL,
 *    session-Id                      [4] IMPLICIT GraphicString OPTIONAL,
 *    calling-Party-Address           [5] InvolvedParty OPTIONAL,
 *    called-Party-Address            [6] InvolvedParty OPTIONAL,
 *    servedParty                     [7] IMPLICIT GraphicString OPTIONAL,
 *    serviceRequestTimeStamp         [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryStartTimeStamp   [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryEndTimeStamp     [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordOpeningTime               [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime               [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    interOperatorIdentifiers        [13] IMPLICIT InterOperatorIdentifiers OPTIONAL,
 *    localRecordSequenceNumber       [14] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordSequenceNumber            [15] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecordClosing           [16] IMPLICIT CauseForRecordClosing OPTIONAL,
 *    incomplete-CDR-Indication       [17] IMPLICIT Incomplete-CDR-Indication OPTIONAL,
 *    iMS-Charging-Identifier         [18] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-SDP-Media-Components    [19] IMPLICIT SEQUENCE  OF
 *       List-Of-SDP-Media-Components OPTIONAL,
 *    gGSNaddress                     [20] NodeAddress OPTIONAL,
 *    serviceReasonReturnCode         [21] IMPLICIT UTF8String OPTIONAL,
 *    list-Of-Message-Bodies          [22] IMPLICIT SEQUENCE  OF
 *       List-Of-Message-Bodies OPTIONAL,
 *    userLocationInfo                [23] IMPLICIT OCTET STRING OPTIONAL,
 *    poCInformation                  [24] IMPLICIT POCInformation OPTIONAL,
 *    recordExtensions                [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    serviceContextID                [26] IMPLICIT UTF8String OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CPFRecord {
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
     * @summary `calling_Party_Address`.
     * @public
     * @readonly
     */
    readonly calling_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `called_Party_Address`.
     * @public
     * @readonly
     */
    readonly called_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `servedParty`.
     * @public
     * @readonly
     */
    readonly servedParty: OPTIONAL<GraphicString>;
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
    readonly list_Of_SDP_Media_Components: OPTIONAL<List_Of_SDP_Media_Components[]>;
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
    readonly list_Of_Message_Bodies: OPTIONAL<List_Of_Message_Bodies[]>;
    /**
     * @summary `userLocationInfo`.
     * @public
     * @readonly
     */
    readonly userLocationInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `poCInformation`.
     * @public
     * @readonly
     */
    readonly poCInformation: OPTIONAL<POCInformation>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        sIP_Method: OPTIONAL<GraphicString>,
        nodeAddress: OPTIONAL<NodeAddress>,
        session_Id: OPTIONAL<GraphicString>,
        calling_Party_Address: OPTIONAL<InvolvedParty>,
        called_Party_Address: OPTIONAL<InvolvedParty>,
        servedParty: OPTIONAL<GraphicString>,
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
        list_Of_SDP_Media_Components: OPTIONAL<List_Of_SDP_Media_Components[]>,
        gGSNaddress: OPTIONAL<NodeAddress>,
        serviceReasonReturnCode: OPTIONAL<UTF8String>,
        list_Of_Message_Bodies: OPTIONAL<List_Of_Message_Bodies[]>,
        userLocationInfo: OPTIONAL<OCTET_STRING>,
        poCInformation: OPTIONAL<POCInformation>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        serviceContextID: OPTIONAL<UTF8String>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.sIP_Method = sIP_Method;
        this.nodeAddress = nodeAddress;
        this.session_Id = session_Id;
        this.calling_Party_Address = calling_Party_Address;
        this.called_Party_Address = called_Party_Address;
        this.servedParty = servedParty;
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
        this.userLocationInfo = userLocationInfo;
        this.poCInformation = poCInformation;
        this.recordExtensions = recordExtensions;
        this.serviceContextID = serviceContextID;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("CPFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("CPFRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("CPFRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("CPFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("CPFRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("CPFRecord.localRecordSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a CPFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CPFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPFRecord`.
     * @returns {CPFRecord}
     */
    public static _from_object (_o: { [_K in keyof (CPFRecord)]: (CPFRecord)[_K] }): CPFRecord {
        return new CPFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.nodeAddress, _o.session_Id, _o.calling_Party_Address, _o.called_Party_Address, _o.servedParty, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.list_Of_SDP_Media_Components, _o.gGSNaddress, _o.serviceReasonReturnCode, _o.list_Of_Message_Bodies, _o.userLocationInfo, _o.poCInformation, _o.recordExtensions, _o.serviceContextID);
    }

        /**
         * @summary The enum used as the type of the component `causeForRecordClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecordClosing = _enum_for_CauseForRecordClosing;
}

/**
 * @summary The Leading Root Component Types of CPFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CPFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calling-Party-Address", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("servedParty", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceRequestTimeStamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("serviceDeliveryStartTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceDeliveryEndTimeStamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("interOperatorIdentifiers", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("causeForRecordClosing", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("incomplete-CDR-Indication", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("list-Of-SDP-Media-Components", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("gGSNaddress", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("list-Of-Message-Bodies", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("poCInformation", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 26))
];

/**
 * @summary The Trailing Root Component Types of CPFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CPFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CPFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CPFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CPFRecord: $.ASN1Decoder<CPFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPFRecord (el: _Element): CPFRecord {
    if (!_cached_decoder_for_CPFRecord) { _cached_decoder_for_CPFRecord = function (el: _Element): CPFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let sIP_Method: OPTIONAL<GraphicString>;
    let nodeAddress: OPTIONAL<NodeAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let calling_Party_Address: OPTIONAL<InvolvedParty>;
    let called_Party_Address: OPTIONAL<InvolvedParty>;
    let servedParty: OPTIONAL<GraphicString>;
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
    let list_Of_SDP_Media_Components: OPTIONAL<List_Of_SDP_Media_Components[]>;
    let gGSNaddress: OPTIONAL<NodeAddress>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let list_Of_Message_Bodies: OPTIONAL<List_Of_Message_Bodies[]>;
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let poCInformation: OPTIONAL<POCInformation>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let serviceContextID: OPTIONAL<UTF8String>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sIP-Method": (_el: _Element): void => { sIP_Method = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "nodeAddress": (_el: _Element): void => { nodeAddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "session-Id": (_el: _Element): void => { session_Id = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "calling-Party-Address": (_el: _Element): void => { calling_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "called-Party-Address": (_el: _Element): void => { called_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "servedParty": (_el: _Element): void => { servedParty = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
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
        "list-Of-SDP-Media-Components": (_el: _Element): void => { list_Of_SDP_Media_Components = $._decode_implicit<List_Of_SDP_Media_Components[]>(() => $._decodeSequenceOf<List_Of_SDP_Media_Components>(() => _decode_List_Of_SDP_Media_Components))(_el); },
        "gGSNaddress": (_el: _Element): void => { gGSNaddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-Of-Message-Bodies": (_el: _Element): void => { list_Of_Message_Bodies = $._decode_implicit<List_Of_Message_Bodies[]>(() => $._decodeSequenceOf<List_Of_Message_Bodies>(() => _decode_List_Of_Message_Bodies))(_el); },
        "userLocationInfo": (_el: _Element): void => { userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "poCInformation": (_el: _Element): void => { poCInformation = $._decode_implicit<POCInformation>(() => _decode_POCInformation)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CPFRecord,
        _extension_additions_list_spec_for_CPFRecord,
        _root_component_type_list_2_spec_for_CPFRecord,
        undefined,
    );
    return new CPFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        nodeAddress,
        session_Id,
        calling_Party_Address,
        called_Party_Address,
        servedParty,
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
        userLocationInfo,
        poCInformation,
        recordExtensions,
        serviceContextID
    );
}; }
    return _cached_decoder_for_CPFRecord(el);
}

let _cached_encoder_for_CPFRecord: $.ASN1Encoder<CPFRecord> | null = null;

/**
 * @summary Encodes a(n) CPFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CPFRecord (value: CPFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPFRecord) { _cached_encoder_for_CPFRecord = function (value: CPFRecord, _elGetter: $.ASN1Encoder<CPFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.sIP_Method !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER)(value.sIP_Method, $.BER));
    }
    if (value.nodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_NodeAddress, $.BER)(value.nodeAddress, $.BER));
    }
    if (value.session_Id !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeGraphicString, $.BER)(value.session_Id, $.BER));
    }
    if (value.calling_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_InvolvedParty, $.BER)(value.calling_Party_Address, $.BER));
    }
    if (value.called_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_InvolvedParty, $.BER)(value.called_Party_Address, $.BER));
    }
    if (value.servedParty !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeGraphicString, $.BER)(value.servedParty, $.BER));
    }
    if (value.serviceRequestTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.serviceRequestTimeStamp, $.BER));
    }
    if (value.serviceDeliveryStartTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.serviceDeliveryStartTimeStamp, $.BER));
    }
    if (value.serviceDeliveryEndTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.serviceDeliveryEndTimeStamp, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.interOperatorIdentifiers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_InterOperatorIdentifiers, $.BER)(value.interOperatorIdentifiers, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.causeForRecordClosing !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_CauseForRecordClosing, $.BER)(value.causeForRecordClosing, $.BER));
    }
    if (value.incomplete_CDR_Indication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Incomplete_CDR_Indication, $.BER)(value.incomplete_CDR_Indication, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.list_Of_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<List_Of_SDP_Media_Components>(() => _encode_List_Of_SDP_Media_Components, $.BER), $.BER)(value.list_Of_SDP_Media_Components, $.BER));
    }
    if (value.gGSNaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_NodeAddress, $.BER)(value.gGSNaddress, $.BER));
    }
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
    }
    if (value.list_Of_Message_Bodies !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<List_Of_Message_Bodies>(() => _encode_List_Of_Message_Bodies, $.BER), $.BER)(value.list_Of_Message_Bodies, $.BER));
    }
    if (value.userLocationInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER));
    }
    if (value.poCInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_POCInformation, $.BER)(value.poCInformation, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CPFRecord(value, elGetter);
}


/* eslint-enable */
