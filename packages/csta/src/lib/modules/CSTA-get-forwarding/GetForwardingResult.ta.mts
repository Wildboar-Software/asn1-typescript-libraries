/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ForwardList, _decode_ForwardList, _encode_ForwardList } from "../CSTA-device-feature-types/ForwardList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetForwardingResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetForwardingResult ::= SEQUENCE
 * {    forwardingList            ForwardList,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetForwardingResult {
    constructor (
        /**
         * @summary `forwardingList`.
         * @public
         * @readonly
         */
        readonly forwardingList: ForwardList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetForwardingResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetForwardingResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetForwardingResult`.
     * @returns {GetForwardingResult}
     */
    public static _from_object (_o: { [_K in keyof (GetForwardingResult)]: (GetForwardingResult)[_K] }): GetForwardingResult {
        return new GetForwardingResult(_o.forwardingList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetForwardingResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetForwardingResult: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardingList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetForwardingResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetForwardingResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetForwardingResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetForwardingResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetForwardingResult: $.ASN1Decoder<GetForwardingResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetForwardingResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetForwardingResult (el: _Element): GetForwardingResult {
    if (!_cached_decoder_for_GetForwardingResult) { _cached_decoder_for_GetForwardingResult = function (el: _Element): GetForwardingResult {
    let forwardingList!: ForwardList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "forwardingList": (_el: _Element): void => { forwardingList = _decode_ForwardList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetForwardingResult,
        _extension_additions_list_spec_for_GetForwardingResult,
        _root_component_type_list_2_spec_for_GetForwardingResult,
        undefined,
    );
    return new GetForwardingResult(
        forwardingList,
        extensions
    );
}; }
    return _cached_decoder_for_GetForwardingResult(el);
}

let _cached_encoder_for_GetForwardingResult: $.ASN1Encoder<GetForwardingResult> | null = null;

/**
 * @summary Encodes a(n) GetForwardingResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetForwardingResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetForwardingResult (value: GetForwardingResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetForwardingResult) { _cached_encoder_for_GetForwardingResult = function (value: GetForwardingResult, elGetter: $.ASN1Encoder<GetForwardingResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ForwardList(value.forwardingList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetForwardingResult(value, elGetter);
}


/* eslint-enable */
