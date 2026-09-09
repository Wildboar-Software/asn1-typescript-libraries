/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RequestTypes, _decode_RequestTypes, _encode_RequestTypes } from "../CSTA-system-register/RequestTypes.ta.mjs";

import { StatusFilter, _decode_StatusFilter, _encode_StatusFilter } from "../CSTA-system-register/StatusFilter.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SystemRegisterArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemRegisterArgument ::= SEQUENCE
 * {     requestTypes             RequestTypes,
 *     requestedStatusFilter         StatusFilter             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SystemRegisterArgument {
    constructor (
        /**
         * @summary `requestTypes`.
         * @public
         * @readonly
         */
        readonly requestTypes: RequestTypes,
        /**
         * @summary `requestedStatusFilter`.
         * @public
         * @readonly
         */
        readonly requestedStatusFilter: OPTIONAL<StatusFilter>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SystemRegisterArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SystemRegisterArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SystemRegisterArgument`.
     * @returns {SystemRegisterArgument}
     */
    public static _from_object (_o: { [_K in keyof (SystemRegisterArgument)]: (SystemRegisterArgument)[_K] }): SystemRegisterArgument {
        return new SystemRegisterArgument(_o.requestTypes, _o.requestedStatusFilter, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SystemRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SystemRegisterArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("requestTypes", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("requestedStatusFilter", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SystemRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SystemRegisterArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SystemRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SystemRegisterArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SystemRegisterArgument: $.ASN1Decoder<SystemRegisterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemRegisterArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemRegisterArgument (el: _Element): SystemRegisterArgument {
    if (!_cached_decoder_for_SystemRegisterArgument) { _cached_decoder_for_SystemRegisterArgument = function (el: _Element): SystemRegisterArgument {
    let requestTypes!: RequestTypes;
    let requestedStatusFilter: OPTIONAL<StatusFilter>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "requestTypes": (_el: _Element): void => { requestTypes = _decode_RequestTypes(_el); },
        "requestedStatusFilter": (_el: _Element): void => { requestedStatusFilter = _decode_StatusFilter(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SystemRegisterArgument,
        _extension_additions_list_spec_for_SystemRegisterArgument,
        _root_component_type_list_2_spec_for_SystemRegisterArgument,
        undefined,
    );
    return new SystemRegisterArgument(
        requestTypes,
        requestedStatusFilter,
        extensions
    );
}; }
    return _cached_decoder_for_SystemRegisterArgument(el);
}

let _cached_encoder_for_SystemRegisterArgument: $.ASN1Encoder<SystemRegisterArgument> | null = null;

/**
 * @summary Encodes a(n) SystemRegisterArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemRegisterArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SystemRegisterArgument (value: SystemRegisterArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemRegisterArgument) { _cached_encoder_for_SystemRegisterArgument = function (value: SystemRegisterArgument, elGetter: $.ASN1Encoder<SystemRegisterArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RequestTypes(value.requestTypes, $.BER),
            /* IF_ABSENT  */ ((value.requestedStatusFilter === undefined) ? undefined : _encode_StatusFilter(value.requestedStatusFilter, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SystemRegisterArgument(value, elGetter);
}


/* eslint-enable */
