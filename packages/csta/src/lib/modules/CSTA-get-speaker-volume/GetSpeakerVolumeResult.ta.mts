/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SpeakerVolumeList, _decode_SpeakerVolumeList, _encode_SpeakerVolumeList } from "../CSTA-get-speaker-volume/SpeakerVolumeList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetSpeakerVolumeResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.13.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSpeakerVolumeResult ::= SEQUENCE
 * {    speakerVolumeList        SpeakerVolumeList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSpeakerVolumeResult {
    constructor (
        /**
         * @summary `speakerVolumeList`.
         * @description
         *
         * One entry per queried apparatus.
         * @public
         * @readonly
         */
        readonly speakerVolumeList: SpeakerVolumeList,
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
     * @summary Restructures an object into a GetSpeakerVolumeResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetSpeakerVolumeResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSpeakerVolumeResult`.
     * @returns {GetSpeakerVolumeResult}
     */
    public static _from_object (_o: { [_K in keyof (GetSpeakerVolumeResult)]: (GetSpeakerVolumeResult)[_K] }): GetSpeakerVolumeResult {
        return new GetSpeakerVolumeResult(_o.speakerVolumeList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetSpeakerVolumeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSpeakerVolumeResult: $.ComponentSpec[] = [
    new $.ComponentSpec("speakerVolumeList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetSpeakerVolumeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSpeakerVolumeResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSpeakerVolumeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSpeakerVolumeResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSpeakerVolumeResult: $.ASN1Decoder<GetSpeakerVolumeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSpeakerVolumeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSpeakerVolumeResult (el: _Element): GetSpeakerVolumeResult {
    if (!_cached_decoder_for_GetSpeakerVolumeResult) { _cached_decoder_for_GetSpeakerVolumeResult = function (el: _Element): GetSpeakerVolumeResult {
    let speakerVolumeList!: SpeakerVolumeList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "speakerVolumeList": (_el: _Element): void => { speakerVolumeList = _decode_SpeakerVolumeList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSpeakerVolumeResult,
        _extension_additions_list_spec_for_GetSpeakerVolumeResult,
        _root_component_type_list_2_spec_for_GetSpeakerVolumeResult,
        undefined,
    );
    return new GetSpeakerVolumeResult(
        speakerVolumeList,
        extensions
    );
}; }
    return _cached_decoder_for_GetSpeakerVolumeResult(el);
}

let _cached_encoder_for_GetSpeakerVolumeResult: $.ASN1Encoder<GetSpeakerVolumeResult> | null = null;

/**
 * @summary Encodes a(n) GetSpeakerVolumeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSpeakerVolumeResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetSpeakerVolumeResult (value: GetSpeakerVolumeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSpeakerVolumeResult) { _cached_encoder_for_GetSpeakerVolumeResult = function (value: GetSpeakerVolumeResult, elGetter: $.ASN1Encoder<GetSpeakerVolumeResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SpeakerVolumeList(value.speakerVolumeList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSpeakerVolumeResult(value, elGetter);
}


/* eslint-enable */
