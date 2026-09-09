/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    DeviceCategory,
    _enum_for_DeviceCategory,
    DeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DeviceCategory,
    _encode_DeviceCategory
} from "../CSTA-capability-exchange/DeviceCategory.ta.mjs";

import { GroupDeviceAttributes, _decode_GroupDeviceAttributes, _encode_GroupDeviceAttributes } from "../CSTA-capability-exchange/GroupDeviceAttributes.ta.mjs";

import {
    NamedDeviceTypes,
    _enum_for_NamedDeviceTypes,
    _decode_NamedDeviceTypes,
    _encode_NamedDeviceTypes
} from "../CSTA-capability-exchange/NamedDeviceTypes.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { ACDModels, _decode_ACDModels, _encode_ACDModels } from "../CSTA-capability-exchange/ACDModels.ta.mjs";

import { AgentLogOnModels, _decode_AgentLogOnModels, _encode_AgentLogOnModels } from "../CSTA-capability-exchange/AgentLogOnModels.ta.mjs";

import {
    AppearanceType,
    _enum_for_AppearanceType,
    _decode_AppearanceType,
    _encode_AppearanceType
} from "../CSTA-capability-exchange/AppearanceType.ta.mjs";

import { MiscMonitorCaps, _decode_MiscMonitorCaps, _encode_MiscMonitorCaps } from "../CSTA-capability-exchange/MiscMonitorCaps.ta.mjs";

import { TransAndConfSetup, _decode_TransAndConfSetup, _encode_TransAndConfSetup } from "../CSTA-capability-exchange/TransAndConfSetup.ta.mjs";

import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";

import {
    MonitorMediaClass,
    data /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_MonitorMediaClass,
    _encode_MonitorMediaClass
} from "../CSTA-status-reporting/MonitorMediaClass.ta.mjs";

import { MediaServiceCapsList, _decode_MediaServiceCapsList, _encode_MediaServiceCapsList } from "../CSTA-capability-exchange/MediaServiceCapsList.ta.mjs";

import { ConnectionRateList, _decode_ConnectionRateList, _encode_ConnectionRateList } from "../CSTA-data-call-types/ConnectionRateList.ta.mjs";

import { DelayToleranceList, _decode_DelayToleranceList, _encode_DelayToleranceList } from "../CSTA-data-call-types/DelayToleranceList.ta.mjs";

import { NumberOfChannels, _decode_NumberOfChannels, _encode_NumberOfChannels } from "../CSTA-data-call-types/NumberOfChannels.ta.mjs";

import { MaxChannelBind, _decode_MaxChannelBind, _encode_MaxChannelBind } from "../CSTA-data-call-types/MaxChannelBind.ta.mjs";

import { RouteingServList, _decode_RouteingServList, _encode_RouteingServList } from "../CSTA-capability-exchange/RouteingServList.ta.mjs";

import { LogDevServList, _decode_LogDevServList, _encode_LogDevServList } from "../CSTA-capability-exchange/LogDevServList.ta.mjs";

import { LogDevEvtsList, _decode_LogDevEvtsList, _encode_LogDevEvtsList } from "../CSTA-capability-exchange/LogDevEvtsList.ta.mjs";

import { DeviceMaintEvtsList, _decode_DeviceMaintEvtsList, _encode_DeviceMaintEvtsList } from "../CSTA-capability-exchange/DeviceMaintEvtsList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLogicalDeviceInformationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLogicalDeviceInformationResult ::= SEQUENCE
 * {     deviceCategory                 [ 0] IMPLICIT     DeviceCategory         DEFAULT station,
 *     groupDeviceAttributes             [ 1] IMPLICIT     GroupDeviceAttributes     OPTIONAL,
 *     namedDeviceTypes             [ 2] IMPLICIT     NamedDeviceTypes     OPTIONAL,
 *     shortFormDeviceID             [ 3] DeviceID                 OPTIONAL,
 *     hasPhysicalElement             BOOLEAN,
 *     acdModels                 ACDModels,
 *     agentLogOnModels             [ 4] IMPLICIT     AgentLogOnModels     OPTIONAL,
 *     appearanceAddressable             BOOLEAN,
 *     appearanceType                 AppearanceType,
 *     appearanceList                 [ 5] IMPLICIT     SEQUENCE OF IA5String     OPTIONAL,
 *     otherPhysicalDeviceList         [ 6] IMPLICIT     SEQUENCE OF DeviceID     OPTIONAL,
 *     miscMonitorCaps             [ 7] IMPLICIT     MiscMonitorCaps     OPTIONAL,
 *     associatedGroupList             [ 8] IMPLICIT     SEQUENCE OF DeviceID     OPTIONAL,
 *     maxCallbacks                 [ 9] IMPLICIT     INTEGER         OPTIONAL,
 *     maxAutoAnswerRings             [10] IMPLICIT     INTEGER         OPTIONAL,
 *     maxActiveCalls                 [11] IMPLICIT     INTEGER         OPTIONAL,
 *     maxHeldCalls                 [12] IMPLICIT     INTEGER         OPTIONAL,
 *     maxFwdSettings                 [13] IMPLICIT     INTEGER         OPTIONAL,
 *     maxDevicesInConf             [14] IMPLICIT     INTEGER         OPTIONAL,
 *     transAndConfSetup             [15] IMPLICIT     TransAndConfSetup     OPTIONAL,
 *     deviceOnDeviceMonitorFilter         [16] IMPLICIT     MonitorFilter         OPTIONAL,
 *     deviceOnConnectionMonitorFilter        [17] IMPLICIT     MonitorFilter         OPTIONAL,
 *     callOnDeviceMonitorFilter         [18] IMPLICIT     MonitorFilter         OPTIONAL,
 *     callOnConnectionMonitorFilter         [19] IMPLICIT     MonitorFilter         OPTIONAL,
 *     mediaClassSupport             [20] IMPLICIT     MonitorMediaClass     OPTIONAL,
 *     mediaServiceCapsList             [21] IMPLICIT     MediaServiceCapsList     OPTIONAL,
 *     connectionRateList             [22] IMPLICIT     ConnectionRateList     OPTIONAL,
 *     delayToleranceList             [23] IMPLICIT     DelayToleranceList     OPTIONAL,
 *     numberOfChannels             [24] IMPLICIT     NumberOfChannels     OPTIONAL,
 *     maxChannelBind                 [25] IMPLICIT     MaxChannelBind         OPTIONAL,
 *     routeingServList             [26] IMPLICIT     RouteingServList     OPTIONAL,
 *     logDevServList                 [27] IMPLICIT     LogDevServList         OPTIONAL,
 *     logDevEvtsList                 [28] IMPLICIT     LogDevEvtsList         OPTIONAL,
 *     deviceMaintEvtsList             [29] IMPLICIT     DeviceMaintEvtsList     OPTIONAL,
 *     extensions                 CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLogicalDeviceInformationResult {
    constructor (
        /**
         * @summary `deviceCategory`.
         * @public
         * @readonly
         */
        readonly deviceCategory: OPTIONAL<DeviceCategory>,
        /**
         * @summary `groupDeviceAttributes`.
         * @public
         * @readonly
         */
        readonly groupDeviceAttributes: OPTIONAL<GroupDeviceAttributes>,
        /**
         * @summary `namedDeviceTypes`.
         * @public
         * @readonly
         */
        readonly namedDeviceTypes: OPTIONAL<NamedDeviceTypes>,
        /**
         * @summary `shortFormDeviceID`.
         * @public
         * @readonly
         */
        readonly shortFormDeviceID: OPTIONAL<DeviceID>,
        /**
         * @summary `hasPhysicalElement`.
         * @public
         * @readonly
         */
        readonly hasPhysicalElement: BOOLEAN,
        /**
         * @summary `acdModels`.
         * @public
         * @readonly
         */
        readonly acdModels: ACDModels,
        /**
         * @summary `agentLogOnModels`.
         * @public
         * @readonly
         */
        readonly agentLogOnModels: OPTIONAL<AgentLogOnModels>,
        /**
         * @summary `appearanceAddressable`.
         * @public
         * @readonly
         */
        readonly appearanceAddressable: BOOLEAN,
        /**
         * @summary `appearanceType`.
         * @public
         * @readonly
         */
        readonly appearanceType: AppearanceType,
        /**
         * @summary `appearanceList`.
         * @public
         * @readonly
         */
        readonly appearanceList: OPTIONAL<IA5String[]>,
        /**
         * @summary `otherPhysicalDeviceList`.
         * @public
         * @readonly
         */
        readonly otherPhysicalDeviceList: OPTIONAL<DeviceID[]>,
        /**
         * @summary `miscMonitorCaps`.
         * @public
         * @readonly
         */
        readonly miscMonitorCaps: OPTIONAL<MiscMonitorCaps>,
        /**
         * @summary `associatedGroupList`.
         * @public
         * @readonly
         */
        readonly associatedGroupList: OPTIONAL<DeviceID[]>,
        /**
         * @summary `maxCallbacks`.
         * @public
         * @readonly
         */
        readonly maxCallbacks: OPTIONAL<INTEGER>,
        /**
         * @summary `maxAutoAnswerRings`.
         * @public
         * @readonly
         */
        readonly maxAutoAnswerRings: OPTIONAL<INTEGER>,
        /**
         * @summary `maxActiveCalls`.
         * @public
         * @readonly
         */
        readonly maxActiveCalls: OPTIONAL<INTEGER>,
        /**
         * @summary `maxHeldCalls`.
         * @public
         * @readonly
         */
        readonly maxHeldCalls: OPTIONAL<INTEGER>,
        /**
         * @summary `maxFwdSettings`.
         * @public
         * @readonly
         */
        readonly maxFwdSettings: OPTIONAL<INTEGER>,
        /**
         * @summary `maxDevicesInConf`.
         * @public
         * @readonly
         */
        readonly maxDevicesInConf: OPTIONAL<INTEGER>,
        /**
         * @summary `transAndConfSetup`.
         * @public
         * @readonly
         */
        readonly transAndConfSetup: OPTIONAL<TransAndConfSetup>,
        /**
         * @summary `deviceOnDeviceMonitorFilter`.
         * @public
         * @readonly
         */
        readonly deviceOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `deviceOnConnectionMonitorFilter`.
         * @public
         * @readonly
         */
        readonly deviceOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `callOnDeviceMonitorFilter`.
         * @public
         * @readonly
         */
        readonly callOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `callOnConnectionMonitorFilter`.
         * @public
         * @readonly
         */
        readonly callOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `mediaClassSupport`.
         * @public
         * @readonly
         */
        readonly mediaClassSupport: OPTIONAL<MonitorMediaClass>,
        /**
         * @summary `mediaServiceCapsList`.
         * @public
         * @readonly
         */
        readonly mediaServiceCapsList: OPTIONAL<MediaServiceCapsList>,
        /**
         * @summary `connectionRateList`.
         * @public
         * @readonly
         */
        readonly connectionRateList: OPTIONAL<ConnectionRateList>,
        /**
         * @summary `delayToleranceList`.
         * @public
         * @readonly
         */
        readonly delayToleranceList: OPTIONAL<DelayToleranceList>,
        /**
         * @summary `numberOfChannels`.
         * @public
         * @readonly
         */
        readonly numberOfChannels: OPTIONAL<NumberOfChannels>,
        /**
         * @summary `maxChannelBind`.
         * @public
         * @readonly
         */
        readonly maxChannelBind: OPTIONAL<MaxChannelBind>,
        /**
         * @summary `routeingServList`.
         * @public
         * @readonly
         */
        readonly routeingServList: OPTIONAL<RouteingServList>,
        /**
         * @summary `logDevServList`.
         * @public
         * @readonly
         */
        readonly logDevServList: OPTIONAL<LogDevServList>,
        /**
         * @summary `logDevEvtsList`.
         * @public
         * @readonly
         */
        readonly logDevEvtsList: OPTIONAL<LogDevEvtsList>,
        /**
         * @summary `deviceMaintEvtsList`.
         * @public
         * @readonly
         */
        readonly deviceMaintEvtsList: OPTIONAL<DeviceMaintEvtsList>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLogicalDeviceInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLogicalDeviceInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLogicalDeviceInformationResult`.
     * @returns {GetLogicalDeviceInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLogicalDeviceInformationResult)]: (GetLogicalDeviceInformationResult)[_K] }): GetLogicalDeviceInformationResult {
        return new GetLogicalDeviceInformationResult(_o.deviceCategory, _o.groupDeviceAttributes, _o.namedDeviceTypes, _o.shortFormDeviceID, _o.hasPhysicalElement, _o.acdModels, _o.agentLogOnModels, _o.appearanceAddressable, _o.appearanceType, _o.appearanceList, _o.otherPhysicalDeviceList, _o.miscMonitorCaps, _o.associatedGroupList, _o.maxCallbacks, _o.maxAutoAnswerRings, _o.maxActiveCalls, _o.maxHeldCalls, _o.maxFwdSettings, _o.maxDevicesInConf, _o.transAndConfSetup, _o.deviceOnDeviceMonitorFilter, _o.deviceOnConnectionMonitorFilter, _o.callOnDeviceMonitorFilter, _o.callOnConnectionMonitorFilter, _o.mediaClassSupport, _o.mediaServiceCapsList, _o.connectionRateList, _o.delayToleranceList, _o.numberOfChannels, _o.maxChannelBind, _o.routeingServList, _o.logDevServList, _o.logDevEvtsList, _o.deviceMaintEvtsList, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `deviceCategory`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_deviceCategory () { return DeviceCategory_station; }        /**
         * @summary The enum used as the type of the component `deviceCategory`
         * @public
         * @static
         */

    public static _enum_for_deviceCategory = _enum_for_DeviceCategory;        /**
         * @summary The enum used as the type of the component `namedDeviceTypes`
         * @public
         * @static
         */

    public static _enum_for_namedDeviceTypes = _enum_for_NamedDeviceTypes;        /**
         * @summary The enum used as the type of the component `appearanceType`
         * @public
         * @static
         */

    public static _enum_for_appearanceType = _enum_for_AppearanceType;
}

/**
 * @summary The Leading Root Component Types of GetLogicalDeviceInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLogicalDeviceInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceCategory", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("groupDeviceAttributes", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("namedDeviceTypes", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("shortFormDeviceID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("hasPhysicalElement", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("acdModels", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("agentLogOnModels", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("appearanceAddressable", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("appearanceType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("appearanceList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("otherPhysicalDeviceList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("miscMonitorCaps", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("associatedGroupList", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("maxCallbacks", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("maxAutoAnswerRings", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("maxActiveCalls", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("maxHeldCalls", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("maxFwdSettings", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("maxDevicesInConf", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("transAndConfSetup", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("deviceOnDeviceMonitorFilter", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("deviceOnConnectionMonitorFilter", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("callOnDeviceMonitorFilter", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("callOnConnectionMonitorFilter", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("mediaClassSupport", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("mediaServiceCapsList", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("connectionRateList", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("delayToleranceList", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("numberOfChannels", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("maxChannelBind", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("routeingServList", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("logDevServList", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("logDevEvtsList", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("deviceMaintEvtsList", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLogicalDeviceInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLogicalDeviceInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLogicalDeviceInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLogicalDeviceInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLogicalDeviceInformationResult: $.ASN1Decoder<GetLogicalDeviceInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLogicalDeviceInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLogicalDeviceInformationResult (el: _Element): GetLogicalDeviceInformationResult {
    if (!_cached_decoder_for_GetLogicalDeviceInformationResult) { _cached_decoder_for_GetLogicalDeviceInformationResult = function (el: _Element): GetLogicalDeviceInformationResult {
    let deviceCategory: OPTIONAL<DeviceCategory> = GetLogicalDeviceInformationResult._default_value_for_deviceCategory;
    let groupDeviceAttributes: OPTIONAL<GroupDeviceAttributes>;
    let namedDeviceTypes: OPTIONAL<NamedDeviceTypes>;
    let shortFormDeviceID: OPTIONAL<DeviceID>;
    let hasPhysicalElement!: BOOLEAN;
    let acdModels!: ACDModels;
    let agentLogOnModels: OPTIONAL<AgentLogOnModels>;
    let appearanceAddressable!: BOOLEAN;
    let appearanceType!: AppearanceType;
    let appearanceList: OPTIONAL<IA5String[]>;
    let otherPhysicalDeviceList: OPTIONAL<DeviceID[]>;
    let miscMonitorCaps: OPTIONAL<MiscMonitorCaps>;
    let associatedGroupList: OPTIONAL<DeviceID[]>;
    let maxCallbacks: OPTIONAL<INTEGER>;
    let maxAutoAnswerRings: OPTIONAL<INTEGER>;
    let maxActiveCalls: OPTIONAL<INTEGER>;
    let maxHeldCalls: OPTIONAL<INTEGER>;
    let maxFwdSettings: OPTIONAL<INTEGER>;
    let maxDevicesInConf: OPTIONAL<INTEGER>;
    let transAndConfSetup: OPTIONAL<TransAndConfSetup>;
    let deviceOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>;
    let deviceOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>;
    let callOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>;
    let callOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>;
    let mediaClassSupport: OPTIONAL<MonitorMediaClass>;
    let mediaServiceCapsList: OPTIONAL<MediaServiceCapsList>;
    let connectionRateList: OPTIONAL<ConnectionRateList>;
    let delayToleranceList: OPTIONAL<DelayToleranceList>;
    let numberOfChannels: OPTIONAL<NumberOfChannels>;
    let maxChannelBind: OPTIONAL<MaxChannelBind>;
    let routeingServList: OPTIONAL<RouteingServList>;
    let logDevServList: OPTIONAL<LogDevServList>;
    let logDevEvtsList: OPTIONAL<LogDevEvtsList>;
    let deviceMaintEvtsList: OPTIONAL<DeviceMaintEvtsList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "deviceCategory": (_el: _Element): void => { deviceCategory = $._decode_implicit<DeviceCategory>(() => _decode_DeviceCategory)(_el); },
        "groupDeviceAttributes": (_el: _Element): void => { groupDeviceAttributes = $._decode_implicit<GroupDeviceAttributes>(() => _decode_GroupDeviceAttributes)(_el); },
        "namedDeviceTypes": (_el: _Element): void => { namedDeviceTypes = $._decode_implicit<NamedDeviceTypes>(() => _decode_NamedDeviceTypes)(_el); },
        "shortFormDeviceID": (_el: _Element): void => { shortFormDeviceID = $._decode_explicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "hasPhysicalElement": (_el: _Element): void => { hasPhysicalElement = $._decodeBoolean(_el); },
        "acdModels": (_el: _Element): void => { acdModels = _decode_ACDModels(_el); },
        "agentLogOnModels": (_el: _Element): void => { agentLogOnModels = $._decode_implicit<AgentLogOnModels>(() => _decode_AgentLogOnModels)(_el); },
        "appearanceAddressable": (_el: _Element): void => { appearanceAddressable = $._decodeBoolean(_el); },
        "appearanceType": (_el: _Element): void => { appearanceType = _decode_AppearanceType(_el); },
        "appearanceList": (_el: _Element): void => { appearanceList = $._decode_implicit<IA5String[]>(() => $._decodeSequenceOf<IA5String>(() => $._decodeIA5String))(_el); },
        "otherPhysicalDeviceList": (_el: _Element): void => { otherPhysicalDeviceList = $._decode_implicit<DeviceID[]>(() => $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID))(_el); },
        "miscMonitorCaps": (_el: _Element): void => { miscMonitorCaps = $._decode_implicit<MiscMonitorCaps>(() => _decode_MiscMonitorCaps)(_el); },
        "associatedGroupList": (_el: _Element): void => { associatedGroupList = $._decode_implicit<DeviceID[]>(() => $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID))(_el); },
        "maxCallbacks": (_el: _Element): void => { maxCallbacks = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxAutoAnswerRings": (_el: _Element): void => { maxAutoAnswerRings = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxActiveCalls": (_el: _Element): void => { maxActiveCalls = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxHeldCalls": (_el: _Element): void => { maxHeldCalls = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxFwdSettings": (_el: _Element): void => { maxFwdSettings = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxDevicesInConf": (_el: _Element): void => { maxDevicesInConf = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "transAndConfSetup": (_el: _Element): void => { transAndConfSetup = $._decode_implicit<TransAndConfSetup>(() => _decode_TransAndConfSetup)(_el); },
        "deviceOnDeviceMonitorFilter": (_el: _Element): void => { deviceOnDeviceMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "deviceOnConnectionMonitorFilter": (_el: _Element): void => { deviceOnConnectionMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "callOnDeviceMonitorFilter": (_el: _Element): void => { callOnDeviceMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "callOnConnectionMonitorFilter": (_el: _Element): void => { callOnConnectionMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "mediaClassSupport": (_el: _Element): void => { mediaClassSupport = $._decode_implicit<MonitorMediaClass>(() => _decode_MonitorMediaClass)(_el); },
        "mediaServiceCapsList": (_el: _Element): void => { mediaServiceCapsList = $._decode_implicit<MediaServiceCapsList>(() => _decode_MediaServiceCapsList)(_el); },
        "connectionRateList": (_el: _Element): void => { connectionRateList = $._decode_implicit<ConnectionRateList>(() => _decode_ConnectionRateList)(_el); },
        "delayToleranceList": (_el: _Element): void => { delayToleranceList = $._decode_implicit<DelayToleranceList>(() => _decode_DelayToleranceList)(_el); },
        "numberOfChannels": (_el: _Element): void => { numberOfChannels = $._decode_implicit<NumberOfChannels>(() => _decode_NumberOfChannels)(_el); },
        "maxChannelBind": (_el: _Element): void => { maxChannelBind = $._decode_implicit<MaxChannelBind>(() => _decode_MaxChannelBind)(_el); },
        "routeingServList": (_el: _Element): void => { routeingServList = $._decode_implicit<RouteingServList>(() => _decode_RouteingServList)(_el); },
        "logDevServList": (_el: _Element): void => { logDevServList = $._decode_implicit<LogDevServList>(() => _decode_LogDevServList)(_el); },
        "logDevEvtsList": (_el: _Element): void => { logDevEvtsList = $._decode_implicit<LogDevEvtsList>(() => _decode_LogDevEvtsList)(_el); },
        "deviceMaintEvtsList": (_el: _Element): void => { deviceMaintEvtsList = $._decode_implicit<DeviceMaintEvtsList>(() => _decode_DeviceMaintEvtsList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLogicalDeviceInformationResult,
        _extension_additions_list_spec_for_GetLogicalDeviceInformationResult,
        _root_component_type_list_2_spec_for_GetLogicalDeviceInformationResult,
        undefined,
    );
    return new GetLogicalDeviceInformationResult(
        deviceCategory,
        groupDeviceAttributes,
        namedDeviceTypes,
        shortFormDeviceID,
        hasPhysicalElement,
        acdModels,
        agentLogOnModels,
        appearanceAddressable,
        appearanceType,
        appearanceList,
        otherPhysicalDeviceList,
        miscMonitorCaps,
        associatedGroupList,
        maxCallbacks,
        maxAutoAnswerRings,
        maxActiveCalls,
        maxHeldCalls,
        maxFwdSettings,
        maxDevicesInConf,
        transAndConfSetup,
        deviceOnDeviceMonitorFilter,
        deviceOnConnectionMonitorFilter,
        callOnDeviceMonitorFilter,
        callOnConnectionMonitorFilter,
        mediaClassSupport,
        mediaServiceCapsList,
        connectionRateList,
        delayToleranceList,
        numberOfChannels,
        maxChannelBind,
        routeingServList,
        logDevServList,
        logDevEvtsList,
        deviceMaintEvtsList,
        extensions
    );
}; }
    return _cached_decoder_for_GetLogicalDeviceInformationResult(el);
}

let _cached_encoder_for_GetLogicalDeviceInformationResult: $.ASN1Encoder<GetLogicalDeviceInformationResult> | null = null;

/**
 * @summary Encodes a(n) GetLogicalDeviceInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLogicalDeviceInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLogicalDeviceInformationResult (value: GetLogicalDeviceInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLogicalDeviceInformationResult) { _cached_encoder_for_GetLogicalDeviceInformationResult = function (value: GetLogicalDeviceInformationResult, elGetter: $.ASN1Encoder<GetLogicalDeviceInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.deviceCategory === undefined || $.deepEq(value.deviceCategory, GetLogicalDeviceInformationResult._default_value_for_deviceCategory) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DeviceCategory, $.BER)(value.deviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.groupDeviceAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GroupDeviceAttributes, $.BER)(value.groupDeviceAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.namedDeviceTypes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NamedDeviceTypes, $.BER)(value.namedDeviceTypes, $.BER)),
            /* IF_ABSENT  */ ((value.shortFormDeviceID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_DeviceID, $.BER)(value.shortFormDeviceID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.hasPhysicalElement, $.BER),
            /* REQUIRED   */ _encode_ACDModels(value.acdModels, $.BER),
            /* IF_ABSENT  */ ((value.agentLogOnModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AgentLogOnModels, $.BER)(value.agentLogOnModels, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.appearanceAddressable, $.BER),
            /* REQUIRED   */ _encode_AppearanceType(value.appearanceType, $.BER),
            /* IF_ABSENT  */ ((value.appearanceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<IA5String>(() => $._encodeIA5String, $.BER), $.BER)(value.appearanceList, $.BER)),
            /* IF_ABSENT  */ ((value.otherPhysicalDeviceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER), $.BER)(value.otherPhysicalDeviceList, $.BER)),
            /* IF_ABSENT  */ ((value.miscMonitorCaps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MiscMonitorCaps, $.BER)(value.miscMonitorCaps, $.BER)),
            /* IF_ABSENT  */ ((value.associatedGroupList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER), $.BER)(value.associatedGroupList, $.BER)),
            /* IF_ABSENT  */ ((value.maxCallbacks === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.maxCallbacks, $.BER)),
            /* IF_ABSENT  */ ((value.maxAutoAnswerRings === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maxAutoAnswerRings, $.BER)),
            /* IF_ABSENT  */ ((value.maxActiveCalls === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.maxActiveCalls, $.BER)),
            /* IF_ABSENT  */ ((value.maxHeldCalls === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.maxHeldCalls, $.BER)),
            /* IF_ABSENT  */ ((value.maxFwdSettings === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.maxFwdSettings, $.BER)),
            /* IF_ABSENT  */ ((value.maxDevicesInConf === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.maxDevicesInConf, $.BER)),
            /* IF_ABSENT  */ ((value.transAndConfSetup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_TransAndConfSetup, $.BER)(value.transAndConfSetup, $.BER)),
            /* IF_ABSENT  */ ((value.deviceOnDeviceMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_MonitorFilter, $.BER)(value.deviceOnDeviceMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.deviceOnConnectionMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MonitorFilter, $.BER)(value.deviceOnConnectionMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.callOnDeviceMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_MonitorFilter, $.BER)(value.callOnDeviceMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.callOnConnectionMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_MonitorFilter, $.BER)(value.callOnConnectionMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.mediaClassSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_MonitorMediaClass, $.BER)(value.mediaClassSupport, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceCapsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_MediaServiceCapsList, $.BER)(value.mediaServiceCapsList, $.BER)),
            /* IF_ABSENT  */ ((value.connectionRateList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_ConnectionRateList, $.BER)(value.connectionRateList, $.BER)),
            /* IF_ABSENT  */ ((value.delayToleranceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_DelayToleranceList, $.BER)(value.delayToleranceList, $.BER)),
            /* IF_ABSENT  */ ((value.numberOfChannels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_NumberOfChannels, $.BER)(value.numberOfChannels, $.BER)),
            /* IF_ABSENT  */ ((value.maxChannelBind === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_MaxChannelBind, $.BER)(value.maxChannelBind, $.BER)),
            /* IF_ABSENT  */ ((value.routeingServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_RouteingServList, $.BER)(value.routeingServList, $.BER)),
            /* IF_ABSENT  */ ((value.logDevServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_LogDevServList, $.BER)(value.logDevServList, $.BER)),
            /* IF_ABSENT  */ ((value.logDevEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_LogDevEvtsList, $.BER)(value.logDevEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.deviceMaintEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_DeviceMaintEvtsList, $.BER)(value.deviceMaintEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLogicalDeviceInformationResult(value, elGetter);
}


/* eslint-enable */
