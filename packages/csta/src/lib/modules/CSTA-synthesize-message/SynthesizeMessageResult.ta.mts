/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SynthesizeMessageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SynthesizeMessageResult ::= SEQUENCE
 * {    synthesizedMessage        MessageID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SynthesizeMessageResult {
    constructor (
        /**
         * @summary `synthesizedMessage`.
         * @public
         * @readonly
         */
        readonly synthesizedMessage: MessageID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SynthesizeMessageResult
     * @description
     * 
     * This takes an `object` and converts it to a `SynthesizeMessageResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SynthesizeMessageResult`.
     * @returns {SynthesizeMessageResult}
     */
    public static _from_object (_o: { [_K in keyof (SynthesizeMessageResult)]: (SynthesizeMessageResult)[_K] }): SynthesizeMessageResult {
        return new SynthesizeMessageResult(_o.synthesizedMessage, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SynthesizeMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SynthesizeMessageResult: $.ComponentSpec[] = [
    new $.ComponentSpec("synthesizedMessage", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SynthesizeMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SynthesizeMessageResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SynthesizeMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SynthesizeMessageResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SynthesizeMessageResult: $.ASN1Decoder<SynthesizeMessageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SynthesizeMessageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SynthesizeMessageResult (el: _Element): SynthesizeMessageResult {
    if (!_cached_decoder_for_SynthesizeMessageResult) { _cached_decoder_for_SynthesizeMessageResult = function (el: _Element): SynthesizeMessageResult {
    let synthesizedMessage!: MessageID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "synthesizedMessage": (_el: _Element): void => { synthesizedMessage = _decode_MessageID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SynthesizeMessageResult,
        _extension_additions_list_spec_for_SynthesizeMessageResult,
        _root_component_type_list_2_spec_for_SynthesizeMessageResult,
        undefined,
    );
    return new SynthesizeMessageResult(
        synthesizedMessage,
        extensions
    );
}; }
    return _cached_decoder_for_SynthesizeMessageResult(el);
}

let _cached_encoder_for_SynthesizeMessageResult: $.ASN1Encoder<SynthesizeMessageResult> | null = null;

/**
 * @summary Encodes a(n) SynthesizeMessageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynthesizeMessageResult, encoded as an ASN.1 Element.
 */
export
function _encode_SynthesizeMessageResult (value: SynthesizeMessageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SynthesizeMessageResult) { _cached_encoder_for_SynthesizeMessageResult = function (value: SynthesizeMessageResult, elGetter: $.ASN1Encoder<SynthesizeMessageResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MessageID(value.synthesizedMessage, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SynthesizeMessageResult(value, elGetter);
}


/* eslint-enable */
