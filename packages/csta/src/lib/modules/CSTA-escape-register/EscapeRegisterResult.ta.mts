/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { EscapeRegisterID, _decode_EscapeRegisterID, _encode_EscapeRegisterID } from "../CSTA-escape-types/EscapeRegisterID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary EscapeRegisterResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterResult ::= SEQUENCE 
 * {    escapeRegisterID        EscapeRegisterID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class EscapeRegisterResult {
    constructor (
        /**
         * @summary `escapeRegisterID`.
         * @public
         * @readonly
         */
        readonly escapeRegisterID: EscapeRegisterID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a EscapeRegisterResult
     * @description
     * 
     * This takes an `object` and converts it to a `EscapeRegisterResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EscapeRegisterResult`.
     * @returns {EscapeRegisterResult}
     */
    public static _from_object (_o: { [_K in keyof (EscapeRegisterResult)]: (EscapeRegisterResult)[_K] }): EscapeRegisterResult {
        return new EscapeRegisterResult(_o.escapeRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of EscapeRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EscapeRegisterResult: $.ComponentSpec[] = [
    new $.ComponentSpec("escapeRegisterID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of EscapeRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EscapeRegisterResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EscapeRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EscapeRegisterResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EscapeRegisterResult: $.ASN1Decoder<EscapeRegisterResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterResult (el: _Element): EscapeRegisterResult {
    if (!_cached_decoder_for_EscapeRegisterResult) { _cached_decoder_for_EscapeRegisterResult = function (el: _Element): EscapeRegisterResult {
    let escapeRegisterID!: EscapeRegisterID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "escapeRegisterID": (_el: _Element): void => { escapeRegisterID = _decode_EscapeRegisterID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EscapeRegisterResult,
        _extension_additions_list_spec_for_EscapeRegisterResult,
        _root_component_type_list_2_spec_for_EscapeRegisterResult,
        undefined,
    );
    return new EscapeRegisterResult(
        escapeRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_EscapeRegisterResult(el);
}

let _cached_encoder_for_EscapeRegisterResult: $.ASN1Encoder<EscapeRegisterResult> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterResult, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterResult (value: EscapeRegisterResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterResult) { _cached_encoder_for_EscapeRegisterResult = function (value: EscapeRegisterResult, elGetter: $.ASN1Encoder<EscapeRegisterResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EscapeRegisterID(value.escapeRegisterID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EscapeRegisterResult(value, elGetter);
}


/* eslint-enable */
