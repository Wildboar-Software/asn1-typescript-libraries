/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetLastNumberDialedResult
 * @description
 *
 * Positive ack (ECMA-269 §22.1.12.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLastNumberDialedResult ::= SEQUENCE
 * {    numberDialed            DeviceID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLastNumberDialedResult {
    constructor (
        /**
         * @summary `numberDialed`.
         * @description
         *
         * Last number dialled at the device.
         * @public
         * @readonly
         */
        readonly numberDialed: DeviceID,
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
     * @summary Restructures an object into a GetLastNumberDialedResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetLastNumberDialedResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLastNumberDialedResult`.
     * @returns {GetLastNumberDialedResult}
     */
    public static _from_object (_o: { [_K in keyof (GetLastNumberDialedResult)]: (GetLastNumberDialedResult)[_K] }): GetLastNumberDialedResult {
        return new GetLastNumberDialedResult(_o.numberDialed, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLastNumberDialedResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLastNumberDialedResult: $.ComponentSpec[] = [
    new $.ComponentSpec("numberDialed", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLastNumberDialedResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLastNumberDialedResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLastNumberDialedResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLastNumberDialedResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLastNumberDialedResult: $.ASN1Decoder<GetLastNumberDialedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLastNumberDialedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLastNumberDialedResult (el: _Element): GetLastNumberDialedResult {
    if (!_cached_decoder_for_GetLastNumberDialedResult) { _cached_decoder_for_GetLastNumberDialedResult = function (el: _Element): GetLastNumberDialedResult {
    let numberDialed!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "numberDialed": (_el: _Element): void => { numberDialed = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLastNumberDialedResult,
        _extension_additions_list_spec_for_GetLastNumberDialedResult,
        _root_component_type_list_2_spec_for_GetLastNumberDialedResult,
        undefined,
    );
    return new GetLastNumberDialedResult(
        numberDialed,
        extensions
    );
}; }
    return _cached_decoder_for_GetLastNumberDialedResult(el);
}

let _cached_encoder_for_GetLastNumberDialedResult: $.ASN1Encoder<GetLastNumberDialedResult> | null = null;

/**
 * @summary Encodes a(n) GetLastNumberDialedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLastNumberDialedResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetLastNumberDialedResult (value: GetLastNumberDialedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLastNumberDialedResult) { _cached_encoder_for_GetLastNumberDialedResult = function (value: GetLastNumberDialedResult, elGetter: $.ASN1Encoder<GetLastNumberDialedResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.numberDialed, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLastNumberDialedResult(value, elGetter);
}


/* eslint-enable */
