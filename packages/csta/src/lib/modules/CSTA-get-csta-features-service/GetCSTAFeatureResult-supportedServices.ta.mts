/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CapExchangeServList, _decode_CapExchangeServList, _encode_CapExchangeServList } from "../CSTA-capability-exchange/CapExchangeServList.ta.mjs";

import { SystemStatusServList, _decode_SystemStatusServList, _encode_SystemStatusServList } from "../CSTA-capability-exchange/SystemStatusServList.ta.mjs";

import { MonitoringServList, _decode_MonitoringServList, _encode_MonitoringServList } from "../CSTA-capability-exchange/MonitoringServList.ta.mjs";

import { SnapshotServList, _decode_SnapshotServList, _encode_SnapshotServList } from "../CSTA-capability-exchange/SnapshotServList.ta.mjs";

import { CallControlServList, _decode_CallControlServList, _encode_CallControlServList } from "../CSTA-capability-exchange/CallControlServList.ta.mjs";

import { CallAssociatedServList, _decode_CallAssociatedServList, _encode_CallAssociatedServList } from "../CSTA-capability-exchange/CallAssociatedServList.ta.mjs";

import { MediaServList, _decode_MediaServList, _encode_MediaServList } from "../CSTA-capability-exchange/MediaServList.ta.mjs";

import { RouteingServList, _decode_RouteingServList, _encode_RouteingServList } from "../CSTA-capability-exchange/RouteingServList.ta.mjs";

import { PhysDevServList, _decode_PhysDevServList, _encode_PhysDevServList } from "../CSTA-capability-exchange/PhysDevServList.ta.mjs";

import { LogicalServList, _decode_LogicalServList, _encode_LogicalServList } from "../CSTA-capability-exchange/LogicalServList.ta.mjs";

import { IOServicesServList, _decode_IOServicesServList, _encode_IOServicesServList } from "../CSTA-capability-exchange/IOServicesServList.ta.mjs";

import { DataCollectionServList, _decode_DataCollectionServList, _encode_DataCollectionServList } from "../CSTA-capability-exchange/DataCollectionServList.ta.mjs";

import { VoiceUnitServList, _decode_VoiceUnitServList, _encode_VoiceUnitServList } from "../CSTA-capability-exchange/VoiceUnitServList.ta.mjs";

import { CDRServList, _decode_CDRServList, _encode_CDRServList } from "../CSTA-capability-exchange/CDRServList.ta.mjs";

import { VendorSpecificServList, _decode_VendorSpecificServList, _encode_VendorSpecificServList } from "../CSTA-capability-exchange/VendorSpecificServList.ta.mjs";



import { LocationServicesServList, _decode_LocationServicesServList, _encode_LocationServicesServList } from "../CSTA-capability-exchange/LocationServicesServList.ta.mjs";

/**
 * @summary GetCSTAFeatureResult_supportedServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCSTAFeatureResult-supportedServices ::= SEQUENCE {
 *     capExchangeServList [0] CapExchangeServList OPTIONAL,
 *     systemStatServList [1] SystemStatusServList OPTIONAL,
 *     monitoringServList [2] MonitoringServList OPTIONAL,
 *     snapshotServList [3] SnapshotServList OPTIONAL,
 *     callControlServList [4] CallControlServList OPTIONAL,
 *     callAssociatedServList [5] CallAssociatedServList OPTIONAL,
 *     mediaServList [6] MediaServList OPTIONAL,
 *     routeingServList [7] RouteingServList OPTIONAL,
 *     physDevServList [8] PhysDevServList OPTIONAL,
 *     logicalServList [9] LogicalServList OPTIONAL,
 *     iOServicesServList [10] IOServicesServList OPTIONAL,
 *     dataCollectionServList [11] DataCollectionServList OPTIONAL,
 *     voiceServList [12] VoiceUnitServList OPTIONAL,
 *     cDRServList [13] CDRServList OPTIONAL,
 *     vendorSpecificServList [14] VendorSpecificServList OPTIONAL,
 *     locationServicesServList [15] LocationServicesServList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GetCSTAFeatureResult_supportedServices {
    constructor (
        /**
         * @summary `capExchangeServList`.
         * @public
         * @readonly
         */
        readonly capExchangeServList: OPTIONAL<CapExchangeServList>,
        /**
         * @summary `systemStatServList`.
         * @public
         * @readonly
         */
        readonly systemStatServList: OPTIONAL<SystemStatusServList>,
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
         * @summary `callAssociatedServList`.
         * @public
         * @readonly
         */
        readonly callAssociatedServList: OPTIONAL<CallAssociatedServList>,
        /**
         * @summary `mediaServList`.
         * @public
         * @readonly
         */
        readonly mediaServList: OPTIONAL<MediaServList>,
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
         * @summary `logicalServList`.
         * @public
         * @readonly
         */
        readonly logicalServList: OPTIONAL<LogicalServList>,
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
         * @summary `voiceServList`.
         * @public
         * @readonly
         */
        readonly voiceServList: OPTIONAL<VoiceUnitServList>,
        /**
         * @summary `cDRServList`.
         * @public
         * @readonly
         */
        readonly cDRServList: OPTIONAL<CDRServList>,
        /**
         * @summary `vendorSpecificServList`.
         * @public
         * @readonly
         */
        readonly vendorSpecificServList: OPTIONAL<VendorSpecificServList>,
        /**
         * @summary `locationServicesServList`.
         * @public
         * @readonly
         */
        readonly locationServicesServList: OPTIONAL<LocationServicesServList>
    ) {}

    /**
     * @summary Restructures an object into a GetCSTAFeatureResult_supportedServices
     * @description
     * 
     * This takes an `object` and converts it to a `GetCSTAFeatureResult_supportedServices`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCSTAFeatureResult_supportedServices`.
     * @returns {GetCSTAFeatureResult_supportedServices}
     */
    public static _from_object (_o: { [_K in keyof (GetCSTAFeatureResult_supportedServices)]: (GetCSTAFeatureResult_supportedServices)[_K] }): GetCSTAFeatureResult_supportedServices {
        return new GetCSTAFeatureResult_supportedServices(_o.capExchangeServList, _o.systemStatServList, _o.monitoringServList, _o.snapshotServList, _o.callControlServList, _o.callAssociatedServList, _o.mediaServList, _o.routeingServList, _o.physDevServList, _o.logicalServList, _o.iOServicesServList, _o.dataCollectionServList, _o.voiceServList, _o.cDRServList, _o.vendorSpecificServList, _o.locationServicesServList);
    }


}

/**
 * @summary The Leading Root Component Types of GetCSTAFeatureResult_supportedServices
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCSTAFeatureResult_supportedServices: $.ComponentSpec[] = [
    new $.ComponentSpec("capExchangeServList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("systemStatServList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("monitoringServList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("snapshotServList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callControlServList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callAssociatedServList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mediaServList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routeingServList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("physDevServList", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("logicalServList", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("iOServicesServList", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("dataCollectionServList", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("voiceServList", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("cDRServList", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("vendorSpecificServList", true, $.hasTag(_TagClass.context, 14)),
        new $.ComponentSpec("locationServicesServList", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of GetCSTAFeatureResult_supportedServices
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCSTAFeatureResult_supportedServices: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCSTAFeatureResult_supportedServices
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCSTAFeatureResult_supportedServices: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCSTAFeatureResult_supportedServices: $.ASN1Decoder<GetCSTAFeatureResult_supportedServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCSTAFeatureResult_supportedServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCSTAFeatureResult_supportedServices (el: _Element): GetCSTAFeatureResult_supportedServices {
    if (!_cached_decoder_for_GetCSTAFeatureResult_supportedServices) { _cached_decoder_for_GetCSTAFeatureResult_supportedServices = function (el: _Element): GetCSTAFeatureResult_supportedServices {
    let capExchangeServList: OPTIONAL<CapExchangeServList>;
    let systemStatServList: OPTIONAL<SystemStatusServList>;
    let monitoringServList: OPTIONAL<MonitoringServList>;
    let snapshotServList: OPTIONAL<SnapshotServList>;
    let callControlServList: OPTIONAL<CallControlServList>;
    let callAssociatedServList: OPTIONAL<CallAssociatedServList>;
    let mediaServList: OPTIONAL<MediaServList>;
    let routeingServList: OPTIONAL<RouteingServList>;
    let physDevServList: OPTIONAL<PhysDevServList>;
    let logicalServList: OPTIONAL<LogicalServList>;
    let iOServicesServList: OPTIONAL<IOServicesServList>;
    let dataCollectionServList: OPTIONAL<DataCollectionServList>;
    let voiceServList: OPTIONAL<VoiceUnitServList>;
    let cDRServList: OPTIONAL<CDRServList>;
    let vendorSpecificServList: OPTIONAL<VendorSpecificServList>;
    let locationServicesServList: OPTIONAL<LocationServicesServList>;
    const callbacks: $.DecodingMap = {
        "capExchangeServList": (_el: _Element): void => { capExchangeServList = $._decode_explicit<CapExchangeServList>(() => _decode_CapExchangeServList)(_el); },
        "systemStatServList": (_el: _Element): void => { systemStatServList = $._decode_explicit<SystemStatusServList>(() => _decode_SystemStatusServList)(_el); },
        "monitoringServList": (_el: _Element): void => { monitoringServList = $._decode_explicit<MonitoringServList>(() => _decode_MonitoringServList)(_el); },
        "snapshotServList": (_el: _Element): void => { snapshotServList = $._decode_explicit<SnapshotServList>(() => _decode_SnapshotServList)(_el); },
        "callControlServList": (_el: _Element): void => { callControlServList = $._decode_explicit<CallControlServList>(() => _decode_CallControlServList)(_el); },
        "callAssociatedServList": (_el: _Element): void => { callAssociatedServList = $._decode_explicit<CallAssociatedServList>(() => _decode_CallAssociatedServList)(_el); },
        "mediaServList": (_el: _Element): void => { mediaServList = $._decode_explicit<MediaServList>(() => _decode_MediaServList)(_el); },
        "routeingServList": (_el: _Element): void => { routeingServList = $._decode_explicit<RouteingServList>(() => _decode_RouteingServList)(_el); },
        "physDevServList": (_el: _Element): void => { physDevServList = $._decode_explicit<PhysDevServList>(() => _decode_PhysDevServList)(_el); },
        "logicalServList": (_el: _Element): void => { logicalServList = $._decode_explicit<LogicalServList>(() => _decode_LogicalServList)(_el); },
        "iOServicesServList": (_el: _Element): void => { iOServicesServList = $._decode_explicit<IOServicesServList>(() => _decode_IOServicesServList)(_el); },
        "dataCollectionServList": (_el: _Element): void => { dataCollectionServList = $._decode_explicit<DataCollectionServList>(() => _decode_DataCollectionServList)(_el); },
        "voiceServList": (_el: _Element): void => { voiceServList = $._decode_explicit<VoiceUnitServList>(() => _decode_VoiceUnitServList)(_el); },
        "cDRServList": (_el: _Element): void => { cDRServList = $._decode_explicit<CDRServList>(() => _decode_CDRServList)(_el); },
        "vendorSpecificServList": (_el: _Element): void => { vendorSpecificServList = $._decode_explicit<VendorSpecificServList>(() => _decode_VendorSpecificServList)(_el); },
        "locationServicesServList": (_el: _Element): void => { locationServicesServList = $._decode_explicit<LocationServicesServList>(() => _decode_LocationServicesServList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCSTAFeatureResult_supportedServices,
        _extension_additions_list_spec_for_GetCSTAFeatureResult_supportedServices,
        _root_component_type_list_2_spec_for_GetCSTAFeatureResult_supportedServices,
        undefined,
    );
    return new GetCSTAFeatureResult_supportedServices(
        capExchangeServList,
        systemStatServList,
        monitoringServList,
        snapshotServList,
        callControlServList,
        callAssociatedServList,
        mediaServList,
        routeingServList,
        physDevServList,
        logicalServList,
        iOServicesServList,
        dataCollectionServList,
        voiceServList,
        cDRServList,
        vendorSpecificServList,
        locationServicesServList
    );
}; }
    return _cached_decoder_for_GetCSTAFeatureResult_supportedServices(el);
}

let _cached_encoder_for_GetCSTAFeatureResult_supportedServices: $.ASN1Encoder<GetCSTAFeatureResult_supportedServices> | null = null;

/**
 * @summary Encodes a(n) GetCSTAFeatureResult_supportedServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCSTAFeatureResult_supportedServices, encoded as an ASN.1 Element.
 */
export
function _encode_GetCSTAFeatureResult_supportedServices (value: GetCSTAFeatureResult_supportedServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCSTAFeatureResult_supportedServices) { _cached_encoder_for_GetCSTAFeatureResult_supportedServices = function (value: GetCSTAFeatureResult_supportedServices, elGetter: $.ASN1Encoder<GetCSTAFeatureResult_supportedServices>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capExchangeServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_CapExchangeServList, $.BER)(value.capExchangeServList, $.BER)),
            /* IF_ABSENT  */ ((value.systemStatServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SystemStatusServList, $.BER)(value.systemStatServList, $.BER)),
            /* IF_ABSENT  */ ((value.monitoringServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_MonitoringServList, $.BER)(value.monitoringServList, $.BER)),
            /* IF_ABSENT  */ ((value.snapshotServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_SnapshotServList, $.BER)(value.snapshotServList, $.BER)),
            /* IF_ABSENT  */ ((value.callControlServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_CallControlServList, $.BER)(value.callControlServList, $.BER)),
            /* IF_ABSENT  */ ((value.callAssociatedServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_CallAssociatedServList, $.BER)(value.callAssociatedServList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_MediaServList, $.BER)(value.mediaServList, $.BER)),
            /* IF_ABSENT  */ ((value.routeingServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_RouteingServList, $.BER)(value.routeingServList, $.BER)),
            /* IF_ABSENT  */ ((value.physDevServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_PhysDevServList, $.BER)(value.physDevServList, $.BER)),
            /* IF_ABSENT  */ ((value.logicalServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_LogicalServList, $.BER)(value.logicalServList, $.BER)),
            /* IF_ABSENT  */ ((value.iOServicesServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_IOServicesServList, $.BER)(value.iOServicesServList, $.BER)),
            /* IF_ABSENT  */ ((value.dataCollectionServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 11, () => _encode_DataCollectionServList, $.BER)(value.dataCollectionServList, $.BER)),
            /* IF_ABSENT  */ ((value.voiceServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => _encode_VoiceUnitServList, $.BER)(value.voiceServList, $.BER)),
            /* IF_ABSENT  */ ((value.cDRServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 13, () => _encode_CDRServList, $.BER)(value.cDRServList, $.BER)),
            /* IF_ABSENT  */ ((value.vendorSpecificServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 14, () => _encode_VendorSpecificServList, $.BER)(value.vendorSpecificServList, $.BER)),
            /* IF_ABSENT  */ ((value.locationServicesServList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 15, () => _encode_LocationServicesServList, $.BER)(value.locationServicesServList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCSTAFeatureResult_supportedServices(value, elGetter);
}


/* eslint-enable */
