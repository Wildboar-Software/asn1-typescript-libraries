/* eslint-disable */
import {
    IA5String,
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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MONTEChargingDataTypes/RecordType.ta.mjs";
import { MonitoringEventConfigurationActivity, _decode_MonitoringEventConfigurationActivity, _encode_MonitoringEventConfigurationActivity, _enum_for_MonitoringEventConfigurationActivity } from "../MONTEChargingDataTypes/MonitoringEventConfigurationActivity.ta.mjs";
import { MonitoringType, _decode_MonitoringType, _encode_MonitoringType, _enum_for_MonitoringType } from "../MONTEChargingDataTypes/MonitoringType.ta.mjs";
import { ReachabilityConfiguration, _decode_ReachabilityConfiguration, _encode_ReachabilityConfiguration } from "../MONTEChargingDataTypes/ReachabilityConfiguration.ta.mjs";
import { LocationType, _decode_LocationType, _encode_LocationType, _enum_for_LocationType } from "../MONTEChargingDataTypes/LocationType.ta.mjs";
import { Accuracy, _decode_Accuracy, _encode_Accuracy, _enum_for_Accuracy } from "../MONTEChargingDataTypes/Accuracy.ta.mjs";
import { EPSLocationInfo, _decode_EPSLocationInfo, _encode_EPSLocationInfo } from "../MONTEChargingDataTypes/EPSLocationInfo.ta.mjs";
import { MonitoringEventConfigStatus, _decode_MonitoringEventConfigStatus, _encode_MonitoringEventConfigStatus } from "../MONTEChargingDataTypes/MonitoringEventConfigStatus.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MONTEChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MECORecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MECORecord ::= SET {
 *    recordType                             [0] IMPLICIT RecordType,
 *    retransmission                         [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID                       [2] IMPLICIT UTF8String OPTIONAL,
 *    nodeID                                 [3] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordTimeStamp                        [4] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    eventTimestamp                         [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    monitoringEventConfigurationActivity   [6] IMPLICIT MonitoringEventConfigurationActivity OPTIONAL,
 *    sCEFReferenceID                        [7] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    sCEFID                                 [8] IMPLICIT OCTET STRING OPTIONAL,
 *    monitoringType                         [9] IMPLICIT MonitoringType OPTIONAL,
 *    maximumNumberofReports                 [10] IMPLICIT INTEGER OPTIONAL,
 *    monitoringDuration                     [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    chargeablePartyIdentifier              [12] IMPLICIT UTF8String OPTIONAL,
 *    monitoredUser                          [13] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    maximumDetectionTime                   [14] IMPLICIT INTEGER OPTIONAL,
 *    localRecordSequenceNumber              [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    reachabilityConfiguration              [16] IMPLICIT ReachabilityConfiguration OPTIONAL,
 *    locationType                           [17] IMPLICIT LocationType OPTIONAL,
 *    accuracy                               [18] IMPLICIT Accuracy OPTIONAL,
 *    listofLocations                        [19] IMPLICIT SEQUENCE  OF
 *       EPSLocationInfo OPTIONAL,
 *    monitoringEventConfigStatus            [20] IMPLICIT MonitoringEventConfigStatus OPTIONAL,
 *    recordExtensions                       [21] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MECORecord {
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
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordTimeStamp`.
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventTimestamp`.
     * @public
     * @readonly
     */
    readonly eventTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringEventConfigurationActivity`.
     * @public
     * @readonly
     */
    readonly monitoringEventConfigurationActivity: OPTIONAL<MonitoringEventConfigurationActivity>;
    /**
     * @summary `sCEFReferenceID`.
     * @public
     * @readonly
     */
    readonly sCEFReferenceID: OPTIONAL<INTEGER>;
    /**
     * @summary `sCEFID`.
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringType`.
     * @public
     * @readonly
     */
    readonly monitoringType: OPTIONAL<MonitoringType>;
    /**
     * @summary `maximumNumberofReports`.
     * @public
     * @readonly
     */
    readonly maximumNumberofReports: OPTIONAL<INTEGER>;
    /**
     * @summary `monitoringDuration`.
     * @public
     * @readonly
     */
    readonly monitoringDuration: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargeablePartyIdentifier`.
     * @public
     * @readonly
     */
    readonly chargeablePartyIdentifier: OPTIONAL<UTF8String>;
    /**
     * @summary `monitoredUser`.
     * @public
     * @readonly
     */
    readonly monitoredUser: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `maximumDetectionTime`.
     * @public
     * @readonly
     */
    readonly maximumDetectionTime: OPTIONAL<INTEGER>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `reachabilityConfiguration`.
     * @public
     * @readonly
     */
    readonly reachabilityConfiguration: OPTIONAL<ReachabilityConfiguration>;
    /**
     * @summary `locationType`.
     * @public
     * @readonly
     */
    readonly locationType: OPTIONAL<LocationType>;
    /**
     * @summary `accuracy`.
     * @public
     * @readonly
     */
    readonly accuracy: OPTIONAL<Accuracy>;
    /**
     * @summary `listofLocations`.
     * @public
     * @readonly
     */
    readonly listofLocations: OPTIONAL<EPSLocationInfo[]>;
    /**
     * @summary `monitoringEventConfigStatus`.
     * @public
     * @readonly
     */
    readonly monitoringEventConfigStatus: OPTIONAL<MonitoringEventConfigStatus>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        nodeID: OPTIONAL<IA5String>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        eventTimestamp: OPTIONAL<OCTET_STRING>,
        monitoringEventConfigurationActivity: OPTIONAL<MonitoringEventConfigurationActivity>,
        sCEFReferenceID: OPTIONAL<INTEGER>,
        sCEFID: OPTIONAL<OCTET_STRING>,
        monitoringType: OPTIONAL<MonitoringType>,
        maximumNumberofReports: OPTIONAL<INTEGER>,
        monitoringDuration: OPTIONAL<OCTET_STRING>,
        chargeablePartyIdentifier: OPTIONAL<UTF8String>,
        monitoredUser: OPTIONAL<OCTET_STRING>,
        maximumDetectionTime: OPTIONAL<INTEGER>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        reachabilityConfiguration: OPTIONAL<ReachabilityConfiguration>,
        locationType: OPTIONAL<LocationType>,
        accuracy: OPTIONAL<Accuracy>,
        listofLocations: OPTIONAL<EPSLocationInfo[]>,
        monitoringEventConfigStatus: OPTIONAL<MonitoringEventConfigStatus>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.nodeID = nodeID;
        this.recordTimeStamp = recordTimeStamp;
        this.eventTimestamp = eventTimestamp;
        this.monitoringEventConfigurationActivity = monitoringEventConfigurationActivity;
        this.sCEFReferenceID = sCEFReferenceID;
        this.sCEFID = sCEFID;
        this.monitoringType = monitoringType;
        this.maximumNumberofReports = maximumNumberofReports;
        this.monitoringDuration = monitoringDuration;
        this.chargeablePartyIdentifier = chargeablePartyIdentifier;
        this.monitoredUser = monitoredUser;
        this.maximumDetectionTime = maximumDetectionTime;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.reachabilityConfiguration = reachabilityConfiguration;
        this.locationType = locationType;
        this.accuracy = accuracy;
        this.listofLocations = listofLocations;
        this.monitoringEventConfigStatus = monitoringEventConfigStatus;
        this.recordExtensions = recordExtensions;
    
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("MECORecord.nodeID violates SIZE constraint");
        }
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MECORecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.eventTimestamp !== undefined && (this.eventTimestamp.length !== 9)) {
            throw new ASN1SizeError("MECORecord.eventTimestamp violates SIZE constraint");
        }
        if (this.sCEFReferenceID !== undefined && (this.sCEFReferenceID < 0 || this.sCEFReferenceID > 4294967295)) {
            throw new ASN1OverflowError("MECORecord.sCEFReferenceID violates INTEGER range");
        }
        if (this.monitoringDuration !== undefined && (this.monitoringDuration.length !== 9)) {
            throw new ASN1SizeError("MECORecord.monitoringDuration violates SIZE constraint");
        }
        if (this.monitoredUser !== undefined && (this.monitoredUser.length < 3 || this.monitoredUser.length > 8)) {
            throw new ASN1SizeError("MECORecord.monitoredUser violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MECORecord.localRecordSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MECORecord
     * @description
     * 
     * This takes an `object` and converts it to a `MECORecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MECORecord`.
     * @returns {MECORecord}
     */
    public static _from_object (_o: { [_K in keyof (MECORecord)]: (MECORecord)[_K] }): MECORecord {
        return new MECORecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.nodeID, _o.recordTimeStamp, _o.eventTimestamp, _o.monitoringEventConfigurationActivity, _o.sCEFReferenceID, _o.sCEFID, _o.monitoringType, _o.maximumNumberofReports, _o.monitoringDuration, _o.chargeablePartyIdentifier, _o.monitoredUser, _o.maximumDetectionTime, _o.localRecordSequenceNumber, _o.reachabilityConfiguration, _o.locationType, _o.accuracy, _o.listofLocations, _o.monitoringEventConfigStatus, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `monitoringEventConfigurationActivity`
         * @public
         * @static
         */

    public static _enum_for_monitoringEventConfigurationActivity = _enum_for_MonitoringEventConfigurationActivity;        /**
         * @summary The enum used as the type of the component `monitoringType`
         * @public
         * @static
         */

    public static _enum_for_monitoringType = _enum_for_MonitoringType;        /**
         * @summary The enum used as the type of the component `locationType`
         * @public
         * @static
         */

    public static _enum_for_locationType = _enum_for_LocationType;        /**
         * @summary The enum used as the type of the component `accuracy`
         * @public
         * @static
         */

    public static _enum_for_accuracy = _enum_for_Accuracy;
}

/**
 * @summary The Leading Root Component Types of MECORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MECORecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eventTimestamp", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("monitoringEventConfigurationActivity", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sCEFReferenceID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sCEFID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("monitoringType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("maximumNumberofReports", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("monitoringDuration", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("chargeablePartyIdentifier", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("monitoredUser", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("maximumDetectionTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("reachabilityConfiguration", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("locationType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("accuracy", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("listofLocations", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("monitoringEventConfigStatus", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of MECORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MECORecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MECORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MECORecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MECORecord: $.ASN1Decoder<MECORecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MECORecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MECORecord (el: _Element): MECORecord {
    if (!_cached_decoder_for_MECORecord) { _cached_decoder_for_MECORecord = function (el: _Element): MECORecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let nodeID: OPTIONAL<IA5String>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let eventTimestamp: OPTIONAL<OCTET_STRING>;
    let monitoringEventConfigurationActivity: OPTIONAL<MonitoringEventConfigurationActivity>;
    let sCEFReferenceID: OPTIONAL<INTEGER>;
    let sCEFID: OPTIONAL<OCTET_STRING>;
    let monitoringType: OPTIONAL<MonitoringType>;
    let maximumNumberofReports: OPTIONAL<INTEGER>;
    let monitoringDuration: OPTIONAL<OCTET_STRING>;
    let chargeablePartyIdentifier: OPTIONAL<UTF8String>;
    let monitoredUser: OPTIONAL<OCTET_STRING>;
    let maximumDetectionTime: OPTIONAL<INTEGER>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let reachabilityConfiguration: OPTIONAL<ReachabilityConfiguration>;
    let locationType: OPTIONAL<LocationType>;
    let accuracy: OPTIONAL<Accuracy>;
    let listofLocations: OPTIONAL<EPSLocationInfo[]>;
    let monitoringEventConfigStatus: OPTIONAL<MonitoringEventConfigStatus>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimestamp": (_el: _Element): void => { eventTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringEventConfigurationActivity": (_el: _Element): void => { monitoringEventConfigurationActivity = $._decode_implicit<MonitoringEventConfigurationActivity>(() => _decode_MonitoringEventConfigurationActivity)(_el); },
        "sCEFReferenceID": (_el: _Element): void => { sCEFReferenceID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringType": (_el: _Element): void => { monitoringType = $._decode_implicit<MonitoringType>(() => _decode_MonitoringType)(_el); },
        "maximumNumberofReports": (_el: _Element): void => { maximumNumberofReports = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "monitoringDuration": (_el: _Element): void => { monitoringDuration = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargeablePartyIdentifier": (_el: _Element): void => { chargeablePartyIdentifier = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "monitoredUser": (_el: _Element): void => { monitoredUser = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "maximumDetectionTime": (_el: _Element): void => { maximumDetectionTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "reachabilityConfiguration": (_el: _Element): void => { reachabilityConfiguration = $._decode_implicit<ReachabilityConfiguration>(() => _decode_ReachabilityConfiguration)(_el); },
        "locationType": (_el: _Element): void => { locationType = $._decode_implicit<LocationType>(() => _decode_LocationType)(_el); },
        "accuracy": (_el: _Element): void => { accuracy = $._decode_implicit<Accuracy>(() => _decode_Accuracy)(_el); },
        "listofLocations": (_el: _Element): void => { listofLocations = $._decode_implicit<EPSLocationInfo[]>(() => $._decodeSequenceOf<EPSLocationInfo>(() => _decode_EPSLocationInfo))(_el); },
        "monitoringEventConfigStatus": (_el: _Element): void => { monitoringEventConfigStatus = $._decode_implicit<MonitoringEventConfigStatus>(() => _decode_MonitoringEventConfigStatus)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MECORecord,
        _extension_additions_list_spec_for_MECORecord,
        _root_component_type_list_2_spec_for_MECORecord,
        undefined,
    );
    return new MECORecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        nodeID,
        recordTimeStamp,
        eventTimestamp,
        monitoringEventConfigurationActivity,
        sCEFReferenceID,
        sCEFID,
        monitoringType,
        maximumNumberofReports,
        monitoringDuration,
        chargeablePartyIdentifier,
        monitoredUser,
        maximumDetectionTime,
        localRecordSequenceNumber,
        reachabilityConfiguration,
        locationType,
        accuracy,
        listofLocations,
        monitoringEventConfigStatus,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MECORecord(el);
}

let _cached_encoder_for_MECORecord: $.ASN1Encoder<MECORecord> | null = null;

/**
 * @summary Encodes a(n) MECORecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MECORecord, encoded as an ASN.1 Element.
 */
export
function _encode_MECORecord (value: MECORecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MECORecord) { _cached_encoder_for_MECORecord = function (value: MECORecord, _elGetter: $.ASN1Encoder<MECORecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.eventTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.eventTimestamp, $.BER));
    }
    if (value.monitoringEventConfigurationActivity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MonitoringEventConfigurationActivity, $.BER)(value.monitoringEventConfigurationActivity, $.BER));
    }
    if (value.sCEFReferenceID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.sCEFReferenceID, $.BER));
    }
    if (value.sCEFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.sCEFID, $.BER));
    }
    if (value.monitoringType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MonitoringType, $.BER)(value.monitoringType, $.BER));
    }
    if (value.maximumNumberofReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maximumNumberofReports, $.BER));
    }
    if (value.monitoringDuration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.monitoringDuration, $.BER));
    }
    if (value.chargeablePartyIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.chargeablePartyIdentifier, $.BER));
    }
    if (value.monitoredUser !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.monitoredUser, $.BER));
    }
    if (value.maximumDetectionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.maximumDetectionTime, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.reachabilityConfiguration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_ReachabilityConfiguration, $.BER)(value.reachabilityConfiguration, $.BER));
    }
    if (value.locationType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_LocationType, $.BER)(value.locationType, $.BER));
    }
    if (value.accuracy !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_Accuracy, $.BER)(value.accuracy, $.BER));
    }
    if (value.listofLocations !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<EPSLocationInfo>(() => _encode_EPSLocationInfo, $.BER), $.BER)(value.listofLocations, $.BER));
    }
    if (value.monitoringEventConfigStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_MonitoringEventConfigStatus, $.BER)(value.monitoringEventConfigStatus, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MECORecord(value, elGetter);
}


/* eslint-enable */
