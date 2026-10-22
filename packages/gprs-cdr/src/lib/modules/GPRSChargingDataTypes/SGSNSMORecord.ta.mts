/* eslint-disable */
import {
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { CAMELInformationSMS, _decode_CAMELInformationSMS, _encode_CAMELInformationSMS } from "../GPRSChargingDataTypes/CAMELInformationSMS.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType, _enum_for_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";


/**
 * @summary SGSNSMORecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNSMORecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    servedIMSI                  [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI                  [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN                [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    msNetworkCapability         [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    serviceCentre               [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordingEntity             [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    locationArea                [7] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    routingArea                 [8] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    cellIdentifier              [9] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    messageReference            [10] IMPLICIT OCTET STRING,
 *    eventTimeStamp              [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    smsResult                   [12] Diagnostics OPTIONAL,
 *    recordExtensions            [13] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    nodeID                      [14] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    localSequenceNumber         [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    chargingCharacteristics     [16] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    rATType                     [17] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    destinationNumber           [18] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELInformationSMS         [19] IMPLICIT CAMELInformationSMS OPTIONAL,
 *    chChSelectionMode           [20] IMPLICIT ChChSelectionMode OPTIONAL,
 *    servingNodeType             [21] IMPLICIT ServingNodeType,
 *    servingNodeAddress          [22] GSNAddress OPTIONAL,
 *    servingNodeiPv6Address      [23] GSNAddress OPTIONAL,
 *    mMEName                     [24] IMPLICIT OCTET STRING OPTIONAL,
 *    mMERealm                    [25] IMPLICIT OCTET STRING OPTIONAL,
 *    userLocationInformation     [26] IMPLICIT OCTET STRING OPTIONAL,
 *    retransmission              [27] IMPLICIT NULL OPTIONAL,
 *    servingNodePLMNIdentifier   [28] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    userLocationInfoTime        [29] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt      [30] IMPLICIT CNOperatorSelectionEntity OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNSMORecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msNetworkCapability`.
     * @public
     * @readonly
     */
    readonly msNetworkCapability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceCentre`.
     * @public
     * @readonly
     */
    readonly serviceCentre: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationArea`.
     * @public
     * @readonly
     */
    readonly locationArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routingArea`.
     * @public
     * @readonly
     */
    readonly routingArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellIdentifier`.
     * @public
     * @readonly
     */
    readonly cellIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `eventTimeStamp`.
     * @public
     * @readonly
     */
    readonly eventTimeStamp: OCTET_STRING;
    /**
     * @summary `smsResult`.
     * @public
     * @readonly
     */
    readonly smsResult: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `chargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `destinationNumber`.
     * @public
     * @readonly
     */
    readonly destinationNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELInformationSMS`.
     * @public
     * @readonly
     */
    readonly cAMELInformationSMS: OPTIONAL<CAMELInformationSMS>;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `servingNodeType`.
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType;
    /**
     * @summary `servingNodeAddress`.
     * @public
     * @readonly
     */
    readonly servingNodeAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `servingNodeiPv6Address`.
     * @public
     * @readonly
     */
    readonly servingNodeiPv6Address: OPTIONAL<GSNAddress>;
    /**
     * @summary `mMEName`.
     * @public
     * @readonly
     */
    readonly mMEName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMERealm`.
     * @public
     * @readonly
     */
    readonly mMERealm: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInfoTime`.
     * @public
     * @readonly
     */
    readonly userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        msNetworkCapability: OPTIONAL<OCTET_STRING>,
        serviceCentre: OPTIONAL<OCTET_STRING>,
        recordingEntity: OPTIONAL<OCTET_STRING>,
        locationArea: OPTIONAL<OCTET_STRING>,
        routingArea: OPTIONAL<OCTET_STRING>,
        cellIdentifier: OPTIONAL<OCTET_STRING>,
        messageReference: OCTET_STRING,
        eventTimeStamp: OCTET_STRING,
        smsResult: OPTIONAL<Diagnostics>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        nodeID: OPTIONAL<IA5String>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        chargingCharacteristics: OCTET_STRING,
        rATType: OPTIONAL<INTEGER>,
        destinationNumber: OPTIONAL<OCTET_STRING>,
        cAMELInformationSMS: OPTIONAL<CAMELInformationSMS>,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        servingNodeType: ServingNodeType,
        servingNodeAddress: OPTIONAL<GSNAddress>,
        servingNodeiPv6Address: OPTIONAL<GSNAddress>,
        mMEName: OPTIONAL<OCTET_STRING>,
        mMERealm: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        retransmission: OPTIONAL<NULL>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        userLocationInfoTime: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.msNetworkCapability = msNetworkCapability;
        this.serviceCentre = serviceCentre;
        this.recordingEntity = recordingEntity;
        this.locationArea = locationArea;
        this.routingArea = routingArea;
        this.cellIdentifier = cellIdentifier;
        this.messageReference = messageReference;
        this.eventTimeStamp = eventTimeStamp;
        this.smsResult = smsResult;
        this.recordExtensions = recordExtensions;
        this.nodeID = nodeID;
        this.localSequenceNumber = localSequenceNumber;
        this.chargingCharacteristics = chargingCharacteristics;
        this.rATType = rATType;
        this.destinationNumber = destinationNumber;
        this.cAMELInformationSMS = cAMELInformationSMS;
        this.chChSelectionMode = chChSelectionMode;
        this.servingNodeType = servingNodeType;
        this.servingNodeAddress = servingNodeAddress;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.mMEName = mMEName;
        this.mMERealm = mMERealm;
        this.userLocationInformation = userLocationInformation;
        this.retransmission = retransmission;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.userLocationInfoTime = userLocationInfoTime;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SGSNSMORecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SGSNSMORecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SGSNSMORecord.servedMSISDN violates SIZE constraint");
        }
        if (this.msNetworkCapability !== undefined && (this.msNetworkCapability.length < 1 || this.msNetworkCapability.length > 8)) {
            throw new ASN1SizeError("SGSNSMORecord.msNetworkCapability violates SIZE constraint");
        }
        if (this.serviceCentre !== undefined && (this.serviceCentre.length < 1 || this.serviceCentre.length > 20)) {
            throw new ASN1SizeError("SGSNSMORecord.serviceCentre violates SIZE constraint");
        }
        if (this.recordingEntity !== undefined && (this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("SGSNSMORecord.recordingEntity violates SIZE constraint");
        }
        if (this.locationArea !== undefined && (this.locationArea.length !== 2)) {
            throw new ASN1SizeError("SGSNSMORecord.locationArea violates SIZE constraint");
        }
        if (this.routingArea !== undefined && (this.routingArea.length !== 1)) {
            throw new ASN1SizeError("SGSNSMORecord.routingArea violates SIZE constraint");
        }
        if (this.cellIdentifier !== undefined && (this.cellIdentifier.length !== 2)) {
            throw new ASN1SizeError("SGSNSMORecord.cellIdentifier violates SIZE constraint");
        }
        if ((this.eventTimeStamp.length !== 9)) {
            throw new ASN1SizeError("SGSNSMORecord.eventTimeStamp violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGSNSMORecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SGSNSMORecord.localSequenceNumber violates INTEGER range");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("SGSNSMORecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SGSNSMORecord.rATType violates INTEGER range");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGSNSMORecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.userLocationInfoTime !== undefined && (this.userLocationInfoTime.length !== 9)) {
            throw new ASN1SizeError("SGSNSMORecord.userLocationInfoTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGSNSMORecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNSMORecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNSMORecord`.
     * @returns {SGSNSMORecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNSMORecord)]: (SGSNSMORecord)[_K] }): SGSNSMORecord {
        return new SGSNSMORecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.msNetworkCapability, _o.serviceCentre, _o.recordingEntity, _o.locationArea, _o.routingArea, _o.cellIdentifier, _o.messageReference, _o.eventTimeStamp, _o.smsResult, _o.recordExtensions, _o.nodeID, _o.localSequenceNumber, _o.chargingCharacteristics, _o.rATType, _o.destinationNumber, _o.cAMELInformationSMS, _o.chChSelectionMode, _o.servingNodeType, _o.servingNodeAddress, _o.servingNodeiPv6Address, _o.mMEName, _o.mMERealm, _o.userLocationInformation, _o.retransmission, _o.servingNodePLMNIdentifier, _o.userLocationInfoTime, _o.cNOperatorSelectionEnt);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `servingNodeType`
         * @public
         * @static
         */

    public static _enum_for_servingNodeType = _enum_for_ServingNodeType;        /**
         * @summary The enum used as the type of the component `cNOperatorSelectionEnt`
         * @public
         * @static
         */

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;
}

/**
 * @summary The Leading Root Component Types of SGSNSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNSMORecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msNetworkCapability", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceCentre", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("locationArea", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("routingArea", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellIdentifier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("eventTimeStamp", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("smsResult", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("destinationNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("cAMELInformationSMS", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servingNodeAddress", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("mMEName", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("mMERealm", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of SGSNSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNSMORecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNSMORecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNSMORecord: $.ASN1Decoder<SGSNSMORecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNSMORecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNSMORecord (el: _Element): SGSNSMORecord {
    if (!_cached_decoder_for_SGSNSMORecord) { _cached_decoder_for_SGSNSMORecord = function (el: _Element): SGSNSMORecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let msNetworkCapability: OPTIONAL<OCTET_STRING>;
    let serviceCentre: OPTIONAL<OCTET_STRING>;
    let recordingEntity: OPTIONAL<OCTET_STRING>;
    let locationArea: OPTIONAL<OCTET_STRING>;
    let routingArea: OPTIONAL<OCTET_STRING>;
    let cellIdentifier: OPTIONAL<OCTET_STRING>;
    let messageReference!: OCTET_STRING;
    let eventTimeStamp!: OCTET_STRING;
    let smsResult: OPTIONAL<Diagnostics>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let nodeID: OPTIONAL<IA5String>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let chargingCharacteristics!: OCTET_STRING;
    let rATType: OPTIONAL<INTEGER>;
    let destinationNumber: OPTIONAL<OCTET_STRING>;
    let cAMELInformationSMS: OPTIONAL<CAMELInformationSMS>;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let servingNodeType!: ServingNodeType;
    let servingNodeAddress: OPTIONAL<GSNAddress>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress>;
    let mMEName: OPTIONAL<OCTET_STRING>;
    let mMERealm: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let retransmission: OPTIONAL<NULL>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msNetworkCapability": (_el: _Element): void => { msNetworkCapability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceCentre": (_el: _Element): void => { serviceCentre = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationArea": (_el: _Element): void => { locationArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingArea": (_el: _Element): void => { routingArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellIdentifier": (_el: _Element): void => { cellIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimeStamp": (_el: _Element): void => { eventTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsResult": (_el: _Element): void => { smsResult = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "destinationNumber": (_el: _Element): void => { destinationNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELInformationSMS": (_el: _Element): void => { cAMELInformationSMS = $._decode_implicit<CAMELInformationSMS>(() => _decode_CAMELInformationSMS)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType>(() => _decode_ServingNodeType)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "mMEName": (_el: _Element): void => { mMEName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMERealm": (_el: _Element): void => { mMERealm = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNSMORecord,
        _extension_additions_list_spec_for_SGSNSMORecord,
        _root_component_type_list_2_spec_for_SGSNSMORecord,
        undefined,
    );
    return new SGSNSMORecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        msNetworkCapability,
        serviceCentre,
        recordingEntity,
        locationArea,
        routingArea,
        cellIdentifier,
        messageReference,
        eventTimeStamp,
        smsResult,
        recordExtensions,
        nodeID,
        localSequenceNumber,
        chargingCharacteristics,
        rATType,
        destinationNumber,
        cAMELInformationSMS,
        chChSelectionMode,
        servingNodeType,
        servingNodeAddress,
        servingNodeiPv6Address,
        mMEName,
        mMERealm,
        userLocationInformation,
        retransmission,
        servingNodePLMNIdentifier,
        userLocationInfoTime,
        cNOperatorSelectionEnt
    );
}; }
    return _cached_decoder_for_SGSNSMORecord(el);
}

let _cached_encoder_for_SGSNSMORecord: $.ASN1Encoder<SGSNSMORecord> | null = null;

/**
 * @summary Encodes a(n) SGSNSMORecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNSMORecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNSMORecord (value: SGSNSMORecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNSMORecord) { _cached_encoder_for_SGSNSMORecord = function (value: SGSNSMORecord, _elGetter: $.ASN1Encoder<SGSNSMORecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.msNetworkCapability !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.msNetworkCapability, $.BER));
    }
    if (value.serviceCentre !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.serviceCentre, $.BER));
    }
    if (value.recordingEntity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    }
    if (value.locationArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.locationArea, $.BER));
    }
    if (value.routingArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.routingArea, $.BER));
    }
    if (value.cellIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.cellIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.eventTimeStamp, $.BER));
    if (value.smsResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_Diagnostics, $.BER)(value.smsResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.destinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.destinationNumber, $.BER));
    }
    if (value.cAMELInformationSMS !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_CAMELInformationSMS, $.BER)(value.cAMELInformationSMS, $.BER));
    }
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => _encode_ServingNodeType, $.BER)(value.servingNodeType, $.BER));
    if (value.servingNodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 22, () => _encode_GSNAddress, $.BER)(value.servingNodeAddress, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 23, () => _encode_GSNAddress, $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.mMEName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.mMEName, $.BER));
    }
    if (value.mMERealm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.mMERealm, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNSMORecord(value, elGetter);
}


/* eslint-enable */
