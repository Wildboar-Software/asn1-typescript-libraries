/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CapExchangeServList, _decode_CapExchangeServList, _encode_CapExchangeServList } from "../CSTA-capability-exchange/CapExchangeServList.ta.mjs";
// export { CapExchangeServList, _decode_CapExchangeServList, _encode_CapExchangeServList } from "../CSTA-capability-exchange/CapExchangeServList.ta.mjs";
import { SystemStatusServList, _decode_SystemStatusServList, _encode_SystemStatusServList } from "../CSTA-capability-exchange/SystemStatusServList.ta.mjs";
// export { SystemStatusServList, _decode_SystemStatusServList, _encode_SystemStatusServList } from "../CSTA-capability-exchange/SystemStatusServList.ta.mjs";
import { MonitoringServList, _decode_MonitoringServList, _encode_MonitoringServList } from "../CSTA-capability-exchange/MonitoringServList.ta.mjs";
// export { MonitoringServList, _decode_MonitoringServList, _encode_MonitoringServList } from "../CSTA-capability-exchange/MonitoringServList.ta.mjs";
import { SnapshotServList, _decode_SnapshotServList, _encode_SnapshotServList } from "../CSTA-capability-exchange/SnapshotServList.ta.mjs";
// export { SnapshotServList, _decode_SnapshotServList, _encode_SnapshotServList } from "../CSTA-capability-exchange/SnapshotServList.ta.mjs";
import { CallControlServList, _decode_CallControlServList, _encode_CallControlServList } from "../CSTA-capability-exchange/CallControlServList.ta.mjs";
// export { CallControlServList, _decode_CallControlServList, _encode_CallControlServList } from "../CSTA-capability-exchange/CallControlServList.ta.mjs";
import { CallControlEvtsList, _decode_CallControlEvtsList, _encode_CallControlEvtsList } from "../CSTA-capability-exchange/CallControlEvtsList.ta.mjs";
// export { CallControlEvtsList, _decode_CallControlEvtsList, _encode_CallControlEvtsList } from "../CSTA-capability-exchange/CallControlEvtsList.ta.mjs";
import { CallAssociatedServList, _decode_CallAssociatedServList, _encode_CallAssociatedServList } from "../CSTA-capability-exchange/CallAssociatedServList.ta.mjs";
// export { CallAssociatedServList, _decode_CallAssociatedServList, _encode_CallAssociatedServList } from "../CSTA-capability-exchange/CallAssociatedServList.ta.mjs";
import { CallAssociatedEvtsList, _decode_CallAssociatedEvtsList, _encode_CallAssociatedEvtsList } from "../CSTA-capability-exchange/CallAssociatedEvtsList.ta.mjs";
// export { CallAssociatedEvtsList, _decode_CallAssociatedEvtsList, _encode_CallAssociatedEvtsList } from "../CSTA-capability-exchange/CallAssociatedEvtsList.ta.mjs";
import { MediaServList, _decode_MediaServList, _encode_MediaServList } from "../CSTA-capability-exchange/MediaServList.ta.mjs";
// export { MediaServList, _decode_MediaServList, _encode_MediaServList } from "../CSTA-capability-exchange/MediaServList.ta.mjs";
import { MediaEvtsList, _decode_MediaEvtsList, _encode_MediaEvtsList } from "../CSTA-capability-exchange/MediaEvtsList.ta.mjs";
// export { MediaEvtsList, _decode_MediaEvtsList, _encode_MediaEvtsList } from "../CSTA-capability-exchange/MediaEvtsList.ta.mjs";
import { RouteingServList, _decode_RouteingServList, _encode_RouteingServList } from "../CSTA-capability-exchange/RouteingServList.ta.mjs";
// export { RouteingServList, _decode_RouteingServList, _encode_RouteingServList } from "../CSTA-capability-exchange/RouteingServList.ta.mjs";
import { PhysDevServList, _decode_PhysDevServList, _encode_PhysDevServList } from "../CSTA-capability-exchange/PhysDevServList.ta.mjs";
// export { PhysDevServList, _decode_PhysDevServList, _encode_PhysDevServList } from "../CSTA-capability-exchange/PhysDevServList.ta.mjs";
import { PhysDevEvtsList, _decode_PhysDevEvtsList, _encode_PhysDevEvtsList } from "../CSTA-capability-exchange/PhysDevEvtsList.ta.mjs";
// export { PhysDevEvtsList, _decode_PhysDevEvtsList, _encode_PhysDevEvtsList } from "../CSTA-capability-exchange/PhysDevEvtsList.ta.mjs";
import { LogicalServList, _decode_LogicalServList, _encode_LogicalServList } from "../CSTA-capability-exchange/LogicalServList.ta.mjs";
// export { LogicalServList, _decode_LogicalServList, _encode_LogicalServList } from "../CSTA-capability-exchange/LogicalServList.ta.mjs";
import { LogicalEvtsList, _decode_LogicalEvtsList, _encode_LogicalEvtsList } from "../CSTA-capability-exchange/LogicalEvtsList.ta.mjs";
// export { LogicalEvtsList, _decode_LogicalEvtsList, _encode_LogicalEvtsList } from "../CSTA-capability-exchange/LogicalEvtsList.ta.mjs";
import { DeviceMaintEvtsList, _decode_DeviceMaintEvtsList, _encode_DeviceMaintEvtsList } from "../CSTA-capability-exchange/DeviceMaintEvtsList.ta.mjs";
// export { DeviceMaintEvtsList, _decode_DeviceMaintEvtsList, _encode_DeviceMaintEvtsList } from "../CSTA-capability-exchange/DeviceMaintEvtsList.ta.mjs";
import { IOServicesServList, _decode_IOServicesServList, _encode_IOServicesServList } from "../CSTA-capability-exchange/IOServicesServList.ta.mjs";
// export { IOServicesServList, _decode_IOServicesServList, _encode_IOServicesServList } from "../CSTA-capability-exchange/IOServicesServList.ta.mjs";
import { DataCollectionServList, _decode_DataCollectionServList, _encode_DataCollectionServList } from "../CSTA-capability-exchange/DataCollectionServList.ta.mjs";
// export { DataCollectionServList, _decode_DataCollectionServList, _encode_DataCollectionServList } from "../CSTA-capability-exchange/DataCollectionServList.ta.mjs";
import { VoiceUnitServList, _decode_VoiceUnitServList, _encode_VoiceUnitServList } from "../CSTA-capability-exchange/VoiceUnitServList.ta.mjs";
// export { VoiceUnitServList, _decode_VoiceUnitServList, _encode_VoiceUnitServList } from "../CSTA-capability-exchange/VoiceUnitServList.ta.mjs";
import { VoiceUnitEvtsList, _decode_VoiceUnitEvtsList, _encode_VoiceUnitEvtsList } from "../CSTA-capability-exchange/VoiceUnitEvtsList.ta.mjs";
// export { VoiceUnitEvtsList, _decode_VoiceUnitEvtsList, _encode_VoiceUnitEvtsList } from "../CSTA-capability-exchange/VoiceUnitEvtsList.ta.mjs";
import { CDRServList, _decode_CDRServList, _encode_CDRServList } from "../CSTA-capability-exchange/CDRServList.ta.mjs";
// export { CDRServList, _decode_CDRServList, _encode_CDRServList } from "../CSTA-capability-exchange/CDRServList.ta.mjs";
import { VendorSpecificServList, _decode_VendorSpecificServList, _encode_VendorSpecificServList } from "../CSTA-capability-exchange/VendorSpecificServList.ta.mjs";
// export { VendorSpecificServList, _decode_VendorSpecificServList, _encode_VendorSpecificServList } from "../CSTA-capability-exchange/VendorSpecificServList.ta.mjs";
import { VendorSpecificEvtsList, _decode_VendorSpecificEvtsList, _encode_VendorSpecificEvtsList } from "../CSTA-capability-exchange/VendorSpecificEvtsList.ta.mjs";
// export { VendorSpecificEvtsList, _decode_VendorSpecificEvtsList, _encode_VendorSpecificEvtsList } from "../CSTA-capability-exchange/VendorSpecificEvtsList.ta.mjs";
import { StatusReportingServList, _decode_StatusReportingServList, _encode_StatusReportingServList } from "../CSTA-get-switching-function-capabilities/StatusReportingServList.ta.mjs";
// export { StatusReportingServList, _decode_StatusReportingServList, _encode_StatusReportingServList } from "../CSTA-get-switching-function-capabilities/StatusReportingServList.ta.mjs";
import { LocationServicesServList, _decode_LocationServicesServList, _encode_LocationServicesServList } from "../CSTA-capability-exchange/LocationServicesServList.ta.mjs";
// export { LocationServicesServList, _decode_LocationServicesServList, _encode_LocationServicesServList } from "../CSTA-capability-exchange/LocationServicesServList.ta.mjs";


/**
 * @summary ServEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServEvtsList ::= SEQUENCE
 * {    capExchangeServList             [ 0] IMPLICIT     CapExchangeServList         OPTIONAL,
 *     systemServList                 [ 1] IMPLICIT     SystemStatusServList         OPTIONAL,
 *     monitoringServList             [ 2] IMPLICIT     MonitoringServList         OPTIONAL,
 *     snapshotServList             [ 3] IMPLICIT     SnapshotServList         OPTIONAL,
 *     callControlServList             [ 4] IMPLICIT     CallControlServList         OPTIONAL,
 *     callControlEvtsList             [ 5] IMPLICIT     CallControlEvtsList         OPTIONAL,
 *     callAssociatedServList             [ 6] IMPLICIT     CallAssociatedServList         OPTIONAL,
 *     callAssociatedEvtsList             [ 7] IMPLICIT     CallAssociatedEvtsList         OPTIONAL,
 *     mediaServList                 [ 8] IMPLICIT     MediaServList             OPTIONAL,
 *     mediaEvtsList                 [ 9] IMPLICIT     MediaEvtsList             OPTIONAL,
 *     routeingServList             [10] IMPLICIT     RouteingServList         OPTIONAL,
 *     physDevServList             [11] IMPLICIT     PhysDevServList         OPTIONAL,
 *     physDevEvtsList             [12] IMPLICIT     PhysDevEvtsList         OPTIONAL,
 *     logicalServList             [13] IMPLICIT     LogicalServList         OPTIONAL,
 *     logicalEvtsList             [14] IMPLICIT     LogicalEvtsList         OPTIONAL,
 *     deviceMaintEvtsList             [15] IMPLICIT     DeviceMaintEvtsList         OPTIONAL,
 *     iOServicesServList             [16] IMPLICIT     IOServicesServList         OPTIONAL,
 *     dataCollectionServList             [17] IMPLICIT     DataCollectionServList         OPTIONAL,
 *     voiceUnitServList             [18] IMPLICIT     VoiceUnitServList         OPTIONAL,
 *     voiceUnitEvtsList             [19] IMPLICIT     VoiceUnitEvtsList         OPTIONAL,
 *     cdrServList                 [20] IMPLICIT     CDRServList             OPTIONAL,
 *     vendorSpecificServList             [21] IMPLICIT     VendorSpecificServList         OPTIONAL,
 *     vendorSpecificEvtsList             [22] IMPLICIT     VendorSpecificEvtsList         OPTIONAL,
 *     statusReportingServList         [23] IMPLICIT     StatusReportingServList     OPTIONAL,
 *     locationServList            [24] IMPLICIT    LocationServicesServList    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ServEvtsList {
    constructor (
        /**
         * @summary `capExchangeServList`.
         * @public
         * @readonly
         */
        readonly capExchangeServList: OPTIONAL<CapExchangeServList>,
        /**
         * @summary `systemServList`.
         * @public
         * @readonly
         */
        readonly systemServList: OPTIONAL<SystemStatusServList>,
        /**
         * @summary `monitoringServList`.
         * @public
         * @readonly
         */
        readonly monitoringServList: OPTIONAL<MonitoringServList>,
        /**
         * @summary `snapshotServList`.
         * @public
         * @readonly
         */
        readonly snapshotServList: OPTIONAL<SnapshotServList>,
        /**
         * @summary `callControlServList`.
         * @public
         * @readonly
         */
        readonly callControlServList: OPTIONAL<CallControlServList>,
        /**
         * @summary `callControlEvtsList`.
         * @public
         * @readonly
         */
        readonly callControlEvtsList: OPTIONAL<CallControlEvtsList>,
        /**
         * @summary `callAssociatedServList`.
         * @public
         * @readonly
         */
        readonly callAssociatedServList: OPTIONAL<CallAssociatedServList>,
        /**
         * @summary `callAssociatedEvtsList`.
         * @public
         * @readonly
         */
        readonly callAssociatedEvtsList: OPTIONAL<CallAssociatedEvtsList>,
        /**
         * @summary `mediaServList`.
         * @public
         * @readonly
         */
        readonly mediaServList: OPTIONAL<MediaServList>,
        /**
         * @summary `mediaEvtsList`.
         * @public
         * @readonly
         */
        readonly mediaEvtsList: OPTIONAL<MediaEvtsList>,
        /**
         * @summary `routeingServList`.
         * @public
         * @readonly
         */
        readonly routeingServList: OPTIONAL<RouteingServList>,
        /**
         * @summary `physDevServList`.
         * @public
         * @readonly
         */
        readonly physDevServList: OPTIONAL<PhysDevServList>,
        /**
         * @summary `physDevEvtsList`.
         * @public
         * @readonly
         */
        readonly physDevEvtsList: OPTIONAL<PhysDevEvtsList>,
        /**
         * @summary `logicalServList`.
         * @public
         * @readonly
         */
        readonly logicalServList: OPTIONAL<LogicalServList>,
        /**
         * @summary `logicalEvtsList`.
         * @public
         * @readonly
         */
        readonly logicalEvtsList: OPTIONAL<LogicalEvtsList>,
        /**
         * @summary `deviceMaintEvtsList`.
         * @public
         * @readonly
         */
        readonly deviceMaintEvtsList: OPTIONAL<DeviceMaintEvtsList>,
        /**
         * @summary `iOServicesServList`.
         * @public
         * @readonly
         */
        readonly iOServicesServList: OPTIONAL<IOServicesServList>,
        /**
         * @summary `dataCollectionServList`.
         * @public
         * @readonly
         */
        readonly dataCollectionServList: OPTIONAL<DataCollectionServList>,
        /**
         * @summary `voiceUnitServList`.
         * @public
         * @readonly
         */
        readonly voiceUnitServList: OPTIONAL<VoiceUnitServList>,
        /**
         * @summary `voiceUnitEvtsList`.
         * @public
         * @readonly
         */
        readonly voiceUnitEvtsList: OPTIONAL<VoiceUnitEvtsList>,
        /**
         * @summary `cdrServList`.
         * @public
         * @readonly
         */
        readonly cdrServList: OPTIONAL<CDRServList>,
        /**
         * @summary `vendorSpecificServList`.
         * @public
         * @readonly
         */
        readonly vendorSpecificServList: OPTIONAL<VendorSpecificServList>,
        /**
         * @summary `vendorSpecificEvtsList`.
         * @public
         * @readonly
         */
        readonly vendorSpecificEvtsList: OPTIONAL<VendorSpecificEvtsList>,
        /**
         * @summary `statusReportingServList`.
         * @public
         * @readonly
         */
        readonly statusReportingServList: OPTIONAL<StatusReportingServList>,
        /**
         * @summary `locationServList`.
         * @public
         * @readonly
         */
        readonly locationServList: OPTIONAL<LocationServicesServList>
    ) {}

    /**
     * @summary Restructures an object into a ServEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `ServEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServEvtsList`.
     * @returns {ServEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (ServEvtsList)]: (ServEvtsList)[_K] }): ServEvtsList {
        return new ServEvtsList(_o.capExchangeServList, _o.systemServList, _o.monitoringServList, _o.snapshotServList, _o.callControlServList, _o.callControlEvtsList, _o.callAssociatedServList, _o.callAssociatedEvtsList, _o.mediaServList, _o.mediaEvtsList, _o.routeingServList, _o.physDevServList, _o.physDevEvtsList, _o.logicalServList, _o.logicalEvtsList, _o.deviceMaintEvtsList, _o.iOServicesServList, _o.dataCollectionServList, _o.voiceUnitServList, _o.voiceUnitEvtsList, _o.cdrServList, _o.vendorSpecificServList, _o.vendorSpecificEvtsList, _o.statusReportingServList, _o.locationServList);
    }


}

/**
 * @summary The Leading Root Component Types of ServEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("capExchangeServList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("systemServList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("monitoringServList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("snapshotServList", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("callControlServList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("callControlEvtsList", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("callAssociatedServList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("callAssociatedEvtsList", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("mediaServList", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("mediaEvtsList", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("routeingServList", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("physDevServList", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("physDevEvtsList", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("logicalServList", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("logicalEvtsList", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("deviceMaintEvtsList", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("iOServicesServList", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("dataCollectionServList", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("voiceUnitServList", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("voiceUnitEvtsList", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("cdrServList", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("vendorSpecificServList", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("vendorSpecificEvtsList", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("statusReportingServList", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("locationServList", true, $.hasTag(_TagClass.context, 24), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ServEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServEvtsList: $.ASN1Decoder<ServEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServEvtsList (el: _Element): ServEvtsList {
    if (!_cached_decoder_for_ServEvtsList) { _cached_decoder_for_ServEvtsList = function (el: _Element): ServEvtsList {
    let capExchangeServList: OPTIONAL<CapExchangeServList>;
    let systemServList: OPTIONAL<SystemStatusServList>;
    let monitoringServList: OPTIONAL<MonitoringServList>;
    let snapshotServList: OPTIONAL<SnapshotServList>;
    let callControlServList: OPTIONAL<CallControlServList>;
    let callControlEvtsList: OPTIONAL<CallControlEvtsList>;
    let callAssociatedServList: OPTIONAL<CallAssociatedServList>;
    let callAssociatedEvtsList: OPTIONAL<CallAssociatedEvtsList>;
    let mediaServList: OPTIONAL<MediaServList>;
    let mediaEvtsList: OPTIONAL<MediaEvtsList>;
    let routeingServList: OPTIONAL<RouteingServList>;
    let physDevServList: OPTIONAL<PhysDevServList>;
    let physDevEvtsList: OPTIONAL<PhysDevEvtsList>;
    let logicalServList: OPTIONAL<LogicalServList>;
    let logicalEvtsList: OPTIONAL<LogicalEvtsList>;
    let deviceMaintEvtsList: OPTIONAL<DeviceMaintEvtsList>;
    let iOServicesServList: OPTIONAL<IOServicesServList>;
    let dataCollectionServList: OPTIONAL<DataCollectionServList>;
    let voiceUnitServList: OPTIONAL<VoiceUnitServList>;
    let voiceUnitEvtsList: OPTIONAL<VoiceUnitEvtsList>;
    let cdrServList: OPTIONAL<CDRServList>;
    let vendorSpecificServList: OPTIONAL<VendorSpecificServList>;
    let vendorSpecificEvtsList: OPTIONAL<VendorSpecificEvtsList>;
    let statusReportingServList: OPTIONAL<StatusReportingServList>;
    let locationServList: OPTIONAL<LocationServicesServList>;
    const callbacks: $.DecodingMap = {
        "capExchangeServList": (_el: _Element): void => { capExchangeServList = $._decode_implicit<CapExchangeServList>(() => _decode_CapExchangeServList)(_el); },
        "systemServList": (_el: _Element): void => { systemServList = $._decode_implicit<SystemStatusServList>(() => _decode_SystemStatusServList)(_el); },
        "monitoringServList": (_el: _Element): void => { monitoringServList = $._decode_implicit<MonitoringServList>(() => _decode_MonitoringServList)(_el); },
        "snapshotServList": (_el: _Element): void => { snapshotServList = $._decode_implicit<SnapshotServList>(() => _decode_SnapshotServList)(_el); },
        "callControlServList": (_el: _Element): void => { callControlServList = $._decode_implicit<CallControlServList>(() => _decode_CallControlServList)(_el); },
        "callControlEvtsList": (_el: _Element): void => { callControlEvtsList = $._decode_implicit<CallControlEvtsList>(() => _decode_CallControlEvtsList)(_el); },
        "callAssociatedServList": (_el: _Element): void => { callAssociatedServList = $._decode_implicit<CallAssociatedServList>(() => _decode_CallAssociatedServList)(_el); },
        "callAssociatedEvtsList": (_el: _Element): void => { callAssociatedEvtsList = $._decode_implicit<CallAssociatedEvtsList>(() => _decode_CallAssociatedEvtsList)(_el); },
        "mediaServList": (_el: _Element): void => { mediaServList = $._decode_implicit<MediaServList>(() => _decode_MediaServList)(_el); },
        "mediaEvtsList": (_el: _Element): void => { mediaEvtsList = $._decode_implicit<MediaEvtsList>(() => _decode_MediaEvtsList)(_el); },
        "routeingServList": (_el: _Element): void => { routeingServList = $._decode_implicit<RouteingServList>(() => _decode_RouteingServList)(_el); },
        "physDevServList": (_el: _Element): void => { physDevServList = $._decode_implicit<PhysDevServList>(() => _decode_PhysDevServList)(_el); },
        "physDevEvtsList": (_el: _Element): void => { physDevEvtsList = $._decode_implicit<PhysDevEvtsList>(() => _decode_PhysDevEvtsList)(_el); },
        "logicalServList": (_el: _Element): void => { logicalServList = $._decode_implicit<LogicalServList>(() => _decode_LogicalServList)(_el); },
        "logicalEvtsList": (_el: _Element): void => { logicalEvtsList = $._decode_implicit<LogicalEvtsList>(() => _decode_LogicalEvtsList)(_el); },
        "deviceMaintEvtsList": (_el: _Element): void => { deviceMaintEvtsList = $._decode_implicit<DeviceMaintEvtsList>(() => _decode_DeviceMaintEvtsList)(_el); },
        "iOServicesServList": (_el: _Element): void => { iOServicesServList = $._decode_implicit<IOServicesServList>(() => _decode_IOServicesServList)(_el); },
        "dataCollectionServList": (_el: _Element): void => { dataCollectionServList = $._decode_implicit<DataCollectionServList>(() => _decode_DataCollectionServList)(_el); },
        "voiceUnitServList": (_el: _Element): void => { voiceUnitServList = $._decode_implicit<VoiceUnitServList>(() => _decode_VoiceUnitServList)(_el); },
        "voiceUnitEvtsList": (_el: _Element): void => { voiceUnitEvtsList = $._decode_implicit<VoiceUnitEvtsList>(() => _decode_VoiceUnitEvtsList)(_el); },
        "cdrServList": (_el: _Element): void => { cdrServList = $._decode_implicit<CDRServList>(() => _decode_CDRServList)(_el); },
        "vendorSpecificServList": (_el: _Element): void => { vendorSpecificServList = $._decode_implicit<VendorSpecificServList>(() => _decode_VendorSpecificServList)(_el); },
        "vendorSpecificEvtsList": (_el: _Element): void => { vendorSpecificEvtsList = $._decode_implicit<VendorSpecificEvtsList>(() => _decode_VendorSpecificEvtsList)(_el); },
        "statusReportingServList": (_el: _Element): void => { statusReportingServList = $._decode_implicit<StatusReportingServList>(() => _decode_StatusReportingServList)(_el); },
        "locationServList": (_el: _Element): void => { locationServList = $._decode_implicit<LocationServicesServList>(() => _decode_LocationServicesServList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServEvtsList,
        _extension_additions_list_spec_for_ServEvtsList,
        _root_component_type_list_2_spec_for_ServEvtsList,
        undefined,
    );
    return new ServEvtsList(
        capExchangeServList,
        systemServList,
        monitoringServList,
        snapshotServList,
        callControlServList,
        callControlEvtsList,
        callAssociatedServList,
        callAssociatedEvtsList,
        mediaServList,
        mediaEvtsList,
        routeingServList,
        physDevServList,
        physDevEvtsList,
        logicalServList,
        logicalEvtsList,
        deviceMaintEvtsList,
        iOServicesServList,
        dataCollectionServList,
        voiceUnitServList,
        voiceUnitEvtsList,
        cdrServList,
        vendorSpecificServList,
        vendorSpecificEvtsList,
        statusReportingServList,
        locationServList
    );
}; }
    return _cached_decoder_for_ServEvtsList(el);
}

let _cached_encoder_for_ServEvtsList: $.ASN1Encoder<ServEvtsList> | null = null;

/**
 * @summary Encodes a(n) ServEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_ServEvtsList (value: ServEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServEvtsList) { _cached_encoder_for_ServEvtsList = function (value: ServEvtsList, elGetter: $.ASN1Encoder<ServEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capExchangeServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CapExchangeServList, $.BER)(value.capExchangeServList, $.BER)),
            /* IF_ABSENT  */ ((value.systemServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SystemStatusServList, $.BER)(value.systemServList, $.BER)),
            /* IF_ABSENT  */ ((value.monitoringServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MonitoringServList, $.BER)(value.monitoringServList, $.BER)),
            /* IF_ABSENT  */ ((value.snapshotServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SnapshotServList, $.BER)(value.snapshotServList, $.BER)),
            /* IF_ABSENT  */ ((value.callControlServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallControlServList, $.BER)(value.callControlServList, $.BER)),
            /* IF_ABSENT  */ ((value.callControlEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallControlEvtsList, $.BER)(value.callControlEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.callAssociatedServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallAssociatedServList, $.BER)(value.callAssociatedServList, $.BER)),
            /* IF_ABSENT  */ ((value.callAssociatedEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallAssociatedEvtsList, $.BER)(value.callAssociatedEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MediaServList, $.BER)(value.mediaServList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MediaEvtsList, $.BER)(value.mediaEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.routeingServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_RouteingServList, $.BER)(value.routeingServList, $.BER)),
            /* IF_ABSENT  */ ((value.physDevServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_PhysDevServList, $.BER)(value.physDevServList, $.BER)),
            /* IF_ABSENT  */ ((value.physDevEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_PhysDevEvtsList, $.BER)(value.physDevEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.logicalServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_LogicalServList, $.BER)(value.logicalServList, $.BER)),
            /* IF_ABSENT  */ ((value.logicalEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_LogicalEvtsList, $.BER)(value.logicalEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.deviceMaintEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_DeviceMaintEvtsList, $.BER)(value.deviceMaintEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.iOServicesServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_IOServicesServList, $.BER)(value.iOServicesServList, $.BER)),
            /* IF_ABSENT  */ ((value.dataCollectionServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_DataCollectionServList, $.BER)(value.dataCollectionServList, $.BER)),
            /* IF_ABSENT  */ ((value.voiceUnitServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_VoiceUnitServList, $.BER)(value.voiceUnitServList, $.BER)),
            /* IF_ABSENT  */ ((value.voiceUnitEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_VoiceUnitEvtsList, $.BER)(value.voiceUnitEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.cdrServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_CDRServList, $.BER)(value.cdrServList, $.BER)),
            /* IF_ABSENT  */ ((value.vendorSpecificServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_VendorSpecificServList, $.BER)(value.vendorSpecificServList, $.BER)),
            /* IF_ABSENT  */ ((value.vendorSpecificEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_VendorSpecificEvtsList, $.BER)(value.vendorSpecificEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.statusReportingServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_StatusReportingServList, $.BER)(value.statusReportingServList, $.BER)),
            /* IF_ABSENT  */ ((value.locationServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_LocationServicesServList, $.BER)(value.locationServList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServEvtsList(value, elGetter);
}


/* eslint-enable */
