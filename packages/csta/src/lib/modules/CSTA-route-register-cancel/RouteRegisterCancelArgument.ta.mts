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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RouteRegisterCancelArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterCancelArgument ::= SEQUENCE
 * {    routeRegisterReqID        RouteRegisterReqID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRegisterCancelArgument {
    constructor (
        /**
         * @summary `routeRegisterReqID`.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: RouteRegisterReqID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteRegisterCancelArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRegisterCancelArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRegisterCancelArgument`.
     * @returns {RouteRegisterCancelArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteRegisterCancelArgument)]: (RouteRegisterCancelArgument)[_K] }): RouteRegisterCancelArgument {
        return new RouteRegisterCancelArgument(_o.routeRegisterReqID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRegisterCancelArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("routeRegisterReqID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RouteRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRegisterCancelArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRegisterCancelArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRegisterCancelArgument: $.ASN1Decoder<RouteRegisterCancelArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterCancelArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterCancelArgument (el: _Element): RouteRegisterCancelArgument {
    if (!_cached_decoder_for_RouteRegisterCancelArgument) { _cached_decoder_for_RouteRegisterCancelArgument = function (el: _Element): RouteRegisterCancelArgument {
    let routeRegisterReqID!: RouteRegisterReqID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = _decode_RouteRegisterReqID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRegisterCancelArgument,
        _extension_additions_list_spec_for_RouteRegisterCancelArgument,
        _root_component_type_list_2_spec_for_RouteRegisterCancelArgument,
        undefined,
    );
    return new RouteRegisterCancelArgument(
        routeRegisterReqID,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRegisterCancelArgument(el);
}

let _cached_encoder_for_RouteRegisterCancelArgument: $.ASN1Encoder<RouteRegisterCancelArgument> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterCancelArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterCancelArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterCancelArgument (value: RouteRegisterCancelArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterCancelArgument) { _cached_encoder_for_RouteRegisterCancelArgument = function (value: RouteRegisterCancelArgument, elGetter: $.ASN1Encoder<RouteRegisterCancelArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteRegisterReqID(value.routeRegisterReqID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRegisterCancelArgument(value, elGetter);
}


/* eslint-enable */
