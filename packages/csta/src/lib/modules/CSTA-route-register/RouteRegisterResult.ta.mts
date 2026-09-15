/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";

import {
    MediaClass,
    data /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_MediaClass,
    _encode_MediaClass
} from "../CSTA-media-services/MediaClass.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RouteRegisterResult
 * @description
 *
 * Positive ack (Table 20-3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterResult ::= SEQUENCE
 * {    routeRegisterReqID        RouteRegisterReqID,
 *     actualRouteingMediaClass    MediaClass                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRegisterResult {
    constructor (
        /**
         * @summary `routeRegisterReqID`.
         * @description
         *
         * SF-allocated registration ID. Valid until Cancel or Abort.
         * Unique across the CSTA service boundary.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: RouteRegisterReqID,
        /**
         * @summary `actualRouteingMediaClass`.
         * @description
         *
         * Media classes actually registered.
         * @public
         * @readonly
         */
        readonly actualRouteingMediaClass: OPTIONAL<MediaClass>,
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
     * @summary Restructures an object into a RouteRegisterResult
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRegisterResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRegisterResult`.
     * @returns {RouteRegisterResult}
     */
    public static _from_object (_o: { [_K in keyof (RouteRegisterResult)]: (RouteRegisterResult)[_K] }): RouteRegisterResult {
        return new RouteRegisterResult(_o.routeRegisterReqID, _o.actualRouteingMediaClass, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRegisterResult: $.ComponentSpec[] = [
    new $.ComponentSpec("routeRegisterReqID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("actualRouteingMediaClass", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RouteRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRegisterResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRegisterResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRegisterResult: $.ASN1Decoder<RouteRegisterResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterResult (el: _Element): RouteRegisterResult {
    if (!_cached_decoder_for_RouteRegisterResult) { _cached_decoder_for_RouteRegisterResult = function (el: _Element): RouteRegisterResult {
    let routeRegisterReqID!: RouteRegisterReqID;
    let actualRouteingMediaClass: OPTIONAL<MediaClass>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = _decode_RouteRegisterReqID(_el); },
        "actualRouteingMediaClass": (_el: _Element): void => { actualRouteingMediaClass = _decode_MediaClass(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRegisterResult,
        _extension_additions_list_spec_for_RouteRegisterResult,
        _root_component_type_list_2_spec_for_RouteRegisterResult,
        undefined,
    );
    return new RouteRegisterResult(
        routeRegisterReqID,
        actualRouteingMediaClass,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRegisterResult(el);
}

let _cached_encoder_for_RouteRegisterResult: $.ASN1Encoder<RouteRegisterResult> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterResult, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterResult (value: RouteRegisterResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterResult) { _cached_encoder_for_RouteRegisterResult = function (value: RouteRegisterResult, elGetter: $.ASN1Encoder<RouteRegisterResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteRegisterReqID(value.routeRegisterReqID, $.BER),
            /* IF_ABSENT  */ ((value.actualRouteingMediaClass === undefined) ? undefined : _encode_MediaClass(value.actualRouteingMediaClass, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRegisterResult(value, elGetter);
}


/* eslint-enable */
