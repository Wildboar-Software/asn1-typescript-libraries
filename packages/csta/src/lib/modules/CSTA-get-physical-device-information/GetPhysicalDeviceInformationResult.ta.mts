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

import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";

import { PhysDevServList, _decode_PhysDevServList, _encode_PhysDevServList } from "../CSTA-capability-exchange/PhysDevServList.ta.mjs";

import { PhysDevEvtsList, _decode_PhysDevEvtsList, _encode_PhysDevEvtsList } from "../CSTA-capability-exchange/PhysDevEvtsList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetPhysicalDeviceInformationResult
 * @description
 *
 * Positive acknowledgement (ECMA-269 Table 13-7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetPhysicalDeviceInformationResult ::= SEQUENCE
 * {     deviceCategory                 [ 0] IMPLICIT DeviceCategory         DEFAULT station,
 *     groupDeviceAttributes             [ 1] IMPLICIT GroupDeviceAttributes     OPTIONAL,
 *     namedDeviceTypes             [ 2] IMPLICIT NamedDeviceTypes         OPTIONAL,
 *     hasLogicalElement             BOOLEAN,
 *     otherLogicalDeviceList             [ 3] IMPLICIT SEQUENCE OF DeviceID     OPTIONAL,
 *     deviceModelName             [ 4] IMPLICIT IA5String (SIZE(0..64))    OPTIONAL,
 *     deviceOnDeviceMonitorFilter         [ 5] IMPLICIT MonitorFilter         OPTIONAL,
 *     deviceOnConnectionMonitorFilter     [ 6] IMPLICIT MonitorFilter         OPTIONAL,
 *     callOnDeviceMonitorFilter         [ 7] IMPLICIT MonitorFilter         OPTIONAL,
 *     callOnConnectionMonitorFilter         [ 8] IMPLICIT MonitorFilter         OPTIONAL,
 *     maxDisplays                 [ 9] IMPLICIT INTEGER             OPTIONAL,
 *     maxButtons                 [10] IMPLICIT INTEGER             OPTIONAL,
 *     maxLamps                 [11] IMPLICIT INTEGER             OPTIONAL,
 *     maxRingPatterns             [12] IMPLICIT INTEGER             OPTIONAL,
 *     physDevServList             [13] IMPLICIT PhysDevServList         OPTIONAL,
 *     physDevEvtsList             [14] IMPLICIT PhysDevEvtsList         OPTIONAL,
 *     extensions                 CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetPhysicalDeviceInformationResult {
    constructor (
        /**
         * @summary `deviceCategory`.
         * @description
         *
         * Category of the queried device (station default). Same set as
         * Get Logical Device Information.
         * @public
         * @readonly
         */
        readonly deviceCategory: OPTIONAL<DeviceCategory>,
        /**
         * @summary `groupDeviceAttributes`.
         * @description
         *
         * Group attributes. Shall be present iff `deviceCategory` is
         * Group.
         * @public
         * @readonly
         */
        readonly groupDeviceAttributes: OPTIONAL<GroupDeviceAttributes>,
        /**
         * @summary `namedDeviceTypes`.
         * @description
         *
         * Named device type assigned by the SF, if any.
         * @public
         * @readonly
         */
        readonly namedDeviceTypes: OPTIONAL<NamedDeviceTypes>,
        /**
         * @summary `hasLogicalElement`.
         * @description
         *
         * TRUE if this DeviceID also has a logical element; use Get
         * Logical Device Information with the same identifier.
         * @public
         * @readonly
         */
        readonly hasLogicalElement: BOOLEAN,
        /**
         * @summary `otherLogicalDeviceList`.
         * @description
         *
         * Other logical-element DeviceIDs associated with this physical
         * device, limited to observable/controllable devices.
         * @public
         * @readonly
         */
        readonly otherLogicalDeviceList: OPTIONAL<DeviceID[]>,
        /**
         * @summary `deviceModelName`.
         * @description
         *
         * SF-specific model name; omitted if unknown.
         * @public
         * @readonly
         */
        readonly deviceModelName: OPTIONAL<IA5String>,
        /**
         * @summary `deviceOnDeviceMonitorFilter`.
         * @description
         *
         * MonitorFilter for device-type monitoring. Present iff
         * supported. Should match the logical-element filters when the
         * same DeviceID has both elements.
         * @public
         * @readonly
         */
        readonly deviceOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `deviceOnConnectionMonitorFilter`.
         * @description
         *
         * MonitorFilter for connections under device-type monitoring.
         * Present iff supported.
         * @public
         * @readonly
         */
        readonly deviceOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `callOnDeviceMonitorFilter`.
         * @description
         *
         * MonitorFilter for call-type monitoring on the device. Present
         * iff supported.
         * @public
         * @readonly
         */
        readonly callOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `callOnConnectionMonitorFilter`.
         * @description
         *
         * MonitorFilter for call-type monitoring of a connection at this
         * device. Present iff supported.
         * @public
         * @readonly
         */
        readonly callOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `maxDisplays`.
         * @description
         *
         * Max displays; omitted if none or unknown.
         * @public
         * @readonly
         */
        readonly maxDisplays: OPTIONAL<INTEGER>,
        /**
         * @summary `maxButtons`.
         * @description
         *
         * Max buttons; omitted if none or unknown.
         * @public
         * @readonly
         */
        readonly maxButtons: OPTIONAL<INTEGER>,
        /**
         * @summary `maxLamps`.
         * @description
         *
         * Max lamps; omitted if none or unknown.
         * @public
         * @readonly
         */
        readonly maxLamps: OPTIONAL<INTEGER>,
        /**
         * @summary `maxRingPatterns`.
         * @description
         *
         * Max ringer patterns; omitted if no ringer or unknown.
         * @public
         * @readonly
         */
        readonly maxRingPatterns: OPTIONAL<INTEGER>,
        /**
         * @summary `physDevServList`.
         * @description
         *
         * Physical-device feature services supported here.
         * @public
         * @readonly
         */
        readonly physDevServList: OPTIONAL<PhysDevServList>,
        /**
         * @summary `physDevEvtsList`.
         * @description
         *
         * Physical-device feature events supported here.
         * @public
         * @readonly
         */
        readonly physDevEvtsList: OPTIONAL<PhysDevEvtsList>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 13-7.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetPhysicalDeviceInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetPhysicalDeviceInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetPhysicalDeviceInformationResult`.
     * @returns {GetPhysicalDeviceInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (GetPhysicalDeviceInformationResult)]: (GetPhysicalDeviceInformationResult)[_K] }): GetPhysicalDeviceInformationResult {
        return new GetPhysicalDeviceInformationResult(_o.deviceCategory, _o.groupDeviceAttributes, _o.namedDeviceTypes, _o.hasLogicalElement, _o.otherLogicalDeviceList, _o.deviceModelName, _o.deviceOnDeviceMonitorFilter, _o.deviceOnConnectionMonitorFilter, _o.callOnDeviceMonitorFilter, _o.callOnConnectionMonitorFilter, _o.maxDisplays, _o.maxButtons, _o.maxLamps, _o.maxRingPatterns, _o.physDevServList, _o.physDevEvtsList, _o.extensions);
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

    public static _enum_for_namedDeviceTypes = _enum_for_NamedDeviceTypes;
}

/**
 * @summary The Leading Root Component Types of GetPhysicalDeviceInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetPhysicalDeviceInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceCategory", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("groupDeviceAttributes", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("namedDeviceTypes", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("hasLogicalElement", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("otherLogicalDeviceList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deviceModelName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deviceOnDeviceMonitorFilter", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("deviceOnConnectionMonitorFilter", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("callOnDeviceMonitorFilter", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callOnConnectionMonitorFilter", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("maxDisplays", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("maxButtons", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("maxLamps", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("maxRingPatterns", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("physDevServList", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("physDevEvtsList", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetPhysicalDeviceInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetPhysicalDeviceInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetPhysicalDeviceInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetPhysicalDeviceInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetPhysicalDeviceInformationResult: $.ASN1Decoder<GetPhysicalDeviceInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetPhysicalDeviceInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetPhysicalDeviceInformationResult (el: _Element): GetPhysicalDeviceInformationResult {
    if (!_cached_decoder_for_GetPhysicalDeviceInformationResult) { _cached_decoder_for_GetPhysicalDeviceInformationResult = function (el: _Element): GetPhysicalDeviceInformationResult {
    let deviceCategory: OPTIONAL<DeviceCategory> = GetPhysicalDeviceInformationResult._default_value_for_deviceCategory;
    let groupDeviceAttributes: OPTIONAL<GroupDeviceAttributes>;
    let namedDeviceTypes: OPTIONAL<NamedDeviceTypes>;
    let hasLogicalElement!: BOOLEAN;
    let otherLogicalDeviceList: OPTIONAL<DeviceID[]>;
    let deviceModelName: OPTIONAL<IA5String>;
    let deviceOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>;
    let deviceOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>;
    let callOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>;
    let callOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>;
    let maxDisplays: OPTIONAL<INTEGER>;
    let maxButtons: OPTIONAL<INTEGER>;
    let maxLamps: OPTIONAL<INTEGER>;
    let maxRingPatterns: OPTIONAL<INTEGER>;
    let physDevServList: OPTIONAL<PhysDevServList>;
    let physDevEvtsList: OPTIONAL<PhysDevEvtsList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "deviceCategory": (_el: _Element): void => { deviceCategory = $._decode_implicit<DeviceCategory>(() => _decode_DeviceCategory)(_el); },
        "groupDeviceAttributes": (_el: _Element): void => { groupDeviceAttributes = $._decode_implicit<GroupDeviceAttributes>(() => _decode_GroupDeviceAttributes)(_el); },
        "namedDeviceTypes": (_el: _Element): void => { namedDeviceTypes = $._decode_implicit<NamedDeviceTypes>(() => _decode_NamedDeviceTypes)(_el); },
        "hasLogicalElement": (_el: _Element): void => { hasLogicalElement = $._decodeBoolean(_el); },
        "otherLogicalDeviceList": (_el: _Element): void => { otherLogicalDeviceList = $._decode_implicit<DeviceID[]>(() => $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID))(_el); },
        "deviceModelName": (_el: _Element): void => { deviceModelName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "deviceOnDeviceMonitorFilter": (_el: _Element): void => { deviceOnDeviceMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "deviceOnConnectionMonitorFilter": (_el: _Element): void => { deviceOnConnectionMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "callOnDeviceMonitorFilter": (_el: _Element): void => { callOnDeviceMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "callOnConnectionMonitorFilter": (_el: _Element): void => { callOnConnectionMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "maxDisplays": (_el: _Element): void => { maxDisplays = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxButtons": (_el: _Element): void => { maxButtons = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxLamps": (_el: _Element): void => { maxLamps = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxRingPatterns": (_el: _Element): void => { maxRingPatterns = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physDevServList": (_el: _Element): void => { physDevServList = $._decode_implicit<PhysDevServList>(() => _decode_PhysDevServList)(_el); },
        "physDevEvtsList": (_el: _Element): void => { physDevEvtsList = $._decode_implicit<PhysDevEvtsList>(() => _decode_PhysDevEvtsList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetPhysicalDeviceInformationResult,
        _extension_additions_list_spec_for_GetPhysicalDeviceInformationResult,
        _root_component_type_list_2_spec_for_GetPhysicalDeviceInformationResult,
        undefined,
    );
    return new GetPhysicalDeviceInformationResult(
        deviceCategory,
        groupDeviceAttributes,
        namedDeviceTypes,
        hasLogicalElement,
        otherLogicalDeviceList,
        deviceModelName,
        deviceOnDeviceMonitorFilter,
        deviceOnConnectionMonitorFilter,
        callOnDeviceMonitorFilter,
        callOnConnectionMonitorFilter,
        maxDisplays,
        maxButtons,
        maxLamps,
        maxRingPatterns,
        physDevServList,
        physDevEvtsList,
        extensions
    );
}; }
    return _cached_decoder_for_GetPhysicalDeviceInformationResult(el);
}

let _cached_encoder_for_GetPhysicalDeviceInformationResult: $.ASN1Encoder<GetPhysicalDeviceInformationResult> | null = null;

/**
 * @summary Encodes a(n) GetPhysicalDeviceInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetPhysicalDeviceInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetPhysicalDeviceInformationResult (value: GetPhysicalDeviceInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetPhysicalDeviceInformationResult) { _cached_encoder_for_GetPhysicalDeviceInformationResult = function (value: GetPhysicalDeviceInformationResult, elGetter: $.ASN1Encoder<GetPhysicalDeviceInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.deviceCategory === undefined || $.deepEq(value.deviceCategory, GetPhysicalDeviceInformationResult._default_value_for_deviceCategory) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DeviceCategory, $.BER)(value.deviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.groupDeviceAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GroupDeviceAttributes, $.BER)(value.groupDeviceAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.namedDeviceTypes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NamedDeviceTypes, $.BER)(value.namedDeviceTypes, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.hasLogicalElement, $.BER),
            /* IF_ABSENT  */ ((value.otherLogicalDeviceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER), $.BER)(value.otherLogicalDeviceList, $.BER)),
            /* IF_ABSENT  */ ((value.deviceModelName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.deviceModelName, $.BER)),
            /* IF_ABSENT  */ ((value.deviceOnDeviceMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MonitorFilter, $.BER)(value.deviceOnDeviceMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.deviceOnConnectionMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MonitorFilter, $.BER)(value.deviceOnConnectionMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.callOnDeviceMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MonitorFilter, $.BER)(value.callOnDeviceMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.callOnConnectionMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MonitorFilter, $.BER)(value.callOnConnectionMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.maxDisplays === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.maxDisplays, $.BER)),
            /* IF_ABSENT  */ ((value.maxButtons === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maxButtons, $.BER)),
            /* IF_ABSENT  */ ((value.maxLamps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.maxLamps, $.BER)),
            /* IF_ABSENT  */ ((value.maxRingPatterns === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.maxRingPatterns, $.BER)),
            /* IF_ABSENT  */ ((value.physDevServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PhysDevServList, $.BER)(value.physDevServList, $.BER)),
            /* IF_ABSENT  */ ((value.physDevEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_PhysDevEvtsList, $.BER)(value.physDevEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetPhysicalDeviceInformationResult(value, elGetter);
}


/* eslint-enable */
