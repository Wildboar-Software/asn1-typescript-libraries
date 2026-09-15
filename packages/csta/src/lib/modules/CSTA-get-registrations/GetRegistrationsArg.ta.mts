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



import { RegistrationTypeList, _decode_RegistrationTypeList, _encode_RegistrationTypeList } from "../CSTA-status-reporting/RegistrationTypeList.ta.mjs";

/**
 * @summary GetRegistrationsArg
 * @description
 *
 * Service request (Table 14-18). Omitted `requestedRegTypes`
 * means all registration types the SF supports.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRegistrationsArg ::= SEQUENCE
 * {     requestedRegTypes         RegistrationTypeList        OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetRegistrationsArg {
    constructor (
        /**
         * @summary `requestedRegTypes`.
         * @description
         *
         * Filter: EscapeRegister, IORegister, RouteRegister,
         * SysStatRegister. Omitted: all supported types.
         * @public
         * @readonly
         */
        readonly requestedRegTypes: OPTIONAL<RegistrationTypeList>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 14-18.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetRegistrationsArg
     * @description
     * 
     * This takes an `object` and converts it to a `GetRegistrationsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRegistrationsArg`.
     * @returns {GetRegistrationsArg}
     */
    public static _from_object (_o: { [_K in keyof (GetRegistrationsArg)]: (GetRegistrationsArg)[_K] }): GetRegistrationsArg {
        return new GetRegistrationsArg(_o.requestedRegTypes, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetRegistrationsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRegistrationsArg: $.ComponentSpec[] = [
        new $.ComponentSpec("requestedRegTypes", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetRegistrationsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRegistrationsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRegistrationsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRegistrationsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRegistrationsArg: $.ASN1Decoder<GetRegistrationsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRegistrationsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRegistrationsArg (el: _Element): GetRegistrationsArg {
    if (!_cached_decoder_for_GetRegistrationsArg) { _cached_decoder_for_GetRegistrationsArg = function (el: _Element): GetRegistrationsArg {
    let requestedRegTypes: OPTIONAL<RegistrationTypeList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "requestedRegTypes": (_el: _Element): void => { requestedRegTypes = _decode_RegistrationTypeList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRegistrationsArg,
        _extension_additions_list_spec_for_GetRegistrationsArg,
        _root_component_type_list_2_spec_for_GetRegistrationsArg,
        undefined,
    );
    return new GetRegistrationsArg(
        requestedRegTypes,
        extensions
    );
}; }
    return _cached_decoder_for_GetRegistrationsArg(el);
}

let _cached_encoder_for_GetRegistrationsArg: $.ASN1Encoder<GetRegistrationsArg> | null = null;

/**
 * @summary Encodes a(n) GetRegistrationsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRegistrationsArg, encoded as an ASN.1 Element.
 */
export
function _encode_GetRegistrationsArg (value: GetRegistrationsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRegistrationsArg) { _cached_encoder_for_GetRegistrationsArg = function (value: GetRegistrationsArg, elGetter: $.ASN1Encoder<GetRegistrationsArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestedRegTypes === undefined) ? undefined : _encode_RegistrationTypeList(value.requestedRegTypes, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetRegistrationsArg(value, elGetter);
}


/* eslint-enable */
