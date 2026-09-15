/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LampModeList, _decode_LampModeList, _encode_LampModeList } from "../CSTA-get-lamp-mode/LampModeList.ta.mjs";

import { LampID, _decode_LampID, _encode_LampID } from "../CSTA-physical-device-feature/LampID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLampModeResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.7.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLampModeResult ::= SEQUENCE
 * {    lampModeList            LampModeList,
 *     lamp                LampID                    OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLampModeResult {
    constructor (
        /**
         * @summary `lampModeList`.
         * @description
         *
         * One entry per queried lamp.
         * @public
         * @readonly
         */
        readonly lampModeList: LampModeList,
        /**
         * @summary `lamp`.
         * @description
         *
         * Lamp identifier; also listed per entry in `lampModeList`.
         * @public
         * @readonly
         */
        readonly lamp: OPTIONAL<LampID>,
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
     * @summary Restructures an object into a GetLampModeResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLampModeResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLampModeResult`.
     * @returns {GetLampModeResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLampModeResult)]: (GetLampModeResult)[_K] }): GetLampModeResult {
        return new GetLampModeResult(_o.lampModeList, _o.lamp, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLampModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLampModeResult: $.ComponentSpec[] = [
    new $.ComponentSpec("lampModeList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lamp", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLampModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLampModeResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLampModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLampModeResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLampModeResult: $.ASN1Decoder<GetLampModeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLampModeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLampModeResult (el: _Element): GetLampModeResult {
    if (!_cached_decoder_for_GetLampModeResult) { _cached_decoder_for_GetLampModeResult = function (el: _Element): GetLampModeResult {
    let lampModeList!: LampModeList;
    let lamp: OPTIONAL<LampID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "lampModeList": (_el: _Element): void => { lampModeList = _decode_LampModeList(_el); },
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLampModeResult,
        _extension_additions_list_spec_for_GetLampModeResult,
        _root_component_type_list_2_spec_for_GetLampModeResult,
        undefined,
    );
    return new GetLampModeResult(
        lampModeList,
        lamp,
        extensions
    );
}; }
    return _cached_decoder_for_GetLampModeResult(el);
}

let _cached_encoder_for_GetLampModeResult: $.ASN1Encoder<GetLampModeResult> | null = null;

/**
 * @summary Encodes a(n) GetLampModeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLampModeResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLampModeResult (value: GetLampModeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLampModeResult) { _cached_encoder_for_GetLampModeResult = function (value: GetLampModeResult, elGetter: $.ASN1Encoder<GetLampModeResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LampModeList(value.lampModeList, $.BER),
            /* IF_ABSENT  */ ((value.lamp === undefined) ? undefined : _encode_LampID(value.lamp, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLampModeResult(value, elGetter);
}


/* eslint-enable */
