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
 * @summary ConcatenateMessageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConcatenateMessageResult ::= SEQUENCE
 * {    concatenatedMessage        MessageID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConcatenateMessageResult {
    constructor (
        /**
         * @summary `concatenatedMessage`.
         * @public
         * @readonly
         */
        readonly concatenatedMessage: MessageID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ConcatenateMessageResult
     * @description
     * 
     * This takes an `object` and converts it to a `ConcatenateMessageResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConcatenateMessageResult`.
     * @returns {ConcatenateMessageResult}
     */
    public static _from_object (_o: { [_K in keyof (ConcatenateMessageResult)]: (ConcatenateMessageResult)[_K] }): ConcatenateMessageResult {
        return new ConcatenateMessageResult(_o.concatenatedMessage, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ConcatenateMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConcatenateMessageResult: $.ComponentSpec[] = [
    new $.ComponentSpec("concatenatedMessage", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ConcatenateMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConcatenateMessageResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConcatenateMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConcatenateMessageResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConcatenateMessageResult: $.ASN1Decoder<ConcatenateMessageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConcatenateMessageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConcatenateMessageResult (el: _Element): ConcatenateMessageResult {
    if (!_cached_decoder_for_ConcatenateMessageResult) { _cached_decoder_for_ConcatenateMessageResult = function (el: _Element): ConcatenateMessageResult {
    let concatenatedMessage!: MessageID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "concatenatedMessage": (_el: _Element): void => { concatenatedMessage = _decode_MessageID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConcatenateMessageResult,
        _extension_additions_list_spec_for_ConcatenateMessageResult,
        _root_component_type_list_2_spec_for_ConcatenateMessageResult,
        undefined,
    );
    return new ConcatenateMessageResult(
        concatenatedMessage,
        extensions
    );
}; }
    return _cached_decoder_for_ConcatenateMessageResult(el);
}

let _cached_encoder_for_ConcatenateMessageResult: $.ASN1Encoder<ConcatenateMessageResult> | null = null;

/**
 * @summary Encodes a(n) ConcatenateMessageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConcatenateMessageResult, encoded as an ASN.1 Element.
 */
export
function _encode_ConcatenateMessageResult (value: ConcatenateMessageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConcatenateMessageResult) { _cached_encoder_for_ConcatenateMessageResult = function (value: ConcatenateMessageResult, elGetter: $.ASN1Encoder<ConcatenateMessageResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MessageID(value.concatenatedMessage, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConcatenateMessageResult(value, elGetter);
}


/* eslint-enable */
