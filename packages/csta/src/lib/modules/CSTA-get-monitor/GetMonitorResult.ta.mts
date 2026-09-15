/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    GetMonitorResult_crossRefIDorRegistrationData,
    _decode_GetMonitorResult_crossRefIDorRegistrationData,
    _encode_GetMonitorResult_crossRefIDorRegistrationData
} from "../CSTA-get-monitor/GetMonitorResult-crossRefIDorRegistrationData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetMonitorResult
 * @description
 *
 * Positive ack (Table 15-9): cross-ref or inline monitor list.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMonitorResult ::= SEQUENCE
 * {     crossRefIDorRegistrationData    CHOICE
 *     {    serviceCrossRefID    ServiceCrossRefID,    
 *         monitorList        MonitorList },
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMonitorResult {
    constructor (
        /**
         * @summary `crossRefIDorRegistrationData`.
         * @description
         *
         * `serviceCrossRefID` if Monitor Info will follow; `monitorList`
         * if inline. Mutually exclusive. (Type name says RegistrationData
         * but the CHOICE is monitor data.)
         * @public
         * @readonly
         */
        readonly crossRefIDorRegistrationData: GetMonitorResult_crossRefIDorRegistrationData,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 15-9.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetMonitorResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetMonitorResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMonitorResult`.
     * @returns {GetMonitorResult}
     */
    public static _from_object (_o: { [_K in keyof (GetMonitorResult)]: (GetMonitorResult)[_K] }): GetMonitorResult {
        return new GetMonitorResult(_o.crossRefIDorRegistrationData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMonitorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMonitorResult: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIDorRegistrationData", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMonitorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMonitorResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMonitorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMonitorResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMonitorResult: $.ASN1Decoder<GetMonitorResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMonitorResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMonitorResult (el: _Element): GetMonitorResult {
    if (!_cached_decoder_for_GetMonitorResult) { _cached_decoder_for_GetMonitorResult = function (el: _Element): GetMonitorResult {
    let crossRefIDorRegistrationData!: GetMonitorResult_crossRefIDorRegistrationData;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIDorRegistrationData": (_el: _Element): void => { crossRefIDorRegistrationData = _decode_GetMonitorResult_crossRefIDorRegistrationData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMonitorResult,
        _extension_additions_list_spec_for_GetMonitorResult,
        _root_component_type_list_2_spec_for_GetMonitorResult,
        undefined,
    );
    return new GetMonitorResult(
        crossRefIDorRegistrationData,
        extensions
    );
}; }
    return _cached_decoder_for_GetMonitorResult(el);
}

let _cached_encoder_for_GetMonitorResult: $.ASN1Encoder<GetMonitorResult> | null = null;

/**
 * @summary Encodes a(n) GetMonitorResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMonitorResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetMonitorResult (value: GetMonitorResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMonitorResult) { _cached_encoder_for_GetMonitorResult = function (value: GetMonitorResult, elGetter: $.ASN1Encoder<GetMonitorResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GetMonitorResult_crossRefIDorRegistrationData(value.crossRefIDorRegistrationData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMonitorResult(value, elGetter);
}


/* eslint-enable */
