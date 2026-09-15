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
 * @summary RecordMessageResult
 * @description
 *
 * Identifier of the recorded message (ECMA-269 §26.1.9.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordMessageResult ::= SEQUENCE
 * {    resultingMessage        MessageID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RecordMessageResult {
    constructor (
        /**
         * @summary `resultingMessage`.
         * @description
         *
         * MessageID of the recording (ECMA-269 §26.1.9.2.1).
         *
         * @public
         * @readonly
         */
        readonly resultingMessage: MessageID,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RecordMessageResult
     * @description
     * 
     * This takes an `object` and converts it to a `RecordMessageResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordMessageResult`.
     * @returns {RecordMessageResult}
     */
    public static _from_object (_o: { [_K in keyof (RecordMessageResult)]: (RecordMessageResult)[_K] }): RecordMessageResult {
        return new RecordMessageResult(_o.resultingMessage, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RecordMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecordMessageResult: $.ComponentSpec[] = [
    new $.ComponentSpec("resultingMessage", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RecordMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecordMessageResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecordMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecordMessageResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecordMessageResult: $.ASN1Decoder<RecordMessageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordMessageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordMessageResult (el: _Element): RecordMessageResult {
    if (!_cached_decoder_for_RecordMessageResult) { _cached_decoder_for_RecordMessageResult = function (el: _Element): RecordMessageResult {
    let resultingMessage!: MessageID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "resultingMessage": (_el: _Element): void => { resultingMessage = _decode_MessageID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecordMessageResult,
        _extension_additions_list_spec_for_RecordMessageResult,
        _root_component_type_list_2_spec_for_RecordMessageResult,
        undefined,
    );
    return new RecordMessageResult(
        resultingMessage,
        extensions
    );
}; }
    return _cached_decoder_for_RecordMessageResult(el);
}

let _cached_encoder_for_RecordMessageResult: $.ASN1Encoder<RecordMessageResult> | null = null;

/**
 * @summary Encodes a(n) RecordMessageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordMessageResult, encoded as an ASN.1 Element.
 */
export
function _encode_RecordMessageResult (value: RecordMessageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordMessageResult) { _cached_encoder_for_RecordMessageResult = function (value: RecordMessageResult, elGetter: $.ASN1Encoder<RecordMessageResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MessageID(value.resultingMessage, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RecordMessageResult(value, elGetter);
}


/* eslint-enable */
