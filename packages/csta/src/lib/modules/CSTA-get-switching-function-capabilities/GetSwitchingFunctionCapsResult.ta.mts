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
import { Profiles, _decode_Profiles, _encode_Profiles } from "../CSTA-get-switching-function-capabilities/Profiles.ta.mjs";

import { DeviceIDFormat, _decode_DeviceIDFormat, _encode_DeviceIDFormat } from "../CSTA-capability-exchange/DeviceIDFormat.ta.mjs";

import { SwDomainFeatures, _decode_SwDomainFeatures, _encode_SwDomainFeatures } from "../CSTA-capability-exchange/SwDomainFeatures.ta.mjs";

import { SwAppearanceAddressability, _decode_SwAppearanceAddressability, _encode_SwAppearanceAddressability } from "../CSTA-capability-exchange/SwAppearanceAddressability.ta.mjs";

import { SwAppearanceTypes, _decode_SwAppearanceTypes, _encode_SwAppearanceTypes } from "../CSTA-capability-exchange/SwAppearanceTypes.ta.mjs";

import {
    IgnoreUnsupportedParameters,
    _enum_for_IgnoreUnsupportedParameters,
    _decode_IgnoreUnsupportedParameters,
    _encode_IgnoreUnsupportedParameters
} from "../CSTA-capability-exchange/IgnoreUnsupportedParameters.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import {
    MonitorMediaClass,
    data /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_MonitorMediaClass,
    _encode_MonitorMediaClass
} from "../CSTA-status-reporting/MonitorMediaClass.ta.mjs";

import { NumberOfChannels, _decode_NumberOfChannels, _encode_NumberOfChannels } from "../CSTA-data-call-types/NumberOfChannels.ta.mjs";

import { MaxChannelBind, _decode_MaxChannelBind, _encode_MaxChannelBind } from "../CSTA-data-call-types/MaxChannelBind.ta.mjs";

import { MiscMediaCallCharacteristics, _decode_MiscMediaCallCharacteristics, _encode_MiscMediaCallCharacteristics } from "../CSTA-get-switching-function-capabilities/MiscMediaCallCharacteristics.ta.mjs";

import { ConnectionRateList, _decode_ConnectionRateList, _encode_ConnectionRateList } from "../CSTA-data-call-types/ConnectionRateList.ta.mjs";

import { DelayToleranceList, _decode_DelayToleranceList, _encode_DelayToleranceList } from "../CSTA-data-call-types/DelayToleranceList.ta.mjs";

import { PauseTime, _decode_PauseTime, _encode_PauseTime } from "../CSTA-capability-exchange/PauseTime.ta.mjs";

import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";

import { MessageSeqNumbers, _decode_MessageSeqNumbers, _encode_MessageSeqNumbers } from "../CSTA-get-switching-function-capabilities/MessageSeqNumbers.ta.mjs";

import { TimeStampMode, _decode_TimeStampMode, _encode_TimeStampMode } from "../CSTA-capability-exchange/TimeStampMode.ta.mjs";

import {
    SecurityMode,
    _enum_for_SecurityMode,
    _decode_SecurityMode,
    _encode_SecurityMode
} from "../CSTA-get-switching-function-capabilities/SecurityMode.ta.mjs";

import { SecurityFormat, _decode_SecurityFormat, _encode_SecurityFormat } from "../CSTA-get-switching-function-capabilities/SecurityFormat.ta.mjs";

import { TransAndConfSetup, _decode_TransAndConfSetup, _encode_TransAndConfSetup } from "../CSTA-capability-exchange/TransAndConfSetup.ta.mjs";

import { MonitorFilterItems, _decode_MonitorFilterItems, _encode_MonitorFilterItems } from "../CSTA-get-switching-function-capabilities/MonitorFilterItems.ta.mjs";

import { MiscMonitorCaps, _decode_MiscMonitorCaps, _encode_MiscMonitorCaps } from "../CSTA-capability-exchange/MiscMonitorCaps.ta.mjs";

import {
    DynamicFeatureSupported,
    _enum_for_DynamicFeatureSupported,
    all /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DynamicFeatureSupported,
    _encode_DynamicFeatureSupported
} from "../CSTA-get-switching-function-capabilities/DynamicFeatureSupported.ta.mjs";

import { CallLinkageOptions, _decode_CallLinkageOptions, _encode_CallLinkageOptions } from "../CSTA-get-switching-function-capabilities/CallLinkageOptions.ta.mjs";

import { ACDModels, _decode_ACDModels, _encode_ACDModels } from "../CSTA-capability-exchange/ACDModels.ta.mjs";

import { AgentLogOnModels, _decode_AgentLogOnModels, _encode_AgentLogOnModels } from "../CSTA-get-switching-function-capabilities/AgentLogOnModels.ta.mjs";

import { AgentStateModels, _decode_AgentStateModels, _encode_AgentStateModels } from "../CSTA-get-switching-function-capabilities/AgentStateModels.ta.mjs";

import {
    ConnectionView,
    _enum_for_ConnectionView,
    _decode_ConnectionView,
    _encode_ConnectionView
} from "../CSTA-get-switching-function-capabilities/ConnectionView.ta.mjs";

import { MaxLengthParameters, _decode_MaxLengthParameters, _encode_MaxLengthParameters } from "../CSTA-capability-exchange/MaxLengthParameters.ta.mjs";

import { MaxLengthParametersContinued, _decode_MaxLengthParametersContinued, _encode_MaxLengthParametersContinued } from "../CSTA-capability-exchange/MaxLengthParametersContinued.ta.mjs";

import { ServEvtsList, _decode_ServEvtsList, _encode_ServEvtsList } from "../CSTA-get-switching-function-capabilities/ServEvtsList.ta.mjs";

import { PrivateDataVersionList, _decode_PrivateDataVersionList, _encode_PrivateDataVersionList } from "../CSTA-get-switching-function-capabilities/PrivateDataVersionList.ta.mjs";

import { FilterThreshold, _decode_FilterThreshold, _encode_FilterThreshold } from "../CSTA-capability-exchange/FilterThreshold.ta.mjs";

import { MediaServiceCapsList, _decode_MediaServiceCapsList, _encode_MediaServiceCapsList } from "../CSTA-capability-exchange/MediaServiceCapsList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetSwitchingFunctionCapsResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionCapsResult ::= SEQUENCE
 * {     switchingSubDomainName             IA5String (SIZE(0..64)),
 *     manufacturerName             IA5String (SIZE(0..64)),
 *     profiles                 Profiles,
 *     deviceIDFormat                 DeviceIDFormat,
 *     swDomainFeatures             SwDomainFeatures,
 *     swAppearanceAddressability         SwAppearanceAddressability,
 *     swAppearanceTypes             SwAppearanceTypes,
 *     ignoreUnsupportedParameters         IgnoreUnsupportedParameters,
 *     callCharacteristicsSupported         [ 0] IMPLICIT     CallCharacteristics         OPTIONAL,
 *     mediaClassSupport             [ 1] IMPLICIT     MonitorMediaClass         OPTIONAL,
 *     numberOfChannels             [ 2] IMPLICIT     NumberOfChannels         OPTIONAL,
 *     maxChannelBind                 [ 3] IMPLICIT     MaxChannelBind             OPTIONAL,
 *     miscMediaCallCharacteristics         [ 4] IMPLICIT     MiscMediaCallCharacteristics     OPTIONAL,
 *     connectionRateList             [ 5] IMPLICIT     ConnectionRateList         OPTIONAL,
 *     delayToleranceList             [ 6] IMPLICIT     DelayToleranceList         OPTIONAL,
 *     pauseTime                 [ 7] IMPLICIT     PauseTime             OPTIONAL,
 *     currentTime                 [ 8] IMPLICIT     TimeInfo             OPTIONAL,
 *     messageSeqNumbers             [ 9] IMPLICIT     MessageSeqNumbers         OPTIONAL,
 *     timeStampMode                 [10] IMPLICIT     TimeStampMode             OPTIONAL,
 *     securityMode                 [11] IMPLICIT     SecurityMode             OPTIONAL,
 *     securityFormat                 [12] IMPLICIT     SecurityFormat            OPTIONAL,
 *     privateDataFormat             [13] IMPLICIT     SecurityFormat             OPTIONAL,
 *     transAndConfSetup             [14] IMPLICIT     TransAndConfSetup         OPTIONAL,
 *     monitorFilterItems             [15] IMPLICIT     MonitorFilterItems         OPTIONAL,
 *     miscMonitorCaps             [16] IMPLICIT     MiscMonitorCaps         OPTIONAL,
 *     correlatorDataSupported         [17] IMPLICIT     BOOLEAN             OPTIONAL,
 *     dynamicFeatureSupported         [18] IMPLICIT     DynamicFeatureSupported     OPTIONAL,
 *     callLinkageOptions             [28] IMPLICIT     CallLinkageOptions         OPTIONAL,
 *     aCDModels                 [19] IMPLICIT     ACDModels             OPTIONAL,
 *     agentLogOnModels             [20] IMPLICIT     AgentLogOnModels         OPTIONAL,
 *     agentStateModels             [21] IMPLICIT     AgentStateModels         OPTIONAL,
 *     connectionView                 ConnectionView,
 *     maxLengthParameters             MaxLengthParameters,
 *     maxLengthParametersContinued        [28] IMPLICIT     MaxLengthParametersContinued    OPTIONAL,
 *     servEvtsList                 [22] IMPLICIT     ServEvtsList             OPTIONAL,
 *     privateDataVersionList             [23] IMPLICIT     PrivateDataVersionList        OPTIONAL,
 *     systemStatusTimer             [24] IMPLICIT     INTEGER (0..180)         OPTIONAL,
 *     simpleThreshold             [25] IMPLICIT     INTEGER             OPTIONAL,
 *     filterThreshold             [26] IMPLICIT     FilterThreshold         OPTIONAL,
 *     mediaServiceCapsList             [27] IMPLICIT     MediaServiceCapsList         OPTIONAL,
 *     maxDeviceHistoryLength            [29] IMPLICIT     INTEGER                OPTIONAL,
 *     maxDestinationDevicesForDeflect        [30] IMPLICIT    INTEGER                OPTIONAL,
 *     extensions                 CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSwitchingFunctionCapsResult {
    constructor (
        /**
         * @summary `switchingSubDomainName`.
         * @public
         * @readonly
         */
        readonly switchingSubDomainName: IA5String,
        /**
         * @summary `manufacturerName`.
         * @public
         * @readonly
         */
        readonly manufacturerName: IA5String,
        /**
         * @summary `profiles`.
         * @public
         * @readonly
         */
        readonly profiles: Profiles,
        /**
         * @summary `deviceIDFormat`.
         * @public
         * @readonly
         */
        readonly deviceIDFormat: DeviceIDFormat,
        /**
         * @summary `swDomainFeatures`.
         * @public
         * @readonly
         */
        readonly swDomainFeatures: SwDomainFeatures,
        /**
         * @summary `swAppearanceAddressability`.
         * @public
         * @readonly
         */
        readonly swAppearanceAddressability: SwAppearanceAddressability,
        /**
         * @summary `swAppearanceTypes`.
         * @public
         * @readonly
         */
        readonly swAppearanceTypes: SwAppearanceTypes,
        /**
         * @summary `ignoreUnsupportedParameters`.
         * @public
         * @readonly
         */
        readonly ignoreUnsupportedParameters: IgnoreUnsupportedParameters,
        /**
         * @summary `callCharacteristicsSupported`.
         * @public
         * @readonly
         */
        readonly callCharacteristicsSupported: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaClassSupport`.
         * @public
         * @readonly
         */
        readonly mediaClassSupport: OPTIONAL<MonitorMediaClass>,
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
         * @summary `miscMediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly miscMediaCallCharacteristics: OPTIONAL<MiscMediaCallCharacteristics>,
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
         * @summary `pauseTime`.
         * @public
         * @readonly
         */
        readonly pauseTime: OPTIONAL<PauseTime>,
        /**
         * @summary `currentTime`.
         * @public
         * @readonly
         */
        readonly currentTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `messageSeqNumbers`.
         * @public
         * @readonly
         */
        readonly messageSeqNumbers: OPTIONAL<MessageSeqNumbers>,
        /**
         * @summary `timeStampMode`.
         * @public
         * @readonly
         */
        readonly timeStampMode: OPTIONAL<TimeStampMode>,
        /**
         * @summary `securityMode`.
         * @public
         * @readonly
         */
        readonly securityMode: OPTIONAL<SecurityMode>,
        /**
         * @summary `securityFormat`.
         * @public
         * @readonly
         */
        readonly securityFormat: OPTIONAL<SecurityFormat>,
        /**
         * @summary `privateDataFormat`.
         * @public
         * @readonly
         */
        readonly privateDataFormat: OPTIONAL<SecurityFormat>,
        /**
         * @summary `transAndConfSetup`.
         * @public
         * @readonly
         */
        readonly transAndConfSetup: OPTIONAL<TransAndConfSetup>,
        /**
         * @summary `monitorFilterItems`.
         * @public
         * @readonly
         */
        readonly monitorFilterItems: OPTIONAL<MonitorFilterItems>,
        /**
         * @summary `miscMonitorCaps`.
         * @public
         * @readonly
         */
        readonly miscMonitorCaps: OPTIONAL<MiscMonitorCaps>,
        /**
         * @summary `correlatorDataSupported`.
         * @public
         * @readonly
         */
        readonly correlatorDataSupported: OPTIONAL<BOOLEAN>,
        /**
         * @summary `dynamicFeatureSupported`.
         * @public
         * @readonly
         */
        readonly dynamicFeatureSupported: OPTIONAL<DynamicFeatureSupported>,
        /**
         * @summary `callLinkageOptions`.
         * @public
         * @readonly
         */
        readonly callLinkageOptions: OPTIONAL<CallLinkageOptions>,
        /**
         * @summary `aCDModels`.
         * @public
         * @readonly
         */
        readonly aCDModels: OPTIONAL<ACDModels>,
        /**
         * @summary `agentLogOnModels`.
         * @public
         * @readonly
         */
        readonly agentLogOnModels: OPTIONAL<AgentLogOnModels>,
        /**
         * @summary `agentStateModels`.
         * @public
         * @readonly
         */
        readonly agentStateModels: OPTIONAL<AgentStateModels>,
        /**
         * @summary `connectionView`.
         * @public
         * @readonly
         */
        readonly connectionView: ConnectionView,
        /**
         * @summary `maxLengthParameters`.
         * @public
         * @readonly
         */
        readonly maxLengthParameters: MaxLengthParameters,
        /**
         * @summary `maxLengthParametersContinued`.
         * @public
         * @readonly
         */
        readonly maxLengthParametersContinued: OPTIONAL<MaxLengthParametersContinued>,
        /**
         * @summary `servEvtsList`.
         * @public
         * @readonly
         */
        readonly servEvtsList: OPTIONAL<ServEvtsList>,
        /**
         * @summary `privateDataVersionList`.
         * @public
         * @readonly
         */
        readonly privateDataVersionList: OPTIONAL<PrivateDataVersionList>,
        /**
         * @summary `systemStatusTimer`.
         * @public
         * @readonly
         */
        readonly systemStatusTimer: OPTIONAL<INTEGER>,
        /**
         * @summary `simpleThreshold`.
         * @public
         * @readonly
         */
        readonly simpleThreshold: OPTIONAL<INTEGER>,
        /**
         * @summary `filterThreshold`.
         * @public
         * @readonly
         */
        readonly filterThreshold: OPTIONAL<FilterThreshold>,
        /**
         * @summary `mediaServiceCapsList`.
         * @public
         * @readonly
         */
        readonly mediaServiceCapsList: OPTIONAL<MediaServiceCapsList>,
        /**
         * @summary `maxDeviceHistoryLength`.
         * @public
         * @readonly
         */
        readonly maxDeviceHistoryLength: OPTIONAL<INTEGER>,
        /**
         * @summary `maxDestinationDevicesForDeflect`.
         * @public
         * @readonly
         */
        readonly maxDestinationDevicesForDeflect: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetSwitchingFunctionCapsResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetSwitchingFunctionCapsResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSwitchingFunctionCapsResult`.
     * @returns {GetSwitchingFunctionCapsResult}
     */
    public static _from_object (_o: { [_K in keyof (GetSwitchingFunctionCapsResult)]: (GetSwitchingFunctionCapsResult)[_K] }): GetSwitchingFunctionCapsResult {
        return new GetSwitchingFunctionCapsResult(_o.switchingSubDomainName, _o.manufacturerName, _o.profiles, _o.deviceIDFormat, _o.swDomainFeatures, _o.swAppearanceAddressability, _o.swAppearanceTypes, _o.ignoreUnsupportedParameters, _o.callCharacteristicsSupported, _o.mediaClassSupport, _o.numberOfChannels, _o.maxChannelBind, _o.miscMediaCallCharacteristics, _o.connectionRateList, _o.delayToleranceList, _o.pauseTime, _o.currentTime, _o.messageSeqNumbers, _o.timeStampMode, _o.securityMode, _o.securityFormat, _o.privateDataFormat, _o.transAndConfSetup, _o.monitorFilterItems, _o.miscMonitorCaps, _o.correlatorDataSupported, _o.dynamicFeatureSupported, _o.callLinkageOptions, _o.aCDModels, _o.agentLogOnModels, _o.agentStateModels, _o.connectionView, _o.maxLengthParameters, _o.maxLengthParametersContinued, _o.servEvtsList, _o.privateDataVersionList, _o.systemStatusTimer, _o.simpleThreshold, _o.filterThreshold, _o.mediaServiceCapsList, _o.maxDeviceHistoryLength, _o.maxDestinationDevicesForDeflect, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `ignoreUnsupportedParameters`
         * @public
         * @static
         */

    public static _enum_for_ignoreUnsupportedParameters = _enum_for_IgnoreUnsupportedParameters;        /**
         * @summary The enum used as the type of the component `securityMode`
         * @public
         * @static
         */

    public static _enum_for_securityMode = _enum_for_SecurityMode;        /**
         * @summary The enum used as the type of the component `dynamicFeatureSupported`
         * @public
         * @static
         */

    public static _enum_for_dynamicFeatureSupported = _enum_for_DynamicFeatureSupported;        /**
         * @summary The enum used as the type of the component `connectionView`
         * @public
         * @static
         */

    public static _enum_for_connectionView = _enum_for_ConnectionView;
}

/**
 * @summary The Leading Root Component Types of GetSwitchingFunctionCapsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSwitchingFunctionCapsResult: $.ComponentSpec[] = [
    new $.ComponentSpec("switchingSubDomainName", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("manufacturerName", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("profiles", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("deviceIDFormat", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("swDomainFeatures", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("swAppearanceAddressability", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("swAppearanceTypes", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("ignoreUnsupportedParameters", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("callCharacteristicsSupported", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaClassSupport", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfChannels", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maxChannelBind", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("miscMediaCallCharacteristics", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connectionRateList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("delayToleranceList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pauseTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("currentTime", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageSeqNumbers", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("timeStampMode", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("securityMode", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("securityFormat", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("privateDataFormat", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("transAndConfSetup", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("monitorFilterItems", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("miscMonitorCaps", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("correlatorDataSupported", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("dynamicFeatureSupported", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("callLinkageOptions", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("aCDModels", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("agentLogOnModels", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("agentStateModels", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("connectionView", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("maxLengthParameters", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("maxLengthParametersContinued", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servEvtsList", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("privateDataVersionList", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("systemStatusTimer", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("simpleThreshold", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("filterThreshold", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("mediaServiceCapsList", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("maxDeviceHistoryLength", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("maxDestinationDevicesForDeflect", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetSwitchingFunctionCapsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSwitchingFunctionCapsResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSwitchingFunctionCapsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSwitchingFunctionCapsResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSwitchingFunctionCapsResult: $.ASN1Decoder<GetSwitchingFunctionCapsResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionCapsResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionCapsResult (el: _Element): GetSwitchingFunctionCapsResult {
    if (!_cached_decoder_for_GetSwitchingFunctionCapsResult) { _cached_decoder_for_GetSwitchingFunctionCapsResult = function (el: _Element): GetSwitchingFunctionCapsResult {
    let switchingSubDomainName!: IA5String;
    let manufacturerName!: IA5String;
    let profiles!: Profiles;
    let deviceIDFormat!: DeviceIDFormat;
    let swDomainFeatures!: SwDomainFeatures;
    let swAppearanceAddressability!: SwAppearanceAddressability;
    let swAppearanceTypes!: SwAppearanceTypes;
    let ignoreUnsupportedParameters!: IgnoreUnsupportedParameters;
    let callCharacteristicsSupported: OPTIONAL<CallCharacteristics>;
    let mediaClassSupport: OPTIONAL<MonitorMediaClass>;
    let numberOfChannels: OPTIONAL<NumberOfChannels>;
    let maxChannelBind: OPTIONAL<MaxChannelBind>;
    let miscMediaCallCharacteristics: OPTIONAL<MiscMediaCallCharacteristics>;
    let connectionRateList: OPTIONAL<ConnectionRateList>;
    let delayToleranceList: OPTIONAL<DelayToleranceList>;
    let pauseTime: OPTIONAL<PauseTime>;
    let currentTime: OPTIONAL<TimeInfo>;
    let messageSeqNumbers: OPTIONAL<MessageSeqNumbers>;
    let timeStampMode: OPTIONAL<TimeStampMode>;
    let securityMode: OPTIONAL<SecurityMode>;
    let securityFormat: OPTIONAL<SecurityFormat>;
    let privateDataFormat: OPTIONAL<SecurityFormat>;
    let transAndConfSetup: OPTIONAL<TransAndConfSetup>;
    let monitorFilterItems: OPTIONAL<MonitorFilterItems>;
    let miscMonitorCaps: OPTIONAL<MiscMonitorCaps>;
    let correlatorDataSupported: OPTIONAL<BOOLEAN>;
    let dynamicFeatureSupported: OPTIONAL<DynamicFeatureSupported>;
    let callLinkageOptions: OPTIONAL<CallLinkageOptions>;
    let aCDModels: OPTIONAL<ACDModels>;
    let agentLogOnModels: OPTIONAL<AgentLogOnModels>;
    let agentStateModels: OPTIONAL<AgentStateModels>;
    let connectionView!: ConnectionView;
    let maxLengthParameters!: MaxLengthParameters;
    let maxLengthParametersContinued: OPTIONAL<MaxLengthParametersContinued>;
    let servEvtsList: OPTIONAL<ServEvtsList>;
    let privateDataVersionList: OPTIONAL<PrivateDataVersionList>;
    let systemStatusTimer: OPTIONAL<INTEGER>;
    let simpleThreshold: OPTIONAL<INTEGER>;
    let filterThreshold: OPTIONAL<FilterThreshold>;
    let mediaServiceCapsList: OPTIONAL<MediaServiceCapsList>;
    let maxDeviceHistoryLength: OPTIONAL<INTEGER>;
    let maxDestinationDevicesForDeflect: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "switchingSubDomainName": (_el: _Element): void => { switchingSubDomainName = $._decodeIA5String(_el); },
        "manufacturerName": (_el: _Element): void => { manufacturerName = $._decodeIA5String(_el); },
        "profiles": (_el: _Element): void => { profiles = _decode_Profiles(_el); },
        "deviceIDFormat": (_el: _Element): void => { deviceIDFormat = _decode_DeviceIDFormat(_el); },
        "swDomainFeatures": (_el: _Element): void => { swDomainFeatures = _decode_SwDomainFeatures(_el); },
        "swAppearanceAddressability": (_el: _Element): void => { swAppearanceAddressability = _decode_SwAppearanceAddressability(_el); },
        "swAppearanceTypes": (_el: _Element): void => { swAppearanceTypes = _decode_SwAppearanceTypes(_el); },
        "ignoreUnsupportedParameters": (_el: _Element): void => { ignoreUnsupportedParameters = _decode_IgnoreUnsupportedParameters(_el); },
        "callCharacteristicsSupported": (_el: _Element): void => { callCharacteristicsSupported = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaClassSupport": (_el: _Element): void => { mediaClassSupport = $._decode_implicit<MonitorMediaClass>(() => _decode_MonitorMediaClass)(_el); },
        "numberOfChannels": (_el: _Element): void => { numberOfChannels = $._decode_implicit<NumberOfChannels>(() => _decode_NumberOfChannels)(_el); },
        "maxChannelBind": (_el: _Element): void => { maxChannelBind = $._decode_implicit<MaxChannelBind>(() => _decode_MaxChannelBind)(_el); },
        "miscMediaCallCharacteristics": (_el: _Element): void => { miscMediaCallCharacteristics = $._decode_implicit<MiscMediaCallCharacteristics>(() => _decode_MiscMediaCallCharacteristics)(_el); },
        "connectionRateList": (_el: _Element): void => { connectionRateList = $._decode_implicit<ConnectionRateList>(() => _decode_ConnectionRateList)(_el); },
        "delayToleranceList": (_el: _Element): void => { delayToleranceList = $._decode_implicit<DelayToleranceList>(() => _decode_DelayToleranceList)(_el); },
        "pauseTime": (_el: _Element): void => { pauseTime = $._decode_implicit<PauseTime>(() => _decode_PauseTime)(_el); },
        "currentTime": (_el: _Element): void => { currentTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "messageSeqNumbers": (_el: _Element): void => { messageSeqNumbers = $._decode_implicit<MessageSeqNumbers>(() => _decode_MessageSeqNumbers)(_el); },
        "timeStampMode": (_el: _Element): void => { timeStampMode = $._decode_implicit<TimeStampMode>(() => _decode_TimeStampMode)(_el); },
        "securityMode": (_el: _Element): void => { securityMode = $._decode_implicit<SecurityMode>(() => _decode_SecurityMode)(_el); },
        "securityFormat": (_el: _Element): void => { securityFormat = $._decode_implicit<SecurityFormat>(() => _decode_SecurityFormat)(_el); },
        "privateDataFormat": (_el: _Element): void => { privateDataFormat = $._decode_implicit<SecurityFormat>(() => _decode_SecurityFormat)(_el); },
        "transAndConfSetup": (_el: _Element): void => { transAndConfSetup = $._decode_implicit<TransAndConfSetup>(() => _decode_TransAndConfSetup)(_el); },
        "monitorFilterItems": (_el: _Element): void => { monitorFilterItems = $._decode_implicit<MonitorFilterItems>(() => _decode_MonitorFilterItems)(_el); },
        "miscMonitorCaps": (_el: _Element): void => { miscMonitorCaps = $._decode_implicit<MiscMonitorCaps>(() => _decode_MiscMonitorCaps)(_el); },
        "correlatorDataSupported": (_el: _Element): void => { correlatorDataSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "dynamicFeatureSupported": (_el: _Element): void => { dynamicFeatureSupported = $._decode_implicit<DynamicFeatureSupported>(() => _decode_DynamicFeatureSupported)(_el); },
        "callLinkageOptions": (_el: _Element): void => { callLinkageOptions = $._decode_implicit<CallLinkageOptions>(() => _decode_CallLinkageOptions)(_el); },
        "aCDModels": (_el: _Element): void => { aCDModels = $._decode_implicit<ACDModels>(() => _decode_ACDModels)(_el); },
        "agentLogOnModels": (_el: _Element): void => { agentLogOnModels = $._decode_implicit<AgentLogOnModels>(() => _decode_AgentLogOnModels)(_el); },
        "agentStateModels": (_el: _Element): void => { agentStateModels = $._decode_implicit<AgentStateModels>(() => _decode_AgentStateModels)(_el); },
        "connectionView": (_el: _Element): void => { connectionView = _decode_ConnectionView(_el); },
        "maxLengthParameters": (_el: _Element): void => { maxLengthParameters = _decode_MaxLengthParameters(_el); },
        "maxLengthParametersContinued": (_el: _Element): void => { maxLengthParametersContinued = $._decode_implicit<MaxLengthParametersContinued>(() => _decode_MaxLengthParametersContinued)(_el); },
        "servEvtsList": (_el: _Element): void => { servEvtsList = $._decode_implicit<ServEvtsList>(() => _decode_ServEvtsList)(_el); },
        "privateDataVersionList": (_el: _Element): void => { privateDataVersionList = $._decode_implicit<PrivateDataVersionList>(() => _decode_PrivateDataVersionList)(_el); },
        "systemStatusTimer": (_el: _Element): void => { systemStatusTimer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "simpleThreshold": (_el: _Element): void => { simpleThreshold = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "filterThreshold": (_el: _Element): void => { filterThreshold = $._decode_implicit<FilterThreshold>(() => _decode_FilterThreshold)(_el); },
        "mediaServiceCapsList": (_el: _Element): void => { mediaServiceCapsList = $._decode_implicit<MediaServiceCapsList>(() => _decode_MediaServiceCapsList)(_el); },
        "maxDeviceHistoryLength": (_el: _Element): void => { maxDeviceHistoryLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxDestinationDevicesForDeflect": (_el: _Element): void => { maxDestinationDevicesForDeflect = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSwitchingFunctionCapsResult,
        _extension_additions_list_spec_for_GetSwitchingFunctionCapsResult,
        _root_component_type_list_2_spec_for_GetSwitchingFunctionCapsResult,
        undefined,
    );
    return new GetSwitchingFunctionCapsResult(
        switchingSubDomainName,
        manufacturerName,
        profiles,
        deviceIDFormat,
        swDomainFeatures,
        swAppearanceAddressability,
        swAppearanceTypes,
        ignoreUnsupportedParameters,
        callCharacteristicsSupported,
        mediaClassSupport,
        numberOfChannels,
        maxChannelBind,
        miscMediaCallCharacteristics,
        connectionRateList,
        delayToleranceList,
        pauseTime,
        currentTime,
        messageSeqNumbers,
        timeStampMode,
        securityMode,
        securityFormat,
        privateDataFormat,
        transAndConfSetup,
        monitorFilterItems,
        miscMonitorCaps,
        correlatorDataSupported,
        dynamicFeatureSupported,
        callLinkageOptions,
        aCDModels,
        agentLogOnModels,
        agentStateModels,
        connectionView,
        maxLengthParameters,
        maxLengthParametersContinued,
        servEvtsList,
        privateDataVersionList,
        systemStatusTimer,
        simpleThreshold,
        filterThreshold,
        mediaServiceCapsList,
        maxDeviceHistoryLength,
        maxDestinationDevicesForDeflect,
        extensions
    );
}; }
    return _cached_decoder_for_GetSwitchingFunctionCapsResult(el);
}

let _cached_encoder_for_GetSwitchingFunctionCapsResult: $.ASN1Encoder<GetSwitchingFunctionCapsResult> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionCapsResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionCapsResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionCapsResult (value: GetSwitchingFunctionCapsResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionCapsResult) { _cached_encoder_for_GetSwitchingFunctionCapsResult = function (value: GetSwitchingFunctionCapsResult, elGetter: $.ASN1Encoder<GetSwitchingFunctionCapsResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.switchingSubDomainName, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.manufacturerName, $.BER),
            /* REQUIRED   */ _encode_Profiles(value.profiles, $.BER),
            /* REQUIRED   */ _encode_DeviceIDFormat(value.deviceIDFormat, $.BER),
            /* REQUIRED   */ _encode_SwDomainFeatures(value.swDomainFeatures, $.BER),
            /* REQUIRED   */ _encode_SwAppearanceAddressability(value.swAppearanceAddressability, $.BER),
            /* REQUIRED   */ _encode_SwAppearanceTypes(value.swAppearanceTypes, $.BER),
            /* REQUIRED   */ _encode_IgnoreUnsupportedParameters(value.ignoreUnsupportedParameters, $.BER),
            /* IF_ABSENT  */ ((value.callCharacteristicsSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristicsSupported, $.BER)),
            /* IF_ABSENT  */ ((value.mediaClassSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMediaClass, $.BER)(value.mediaClassSupport, $.BER)),
            /* IF_ABSENT  */ ((value.numberOfChannels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NumberOfChannels, $.BER)(value.numberOfChannels, $.BER)),
            /* IF_ABSENT  */ ((value.maxChannelBind === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MaxChannelBind, $.BER)(value.maxChannelBind, $.BER)),
            /* IF_ABSENT  */ ((value.miscMediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MiscMediaCallCharacteristics, $.BER)(value.miscMediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.connectionRateList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ConnectionRateList, $.BER)(value.connectionRateList, $.BER)),
            /* IF_ABSENT  */ ((value.delayToleranceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DelayToleranceList, $.BER)(value.delayToleranceList, $.BER)),
            /* IF_ABSENT  */ ((value.pauseTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PauseTime, $.BER)(value.pauseTime, $.BER)),
            /* IF_ABSENT  */ ((value.currentTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TimeInfo, $.BER)(value.currentTime, $.BER)),
            /* IF_ABSENT  */ ((value.messageSeqNumbers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MessageSeqNumbers, $.BER)(value.messageSeqNumbers, $.BER)),
            /* IF_ABSENT  */ ((value.timeStampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TimeStampMode, $.BER)(value.timeStampMode, $.BER)),
            /* IF_ABSENT  */ ((value.securityMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SecurityMode, $.BER)(value.securityMode, $.BER)),
            /* IF_ABSENT  */ ((value.securityFormat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SecurityFormat, $.BER)(value.securityFormat, $.BER)),
            /* IF_ABSENT  */ ((value.privateDataFormat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SecurityFormat, $.BER)(value.privateDataFormat, $.BER)),
            /* IF_ABSENT  */ ((value.transAndConfSetup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_TransAndConfSetup, $.BER)(value.transAndConfSetup, $.BER)),
            /* IF_ABSENT  */ ((value.monitorFilterItems === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_MonitorFilterItems, $.BER)(value.monitorFilterItems, $.BER)),
            /* IF_ABSENT  */ ((value.miscMonitorCaps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_MiscMonitorCaps, $.BER)(value.miscMonitorCaps, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorDataSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.correlatorDataSupported, $.BER)),
            /* IF_ABSENT  */ ((value.dynamicFeatureSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_DynamicFeatureSupported, $.BER)(value.dynamicFeatureSupported, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_CallLinkageOptions, $.BER)(value.callLinkageOptions, $.BER)),
            /* IF_ABSENT  */ ((value.aCDModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_ACDModels, $.BER)(value.aCDModels, $.BER)),
            /* IF_ABSENT  */ ((value.agentLogOnModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_AgentLogOnModels, $.BER)(value.agentLogOnModels, $.BER)),
            /* IF_ABSENT  */ ((value.agentStateModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_AgentStateModels, $.BER)(value.agentStateModels, $.BER)),
            /* REQUIRED   */ _encode_ConnectionView(value.connectionView, $.BER),
            /* REQUIRED   */ _encode_MaxLengthParameters(value.maxLengthParameters, $.BER),
            /* IF_ABSENT  */ ((value.maxLengthParametersContinued === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_MaxLengthParametersContinued, $.BER)(value.maxLengthParametersContinued, $.BER)),
            /* IF_ABSENT  */ ((value.servEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_ServEvtsList, $.BER)(value.servEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.privateDataVersionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_PrivateDataVersionList, $.BER)(value.privateDataVersionList, $.BER)),
            /* IF_ABSENT  */ ((value.systemStatusTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.systemStatusTimer, $.BER)),
            /* IF_ABSENT  */ ((value.simpleThreshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.simpleThreshold, $.BER)),
            /* IF_ABSENT  */ ((value.filterThreshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_FilterThreshold, $.BER)(value.filterThreshold, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceCapsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_MediaServiceCapsList, $.BER)(value.mediaServiceCapsList, $.BER)),
            /* IF_ABSENT  */ ((value.maxDeviceHistoryLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER)(value.maxDeviceHistoryLength, $.BER)),
            /* IF_ABSENT  */ ((value.maxDestinationDevicesForDeflect === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.maxDestinationDevicesForDeflect, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSwitchingFunctionCapsResult(value, elGetter);
}


/* eslint-enable */
