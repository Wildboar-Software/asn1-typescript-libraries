/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    ENUMERATED,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
    _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
    updatesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    periodicWithUpdates /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
    _encode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault
} from "../CSTA-get-location-tracking-capabilities/GetLocationTrackingCapabilitiesResult-collectionTypeDefault.ta.mjs";

import {
    GetLocationTrackingCapabilitiesResult_collectionFilterDefault,
    _enum_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault,
    horizontalMovement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    verticalMovement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    civicAddressChange /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    none /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_GetLocationTrackingCapabilitiesResult_collectionFilterDefault,
    _encode_GetLocationTrackingCapabilitiesResult_collectionFilterDefault
} from "../CSTA-get-location-tracking-capabilities/GetLocationTrackingCapabilitiesResult-collectionFilterDefault.ta.mjs";

import {
    GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
    _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
    immediate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    count /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
    _encode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault
} from "../CSTA-get-location-tracking-capabilities/GetLocationTrackingCapabilitiesResult-reportingTypeDefault.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLocationTrackingCapabilitiesResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult ::= SEQUENCE 
 * {    collectionTypeDefault            ENUMERATED
 *     {    periodic                (0),
 *         updatesOnly                (1),
 *         periodicWithUpdates            (2) },
 *     collectionTypePeriodic            BOOLEAN,
 *     collectionTypeUpdatesOnly        BOOLEAN,
 *     collectionTypePeriodicWithUpdates    BOOLEAN,
 *     collectionIntervalDefault        INTEGER,
 *     collectionIntervalMin            INTEGER,
 *     collectionIntervalMax            INTEGER,
 *     maxCollectionsDefault            INTEGER,
 *     maxCollectionsMin            INTEGER,
 *     maxCollectionsMax            INTEGER,
 *     collectionFilterDefault            ENUMERATED
 *     {    horizontalMovement            (0),
 *         verticalMovement            (1),
 *         civicAddressChange            (2),
 *         none                    (3) },
 *     collectionFilterHorizontal        BOOLEAN,
 *     collectionFilterVertical        BOOLEAN,
 *     collectionFilterCivicAddress        BOOLEAN,
 *     reportingTypeDefault            ENUMERATED
 *     {    immediate                (0),
 *         periodic                (1),
 *         count                    (2) },
 *     reportingTypeImmediate            BOOLEAN,
 *     reportingTypePeriodic            BOOLEAN,
 *     reportingTypeCount            INTEGER,
 *     reportingIntervalDefault        INTEGER,
 *     reportingIntervalMin            INTEGER,
 *     reportingIntervalMax            INTEGER,
 *     reportingCountDefault            INTEGER,
 *     reportingCountMin            INTEGER,
 *     reportingCountMax            INTEGER,
 *     supportsSuspendingTracking        BOOLEAN,
 *     supportsResumingTracking        BOOLEAN,
 *     extensions                CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLocationTrackingCapabilitiesResult {
    constructor (
        /**
         * @summary `collectionTypeDefault`.
         * @public
         * @readonly
         */
        readonly collectionTypeDefault: GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
        /**
         * @summary `collectionTypePeriodic`.
         * @public
         * @readonly
         */
        readonly collectionTypePeriodic: BOOLEAN,
        /**
         * @summary `collectionTypeUpdatesOnly`.
         * @public
         * @readonly
         */
        readonly collectionTypeUpdatesOnly: BOOLEAN,
        /**
         * @summary `collectionTypePeriodicWithUpdates`.
         * @public
         * @readonly
         */
        readonly collectionTypePeriodicWithUpdates: BOOLEAN,
        /**
         * @summary `collectionIntervalDefault`.
         * @public
         * @readonly
         */
        readonly collectionIntervalDefault: INTEGER,
        /**
         * @summary `collectionIntervalMin`.
         * @public
         * @readonly
         */
        readonly collectionIntervalMin: INTEGER,
        /**
         * @summary `collectionIntervalMax`.
         * @public
         * @readonly
         */
        readonly collectionIntervalMax: INTEGER,
        /**
         * @summary `maxCollectionsDefault`.
         * @public
         * @readonly
         */
        readonly maxCollectionsDefault: INTEGER,
        /**
         * @summary `maxCollectionsMin`.
         * @public
         * @readonly
         */
        readonly maxCollectionsMin: INTEGER,
        /**
         * @summary `maxCollectionsMax`.
         * @public
         * @readonly
         */
        readonly maxCollectionsMax: INTEGER,
        /**
         * @summary `collectionFilterDefault`.
         * @public
         * @readonly
         */
        readonly collectionFilterDefault: GetLocationTrackingCapabilitiesResult_collectionFilterDefault,
        /**
         * @summary `collectionFilterHorizontal`.
         * @public
         * @readonly
         */
        readonly collectionFilterHorizontal: BOOLEAN,
        /**
         * @summary `collectionFilterVertical`.
         * @public
         * @readonly
         */
        readonly collectionFilterVertical: BOOLEAN,
        /**
         * @summary `collectionFilterCivicAddress`.
         * @public
         * @readonly
         */
        readonly collectionFilterCivicAddress: BOOLEAN,
        /**
         * @summary `reportingTypeDefault`.
         * @public
         * @readonly
         */
        readonly reportingTypeDefault: GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
        /**
         * @summary `reportingTypeImmediate`.
         * @public
         * @readonly
         */
        readonly reportingTypeImmediate: BOOLEAN,
        /**
         * @summary `reportingTypePeriodic`.
         * @public
         * @readonly
         */
        readonly reportingTypePeriodic: BOOLEAN,
        /**
         * @summary `reportingTypeCount`.
         * @public
         * @readonly
         */
        readonly reportingTypeCount: INTEGER,
        /**
         * @summary `reportingIntervalDefault`.
         * @public
         * @readonly
         */
        readonly reportingIntervalDefault: INTEGER,
        /**
         * @summary `reportingIntervalMin`.
         * @public
         * @readonly
         */
        readonly reportingIntervalMin: INTEGER,
        /**
         * @summary `reportingIntervalMax`.
         * @public
         * @readonly
         */
        readonly reportingIntervalMax: INTEGER,
        /**
         * @summary `reportingCountDefault`.
         * @public
         * @readonly
         */
        readonly reportingCountDefault: INTEGER,
        /**
         * @summary `reportingCountMin`.
         * @public
         * @readonly
         */
        readonly reportingCountMin: INTEGER,
        /**
         * @summary `reportingCountMax`.
         * @public
         * @readonly
         */
        readonly reportingCountMax: INTEGER,
        /**
         * @summary `supportsSuspendingTracking`.
         * @public
         * @readonly
         */
        readonly supportsSuspendingTracking: BOOLEAN,
        /**
         * @summary `supportsResumingTracking`.
         * @public
         * @readonly
         */
        readonly supportsResumingTracking: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLocationTrackingCapabilitiesResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLocationTrackingCapabilitiesResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLocationTrackingCapabilitiesResult`.
     * @returns {GetLocationTrackingCapabilitiesResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLocationTrackingCapabilitiesResult)]: (GetLocationTrackingCapabilitiesResult)[_K] }): GetLocationTrackingCapabilitiesResult {
        return new GetLocationTrackingCapabilitiesResult(_o.collectionTypeDefault, _o.collectionTypePeriodic, _o.collectionTypeUpdatesOnly, _o.collectionTypePeriodicWithUpdates, _o.collectionIntervalDefault, _o.collectionIntervalMin, _o.collectionIntervalMax, _o.maxCollectionsDefault, _o.maxCollectionsMin, _o.maxCollectionsMax, _o.collectionFilterDefault, _o.collectionFilterHorizontal, _o.collectionFilterVertical, _o.collectionFilterCivicAddress, _o.reportingTypeDefault, _o.reportingTypeImmediate, _o.reportingTypePeriodic, _o.reportingTypeCount, _o.reportingIntervalDefault, _o.reportingIntervalMin, _o.reportingIntervalMax, _o.reportingCountDefault, _o.reportingCountMin, _o.reportingCountMax, _o.supportsSuspendingTracking, _o.supportsResumingTracking, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `collectionTypeDefault`
         * @public
         * @static
         */

    public static _enum_for_collectionTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault;        /**
         * @summary The enum used as the type of the component `collectionFilterDefault`
         * @public
         * @static
         */

    public static _enum_for_collectionFilterDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault;        /**
         * @summary The enum used as the type of the component `reportingTypeDefault`
         * @public
         * @static
         */

    public static _enum_for_reportingTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault;
}

/**
 * @summary The Leading Root Component Types of GetLocationTrackingCapabilitiesResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLocationTrackingCapabilitiesResult: $.ComponentSpec[] = [
    new $.ComponentSpec("collectionTypeDefault", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("collectionTypePeriodic", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("collectionTypeUpdatesOnly", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("collectionTypePeriodicWithUpdates", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("collectionIntervalDefault", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("collectionIntervalMin", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("collectionIntervalMax", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maxCollectionsDefault", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maxCollectionsMin", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maxCollectionsMax", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("collectionFilterDefault", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("collectionFilterHorizontal", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("collectionFilterVertical", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("collectionFilterCivicAddress", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("reportingTypeDefault", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("reportingTypeImmediate", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("reportingTypePeriodic", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("reportingTypeCount", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingIntervalDefault", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingIntervalMin", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingIntervalMax", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingCountDefault", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingCountMin", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingCountMax", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("supportsSuspendingTracking", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("supportsResumingTracking", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLocationTrackingCapabilitiesResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLocationTrackingCapabilitiesResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLocationTrackingCapabilitiesResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLocationTrackingCapabilitiesResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLocationTrackingCapabilitiesResult: $.ASN1Decoder<GetLocationTrackingCapabilitiesResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesResult (el: _Element): GetLocationTrackingCapabilitiesResult {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesResult) { _cached_decoder_for_GetLocationTrackingCapabilitiesResult = function (el: _Element): GetLocationTrackingCapabilitiesResult {
    let collectionTypeDefault!: GetLocationTrackingCapabilitiesResult_collectionTypeDefault;
    let collectionTypePeriodic!: BOOLEAN;
    let collectionTypeUpdatesOnly!: BOOLEAN;
    let collectionTypePeriodicWithUpdates!: BOOLEAN;
    let collectionIntervalDefault!: INTEGER;
    let collectionIntervalMin!: INTEGER;
    let collectionIntervalMax!: INTEGER;
    let maxCollectionsDefault!: INTEGER;
    let maxCollectionsMin!: INTEGER;
    let maxCollectionsMax!: INTEGER;
    let collectionFilterDefault!: GetLocationTrackingCapabilitiesResult_collectionFilterDefault;
    let collectionFilterHorizontal!: BOOLEAN;
    let collectionFilterVertical!: BOOLEAN;
    let collectionFilterCivicAddress!: BOOLEAN;
    let reportingTypeDefault!: GetLocationTrackingCapabilitiesResult_reportingTypeDefault;
    let reportingTypeImmediate!: BOOLEAN;
    let reportingTypePeriodic!: BOOLEAN;
    let reportingTypeCount!: INTEGER;
    let reportingIntervalDefault!: INTEGER;
    let reportingIntervalMin!: INTEGER;
    let reportingIntervalMax!: INTEGER;
    let reportingCountDefault!: INTEGER;
    let reportingCountMin!: INTEGER;
    let reportingCountMax!: INTEGER;
    let supportsSuspendingTracking!: BOOLEAN;
    let supportsResumingTracking!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "collectionTypeDefault": (_el: _Element): void => { collectionTypeDefault = _decode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault(_el); },
        "collectionTypePeriodic": (_el: _Element): void => { collectionTypePeriodic = $._decodeBoolean(_el); },
        "collectionTypeUpdatesOnly": (_el: _Element): void => { collectionTypeUpdatesOnly = $._decodeBoolean(_el); },
        "collectionTypePeriodicWithUpdates": (_el: _Element): void => { collectionTypePeriodicWithUpdates = $._decodeBoolean(_el); },
        "collectionIntervalDefault": (_el: _Element): void => { collectionIntervalDefault = $._decodeInteger(_el); },
        "collectionIntervalMin": (_el: _Element): void => { collectionIntervalMin = $._decodeInteger(_el); },
        "collectionIntervalMax": (_el: _Element): void => { collectionIntervalMax = $._decodeInteger(_el); },
        "maxCollectionsDefault": (_el: _Element): void => { maxCollectionsDefault = $._decodeInteger(_el); },
        "maxCollectionsMin": (_el: _Element): void => { maxCollectionsMin = $._decodeInteger(_el); },
        "maxCollectionsMax": (_el: _Element): void => { maxCollectionsMax = $._decodeInteger(_el); },
        "collectionFilterDefault": (_el: _Element): void => { collectionFilterDefault = _decode_GetLocationTrackingCapabilitiesResult_collectionFilterDefault(_el); },
        "collectionFilterHorizontal": (_el: _Element): void => { collectionFilterHorizontal = $._decodeBoolean(_el); },
        "collectionFilterVertical": (_el: _Element): void => { collectionFilterVertical = $._decodeBoolean(_el); },
        "collectionFilterCivicAddress": (_el: _Element): void => { collectionFilterCivicAddress = $._decodeBoolean(_el); },
        "reportingTypeDefault": (_el: _Element): void => { reportingTypeDefault = _decode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault(_el); },
        "reportingTypeImmediate": (_el: _Element): void => { reportingTypeImmediate = $._decodeBoolean(_el); },
        "reportingTypePeriodic": (_el: _Element): void => { reportingTypePeriodic = $._decodeBoolean(_el); },
        "reportingTypeCount": (_el: _Element): void => { reportingTypeCount = $._decodeInteger(_el); },
        "reportingIntervalDefault": (_el: _Element): void => { reportingIntervalDefault = $._decodeInteger(_el); },
        "reportingIntervalMin": (_el: _Element): void => { reportingIntervalMin = $._decodeInteger(_el); },
        "reportingIntervalMax": (_el: _Element): void => { reportingIntervalMax = $._decodeInteger(_el); },
        "reportingCountDefault": (_el: _Element): void => { reportingCountDefault = $._decodeInteger(_el); },
        "reportingCountMin": (_el: _Element): void => { reportingCountMin = $._decodeInteger(_el); },
        "reportingCountMax": (_el: _Element): void => { reportingCountMax = $._decodeInteger(_el); },
        "supportsSuspendingTracking": (_el: _Element): void => { supportsSuspendingTracking = $._decodeBoolean(_el); },
        "supportsResumingTracking": (_el: _Element): void => { supportsResumingTracking = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLocationTrackingCapabilitiesResult,
        _extension_additions_list_spec_for_GetLocationTrackingCapabilitiesResult,
        _root_component_type_list_2_spec_for_GetLocationTrackingCapabilitiesResult,
        undefined,
    );
    return new GetLocationTrackingCapabilitiesResult(
        collectionTypeDefault,
        collectionTypePeriodic,
        collectionTypeUpdatesOnly,
        collectionTypePeriodicWithUpdates,
        collectionIntervalDefault,
        collectionIntervalMin,
        collectionIntervalMax,
        maxCollectionsDefault,
        maxCollectionsMin,
        maxCollectionsMax,
        collectionFilterDefault,
        collectionFilterHorizontal,
        collectionFilterVertical,
        collectionFilterCivicAddress,
        reportingTypeDefault,
        reportingTypeImmediate,
        reportingTypePeriodic,
        reportingTypeCount,
        reportingIntervalDefault,
        reportingIntervalMin,
        reportingIntervalMax,
        reportingCountDefault,
        reportingCountMin,
        reportingCountMax,
        supportsSuspendingTracking,
        supportsResumingTracking,
        extensions
    );
}; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesResult(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesResult: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesResult (value: GetLocationTrackingCapabilitiesResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesResult) { _cached_encoder_for_GetLocationTrackingCapabilitiesResult = function (value: GetLocationTrackingCapabilitiesResult, elGetter: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault(value.collectionTypeDefault, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.collectionTypePeriodic, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.collectionTypeUpdatesOnly, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.collectionTypePeriodicWithUpdates, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.collectionIntervalDefault, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.collectionIntervalMin, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.collectionIntervalMax, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.maxCollectionsDefault, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.maxCollectionsMin, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.maxCollectionsMax, $.BER),
            /* REQUIRED   */ _encode_GetLocationTrackingCapabilitiesResult_collectionFilterDefault(value.collectionFilterDefault, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.collectionFilterHorizontal, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.collectionFilterVertical, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.collectionFilterCivicAddress, $.BER),
            /* REQUIRED   */ _encode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault(value.reportingTypeDefault, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.reportingTypeImmediate, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.reportingTypePeriodic, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingTypeCount, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingIntervalDefault, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingIntervalMin, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingIntervalMax, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingCountDefault, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingCountMin, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.reportingCountMax, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.supportsSuspendingTracking, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.supportsResumingTracking, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesResult(value, elGetter);
}


/* eslint-enable */
