/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DisplayList, _decode_DisplayList, _encode_DisplayList } from "../CSTA-get-display/DisplayList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetDisplayResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.4.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDisplayResult ::= SEQUENCE
 * {    displayList             DisplayList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetDisplayResult {
    constructor (
        /**
         * @summary `displayList`.
         * @description
         *
         * One entry per queried display.
         * @public
         * @readonly
         */
        readonly displayList: DisplayList,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetDisplayResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetDisplayResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetDisplayResult`.
     * @returns {GetDisplayResult}
     */
    public static _from_object (_o: { [_K in keyof (GetDisplayResult)]: (GetDisplayResult)[_K] }): GetDisplayResult {
        return new GetDisplayResult(_o.displayList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetDisplayResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetDisplayResult: $.ComponentSpec[] = [
    new $.ComponentSpec("displayList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetDisplayResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetDisplayResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetDisplayResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetDisplayResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetDisplayResult: $.ASN1Decoder<GetDisplayResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDisplayResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDisplayResult (el: _Element): GetDisplayResult {
    if (!_cached_decoder_for_GetDisplayResult) { _cached_decoder_for_GetDisplayResult = function (el: _Element): GetDisplayResult {
    let displayList!: DisplayList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "displayList": (_el: _Element): void => { displayList = _decode_DisplayList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetDisplayResult,
        _extension_additions_list_spec_for_GetDisplayResult,
        _root_component_type_list_2_spec_for_GetDisplayResult,
        undefined,
    );
    return new GetDisplayResult(
        displayList,
        extensions
    );
}; }
    return _cached_decoder_for_GetDisplayResult(el);
}

let _cached_encoder_for_GetDisplayResult: $.ASN1Encoder<GetDisplayResult> | null = null;

/**
 * @summary Encodes a(n) GetDisplayResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDisplayResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetDisplayResult (value: GetDisplayResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDisplayResult) { _cached_encoder_for_GetDisplayResult = function (value: GetDisplayResult, elGetter: $.ASN1Encoder<GetDisplayResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DisplayList(value.displayList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetDisplayResult(value, elGetter);
}


/* eslint-enable */
