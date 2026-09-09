/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CallBackList, _decode_CallBackList, _encode_CallBackList } from "../CSTA-get-call-back/CallBackList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetCallBackResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCallBackResult ::= SEQUENCE
 * {    callBackList             CallBackList,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetCallBackResult {
    constructor (
        /**
         * @summary `callBackList`.
         * @public
         * @readonly
         */
        readonly callBackList: CallBackList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetCallBackResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetCallBackResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCallBackResult`.
     * @returns {GetCallBackResult}
     */
    public static _from_object (_o: { [_K in keyof (GetCallBackResult)]: (GetCallBackResult)[_K] }): GetCallBackResult {
        return new GetCallBackResult(_o.callBackList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetCallBackResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCallBackResult: $.ComponentSpec[] = [
    new $.ComponentSpec("callBackList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetCallBackResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCallBackResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCallBackResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCallBackResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCallBackResult: $.ASN1Decoder<GetCallBackResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallBackResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallBackResult (el: _Element): GetCallBackResult {
    if (!_cached_decoder_for_GetCallBackResult) { _cached_decoder_for_GetCallBackResult = function (el: _Element): GetCallBackResult {
    let callBackList!: CallBackList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callBackList": (_el: _Element): void => { callBackList = _decode_CallBackList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCallBackResult,
        _extension_additions_list_spec_for_GetCallBackResult,
        _root_component_type_list_2_spec_for_GetCallBackResult,
        undefined,
    );
    return new GetCallBackResult(
        callBackList,
        extensions
    );
}; }
    return _cached_decoder_for_GetCallBackResult(el);
}

let _cached_encoder_for_GetCallBackResult: $.ASN1Encoder<GetCallBackResult> | null = null;

/**
 * @summary Encodes a(n) GetCallBackResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallBackResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallBackResult (value: GetCallBackResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallBackResult) { _cached_encoder_for_GetCallBackResult = function (value: GetCallBackResult, elGetter: $.ASN1Encoder<GetCallBackResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallBackList(value.callBackList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCallBackResult(value, elGetter);
}


/* eslint-enable */
