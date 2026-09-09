/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetRouteingModeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRouteingModeResult ::= SEQUENCE
 * {    routeingMode            BOOLEAN,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetRouteingModeResult {
    constructor (
        /**
         * @summary `routeingMode`.
         * @public
         * @readonly
         */
        readonly routeingMode: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetRouteingModeResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetRouteingModeResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRouteingModeResult`.
     * @returns {GetRouteingModeResult}
     */
    public static _from_object (_o: { [_K in keyof (GetRouteingModeResult)]: (GetRouteingModeResult)[_K] }): GetRouteingModeResult {
        return new GetRouteingModeResult(_o.routeingMode, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetRouteingModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRouteingModeResult: $.ComponentSpec[] = [
    new $.ComponentSpec("routeingMode", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetRouteingModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRouteingModeResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRouteingModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRouteingModeResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRouteingModeResult: $.ASN1Decoder<GetRouteingModeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRouteingModeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRouteingModeResult (el: _Element): GetRouteingModeResult {
    if (!_cached_decoder_for_GetRouteingModeResult) { _cached_decoder_for_GetRouteingModeResult = function (el: _Element): GetRouteingModeResult {
    let routeingMode!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "routeingMode": (_el: _Element): void => { routeingMode = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRouteingModeResult,
        _extension_additions_list_spec_for_GetRouteingModeResult,
        _root_component_type_list_2_spec_for_GetRouteingModeResult,
        undefined,
    );
    return new GetRouteingModeResult(
        routeingMode,
        extensions
    );
}; }
    return _cached_decoder_for_GetRouteingModeResult(el);
}

let _cached_encoder_for_GetRouteingModeResult: $.ASN1Encoder<GetRouteingModeResult> | null = null;

/**
 * @summary Encodes a(n) GetRouteingModeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRouteingModeResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetRouteingModeResult (value: GetRouteingModeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRouteingModeResult) { _cached_encoder_for_GetRouteingModeResult = function (value: GetRouteingModeResult, elGetter: $.ASN1Encoder<GetRouteingModeResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.routeingMode, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetRouteingModeResult(value, elGetter);
}


/* eslint-enable */
