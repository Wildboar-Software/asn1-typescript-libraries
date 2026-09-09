/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    CollectionType,
    _enum_for_CollectionType,
    _decode_CollectionType,
    _encode_CollectionType
} from "../CSTA-start-location-tracking-session/CollectionType.ta.mjs";

import { CollectionFilter, _decode_CollectionFilter, _encode_CollectionFilter } from "../CSTA-start-location-tracking-session/CollectionFilter.ta.mjs";

import {
    ReportingType,
    _enum_for_ReportingType,
    _decode_ReportingType,
    _encode_ReportingType
} from "../CSTA-start-location-tracking-session/ReportingType.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartLocationTrackingSessionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartLocationTrackingSessionArgument ::= SEQUENCE
 * {    locDevice            DeviceID,
 *     collectionType            [0] IMPLICIT CollectionType        OPTIONAL,
 *     collectionInterval        [1] IMPLICIT INTEGER            OPTIONAL,
 *     maxCollections            [2] IMPLICIT INTEGER            OPTIONAL,
 *     collectionFilter        [3] IMPLICIT CollectionFilter        OPTIONAL,
 *     reportingType            [4] IMPLICIT ReportingType        OPTIONAL,
 *     reportingInterval        [5] IMPLICIT INTEGER            OPTIONAL,
 *     reportingCount            [6] IMPLICIT INTEGER            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartLocationTrackingSessionArgument {
    constructor (
        /**
         * @summary `locDevice`.
         * @public
         * @readonly
         */
        readonly locDevice: DeviceID,
        /**
         * @summary `collectionType`.
         * @public
         * @readonly
         */
        readonly collectionType: OPTIONAL<CollectionType>,
        /**
         * @summary `collectionInterval`.
         * @public
         * @readonly
         */
        readonly collectionInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `maxCollections`.
         * @public
         * @readonly
         */
        readonly maxCollections: OPTIONAL<INTEGER>,
        /**
         * @summary `collectionFilter`.
         * @public
         * @readonly
         */
        readonly collectionFilter: OPTIONAL<CollectionFilter>,
        /**
         * @summary `reportingType`.
         * @public
         * @readonly
         */
        readonly reportingType: OPTIONAL<ReportingType>,
        /**
         * @summary `reportingInterval`.
         * @public
         * @readonly
         */
        readonly reportingInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `reportingCount`.
         * @public
         * @readonly
         */
        readonly reportingCount: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartLocationTrackingSessionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StartLocationTrackingSessionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartLocationTrackingSessionArgument`.
     * @returns {StartLocationTrackingSessionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StartLocationTrackingSessionArgument)]: (StartLocationTrackingSessionArgument)[_K] }): StartLocationTrackingSessionArgument {
        return new StartLocationTrackingSessionArgument(_o.locDevice, _o.collectionType, _o.collectionInterval, _o.maxCollections, _o.collectionFilter, _o.reportingType, _o.reportingInterval, _o.reportingCount, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `collectionType`
         * @public
         * @static
         */

    public static _enum_for_collectionType = _enum_for_CollectionType;        /**
         * @summary The enum used as the type of the component `reportingType`
         * @public
         * @static
         */

    public static _enum_for_reportingType = _enum_for_ReportingType;
}

/**
 * @summary The Leading Root Component Types of StartLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartLocationTrackingSessionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("locDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("collectionType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("collectionInterval", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxCollections", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("collectionFilter", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("reportingType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("reportingInterval", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reportingCount", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartLocationTrackingSessionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartLocationTrackingSessionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartLocationTrackingSessionArgument: $.ASN1Decoder<StartLocationTrackingSessionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartLocationTrackingSessionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartLocationTrackingSessionArgument (el: _Element): StartLocationTrackingSessionArgument {
    if (!_cached_decoder_for_StartLocationTrackingSessionArgument) { _cached_decoder_for_StartLocationTrackingSessionArgument = function (el: _Element): StartLocationTrackingSessionArgument {
    let locDevice!: DeviceID;
    let collectionType: OPTIONAL<CollectionType>;
    let collectionInterval: OPTIONAL<INTEGER>;
    let maxCollections: OPTIONAL<INTEGER>;
    let collectionFilter: OPTIONAL<CollectionFilter>;
    let reportingType: OPTIONAL<ReportingType>;
    let reportingInterval: OPTIONAL<INTEGER>;
    let reportingCount: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locDevice": (_el: _Element): void => { locDevice = _decode_DeviceID(_el); },
        "collectionType": (_el: _Element): void => { collectionType = $._decode_implicit<CollectionType>(() => _decode_CollectionType)(_el); },
        "collectionInterval": (_el: _Element): void => { collectionInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxCollections": (_el: _Element): void => { maxCollections = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "collectionFilter": (_el: _Element): void => { collectionFilter = $._decode_implicit<CollectionFilter>(() => _decode_CollectionFilter)(_el); },
        "reportingType": (_el: _Element): void => { reportingType = $._decode_implicit<ReportingType>(() => _decode_ReportingType)(_el); },
        "reportingInterval": (_el: _Element): void => { reportingInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "reportingCount": (_el: _Element): void => { reportingCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartLocationTrackingSessionArgument,
        _extension_additions_list_spec_for_StartLocationTrackingSessionArgument,
        _root_component_type_list_2_spec_for_StartLocationTrackingSessionArgument,
        undefined,
    );
    return new StartLocationTrackingSessionArgument(
        locDevice,
        collectionType,
        collectionInterval,
        maxCollections,
        collectionFilter,
        reportingType,
        reportingInterval,
        reportingCount,
        extensions
    );
}; }
    return _cached_decoder_for_StartLocationTrackingSessionArgument(el);
}

let _cached_encoder_for_StartLocationTrackingSessionArgument: $.ASN1Encoder<StartLocationTrackingSessionArgument> | null = null;

/**
 * @summary Encodes a(n) StartLocationTrackingSessionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartLocationTrackingSessionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StartLocationTrackingSessionArgument (value: StartLocationTrackingSessionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartLocationTrackingSessionArgument) { _cached_encoder_for_StartLocationTrackingSessionArgument = function (value: StartLocationTrackingSessionArgument, elGetter: $.ASN1Encoder<StartLocationTrackingSessionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.locDevice, $.BER),
            /* IF_ABSENT  */ ((value.collectionType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CollectionType, $.BER)(value.collectionType, $.BER)),
            /* IF_ABSENT  */ ((value.collectionInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.collectionInterval, $.BER)),
            /* IF_ABSENT  */ ((value.maxCollections === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.maxCollections, $.BER)),
            /* IF_ABSENT  */ ((value.collectionFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CollectionFilter, $.BER)(value.collectionFilter, $.BER)),
            /* IF_ABSENT  */ ((value.reportingType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ReportingType, $.BER)(value.reportingType, $.BER)),
            /* IF_ABSENT  */ ((value.reportingInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.reportingInterval, $.BER)),
            /* IF_ABSENT  */ ((value.reportingCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.reportingCount, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartLocationTrackingSessionArgument(value, elGetter);
}


/* eslint-enable */
