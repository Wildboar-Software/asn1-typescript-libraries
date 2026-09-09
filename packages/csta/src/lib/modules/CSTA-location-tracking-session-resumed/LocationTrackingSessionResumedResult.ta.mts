/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary LocationTrackingSessionResumedResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationTrackingSessionResumedResult ::= SEQUENCE 
 * {    extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationTrackingSessionResumedResult {
    constructor (
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a LocationTrackingSessionResumedResult
     * @description
     * 
     * This takes an `object` and converts it to a `LocationTrackingSessionResumedResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationTrackingSessionResumedResult`.
     * @returns {LocationTrackingSessionResumedResult}
     */
    public static _from_object (_o: { [_K in keyof (LocationTrackingSessionResumedResult)]: (LocationTrackingSessionResumedResult)[_K] }): LocationTrackingSessionResumedResult {
        return new LocationTrackingSessionResumedResult(_o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of LocationTrackingSessionResumedResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationTrackingSessionResumedResult: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of LocationTrackingSessionResumedResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationTrackingSessionResumedResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationTrackingSessionResumedResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationTrackingSessionResumedResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationTrackingSessionResumedResult: $.ASN1Decoder<LocationTrackingSessionResumedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationTrackingSessionResumedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationTrackingSessionResumedResult (el: _Element): LocationTrackingSessionResumedResult {
    if (!_cached_decoder_for_LocationTrackingSessionResumedResult) { _cached_decoder_for_LocationTrackingSessionResumedResult = function (el: _Element): LocationTrackingSessionResumedResult {
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationTrackingSessionResumedResult,
        _extension_additions_list_spec_for_LocationTrackingSessionResumedResult,
        _root_component_type_list_2_spec_for_LocationTrackingSessionResumedResult,
        undefined,
    );
    return new LocationTrackingSessionResumedResult(
        extensions
    );
}; }
    return _cached_decoder_for_LocationTrackingSessionResumedResult(el);
}

let _cached_encoder_for_LocationTrackingSessionResumedResult: $.ASN1Encoder<LocationTrackingSessionResumedResult> | null = null;

/**
 * @summary Encodes a(n) LocationTrackingSessionResumedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationTrackingSessionResumedResult, encoded as an ASN.1 Element.
 */
export
function _encode_LocationTrackingSessionResumedResult (value: LocationTrackingSessionResumedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationTrackingSessionResumedResult) { _cached_encoder_for_LocationTrackingSessionResumedResult = function (value: LocationTrackingSessionResumedResult, elGetter: $.ASN1Encoder<LocationTrackingSessionResumedResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationTrackingSessionResumedResult(value, elGetter);
}


/* eslint-enable */
