/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MicrophoneMuteList, _decode_MicrophoneMuteList, _encode_MicrophoneMuteList } from "../CSTA-get-microphone-mute/MicrophoneMuteList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetMicrophoneMuteResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneMuteResult ::= SEQUENCE
 * {    microphoneMuteList        MicrophoneMuteList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMicrophoneMuteResult {
    constructor (
        /**
         * @summary `microphoneMuteList`.
         * @description
         *
         * One entry per queried apparatus.
         * @public
         * @readonly
         */
        readonly microphoneMuteList: MicrophoneMuteList,
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
     * @summary Restructures an object into a GetMicrophoneMuteResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetMicrophoneMuteResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMicrophoneMuteResult`.
     * @returns {GetMicrophoneMuteResult}
     */
    public static _from_object (_o: { [_K in keyof (GetMicrophoneMuteResult)]: (GetMicrophoneMuteResult)[_K] }): GetMicrophoneMuteResult {
        return new GetMicrophoneMuteResult(_o.microphoneMuteList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMicrophoneMuteResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMicrophoneMuteResult: $.ComponentSpec[] = [
    new $.ComponentSpec("microphoneMuteList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMicrophoneMuteResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMicrophoneMuteResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMicrophoneMuteResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMicrophoneMuteResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMicrophoneMuteResult: $.ASN1Decoder<GetMicrophoneMuteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneMuteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneMuteResult (el: _Element): GetMicrophoneMuteResult {
    if (!_cached_decoder_for_GetMicrophoneMuteResult) { _cached_decoder_for_GetMicrophoneMuteResult = function (el: _Element): GetMicrophoneMuteResult {
    let microphoneMuteList!: MicrophoneMuteList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "microphoneMuteList": (_el: _Element): void => { microphoneMuteList = _decode_MicrophoneMuteList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMicrophoneMuteResult,
        _extension_additions_list_spec_for_GetMicrophoneMuteResult,
        _root_component_type_list_2_spec_for_GetMicrophoneMuteResult,
        undefined,
    );
    return new GetMicrophoneMuteResult(
        microphoneMuteList,
        extensions
    );
}; }
    return _cached_decoder_for_GetMicrophoneMuteResult(el);
}

let _cached_encoder_for_GetMicrophoneMuteResult: $.ASN1Encoder<GetMicrophoneMuteResult> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneMuteResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneMuteResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneMuteResult (value: GetMicrophoneMuteResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneMuteResult) { _cached_encoder_for_GetMicrophoneMuteResult = function (value: GetMicrophoneMuteResult, elGetter: $.ASN1Encoder<GetMicrophoneMuteResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MicrophoneMuteList(value.microphoneMuteList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMicrophoneMuteResult(value, elGetter);
}


/* eslint-enable */
