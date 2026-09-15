/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../CSTA-call-control/LocationInfo.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLocationInformationResult
 * @description
 *
 * PIDF-LO location information (ECMA-269 §28.1.1.2.1 / §12.2.18).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationInformationResult ::= SEQUENCE 
 * {    locationInfo            LocationInfo,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLocationInformationResult {
    constructor (
        /**
         * @summary `locationInfo`.
         * @description
         *
         * PIDF-LO for the device (ECMA-269 §12.2.18).
         *
         * @public
         * @readonly
         */
        readonly locationInfo: LocationInfo,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLocationInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLocationInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLocationInformationResult`.
     * @returns {GetLocationInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLocationInformationResult)]: (GetLocationInformationResult)[_K] }): GetLocationInformationResult {
        return new GetLocationInformationResult(_o.locationInfo, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLocationInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLocationInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLocationInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLocationInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLocationInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLocationInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLocationInformationResult: $.ASN1Decoder<GetLocationInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationInformationResult (el: _Element): GetLocationInformationResult {
    if (!_cached_decoder_for_GetLocationInformationResult) { _cached_decoder_for_GetLocationInformationResult = function (el: _Element): GetLocationInformationResult {
    let locationInfo!: LocationInfo;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locationInfo": (_el: _Element): void => { locationInfo = _decode_LocationInfo(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLocationInformationResult,
        _extension_additions_list_spec_for_GetLocationInformationResult,
        _root_component_type_list_2_spec_for_GetLocationInformationResult,
        undefined,
    );
    return new GetLocationInformationResult(
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_GetLocationInformationResult(el);
}

let _cached_encoder_for_GetLocationInformationResult: $.ASN1Encoder<GetLocationInformationResult> | null = null;

/**
 * @summary Encodes a(n) GetLocationInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationInformationResult (value: GetLocationInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationInformationResult) { _cached_encoder_for_GetLocationInformationResult = function (value: GetLocationInformationResult, elGetter: $.ASN1Encoder<GetLocationInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocationInfo(value.locationInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLocationInformationResult(value, elGetter);
}


/* eslint-enable */
