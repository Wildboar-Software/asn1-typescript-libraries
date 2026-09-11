/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetSwitchingFunctionDevicesResult
 * @description
 *
 * Positive ack (Table 13-11). Correlates later Switching Function
 * Devices segments. If no devices match, a following segment still
 * arrives with an empty `deviceList`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionDevicesResult ::= SEQUENCE
 * {     serviceCrossRefID         ServiceCrossRefID,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSwitchingFunctionDevicesResult {
    constructor (
        /**
         * @summary `serviceCrossRefID`.
         * @description
         *
         * SF-allocated correlator for subsequent Switching Function
         * Devices services (ECMA-269 §12.3.29).
         * @public
         * @readonly
         */
        readonly serviceCrossRefID: ServiceCrossRefID,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 13-11.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetSwitchingFunctionDevicesResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetSwitchingFunctionDevicesResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSwitchingFunctionDevicesResult`.
     * @returns {GetSwitchingFunctionDevicesResult}
     */
    public static _from_object (_o: { [_K in keyof (GetSwitchingFunctionDevicesResult)]: (GetSwitchingFunctionDevicesResult)[_K] }): GetSwitchingFunctionDevicesResult {
        return new GetSwitchingFunctionDevicesResult(_o.serviceCrossRefID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetSwitchingFunctionDevicesResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSwitchingFunctionDevicesResult: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetSwitchingFunctionDevicesResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSwitchingFunctionDevicesResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSwitchingFunctionDevicesResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSwitchingFunctionDevicesResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSwitchingFunctionDevicesResult: $.ASN1Decoder<GetSwitchingFunctionDevicesResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionDevicesResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionDevicesResult (el: _Element): GetSwitchingFunctionDevicesResult {
    if (!_cached_decoder_for_GetSwitchingFunctionDevicesResult) { _cached_decoder_for_GetSwitchingFunctionDevicesResult = function (el: _Element): GetSwitchingFunctionDevicesResult {
    let serviceCrossRefID!: ServiceCrossRefID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "serviceCrossRefID": (_el: _Element): void => { serviceCrossRefID = _decode_ServiceCrossRefID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSwitchingFunctionDevicesResult,
        _extension_additions_list_spec_for_GetSwitchingFunctionDevicesResult,
        _root_component_type_list_2_spec_for_GetSwitchingFunctionDevicesResult,
        undefined,
    );
    return new GetSwitchingFunctionDevicesResult(
        serviceCrossRefID,
        extensions
    );
}; }
    return _cached_decoder_for_GetSwitchingFunctionDevicesResult(el);
}

let _cached_encoder_for_GetSwitchingFunctionDevicesResult: $.ASN1Encoder<GetSwitchingFunctionDevicesResult> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionDevicesResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionDevicesResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionDevicesResult (value: GetSwitchingFunctionDevicesResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionDevicesResult) { _cached_encoder_for_GetSwitchingFunctionDevicesResult = function (value: GetSwitchingFunctionDevicesResult, elGetter: $.ASN1Encoder<GetSwitchingFunctionDevicesResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceCrossRefID(value.serviceCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSwitchingFunctionDevicesResult(value, elGetter);
}


/* eslint-enable */
