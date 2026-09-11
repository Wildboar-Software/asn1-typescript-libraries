/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MicrophoneGainList, _decode_MicrophoneGainList, _encode_MicrophoneGainList } from "../CSTA-get-microphone-gain/MicrophoneGainList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetMicrophoneGainResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.9.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneGainResult ::= SEQUENCE
 * {    microphoneGainList        MicrophoneGainList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMicrophoneGainResult {
    constructor (
        /**
         * @summary `microphoneGainList`.
         * @description
         *
         * One entry per queried apparatus.
         * @public
         * @readonly
         */
        readonly microphoneGainList: MicrophoneGainList,
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
     * @summary Restructures an object into a GetMicrophoneGainResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetMicrophoneGainResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMicrophoneGainResult`.
     * @returns {GetMicrophoneGainResult}
     */
    public static _from_object (_o: { [_K in keyof (GetMicrophoneGainResult)]: (GetMicrophoneGainResult)[_K] }): GetMicrophoneGainResult {
        return new GetMicrophoneGainResult(_o.microphoneGainList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMicrophoneGainResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMicrophoneGainResult: $.ComponentSpec[] = [
    new $.ComponentSpec("microphoneGainList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMicrophoneGainResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMicrophoneGainResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMicrophoneGainResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMicrophoneGainResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMicrophoneGainResult: $.ASN1Decoder<GetMicrophoneGainResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneGainResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneGainResult (el: _Element): GetMicrophoneGainResult {
    if (!_cached_decoder_for_GetMicrophoneGainResult) { _cached_decoder_for_GetMicrophoneGainResult = function (el: _Element): GetMicrophoneGainResult {
    let microphoneGainList!: MicrophoneGainList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "microphoneGainList": (_el: _Element): void => { microphoneGainList = _decode_MicrophoneGainList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMicrophoneGainResult,
        _extension_additions_list_spec_for_GetMicrophoneGainResult,
        _root_component_type_list_2_spec_for_GetMicrophoneGainResult,
        undefined,
    );
    return new GetMicrophoneGainResult(
        microphoneGainList,
        extensions
    );
}; }
    return _cached_decoder_for_GetMicrophoneGainResult(el);
}

let _cached_encoder_for_GetMicrophoneGainResult: $.ASN1Encoder<GetMicrophoneGainResult> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneGainResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneGainResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneGainResult (value: GetMicrophoneGainResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneGainResult) { _cached_encoder_for_GetMicrophoneGainResult = function (value: GetMicrophoneGainResult, elGetter: $.ASN1Encoder<GetMicrophoneGainResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MicrophoneGainList(value.microphoneGainList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMicrophoneGainResult(value, elGetter);
}


/* eslint-enable */
