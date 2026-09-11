/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SpeakerMuteList, _decode_SpeakerMuteList, _encode_SpeakerMuteList } from "../CSTA-get-speaker-mute/SpeakerMuteList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetSpeakerMuteResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.12.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSpeakerMuteResult ::= SEQUENCE
 * {    speakerMuteList            SpeakerMuteList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSpeakerMuteResult {
    constructor (
        /**
         * @summary `speakerMuteList`.
         * @description
         *
         * One entry per queried apparatus.
         * @public
         * @readonly
         */
        readonly speakerMuteList: SpeakerMuteList,
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
     * @summary Restructures an object into a GetSpeakerMuteResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetSpeakerMuteResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSpeakerMuteResult`.
     * @returns {GetSpeakerMuteResult}
     */
    public static _from_object (_o: { [_K in keyof (GetSpeakerMuteResult)]: (GetSpeakerMuteResult)[_K] }): GetSpeakerMuteResult {
        return new GetSpeakerMuteResult(_o.speakerMuteList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetSpeakerMuteResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSpeakerMuteResult: $.ComponentSpec[] = [
    new $.ComponentSpec("speakerMuteList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetSpeakerMuteResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSpeakerMuteResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSpeakerMuteResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSpeakerMuteResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSpeakerMuteResult: $.ASN1Decoder<GetSpeakerMuteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSpeakerMuteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSpeakerMuteResult (el: _Element): GetSpeakerMuteResult {
    if (!_cached_decoder_for_GetSpeakerMuteResult) { _cached_decoder_for_GetSpeakerMuteResult = function (el: _Element): GetSpeakerMuteResult {
    let speakerMuteList!: SpeakerMuteList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "speakerMuteList": (_el: _Element): void => { speakerMuteList = _decode_SpeakerMuteList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSpeakerMuteResult,
        _extension_additions_list_spec_for_GetSpeakerMuteResult,
        _root_component_type_list_2_spec_for_GetSpeakerMuteResult,
        undefined,
    );
    return new GetSpeakerMuteResult(
        speakerMuteList,
        extensions
    );
}; }
    return _cached_decoder_for_GetSpeakerMuteResult(el);
}

let _cached_encoder_for_GetSpeakerMuteResult: $.ASN1Encoder<GetSpeakerMuteResult> | null = null;

/**
 * @summary Encodes a(n) GetSpeakerMuteResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSpeakerMuteResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetSpeakerMuteResult (value: GetSpeakerMuteResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSpeakerMuteResult) { _cached_encoder_for_GetSpeakerMuteResult = function (value: GetSpeakerMuteResult, elGetter: $.ASN1Encoder<GetSpeakerMuteResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SpeakerMuteList(value.speakerMuteList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSpeakerMuteResult(value, elGetter);
}


/* eslint-enable */
