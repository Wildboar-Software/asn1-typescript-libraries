/* eslint-disable */
import {
    type IA5String,
    type INTEGER,
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MONTEChargingDataTypes/RecordType.ta.mjs";
import { MonitoringEventReportData, _decode_MonitoringEventReportData, _encode_MonitoringEventReportData } from "../MONTEChargingDataTypes/MonitoringEventReportData.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MONTEChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MERERecord
 * @description
 *
 * Monitoring Event Report CDR (ME-RE-CDR). If charging is
 * enabled, a record is produced for a set of Monitoring Event
 * reports sent by the MECN. Normally the record holds one report.
 * A burst of reports in a short interval may be treated as one
 * charging event. The CDF may then emit one CDR for the burst or
 * one CDR per report; which one is implementation specific.
 *
 * The chargeable event is a report sent. That includes a
 * standalone report and immediate reporting in the configuration
 * answer. It is sent to the CDF as Charging Data Request[Event].
 *
 * Table 6.1.3.3.1 also lists Record Opening Time (category OC).
 * This SET does not include it. That table lists Local Record
 * Sequence Number twice; the SET contains it once.
 *
 * Field categories follow TS 32.240 clause 5.4, as applied by
 * clause 6.1.3.1. Clause 3.1 defines M, C, OM and OC. This table
 * also prints Oc.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 5.2.1, 5.2.2, 5.2.3 and
 * 6.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MERERecord ::= SET {
 *    recordType                        [0] IMPLICIT RecordType,
 *    retransmission                    [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID                  [2] IMPLICIT UTF8String OPTIONAL,
 *    nodeID                            [3] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordTimeStamp                   [4] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localRecordSequenceNumber         [5] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    listofMonitoringEventReportData   [6] IMPLICIT SEQUENCE  OF
 *       MonitoringEventReportData OPTIONAL,
 *    recordExtensions                  [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MERERecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. Monitoring Event Report. Set this to
     * `RecordType_mERERecord` (104). On Rf the corresponding
     * information element is Monitoring Event Functionality.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.3, 6.3.1.2 and 6.4.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @description
     *
     * Category Oc. Present when information from retransmitted
     * Accounting Requests has been used in this CDR.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * Category OM. Indicates that the CDR applies to the Monitoring
     * Event service. Bound to Service-Context-Id.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.3 and 6.4.
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * Category OM. Name of the recording entity. Bound to Node-ID.
     * The recording MECN is an MME, an SGSN, or an IWK-SCEF.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 4.2, 6.1.3.3 and 6.4.
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordTimeStamp`.
     * @description
     *
     * Category OM. Date and time when the CDR was produced.
     * TS 32.278 does not define the nine-octet encoding.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @description
     *
     * Category OM. Consecutive record number created by this node.
     * Allocated sequentially across all CDR types.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `listofMonitoringEventReportData`.
     * @description
     *
     * Category OM. Charging information for the reports in this
     * CDR, one `MonitoringEventReportData` per report. On Rf,
     * Monitoring Event Report Data (category Oc) is repeated for
     * each report and is sent only for reporting.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.3, 6.3.1.2 and 6.3.3.
     *
     * @public
     * @readonly
     */
    readonly listofMonitoringEventReportData: OPTIONAL<MonitoringEventReportData[]>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Category OC. Operator or manufacturer extensions to the
     * record. Present when an extension exists.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        retransmission?: OPTIONAL<NULL>,
        serviceContextID?: OPTIONAL<UTF8String>,
        nodeID?: OPTIONAL<IA5String>,
        recordTimeStamp?: OPTIONAL<OCTET_STRING>,
        localRecordSequenceNumber?: OPTIONAL<INTEGER>,
        listofMonitoringEventReportData?: OPTIONAL<MonitoringEventReportData[]>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.nodeID = nodeID;
        this.recordTimeStamp = recordTimeStamp;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.listofMonitoringEventReportData = listofMonitoringEventReportData;
        this.recordExtensions = recordExtensions;
    
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("MERERecord.nodeID violates SIZE constraint");
        }
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MERERecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MERERecord.localRecordSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MERERecord
     * @description
     * 
     * This takes an `object` and converts it to a `MERERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MERERecord`.
     * @returns {MERERecord}
     */
    public static _from_object (_o: { [_K in keyof (MERERecord)]: (MERERecord)[_K] }): MERERecord {
        return new MERERecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.nodeID, _o.recordTimeStamp, _o.localRecordSequenceNumber, _o.listofMonitoringEventReportData, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of MERERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MERERecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("listofMonitoringEventReportData", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MERERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MERERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MERERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MERERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MERERecord: $.ASN1Decoder<MERERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MERERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MERERecord (el: _Element): MERERecord {
    if (!_cached_decoder_for_MERERecord) { _cached_decoder_for_MERERecord = function (el: _Element): MERERecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let nodeID: OPTIONAL<IA5String>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let listofMonitoringEventReportData: OPTIONAL<MonitoringEventReportData[]>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "listofMonitoringEventReportData": (_el: _Element): void => { listofMonitoringEventReportData = $._decode_implicit<MonitoringEventReportData[]>(() => $._decodeSequenceOf<MonitoringEventReportData>(() => _decode_MonitoringEventReportData))(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MERERecord,
        _extension_additions_list_spec_for_MERERecord,
        _root_component_type_list_2_spec_for_MERERecord,
        undefined,
    );
    return new MERERecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        nodeID,
        recordTimeStamp,
        localRecordSequenceNumber,
        listofMonitoringEventReportData,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MERERecord(el);
}

let _cached_encoder_for_MERERecord: $.ASN1Encoder<MERERecord> | null = null;

/**
 * @summary Encodes a(n) MERERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MERERecord, encoded as an ASN.1 Element.
 */
export
function _encode_MERERecord (value: MERERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MERERecord) { _cached_encoder_for_MERERecord = function (value: MERERecord, _elGetter: $.ASN1Encoder<MERERecord>): _Element {
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
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.listofMonitoringEventReportData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<MonitoringEventReportData>(() => _encode_MonitoringEventReportData, $.BER), $.BER)(value.listofMonitoringEventReportData, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MERERecord(value, elGetter);
}


/* eslint-enable */
