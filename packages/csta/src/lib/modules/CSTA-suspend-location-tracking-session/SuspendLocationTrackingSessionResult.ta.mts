/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SuspendLocationTrackingSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendLocationTrackingSessionResult ::= SEQUENCE 
 * {    extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SuspendLocationTrackingSessionResult {
    constructor (
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SuspendLocationTrackingSessionResult
     * @description
     * 
     * This takes an `object` and converts it to a `SuspendLocationTrackingSessionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuspendLocationTrackingSessionResult`.
     * @returns {SuspendLocationTrackingSessionResult}
     */
    public static _from_object (_o: { [_K in keyof (SuspendLocationTrackingSessionResult)]: (SuspendLocationTrackingSessionResult)[_K] }): SuspendLocationTrackingSessionResult {
        return new SuspendLocationTrackingSessionResult(_o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SuspendLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuspendLocationTrackingSessionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SuspendLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuspendLocationTrackingSessionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuspendLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SuspendLocationTrackingSessionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuspendLocationTrackingSessionResult: $.ASN1Decoder<SuspendLocationTrackingSessionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendLocationTrackingSessionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendLocationTrackingSessionResult (el: _Element): SuspendLocationTrackingSessionResult {
    if (!_cached_decoder_for_SuspendLocationTrackingSessionResult) { _cached_decoder_for_SuspendLocationTrackingSessionResult = function (el: _Element): SuspendLocationTrackingSessionResult {
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SuspendLocationTrackingSessionResult,
        _extension_additions_list_spec_for_SuspendLocationTrackingSessionResult,
        _root_component_type_list_2_spec_for_SuspendLocationTrackingSessionResult,
        undefined,
    );
    return new SuspendLocationTrackingSessionResult(
        extensions
    );
}; }
    return _cached_decoder_for_SuspendLocationTrackingSessionResult(el);
}

let _cached_encoder_for_SuspendLocationTrackingSessionResult: $.ASN1Encoder<SuspendLocationTrackingSessionResult> | null = null;

/**
 * @summary Encodes a(n) SuspendLocationTrackingSessionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendLocationTrackingSessionResult, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendLocationTrackingSessionResult (value: SuspendLocationTrackingSessionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendLocationTrackingSessionResult) { _cached_encoder_for_SuspendLocationTrackingSessionResult = function (value: SuspendLocationTrackingSessionResult, elGetter: $.ASN1Encoder<SuspendLocationTrackingSessionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SuspendLocationTrackingSessionResult(value, elGetter);
}


/* eslint-enable */
