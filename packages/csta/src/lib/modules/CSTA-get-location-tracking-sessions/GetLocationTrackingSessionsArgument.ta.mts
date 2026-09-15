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
 * @summary GetLocationTrackingSessionsArgument
 * @description
 *
 * Optional extensions only (ECMA-269 §28.1.11.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingSessionsArgument ::= SEQUENCE
 * {    extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLocationTrackingSessionsArgument {
    constructor (
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLocationTrackingSessionsArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetLocationTrackingSessionsArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLocationTrackingSessionsArgument`.
     * @returns {GetLocationTrackingSessionsArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetLocationTrackingSessionsArgument)]: (GetLocationTrackingSessionsArgument)[_K] }): GetLocationTrackingSessionsArgument {
        return new GetLocationTrackingSessionsArgument(_o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLocationTrackingSessionsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLocationTrackingSessionsArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetLocationTrackingSessionsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLocationTrackingSessionsArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLocationTrackingSessionsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLocationTrackingSessionsArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLocationTrackingSessionsArgument: $.ASN1Decoder<GetLocationTrackingSessionsArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingSessionsArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingSessionsArgument (el: _Element): GetLocationTrackingSessionsArgument {
    if (!_cached_decoder_for_GetLocationTrackingSessionsArgument) { _cached_decoder_for_GetLocationTrackingSessionsArgument = function (el: _Element): GetLocationTrackingSessionsArgument {
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLocationTrackingSessionsArgument,
        _extension_additions_list_spec_for_GetLocationTrackingSessionsArgument,
        _root_component_type_list_2_spec_for_GetLocationTrackingSessionsArgument,
        undefined,
    );
    return new GetLocationTrackingSessionsArgument(
        extensions
    );
}; }
    return _cached_decoder_for_GetLocationTrackingSessionsArgument(el);
}

let _cached_encoder_for_GetLocationTrackingSessionsArgument: $.ASN1Encoder<GetLocationTrackingSessionsArgument> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingSessionsArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingSessionsArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingSessionsArgument (value: GetLocationTrackingSessionsArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingSessionsArgument) { _cached_encoder_for_GetLocationTrackingSessionsArgument = function (value: GetLocationTrackingSessionsArgument, elGetter: $.ASN1Encoder<GetLocationTrackingSessionsArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLocationTrackingSessionsArgument(value, elGetter);
}


/* eslint-enable */
