/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetAutoAnswerResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAutoAnswerResult ::= SEQUENCE
 * {    autoAnswerOn            BOOLEAN,
 *     numberOfRings            INTEGER                    OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAutoAnswerResult {
    constructor (
        /**
         * @summary `autoAnswerOn`.
         * @public
         * @readonly
         */
        readonly autoAnswerOn: BOOLEAN,
        /**
         * @summary `numberOfRings`.
         * @public
         * @readonly
         */
        readonly numberOfRings: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetAutoAnswerResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetAutoAnswerResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAutoAnswerResult`.
     * @returns {GetAutoAnswerResult}
     */
    public static _from_object (_o: { [_K in keyof (GetAutoAnswerResult)]: (GetAutoAnswerResult)[_K] }): GetAutoAnswerResult {
        return new GetAutoAnswerResult(_o.autoAnswerOn, _o.numberOfRings, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAutoAnswerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAutoAnswerResult: $.ComponentSpec[] = [
    new $.ComponentSpec("autoAnswerOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("numberOfRings", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetAutoAnswerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAutoAnswerResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAutoAnswerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAutoAnswerResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAutoAnswerResult: $.ASN1Decoder<GetAutoAnswerResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoAnswerResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoAnswerResult (el: _Element): GetAutoAnswerResult {
    if (!_cached_decoder_for_GetAutoAnswerResult) { _cached_decoder_for_GetAutoAnswerResult = function (el: _Element): GetAutoAnswerResult {
    let autoAnswerOn!: BOOLEAN;
    let numberOfRings: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "autoAnswerOn": (_el: _Element): void => { autoAnswerOn = $._decodeBoolean(_el); },
        "numberOfRings": (_el: _Element): void => { numberOfRings = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAutoAnswerResult,
        _extension_additions_list_spec_for_GetAutoAnswerResult,
        _root_component_type_list_2_spec_for_GetAutoAnswerResult,
        undefined,
    );
    return new GetAutoAnswerResult(
        autoAnswerOn,
        numberOfRings,
        extensions
    );
}; }
    return _cached_decoder_for_GetAutoAnswerResult(el);
}

let _cached_encoder_for_GetAutoAnswerResult: $.ASN1Encoder<GetAutoAnswerResult> | null = null;

/**
 * @summary Encodes a(n) GetAutoAnswerResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoAnswerResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoAnswerResult (value: GetAutoAnswerResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoAnswerResult) { _cached_encoder_for_GetAutoAnswerResult = function (value: GetAutoAnswerResult, elGetter: $.ASN1Encoder<GetAutoAnswerResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.autoAnswerOn, $.BER),
            /* IF_ABSENT  */ ((value.numberOfRings === undefined) ? undefined : $._encodeInteger(value.numberOfRings, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAutoAnswerResult(value, elGetter);
}


/* eslint-enable */
