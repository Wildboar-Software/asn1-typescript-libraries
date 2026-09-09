/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LampList, _decode_LampList, _encode_LampList } from "../CSTA-get-lamp-information/LampList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLampInformationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLampInformationResult ::= SEQUENCE
 * {    lampList             LampList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLampInformationResult {
    constructor (
        /**
         * @summary `lampList`.
         * @public
         * @readonly
         */
        readonly lampList: LampList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLampInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLampInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLampInformationResult`.
     * @returns {GetLampInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLampInformationResult)]: (GetLampInformationResult)[_K] }): GetLampInformationResult {
        return new GetLampInformationResult(_o.lampList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLampInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLampInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("lampList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLampInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLampInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLampInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLampInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLampInformationResult: $.ASN1Decoder<GetLampInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampInformationResult (el: _Element): GetLampInformationResult {
    if (!_cached_decoder_for_GetLampInformationResult) { _cached_decoder_for_GetLampInformationResult = function (el: _Element): GetLampInformationResult {
    let lampList!: LampList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "lampList": (_el: _Element): void => { lampList = _decode_LampList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLampInformationResult,
        _extension_additions_list_spec_for_GetLampInformationResult,
        _root_component_type_list_2_spec_for_GetLampInformationResult,
        undefined,
    );
    return new GetLampInformationResult(
        lampList,
        extensions
    );
}; }
    return _cached_decoder_for_GetLampInformationResult(el);
}

let _cached_encoder_for_GetLampInformationResult: $.ASN1Encoder<GetLampInformationResult> | null = null;

/**
 * @summary Encodes a(n) GetLampInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampInformationResult (value: GetLampInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampInformationResult) { _cached_encoder_for_GetLampInformationResult = function (value: GetLampInformationResult, elGetter: $.ASN1Encoder<GetLampInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LampList(value.lampList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLampInformationResult(value, elGetter);
}


/* eslint-enable */
