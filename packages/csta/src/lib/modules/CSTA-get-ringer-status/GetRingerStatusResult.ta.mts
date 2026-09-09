/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RingerStatusList, _decode_RingerStatusList, _encode_RingerStatusList } from "../CSTA-get-ringer-status/RingerStatusList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetRingerStatusResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRingerStatusResult ::= SEQUENCE
 * {    ringerStatusList        RingerStatusList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetRingerStatusResult {
    constructor (
        /**
         * @summary `ringerStatusList`.
         * @public
         * @readonly
         */
        readonly ringerStatusList: RingerStatusList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetRingerStatusResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetRingerStatusResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRingerStatusResult`.
     * @returns {GetRingerStatusResult}
     */
    public static _from_object (_o: { [_K in keyof (GetRingerStatusResult)]: (GetRingerStatusResult)[_K] }): GetRingerStatusResult {
        return new GetRingerStatusResult(_o.ringerStatusList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetRingerStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRingerStatusResult: $.ComponentSpec[] = [
    new $.ComponentSpec("ringerStatusList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetRingerStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRingerStatusResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRingerStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRingerStatusResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRingerStatusResult: $.ASN1Decoder<GetRingerStatusResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRingerStatusResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRingerStatusResult (el: _Element): GetRingerStatusResult {
    if (!_cached_decoder_for_GetRingerStatusResult) { _cached_decoder_for_GetRingerStatusResult = function (el: _Element): GetRingerStatusResult {
    let ringerStatusList!: RingerStatusList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ringerStatusList": (_el: _Element): void => { ringerStatusList = _decode_RingerStatusList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRingerStatusResult,
        _extension_additions_list_spec_for_GetRingerStatusResult,
        _root_component_type_list_2_spec_for_GetRingerStatusResult,
        undefined,
    );
    return new GetRingerStatusResult(
        ringerStatusList,
        extensions
    );
}; }
    return _cached_decoder_for_GetRingerStatusResult(el);
}

let _cached_encoder_for_GetRingerStatusResult: $.ASN1Encoder<GetRingerStatusResult> | null = null;

/**
 * @summary Encodes a(n) GetRingerStatusResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRingerStatusResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetRingerStatusResult (value: GetRingerStatusResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRingerStatusResult) { _cached_encoder_for_GetRingerStatusResult = function (value: GetRingerStatusResult, elGetter: $.ASN1Encoder<GetRingerStatusResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RingerStatusList(value.ringerStatusList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetRingerStatusResult(value, elGetter);
}


/* eslint-enable */
