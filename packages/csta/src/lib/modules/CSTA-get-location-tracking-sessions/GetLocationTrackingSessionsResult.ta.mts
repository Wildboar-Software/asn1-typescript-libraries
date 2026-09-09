/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    GetLocationTrackingSessionsResult_crossRefIDorRegistrationData,
    _decode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData,
    _encode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData
} from "../CSTA-get-location-tracking-sessions/GetLocationTrackingSessionsResult-crossRefIDorRegistrationData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLocationTrackingSessionsResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingSessionsResult ::= SEQUENCE
 * {    crossRefIDorRegistrationData    CHOICE
 *     {    serviceCrossRefID    ServiceCrossRefID,
 *         locationSessionInfoList    LocationSessionInfoList },
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLocationTrackingSessionsResult {
    constructor (
        /**
         * @summary `crossRefIDorRegistrationData`.
         * @public
         * @readonly
         */
        readonly crossRefIDorRegistrationData: GetLocationTrackingSessionsResult_crossRefIDorRegistrationData,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLocationTrackingSessionsResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLocationTrackingSessionsResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLocationTrackingSessionsResult`.
     * @returns {GetLocationTrackingSessionsResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLocationTrackingSessionsResult)]: (GetLocationTrackingSessionsResult)[_K] }): GetLocationTrackingSessionsResult {
        return new GetLocationTrackingSessionsResult(_o.crossRefIDorRegistrationData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLocationTrackingSessionsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLocationTrackingSessionsResult: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIDorRegistrationData", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLocationTrackingSessionsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLocationTrackingSessionsResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLocationTrackingSessionsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLocationTrackingSessionsResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLocationTrackingSessionsResult: $.ASN1Decoder<GetLocationTrackingSessionsResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingSessionsResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingSessionsResult (el: _Element): GetLocationTrackingSessionsResult {
    if (!_cached_decoder_for_GetLocationTrackingSessionsResult) { _cached_decoder_for_GetLocationTrackingSessionsResult = function (el: _Element): GetLocationTrackingSessionsResult {
    let crossRefIDorRegistrationData!: GetLocationTrackingSessionsResult_crossRefIDorRegistrationData;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIDorRegistrationData": (_el: _Element): void => { crossRefIDorRegistrationData = _decode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLocationTrackingSessionsResult,
        _extension_additions_list_spec_for_GetLocationTrackingSessionsResult,
        _root_component_type_list_2_spec_for_GetLocationTrackingSessionsResult,
        undefined,
    );
    return new GetLocationTrackingSessionsResult(
        crossRefIDorRegistrationData,
        extensions
    );
}; }
    return _cached_decoder_for_GetLocationTrackingSessionsResult(el);
}

let _cached_encoder_for_GetLocationTrackingSessionsResult: $.ASN1Encoder<GetLocationTrackingSessionsResult> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingSessionsResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingSessionsResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingSessionsResult (value: GetLocationTrackingSessionsResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingSessionsResult) { _cached_encoder_for_GetLocationTrackingSessionsResult = function (value: GetLocationTrackingSessionsResult, elGetter: $.ASN1Encoder<GetLocationTrackingSessionsResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData(value.crossRefIDorRegistrationData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLocationTrackingSessionsResult(value, elGetter);
}


/* eslint-enable */
