/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AttributeInfo, _decode_AttributeInfo, _encode_AttributeInfo } from "../CSTA-device-feature-types/AttributeInfo.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary QueryVoiceAttributeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryVoiceAttributeResult ::= SEQUENCE
 * {    attribute            AttributeInfo,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class QueryVoiceAttributeResult {
    constructor (
        /**
         * @summary `attribute`.
         * @public
         * @readonly
         */
        readonly attribute: AttributeInfo,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a QueryVoiceAttributeResult
     * @description
     * 
     * This takes an `object` and converts it to a `QueryVoiceAttributeResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QueryVoiceAttributeResult`.
     * @returns {QueryVoiceAttributeResult}
     */
    public static _from_object (_o: { [_K in keyof (QueryVoiceAttributeResult)]: (QueryVoiceAttributeResult)[_K] }): QueryVoiceAttributeResult {
        return new QueryVoiceAttributeResult(_o.attribute, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of QueryVoiceAttributeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QueryVoiceAttributeResult: $.ComponentSpec[] = [
    new $.ComponentSpec("attribute", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of QueryVoiceAttributeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QueryVoiceAttributeResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QueryVoiceAttributeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QueryVoiceAttributeResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QueryVoiceAttributeResult: $.ASN1Decoder<QueryVoiceAttributeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueryVoiceAttributeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueryVoiceAttributeResult (el: _Element): QueryVoiceAttributeResult {
    if (!_cached_decoder_for_QueryVoiceAttributeResult) { _cached_decoder_for_QueryVoiceAttributeResult = function (el: _Element): QueryVoiceAttributeResult {
    let attribute!: AttributeInfo;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "attribute": (_el: _Element): void => { attribute = _decode_AttributeInfo(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QueryVoiceAttributeResult,
        _extension_additions_list_spec_for_QueryVoiceAttributeResult,
        _root_component_type_list_2_spec_for_QueryVoiceAttributeResult,
        undefined,
    );
    return new QueryVoiceAttributeResult(
        attribute,
        extensions
    );
}; }
    return _cached_decoder_for_QueryVoiceAttributeResult(el);
}

let _cached_encoder_for_QueryVoiceAttributeResult: $.ASN1Encoder<QueryVoiceAttributeResult> | null = null;

/**
 * @summary Encodes a(n) QueryVoiceAttributeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryVoiceAttributeResult, encoded as an ASN.1 Element.
 */
export
function _encode_QueryVoiceAttributeResult (value: QueryVoiceAttributeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueryVoiceAttributeResult) { _cached_encoder_for_QueryVoiceAttributeResult = function (value: QueryVoiceAttributeResult, elGetter: $.ASN1Encoder<QueryVoiceAttributeResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeInfo(value.attribute, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QueryVoiceAttributeResult(value, elGetter);
}


/* eslint-enable */
