/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RouteingCrossRefID, _decode_RouteingCrossRefID, _encode_RouteingCrossRefID } from "../CSTA-device-feature-types/RouteingCrossRefID.ta.mjs";

import { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";

import { ErrorValue, _decode_ErrorValue, _encode_ErrorValue } from "../CSTA-error-definition/ErrorValue.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RouteEndRequestArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteEndRequestArgument ::= SEQUENCE {
 *     crossRefIdentifier        RouteingCrossRefID,
 *     routeRegisterReqID         [ 0] IMPLICIT RouteRegisterReqID    OPTIONAL,
 *     errorValue            [ 1] ErrorValue                OPTIONAL,
 *     correlatorData            [ 2] IMPLICIT CorrelatorData        OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteEndRequestArgument {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: RouteingCrossRefID,
        /**
         * @summary `routeRegisterReqID`.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: OPTIONAL<RouteRegisterReqID>,
        /**
         * @summary `errorValue`.
         * @public
         * @readonly
         */
        readonly errorValue: OPTIONAL<ErrorValue>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteEndRequestArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteEndRequestArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteEndRequestArgument`.
     * @returns {RouteEndRequestArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteEndRequestArgument)]: (RouteEndRequestArgument)[_K] }): RouteEndRequestArgument {
        return new RouteEndRequestArgument(_o.crossRefIdentifier, _o.routeRegisterReqID, _o.errorValue, _o.correlatorData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteEndRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteEndRequestArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 24)),
    new $.ComponentSpec("routeRegisterReqID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("errorValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RouteEndRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteEndRequestArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteEndRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteEndRequestArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteEndRequestArgument: $.ASN1Decoder<RouteEndRequestArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteEndRequestArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteEndRequestArgument (el: _Element): RouteEndRequestArgument {
    if (!_cached_decoder_for_RouteEndRequestArgument) { _cached_decoder_for_RouteEndRequestArgument = function (el: _Element): RouteEndRequestArgument {
    let crossRefIdentifier!: RouteingCrossRefID;
    let routeRegisterReqID: OPTIONAL<RouteRegisterReqID>;
    let errorValue: OPTIONAL<ErrorValue>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_RouteingCrossRefID(_el); },
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = $._decode_implicit<RouteRegisterReqID>(() => _decode_RouteRegisterReqID)(_el); },
        "errorValue": (_el: _Element): void => { errorValue = $._decode_explicit<ErrorValue>(() => _decode_ErrorValue)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteEndRequestArgument,
        _extension_additions_list_spec_for_RouteEndRequestArgument,
        _root_component_type_list_2_spec_for_RouteEndRequestArgument,
        undefined,
    );
    return new RouteEndRequestArgument(
        crossRefIdentifier,
        routeRegisterReqID,
        errorValue,
        correlatorData,
        extensions
    );
}; }
    return _cached_decoder_for_RouteEndRequestArgument(el);
}

let _cached_encoder_for_RouteEndRequestArgument: $.ASN1Encoder<RouteEndRequestArgument> | null = null;

/**
 * @summary Encodes a(n) RouteEndRequestArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteEndRequestArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteEndRequestArgument (value: RouteEndRequestArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteEndRequestArgument) { _cached_encoder_for_RouteEndRequestArgument = function (value: RouteEndRequestArgument, elGetter: $.ASN1Encoder<RouteEndRequestArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteingCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.routeRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegisterReqID, $.BER)(value.routeRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.errorValue === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ErrorValue, $.BER)(value.errorValue, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteEndRequestArgument(value, elGetter);
}


/* eslint-enable */
