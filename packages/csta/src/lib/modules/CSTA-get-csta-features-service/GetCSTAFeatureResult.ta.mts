/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    type OPTIONAL,
    type SEQUENCE,
    type SET,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    GetCSTAFeatureResult_supportedServices,
    _decode_GetCSTAFeatureResult_supportedServices,
    _encode_GetCSTAFeatureResult_supportedServices
} from "../CSTA-get-csta-features-service/GetCSTAFeatureResult-supportedServices.ta.mjs";

import {
    GetCSTAFeatureResult_supportedEvents,
    _decode_GetCSTAFeatureResult_supportedEvents,
    _encode_GetCSTAFeatureResult_supportedEvents
} from "../CSTA-get-csta-features-service/GetCSTAFeatureResult-supportedEvents.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetCSTAFeatureResult
 * @description
 *
 * Positive acknowledgement (ECMA-269 Table 13-3). Lists services
 * and events supported by some or all devices; use Get Logical or
 * Physical Device Information for a specific device.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCSTAFeatureResult ::= SEQUENCE
 * {    supportedServices SEQUENCE 
 *     {    capExchangeServList         [ 0] CapExchangeServList    type OPTIONAL,
 *         systemStatServList         [ 1] SystemStatusServList     type OPTIONAL,
 *         monitoringServList         [ 2] MonitoringServList     type OPTIONAL,
 *         snapshotServList          [ 3] SnapshotServList         type OPTIONAL,
 *         callControlServList         [ 4] CallControlServList     type OPTIONAL,
 *         callAssociatedServList         [ 5] CallAssociatedServList     type OPTIONAL,
 *         mediaServList            [ 6] MediaServList         type OPTIONAL,
 *         routeingServList        [ 7] RouteingServList         type OPTIONAL,
 *         physDevServList            [ 8] PhysDevServList        type OPTIONAL,
 *         logicalServList            [ 9] LogicalServList         type OPTIONAL,
 *         iOServicesServList        [10] IOServicesServList     type OPTIONAL,
 *         dataCollectionServList        [11] DataCollectionServList     type OPTIONAL,
 *         voiceServList            [12] VoiceUnitServList         type OPTIONAL,
 *         cDRServList            [13] CDRServList         type OPTIONAL,
 *         vendorSpecificServList        [14] VendorSpecificServList     type OPTIONAL,
 *         locationServicesServList    [15] LocationServicesServList     OPTIONAL },
 *     supportedEvents SEQUENCE 
 *     {    callControlEvtsList        [0] CallControlEvtsList     type OPTIONAL,
 *         callAssociatedEvtsList        [1] CallAssociatedEvtsList     type OPTIONAL,
 *         mediaEvtsList            [2] MediaEvtsList         type OPTIONAL,
 *         physDevEvtsList            [3] PhysDevEvtsList         type OPTIONAL,
 *         logicalEvtsList            [4] LogicalEvtsList         type OPTIONAL,
 *         deviceMaintEvtsList        [5] DeviceMaintEvtsList     type OPTIONAL,
 *         voiceEvtsList            [6] VoiceUnitEvtsList         type OPTIONAL,
 *         vendorSpecificEvtsList        [7] VendorSpecificEvtsList     OPTIONAL }    type OPTIONAL,
 *     extensions                CSTACommonArguments                OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetCSTAFeatureResult {
    /**
     * @summary `supportedServices`.
     * @description
     *
     * Mandatory bitmaps of supported services, grouped by category
     * (capability exchange, system, monitoring, snapshot, call
     * control, call associated, media, routeing, physical, logical,
     * I/O, data collection, voice, CDR, vendor-specific, location).
     * Omitted category or bit: not supported by any device.
     * @public
     * @readonly
     */
    public readonly supportedServices: GetCSTAFeatureResult_supportedServices;
    /**
     * @summary `supportedEvents`.
     * @description
     *
     * Optional bitmaps of supported events (call control, call
     * associated, media, physical, logical, device maintenance,
     * voice, vendor-specific). Omitted bit: not supported by any
     * device.
     * @public
     * @readonly
     */
    public readonly supportedEvents?: OPTIONAL<GetCSTAFeatureResult_supportedEvents>;
    /**
     * @summary `extensions`.
     * @description
     *
     * Optional security (timestamp, sequence, securityInfo) and privateData. ECMA-269 Table 13-3.
     * @public
     * @readonly
     */
    public readonly extensions?: OPTIONAL<CSTACommonArguments>;

    constructor (
        supportedServices: GetCSTAFeatureResult_supportedServices,
        supportedEvents?: OPTIONAL<GetCSTAFeatureResult_supportedEvents>,
        extensions?: OPTIONAL<CSTACommonArguments>
    ) {
        this.supportedServices = supportedServices;
        this.supportedEvents = supportedEvents;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a GetCSTAFeatureResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetCSTAFeatureResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCSTAFeatureResult`.
     * @returns {GetCSTAFeatureResult}
     */
    public static _from_object (_o: { [_K in keyof (GetCSTAFeatureResult)]: (GetCSTAFeatureResult)[_K] }): GetCSTAFeatureResult {
        return new GetCSTAFeatureResult(_o.supportedServices, _o.supportedEvents, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetCSTAFeatureResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCSTAFeatureResult: $.ComponentSpec[] = [
    new $.ComponentSpec("supportedServices", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("supportedEvents", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetCSTAFeatureResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCSTAFeatureResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCSTAFeatureResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCSTAFeatureResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCSTAFeatureResult: $.ASN1Decoder<GetCSTAFeatureResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCSTAFeatureResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCSTAFeatureResult (el: _Element): GetCSTAFeatureResult {
    if (!_cached_decoder_for_GetCSTAFeatureResult) { _cached_decoder_for_GetCSTAFeatureResult = function (el: _Element): GetCSTAFeatureResult {
    let supportedServices!: GetCSTAFeatureResult_supportedServices;
    let supportedEvents: OPTIONAL<GetCSTAFeatureResult_supportedEvents>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "supportedServices": (_el: _Element): void => { supportedServices = _decode_GetCSTAFeatureResult_supportedServices(_el); },
        "supportedEvents": (_el: _Element): void => { supportedEvents = _decode_GetCSTAFeatureResult_supportedEvents(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCSTAFeatureResult,
        _extension_additions_list_spec_for_GetCSTAFeatureResult,
        _root_component_type_list_2_spec_for_GetCSTAFeatureResult,
        undefined,
    );
    return new GetCSTAFeatureResult(
        supportedServices,
        supportedEvents,
        extensions
    );
}; }
    return _cached_decoder_for_GetCSTAFeatureResult(el);
}

let _cached_encoder_for_GetCSTAFeatureResult: $.ASN1Encoder<GetCSTAFeatureResult> | null = null;

/**
 * @summary Encodes a(n) GetCSTAFeatureResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCSTAFeatureResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetCSTAFeatureResult (value: GetCSTAFeatureResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCSTAFeatureResult) { _cached_encoder_for_GetCSTAFeatureResult = function (value: GetCSTAFeatureResult, elGetter: $.ASN1Encoder<GetCSTAFeatureResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GetCSTAFeatureResult_supportedServices(value.supportedServices, $.BER),
            /* IF_ABSENT  */ ((value.supportedEvents === undefined) ? undefined : _encode_GetCSTAFeatureResult_supportedEvents(value.supportedEvents, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCSTAFeatureResult(value, elGetter);
}


/* eslint-enable */
