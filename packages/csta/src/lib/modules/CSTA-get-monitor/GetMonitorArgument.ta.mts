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
 * @summary GetMonitorArgument
 * @description
 *
 * Service request (Table 15-8). No filter; lists all monitors.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMonitorArgument ::= SEQUENCE
 * {     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMonitorArgument {
    constructor (
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 15-8.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetMonitorArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetMonitorArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMonitorArgument`.
     * @returns {GetMonitorArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetMonitorArgument)]: (GetMonitorArgument)[_K] }): GetMonitorArgument {
        return new GetMonitorArgument(_o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMonitorArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMonitorArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMonitorArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMonitorArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMonitorArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMonitorArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMonitorArgument: $.ASN1Decoder<GetMonitorArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMonitorArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMonitorArgument (el: _Element): GetMonitorArgument {
    if (!_cached_decoder_for_GetMonitorArgument) { _cached_decoder_for_GetMonitorArgument = function (el: _Element): GetMonitorArgument {
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMonitorArgument,
        _extension_additions_list_spec_for_GetMonitorArgument,
        _root_component_type_list_2_spec_for_GetMonitorArgument,
        undefined,
    );
    return new GetMonitorArgument(
        extensions
    );
}; }
    return _cached_decoder_for_GetMonitorArgument(el);
}

let _cached_encoder_for_GetMonitorArgument: $.ASN1Encoder<GetMonitorArgument> | null = null;

/**
 * @summary Encodes a(n) GetMonitorArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMonitorArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetMonitorArgument (value: GetMonitorArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMonitorArgument) { _cached_encoder_for_GetMonitorArgument = function (value: GetMonitorArgument, elGetter: $.ASN1Encoder<GetMonitorArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMonitorArgument(value, elGetter);
}


/* eslint-enable */
