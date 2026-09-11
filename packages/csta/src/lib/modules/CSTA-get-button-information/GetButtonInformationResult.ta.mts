/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ButtonList, _decode_ButtonList, _encode_ButtonList } from "../CSTA-get-button-information/ButtonList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetButtonInformationResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetButtonInformationResult ::= SEQUENCE
 * {    buttonList             ButtonList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetButtonInformationResult {
    constructor (
        /**
         * @summary `buttonList`.
         * @description
         *
         * One entry per button. Absent `button` in the request yields all
         * buttons.
         * @public
         * @readonly
         */
        readonly buttonList: ButtonList,
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
     * @summary Restructures an object into a GetButtonInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetButtonInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetButtonInformationResult`.
     * @returns {GetButtonInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (GetButtonInformationResult)]: (GetButtonInformationResult)[_K] }): GetButtonInformationResult {
        return new GetButtonInformationResult(_o.buttonList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetButtonInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetButtonInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("buttonList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetButtonInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetButtonInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetButtonInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetButtonInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetButtonInformationResult: $.ASN1Decoder<GetButtonInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetButtonInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetButtonInformationResult (el: _Element): GetButtonInformationResult {
    if (!_cached_decoder_for_GetButtonInformationResult) { _cached_decoder_for_GetButtonInformationResult = function (el: _Element): GetButtonInformationResult {
    let buttonList!: ButtonList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "buttonList": (_el: _Element): void => { buttonList = _decode_ButtonList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetButtonInformationResult,
        _extension_additions_list_spec_for_GetButtonInformationResult,
        _root_component_type_list_2_spec_for_GetButtonInformationResult,
        undefined,
    );
    return new GetButtonInformationResult(
        buttonList,
        extensions
    );
}; }
    return _cached_decoder_for_GetButtonInformationResult(el);
}

let _cached_encoder_for_GetButtonInformationResult: $.ASN1Encoder<GetButtonInformationResult> | null = null;

/**
 * @summary Encodes a(n) GetButtonInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetButtonInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetButtonInformationResult (value: GetButtonInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetButtonInformationResult) { _cached_encoder_for_GetButtonInformationResult = function (value: GetButtonInformationResult, elGetter: $.ASN1Encoder<GetButtonInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ButtonList(value.buttonList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetButtonInformationResult(value, elGetter);
}


/* eslint-enable */
