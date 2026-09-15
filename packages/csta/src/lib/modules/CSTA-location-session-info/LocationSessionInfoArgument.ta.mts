/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { LocationSessionInfoList, _decode_LocationSessionInfoList, _encode_LocationSessionInfoList } from "../CSTA-status-reporting/LocationSessionInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary LocationSessionInfoArgument
 * @description
 *
 * One Location Session Info segment: existing location tracking sessions at the
 * time Get Location Tracking Sessions was positively acknowledged. No positive
 * acknowledgement of its own. ECMA-269 §28.1.12.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationSessionInfoArgument ::= SEQUENCE
 * {    serviceCrossRefID        ServiceCrossRefID            OPTIONAL,
 *     segmentID            INTEGER                    OPTIONAL,
 *     lastSegment            BOOLEAN,
 *     locationSessionInfoList        LocationSessionInfoList,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationSessionInfoArgument {
    constructor (
        /**
         * @summary `serviceCrossRefID`.
         * @description
         *
         * Associates this segment with the original request. ECMA-269
         * segmented-response model.
         *
         * @public
         * @readonly
         */
        readonly serviceCrossRefID: OPTIONAL<ServiceCrossRefID>,
        /**
         * @summary `segmentID`.
         * @description
         *
         * Segment number; each successive segment increments by one. ECMA-269.
         *
         * @public
         * @readonly
         */
        readonly segmentID: OPTIONAL<INTEGER>,
        /**
         * @summary `lastSegment`.
         * @description
         *
         * TRUE if this is the last segment for the serviceCrossRefID. ECMA-269.
         *
         * @public
         * @readonly
         */
        readonly lastSegment: BOOLEAN,
        /**
         * @summary `locationSessionInfoList`.
         * @description
         *
         * Zero or more sessions (cross-ref and locDevice). ECMA-269 §28.1.12.
         *
         * @public
         * @readonly
         */
        readonly locationSessionInfoList: LocationSessionInfoList,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTA common arguments (security, private data, timestamps). ECMA-269.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a LocationSessionInfoArgument
     * @description
     * 
     * This takes an `object` and converts it to a `LocationSessionInfoArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationSessionInfoArgument`.
     * @returns {LocationSessionInfoArgument}
     */
    public static _from_object (_o: { [_K in keyof (LocationSessionInfoArgument)]: (LocationSessionInfoArgument)[_K] }): LocationSessionInfoArgument {
        return new LocationSessionInfoArgument(_o.serviceCrossRefID, _o.segmentID, _o.lastSegment, _o.locationSessionInfoList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of LocationSessionInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationSessionInfoArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCrossRefID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("segmentID", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastSegment", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("locationSessionInfoList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of LocationSessionInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationSessionInfoArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationSessionInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationSessionInfoArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationSessionInfoArgument: $.ASN1Decoder<LocationSessionInfoArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationSessionInfoArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationSessionInfoArgument (el: _Element): LocationSessionInfoArgument {
    if (!_cached_decoder_for_LocationSessionInfoArgument) { _cached_decoder_for_LocationSessionInfoArgument = function (el: _Element): LocationSessionInfoArgument {
    let serviceCrossRefID: OPTIONAL<ServiceCrossRefID>;
    let segmentID: OPTIONAL<INTEGER>;
    let lastSegment!: BOOLEAN;
    let locationSessionInfoList!: LocationSessionInfoList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "serviceCrossRefID": (_el: _Element): void => { serviceCrossRefID = _decode_ServiceCrossRefID(_el); },
        "segmentID": (_el: _Element): void => { segmentID = $._decodeInteger(_el); },
        "lastSegment": (_el: _Element): void => { lastSegment = $._decodeBoolean(_el); },
        "locationSessionInfoList": (_el: _Element): void => { locationSessionInfoList = _decode_LocationSessionInfoList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationSessionInfoArgument,
        _extension_additions_list_spec_for_LocationSessionInfoArgument,
        _root_component_type_list_2_spec_for_LocationSessionInfoArgument,
        undefined,
    );
    return new LocationSessionInfoArgument(
        serviceCrossRefID,
        segmentID,
        lastSegment,
        locationSessionInfoList,
        extensions
    );
}; }
    return _cached_decoder_for_LocationSessionInfoArgument(el);
}

let _cached_encoder_for_LocationSessionInfoArgument: $.ASN1Encoder<LocationSessionInfoArgument> | null = null;

/**
 * @summary Encodes a(n) LocationSessionInfoArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationSessionInfoArgument, encoded as an ASN.1 Element.
 */
export
function _encode_LocationSessionInfoArgument (value: LocationSessionInfoArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationSessionInfoArgument) { _cached_encoder_for_LocationSessionInfoArgument = function (value: LocationSessionInfoArgument, elGetter: $.ASN1Encoder<LocationSessionInfoArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.serviceCrossRefID === undefined) ? undefined : _encode_ServiceCrossRefID(value.serviceCrossRefID, $.BER)),
            /* IF_ABSENT  */ ((value.segmentID === undefined) ? undefined : $._encodeInteger(value.segmentID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.lastSegment, $.BER),
            /* REQUIRED   */ _encode_LocationSessionInfoList(value.locationSessionInfoList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationSessionInfoArgument(value, elGetter);
}


/* eslint-enable */
